import React from 'react';
import './App.css';
import BeerList from "./components/BeerList"

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from "./components/About";
import BeerLogo from './beer.svg';

function App() {
    return (


        <Router>
            <Routes>

                <Route path='/' element={
                    <div className="holder d-flex align-items-center justify-content-center">
                        <div className="container">

                            <div className="image">
                                <img src={BeerLogo} alt="ReactLogo" width="30%" height="30%"/>
                            </div>

                            <header className="text-center mb-5">
                                <h1 className="display-4">Gestion des nos bières préférées </h1>
                                <p className="fst-italic text-muted">Pour en savoir plus <Link to="/about">About</Link>
                                </p>
                            </header>

                            <div className="row">
                                <div className="col-lg-5 mx-auto">
                                    <div className="card rounded border-0 shadow-sm position-relative">
                                        <div className="card-body p-5">

                                            <div className="App">
                                                <BeerList/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                }/>

                <Route path='/about' element={
                    <About/>
                }/>

            </Routes>
        </Router>


    );
}

export default App;
