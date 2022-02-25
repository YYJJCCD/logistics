module.exports = {
    // add your custom rules here
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/recommended',
        // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
      ],
    rules: {
      // allow async-await
      // allow debugger during development
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-closing-bracket-spacing': 'off',
      'vue/html-indent': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/require-default-prop': 'off'
    }
  }