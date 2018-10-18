import React from 'react';
import $ from 'jquery';
import LineItem from './LineItem.jsx';
import StopItem from './StopItem.jsx';

class Lines extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
  }



/*const Lines = (props) => {
  this.handleChange = this.handleChange.bind(this);
  if(props && props.lines && props.stops) {
    console.log("props",props.lines);
    var mappedLines = props.lines.map((item, index) =>(<LineItem item ={item} key = {index}/>));
    var mappedStops = props.stops.map((item, index) =>(<StopItem item ={item} key = {index}/>));
  }*/
handleChange(event) {
  //console.log(event.target);
  console.log("my",event.target.value);

 /* let index = 0;
  for(var i = 0; i < this.props.lines.length(); i++) {
    if(name = this.props.line[i].name) {
      index = i+1;
    }
  }*/


  //if()
 $.get('/api/lines/my', function(data) {
  }).done(data => {
    console.log("data from server for lines",data);
    //let orgLinesData = data;
  });
}
render() {
console.log("this.props", this.props);
  if(this.props && this.props.lines && this.props.stops) {
    //console.log("props",props.lines);
    var mappedLines = this.props.lines.map((item, index) =>(<LineItem item ={item} key = {index}/>));
    var mappedStops = this.props.stops.map((item, index) =>(<StopItem item ={item} key = {index}/>));
  }
  return (
    <div className="lines-view">
      <div className="selections">
        Choose a line:
        <select onChange={this.handleChange}>
        {mappedLines}
        </select>
      </div>
      <div className="lines-stop-list">
        <ul>
          <li>{mappedStops}</li>
        </ul>
      </div>
    </div>
  );
}
}

export default Lines;