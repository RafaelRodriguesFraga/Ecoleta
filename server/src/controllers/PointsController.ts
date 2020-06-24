import knex from "../database/connection";
import { Request, Response } from "express";

class PointsController {
  async create(request: Request, response: Response) {
    /* isso aqui seria o mesmo que isso aqui:
        const name = request.body.name e assim sucessivamente */
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      itens,
    } = request.body;

    const trx = await knex.transaction();

    /*Quando o nome da variavel é igual ao nome da 
         propriedade do objeto, a gente consegue omitir
         Chamado de Short Syntax */
    const point = {
      image: request.file.filename,
      name, // name = name
      email, // email = email
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    // INSERT INTO points .... VALUES (....)
    const insertedIds = await trx("points").insert(point);

    const point_id = insertedIds[0];

    /*Procura os ids dos itens do ponto de coleta que
        foram passados e retorna o id do item e o id do ponto
        de coleta onde estão esses itens */
    const pointItens = itens
      .split(",")
      .map((item: string) => Number(item.trim()))
      .map((item_id: number) => {
        return {
          item_id,
          point_id,
        };
      });

    //insere esses ids na tabela point_itens
    await trx("point_itens").insert(pointItens);

    await trx.commit();

    return response.json({
      id: point_id,
      ...point, //Spread Operator
    });
  }

  async show(request: Request, response: Response) {
    //const id = request.params.id (desestruturação)
    const { id } = request.params;

    const point = await knex("points").where("id", id).first();

    if (!point) {
      return response.status(400).json({ message: "Point not found." });
    }

    const serializedPoint = {
        ...point,
        image_url: `http://192.168.15.7:3333/uploads/${point.image}`,
      };
      
    /*
        SELECT * FROM itens 
        JOIN point_itens ON itens.id = point_itens.item_id
        WHERE point_itens.point_id = {id}
    */
    const itens = await knex("itens")
      .join("point_itens", "itens.id", "=", "point_itens.item_id")
      .where("point_itens.point_id", id)
      .select("itens.title");

    return response.json({ point: serializedPoint, itens });
  }

  async index(request: Request, response: Response) {
    const { city, uf, itens } = request.query;

    const parsedItems = String(itens)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await knex("points")
      .join("point_itens", "points.id", "=", "point_itens.point_id")
      .whereIn("point_itens.item_id", parsedItems)
      .where("city", String(city))
      .where("uf", String(uf))
      .distinct()
      .select("points.*");

    const serializedPoints = points.map((point) => {
      return {
        ...point,
        image_url: `http://192.168.15.7:3333/uploads/${point.image}`,
      };
    });

    return response.json(serializedPoints);
  }
}

export default PointsController;
