import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.page.html',
  styleUrls: ['./ganancias.page.scss'],
})
export class GananciasPage implements OnInit {

  @ViewChild('barCanvas') barCanvas: ElementRef;

  private barChart: Chart;

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  constructor() { }

  ngOnInit() {}
    ionViewDidEnter () {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        datasets: [
          {
            label: "Pesos Mexicanos",
            data: [100, 200, 300, 400, 500, 100, 200, 300, 400, 100, 200, 300],
            backgroundColor: [
              "#014752",
              "#025a68",
              '#026c7c',
              "#047e91",
              "#0492a8",
              "#04aac4",
              "#04c0dd",
              "#39d7f0",
              "#55ddf1",
              "#81e8f8",
              "#9febf7",
              "#beeef5"

            ],
           }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }


  async ganancia() {
    await this.slider.slideTo(this.segment);
  }

  async contenido() {
    this.segment = await this.slider.getActiveIndex();
  }

}

