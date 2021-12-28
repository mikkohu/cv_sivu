import React, { useState, useEffect } from "react";

export default function CommandConsole() {
    const [commandLog, setCommandLog] = useState([]);

    //Submithandleri.
    //Lisää `'komentorivillä' annetun komennon konsolilistaan
    const handleSubmit = event => {
        event.preventDefault();
        setCommandLog([...commandLog, event.target[0].value]);
    }

    //li-array annetuista komennoista
    const commandList = commandLog.map(
        command => <li key={command + (commandLog ? commandLog.length : 0)}>{command}</li>
    )

    return (
        <div className="console">
            <ul>{commandList}</ul>
            <form onSubmit={handleSubmit}>
                <input name='cmdLine'></input>
                <button type="submit">Submit ny sitte</button>
            </form>
        </div>
    )
}