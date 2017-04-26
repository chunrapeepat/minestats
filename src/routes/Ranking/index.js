import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './ranking.scss'
import Navigator from '../../components/Navigator'

@withStyles(s)
export default class Ranking extends React.Component {
  componentWillMount(){
    document.title = 'Ranking - Minecraft Hero Thailand'
  }
  render(){
    return(
      <div>
        <Navigator color="#F44336">
          <i className="zmdi zmdi-fire"></i> การจัดอันดับผู้เล่น
        </Navigator>
      </div>
    )
  }
}
