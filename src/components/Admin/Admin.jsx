import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import SurveyItem from "../SurveyItem/SurveyItem";

function Admin () {
    const dispatch = useDispatch()
    const surveyList = useSelector(store => store.surveyList)

    const getList = () => {
        axios.get('/survey')
        .then((response) => {
            console.log(response.data)

            dispatch({
                type: 'SET_SURVEY_LIST',
                payload: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }
    

    useEffect(() => {
        console.log('in useEffect');
        getList();
    }, []);

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