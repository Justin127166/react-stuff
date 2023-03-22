const AllTodos = ({appLevelState}) => {
    return(
        appLevelState.map((hello,index) =>{
            return (
            <li key = {index}>{hello}</li>
            )
        })
    )
}

export default AllTodos