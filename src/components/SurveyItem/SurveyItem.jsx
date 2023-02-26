import axios from "axios";

function SurveyItem ({survey, getList}) {
// changes date to not have time (annoying I couldn't do this in SQL)
    const date = survey.date
    const dateSepertatedTime = date.split('T06:00:00.000Z')
    const dateWithoutTime = dateSepertatedTime[0]

// ability for admin to delete survey from database
    const handleDelete = () => {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this survey!",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                let id = survey.id
        
                axios.delete(`/survey/${id}`, survey)
                .then((response) => {
                    getList();                    
                }).catch((err) => {
                    console.error(err);
                })
            }
        });
    }

// ability for admin to flag survey from database
    const handleFlag = () => {
        let id = survey.id

        axios.put(`/survey/${id}`, survey)
            .then((response) => {
                getList();                    
            }).catch((err) => {
                console.error(err);
            })
    }

// each survey item (row) shown in table list
    return(
        <tr>
        <td>{survey.feeling}</td>
        <td>{survey.understanding}</td>
        <td>{survey.support}</td>
        <td>{survey.comments}</td>
        <td>{dateWithoutTime}</td>
        <td><button onClick={handleFlag} className= { survey.flagged ? 'flaggedButton' : "adminButton" }>Flag</button></td>
        <td><button onClick={handleDelete} className="adminButton" >Delete</button></td>
        </tr>
    )
}

export default SurveyItem