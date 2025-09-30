import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import { Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import EditTable from "./components/pages/EditTable/EditTable";
import NoMatch from "./components/views/NoMatch/NoMatch";

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<EditTable />} />
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </Container>
  )
};

export default App;
