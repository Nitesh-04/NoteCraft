import { useEffect, useState } from "react";

export default function Time()
{
    const now = new Date().toLocaleTimeString();
    const [time,setTime] = useState(now);
    setInterval(updateTime,1000)
    function updateTime()
    {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
    return(
        <>
        <h2 className="timer">{time}</h2>
        </>
    )
}