module.exports = {
    // Other Webpack configuration like entry, output, etc.

    resolve: {
        // These extensions specify the file types Webpack should resolve automatically.
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],

        // Modules will tell Webpack where to look when resolving imports.
        modules: ['node_modules'],

        // Aliases allow custom paths, which can help resolve path conflicts or rename modules.
        alias: {
            '@huggingface/transformers': '@huggingface/transformers/dist/transformers.js',

            // Other aliases if needed
            '@components': '/src/components',
            '@utils': '/src/utils',
        },

        // Prefer using ES6 modules if available (optional)
        mainFields: ['browser', 'module', 'main'],
    },

    // Other configurations such as module rules, plugins, etc.
};