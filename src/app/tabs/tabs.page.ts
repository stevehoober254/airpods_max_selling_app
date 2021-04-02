import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private modal: ModalController
  ) {}


 async  openCart(){
  const mod = await this.modal.create({
    component: Tab2Page,
    componentProps: {}
  });
  await mod.present();
  }
}
