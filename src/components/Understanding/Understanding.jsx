import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Understanding() {
    const [understanding, setUnderstanding] = useState('')

    const handleUnderstanding = (event) => {
        console.log('understanding: ', event.target.value)
        setUnderstanding(event.target.value)
    }

    const dispatch = useDispatch()
    const history = useHistory();

    const handleClick = () => {
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding
        })

        history.push("/support");
    }

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
        </div>
    )
}

export default Understanding