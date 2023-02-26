import { useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import swal from "sweetalert";

function Feeling() {
    const [feeling, setFeeling] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

// sets value of 'feeling' from the input field
    const handleFeeling = (event) => {
        setFeeling(event.target.value)
    }

// sends value of 'feeling' to the store
    const handleClick = () => {
        dispatch({
            type: 'SET_FEELING',
            payload: feeling
        })

    // sends user to 'understanding' page if value !null
        if (feeling === '') {
            swal({title: 'Missing Input!', text:'Choose a value before continuing.', dangerMode: true})
        }
        else {
            history.push("/understanding");
        }
    }

// form for user to select value of 'feeling'
    return(
        <div className="component">
            <h2 className="question">How are you feeling today?</h2>

            <form onChange={handleFeeling} className="input">
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

export default Feeling