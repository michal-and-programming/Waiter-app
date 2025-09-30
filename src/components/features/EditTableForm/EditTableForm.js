import { Container, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Button from '../../common/Button/Button';
import styles from './EditTableForm.module.scss';

const EditTableForm = ({ action, ...props }) => {
  const allStatus = ["Free", "Reserved", "Busy", "Cleaning"];

  const [tableStatus, setTableStatus] = useState(props.tableStatus || 'Free');
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || 0);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount || 0);
  const [bill, setBill] = useState(props.bill || 0);

  useEffect(() => {
    if (tableStatus === "Free" || tableStatus === "Cleaning") {
      setPeopleAmount(0);
    }
    if (tableStatus !== "Busy") {
      setBill(0);
    }
  }, [tableStatus]);

  useEffect(() => {
    if (peopleAmount > maxPeopleAmount) {
      setPeopleAmount(maxPeopleAmount);
    }
  }, [maxPeopleAmount, peopleAmount]);

  const handlePeopleAmount = e => {
    let value = parseInt(e.target.value, 10);
    if (value < 0) value = 0;
    if (value > 10) value = 10;
    if (value > maxPeopleAmount) value = maxPeopleAmount;
    setPeopleAmount(value);
  };

  const handleMaxPeopleAmount = e => {
    let value = parseInt(e.target.value, 10);
    if (value < 0) value = 0;
    if (value > 10) value = 10;
    setMaxPeopleAmount(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    action({
      tableStatus,
      peopleAmount,
      maxPeopleAmount,
      bill,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex align-items-center">
          <Form.Label className={`me-3 ${styles.formLabel}`}>Status:</Form.Label>
          <Form.Select
            value={tableStatus}
            onChange={e => setTableStatus(e.target.value)}
            style={{ maxWidth: "240px" }}
          >
            {allStatus.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center">
          <Form.Label className={`me-3 ${styles.formLabel}`}>People:</Form.Label>
          <Form.Control
            type="number"
            value={peopleAmount}
            onChange={handlePeopleAmount}
            style={{ maxWidth: "50px", marginRight: "10px" }}
          />
          <span className="me-2">/</span>
          <Form.Control
            type="number"
            value={maxPeopleAmount}
            onChange={handleMaxPeopleAmount}
            style={{ maxWidth: "50px" }}
          />
        </Form.Group>

        {tableStatus === "Busy" && (
          <Form.Group className="mb-3 d-flex align-items-center">
            <Form.Label className={`me-5 ${styles.formLabel}`}>Bill:</Form.Label>
            <span className="me-2">$</span>
            <Form.Control
              type="number"
              value={bill}
              onChange={e => setBill(parseInt(e.target.value, 10) || 0)}
              style={{ maxWidth: "100px" }}
            />
          </Form.Group>
        )}

        <Button type="submit" className="btn btn-primary">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default EditTableForm;