import React, { Component } from 'react'
import './youform.css'

class YouTubeForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             url:'',
             iconUrl:'',
             views:'',
             posted:'',
             brand:''
        }
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) =>{
        // e.preventDefault();
        const udata={
            title:this.state.title,
            url:this.state.url,
            iconUrl:this.state.iconUrl,
            views:this.state.views,
            posted:this.state.posted,
            brand:this.state.brand
        }
        this.props.youData(udata)
    }
    

    render() {
        return (
            <div className="youtubeform">
                <div className="container you_form">
                    <form onSubmit={this.handleSubmit} autoComplete="off">
                        <div className="form-group">
                            <label >Video Title</label>
                            <input type="text" className="form-control" name="title" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label >URL</label>
                            <input type="text" className="form-control" name="url" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label >Icon URL</label>
                            <input type="text" className="form-control" name="iconUrl" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label >Views</label>
                            <input type="text" className="form-control" name="views" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label >Posted On</label>
                            <input type="text" className="form-control" name="posted" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label >Brand</label>
                            <input type="text" className="form-control" name="brand" onChange={this.handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default YouTubeForm
