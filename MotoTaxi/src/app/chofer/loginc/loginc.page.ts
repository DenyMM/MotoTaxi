import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loginc',
  templateUrl: './loginc.page.html',
  styleUrls: ['./loginc.page.scss'],
})
export class LogincPage {

  constructor(public navCtrl: NavController) { }

  async irPagina(pagina: any) {
    this.navCtrl.navigateForward('/tabs/tab2/' + pagina);
  }

}
