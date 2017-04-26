import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

import s from './contact.scss'
import Navigator from '../../components/Navigator'

@withStyles(s)
export default class Contact extends React.Component {
  componentWillMount(){
    document.title = 'Contact - Minecraft Hero Thailand'
  }

  render(){
    return(
      <div>

        <Navigator color="#000">
          <span className="zmdi zmdi-mall"></span> ติดต่อทีมงาน
        </Navigator>

        <div className="container">
          <div className="row">
            <div className="col-md-8">

            <Card className={s.profile}>
              <CardHeader
                title="[Administrator] Chunza2542"
                subtitle="Server Role: Web Developer, Plugin & System Developer, Graphic Designer, Server Administrator"
                avatar="https://minotar.net/avatar/Chunza2542/100"
              />
            </Card>

            <br/>
            <Card className={s.profile}>
              <CardHeader
                title="[Developer] GameLovemiku"
                subtitle="Server Role: Plugin Manager, Game System, Graphic Designer, Server Staff"
                avatar="https://minotar.net/avatar/GameLovemiku/100"
              />
            </Card>

            <br/>
            <Card className={s.profile}>
              <CardHeader
                title="[Developer] tauhoo"
                subtitle="Server Role: Plugin Developer, Chief Server Builder, System Planner"
                avatar="https://minotar.net/avatar/tauhoo/100"
              />
            </Card>

            <br/>
            <Card className={s.profile}>
              <CardHeader
                title="[Builder] masamunez"
                subtitle="Server Role: Map Builder"
                avatar="https://minotar.net/avatar/masamunez/100"
              />
            </Card>

            <br/>
            <Card className={s.profile}>
              <CardHeader
                title="[Builder] AyakaJung"
                subtitle="Server Role: Map Builder"
                avatar="https://minotar.net/avatar/AyakaJung/100"
              />
            </Card>
            <br/>
            <br/>

            </div>
            <div className="col-md-4">
              <center>
                <div className="fb-page" data-href="https://www.facebook.com/mcheroth/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/mcheroth/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/mcheroth/">Minecraft Hero Network</a></blockquote></div>
              </center>
              <br/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
