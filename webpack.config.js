const path = require('path');



module.exports = {

    // entry: ['./src/index.js', './src/savedInput.js'],

    entry: {
        index: './src/index.js',
        login: './src/login.js',
        loginId: './src/loginId.js',
        createAccount: './src/createAccount.js',
        customFont: './src/customFont.js'

    },

    output: {

        path: path.resolve(__dirname, 'docs'),

        filename: '[name].js'

    },

    mode: 'development'

}