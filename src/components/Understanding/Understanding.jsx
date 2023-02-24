import { useHistory } from "react-router-dom";

function Understanding() {

    const history = useHistory();

    const handleClick = () => {
        history.push("/support");
    }

    return(
        <div>
            <h2>How well are you understanding the content?</h2>
            <input
                // onChange={handleFeeling}
                type='number'
                placeholder='-'
                min='1'
                max='5'
            />
            <button onClick={handleClick} >Next</button>
        </div>
    )
}

export default Understanding