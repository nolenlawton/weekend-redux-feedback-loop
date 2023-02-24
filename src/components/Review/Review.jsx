import { useSelector } from "react-redux"
import axios from "axios";

function Review() {
    const survey = useSelector(store => store)

    const handleClick = () => {
        axios.post('/survey', survey)
            .then((response) => {
            })
            .catch((error) => {
              console.log(error);
            });
    }

    return(
        <>
            <h2>Review</h2>
            <table>
                <tr>
                    <th>Feeling </th>
                    <th>Understanding </th>
                    <th>Support </th>
                    <th>Comments </th>
                </tr>
                <tr>
                    <td>{survey.feeling}</td>
                    <td>{survey.understanding}</td>
                    <td>{survey.support}</td>
                    <td>{survey.comments}</td>
                </tr>

            </table>

            {/* submits to database */}
            <button onClick={handleClick} >Submit</button>
        </>
    )
}

export default Review