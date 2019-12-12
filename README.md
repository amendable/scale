# Scale

This resolver allows implementing step-based design systems. It scales every size prop (`width`, `padding`, `margin`, etc.) by the `base` number and allows to use a custom `calculation` if needed.

## Usage
```jsx sandbox
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import scale from '@amendable/scale'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider
    resolvers={[
      scale({
        base: 16,
      }),
      inlineStyles(),
    ]}
  >
    <Box padding={2} color='white' backgroundColor='black'>
      Primary color
    </Box>
  </AmendableProvider>
)
```

## Supported props

Here's a list of [supported props](https://github.com/amendable/scale/blob/master/src/defaultPropNames.js).
