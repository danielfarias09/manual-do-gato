import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Início',
      url: '/folder/Inbox',
      icon: 'paw'
    },
    {
      title: 'Linguagem Corporal',
      url: '/linguagem-corporal',
      icon: 'paw'
    },
    {
      title: 'Miado',
      url: '/miado',
      icon: 'paw'
    },
    {
      title: 'Higiene',
      url: '/higiene',
      icon: 'paw'
    },
    {
      title: 'Fontes',
      url: 'fontes',
      icon: 'paw'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private admobFree : AdMobFree
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  selecionarItem(i){
    this.selectedIndex = i;
    this.mostrarInterstitial();
  }
    
    mostrarInterstitial(){
      let bannerConfig: AdMobFreeInterstitialConfig = {
        //isTesting: true,
        id: 'ca-app-pub-7173661742470104/3369740199',
        autoShow: true
        };
        this.admobFree.interstitial.config(bannerConfig);
    
        this.admobFree.interstitial.prepare()
        .then(() => {
            this.admobFree.interstitial.show()
        })
        .catch(e => console.log(e));  
      } 
}
