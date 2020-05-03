const { execFile } = require('child_process');

const child = execFile('npm', ['--version'], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log('NPM version by stdout')
    console.log(stdout);
});
