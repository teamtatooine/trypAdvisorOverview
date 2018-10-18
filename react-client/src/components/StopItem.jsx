import React from 'react';

const StopItem = (props) => {
  //console.log(props);
  /*if(props.item) {
    let lineItem = props.item.name;
  }*/
  return (

    <option>{props.item.name}</option>
  )
}

export default StopItem;