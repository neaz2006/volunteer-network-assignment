import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Charity.css'

const Charity = (props) => {
    const { images, name, id } = props.charity;
    return (
        < >
            <Link to={`/register/${name}`} className="col-md-3 cullam">
                    <img src={images} alt="" />
                    <h1>{name}</h1>
            </Link>
        </>
    );
};

export default Charity;