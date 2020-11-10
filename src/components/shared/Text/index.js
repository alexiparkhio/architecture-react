import React from 'react';
import './styles.sass';

function Text ({ children }) {
    return (<>
        <p className="text">{children}</p>
    </>)
};

export default Text;