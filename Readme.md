# Pinyin Tone Convert

[![Build Status](https://travis-ci.org/oleglegun/pinyin-tone-convert.svg?branch=master)](https://travis-ci.org/oleglegun/pinyin-tone-convert)
[![Coverage Status](https://coveralls.io/repos/github/oleglegun/pinyin-tone-convert/badge.svg?branch=master)](https://coveralls.io/github/oleglegun/pinyin-tone-convert?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Easily convert pinyin tone numbers to tone marks. 

## Installation

`npm install pinyin-tone-convert`

## Usage

```js
const toneConvert = require('pinyin-tone-convert')

toneConvert('Ni3 hao3 ma5?')
// 'Nǐ hǎo ma?'

toneConvert('Zhong1guo2ren2 ai4 he1 cha2 hai2shi5 ka1fei1?')
// Zhōngguórén ài hē chá háishi kāfēi?
```

## Options

Under the hood this library uses `pinyin-tone-parse` library and thus passes `options` object directly to it. Look for all available options [here](https://github.com/oleglegun/pinyin-tone-parse#options).

```js
const toneConvert = require('pinyin-tone-convert')

toneConvert('pinyin...', options)
```

## Conversion Rules

This library works based on these rules:
 1. `a` and `e` trump all other vowels and always take the tone mark. 
 2. In the combination `ou`, `o` takes the mark.
 3. In all other cases, the final vowel takes the mark.


## Tests

`npm test`

## License

MIT.
