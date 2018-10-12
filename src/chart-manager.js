import {
  lineChartAttributes,
  linePieAttributes,
  lineBarAttributes
} from "./chart-attributes";
import Chart from "chart.js";
export class ChartManager {
  constructor(fetch) {
    this.fetch = fetch;
  }
  drawCharts(ctxLine, ctxBar, ctxPie) {
    const labelsForLineChart = [];
    const valuesForLineChart = [];
    let daysInMonth = this.daysInMonthForLabel();
    this.fetch
      .get("http://localhost:3000/data?kljuc=" + sessionStorage.getItem("id"))
      .then(data => data.json())
      .then(data => {
        let labelsForPieChart = data.map(
          valuesForLineChart => valuesForLineChart.expenseGroup
        );
        for (let i = 0; i <= daysInMonth; i++) {
          labelsForLineChart.push(i);
          valuesForLineChart.push(
            data.reduce((acc, currentValue) => {
              return new Date(currentValue.date).getDate() == i
                ? (acc = acc + parseInt(currentValue.expense))
                : (acc = acc + 0);
            }, 0)
          );
        }
        this.drawSpecificChart(
          ctxLine,
          labelsForLineChart,
          valuesForLineChart,
          lineChartAttributes
        );
        this.drawSpecificChart(
          ctxPie,
          labelsForPieChart,
          valuesForLineChart,
          linePieAttributes
        );
        this.drawSpecificChart(
          ctxBar,
          labelsForLineChart,
          valuesForLineChart,
          lineBarAttributes
        );
      })
      .catch(err => console.log(err));
  }
  drawSpecificChart(ctxLine, labels, data, attributes) {
    attributes.data.labels = labels;
    attributes.data.datasets[0].data = data;
    var myChart = new Chart(ctxLine, attributes);
  }
  daysInMonthForLabel() {
    let date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }
}
