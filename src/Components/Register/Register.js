import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import './Register.css'
import logo from '../../Images/logos/Group 1329.png';
import { UserContext } from '../../App';

const Register = () => {
    const {charityname} = useParams();
    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
    const history = useHistory();
    const handleSubmit = () =>{
        history.push("/Humanity");
    };

   
    return (
        <div className="from-body">
            <Link to="/" className='text-white logo'><img className="logo" src={logo} alt="" /></Link>            
            <Form className="from">    
                <h2>Registar as a volunteer</h2>            
                <Form.Group controlId="formGroupEmail">                    
                    <Form.Control className="control" type="text" defaultValue={loggedInUser.name} />
                    <Form.Control className="control" type="email"  defaultValue={loggedInUser.email} />
                    <Form.Control className="control" type="date" placeholder="Date" />
                    <Form.Control className="control" type="text" placeholder="Disicription" />
                    <Form.Control className="control" type="text"  defaultValue={charityname} />
                </Form.Group>
                <Button className="button" variant="primary" type="submit" onClick={handleSubmit}>Registation</Button>
            </Form>
        </div>
    );
};

export default Register;