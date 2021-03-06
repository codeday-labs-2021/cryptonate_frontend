import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', './../lightning-admin.css']
})
export class AdminDashboardComponent implements OnInit {


  chart1 = {
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
        label: 'Premium',
        data: [50, 80, 60, 120, 80, 100, 60],
        backgroundColor: 'transparent',
        borderColor: '#5b6582',
        borderWidth: 2
      },
      {
        label: 'Free',
        data: [100, 60, 80, 50, 140, 60, 100],
        backgroundColor: 'transparent',
        borderColor: '#36a2eb',
        borderWidth: 2
      }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'rgba(0,0,0,.6)',
            fontStyle: 'bold',
            beginAtZero: true,
            maxTicksLimit: 8,
            padding: 10
          }
        }]
      },
      responsive: true,
      legend: {
        position: 'bottom',
        display: false
      },
    }
  };
  chart2 = {
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
        label: 'Premium',
        data: [50, 80, 60, 120, 80, 100, 60],
        backgroundColor: '#5b6582',
        borderColor: '#5b6582',
        borderWidth: 2
      },
      {
        label: 'Free',
        data: [100, 60, 80, 50, 140, 60, 100],
        backgroundColor: '#36a2eb',
        borderColor: '#36a2eb',
        borderWidth: 2
      }
      ]
    },
    options: {
      barValueSpacing: 1,
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'rgba(0,0,0,.6)',
            fontStyle: 'bold',
            beginAtZero: true,
            maxTicksLimit: 8,
            padding: 10
          }
        }],
        xAxes: [{
          barPercentage: 0.4
        }]
      },
      responsive: true,
      legend: {
        position: 'bottom',
        display: false
      },
    }
  };
  chart3 = {
    data: {
      datasets: [{
        data: [6, 12, 10],
        backgroundColor: ["#5b6582", "#98a4c7", "#36a2eb"],
      }],
      labels: [
        'html',
        'css',
        'javascript'
      ]

    },
    options: {
      legend: {
        position: 'bottom',
        display: false
      },
      cutoutPercentage: 80
    }
  };
  Nums: any;
  total = 0;
  artists = 0;
  collectors = 0;
  constructor(

  ) { }

  ngOnInit() {


    new Chart('chart-line', {
      type: 'line',
      data: this.chart1.data
    });
    new Chart('chart-bar', {
      type: 'bar',
      data: this.chart2.data
    });
    new Chart('chart-doughnut', {
      type: 'doughnut',
      data: this.chart3.data
    });

  }

}
