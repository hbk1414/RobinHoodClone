import React from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'

function Newsfeed() {
    return (
        <div className="Newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>£140,000</h1>
                        <p>£44 (+0.04) Today</p>
                    </div>
                    <div className="newsfeed__chart">
                        <LineGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed