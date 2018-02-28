module.exports = {
    "env": {
      "browser": true,
       "es6": true,
       "node": true,
       "commonjs": true
    },
    "extends": [
      "eslint:recommended",
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true,
          "arrowFunctions": true,
          "classes": true,
          "modules": true,
          "defaultParams": true
        },
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [
      "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "react/jsx-uses-react": ["error"],
        "react/jsx-uses-vars": ["error"],
        "no-console": 'off'
    }
};
