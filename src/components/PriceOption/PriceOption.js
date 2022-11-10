import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const {features} = option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h2>
                    <span className='text-5xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-white'>/month</span>
                </h2>
                <p className='text-3xl my-4 font-bold'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature
                key={idx}
                feature = {feature}
                ></Feature>)
            }
            <button className='bg-green-500 mt-4 w-full text-white font-bold rounded-md py-2'>Buy Now</button>
        </div>
    );
};

export default PriceOption;