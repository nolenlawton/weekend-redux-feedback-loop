import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Support() {
    const [support, setSupport] = useState('')

    const handleSupport = (event) => {
        console.log('support: ', event.target.value)
        setSupport(event.target.value)
    }

    const dispatch = useDispatch()
    const history = useHistory();

    const handleClick = () => {
        dispatch({
            type: 'SET_SUPPORT',
            payload: support
        })

        history.push("/comments");
    }

    return(
        <div>
            <h2>How well are you being supported?</h2>
            <input
                onChange={handleSupport}
                type='number'
                placeholder='-'
                min='1'
                max='5'
            />
            <button onClick={handleClick}>Next</button>
        </div>
    )
}

export default Support