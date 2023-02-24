// import { useState } from "react"
import { useHistory } from 'react-router-dom';

function Feeling() {
    // const [feeling, setFeeling] = useState({feeling: ''})

    const history = useHistory()

    // const handleFeeling = (event) => {
    //     setFeeling({feeling: event.target.value})
    // }

    const handleClick = () => {
        history.push("/understanding");
    }


    return(
        <div>
            <h2>How are you feeling today?</h2>
            <input
                // onChange={handleFeeling}
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