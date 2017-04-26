import React, { Component } from 'react'
import {Link} from 'react-router';
import withStyles from "isomorphic-style-loader/lib/withStyles"
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import s from './menubar.scss'

@withStyles(s)
export default class Menubar extends Component {
  constructor(){
    super()
    this.state = {
      menu: s.mnav,
      open: 0
    }
  }
  menuToggle(){
    if(this.state.open === 0){
      this.setState({
        menu: s.mnav + ' ' + s.mactive,
        open: 1
      })
    }
    if(this.state.open === 1){
      this.setState({
        menu: s.mnav,
        open: 0
      })
    }
  }
  menuClose(){
    if(this.state.open === 1){
      this.setState({
        menu: s.mnav,
        open: 0
      })
    }
  }
  render() {
    return (
      <div>

        <div className={s.menubar}>
          <div className="container">
            <span className={s.heading}>MinecraftHero</span>
            <div onClick={() => this.menuToggle()} className={s.mham}>
              <span className="zmdi zmdi-menu"></span>
            </div>
            <div className={this.state.menu}>
              <Link onClick={() => this.menuClose()} to="/">Home</Link>
              <Link onClick={() => this.menuClose()} to="/ranking">Ranking</Link>
              <Link onClick={() => this.menuClose()} to="/donate">Donate</Link>
              <Link onClick={() => this.menuClose()} to="/contact">Contact us</Link>
            </div>
            <div className={s.link}>
              <Link to="/">Home</Link>
              <Link to="/ranking">Ranking</Link>
              <Link to="/donate">Donate</Link>
              <Link to="/contact">Contact us</Link>
            </div>
          </div>
        </div>

        { this.props.children }

        <br/>
        <br/>
        <br/>
        <center>
          <span style={{'color':'#777'}}>@2017 Minecraft Hero Thailand.</span><br/>
          <Link style={{'marginRight':'15px'}} to="/">Home</Link>
          <Link style={{'marginRight':'15px'}} to="/ranking">Ranking</Link>
          <Link style={{'marginRight':'15px'}} to="/donate">Donate</Link>
          <Link to="/contact">Contact us</Link>
        </center>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}
