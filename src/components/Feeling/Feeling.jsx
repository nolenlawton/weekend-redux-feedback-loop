import { useState } from "react"

function Feeling() {
    // const [feeling, setFeeling] = useState({feeling: ''})

    // const handleFeeling = (event) => {
    //     setFeeling({feeling: event.target.value})
    // }


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
            <button>Next</button>
        </div>
    )
}

export default Feeling