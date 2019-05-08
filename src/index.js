import isNumber from 'is-number'
import defaultPropNames from './defaultPropNames'
import defaultResolve from './defaultResolve'

export default ({
  base = 16,
  propNames = defaultPropNames,
  resolve = defaultResolve,
} = {}) => ({
  match: ({ key, value }) => (
    isNumber(value) && propNames.includes(key)
  ),
  resolve: ({ key, ...rest }) => ({
    [key]: resolve({
      ...rest,
      key,
      base,
    })
  })
})
