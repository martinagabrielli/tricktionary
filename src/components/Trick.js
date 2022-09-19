import React, {useState} from 'react';
import tricks from '../tricks';

export default function Trick({details}) {

    return <>
        <h1>{details.name}</h1>
        <p>{details.description}</p>
        <div className="d-flex justify-content-center">
            <p>Difficulty:</p>
            <span> </span>
            <p>{details.difficulty}/5</p>
        </div>
        <button>View more</button>
    </>
}