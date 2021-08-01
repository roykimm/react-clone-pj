import React from 'react'
import javascriptIMG from '../../images/javascript.png';
import cssIMG from '../../images/css.png';
import graphqlIMG from '../../images/graphql.png';
import htmlIMG from '../../images/html.png';
import pythonIMG from '../../images/python.png';
import reactIMG from '../../images/react.png';
import angularIMG from '../../images/angular.png';
import woman1 from '../../images/woman1.png';

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar, faStarHalf, faSignal, faBookmark } from "@fortawesome/free-solid-svg-icons";

const Coursecard = (props) => {

    const findImage = (param) => {
        
        if( param == "javascript"){
            return javascriptIMG;
        } else if( param == "css"){
            return cssIMG;
        } else if( param == "graphql"){
            return graphqlIMG;
        } else if( param == "html"){
            return htmlIMG;
        } else if( param == "python"){
            return pythonIMG;
        } else if( param == "react"){
            return reactIMG;
        } else if( param == "angular"){
            return angularIMG;
        } else {
            return "";
        }
    }

    const starCnt = props.star;

    return (
        <div className="card-t col-lg-3 col-md-6 col-sm-6">
            <div className="card card-wrapper" style={{width: "18rem"}}>
                <img src={findImage(props.image)} class="card-img-top card-custom-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><a className="card-title-a" href="#">{props.title}</a></h5>
                    <div className="card-time-level d-flex">
                        <div className="card-watch-icon">
                            <FontAwesomeIcon icon={faClock} style={{ color: "grey" }} /> 
                        </div>
                        <p className="card-time">{props.hour}</p>
                        <div className="card-watch-icon">
                            <FontAwesomeIcon icon={faSignal} style={{ color: "purple" }} /> 
                        </div>
                        <p className="card-level">{props.level}</p>
                    </div>
                    <div className="card-star-wrapper d-flex">
                        <div className="card-star-icon d-flex">
                            <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} /> 
                            <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} /> 
                            <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} /> 
                            <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} /> 
                            <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} /> 
                        </div>
                        <p className="card-star">{props.star}</p>
                    </div>
                    <hr />
                    <div className="card-prof-wrapper d-flex">
                        <img className="small-round-img" src={woman1} alt="avatar" />
                        <p className="card-profNm">{props.profNm}</p>
                        <button type="button" className="btn card-bookmark-icon" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
                            <FontAwesomeIcon icon={faBookmark} style={{ color: "grey" }} /> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coursecard
