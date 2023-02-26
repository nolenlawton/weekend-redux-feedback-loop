import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Button from '@mui/material/Button';

function Review() {
    const survey = useSelector(store => store.survey)
    const history = useHistory()
    
// sends survey to the database and the user back to first page
    const handleClick = () => {
        swal({
            title: "Submit Survey?",
            buttons: true,
          })
          .then((willPost) => {
            if (willPost) {

              axios.post('/survey', survey)
                .then((response) => {
                    swal("Survey was submitted!", {icon: "success",})
                    history.push('/')
                })
                .catch((error) => {
                console.log(error);
                })
            } 
          })
    }

// ability to go back to 'comments' page
    const handleBack = () => {
        history.goBack()
    }

// table for user to see their survey values
    return(
        <div className="component">
            <h2>Review</h2>
            <table className="topTable">
                <tbody>
                <tr>
                    <th>Feeling </th>
                    <th>Understanding </th>
                    <th>Support </th>
                </tr>
                <tr>
                    <td>{survey.feeling}</td>
                    <td>{survey.understanding}</td>
                    <td>{survey.support}</td>
                </tr>
                </tbody>
            </table>
            <table className="bottomTable">
                <tbody>
                <tr>
                    <th>Comments </th>
                </tr>
                <tr>
                    <td>{survey.comments}</td>
                </tr>
                </tbody>
            </table>

            {/* submits to database */}
            <div className="submit"><Button variant="contained" onClick={handleClick} >Submit</Button></div>
            <button className="back" onClick={handleBack}>Back</button>
        </div>
    )
}

export default Review