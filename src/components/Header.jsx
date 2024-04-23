import Time from "./Time";
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';

export default function Header()
{

    return(
        <>
            <header>
                <ChecklistRtlIcon className="check"/> <h1>NoteCraft</h1> <Time/> <br></br>
            </header>
        </>
    )
}