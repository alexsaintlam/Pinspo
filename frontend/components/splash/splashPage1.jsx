import React from 'react';
import Photo1 from '../../../app/assets/images/splash_page_1/photo1.jpg';
import Photo2 from '../../../app/assets/images/splash_page_1/photo2.jpg';
import Photo3 from '../../../app/assets/images/splash_page_1/photo3.jpg';
import Photo4 from '../../../app/assets/images/splash_page_1/photo4.jpg';
import Photo5 from '../../../app/assets/images/splash_page_1/photo5.jpg';
import Photo6 from '../../../app/assets/images/splash_page_1/photo6.jpg';

const SplashPage1 = () => {
    return (
        <div className="splash-body">
            <h2 className="splash1-h2">outdoor traveling idea</h2>
            <div className="splash-house">
                <div className="splash-container1">
                    <img src={Photo1} />
                    <img src={Photo2} />
                    <img src={Photo3} />
                </div>
            </div>
            <div className="splash-house">
                <div className="splash-container2">
                    <img src={Photo4} />
                    <img src={Photo5} />
                    <img src={Photo6} />
                </div>
            </div>
            <div className="splash-house">
                <div className="splash-container3">
                    <img src={Photo1} />
                    <img src={Photo2} />
                    <img src={Photo3} />
                </div>
            </div>
            <div className="splash-house">
                <div className="splash-container4">
                    <img src={Photo4} />
                    <img src={Photo5} />
                    <img src={Photo6} />
                </div>
            </div>
            <div className="splash-house">
                <div className="splash-container5">
                    <img src={Photo1} />
                    <img src={Photo2} />
                    <img src={Photo3} />
                </div>
            </div>
            <div className="splash-house">
                <div className="splash-container6">
                    <img src={Photo4} />
                    <img src={Photo5} />
                    <img src={Photo6} />
                </div>
            </div>
            <div className="splash-house">
                <div className="splash-container7">
                    <img src={Photo1} />
                    <img src={Photo2} />
                    <img src={Photo3} />
                </div>
            </div>
        </div>
    )
}

export default SplashPage1;