import React from 'react';
import './Charity.css'
import { Link, useHistory } from 'react-router-dom';

const Charity = (props) => {
    const { images, name, id } = props.charity;
    
    return (
        < >
        <Link to={`/register/${name}`} className="col-md-3 cullam" >
                <img src={images} alt="" />
                <h1>{name}</h1>
        </Link>
           
        </>
    );
};

export default Charity;