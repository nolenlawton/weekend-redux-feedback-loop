import axios from "axios";

function SurveyItem ({survey, getList}) {
    const date = survey.date
    const dateSepertatedTime = date.split('T06:00:00.000Z')
    const dateWithoutTime = dateSepertatedTime[0]

    console.log(dateWithoutTime)

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

    const handleFlag = () => {
        let id = survey.id

        axios.put(`/survey/${id}`, survey)
            .then((response) => {
                getList();                    
            }).catch((err) => {
                console.error(err);
            })
    }

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