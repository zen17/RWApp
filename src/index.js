import Rx from "rxjs";
import { Login } from "./login.js";
import { ChartManager } from "./chart-manager.js";
import "./submit.js";
import { WidgetManager } from "./widget-manager.js";
import { Fetch } from "./json-manager";

const fetch = new Fetch();
let login = new Login();
login.loginCheck();
let loginReg = document.getElementById("loginReg");
if (loginReg != null) {
  Rx.Observable.fromEvent(loginReg, "click").subscribe(data => {
    login.logOut();
  });
}
let ctxLine = document.getElementById("myChartLine");
let ctxPie = document.getElementById("myChartPie");
let ctxBar = document.getElementById("myChartBar");
let chartManager = new ChartManager(fetch);
if (
  ctxLine != null &&
  ctxLine != undefined &&
  ctxPie != null &&
  ctxPie != undefined &&
  ctxBar != null &&
  ctxBar != undefined
) {
  chartManager.drawCharts(ctxLine, ctxPie, ctxBar);
}
let widgetManager = new WidgetManager();
widgetManager.drawWidget();
