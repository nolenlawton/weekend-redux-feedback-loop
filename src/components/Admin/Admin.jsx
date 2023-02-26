import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SurveyItem from "../SurveyItem/SurveyItem";

function Admin () {
    const dispatch = useDispatch()
    const surveyList = useSelector(store => store.surveyList)

// gets list from database and sends to store
    const getList = () => {
        axios.get('/survey')
        .then((response) => {

            dispatch({
                type: 'SET_SURVEY_LIST',
                payload: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
// gets database on page load
    useEffect(() => {
        getList();
    }, []);

// table to show admin list of surveys in database
      return(
        <div className="admin">
        <h2>Admin List</h2>
      
            <table className="adminTable">
            <tbody>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Date</th>
                    <th>Flag</th>
                </tr>
                {surveyList.map((survey, i) => {
                    return(
                        <SurveyItem getList={getList} survey={survey} key={i} />
                    )
                })}
            </tbody>
            </table>

            

        </div>
    )
    
}

export default Admin