import { useParams } from 'react-router-dom'

function Package (props) {
    const { id } = useParams()

    return(
        <h1 style={{'marginTop': '50px'}}>{props.packages[id]}</h1>
    )

}

export default Package