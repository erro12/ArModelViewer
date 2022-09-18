import React from 'react';
import "./mint.css";

const MintDetails = () => {
    return (
        <div className='main'>
            <div className='container'>
                <h2>
                    Mint Details
                </h2>
                <div className='row'>
                    <Details
                        title={"5500"}
                        details={"Total Support"}
                    />
                    <Details
                        title={".1 ETH"}
                        details={"Price per Token"}
                    />
                    <Details
                        title={"08/08/22"}
                        details={"Public Mint Date"}
                    />
                    <Details
                        title={"500"}
                        details={"Pre-sale Tokens"}
                    />
                </div>
            </div>
        </div>
    )
}

export default MintDetails;

export const Details = ({ title, details }) => {
    return (
        <div className='details'>
            <h2>{title}</h2>
            <div>
                <span>{details}</span>
            </div>
        </div>
    )
}