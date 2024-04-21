import React, { useState } from "react";

export default function MakeNote(props)
{

    const timestamp = new Date().toLocaleString();

    const [note,setNote] = useState({
        title:"",
        content:"",
        time :""
    })

    function handleChange(e)
    {
        const {name,value} = e.target;
        setNote({ ...note,
             [name]: value,
              time:timestamp,
            });
    }

    function newNote(e)
    {   
        e.preventDefault();
        props.onAdd(note);
        setNote({
            title:"",
            content:"",
            time :""
        })
    }


    return(
        <>
            <form>
                <input name="title" value={note.title} onChange={handleChange} placeholder="Title" spellCheck="false" />
                <textarea 
                    name="content" 
                    value={note.content} 
                    placeholder="Your note here ...." 
                    rows="3"
                    onChange={handleChange}
                    spellCheck="false">
                </textarea>
                <button onClick={newNote}>Add</button>
            </form>
        </>
    )
}