import { useState } from "react"
import { v4 } from "uuid"

const Modal = ({ closeModal, addOrChangeNote, isEdit, editNote }) => {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("") 
  
  const addOrChange = () => {
    const note = {
        id: editNote?.id ?? v4(),
        title: title,
        text: text,
        date: new Date().toLocaleDateString()
    }
    addOrChangeNote(note)
    closeModal()
  }
    
  return (
    <div className="modal" onClick={() => closeModal()}>
        <div className="modal__block" onClick={(event) => event.stopPropagation()}>
            <h2>{!isEdit ? 'Добавить' : 'Изменить'} заметку</h2>
            <div className="modal__block-inputs">
                <label>
                    <input 
                        type="text"
                        placeholder="Заголовок"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <span>Заголовок</span>
                </label>
                <label>
                    <input 
                        type="text"
                        placeholder="Содержимое"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <span>Содержимое</span>
                </label>
            </div>
            <div className="modal__block-btns">
                <button className="red" onClick={() => closeModal()}>Отмена</button>
                <button disabled={text && title ? false : true} className="purple" onClick={() => addOrChange()}>{!isEdit ? 'Добавить' : 'Изменить'}</button>
            </div>
        </div>
    </div>
  )
}

export default Modal