const inquirer = require('inquirer');
const { promises: fs } = require('fs');
const { exec } = require('child_process');
const defaultCallback = require('./defaultCallback');

// Get Dependencies from package.json, workspace.jsonc, ignoredDependencies,
// prompt user to reconcile.
Promise.resolve({
  package: null,
  bit: null,
  ignored: null
})
  .then(async (dependencies) => ({
    ...dependencies,
    package: JSON.parse(await fs.readFile('./package.json', 'utf8'))
  }))
  .then(async (dependencies) => {
    const { policy } = JSON.parse(
      await fs.readFile('./.trailmix-bit/workspace.jsonc', 'utf8')
    )['teambit.dependencies/dependency-resolver'];
    return {
      ...dependencies,
      bit: {
        ...policy.dependencies,
        ...policy.peerDependencies
      }
    };
  })
  .then(async (dependencies) => ({
    ...dependencies,
    ignored: JSON.parse(
      await fs.readFile('./.trailmix-bit/ignoredDependencies.json', 'utf8')
    )
  }))
  .then(async (dependencies) => {
    // Go through package.json and see check if the
    // dependecy isn't ignored or in bit.
    const { bit, package, ignored } = dependencies;
    const unAccountedFor = [];
    Object.keys(package.dependencies).forEach((dependency) => {
      if (!bit[dependency] && !ignored[dependency]) {
        unAccountedFor.push(dependency);
      }
    });

    // Let user select packages to add to bit.
    await inquirer
      .prompt([
        {
          type: 'checkbox',
          message:
            'The following dependencies in your package.json have not been added to bit. Select any you would like to add.',
          name: 'Dependencies',
          choices: unAccountedFor.map((dependency) => ({ name: dependency }))
        }
      ])
      .then(({ Dependencies }) => {
        var command = 'cd ./.trailmix-bit';
        Dependencies.forEach((dependency) => {
          command += ` && bit install ${dependency}`;
        });

        exec(command, defaultCallback);
      });
  });
