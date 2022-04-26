import React from 'react';

import '../App.css';

const Beer  = ({handleClick, item} : {handleClick : Function, item :  {id: string, name: string}}) => {
    return (
        <li key={item.id}>
            <label>{item.name}</label>
            <button type="button" className="close" aria-label="Close" onClick={() => handleClick(item.id)}>
                <span aria-hidden="true">&times;</span>
            </button>
        </li>
    );
};

export default Beer;