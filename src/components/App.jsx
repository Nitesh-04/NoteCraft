import Footer from "./Footer"
import Header from "./Header"
import Note from "./Note"
import content from "./Content"


function App() {

  return (
    <>  
      <Header/>
      {content.map(createNote)}

      {/* 
      or use 
      {content.map(contents =>
          <Note
            key={contents.id} 
            title={contents.title} 
            notes={contents.note} 
          />
      }
      */}

      <Footer/>
    </>
  )
}

export default App

  function createNote(contents)
  {
      return (
        <Note
          key={contents.id} 
          title={contents.title} 
          notes={contents.note} 
        />
      )
  }
