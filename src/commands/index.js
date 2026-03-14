const {run} = require('../utils');
const mr = require('./mr');

class Commander {
  mr = ({task, env}) => {
    mr(task, env);
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
    run('npm i')
  }
}

module.exports = Commander;
