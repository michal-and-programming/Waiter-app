import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import styles from './AllTablesList.module.scss';

const AllTablesList = ({id, status}) => {
  return(
    <Container className={`d-flex justify-content-between align-items-center ${styles.tablesListContainer}`}>
      <div className="d-flex align-items-center gap-3">
        <h2>Table&nbsp;{id}</h2>
        <h4>Status:&nbsp;<span>{status}</span></h4>
      </div>
      <div>  
        <Link to={`/table/${id}`}>
          <Button type="button" className="btn btn-primary">Show more</Button>
        </Link>
      </div>
    </Container>
  )
};

export default AllTablesList;