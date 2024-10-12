import React from 'react';
import { useNavigate } from 'react-router-dom'

const CardPagesTarget = ({ title, description, target }) => {
    const navigate = useNavigate()

    const handleTarget = () => {
        navigate(`/${target}`)
    }

    return (
        <div className='card-pageTarget' onClick={handleTarget}>
            <span className='title'>{title}</span>
            <p className='description'>{description}</p>
        </div>
    );
}

export default CardPagesTarget;