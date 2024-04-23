import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

export default function MakeNote(props)
{
    const timestamp = new Date().toLocaleString();

    const [isExpanded,setExpanded] = useState(false);

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
        setExpanded(false)
    }


    return(
        <>
            <form>

                { isExpanded && (
                    <input name="title" 
                        value={note.title} 
                        onChange={handleChange} 
                        placeholder="Title" 
                        spellCheck="false" />
                )}
                <textarea 
                    name="content" 
                    value={note.content}
                    onClick={() => setExpanded(true)}
                    placeholder="Add note ...." 
                    rows= {isExpanded ? "3" :"1"}
                    onChange={handleChange}
                    spellCheck="false">
                </textarea>

                {isExpanded && (<button onClick={newNote}><AddIcon className="plus"/></button>)}
            </form>
        </>
    )
}