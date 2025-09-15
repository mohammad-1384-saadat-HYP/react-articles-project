import React from 'react';
import Header from "../../component/header/Header";
import HomeContent from "./components/HomeContent";
import Footer from "../../component/footer/Footer";

const Home = () => {
    return (
        <div>
            <Header/>
            <HomeContent/>
            <Footer/>
        </div>
    );
};

export default Home;