import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-forecast-trend-analysis',
  templateUrl: './forecast-trend-analysis.component.html',
  styleUrls: ['./forecast-trend-analysis.component.css']
})
export class ForecastTrendAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $(".main-table").clone(true).appendTo('#table-scroll').addClass('clone');   
    });
   
  }


}