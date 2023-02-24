import { useHistory } from "react-router-dom";
import { useState } from "react";

function Support() {
    const [support, setSupport] = useState('')

    const handleSupport = (event) => {
        console.log('support: ', event.target.value)
        setSupport(event.target.value)
    }

    const history = useHistory();

    const handleClick = () => {
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