import React from 'react';

const CardPagesTarget = ({ title, description }) => {
    return (
        <div className='card-pageTarget'>
            <span className='title'>{title}</span>
            <p className='description'>{description}</p>
        </div>
    );
}

export default CardPagesTarget;