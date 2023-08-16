const semver = require("semver")

const { engines } = require("./package.json")

// Ascii art for the error message
const asciiArt = `
*******************************************************************
*                                                                 *
*   ERROR: Node.js or npm version does not match required.        *
*                                                                 *
*******************************************************************
`

// Function to validate the version
const validateVersion = (name, expected, actual) => {
  if (!semver.satisfies(actual, expected)) {
    console.error(asciiArt)
    console.error(
      `Expected ${name} version to be ${expected}, but got ${actual}.`
    )
    process.exit(1)
  }
}

// Validate Node.js and npm versions
validateVersion("node", engines.node, process.version)
validateVersion(
  "npm",
  engines.npm,
  require("child_process").execSync("npm --version").toString()
)
