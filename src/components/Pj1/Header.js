import React from 'react'
import woman1 from '../../images/woman1.png';

const Header = () => {
    return (
        <div className="header-t">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="header-bold-title">Welcome to Bellas UI<br/>Learning Application</h1>
                        <h5 className="header-sub-title">
                            Hand-picked Instructor and expertly crafted<br />
                            courses, designed for the mordern students<br />
                            and entrepreneur
                        </h5>
                        <button className="btn btn-success btn-custom-success">Browse Courses</button>
                        <button className="btn btn-custom-white">Are You Instructor</button>
                    </div>
                    {/* <div className="col col-lg-6 col-md-6 col-xs-12">
                        <img className="header-custom-img" src={woman1} alt="" />
                    </div> */}
                </div>
            </div>
            
        </div>
    )
}

export default Header
