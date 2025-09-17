import React from 'react';
import Header from "../../component/header/Header";
import CreateArticleContent from "./components/CreateArticleContent";
import Footer from "../../component/footer/Footer";

const CreateArticle = () => {
    return (
        <>
            <Header/>
            <CreateArticleContent/>
            <Footer/>
        </>
    );
};

export default CreateArticle;