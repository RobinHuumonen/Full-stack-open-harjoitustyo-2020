import React, { useState }  from 'react'
import './Upload.css'
import { createRecipe } from '../../reducers/recipeReducer'
import { useDispatch } from 'react-redux'

function ClipboardDrop() {
  const dispatch = useDispatch()
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState('')

  if (file) {
    if (!fileName) {
      dispatch(createRecipe(file, new Date()))
    }
    dispatch(createRecipe(file, fileName))
    setFile(null)
    setFileName('')
  }

  const handlePaste = (event) => {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    let blob = null;

    for (const item of items) {
      if (item.type.indexOf('image') === 0) {
        blob = item.getAsFile();
      }
    }

    if (blob !== null) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        setFile(evt.target.result)
      }
      reader.readAsDataURL(blob)
    } 
  }

  return (
    <div className="container">
      <div id="clipboard-drop">
        <p className="guidance-text">1. Name recipe before upload</p>
          <input className="grey-input"
            value={fileName}
            onChange={({ target }) => setFileName(target.value)}
            placeholder="Filename"
          />
        <textarea id="clipboard-textarea" placeholder="2. Click here to select and ctrl + v to upload image from clipboard" onPaste={handlePaste}></textarea>
      </div>
    </div>
  )
}

export default ClipboardDrop