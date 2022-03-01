// Styles for Timer Component
import styled from 'styled-components';

// Layout for the Timer Component, it is going to be layed out in a Grid
export const GridLayout = styled.main`
    // Color Variables
    --primaryBackground: rgba(22,22,22); // Background behind timer
    --secondaryBackground: rgba(40,40,40); // Timer background, + background
    --tertiaryBackground: rgba(51,51,51); // +1
    --fontColorPrimary: rgba(204,204,204); // label, time display (when running)
    --fontColorSecondary: rgba(153,153,153); // reset font
    --fontIdlePrimary: black; // label, time diplay (when idle)
    --fontIdleSecondary: black; // label, time diplay (when idle)

    // Dimension Variables
    --timerWidth: 18rem;
    --timerHeight: 8rem;
    --containerRadius: .5rem;
    --inputRadius: .25rem;
    --plusOneRadius: 50%;
    --inputHeight: 1.8rem;
    --labelWidth: 7.5rem;
    --timeInputWidth: 1.8rem;

    // Margin and Padding
    --timerPadding: 0 1rem;
    --timerMargin: 1rem;
    --resetMargin: .5rem 0;

    display: grid;
    background-color: var(--primaryBackground);
`;

// Contains the Timer itself (3 -> play button, timer+countdown, RESET/X + +1)
export const TimerContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: var(--timerMargin);
    padding: var(--timerPadding);
    width: var(--timerWidth);
    height: var(--timerHeight);
    background-color: var(--secondaryBackground); 
    border-radius: var(--containerRadius); 

    * {
        color: white;
    }
`;

// Play / Pause button and the time left component in this
export const PlayPauseContainer = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// Timer and Countdown displayed in this Vertical flex
export const TimerCountdown = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
`;

// RESET / X and +1 displayed in this Vertical flex
export const TimerReset = styled.span`
    display: flex;
    height: 100%;
    margin: var(--resetMargin);
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    border: solid 1px red; 
`;

// RESET / X 
export const ResetBtn = styled.button`
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    background-color: var(--secondaryBackground);
    color: var(--fontColorSecondary);
    &:hover{
        color: var(--fontColorPrimary);
    }
`;

// +1 circular text
export const PlusOne = styled.button`
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    background-color: var(--tertiaryBackground);
    color: var(--fontColorSecondary);
    border-radius: var(--plusOneRadius);
    &:hover{
        color: var(--fontColorPrimary);
    }
`;

// Timer input
export const TimerInput = styled.input`
    width: var(--labelWidth);
    height: var(--inputHeight);
    padding-left: .5rem;
    border: none;
    border-radius: var(--inputRadius);
    background-color: var(--tertiaryBackground);
    color: white;
`;

// Time input (when not running)
export const TimeInput = styled.input`
    width: var(--timeInputWidth);
    height: var(--inputHeight);
    border: none;
    border-radius: var(--inputRadius);
    background-color: var(--tertiaryBackground);
    color: white;
    text-align: center;
`;

// Time input horiz flex container
export const TimeInputField = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
`;

// Time display text (when running)
export const TimeDisplayText = styled.h2``;

// Time display small(when running)
export const TimeDisplayTextSmall = styled.h3``;

// Time display flex (when running)
export const TimeDisplayFlex = styled.span``;

// Label (not running)
export const Label = styled.p``;

// Plus Container
export const PlusContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondaryBackground);
    * {
        color: white;
    }
`;








