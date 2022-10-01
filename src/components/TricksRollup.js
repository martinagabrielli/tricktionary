import Trick from './Trick.js';
import {useState} from 'react';
import tricks from '../tricks.js';

export default function TrickRollup() {
    return <>
        <section className="row">
            {tricks.map(trick =>
                <Trick details={trick} />
            )}
        </section>
    </>
}