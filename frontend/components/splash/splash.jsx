import React from 'react';
import Photo1 from '../../../app/assets/images/photo1.jpg';
import Photo2 from '../../../app/assets/images/photo2.jpg';
import Photo3 from '../../../app/assets/images/photo3.jpg';
import Photo4 from '../../../app/assets/images/photo4.jpg';
import Photo5 from '../../../app/assets/images/photo5.jpg';
import Photo6 from '../../../app/assets/images/photo6.jpg';
import Photo7 from '../../../app/assets/images/photo7.jpg';
import Photo8 from '../../../app/assets/images/photo8.jpg';
import Photo9 from '../../../app/assets/images/photo9.jpg';
import Photo11 from '../../../app/assets/images/photo11.jpg';

const Splash = ({ currentUser }) => {
    const signedOutSplash = () => (
        <div className="splash-body">
            <div className="splash-container">
                <img src={Photo1} />
                <img src={Photo2} />
                <img src={Photo3} />
                <img src={Photo4} />
                <img src={Photo5} />
                <img src={Photo6} />
                <img src={Photo7} />
                <img src={Photo8} />
                <img src={Photo9} />
                <img src={Photo11} />
                <img src={Photo1} />
                <img src={Photo2} />
                <img src={Photo3} />
                <img src={Photo4} />
                <img src={Photo5} />
                <img src={Photo6} />
                <img src={Photo7} />
                <img src={Photo8} />
                <img src={Photo9} />
                <img src={Photo11} />
            </div>
        </div>
    )

    return currentUser ? null : signedOutSplash();
}

export default Splash;