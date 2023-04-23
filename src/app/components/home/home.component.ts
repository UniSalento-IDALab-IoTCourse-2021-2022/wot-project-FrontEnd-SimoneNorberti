import {Component, ElementRef, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Chart, ChartType} from 'chart.js/auto';
import { PazienteService } from '../../services/paziente.service';
import { Paziente } from "../../models/paziente";
//import * as Chart from 'chart.js';

interface Data {
  x: number[];
  gait_speed: number[];
  grip_strenght: number[];
  muscle_mass: number[];
}
/*
interface ScatterData {
  id: string;
  label: string;
  data: { x: number, y: number }[];
}
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {

  constructor(private pazienteService: PazienteService) { }

  pazienti: Paziente[] = [];
  selectedPaziente: Paziente | undefined;
  data: Data = { x:[], gait_speed: [], grip_strenght: [], muscle_mass: [] };
  myChart1: Chart | undefined;
  myChart2: Chart | undefined;
  myChart3: Chart | undefined;
  /*
  scatterData: ScatterData[] = [
    { id: 'scatter1', label: 'Scatter 1', data: [] },
    { id: 'scatter2', label: 'Scatter 2', data: [] },
    { id: 'scatter3', label: 'Scatter 3', data: [] }
  ];

   */

  ngOnInit(): void {
    this.pazienteService.getPazienti().subscribe(pazienti => {
      this.pazienti = pazienti;
      this.selectedPaziente = pazienti[0];
      this.loadData();
    })
  }

  onObjectSelect(paziente: Paziente): void {
    this.selectedPaziente = paziente;
    this.loadData()
  }

  loadData(): void {
    this.pazienteService.getPazienteByID(this.selectedPaziente?.ID).subscribe(data => {
      this.data = data;
      this.drawChart(this.data);
    })
  }

  drawChart(data: any) { // Genera il grafico utilizzando i dati ricevuti dal backend
    console.log(data);

    this.myChart1?.destroy()
    //const ctx1 = document.getElementById('myChart1')
    this.myChart1 = new Chart('myChart1', { //ctx1
      type: 'scatter',
      data: {
        datasets: [{
          label: 'GRIP STRENGHT',
          data: data.map((item: { GRIP_STRENGHT: any; TIMESTAMP: any; ANOMALY: any}, i: number) => ({
              x: i + 1,
              y: item.GRIP_STRENGHT
            })),
          pointBackgroundColor: 'blue',
          pointBorderColor: 'blue',
          showLine:true
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          },
          y: {
            type: 'linear',
            position: 'left'
          }
        }
      }
    })

    this.myChart2?.destroy()
    //const ctx2 = document.getElementById('myChart2')
    this.myChart2 = new Chart('myChart2', { //ctx2
      type: 'scatter',
      data: {
        datasets: [{
          label: 'MUSCLE MASS',
          data: data.map((item: { MUSCLE_MASS: any; TIMESTAMP: any; ANOMALY: any}, i: number) => ({
            x: i + 1,
            y: item.MUSCLE_MASS
          })),
          pointBackgroundColor: 'blue',
          pointBorderColor: 'blue',
          showLine:true
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          },
          y: {
            type: 'linear',
            position: 'left'
          }
        }
      }
    })

    this.myChart3?.destroy()
    //const ctx3 = document.getElementById('myChart3')
    this.myChart3 = new Chart('myChart3', { //ctx3
      type: 'scatter',
      data: {
        datasets: [{
          label: 'GAIT SPEED',
          data: data.map((item: { GAIT_SPEED: any; TIMESTAMP: any; ANOMALY: any}, i: number) => ({
            x: i + 1,
            y: item.GAIT_SPEED
          })),
          pointBackgroundColor: 'blue',
          pointBorderColor: 'blue',
          showLine:true
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          },
          y: {
            type: 'linear',
            position: 'left'
          }
        }
      }
    })
  }

  private static getColor(value: number): string {
    // Imposta un colore diverso in base al valore di attr3
    if (value == 1) {
      console.log("rosso")
      return 'red';
    } else {
      console.log("blu")
      return 'blu';
    }
  }


}
