var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var prompts = require('./prompts');
var writeFiles = require('./writing');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  prompting() {
    this.log(yosay(
      'Hello there! Welcome to React Native ' + chalk.blue('generator-rnapp') + ' generator!'
    ));
    return this.prompt(prompts).then((props) => {
      this.props = props;
    })
  }

  writing () {
    writeFiles.call(this);
  }

  install () {
    if (this.props.install) {
      this.installDependencies({
        bower: false,
        npm: false,
        yarn: true,
      })
    } else {
      this.log('Run ' + chalk.blue('yarn install') + ' to install dependencies later');
    }
  }

  end () {
    
    if (this.props.eject) {
      this.log(chalk.green('Now ejecting...'))
      this.spawnCommandSync('react-native', ['eject'])
    } else {
      this.log('Do not forget to run ' + chalk.blue('react-native eject'))
    }

    if (this.props.link) {
      this.log(chalk.green('Now linking...'))
      this.spawnCommandSync('react-native', ['link'])
    } else {
      this.log('Do not forget to run ' + chalk.blue('react-native link'))
    }

    this.log(chalk.green('All done! '))
  }
};