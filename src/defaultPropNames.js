const allCorners = (prefix, suffix = '') => [
  `${prefix}${suffix}`,
  `${prefix}TopLeft${suffix}`,
  `${prefix}TopRight${suffix}`,
  `${prefix}BottomLeft${suffix}`,
  `${prefix}BottomRight${suffix}`,
]

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
  ...allCorners('border', 'Radius'),
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
