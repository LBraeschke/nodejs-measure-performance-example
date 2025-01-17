// run `node index.mjs` in the terminal
import './measure.mjs';

const wait = (time = 2000) =>
  new Promise((resolve) => setTimeout(resolve, time));

performance.mark('start');
await wait();
performance.mark('wait-one');
performance.measure('FirstWait', 'start', 'wait-one');

await wait();
performance.mark('wait-two');
performance.measure('SecondWait', 'wait-one', 'wait-two');

await wait();
performance.mark('end');
performance.measure('ThridWait', 'wait-two', 'end');
