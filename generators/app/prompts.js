module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Input application name',
    default: 'app'
  },
  {
    type: 'confirm',
    name: 'install',
    message: 'Install dependencies right now?',
    default: true
  },
  {
    type: 'confirm',
    name: 'eject',
    message: 'Create ios and android directories (eject)?',
    default: true
  },
  {
    type: 'confirm',
    name: 'link',
    message: 'Link libraries right now?',
    default: true
  }
]