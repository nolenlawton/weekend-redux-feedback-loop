import { useState } from "react"
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

function Feeling() {
    const [feeling, setFeeling] = useState('')

    const handleFeeling = (event) => {
        console.log('feeling: ', event.target.value)
        setFeeling(event.target.value)
    }

    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = () => {

        dispatch({
            type: 'SET_FEELING',
            payload: feeling
        })

        history.push("/understanding");
    }

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