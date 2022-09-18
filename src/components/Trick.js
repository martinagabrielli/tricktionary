import React, {useState} from 'react';
import tricks from '../tricks';

export default function Trick({details}) {

    return <>
        <h1>{details.name}</h1>
        <p>{details.description}</p>
        <p>{details.difficulty}/5</p>
        <button>View more</button>
    </>
}