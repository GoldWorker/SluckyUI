// module.exports = {
//     plugins: {
//         autoprefixer: {
//             browsers: ['> 1%', 'last 2 version', 'not ie <= 8']
//         }
//     }
// };

module.exports = {
    plugins: [
        require('autoprefixer')({
            'browsers': [
                'defaults',
                'not ie < 11',
                'last 2 versions',
                '> 1%',
                'iOS 7',
                'last 3 iOS versions'
            ]
        })
    ]
};
