new PerformanceObserver((items) => {
  console.log(items);
}).observe({
  entryTypes: ["measure"],
  buffered: false,
});
