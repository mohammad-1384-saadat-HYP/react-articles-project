import React from 'react';
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import ArticlePageContent from "./components/ArticlePageContent";

const ArticlePage = () => {
    return (
        <>
            <Header/>
            <ArticlePageContent/>
            <Footer/>
        </>
    );
};

export default ArticlePage;