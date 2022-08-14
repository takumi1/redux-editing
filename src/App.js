import './App.css';
import ServiceList from "./components/ServiceList";
import ServiceAdd from "./components/ServiceAdd";

function App() {
    return (
        <div className="App">
            <ServiceList/>
            <hr/>
            <ServiceAdd/>
        </div>
    );
}

export default App;
