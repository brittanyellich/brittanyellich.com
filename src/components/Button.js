import React from 'react';

const Button = ({ buttonText }) => {

    return (
        <div>
            <button className="universalButton">{buttonText}</button>
        </div>
    );
};

export default Button