import { Container } from "react-bootstrap";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTables, editTableRequest } from "../../../redux/tablesRedux";
import EditTableForm from "../../features/EditTableForm/EditTableForm";

const EditTable = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const tables = useSelector(getAllTables);
  const table = tables.find(table => table.id === id);

  const handleSubmit = tableData => {
    dispatch(editTableRequest({
      ...table,
      id,
      status: tableData.tableStatus,
      peopleAmount: tableData.peopleAmount,
      maxPeopleAmount: tableData.maxPeopleAmount,
      bill: tableData.bill
    }));
    navigate('/');
  }

 if(!table) {return <Navigate to="/" />}
  else{
    return(
      <Container className="d-flex flex-column">
        <h1>Table&nbsp;{table.id}</h1>
        <EditTableForm
          action={handleSubmit}
          tableId={table.id}
          tableStatus={table.status}
          peopleAmount={table.peopleAmount}
          maxPeopleAmount={table.maxPeopleAmount}
          bill={table.bill}/>
      </Container>
    )
  }
};

export default EditTable;