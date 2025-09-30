import { Container } from "react-bootstrap";
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { getAllTables, fetchTables } from '../../../redux/tablesRedux';
import AllTablesList from "../../views/AllTablesList/AllTablesList";

const Home = () => {
  const dispatch = useDispatch();
  const tables = useSelector(getAllTables);

  useEffect(() => {
    dispatch(fetchTables());
  },[dispatch]);

  return(
    <Container>
      <h1>All tables</h1>
      <div>
        {tables.map(table => (
          <AllTablesList
            key={table.id}
            id={table.id}
            status={table.status}
          />
        ))}
      </div>
    </Container>
  )
};

export default Home;