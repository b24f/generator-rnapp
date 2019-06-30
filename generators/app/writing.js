var _ = require('lodash');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = function () {
  var props = this.props;

  var props = this.props;
  var destPath = this.destinationPath();

  props._ = {
    kebabCase: _.kebabCase,
    camelCase: _.camelCase,
    capitalize: _.capitalize
  };

  mkdirp(path.join(destPath, 'assets/fonts'));
  mkdirp(path.join(destPath, 'assets/images'));

  this.fs.copy(this.templatePath('.buckconfig'), '.buckconfig');
  this.fs.copy(this.templatePath('.flowconfig'), '.flowconfig');
  this.fs.copy(this.templatePath('.gitattributes'), '.gitattributes');
  this.fs.copy(this.templatePath('.gitignore'), '.gitignore');
  this.fs.copy(this.templatePath('.watchmanconfig'), '.watchmanconfig');
  this.fs.copy(this.templatePath('metro.config.js'), 'metro.config.js');
  this.fs.copy(this.templatePath('index.js'), 'index.js');
  this.fs.copy(this.templatePath('babel.config.js'), 'babel.config.js');
  this.fs.copyTpl(this.templatePath('app.json'), 'app.json', props);
  this.fs.copy(this.templatePath('App.js'), 'App.js');
  this.fs.copyTpl(this.templatePath('package.json'),'package.json', props);

  // src/components
  this.fs.copy(this.templatePath('src/components/App/index.js'), 'src/components/App/index.js');
  this.fs.copy(this.templatePath('src/components/layouts/Layout/index.js'), 'src/components/layouts/Layout/index.js');
  this.fs.copy(this.templatePath('src/components/layouts/index.js'), 'src/components/layouts/index.js');
  this.fs.copy(this.templatePath('src/components/svg/ReactNativeIcon/index.js'), 'src/components/svg/ReactNativeIcon/index.js');
  this.fs.copy(this.templatePath('src/components/svg/index.js'), 'src/components/svg/index.js');
  this.fs.copy(this.templatePath('src/components/ui/Button/index.js'), 'src/components/ui/Button/index.js');
  this.fs.copy(this.templatePath('src/components/ui/index.js'), 'src/components/ui/index.js');

  // src/constants
  this.fs.copy(this.templatePath('src/constants/index.js'), 'src/constants/index.js');

  // src/helpers
  this.fs.copy(this.templatePath('src/helpers/index.js'), 'src/helpers/index.js');

  // src/navigationService
  this.fs.copy(this.templatePath('src/navigationService/index.js'), 'src/navigationService/index.js');

  // src/redux
  this.fs.copy(this.templatePath('src/redux/example/index.js'), 'src/redux/example/index.js');
  this.fs.copy(this.templatePath('src/redux/index.js'), 'src/redux/index.js');

  // src/screens 
  this.fs.copy(this.templatePath('src/screens/MainScreen/index.js'), 'src/screens/MainScreen/index.js');
  this.fs.copy(this.templatePath('src/screens/index.js'), 'src/screens/index.js');

  // src/styles
  this.fs.copy(this.templatePath('src/styles/index.js'), 'src/styles/index.js');

  // index.js
  this.fs.copy(this.templatePath('src/index.js'), 'src/index.js');
}