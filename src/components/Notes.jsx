import listIcon from './../assets/images/list.svg'
import gridIcon from './../assets/images/grid.svg'
import { useState } from 'react'
import NotesItem from './NotesItem'

const Notes = ({notes, editNote}) => {
  const [isList, setIsList] = useState(false)
    
  return (
    <div className="container notes">
        <div className="notes__top">
            <h2>Все заметки</h2>
            <button onClick={() => setIsList(!isList)}>
                <img src={!isList ? listIcon : gridIcon} alt="" />
                {!isList ? 'Список' : 'Сетка'}
            </button>
        </div>
        <div className={`notes__list ${!isList ? 'list' : ''}`}>
            { notes.map((note) => (
              <NotesItem note={note} key={note.id} edit={editNote}/>
            )) }
        </div>
    </div>
  )
}

export default Notes