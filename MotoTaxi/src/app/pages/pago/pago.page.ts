import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  constructor(
  ) { }

  ngOnInit() {
  }

  async tipoPago() {
    await this.slider.slideTo(this.segment);
  }

  async contenidoPago() {
    this.segment = await this.slider.getActiveIndex();
  }


}
