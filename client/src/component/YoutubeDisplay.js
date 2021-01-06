import React, { Component } from 'react'
import './youDisplay.css'
import {Link} from 'react-router-dom' 

class YoutubeDisplay extends Component {
    render() {
        return (
            <div className="youDisplay">
                <Link to="/youtubeForm">
                    <h4>Click here to upload videos</h4>
                </Link>
                <div className="container u_display">
                    <h4>Popular Videos <span>({this.props.getdata.length})</span></h4>
                    {this.props.getdata.reverse().map((e) => {
                        return (
                            <div className="u_contain">
                                <div className="u_video">
                                    <iframe title="title" width="360" height="215" src={e.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="content">
                                    <h4>{e.title}</h4>
                                    <p>{e.views} <span>| {e.posted}</span></p>
                                    <img src={e.iconUrl} alt="no" /><span> {e.brand}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default YoutubeDisplay
