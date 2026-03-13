const {run} = require('../utils');

const getPrefix = (env) => {
  switch (env) {
    case 'develop':
      return 'feature';
    case 'stage':
      return 'hotfix';
    default:
      throw new Error('Indicate environment (develop or stage)');
  }
};

module.exports = (task, env) => {
  const prefix = getPrefix(env);

  const branch = `${prefix}/EUTP-${task}`;

  run(`git switch ${env}`);
  run(`git switch -c ${branch}`);
  run(`git commit -m https://youtrack.esoft.tech/issue/EUTP-${task}`);
  run(`git push -u origin ${branch}`);
};
