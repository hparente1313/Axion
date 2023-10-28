// TODO: Make a custom ESLint configuration using the new ESLint config file system
//  Base it on pre-existing configurations such as 'vue/vue3-essential', and 'ft-flow/recommended'
//  Make it in such a way where there is a number of presets for different project types, that adheres to your
//  custom style guide...
module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:ft-flow/recommended',
        'prettier'
    ],
    plugins: [
        'vue',
        'ft-flow'
    ]
}