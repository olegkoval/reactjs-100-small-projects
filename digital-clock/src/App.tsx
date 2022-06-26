import React, {FC} from 'react';
import {useState, useEffect} from "react";
import Circle from "./components/Circle";
import Ampm from "./components/Ampm";
import './App.css';

type TInitValues = {
    hours: number,
    minutes: number,
    seconds: number,
    ampm: string,
}
const initValues: TInitValues = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
    ampm: new Date().getHours() > 12 ? 'PM' : 'AM'
}

const App: FC = () => {
    const [hours, setHours] = useState(initValues.hours);
    const [minutes, setMinutes] = useState(initValues.minutes);
    const [seconds, setSeconds] = useState(initValues.seconds);
    const [ampm, setAmpm] = useState(initValues.ampm);

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
