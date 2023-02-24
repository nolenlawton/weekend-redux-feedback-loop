import { useHistory } from "react-router-dom";

function Comments() {

    const history = useHistory();

    const handleClick = () => {
        history.push("/review");
    }

    return(
        <div>
            <h2>Any comments you want to leave?</h2>
            <input
                // onChange={handleFeeling}
                type='text'
                placeholder='-'
            />
            <button onClick={handleClick}>Next</button>
        </div>

    )
}

export default Comments