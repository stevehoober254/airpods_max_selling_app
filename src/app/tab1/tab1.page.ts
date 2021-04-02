import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private modal: ModalController,
    private toastCtrl: ToastController
    ) {}
  async  viewProduct(){
    const mod = await this.modal.create({
      component: Tab2Page,
      componentProps: {}
    });
    await mod.present();
    }
    addToCart(){
      this.toaster('Added to Cart');
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
