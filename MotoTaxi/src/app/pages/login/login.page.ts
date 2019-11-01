import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(public navCtrl: NavController) { }

  async irPagina(pagina: any) {
    this.navCtrl.navigateForward('/tabs/tab2/' + pagina);
  }

}
