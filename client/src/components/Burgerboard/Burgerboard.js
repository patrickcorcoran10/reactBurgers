import React, { Component } from 'react'
import axios from 'axios';
import superagent from 'superagent';
import '../Burgerboard/Burgerboard.css';

export default class Burgerboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            burgers: {},
            eatenBurgers: []
        } 
        // this.eat = this.eat.bind(this);
        // this.create = this.create.bind(this);
    }
    componentWillMount() {
        axios.get('/api/all-burgers')
        .then(res => {
            console.log(res);
            this.setState({
                burgers: res,
            })
        });
    }
    acceptBurgerName = e => {
        // console.log(e.target.value);
        this.setState({
            burgers: {
                burger: {
                    name: this.refs.burgerName.value,
                    eaten: false
                }
            }
        });
        console.log(this.state)
    }
    create = e => {
        e.preventDefault();
        console.log(this.refs.burgerName.value)
        superagent
            .post('/api/create') 
            .send({
                name: this.refs.burgerName.value,
                eaten: false
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    eat = e => {

    }
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-md-2'>
            </div>
            <div className='col-md-8'>
                <p>Welcome to the Eat-a-Burger App</p>
                <p>We are here to help you create your own burger, or eat one of the already created burgers.</p> <p>Have Fun!</p>
            </div>
            <div className='col-md-2'>
            </div>
        </div>
        <hr/>
        <div className='row'>
            <div className='col-md-4'>
            </div>
            <div className='col-md-4'>
                <p>Create Your Own Burger!</p>
                <input placeholder=' Place Burger Here' onChange={this.acceptBurgerName.bind(this)}ref='burgerName'/>
                <br/>
                <br/>
                <button onClick={this.create.bind(this)}>Create!</button>
            </div>
            <div className='col-md-4'>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-4'>
                <h6>Burgers Available</h6> 
            </div>
            <div className='col-md-2'></div>

            <div className='col-md-4'>
                <h6>Eaten Burgers</h6>
            </div>
            <div className='col-md-1'></div>
        </div>
      </div>
    )
  }
}
