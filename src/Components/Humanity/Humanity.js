import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Humanity.css'
import extVolunteerimg from '../../Images/images/extraVolunteer.png'
import Header from '../Header/Header';
import { UserContext } from '../../App';

const Humanity = () => {
    const [humanitys, sethumanitys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/humanatys')
            .then(res => res.json())
            .then(data => sethumanitys(data));
            console.log('data');
    },[])
    return (
        <>
            <Header></Header>
            <h1>{humanitys.length}</h1>
            <div className="row ">
                {
                    humanitys.map(donate =>
                        <Container className="col-5 col-md-5 col-sm-6 mr-auto card">

                            <img src={extVolunteerimg} alt="" />
                            <div className="card-body">
                            <h4>{donate.name}</h4>
                            <p>{donate.date}</p>
                            <button className="btn btn-primary">Cancle</button>
                            </div>


                        </Container>


                    )
                }
            </div>


        </>
    );
};

export default Humanity;