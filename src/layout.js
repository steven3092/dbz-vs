import React, { useState } from 'react'
import "./App.css"
import dbzvs from './images/dbzvs.png'
import DbzMain from './sounds/dbzMain.mp3'
import useSound from 'use-sound';

const Layout = () => {

    const [click, setClick] = useState(true);

    // Music management
    const [playMusic, { stop }] = useSound(DbzMain, {
        interrupt: true,
        volume: 0.5
    });

    const onClick = () => {
        if (click === true) {
            playMusic();
            setClick(!click);
        }
        else if (click === false) {
            stop();
            setClick(!click);
        }
    }

    return (
        <div className="jumbotron">
            <button className="badge bg-danger" onClick={onClick} style={{ color: "white", top: "0px", left: "0px", position: "fixed" }}>Click me !</button>
            <div className="text-center">
                <img style={{ transform: "translate(0%, -30%)" }} className="dbzvs" src={dbzvs} alt="dbzvs" />
            </div>
        </div>
    )
}
export default Layout;