import React from "react";
import './App.css';
import axios from 'axios';

class App extends React.Component{

  state = {'advice':''}

  componentDidMount(){
    // console.log("componentDid")
    this.fetchAdvice();
  };

  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
      .then((response)=>{
        const {advice} = response.data.slip;

        //following statement give access to const advice .. outside the .then box =>
        // so that it can be used in return();
        this.setState({advice:advice})
        // console.log(advice);
      })
      .catch((error)=>{
        console.log(error);
      })
  }
   render(){
    const {advice} = this.state;
    return(
     <div className="app">
          <div className="card">
                <h2 className="heading">{advice}</h2>
                <button className="button" onClick={this.fetchAdvice}>
                  <span>Give Me Advice!</span>
                </button>
          </div>
     </div>
    );
   }
}


export default App;