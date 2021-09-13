import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

class SessionShow extends React.Component {
    render() {
        return (
            <div className="session-show-body">
                <div className="session-add"><AddIcon style={{ fontSize: 34 }} /></div>
                <div className="session-show-gallery">
                    <div className="board-container">
                        <img src={picture1} />
                        <div className="board-insight">
                            <div className="board-title">Hardcoded</div>
                            <div className="board-sub-title">
                                <div className="board-pin-count">2 pins</div>
                                <div className="board-date">6w</div>
                            </div>
                        </div>
                    </div>
                    <div className="board-container">
                        <img src={picture2} />
                        <div className="board-insight">
                            <div className="board-title">Hardcoded</div>
                            <div className="board-sub-title">
                                <div className="board-pin-count">2 pins</div>
                                <div className="board-date">6w</div>
                            </div>
                        </div>
                    </div>
                    <div className="board-container">
                        <img src={picture3} />
                        <div className="board-insight">
                            <div className="board-title">Hardcoded</div>
                            <div className="board-sub-title">
                                <div className="board-pin-count">2 pins</div>
                                <div className="board-date">6w</div>
                            </div>
                        </div>
                    </div>
                    <div className="board-container">
                        <img src={picture4} />
                        <div className="board-insight">
                            <div className="board-title">Hardcoded</div>
                            <div className="board-sub-title">
                                <div className="board-pin-count">2 pins</div>
                                <div className="board-date">6w</div>
                            </div>
                        </div>
                    </div>
                    <div className="board-container">
                        <img src={picture1} />
                        <div className="board-insight">
                            <div className="board-title">Hardcoded</div>
                            <div className="board-sub-title">
                                <div className="board-pin-count">2 pins</div>
                                <div className="board-date">6w</div>
                            </div>
                        </div>
                    </div>
                    <div className="board-container">
                        <img src={picture2} />
                        <div className="board-insight">
                            <div className="board-title">Hardcoded</div>
                            <div className="board-sub-title">
                                <div className="board-pin-count">2 pins</div>
                                <div className="board-date">6w</div>
                            </div>
                        </div>
                    </div>
                    <div className="board-container">
                        <img src={picture3} />
                        <div className="board-insight">
                            <div className="board-title">Hardcoded</div>
                            <div className="board-sub-title">
                                <div className="board-pin-count">2 pins</div>
                                <div className="board-date">6w</div>
                            </div>
                        </div>
                    </div>
                    <div className="board-container">
                        <img src={picture4} />
                        <div className="board-insight">
                            <div className="board-title">Hardcoded</div>
                            <div className="board-sub-title">
                                <div className="board-pin-count">2 pins</div>
                                <div className="board-date">6w</div>
                            </div>
                        </div>
                    </div>
                    <div className="board-container">
                        <img src={picture1} />
                        <div className="board-insight">
                            <div className="board-title">Hardcoded</div>
                            <div className="board-sub-title">
                                <div className="board-pin-count">2 pins</div>
                                <div className="board-date">6w</div>
                            </div>
                        </div>
                    </div>
                    <div className="board-container">
                        <img src={picture2} />
                        <div className="board-insight">
                            <div className="board-title">Hardcoded</div>
                            <div className="board-sub-title">
                                <div className="board-pin-count">2 pins</div>
                                <div className="board-date">6w</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="session-line-container">
                    <hr className="session-line" />
                </div>
                <div className="session-unorganized">
                    <div className="unorganized-header">
                        <div className="header-ideas">Unorganized ideas</div>
                        <button className="organize-button">Organize</button>
                    </div>
                    <div className="unorganized-gallery">
                        <div className="unorganized-image">
                             <img src={picture1} />
                             <img src={picture2} />
                             <img src={picture3} />
                             <img src={picture4} />
                             <img src={picture1} />
                             <img src={picture2} />
                             <img src={picture3} />
                             <img src={picture4} />
                             <img src={picture1} />
                             <img src={picture1} />
                             <img src={picture1} />
                             <img src={picture1} />

                        </div>
                    </div>
                </div>

                
                
            </div>
        )  
    }
}

export default SessionShow;

