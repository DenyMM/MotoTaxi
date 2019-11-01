import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage  {

  constructor(public navCtrl: NavController) { }

  async irPagina(pagina: any) {
    this.navCtrl.navigateForward('/tabs/tab2/' + pagina);
  }

}
