import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './howto.scss'

@withStyles(s)
export default class Howto extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'display': 'none',
      'icon': 'up'
    }
  }
  updateDisplayListener(){
    if(this.state.display === 'none'){
      this.setState({
        'display': 'block',
        'icon': 'down'
      });
    }
    if(this.state.display === 'block'){
      this.setState({
        'display': 'none',
        'icon': 'up'
      });
    }
  }
  render(){
    return(
      <div style={{'marginBottom': '15px'}}>
        <div onClick={() => this.updateDisplayListener()} className={s.heading}>
          <div style={{'float':'right'}}><i className={"zmdi zmdi-chevron-" + this.state.icon}></i></div>
          {this.props.heading}</div>

        <div style={{'display': this.state.display}} className={s.contain}>
          {this.props.children}
        </div>
      </div>
    )
  }

}
