module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: `./tsconfig.json`
    },
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    rules: {
        "prettier/prettier": "warn",
        "no-undef": 0,
        "id-length": ["error", { min: 3, properties: "never", exceptions: ["_", "id", "x", "y"] }],
        "@typescript-eslint/indent": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-parameter-properties": 0,
        "@typescript-eslint/no-unused-vars": [
            "error",
            { varsIgnorePattern: "_.*" }
        ],
        "@typescript-eslint/array-type": ["error"],
        "@typescript-eslint/ban-ts-ignore": ["error"],
        "@typescript-eslint/no-inferrable-types": ["error"],
        "@typescript-eslint/no-magic-numbers": 0,
        "@typescript-eslint/no-this-alias": ["error"]
    },
    settings: {

    }
};