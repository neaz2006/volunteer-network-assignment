import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './Humanity.css'
import extVolunteerimg from '../../Images/images/extraVolunteer.png'
import Header from '../Header/Header';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';

const Humanity = () => {

    const [humanitys, sethumanitys] = useState([]);
    console.log(humanitys);
    const{ _id ,name ,date} = humanitys
    const [loggedInUser, setLoggedinUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://agile-journey-22250.herokuapp.com/humanatys?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => sethumanitys(data));;
    }, [])

    const history = useHistory();
    const handleCancle = (id) => {
        console.log(id);
        fetch(`https://agile-journey-22250.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            alert('Data delete successfully');
            history.push('/DataDelate');
          })
      }
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
                                <Button onClick={() => handleCancle(donate._id)} className='float-right' variant='primary'>Cancle </Button>
                            </div>


                        </Container>


                    )
                }
            </div>


        </>
    );
};

export default Humanity;