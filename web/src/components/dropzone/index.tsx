import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

const Dropzone = () => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return(
        <div {... getRootProps()}>
            <input {...getInputProps()}/>

            {
                isDragActive ?
                <p>Arraste os itens aqui</p> :
                <p>Arraste os arquivos aqui ou clique para escolher</p>
            }
        </div>
    )
}

export default Dropzone;