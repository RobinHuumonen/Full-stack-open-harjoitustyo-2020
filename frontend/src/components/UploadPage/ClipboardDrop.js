import React, { useState }  from 'react'
import './Upload.css'
import { createRecipe } from '../../reducers/recipeReducer'
import { useDispatch } from 'react-redux'

function ClipboardDrop() {
  const dispatch = useDispatch()
  const [file, setFile] = useState(null)

  const name = Date.now()
  if (file) {
    dispatch(createRecipe(file, name))
  }
  
  const handlePaste = (event) => {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    let blob = null;

    for (const item of items) {
      if (item.type.indexOf('image') === 0) {
        blob = item.getAsFile();
      }
    }

    // load image if there is a pasted image
    if (blob !== null) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        /* console.log(evt.target.result); // data url! */
        setFile(evt.target.result)
      }
      reader.readAsDataURL(blob)
    } 
  }

  return (
    <div className="container">
      <div id="clipboard-drop">
        <textarea id="clipboard-textarea" placeholder="Type a message" onPaste={handlePaste}></textarea>
      </div>
    </div>
  )
}

export default ClipboardDrop