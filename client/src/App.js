import Axios from 'axios'
import React from 'react'
import YouTubeForm from './component/YouTubeForm'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import YoutubeDisplay from './component/YoutubeDisplay'


class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       uArray:[]
    }
  }
  

  create = (udata) => {
    Axios.post('http://localhost:5000', udata)
      .then(res => {
        console.log(res)
      })
  }

  componentDidMount(){
    this.getall();
  }


  getall(){
    Axios.get('http://localhost:5000/allvideo')
    .then(res=>{
      this.setState({uArray:res.data})
      console.log(this.state.uArray)
    })
  }





  render() {
    return (
      <div>
        <Router>
          <Route exact path="/">
            <YoutubeDisplay getdata={this.state.uArray}/>
          </Route>
          <Route path="/youtubeForm">
            <YouTubeForm youData={this.create} />
          </Route>
        </Router>

      </div>
    )
  }
}

export default App;
