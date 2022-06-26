import React, {FC} from 'react';
import {useState, useEffect} from "react";
import Circle from "./components/Circle";
import Ampm from "./components/Ampm";
import './App.css';

const App: FC = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [ampm, setAmpm] = useState('AM');

    useEffect(() => {
        const interval = setInterval(() => {
            const curHours = new Date().getHours();
            const curMinutes = new Date().getMinutes();
            const curSeconds = new Date().getSeconds();

            setHours(curHours);
            setMinutes(curMinutes);
            setSeconds(curSeconds);
            setAmpm(curHours > 12 ? 'PM' : 'AM');
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App">
            <div id="time">
                <Circle circleType="hours" circleValue={hours}/>
                <Circle circleType="minutes" circleValue={minutes}/>
                <Circle circleType="seconds" circleValue={seconds}/>
                <Ampm ampmValue={ampm} />
            </div>
        </div>
    );
}

export default App;
