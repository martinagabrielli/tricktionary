import React, {useState} from 'react';

export default function Trick({details}) {

    function handleTrickButton(e) {
        console.log(e);
    }

    return <>
        <section className="trick__single col-lg-4 text-center" key={details.id}>
            <div class="trick__inner">
                <h1 className="trick__single-title">{details.name}</h1>
                <p>{details.description}</p>
                <div className="d-flex justify-content-center">
                    <p>Difficulty:</p>
                    <span> </span>
                    <p>{details.difficulty}/5</p>
                </div>
                <button onClick={handleTrickButton}>View more</button>
                
                <div className="trick__modal">
                    <div>Content</div>
                </div>
            </div>
        </section>
    </>
}