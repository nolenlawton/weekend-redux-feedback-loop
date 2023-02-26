import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comments() {
    const [comments, setComments] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

// sets value of 'comments' from the input field
    const handleComments = (event) => {
        setComments(event.target.value)
    }

// sends value of 'comments' to the store & sends user to 'review' page
    const handleClick = () => {
        dispatch({
            type: 'SET_COMMENTS',
            payload: comments
        })

        history.push("/review");
    }

// ability to go back to 'support' page
    const handleBack = () => {
        history.goBack()
    }

// form for user to select value of 'comments'
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