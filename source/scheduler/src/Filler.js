// libraries
import {cloneDeep} from 'lodash';
// locals
const maxSteps = 55000;
// const maxSteps = 100;
const defaultTryFunc = (config) => ({
  success: true,
  configNew: config,
  levelEnd: false,
  goal: false
});

class Filler {
  // debug
  debug = true;
  // configs stack
  configs = [];
  // opt ions for each level
  counts = [];
  // tryCase
  tryFunc = null;
  // init data
  initConfig = {};

  init(counts, initConfig, tryFunc) {
    this.counts = counts;
    this.initConfig = initConfig;
    this.tryFunc = tryFunc || defaultTryFunc;
  }

  // solve puzzel
  solve(config) {
    if (config.index === this.counts.length) {
      return { success: false, config, levelEnd: false, goal: true };
    }

    const {positions, index, ...rest} = config;
    if (positions[index] === this.counts[index]) {
      return { success: false, config, levelEnd: true, goal: false }
    }

    return Object.assign({}, 
      this.tryFunc({positions, index, ...rest}),
      {levelEnd: false, goal: false}
    );
  }

  * start() {
    this.configs = [];
    if (this.counts.length < 1) return;

    // setup starting config
    let config = Object.assign({
      index: 0,
      positions: Array(this.counts.length).fill(0),
    }, this.initConfig);
    // enter pool
    let done = false;
    let steps = 0;
    // while (config.index < this.counts.length) {
    while (!done && steps < maxSteps) {
      // solve current puzzel
      let res = null;
      try {
        res = this.solve(config);
      } catch (e) {
        return;
      }
      const { success, configNew, levelEnd, goal } = res;
      // full solution found
      if (goal) {
        yield config;
        done = true;
      } else {
        // if level end and no solution found
        if (levelEnd) {
          // if (this.debug) console.log(config.positions);
          config = cloneDeep(this.configs.pop());
          done = config === undefined;
        }
        // if solution found for this level
        // stack it and move to next level
        if (success) {
          // Save the history config and new iterator
          config.positions = configNew.positions;
          this.configs.push(cloneDeep(config));
          // Continue with new configuration
          config = configNew;
          // yield cloneDeep(config);
          // Prepare for next puzzel
          config.index++;
        } else {
          if (!done) {
            // try next posible config
            config.positions[config.index]++;
          } else {
            return;
          }
        }        
      }
      steps++;
    }
  }
}

export default Filler;

