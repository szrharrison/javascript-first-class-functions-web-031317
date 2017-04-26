function receivesAFunction(callback) {
  return callback()
}

function returnsANamedFunction(callback) {
  return function thisHasAName() {
    return 'string'
  }
}

function returnsAnAnonymousFunction(callback) {
  return () => {
    return 'this has no name'
  }
}
