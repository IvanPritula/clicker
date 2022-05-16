import React, { Component } from 'react';
import "../Display/Display.modules.css";

export default class Display extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className='display'>
          <p>Шаг : {this.props.step} </p>
          <p>Сумма : {this.props.summa} </p>
          <p>Состояния движения  : <span className='vibor'>{this.props.currentTemplate ? "back" : "forword" }</span></p>
          <p>Частота: {this.props.chastota}</p>
          <p>Текущее время: {this.props.time}</p>
      </div>
    )
  }
}
