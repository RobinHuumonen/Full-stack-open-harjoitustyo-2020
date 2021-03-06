import React, { useState }  from 'react'
import '../../index.css'
import { createRecipe } from '../../reducers/recipeReducer'
import { initUsers} from '../../reducers/usersReducer'
import { useDispatch, useSelector } from 'react-redux'

function ClipboardDrop() {
  const dispatch = useDispatch()
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState('')

  const user = useSelector(state => state.user)

  if (file) {
    if (!fileName) {
      dispatch(createRecipe(file, new Date()))
      dispatch(initUsers(user))
    }
    dispatch(createRecipe(file, fileName))
    dispatch(initUsers(user))
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
    <div className="container-4">
      <p id="guidance-text">1. Name recipe before upload</p>
        <input className="grey-input-2"
          value={fileName}
          onChange={({ target }) => setFileName(target.value)}
          placeholder="Filename"
        />
      <textarea id="clipboard-textarea" placeholder="2. Click here to select and ctrl + v to upload image from clipboard" onPaste={handlePaste}></textarea>
    </div>
      
  )
}

export default ClipboardDrop