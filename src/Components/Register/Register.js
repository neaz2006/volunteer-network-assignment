import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Register.css'
import logo from '../../Images/logos/Group 1329.png';

const Register = () => {
    const {charityname} = useParams();
   
    return (
        <div className="from-body">
            <Link to="/" className='text-white logo'><img className="logo" src={logo} alt="" /></Link>            
            <Form className="from">    
                <h2>Registar as a volunteer</h2>            
                <Form.Group controlId="formGroupEmail">                    
                    <Form.Control className="control" type="text" placeholder="Enter Your Full Name" />
                    <Form.Control className="control" type="email" placeholder="Enter email" />
                    <Form.Control className="control" type="date" placeholder="Date" />
                    <Form.Control className="control" type="text" placeholder="Disicription" />
                    <Form.Control className="control" type="text"  defaultValue={charityname} />

                </Form.Group>
                <Button className="button" variant="primary" type="submit">Registation</Button>
            </Form>
        </div>
    );
};

export default Register;