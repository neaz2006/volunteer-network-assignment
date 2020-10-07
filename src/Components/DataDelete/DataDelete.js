import React from 'react';
import { useHistory } from 'react-router-dom';
import Humanity from '../Humanity/Humanity';

const DataDelete = () => {
    const history = useHistory();

  const deleteData = () => {
    history.push('/Humanity');
  };
  deleteData()
    return (
        <div>
            
        </div>
    );
};

export default DataDelete;