import express from 'express';
import PointsController from './controllers/PointsController';
import ItensController from './controllers/ItensController';
import multer from 'multer';
import multerConfig from './config/multer';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itensController = new ItensController();

routes.get("/itens", itensController.index);

routes.post("/points", upload.single('image'), pointsController.create);
routes.get("/points/:id", pointsController.show);
routes.get("/points", pointsController.index);

export default routes;