import "./App.css";
import Menu from "./Components/Menu";
import { Container } from "react-bootstrap";
import Public from "./Routes/Public";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Menu />
                <Container>
                    <Public />
                </Container>
            </Router>
        </div>
    );
}

export default App;
