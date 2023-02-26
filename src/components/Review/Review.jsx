import { useSelector } from "react-redux"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import swal from "sweetalert";
import Button from '@mui/material/Button';


function Review() {
    const survey = useSelector(store => store)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = () => {
        console.log(survey)
        
        swal({
            title: "Submit Survey?",
            buttons: true,
          })
          .then((willPost) => {
            if (willPost) {
              swal("Survey was submitted!", {icon: "success",})

              axios.post('/survey', survey)
                .then((response) => {
                history.push('/')
                })
                .catch((error) => {
                console.log(error);
                })
            } 
          })
    }

    const handleBack = () => {
        history.goBack()
    }

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