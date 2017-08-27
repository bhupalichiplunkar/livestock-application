import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatIncomingData } from '../helpers';
import { watchIncomingData } from '../actions'
import Websocket from 'react-websocket';
import TableView from '../components/tableView';
import GraphView from '../components/graphView';
import '../styles/app.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://stocks.mnet.website');
  }

  updateList(data){
    const modifiedData = formatIncomingData(JSON.parse(data));
    this.props.watchIncomingData(modifiedData);
  }

  componentWillUnmount(){
    this.socket.close();
  }


  render() {
    return (
      <div className="app">
        <div className="header">Realtime Stock Application</div>
        <Websocket url='ws://stocks.mnet.website' onMessage={this.updateList.bind(this)}/>
        <div className="main-container">
          <TableView data={this.props.tickerData} />
          <GraphView data={this.props.tickerData} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  // Whatever is returned will show up in props of App
  return {
    tickerData : state.tickerData
  }
}

//anything that is returned from this function will end up as props on App Container
function mapDispatchToProps(dispatch){
  //whenever updateList is called, the result should be passed to all reducers
  return bindActionCreators({ watchIncomingData : watchIncomingData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
