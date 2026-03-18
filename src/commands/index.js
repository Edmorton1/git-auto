const {run} = require('../utils');
const merge = require('./merge');

class Commander {
  merge = ({task, env}) => {
    if (!task) {
      throw new Error('param "task" is required');
    }
    merge(task, env);
  };

  pull = () => {
    try {
      run('git restore package.json package-lock.json');
      run('git pull');
    } catch {
      run('git restore package.json');
      run('git pull');
    }
  };

  restart = () => {
    run('rm -rf node_modules package-lock.json');
    run('npm i');
  };

  push = ({m}) => {
    if (!m) {
      throw new Error('param "m" is required');
    }
    run(`git commit -m ${m}`);
    run('git push');
  };
}

module.exports = Commander;
