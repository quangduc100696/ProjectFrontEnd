import React from 'react';
import Header from '../Header/Header';
import HotProduct from '../HotProduct/HotProduct';
import Footer from '../Footer/Footer';
import Slide from '../Slide/Slide';

function Home(props) {
    return (
        <div>
            <Header />
            <Slide />
            <HotProduct />
            <Footer />
        </div>
    );
}

export default Home;