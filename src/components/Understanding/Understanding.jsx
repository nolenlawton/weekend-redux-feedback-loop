import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Understanding() {
    const [understanding, setUnderstanding] = useState('')

    const handleUnderstanding = (event) => {
        console.log('understanding: ', event.target.value)
        setUnderstanding(event.target.value)
    }

    const dispatch = useDispatch()
    const history = useHistory();

    const handleClick = () => {
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding
        })

        history.push("/support");
    }

    return(
        <div>
            <h2>How well are you understanding the content?</h2>
            <input
                onChange={handleUnderstanding}
                type='number'
                placeholder='-'
                min='1'
                max='5'
            />
            <button onClick={handleClick} >Next</button>
        </div>
    )
}

export default Understanding