import './App.css';
import {Container} from 'react-bootstrap';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import {Router, Routes, Route} from "react-router-dom";


function App() {
    return (


    <div>

        <main className='py-3'>
            <Header/>
            <Container>
                <h1>welcome to the shop</h1>
                <HomeScreen/>
            </Container>
        </main>
        <Footer/>
    </div>

)
    ;
}

export default App;
