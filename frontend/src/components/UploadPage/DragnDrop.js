import React, { useState }  from 'react'
import { useDropzone } from 'react-dropzone'
import '../../index.css'
import { createRecipe } from '../../reducers/recipeReducer'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../reducers/notificationReducer'

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

  if (files.length === 1) {
    dispatch(createRecipe(files[0]))
  } else if (files.length > 1) {
    dispatch(setNotification("Too many files!", 5))
  }

  return (
      <div {...getRootProps({className: 'container-4'})}>
        <input {...getInputProps()} />
        <p id="drag-text">Drag 'n' drop (1) image here, or click to select image</p>
      </div>
     
  );
}

export default DragnDrop