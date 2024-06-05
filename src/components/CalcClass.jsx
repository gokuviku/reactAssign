import { Component } from 'react';
import styles from './Cals.module.css';


export default class CalcClass extends Component {
  constructor() {
    super()
    this.state = {
      num1: '',
      num2: '',
      ans: 0,

    }
    this.handleForm = (e) => {
      e.preventDefault()
    }
     this.handleAdd=()=>{
      
    }

    
  }
  render() {
    return (
      <div>
        <h1>Class</h1>
        <form onSubmit={this.handleForm}>
        <input type="number"
          className={styles.ip}
          placeholder="Please Enter Number Only."
          value={this.state.num1}
          onChange={(e)=>{this.setState.num1(e.target.value)}}
        />
        <input type="number"
          className={styles.ip}
          placeholder="Please Enter Number Only."
          value={this.state.num2}
          onChange={(e) => { this.setState.num2(e.target.value) }}
        /><br />

        <button onClick={this.handleAdd}>Add</button>
        <button>Sub</button>
        <button>Div</button>
        <button>Mul</button>
        <h2>Result : {this.ans}</h2>
        </form>

      </div>
    )
  }
}
