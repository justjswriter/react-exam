import OperationTable from "../components/OperationTable/OperationTable"
import "../styles/operations.css"



const OperationPage = () =>{

    return(
        <div className="page">
            <p className="page-name">Операции</p>
            <OperationTable />
        </div>
    )
}

export default OperationPage