import React from 'react';

class NonSessionShow extends React.Component {
    render () {
        return (
            <div className="user-body">
                <div className="user-body-head">
                    <button className="user-created-button">Created</button>
                    <button className="user-saved-button">Saved</button>
                </div>
                <div className="user-body-gallery">
                    <div className="picture-container">
                        <img src={picture1} />
                        <button className="gallery-save">Save</button>
                    </div>
                    <div className="picture-container">
                        <img src={picture2} />
                        <button className="gallery-save">Save</button>
                    </div>
                    <div className="picture-container">
                        <img src={picture3} />
                        <button className="gallery-save">Save</button>
                    </div>
                    <div className="picture-container">
                        <img src={picture4} />
                        <button className="gallery-save">Save</button>
                    </div>
                    <div className="picture-container">
                        <img src={picture1} />
                        <button className="gallery-save">Save</button>
                    </div>
                    <div className="picture-container">
                        <img src={picture2} />
                        <button className="gallery-save">Save</button>
                    </div>
                    <div className="picture-container">
                        <img src={picture3} />
                        <button className="gallery-save">Save</button>
                    </div>
                    <div className="picture-container">
                        <img src={picture1} />
                        <button className="gallery-save">Save</button>
                    </div>
                    <div className="picture-container">
                        <img src={picture1} />
                        <button className="gallery-save">Save</button>
                    </div>
                    <div className="picture-container">
                        <img src={picture1} />
                        <button className="gallery-save">Save</button>
                    </div>
                    <div className="picture-container">
                        <img src={picture1} />
                        <button className="gallery-save">Save</button>
                    </div>
                    <div className="picture-container">
                        <img src={picture1} />
                        <button className="gallery-save">Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NonSessionShow;
                
                