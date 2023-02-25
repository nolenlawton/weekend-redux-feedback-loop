import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

function Support() {
    const [support, setSupport] = useState('')

    const handleSupport = (event) => {
        console.log('support: ', event.target.value)
        setSupport(event.target.value)
    }

    const dispatch = useDispatch()
    const history = useHistory();

    const handleClick = () => {
        dispatch({
            type: 'SET_SUPPORT',
            payload: support
        })

        if (support === '') {
            swal({title: 'Missing Input!', text:'Choose a value before continuing.', dangerMode: true})
        }
        else {
            history.push("/comments");
        }

    }

    return(
        <div className="component">
            <h2 className="question">How well are you being supported?</h2>
            
            <form onChange={handleSupport} className="input">
                <span>
                    <input type="radio" id="1" value="1" />
                    <label htmlFor="1">1</label>
                </span> 
                <span>
                    <input type="radio" id="2" value="2" />
                    <label htmlFor="2">2</label>
                </span>
                <span>
                    <input type="radio" id="3" value="3" />
                    <label htmlFor="3">3</label>
                </span>
                <span>
                    <input type="radio" id="4" value="4" />
                    <label htmlFor="4">4</label>
                </span>
                <span>
                   <input type="radio" id="5" value="5" />
                   <label htmlFor="5">5</label>
                </span>
            </form>
            
            <button className="next" onClick={handleClick} >Next</button>
        </div>
    )
}

export default Support