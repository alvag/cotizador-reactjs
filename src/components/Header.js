import React, { Component } from 'react';

const Header = props => {
    return (
        <header className="top">
            <h1>{props.title}</h1>
        </header>
    );
};

export default Header;
