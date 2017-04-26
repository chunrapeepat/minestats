import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import copy from 'copy-to-clipboard';

import Howto from '../../components/Howto'

import s from './index.scss'

import chunza2542 from './img/chunza2542.jpg'

@withStyles(s)
export default class IndexPage extends React.Component {
  constructor(){
    super()
    this.state = {
      copy: false
    }
  }

  componentWillMount(){
    document.title = 'Home - Minecraft Hero Thailand'
  }

  copyToClipboard(){
    copy('play.mcheroth.com');
    this.setState({
      copy: true
    })
  }

  handleRequestClose(){
    this.setState({
      copy: false
    })
  }

  render(){
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <center><img src={chunza2542} width="90%" alt=""/></center>
            </div>
            <div className="col-md-8">
              <div className={s.padding}>
                <center>
                  <span className={s.header}>Minecraft Hero Thailand</span>
                  <span className={s.subheader}>Here! Everyone can be a hero. Join us on IP: play.mcheroth.com</span>
                  <div className={s.online}>
                    Players online: <span><b>50 / 80</b></span>
                  </div>

                  <RaisedButton onClick={() => this.copyToClipboard()} label="คลิกที่นี่เพื่อคัดลอกไอพีเซิฟเวอร์"/>
                  <Snackbar
                    open={this.state.copy}
                    message="Copy Ip Address To ClipBoard"
                    autoHideDuration={3000}
                    onRequestClose={() => this.handleRequestClose()}
                  />
                  <br/>
                </center>
              </div>
            </div>
          </div>
        </div>

        <div className={s.divider}></div>

        <div className={s.black}>
          <div className="container">
            <Howto heading="ความแตกต่างของระบบ Ranking">
              ทดสอบ 555
            </Howto>
            <Howto heading="ความแตกต่างของระบบ Ranking">
              ทดสอบ 555
            </Howto>
            <Howto heading="ความแตกต่างของระบบ Ranking">
              ทดสอบ 555
            </Howto>
          </div>
          <br/>
          <br/>
        </div>
      </div>
    )
  }
}
