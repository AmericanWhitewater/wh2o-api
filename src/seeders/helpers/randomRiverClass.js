/**
 * @todo add the missing class values.
 * @returns random river/rapid class
 */
module.exports = () => {
  const classes = ['none','I', 'II', 'III', 'IV', 'V', 'V+']

  return classes[Math.floor(Math.random() * classes.length) + 0]
}
