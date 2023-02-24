import { useHistory } from "react-router-dom";
import { useState } from "react";

function Comments() {
    const [comments, setComments] = useState('')

    const handleComments = (event) => {
        console.log('comments: ', event.target.value)
        setComments(event.target.value)
    }

    const history = useHistory();

    const handleClick = () => {
        history.push("/review");
    }

    return(
        <div>
            <h2>Any comments you want to leave?</h2>
            <input
                onChange={handleComments}
                type='text'
                placeholder='-'
            />
            <button onClick={handleClick}>Next</button>
        </div>

    )
}

export default Comments