const util = require('util');
const exec = util.promisify(require('child_process').exec);
async function cli(str) {
  try {
      const { stdout, stderr } = await exec(str);
      console.log('stdout:', stdout);
      console.log('stderr:', stderr);
  }catch (err){
     console.error(err);
  };
};
module.exports = cli;