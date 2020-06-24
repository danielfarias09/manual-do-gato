import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-higiene',
  templateUrl: './higiene.page.html',
  styleUrls: ['./higiene.page.scss'],
})
export class HigienePage implements OnInit {

  constructor(private admobFree : AdMobFree) { }

  ngOnInit() {
    this.mostrarBannerAdmob();
  }

  private mostrarBannerAdmob(){
    let bannerConfig: AdMobFreeBannerConfig = {
        //isTesting: true,
        id:'ca-app-pub-7173661742470104/1283467056',
        autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
    .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
    })
    .catch(e => console.log(e));    
    }

}
