import {Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterContentInit} from '@angular/core';
import { chart } from 'highcharts';
import {ChartService} from "./chart.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [ChartService]
})
export class ChartComponent implements OnInit, AfterContentInit, OnDestroy  {
  @ViewChild('chartTarget') chartTarget: ElementRef;
  chart: Highcharts.ChartObject;
  private submitted;

  constructor(private chartService: ChartService) {}
  ngOnInit() {
    // let tech : string[];
    // tech = this.chartService.findAllTech(value).then(tech => this.tech = tech)
    //   .subscribe(
    //     value => {
    //       console.log('PASS - Getting all Techs for High Charts!');
    //     }, error => {
    //       console.log('FAIL - Getting all Techs for High Charts!');
    //     },
    //     () => {
    //       console.log('GET Finding All Techs - now completed.');
    //     });
    // this.submitted = true;
  }

  ngAfterContentInit() {

    const options: Highcharts.Options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Tech Dispersion'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            connectorColor: 'silver'
          }
        }
      },
      series: [{
        name: 'Share',
        data: [
          { name: 'Chrome', y: 61.41 },
          { name: 'Internet Explorer', y: 11.84 },
          { name: 'Firefox', y: 10.85 },
          { name: 'Edge', y: 4.67 },
          { name: 'Safari', y: 4.18 },
          { name: 'Other', y: 7.05 }
        ]
      }]
    };

    this.chart = chart(this.chartTarget.nativeElement, options);
  }

  ngOnDestroy() {
    this.chart = null;
  }
}
