import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./styles.css";
import { FiUpload } from "react-icons/fi";

const Dropzone = () => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]; //vai ser uma imagem só entao pega a primeira posição

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      
      {
          selectedFileUrl 
          ? <img src={selectedFileUrl} alt="Point thumbnail"/> 
          : (
            <p>
                <FiUpload />
                Imagem do estabelecimento
            </p>
            )
      }        
    </div>
  );
};

export default Dropzone;
