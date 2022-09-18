import React from 'react';
import './PhaseGoal.css';

function PhaseGoal() {

    return (
        <div className='PhaseGoalCard'>
            <div className='PhaseGoal-container'>
                <div className='PhaseGoal-row'>
                    <div className='PhaseGoal-col'>
                        <div className='PhaseGoal-text-wrapper'>
                            <p className='PhaseGoal-text-1'>
                                Army of trees was created directly in response to the congressional ruling to roll back carbon emissions.
                            </p>
                            <h1 className='heading-1'>Our Phase 1 Climate Action Goal</h1>
                            <div className='PhaseGoal-img-wrapper'>
                                <img src={require('../../images/phasegoal.png')} alt='' className='PhaseGoal-img' />
                            </div>
                            <h1 className='heading-2'>FOREVER OFFSETS</h1>
                            <p className='PhaseGoal-subtitle'>
                                We will offset the carbon footprint of our entire community, FOREVER!
                            </p>
                            <p className='PhaseGoal-text-2'>
                                Every person emits the equivalent of approximately two tons of carbon dioxide a
                                year from the time food is produced to when the human body excretes it, representing more
                                than 20 percent of total yearly emissions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhaseGoal