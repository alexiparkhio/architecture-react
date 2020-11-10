import React from 'react';
import './styles.sass';

function Randomizer ({ message }) {
    return(<>
        <div className="randomizer">
            {message}
        </div>
    </>)
};

export default Randomizer;