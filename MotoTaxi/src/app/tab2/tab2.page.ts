import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {

  constructor(public navCtrl: NavController) {}

  async irPagina (pagina: any){
    this.navCtrl.navigateForward('/tabs/tab2/' + pagina);
  }

}




