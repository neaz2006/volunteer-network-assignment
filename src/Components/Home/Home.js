import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './Home.css'
import FakeData from '../../FakeData/FakeData';
import Charity from '../Charitys/Charity';

const Home = () => {
    const show = FakeData ;
    const [charitys , setCharitys] = useState(show[0] );
    console.log(FakeData);
    return (
        <>
        <div className="main">
            <Header></Header>
            <SearchBox></SearchBox>
            <h3>{charitys.length}</h3>
            <div className="row">
                {
                    show.map(charity => <Charity charity={charity}></Charity>)
                }
            </div>
        </div>
        </>
    );
};

export default Home;