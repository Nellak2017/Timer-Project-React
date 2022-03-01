// Timer Component Modeled after the Timer in DuckDuckGo
import React, { useState } from 'react';
import {
    GridLayout,
    TimerContainer,
    PlayPauseContainer,
    TimerCountdown,
    TimerReset,
    ResetBtn,
    PlusOne,
    TimerInput,
    TimeInput,
    TimeInputField,
    TimeDisplayText,
    TimeDisplayFlex,
    Label
} from "./Timer.elements";
// TODO:
// import playbutton from react components
// figure out how to make a circular display
// get sound
// Add drag and drop functionality

function Timer() {
    /*
    // Allowed states for the Timer:

    // Initial: 0
    // Playing: 1
    // Paused: 2
    // Alarm: 3

    // Allowed options for Timer:

    // 0 -> (1,7,4); Initial state can go to Play, X, +
    // 1 -> (2,4,5,3); Playing state can go to Paused, +, +1, or wait until time runs out
    // 2 -> (1,4,5,6); Paused state can go to Playing, +, +1, or RESET
    // 3 -> (6,4); Alarm can go to RESET or + 

    // Allowed concurrent states:
    // (a,b,c) = (initial,playing,alarm) ()(bool)
    // 0 -> (0,2) => (1,0,0) initial state and paused are ok, initial and !playing and !alarm are true
    // 1 -> (1,3) => (0,1,0) playing and alarming is ok, !initial and playing and !alarm are true
    // 2 -> (2) => (0,0,0) when paused after init, !initial and !playing and !alarm are true
    // 3 -> (3,1) => (0,1,1) playing and alarming is ok, !initial and playing and alarm are true

    // State Transition Chart for Timer:

    // (Initial State: 0 -> (1,7,4)). Initial State = true; playing = false;  
    // (Press Play: 1 -> (2,4,5,wait)). Initial State = false; playing = true;
    //  (Press +1: 5 -> 5). Add 1 minute to current time
    //  (Press Pause: 2 -> (1,4,5,6)). Initial State = false; playing = false;
    //      (Press RESET: 6 -> 0). Resets the Timer to initial conditions
    //  (Wait until time runs out:3). alarm = true; // play the alarm sound, change Play logo to green check logo
    // (Press X: 7). Component is unmounted from DOM
    // (Press +: 4). New Timer is added to DOM
    */

    const [initial, setInitial] = useState(true);
    const [playing, setPlaying] = useState(false);
    const [alarm, setAlarm] = useState(false);
    const [time, setTime] = useState(0); // use Time object

    return (
        <GridLayout>
            <TimerContainer>
                <PlayPauseContainer>
                    <div>Play</div>
                </PlayPauseContainer>
                <TimerCountdown>
                    {(() => {
                        // If Initial State
                        if (initial && !playing && !alarm) {
                            return (
                                <>
                                    <TimerInput />
                                    <TimeInputField>
                                        <TimeInput value = {"0"}/>
                                        <TimeInput value = {"0"}/>
                                        <TimeInput value = {"0"}/>
                                    </TimeInputField>
                                </>
                            )
                        } // If Playing 
                        else if (!initial && playing && !alarm) {
                            return (
                                <div>otherCase</div>
                            )
                        } // If Paused 
                        else if (!initial && !playing && !alarm) {
                            return (
                                <div>catch all</div>
                            )
                        }// If Alarm 
                        else if (!initial && playing && alarm) {
                            return (
                                <div>catch all</div>
                            )
                        }// Else assume you are in initial state 
                        else {
                            return (
                                <div>catch all</div>
                            )
                        }
                    })()}
                </TimerCountdown>
                <TimerReset>
                    <ResetBtn>Reset</ResetBtn>
                    <PlusOne>+1</PlusOne>
                </TimerReset>
            </TimerContainer>
        </GridLayout>
    )
};

export default Timer;