import { useHistory } from "react-router-dom";

function Support() {

    const history = useHistory();

    const handleClick = () => {
        history.push("/comments");
    }

    return(
        <div>
            <h2>How well are you being supported?</h2>
            <input
                // onChange={handleFeeling}
                type='number'
                placeholder='-'
                min='1'
                max='5'
            />
            <button onClick={handleClick}>Next</button>
        </div>
    )
}

export default Support