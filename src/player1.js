import React, { useState } from 'react'
import goku from './images/goku.png'
import vegeta from './images/vegeta.png'
import gohanssj from './images/gohanssj.png'
import vegetto from './images/vegetossj.png'
import gotenksssj3 from './images/gotenksssj3.png'
import piccolo from './images/piccolo.png'
import gogetassj from './images/gogetassj.png'
import gokussj2 from './images/gokussj2.png'
import gokussj3 from './images/gokussj3.png'
import useSound from 'use-sound';
import laser from './sounds/laser.mp3'
import gibberish from './sounds/gibberish.mp3'
import "./App.css"
import "./start.css"
import "./validation.css"


const Player1 = ({ showGamePlayer1 }) => {


    const [Character] = useState([
        { id: 0, content: <img className="" src={goku} alt="goku" />, name: "Goku" },
        { id: 1, content: <img className="" src={vegeta} alt="vegeta" />, name: "Vegeta" },
        { id: 2, content: <img className="" src={vegetto} alt="vegetto" />, name: "Vegetto super saiyan" },
        { id: 3, content: <img className="" src={gohanssj} alt="gohanssj" />, name: "Gohan ado super saiyan" },
        { id: 4, content: <img className="" src={gotenksssj3} alt="gotenksssj3" />, name: "Gotenks super saiyan 3" },
        { id: 5, content: <img className="" src={gokussj2} alt="gokussj2" />, name: "Goku super saiyan 2" },
        { id: 6, content: <img className="" src={piccolo} alt="piccolo" />, name: "Piccolo" },
        { id: 7, content: <img className="" src={gogetassj} alt="gogetassj" />, name: "Super Gogeta" },
        { id: 8, content: <img className="" src={gokussj3} alt="gokussj3" />, name: "Goku super saiyan 3" }
    ])

    const [showCharacter, setShowCharacter] = useState(0)

    const [show, setShow] = useState(true);


    //Music management
    const [playMusicLaser] = useSound(laser, {
        interrupt: true,
    });


    const [playMusicGibberish] = useSound(gibberish, {
        interrupt: true,
    });


    //Character's selection  
    const onClick = () => {
        playMusicLaser();
        if (Character[showCharacter].id !== 8) {
            setShowCharacter(showCharacter + 1);
        }
        else {
            setShowCharacter(0);
        }
    }

    const onClick2 = () => {
        playMusicLaser();
        if (Character[showCharacter].id === 0) {
            setShowCharacter(8);
        }
        else {
            setShowCharacter(showCharacter - 1);
        }
    }

    //Take off the button 'valider'
    const unShowPlayer1 = () => {
        playMusicGibberish();
        showGamePlayer1(show);
        setShow(false);

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center mb-3" style={{ color: "#ffff" }}>
                    P1 : {Character[showCharacter].name}
                </div>
            </div>
            <div className="row">
                <div className="col-2 align-self-center">
                    {show === true && <span className="chevron left" onClick={onClick2}></span>}
                </div>
                <div className="col-7 mb-3" style={{ transform: "translate(6%, 0%)" }}>
                    {Character[showCharacter].content}
                </div>
                <div className="col-1 align-self-center">
                    {show === true && <span className="chevron right" onClick={onClick}></span>}
                </div>
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    {show === true && <div className="btn style-1">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <span onClick={unShowPlayer1}>Valider</span>
                    </div>}
                </div>
                <div className="col-4"></div>
            </div>
        </div>


    )
}
export default Player1;