import React from "react";
import Home from "./page/home/Home";
import {Route, Routes} from "react-router";
import AboutUs from "./page/aboutUs/AboutUs";
import NewArticle from "./page/newArticle/NewArticle";

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/new" element={<NewArticle/>}/>
            </Routes>
        </React.Fragment>
    );
}

export default App;
