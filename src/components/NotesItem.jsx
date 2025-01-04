const NotesItem = ({note, edit}) => {
    
  return (
    <div className="notes__item">
        <div className="notes__item-top">
            <h2>{note.title}</h2>
            <span>{note.date}</span>
        </div>
        <p>{note.text}</p>
        <div className="notes__item-btns">
            <button className="purple" onClick={() => edit(note)}>
                <img src="src\assets\images\edit.svg" alt="" />
                РЕДАКТИРОВАТЬ
            </button>
            <button className="red">
                <img src="src\assets\images\del.svg" alt="" />
                Удалить
            </button>
        </div>
    </div>
  )
}

export default NotesItem