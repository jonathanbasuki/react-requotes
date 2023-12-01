import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Navbar from './components/navbar'

function App() {
    return (
        <>
            <Container>
                <Navbar />

                <div id="content">
                    <Outlet />
                </div>

                <Row>
                    <p className='copyright text-light mt-3'>
                        &copy; 2023, <a href='https://github.com/jonathanbasuki' className='text-light'>Jonathan Basuki</a>. All rights reserved.
                    </p>
                </Row>
            </Container>
        </>
    );
}

export default App;