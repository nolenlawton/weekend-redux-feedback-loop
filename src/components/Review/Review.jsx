import { useSelector } from "react-redux"

function Review() {
    const survey = useSelector(store => store)

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
        </>
    )
}

export default Review