import React, { Component } from 'react';
import Display from '../../components/Display';
import Menu from '../../components/Menu';


export default class Cliker extends Component {
    constructor(props){
        super(props);
        this.state = {
            step: 1,
            summa: 0,
            currentTemplate : false,
            chastota : 1,
            time : 0,
            timeId:null
        }
    }

    changeTime = () =>{
        this.setState((state)=>{
            return {
                ...state,
                time:this.state.time+1
            }
        })
    }

    componentDidMount(){
        setTimeout(()=>{clearInterval(this.state.timeId); this.setState((state)=>{
            return{...state, timeId : null}
        })},30000);
       
        this.state.timeId = setInterval(this.changeTime, 1000);
    }
   
    changeTemplate = (data)=>{
        this.setState((state)=>{
            return{...state,
                ...data
            }
        })
    }

  render() {
    return (
      <div>
          <Menu chastota={this.state.chastota}
           changeTemplate={this.changeTemplate}
            currentTemplate={this.state.currentTemplate}
             sendData={this.changeTemplate}
              makeStep={this.changeTemplate}
               step={this.state.step}
               summa={this.state.summa}/>

          <Display time={this.state.time} 
          chastota={this.state.chastota}
           currentTemplate={this.state.currentTemplate} 
           step={this.state.step} 
           summa={this.state.summa} />

      </div>
    )
  }
}
