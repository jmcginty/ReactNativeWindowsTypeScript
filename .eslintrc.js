module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "arrowFunctions": true,
            "binaryLiterals": true,
            "blockBindings": true,
            "classes": true,
            "defaultParams": true,
            "destructuring": true,
            "forOf": true,
            "generators": true,
            "modules": true,
            "objectLiteralComputedProperties": true,
            "objectLiteralDuplicateProperties": true,
            "objectLiteralShorthandMethods": true,
            "objectLiteralShorthandProperties": true,
            "octalLiterals": true,
            "regexUFlag": true,
            "regexYFlag": true,
            "spread": true,
            "superInFunctions": true,
            "templateStrings": true,
            "unicodeCodePointEscapes": true,
            "globalReturn": true,
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
      "linebreak-style":"off",  
      "comma-dangle": "off",
      "class-methods-use-this": "off",
      "react/jsx-filename-extension": "off",
      "react/prefer-stateless-function": "off",
      "arrow-body-style": "off",
      "semi":"off",
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};