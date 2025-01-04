import { useEffect, useState } from 'react'
import Header from './components/Header'
import Notes from './components/Notes'
import Modal from './components/Modal'
// props - реквизиты
// props drilling 
const App = () => {
  const setLS = () => localStorage.notes = JSON.stringify(notes)
  const getLS = () => localStorage.notes ? JSON.parse(localStorage.notes) : []
  const [notes, setNotes] = useState(getLS)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  
  useEffect(() => {
    setLS()
  }, [notes])
  
  
  const openModalHandler = () => {
    setIsModalOpen(true)
    setIsEdit(false)
  }

  const closeModalHandler = () => {
    setIsModalOpen(false)
    setIsEdit(false)
  }

  const addOrChangeNoteHandler = (note) => {
    if(editNote?.id){
      const updatedNotes = notes.map(item => {
        if(item.id === note.id){
          return note
        }
        return item
      })
      setNotes(updatedNotes)
    }else setNotes([...notes, note])
    setIsEdit(false)
    setEditNote(null)
  }

  const [editNote, setEditNote] = useState(null)  
  const editNoteHandler = (note) => {
    setEditNote(note);
    setIsModalOpen(true)
    setIsEdit(true)
  }
  
  return (
    <>
      <Header />
      <Notes notes={notes} editNote={editNoteHandler}/>
      {
        isModalOpen && <Modal
          closeModal={closeModalHandler}
          addOrChangeNote={addOrChangeNoteHandler}
          isEdit={isEdit}
          editNote={editNote}
        />
      }
      <button className="add-note" onClick={() => openModalHandler()}>
        <img src="src\assets\images\edit.svg" alt="" />
      </button>
    </>
  )
}

export default App