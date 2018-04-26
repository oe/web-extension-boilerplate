const path = require('path')
const fs = require('fs')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage
} = require('./utils')
const pkg = require('./package.json')

const templateVersion = pkg.version

const { addTestAnswers } = require('./scenarios')

module.exports = {
  metalsmith: {
    // When running tests for the template, this adds answers for the selected scenario
    before: addTestAnswers
  },
  helpers: {
    if_or (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version () {
      return templateVersion
    }
  },

  prompts: {
    name: {
      when: 'isNotTest',
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      when: 'isNotTest',
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'An awesome browser extension'
    },
    author: {
      when: 'isNotTest',
      type: 'string',
      message: 'Author'
    },
    router: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Install vue-router?'
    },
    vuex: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Install vuex?'
    },
    vueI18n: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Install vue-i18n?'
    },
    language: {
      when: 'isNotTest',
      type: 'list',
      message: 'Which language do you want to use?',
      choices: [
        {
          name: 'Javascript',
          value: 'js',
          short: 'Javascript'
        },
        {
          name: 'Typescript',
          value: 'ts',
          short: 'Typescript'
        }
      ]
    },
    lint: {
      when: 'isNotTest && language == "js"',
      type: 'confirm',
      message: 'Use ESLint to lint your code?'
    },
    tslint: {
      when: 'isNotTest && language == "ts"',
      type: 'confirm',
      default: false,
      message: 'Use TSLint to lint your code?'
    },
    lintConfig: {
      when: 'isNotTest && lint',
      type: 'list',
      message: 'Pick an ESLint preset',
      choices: [
        {
          name: 'Standard (https://github.com/standard/standard)',
          value: 'standard',
          short: 'Standard'
        },
        {
          name: 'Airbnb (https://github.com/airbnb/javascript)',
          value: 'airbnb',
          short: 'Airbnb'
        },
        {
          name: 'none (configure it yourself)',
          value: 'none',
          short: 'none'
        }
      ]
    },
    autoInstall: {
      when: 'isNotTest',
      type: 'list',
      message:
        'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm'
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn'
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no'
        }
      ]
    }
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'tsconfig.json': 'language == "ts" && tslint',
    'tslint.json': 'language == "ts" && tslint',
    'src/options/router.js': 'router',
    'src/options/store': 'vuex'
  },
  complete: function (data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  }
}
