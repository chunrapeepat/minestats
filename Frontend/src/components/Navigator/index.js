import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './nav.scss'

@withStyles(s)
export default class Navigator extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <div className={s.navigator} style={{'background': this.props.color}}>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

}
