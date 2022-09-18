import React from 'react'
import './bingcommunity.css';

const BingCommunity = () => {
    return (
        <div className='bingmain'>
            <div className='container-row'>
                <Bingo />
                <div className='bing-line'></div>
                <Community />
            </div>
        </div>
    )
}

export default BingCommunity

export const Bingo = () => {
    return (
        <div className='community-container'>
            <h2 className='heading'>
                Bingo Prizes
            </h2>
            <p className='bing-para'>
                NFTs from popular collections
            </p>
            <p className='bing-para'>
                Ethereum Cash Prizes
            </p>
            <p className='bing-para'>
                Green Egg Charcoal Smoker
            </p>
            <p className='bing-para'>
                Signed Cookbook from Adam Richman
            </p>
            <p className='bing-para'>
                And countless others!
            </p>

        </div>
    )
}

export const Community = () => {
    return (
        <div className='community-container'>
            <h2 className='heading'>
                COMMUNITY PERKS
            </h2>
            <p className='community-para'>
                Along with our game, community members
                get direct access into Adam Richman's
                network of green experiences. We've
                partnered up with restaurants,
                botanical gardens, and the world's
                top chefs to give our community memorable perks and experiences
                through our climate action initiatives.
            </p>
        </div>
    )
}