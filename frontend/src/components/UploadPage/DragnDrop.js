import React, { useState }  from 'react'
import { useDropzone } from 'react-dropzone'
import './Upload.css'
import { createRecipe } from '../../reducers/recipeReducer'
import { useDispatch } from 'react-redux'

function DragnDrop() {
  const dispatch = useDispatch()
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            src: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  if (files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      dispatch(createRecipe(files[i]))
    }
  }

  return (
    <div className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p id="drag-text">Drag 'n' drop some files here, or click to select files</p>
      </div>
      </div>
  );
}

export default DragnDrop