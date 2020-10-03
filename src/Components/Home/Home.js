import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './Home.css'
import FakeData from '../../FakeData/FakeData';
import Charity from '../Charitys/Charity';

const Home = () => {
    const vew = FakeData ;
    const [charitys , setCharitys] = useState(vew[0] );
    console.log(FakeData);
    return (
        <>
        <div className="main">
            <Header></Header>
            <SearchBox></SearchBox>
            <h3>{charitys.length}</h3>
            <div className="row">
                {
                    vew .map(charity => <Charity charity={charity}></Charity>)
                }
            </div>
        </div>
        </>
    );
};

export default Home;