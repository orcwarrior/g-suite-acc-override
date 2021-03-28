
const BabelRcPlugin = require('@jackwilsdon/craco-use-babelrc');

module.exports = {
    style: {
        postcss: {
            env: "production",
            plugins: [
                require('postcss-import'),
                require('tailwindcss'),
            ]
        },
    },
    plugins: [
        { plugin: BabelRcPlugin },
    ]
}