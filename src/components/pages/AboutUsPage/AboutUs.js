import React from 'react'
import BingCommunity from '../../BingCommunity'
import CollectibleToken from '../../CollectibleToken/CollectibleToken'
import Creator from '../../Creator/Creator'
import MintDetails from '../../MintDetails'
import NFTClimate from '../../NFT'
import PhaseGoal from '../../PhaseGoal/PhaseGoal'
import TitleCard from '../../TitleCard/TitleCard'
import './about.css'

function AboutUs() {
  return (
    <>
      <main className="main-alignment">
        <TitleCard />
        <Creator />
        <PhaseGoal />
        {/* <div className='gradiant-div'>
          </div> */}
        <CollectibleToken />
        <NFTClimate />
        <MintDetails />
        <BingCommunity />
      </main>

    </>
  )
}

export default AboutUs