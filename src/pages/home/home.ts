import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;
  constructor(public navCtrl:NavController, public alertCtrl:AlertController) {
    // this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }
  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }


  public loginWithPhoneno(phoneno){
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+" + phoneno;
  
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
    .then( confirmationResult => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      let prompt = this.alertCtrl.create({
      title: 'Enter the Confirmation code',
      inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
      buttons: [
        { text: 'Cancel',
          handler: data => { console.log('Cancel clicked'); }
        },
        { text: 'Send',
          handler: data => {
            confirmationResult.confirm(data.confirmationCode)
            .then(function (result) {
              // User signed in successfully.
              console.log(result.user);
              // ...
            }).catch(function (error) {
              // User couldn't sign in (bad verification code?)
              // ...
            });
          }
        }
      ]
    });
    prompt.present();
  })
  .catch(function (error) {
    console.error("SMS not sent", error);
  });
  
  }
}


