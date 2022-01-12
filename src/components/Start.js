import React, {useState} from 'react'
import styled, { css } from 'styled-components/macro'
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({props}) => {

    const startQuiz = () => {
        props(true);
    }

    const [participantID, setParticipantID] = useState(0);
    const submitID = (event) => {
        setParticipantID(event);
        //console.log(participantID);
    }

    return (
        <Intro>
            <h1>Welcome!</h1>
            <form onSubmit={submitID}>
            <label>
                Participant ID: 
                <input type = "text" />
            </label>
            <input type = "submit" />
            </form>
            <Button onClick={startQuiz} css={btnCSS}>Begin</Button>
        </Intro>
    )
}

export default Start
