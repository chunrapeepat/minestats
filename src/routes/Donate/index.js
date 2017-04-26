import React from 'react'
import ImageLoader from 'react-imageloader';
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';

import Navigator from '../../components/Navigator'
import s from './donate.scss'

@withStyles(s)
class Donate extends React.Component {
  constructor(){
    super();
    this.state = {
      'howto': s.active,
      'tm': s.unactive,
      'tw': s.unactive
    }
  }
  componentWillMount(){
    document.title = 'Donate - Minecraft Hero Thailand'
  }
  menuUpdate(ht, tm, tw){
    this.setState({
      'howto': ht,
      'tm': tm,
      'tw': tw
    });
  }
  htRender(state){
    if(state === s.active){
      return (
        <div>
          <div className={s.heading}>วิธีการเติมเงินเข้าระบบ</div>
          <div>
            ท่านสามารถเติมเงินเข้าระบบได้ 2ช่องทาง ช่องทางแรกคือ เติมเงินเข้าสู่ระบบด้วยรหัสบัตรทรูมันนี่ 14หลัก และอีกช่องทางหนึ่งคือโอนเงินผ่านบัญชี TrueWallet
            ซึ่งการเติมเงินผ่าน TrueWallet จะได้สิทธิ์พิเศษมากกว่าการเติมเงินด้วยรหัสบัตร (อ่านรายละเอียดเพิ่มเติมในเมนู) <b>ดูวิธีการเติมเงินในคลิปด้านล่าง</b>
          </div>
        </div>
      )
    }
  }
  tmRender(state){
    if(state === s.active){
      return (
        <div>
          <div className={s.heading}>เติมเงินผ่านระบบ TrueMoney</div>
          เติมเงินด้วยรหัสบัตรทรูมันนี่ เมื่อเติมแล้วเงินจะเข้าเกมทันทีหลังจากที่เติมเสร็จ เช็คชื่อผู้เล่นให้ดีเพราะอาจมีการผิดพลาดได้
          เกณฑ์การเติมคือ เติมเท่าไรได้ในเกมเท่านั้นเช่น เติม 500 จะได้รับเงินในเกม 500 เหมือนกัน ถ้าหากต้องการที่จะ
          เติมแล้วคุ้มกว่า แนะนำวิธีการโอนผ่านระบบ TrueWallet เพราะจะได้ % ค่าเติม เพิ่ม 20%

          <form style={{'padding':'20px 15px'}}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">เติมเงินเข้าเซิฟ</label>
              <div className="col-sm-10">
                <p className="form-control-static">@minecraftheroth</p>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">รหัสบัตรทรูมันนี่</label>
              <div className="col-sm-10">
                <input type="number" className="form-control" placeholder="14 หลัก..." />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">ชื่อผู้เล่น</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="ชื่อผู้เล่นในเกม เช่น Chunza2542" />
              </div>
            </div>
            <RaisedButton style={{'marginTop':'15px'}} label="CLICK TO PAY NOW" fullWidth={true} secondary={true} />
          </form>
        </div>
      )
    }
  }
  twRender(state){
    if(state === s.active){
      return (
        <div>
          <div className={s.heading}>เติมเงินผ่านระบบ TrueWallet</div>
          <div>
            เติมเงินผ่านช่องทางนี้จะได้รับสิทธิพิเศษ ได้รับเงินในเกมเพิ่ม 20% ยกตัวอย่างเช่นผู้เล่น Chunza2542 โอนเงินผ่านช่องทางนี้ 1000บาท
            จำนวนเงินที่จะได้รับคือ 1000 + 200 = 1200 บาทนั้นเอง
            <br/><br/>
            <b>วิธีการคำนวน: นำจำนวนเงินที่เติม คูณด้วย 1.2 เช่น เติม 500 จำนวนเงินที่จะได้คือ 500 x 1.2 = 600</b>
          </div><br/>

          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>ช่องทางการเติม</th>
                <th>รายละเอียด</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>TrueWallet</td>
                <td>เลขบัญชี: 0939520586</td>
              </tr>
            </tbody>
          </table>

          <form style={{'padding':'5px 15px'}}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">เติมเงินเข้าเซิฟ</label>
              <div className="col-sm-10">
                <p className="form-control-static">@minecraftheroth</p>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">รหัสการโอน</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="กรอกรหัสที่ได้รับเมื่อทำการโอนเงิน" />
              </div>
            </div>
          </form>

          <br/>
          <span className={s.error}>คำเตือน! ตอนโอนให้กรอกชื่อผู้เล่นในช่องข้อความด้วย</span>

        </div>
      )
    }
  }
  render(){
    return(
      <div>
        <Navigator color="#1C56FB">
          <i className="zmdi zmdi-money-box"></i> เติมเงินเข้าระบบ
        </Navigator>

        <div className="container">
          <div className="row">
            <div className="col-md-3">

              <List>
                <div className={this.state.howto}>
                  <ListItem
                    onClick={() => this.menuUpdate(s.active, s.unactive, s.unactive)}
                    primaryText="วิธีการเติมเงิน"
                    secondaryText="วิธีและขั้นตอนการเติมเงินเข้าระบบ"
                  />
                </div>
                <Divider />
                <div style={{'marginTop':'4px'}} className={this.state.tm}>
                  <ListItem
                    onClick={() => this.menuUpdate(s.unactive, s.active, s.unactive)}
                    primaryText="TrueMoney"
                    secondaryText="เติมเงินด้วยรหัสบัตร TrueMoney"
                  />
                </div>
                <div className={this.state.tw}>
                  <ListItem
                    onClick={() => this.menuUpdate(s.unactive, s.unactive, s.active)}
                    primaryText="TrueWallet"
                    secondaryText="โอนเงินผ่านบัญชี TrueWallet"
                  />
                </div>
              </List>

            </div>
            <div className="col-md-9">
              {this.htRender(this.state.howto)}
              {this.tmRender(this.state.tm)}
              {this.twRender(this.state.tw)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Donate
