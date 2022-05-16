import React, { Component } from 'react'
import './menu.css'

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.data={}
       

        this.state={
              intervalId : null
        }
    }

    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.data[name] = value;
        this.props.sendData(this.data);
    }

    makeStep = () => {
        if(!this.props.currentTemplate){
            const result = { summa:Number(this.props.summa) + Number(this.props.step)}
            this.props.makeStep(result);
        }
        else{
            const result = { summa:Number(this.props.summa) - Number(this.props.step)}
            this.props.makeStep(result);
        }
        
    }

    changeTemplate = () =>{
        const result = {currentTemplate:this.props.currentTemplate ? false :true};
        this.props.changeTemplate(result);
    }

    componentDidMount(){
        this.makeStepAuto();
    }

    makeStepAuto = () =>{
        if(this.state.intervalId === null){
            setInterval(this.stopAuto,30000);
            this.setState((state)=>{
            return {
                ...state,
                intervalId : setInterval(this.makeStep, this.props.chastota * 1000)
            }
        }) 
        }
    }

    stopAuto = () => {
        clearInterval(this.state.intervalId);
        this.setState((state)=>{
            return {
                ...state,
                intervalId : null
            }
        }) 
    }

  render() {
    return (
      <div>
          <div className='input'>
               <input placeholder='Зделать шаг' name='step' type="number" onChange={this.onChange} />
          </div>
          <div className='input'>
               <input placeholder='Частота' name='chastota' type="number" onChange={this.onChange} />
          </div>
          <button className='buttton' onClick={this.makeStep}>Зделать шаг</button>
          <button className='buttton' onClick={this.changeTemplate}>Выбор движения</button>
          
          <button className='buttton' onClick={this.makeStepAuto}>Авто запуск шага</button>
          <button className='buttton'  onClick={this.stopAuto}>Авто стоп шага</button>
       </div>
    )
  }
}
