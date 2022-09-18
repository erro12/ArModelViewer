import React from 'react';
import './TitleCard.css';


const TitleCard = () => {

  return (
    <div className='titleCard'>
      <div className='title-container'>
        <div className='tiltlecard-col'>
          <div className='titlecard-desktop-content'>
            <h1 className='titlecard-heading'>
              Army of Trees
            </h1>
            <p className='titlecard-desktop-para'>
              A community of 5,500 web3 eco-warriors conquering carbon pollution.
            </p>
            <p>
              AoT was created in direct response to the
              United States congressional rollback of carbon
              emission standards. Political uncertainty makes
              the environment OUR responsibility.
            </p>
          </div>
          <div className='ipad-content'>
            <h1 className='titlecard-heading'>
              <p>
                Environmentally
              </p>
              <p>
                Friendly NFTs
              </p>
            </h1>
            <div className='titlecard-col-mobile'>
              <img
                src={require('../../images/nft-cardset.png')}
                alt=''
                className='titlecard-img'
              />
            </div>
            <p>
              <span className='ipadContent-span'>
                Army of Trees
              </span>
              is an green, energy-effiecent, community
              defending line of NFTs. We strive to prootect
              our planet by incorporating innovative green
              infrastructure and other sustainable design
              strategies.
            </p>
          </div>
          <button
            className='titlecard-button'
          >
            Mint here
          </button>

        </div>
        <div className='titlecard-col'>
          <img
            src={require('../../images/nft-cardset.png')}
            alt=''
            className='titlecard-img'
          />
        </div>
        {/* <div
          className='row title-row'
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <div className='col'>
            <div className='title-text-wrapper'>
              <h1 className='heading'>Environmentally Friendly NFTs</h1>
              <p className='title-subtitle'><span className='title-subtitle-highlight'>Army of Trees</span> is an green, energy-effiecent, community defending line of NFTs. We strive to prootect our planet by incorporating innovative green infrastructure and other sustainable design strategies.</p>
              <Link to='/sign-up'>
                <Button buttonSize='btn--primary' buttonColor='primary'>MINT HERE</Button>
              </Link>
            </div>
          </div>
          <div className='col'>
            <div className='title-img-wrapper'>
              <img src={require('../../images/nft-cardset.png')} alt='' className='title-img' />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default TitleCard