import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl:'login.html'
})

export class LoginPage{
    constructor(private navCtrl: NavController){}
    gobackHome(){
        this.navCtrl.pop();
    }
}
