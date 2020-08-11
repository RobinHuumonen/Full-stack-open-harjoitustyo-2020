import React, { useState }  from 'react'
import { useDropzone } from 'react-dropzone'
import '../../index.css'
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
      <div {...getRootProps({className: 'container-4'})}>
        <input {...getInputProps()} />
        <p id="drag-text">Drag 'n' drop some images here, or click to select images</p>
      </div>
     
  );
}

export default DragnDrop