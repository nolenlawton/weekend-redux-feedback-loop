import { useHistory } from "react-router-dom";
import { useState } from "react";

function Understanding() {
    const [understanding, setUnderstanding] = useState('')

    const handleUnderstanding = (event) => {
        console.log('understanding: ', event.target.value)
        setUnderstanding(event.target.value)
    }

    const history = useHistory();

    const handleClick = () => {
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