const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const fileStr = fs.readFileSync(path.resolve(__dirname, 'checks/fscheck.js'));

// test case similar to #1605
spawn('node', ['-e', fileStr], { stdio: 'inherit' });
