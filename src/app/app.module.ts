import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//firebase
import * as firebase from'firebase';
var config = {
  apiKey: "AIzaSyAn9HZ9eS9M1gHgHNg4LsgJtbto5oSAPfo",
  authDomain: "salon-ef6a7.firebaseapp.com",
  databaseURL: "https://salon-ef6a7.firebaseio.com",
  projectId: "salon-ef6a7",
  storageBucket: "salon-ef6a7.appspot.com",
  messagingSenderId: "1022574101777"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
