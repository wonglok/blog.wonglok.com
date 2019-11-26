module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@vue/standard',
    'plugin:vue/essential'
    // '@nuxtjs',
    // 'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/html-indent': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'singleline-html-element-content-newline': 'off',
    'no-tabs': 'off',
    'no-debugger': 'off'
  }
}
