const { exec } = require('child_process');

exports.handler = async function(event, context) {
  // Execute your bot script
  exec('node start.js', (error, stdout, stderr) => {
    if (error) {
      return {
        statusCode: 500,
        body: `Error: ${error.message}`,
      };
    }
    if (stderr) {
      return {
        statusCode: 500,
        body: `Stderr: ${stderr}`,
      };
    }
    return {
      statusCode: 200,
      body: `Stdout: ${stdout}`,
    };
  });
};