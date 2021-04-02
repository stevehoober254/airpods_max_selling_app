import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
count = 1;
  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {}

  closeModal(){
    this.modalCtrl.dismiss();
  }
  getCount(){
    return this.count ;
  }
  addCount(){
    this.count ++ ;
  }
  removeCount(){
    if(this.count > 1){
      this.count --;
    }
  }
  getPrice(){
    return this.count * 699.00 ;
  }
  addToCart(){
    this.toaster('Added to Cart');
    this.closeModal();
  }
  async toaster(msg: string){
    const tostPop = await this.toastCtrl.create({
      message: msg,
      duration: 1000,
      buttons: [
        {
          text:"View",
          role:'cancel'
        }
      ]
    });
    await tostPop.present();
  }
}
