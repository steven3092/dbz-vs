import React, { useState, useEffect } from 'react'
import "./start.css"
import useSound from 'use-sound';
import smash from './sounds/smash.m4a'
import magnetism from './sounds/magnetism.mp3'
import Player1 from "./player1.js";
import Player2 from "./player2.js";
import Modal from 'react-bootstrap/Modal'


const Game = () => {
    const [LifeP1, setLifeP1] = useState(100);
    const [LifeP2, setLifeP2] = useState(100);

    const [isActive, setIsActive] = useState(false);

    const [show, setShow] = useState(true);

    const [countDown, setCountDown] = useState(5);

    const [mouse, setMouse] = useState(true);

    const [showGamePlayer1, setShowGamePlayer1] = useState(false);
    const [showGamePlayer2, setShowGamePlayer2] = useState(false);

    //const [On, setOn] = useState(true);



    useEffect(() => {
        const timer =
            isActive && countDown > 0 && setInterval(() => setCountDown(countDown - 1), 1000);
        return () => clearInterval(timer);
    }, [countDown, isActive]);


    //Game management
    useEffect(() => {
        var testA = "a";
        const keyPressedP1 = (event) => {
            var code = event.key;
            if (testA === code && code === 'a') { //for the key 'a'
                testA = "e";
                setLifeP2(LifeP2 => LifeP2 - 1);
            }
            else if (testA === code && code === 'e') { //for the 'e'
                testA = "a";
                setLifeP2(LifeP2 => LifeP2 - 1);
            }
        }
        countDown === 0 && document.addEventListener('keypress', keyPressedP1);
    }, [countDown])

    useEffect(() => {
        var testB = "i";
        const keyPressedP2 = (event) => {
            var code = event.key;
            if (testB === code && code === 'i') { //for the key 'i'
                testB = "p";
                setLifeP1(LifeP1 => LifeP1 - 1);
            }
            else if (testB === code && code === 'p') { //for the 'p'
                testB = "i";
                setLifeP1(LifeP1 => LifeP1 - 1);
            }
        }
        countDown === 0 && document.addEventListener('keypress', keyPressedP2);
    }, [countDown])

    // useEffect(() => {
    //     const timerGame =
    //         countDown === 0 && counterGame <= 9 && setInterval(() => setCounterGame(counterGame + 1), 1000);
    //     return () => clearInterval(timerGame);
    // }, [countDown, counterGame]);


    //Music management
    const [playMusicSmash] = useSound(smash, {
        interrupt: true,
    });

    const [playMusicMagnetism, { pause }] = useSound(magnetism, {
        interrupt: true,
    });

    const onMouse = () => {
        if (mouse === true) {
            playMusicMagnetism();
            setMouse(!mouse);
        }
        else if (mouse === false) {
            pause();
            setMouse(!mouse);
        }
    }

    const gameTriggered = () => {
        playMusicSmash();
        setIsActive(true);
    }

    const endGame = () => {
        if (LifeP2 === 0) {
            alert("Congratulation P1 won !!")
        } else if (LifeP1 === 0) {
            alert("Congratulation P2 won !!")
        }
    }

    return (
        <div className="col">
            { showGamePlayer1 && showGamePlayer2 &&
                <div className="row" >
                    <div className="col-5 text-center my-auto">
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${LifeP1}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-2 text-center my-auto" style={{ color: 'white', fontWeight: "700", fontSize: "xx-large" }}>
                        {countDown}
                    </div>
                    <div className="col-5 text-center my-auto">
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${LifeP2}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            }
            <div className="row">
                <div className="col-5 text-center my-auto">
                    <Player1 showGamePlayer1={setShowGamePlayer1} />
                </div>
                <div className="col-2 text-center my-auto" >
                    {showGamePlayer1 && showGamePlayer2 && <button className="start" onClick={gameTriggered} onMouseEnter={onMouse} onMouseOut={onMouse}>Start</button>}
                </div>

                <div className="col-5 text-center my-auto">
                    <Player2 showGamePlayer2={setShowGamePlayer2} />
                </div>
            </div>
            {
                showGamePlayer1 && showGamePlayer2 &&
                <Modal show={show} onHide={() => setShow(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Game's Rules</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        After the count down at 0 :<br /><br />

                        P1 : Hit A and E on the keyboard to fight your ennemy !<br />
                        P2 : Hit I and P on the keyboard to fight your ennemy !<br /><br />

                        The first who reduces LP's opponent at 0, win !!!<br /><br />

                        PS : Don't forget to click the button at the top to be in an immersive gameplay !
                        </Modal.Body>
                </Modal>
            }

            {/* { On &&
                <Modal show={show} onHide={() => setShow(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Winner</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        You won !!
                        </Modal.Body>
                </Modal>
            } */}
            { endGame()}
        </div >
    )
}
export default Game;