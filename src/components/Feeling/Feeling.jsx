import { useState } from "react"
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

function Feeling() {
    const [feeling, setFeeling] = useState('')

    const handleFeeling = (event) => {
        console.log('feeling: ', event.target.value)
        setFeeling(event.target.value)
    }

    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = () => {

        dispatch({
            type: 'SET_FEELING',
            payload: feeling
        })

        history.push("/understanding");
    }

    return(
        <div>
            <h2>How are you feeling today?</h2>
            <input
                onChange={handleFeeling}
                type='number'
                placeholder='-'
                min='1'
                max='5'
            />
            <button onClick={handleClick} >Next</button>
        </div>
    )
}

export default Feeling