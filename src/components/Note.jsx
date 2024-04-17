
import content from "./Content";

export default function Note(props)
{
    return(
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.notes}</p>
            </div>
        </>
    )
}