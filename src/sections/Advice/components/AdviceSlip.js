import React from "react";

function AdviceSlip({ advice, trigger, setTrigger, addFavourite }) {
    return (
        <>
            <h3>Some Advice</h3>
            <p>{advice.slip.advice}</p>
            <button onClick={() => setTrigger(!trigger)}>
                Get More Advice
            </button>
            <button onClick={() => addFavourite(advice)}>
                Save to Favourties
            </button>
        </>
    );
}

export default AdviceSlip;
