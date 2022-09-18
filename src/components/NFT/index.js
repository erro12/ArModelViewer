/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './nft-climate.css'

const NFTClimate = () => {
    return (
        <div className='nft-main'>
            <div className='nft-row'>
                <NFT />
                <Climate />
            </div>
        </div>
    )
}

export default NFTClimate;

export const NFT = () => {
    return (
        <div className='nft-col'>
            <div className='nft-border'>
                <h1>A. NFT Name</h1>
                <img
                    src={require('../../images/powerful-pine-card.png')}
                />
                <p className='series'>Series 1</p>
                <div className='nft-para-row'>
                    <p className='nft-eth'>3.5ETH</p>
                    <button className='nft-button'>purchase</button>
                </div>

            </div>
        </div>
    )
}

export const Climate = () => {
    return (
        <div className='nft-col'>
            <h1>
                Climate Action + Bingo
            </h1>
            <br />
            <p>
                Designed like Spanish Loteria Cards, the Army of Trees Tokens are your game piece to monthly prizes and immediately offsets your carbon footprint.
                Grand Prizes of 24 NFTs are up for grabs each month for the next 2 years.
            </p>
            <br />
            <div className='box'>
                <h3>Win an Other Deed:</h3>
                <p>
                    <span>
                        <img
                            src={require("../../images/world-icon.png")}
                        />
                    </span>
                    A World of Women
                </p>
                <p>
                    <span>
                        <img
                            src={require("../../images/cat_icon.png")}
                        />
                    </span>
                    A Cool Pet
                </p>
                <p>and Much More!</p>
            </div>
            <br />
            <p>
                Each event comes with tasks for the team to create a sustainable and consistent community of eco-warriors!
            </p>
        </div>
    )
}