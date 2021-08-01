import React from 'react'
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faUserFriends, faClock } from "@fortawesome/free-solid-svg-icons";


const Info = () => {
    return (
        <div className="container info-custom-t">
            <div className="row">
                <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                    <div className="info-custom-line d-flex">
                        <button className="btn info-custom-icon">    
                            <FontAwesomeIcon icon={faVideo} /> 
                        </button>
                        <div className="info-custom-text">
                            <p className="info-custom-title">30,000 online courses</p>
                            <p className="info-custom-sub">Enjoy a variety of fresh topics</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                    <div className="info-custom-line d-flex">
                        <button className="btn info-custom-icon">
                            <FontAwesomeIcon icon={faUserFriends} /> 
                        </button>
                        <div className="info-custom-text">
                            <p className="info-custom-title">Expert instruction</p>
                            <p className="info-custom-sub">Find the right instructor for you</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                    <div className="info-custom-line d-flex">
                        <button className="btn info-custom-icon">
                            <FontAwesomeIcon icon={faClock} /> 
                        </button>
                        <div className="info-custom-text">
                            <p className="info-custom-title">Lifetime access</p>
                            <p className="info-custom-sub">Learn on your schedule</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
