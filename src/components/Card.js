import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-blue tc dib br3 pa2 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}1?150x150`} alt='robots'></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;