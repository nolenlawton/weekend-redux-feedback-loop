import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";


function Understanding() {
    const [understanding, setUnderstanding] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

// sets value of 'understanding' from the input field
    const handleUnderstanding = (event) => {
        setUnderstanding(event.target.value)
    }

// sends value of 'understanding' to the store
    const handleClick = () => {
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding
        })

    // sends user to 'support' page if value !null
        if (understanding === '') {
            swal({title: 'Missing Input!', text:'Choose a value before continuing.', dangerMode: true})
        }
        else {
            history.push("/support");
        }
    }

// ability to go back to 'feeling' page
    const handleBack = () => {
        history.goBack()
    }

// form for user to select value of 'understanding'
    return(
        <div className="component">
            <h2 className="question">How well are you understanding the content?</h2>
            
            <form onChange={handleUnderstanding} className="input">
                <span>
                    <input type="radio" id="1" name="fav_language" value="1" />
                    <label htmlFor="1">1</label>
                </span> 
                <span>
                    <input type="radio" id="2" name="fav_language" value="2" />
                    <label htmlFor="2">2</label>
                </span>
                <span>
                    <input type="radio" id="3" name="fav_language" value="3" />
                    <label htmlFor="3">3</label>
                </span>
                <span>
                    <input type="radio" id="4" name="fav_language" value="4" />
                    <label htmlFor="4">4</label>
                </span>
                <span>
                   <input type="radio" id="5" name="fav_language" value="5" />
                   <label htmlFor="5">5</label>
                </span>
            </form>
            
            <button className="next" onClick={handleClick} >Next</button>
            <button className="back" onClick={handleBack} >Back</button>
        </div>
    )
}

export default Understanding