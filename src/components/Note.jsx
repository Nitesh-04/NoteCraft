

export default function Note(props)
{
    function handleDelete()
    { 
        props.onDelete(props.id); 
    }
    return(
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <h6>{props.timestamp}</h6>
                <button onClick={handleDelete}>Done</button>
            </div>
        </>
    )
}