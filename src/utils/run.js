const {execSync} = require('node:child_process');

module.exports = (cmd) => {
  execSync(cmd, {stdio: 'inherit'});
};
