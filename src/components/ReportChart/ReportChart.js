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

const ReportChart = ({ category }) => {
  console.log(`category`, category);
  const { sumDescriptionIncome, sumDescriptionConsumption } = useSelector(
    data => data.balanceReducer,
  );
  // const dispatch = useDispatch();
  console.log(`sumDescriptionIncome`, sumDescriptionIncome);
  console.log(`sumDescriptionConsumption`, sumDescriptionConsumption);

  const options = {
    maxBarThickness: 38,
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        align: function (context) {
          var value = context.dataset.data[context.dataIndex];
          return value > 0 ? 'end' : 'start';
        },
        anchor: function (context) {
          var value = context.dataset.data[context.dataIndex];
          return value > 0 ? 'end' : 'start';
        },
        borderRadius: 4,
        color: '#52555F',
        formatter: function (value) {
          return Math.round(value) + ' грн';
        },
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          lineWidth: 2,
          drawBorder: false,
          color: '#F5F6FB',
        },
        ticks: {
          display: false,
          stepSize: 100,
        },
      },
      y: {
        grid: {
          lineWidth: 2,
          drawBorder: false,
          drawTicks: false,
          color: '#F5F6FB',
        },
        display: true,
        ticks: {
          display: false,
          stepSize: 635,
        },
      },
    },
    layout: {
      padding: {
        top: 35,
        bottom: 0,
      },
    },
    elements: {
      bar: {
        barWidth: 605,
        borderRadius: 10,
      },
    },
  };
  // const transactions = useSelector(
  //   transactionsSelectors.getTransactionsByCategoryId(category),
  // );
  const labels = [];
  const amounts = [];

  // sumDescriptionConsumption.forEach(item => {
  //   const labelIdx = labels.indexOf(item.group);
  //   if (labelIdx !== -1) {
  //     amounts[labelIdx] += item.totalDescription;
  //   } else {
  //     labels.push(item.group);
  //     amounts.push(item.amount);
  //   }
  // });

  // const labels = [
  //   'Свинина',
  //   'Говядина',
  //   'Курица',
  //   'Рыба',
  //   'Панини',
  //   'Кофе',
  //   'Спагетти',
  //   'Шоколад',
  //   'Маслины',
  //   'Зелень',
  // ];

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       data: [
  //         '5000',
  //         '4500',
  //         '3200',
  //         '2100',
  //         '1800',
  //         '1700',
  //         '1500',
  //         '800',
  //         '500',
  //         '300',
  //       ],

  //       backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
  //       borderWidth: 0,
  //     },
  //   ],
  // };
  const data = {
    labels: [...labels],
    datasets: [
      {
        data: [...amounts],
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderWidth: 0,
      },
    ],
  };
  return (
    <>
      <div className={s.chartSection}>
        <Bar options={options} data={data} />
      </div>
    </>
  );
};

export default ReportChart;
