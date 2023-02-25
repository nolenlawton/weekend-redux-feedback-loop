import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Comments() {
    const [comments, setComments] = useState('')

    const handleComments = (event) => {
        console.log('comments: ', event.target.value)
        setComments(event.target.value)
    }

    const dispatch = useDispatch()
    const history = useHistory();

    const handleClick = () => {
        dispatch({
            type: 'SET_COMMENTS',
            payload: comments
        })

        history.push("/review");
    }

    const handleBack = () => {
        history.goBack()
    }

    return(
        <div className="component">
            <h2 className="question">Any comments you want to leave?</h2>
            <input
                className="text"
                onChange={handleComments}
                type='text'
                placeholder=''
            />
            <button className="next" onClick={handleClick}>Next</button>
            <button className="back" onClick={handleBack}>Back</button>

        </div>

    )
}

export default Comments