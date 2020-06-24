import { Component, OnInit } from '@angular/core';
import { Imagem } from 'src/app/model/imagem';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-linguagem-corporal',
  templateUrl: './linguagem-corporal.page.html',
  styleUrls: ['./linguagem-corporal.page.scss'],
})
export class LinguagemCorporalPage implements OnInit {
  public imagens: Array<Imagem>;
  private BASE_DIR: string = "../assets/images/linguagem-corporal/";

  constructor(private admobFree : AdMobFree) { }

  ngOnInit() {
    this.mostrarBannerAdmob();
    this.imagens = [
      new Imagem(this.BASE_DIR + "1.webp"),
      new Imagem(this.BASE_DIR + "2.webp"),
      new Imagem(this.BASE_DIR + "3.webp"),
      new Imagem(this.BASE_DIR + "4.webp"),
      new Imagem(this.BASE_DIR + "5.webp"),
      new Imagem(this.BASE_DIR + "6.webp"),
      new Imagem(this.BASE_DIR + "7.webp"),
      new Imagem(this.BASE_DIR + "8.webp"),
      new Imagem(this.BASE_DIR + "9.webp"),
      new Imagem(this.BASE_DIR + "10.webp"),
      new Imagem(this.BASE_DIR + "11.webp"),
      new Imagem(this.BASE_DIR + "12.webp"),
      new Imagem(this.BASE_DIR + "13.webp"),
      new Imagem(this.BASE_DIR + "14.webp"),
      new Imagem(this.BASE_DIR + "15.webp"),
      new Imagem(this.BASE_DIR + "16.webp"),
      new Imagem(this.BASE_DIR + "17.webp"),
      new Imagem(this.BASE_DIR + "18.webp"),
      new Imagem(this.BASE_DIR + "19.webp"),
      new Imagem(this.BASE_DIR + "20.webp"),
      
    ];
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
