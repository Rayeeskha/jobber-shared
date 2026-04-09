const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../../build/cjs');

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.js')) {
    fs.renameSync(
      path.join(dir, file),
      path.join(dir, file.replace('.js', '.cjs'))
    );
  }
});
