import React from "react";
import Home from "./page/home/Home";
import {Route, Routes} from "react-router";
import AboutUs from "./page/aboutUs/AboutUs";
import CreateArticle from "./page/createArticle/CreateArticle";
import ArticlePage from "./page/articlePage/ArticlePage";
import NotFount from "./page/notFound/NotFount";

function App() {
    return (
        <>
            <Routes>
                <Route path="*" element={<NotFount/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/article/:id" element={<ArticlePage/>}/>
                <Route path="/create-article" element={<CreateArticle/>}/>
            </Routes>
        </>
    );
}

export default App;
