import isNumber from 'is-number'
import defaultPropNames from './defaultPropNames'
import defaultCalculation from './defaultCalculation'

export default ({
  base = 16,
  propNames = defaultPropNames,
  calculation = defaultCalculation,
} = {}) => ({
  match: ({ key, value }) => (
    isNumber(value) && propNames.includes(key)
  ),
  resolve: ({ key, ...rest }) => ({
    [key]: calculation({
      ...rest,
      key,
      base,
    })
  })
})
