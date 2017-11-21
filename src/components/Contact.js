import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Send from 'material-ui/svg-icons/content/send';
import GithubIcon from 'react-icons/lib/fa/github';
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import EmailIcon from 'react-icons/lib/md/email';


class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      checked: false,
      emailLabel: "Email Address",
      checkBoxLabelColor: '#d4d3d0'
    }
  }

  updateCheck() {
    this.setState((oldState) => {
      console.log(oldState.emailLabel);
      let newEmailLabel = (oldState.emailLabel === ' ') ? 'Email Address' : ' ';
      let newCheckBoxLabelColor= (oldState.checkBoxLabelColor === '#d4d3d0') ? '#1db954' : '#d4d3d0';
      return {
        checked: !oldState.checked,
        emailLabel: newEmailLabel,
        checkBoxLabelColor: newCheckBoxLabelColor
      };
    });
  }

  render(){
    return(
      <div className="contact">
        <h2 className="contactHeader">Let's <span role="img" aria-label="Taco Emoji inserted here">🌮</span>'bout <span className='highlight'>New Ideas.</span></h2>
        <div className="contactBody flex">
          <div className="contactLeft">
            <h4>Questions? Project Proposal? <span className="highlight">Email me!</span></h4>
            <MuiThemeProvider>
              <div className="emailInput">
                <TextField
                  disabled={this.state.checked}
                  underlineDisabledStyle={{borderColor: '#d4d3d0'}}
                  floatingLabelText={this.state.emailLabel}
                  underlineStyle={{color: '#d4d3d0'}}
                  floatingLabelStyle={{color: '#1db954', fontSize: '1.3em'}}
                  underlineFocusStyle={{borderColor: '#1db954'}}
                  inputStyle={{color: '#ecebe8', fontSize: '1.3em'}}
                  style={{marginRight: 15, marginTop: 0}}
                  className="emailAddressInput"
                />
                <Checkbox
                  className="anonymousCheckBox"
                  checkedIcon={<ActionFavorite style={{fill: '#1db954'}}/>}
                  uncheckedIcon={<ActionFavoriteBorder style={{fill: '#d4d3d0'}}/>}
                  iconStyle={{color: '#1db954'}}
                  label="Anonymous Feedback"
                  labelStyle={{color: this.state.checkBoxLabelColor, fontSize: '0.7em'}}
                  onCheck={this.updateCheck.bind(this)}
                />
              </div>

              <TextField
                className="emailBodyInput"
                hintText="Hi, Deokjae. I love your website!"
                floatingLabelText="What do you want to Talk about?"
                multiLine={true}
                rows={2}
                rowsMax={6}
                fullWidth={true}
                hintStyle={{color: '#949391'}}
                underlineStyle={{color: '#d4d3d0'}}
                floatingLabelStyle={{color: '#1db954', fontSize: '1.3em'}}
                underlineFocusStyle={{borderColor: '#1db954'}}
                textareaStyle={{color: '#ecebe8', fontSize: '1.3em'}}
              />
              <RaisedButton
                label="Send"
                backgroundColor="#1db954"
                buttonStyle={{width: 300, height: 50, lineHeight:'50px'}}
                className='sendBtn'
                icon={<Send />}
                labelStyle={{fontSize:'1.15em'}}
                overlayStyle={{height: 50}}
              />
            </MuiThemeProvider>
          </div>
          <div className="contactRight">
            <div className="socialIconFlex">
              <a href="http://github.com/Deokjj">
                <GithubIcon className="socialIcon"/>
              </a>
              <a href="http://linkedin.com/in/deokj">
                <LinkedInIcon className="socialIcon"/>
              </a>
              <a href="mailto:deokjj@gmail.com">
                <EmailIcon className="socialIcon"/>
              </a>
            </div>
            <h5 className="resume"><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1gr8H5VQG7BO5nfGBhb4aGeLPZd8bK-QZ1XLHnYe-5lc/edit?rm=minimal">View My <span  className="highlight">Resume</span></a>
            </h5>
          </div>
        </div>
        <div className="footer">
          <h5>Made with <span role="img" aria-label="heartLove emoji inserts here">❤️</span> by Deokjae | © 2017</h5>
        </div>
      </div>
    );
  }
}

export default Contact
