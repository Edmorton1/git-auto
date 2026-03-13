const args = process.argv.slice(2);

const flags = {};
for (let i = 1; i < args.length; i++) {
  const arg = args[i];
  if (arg.startsWith('-')) {
    const [key, value] = arg.slice(1).split('=');
    flags[key] = value === undefined ? true : value;
  }
}

module.exports = flags;
