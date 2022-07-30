const fs = require('fs');

if (fs.existsSync('/snapshot')) {
  console.log('snapshot exists');
} else {
  console.log("snapshot doesn't exists");
}
