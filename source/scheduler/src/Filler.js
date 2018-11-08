// libraries
import {cloneDeep} from 'lodash';
// locals
const maxSteps = 2000;
const defaultTryFunc = (config) => ({
  success: true,
  configNew: config
});

class Filler {
  // configs stack
  configs = [];
  // opt ions for each level
  counts = [];
  // tryCase
  tryFunc = null;

  constructor(counts = [], tryFunc = defaultTryFunc) {
    this.counts = counts;
    this.tryFunc = tryFunc;
  }

  // solve puzzel
  solve(config) {
    // if it's the end
    if (config.index === this.counts.length) {
      return { success: false, config };
    }

    const {positions, index, ...rest} = cloneDeep(config);
    positions[index]++;
    if (positions[index] > this.counts[index]) {
      return { success: false, config }
    }

    return this.tryFunc({positions, index, ...rest});
  }

  // print
  print(steps, config) {
    // const found = config.index === this.counts.length - 1;
    console.log(steps+1, config.index, config.positions);
  }

  * start() {
    if (this.counts.length < 1) return;

    // setup starting config
    let config = {
      // use for index
      index: 0,
      // use natural index
      positions: Array(this.counts.length).fill(0),
    };
    // enter pool
    let done = false;
    let steps = 0;
    // while (config.index < this.counts.length) {
    while (!done && steps < maxSteps) {
        // try solving current puzzel
      const { success, configNew } = this.solve(config);
      // Success, stack it and move to next level
      // Fail, pop to previous level and continue
      if (success) {
        this.configs.push(configNew);
        config = cloneDeep(configNew);
        this.print(steps, config);
        yield config;
        config.index++;
        steps++;
      } else {
        config = this.configs.pop();
        done = config === undefined;        
      }
    }
  }
}

export default Filler;

