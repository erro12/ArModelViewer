import React from 'react';
import './CollectibleToken.css';
import Token from './Token';

function CollectibleToken() {

  return (
    <div className='collectible-token-card'>
      <div className='collectible-token-container'>
        <div className='collectible-token-row'>
          <div className='collectible-token-col'>
            <div className='collectible-token-text-wrapper'>
              <h1 className='heading'>YOUR COLLECTABLE TOKEN</h1>
              <p className='collectible-token-subtitle'>A game piece that offsts your carbon foot print</p>
            </div>
          </div>
        </div>
        <div className='token-row'>
          <Card
            title={"CARBON OFFSET"}
            description={"Every token equals your own new planted tree with our partners at carbonfund.org to offset your carbon footprint of joining our green community."}
            imgurl={"../../images/bulb.png"}
          />
          <Card
            title={"INITIATIVES"}
            description={"25% of our mint will go to maintaining and fulfilling our communities voted initiatives such as charity and partnering with organizations in our network."}
            imgurl={"../../images/chess.png"}
          />
          <Card
            title={"GAMIFICATION"}
            description={"Army of Tree Tokens are your game pieces that get you sweepstake prizes from game events held monthly in tandem with carbon off setting actions from the dao."}
            imgurl={"../../images/vector.png"}
          />
        </div>


        <div className='collectible-token-row'>
          <div className='collectible-token-col'>
            {/* <Token />
                    <Token />
                    <Token /> */}
          </div>
        </div>
      </div>
    </div >
  )
}

export default CollectibleToken;


export const Card = ({ title, description, imgurl }) => {

  return (
    <div
      className="collection-card"
    >
      <div
        className='image_container'
      >
        <img
          className='image'
          alt='Avatar'
        // src={require(imgurl)}
        />
      </div>
      <div
      // className="container"
      >
        <h2 >
          <b>{title}</b>
        </h2>
        <p>{description}
        </p>
      </div>
    </div >)
}