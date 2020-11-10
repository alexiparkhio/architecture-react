import React from 'react';
import './styles.sass';

function MainComponent({ children }) {
    return (<>
        <div className="main-component">
            {children}
        </div>
    </>)
};

export default MainComponent;