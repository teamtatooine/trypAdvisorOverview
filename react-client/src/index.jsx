import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Lines from './components/Lines.jsx';
import TripPlanner from './components/TripPlanner.jsx';
import data from './sample_data.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'lines',
      lines: [],//data.sampleLines
      stops: data.sampleStopList.stops
    }
  }
componentDidMount() {
  //let finalLinesData = [];
  console.log(this.state.stops);
  $.get('/api/lines', function(data) {
  }).done(data => {
    console.log("data from server for lines",data);
    //let orgLinesData = data;
    this.setState({
      lines: data
     });
  })
}
  changeView(view) {
    this.setState({
      view: view
    });
  }

  render() {
    //console.log("data.sampleLines",this.state.lines);
    console.log("lines",this.state.lines);
    return (
      <div>
        <div className="panel">
          <h1>Transit Planner</h1>
          <nav className="nav">
            <span
              className={this.state.view === 'lines'
                ? 'nav-item selected'
                : 'nav-item unselected'}
              onClick={() => this.changeView('lines')}
            >
              Lines
            </span>
            <span
              className={this.state.view === 'planner'
                ? 'nav-item selected'
                : 'nav-item unselected'}
              onClick={() => this.changeView('planner')}
            >
              Trip Planner
            </span>
          </nav>
          <div className="main-view">
            {this.state.view === 'lines'
              ? <Lines lines = {this.state.lines} stops = {this.state.stops} />
              : <TripPlanner />
            }
          </div>
        </div>
        <div className="map-panel">
          <img src="/images/bart-system-map.png"/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

