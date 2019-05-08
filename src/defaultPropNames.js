const allSides = (prefix, suffix = '') => [
  `${prefix}${suffix}`,
  `${prefix}Top${suffix}`,
  `${prefix}Right${suffix}`,
  `${prefix}Bottom${suffix}`,
  `${prefix}Left${suffix}`,
]

export default [
  ...allSides('padding'),
  ...allSides('margin'),
  'fontSize',
  'width',
  'height',
  ...allSides('border', 'Width'),
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'top',
  'right',
  'bottom',
  'left',
  'outlineWidth',
  'letterSpacing',
  'backgroundSize',
]
