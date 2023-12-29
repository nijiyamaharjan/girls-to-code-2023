import React, { useState } from 'react';

const Header = (props) => {
    return (<div className="header">
        <h2>{props.title}</h2>
    </div>);
}

export default Header;