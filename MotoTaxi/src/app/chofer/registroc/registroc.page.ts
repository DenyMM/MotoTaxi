import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registroc',
  templateUrl: './registroc.page.html',
  styleUrls: ['./registroc.page.scss'],
})
export class RegistrocPage {

  constructor(public navCtrl: NavController) { }

  async irPagina(pagina: any) {
    this.navCtrl.navigateForward('/tabs/tab2/' + pagina);
  }

}
