module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'babun4ek-fsd-plugin'
    ],
    ignorePatterns: ['**/*.scss'],
    rules: {
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
            }
        ],
        'react/jsx-indent': [2, 4],
        'import/no-unresolved': 'off',
        quotes: [2, 'single'],
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        indent: [2, 4],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'babun4ek-fsd-plugin/path-checker': 'error'
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    }
};
