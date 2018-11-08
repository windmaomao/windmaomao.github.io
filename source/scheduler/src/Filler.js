// libraries
import {cloneDeep} from 'lodash';

class Filler {
  // configs stack
  configs = [];
  // options for each level
  counts = [3, 2];

  // solve puzzel
  solve(config) {
    // if it's the end
    if (config.index === this.counts.length) {
      return { success: false, config };
    }

    const {positions, index} = cloneDeep(config);
    positions[index]++;
    if (positions[index] > this.counts[index]) {
      return { success: false, config }
    }
    return {
      success: true,
      configNew: { index, positions }
    };
  }

  // print
  print(config) {
    console.log(config.index, config.positions);
  }

  * start() {
    // setup starting config
    let config = {
      index: 0,
      // use natural index
      positions: [0, 0],
    };
    // enter pool
    let done = false;
    // while (config.index < this.counts.length) {
    while (!done) {
        // try solving current puzzel
      const { success, configNew } = this.solve(config);
      // Success, stack it and move to next level
      // Fail, pop to previous level and continue
      if (success) {
        this.configs.push(configNew);
        config = cloneDeep(configNew);
        this.print(config);
        yield config;
        config.index++;
      } else {
        config = this.configs.pop();
        done = config === undefined;        
      }
    }
  }
}

export default Filler;

