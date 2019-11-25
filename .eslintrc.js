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
    'plugin:vue/essential',
    '@vue/standard'
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
