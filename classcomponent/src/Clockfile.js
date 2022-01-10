import React, { Component } from 'react'

export default class Clockfile extends Component {
    constructor(props){
        super(props)
        this.state = {
          count:0
        }
        this.handleIncrement=this.handleIncrement.bind(this)
      }

      componentDidMount(){
        setTimeout(()=>{
          this.handleIncrement()
        },2000)
      }
      handleIncrement(){
        this.setState({count:this.state.count + 1});
      }
      componentDidUpdate() {
        document.getElementById("mount-state").innerHTML="Component did update"
        console.log("Component did update");
      }
    render() {
        return (
            <>
               <h2>{this.state.count}</h2>
               <button onClick={this.handleIncrement}>Increment</button>
                <p id="mount-state"></p>
            </>
        )
    }
}