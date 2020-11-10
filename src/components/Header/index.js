import React from 'react';
import './styles.sass';

function Header({ children }) {
    return (<>
        <h1 className="header">{children}</h1>
    </>)
};

export default Header