import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  ignores: ['cactbot/**', '.eslintrc-auto-import.json'],
})
