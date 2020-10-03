import React, { useState } from 'react';
import './Charity.css'

const Charity = (props) => {
    const{images,name} = props.charity;
    return (
        <div className="col-md-3 cullam">            
            <img src={images} alt=""/>
            <h1>{name}</h1>
            
        </div>
    );
};

export default Charity;