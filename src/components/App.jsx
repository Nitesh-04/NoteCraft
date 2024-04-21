import Footer from "./Footer"
import Header from "./Header"
import Note from "./Note"
import MakeNote from "./MakeNote"
import { useState } from "react"


function App() {

  const [notes,setNotes] = useState([])

  function addNote(newNote)
  {
      setNotes(prevNotes =>
      {
         return [...prevNotes,newNote]
      })
  }

  function deleteNode(id)
  {
      setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => index !== id);
      })
  }

  return (
    <>  
      <Header/>
      <MakeNote onAdd= {addNote}/>
      {notes.map((noteItem,index) =>
        <Note
          key= {index}
          id = {index}
          title={noteItem.title}
          content={noteItem.content}
          timestamp={noteItem.time}
          onDelete={deleteNode} 
          />
      )}
      <Footer/>
    </>
  )
}

export default App
