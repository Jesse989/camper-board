import React from 'react';
import logo from './logo.svg';
import './App.css';
import Camper from './Camper';
import 'bootstrap/dist/css/bootstrap.css'
import Toggle from './Toggle';
import {connect} from 'react-redux';
import * as actionCreators from './action_creators';

class App extends React.Component  {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Camper Leaderboard</h2>
        </div>
        <p className="App-intro">
          Click button to sort by 'alltime' or 'month'.
        </p>
        <Toggle order={this.props.order} toggle={this.props.sortCampers} />
        <Camper campers={this.props.data} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.get('campers'),
    order: state.get('order')
  };
}



export const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App);
