import React from 'react'

const Footer = () => {
    return (
        <div className="footer-t">
            <div className="container ">
                <div className="footer-wrapper d-flex">
                    <div className="footer-year">
                        <p className="footer-allright">
                            @2021 Bellas. All Right Reserved.
                        </p>
                    </div>
                    <div className="footer-click">
                        <ul className="footer-ul d-flex">
                            <li className="footer-li-item"><a href="#">Privacy</a></li>
                            <li className="footer-li-item"><a href="#">Terms</a></li>
                            <li className="footer-li-item"><a href="#">Feedback</a></li>
                            <li className="footer-li-item"><a href="#">Support</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
