// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'max-len': ['error', { code: 80 }], // Set your desired maximum line length
  },
})
