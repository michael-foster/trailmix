const { exec } = require("child_process");
const defaultCallback = require("./defaultCallback");

const fileCommands = [
  "rsync -a -v components/00-assets .trailmix-bit/web/assets",
  "rsync -a -v components/00-styles .trailmix-bit/web/styles",
  "rsync -a -v components/00-types .trailmix-bit/web/types",
  "rsync -a -v components/01-atoms .trailmix-bit/web/01-atoms",
  "cp components/index.ts .trailmix-bit/web/index.ts",
];

exec(fileCommands.join(" && "), defaultCallback);
