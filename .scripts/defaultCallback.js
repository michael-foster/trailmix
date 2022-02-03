function defaultCallback(error, stdout, stderr) {
  if (error) {
    console.log(error);
  }

  if (stdout) {
    console.log(stdout);
  }

  if (stderr) {
    console.log(stderr);
  }
}

module.exports = defaultCallback;
