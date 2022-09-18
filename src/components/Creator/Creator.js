import React from 'react';
import './Creator.css';

// function Creator() {

//   return (
//     <div
//       className='creatorCard'
//     >
//       <div
//         className='creator-container'
//       >
//         <div
//           className='row-creator-row'
//         >
//           <div className='col'>
//             <div className='creator-text-wrapper'>
//               <h1 className='heading'>
//                 The
//                 <span className='title-span'>Army of Trees</span>
//                 NFT line was created by
//                 <span className='title-name'>
//                   Adam Richman
//                 </span>.
//               </h1>
//               <p
//               // className='creator-quote'
//               >
//                 "I don't want to be another person tweeting
//                 and not doing anything about it"
//               </p>
//               <p
//                 className='quote-title'
//               >
//                 - Adam
//               </p>
//             </div>
//           </div>
//           <div className='col'>
//             <div className='creator-img-wrapper'>
//               <img
//                 src={require('../../images/creator.png')}
//                 alt='creator'
//                 className='creator-img'
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

const Creator = () => {

  return (
    <div className='creator-container'>
      <div className='creator-row'>
        <div className='creator-img-container'>
          <img
            src={require('../../images/creator.png')}
            alt='creator'
            className='creator-img'
          />
        </div>
        <div className='creator-col'>
          <h1 className='heading'>
            The
            <span className='title-span'>Army of Trees</span>
            NFT line was created by
            <span className='title-name'>
              Adam Richman
            </span>.
          </h1>
          <div className='creator-img-mobile'>
            <img
              src={require('../../images/creator.png')}
              alt='creator'
              className='creator-img'
            />
          </div>
          <p
            className='creator-quote'
          >
            "I don't want to be another person tweeting
            and not doing anything about it"
          </p>
          <p
            className='quote-title'
          >
            - Adam
          </p>
        </div>
      </div>

    </div>
  )
}

export default Creator