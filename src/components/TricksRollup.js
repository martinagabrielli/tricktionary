import Trick from './Trick.js';
import {useState} from 'react';
import tricks from '../tricks.js';

export default function TrickRollup() {
    return <>
        {tricks.map(trick =>
        <section key={trick.id} className="trick__single col-lg-4 text-center">
            <div class="trick__inner">
                <Trick details={trick} />
            </div>
        </section>)}
    </>
}