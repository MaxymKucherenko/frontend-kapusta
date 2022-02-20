import s from './ReportChart.module.css';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ChartDataLabels,
  Legend,
);

const ReportChartMobile = () => {
  const options = {
    barThickness: 15,
    maxBarThickness: 50,
    minBarLength: 90,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        // align: function (context) {
        //   var value = context.dataset.data[context.dataIndex];
        //   return value > 0 ? 'end' : 'start';
        // },
        // anchor: function (context) {
        //   var value = context.dataset.data[context.dataIndex];
        //   return value > 0 ? 'end' : 'start';
        // },
        anchor: 'end',
        align: 'top',
        offset: 12,
        borderRadius: 4,
        color: '#52555F',
        formatter: function (value) {
          return Math.round(value) + ' грн';
        },
        padding: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false,
        },
        display: true,
        ticks: {
          mirror: true,
          labelOffset: -20,
          //   stepSize: 635,
        },
      },
    },
    layout: {
      padding: {
        top: 5,
        bottom: 10,
        left: -5,
        right: 20,
      },
    },

    elements: {
      bar: {
        borderRadius: 10,
      },
    },
  };

  const labels = [
    'Свинина',
    'Говядина',
    'Курица',
    'Рыба',
    'Панини',
    'Кофе',
    'Спагетти',
    'Шоколад',
    'Маслины',
    'Зелень',
  ];

  const data = {
    labels,
    datasets: [
      {
        data: [
          '5000',
          '4500',
          '3200',
          '2100',
          '1800',
          '1700',
          '1500',
          '800',
          '500',
          '300',
        ],

        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <>
      <div className={s.chartSection}>
        <Bar height={437} options={options} data={data} />
      </div>
    </>
  );
};

export default ReportChartMobile;
