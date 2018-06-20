const tap = require('tap')
const toneConvert = require('../index')

const testCasesValid = [
    {
        options: {},
        text: 'Zhong1guo2ren2 ai4 he1 cha2 hai2shi5 ka1fei1?',
        result: 'Zhōngguórén ài hē chá háishi kāfēi?',
    },
]

testCasesValid.forEach(test => {
    tap.equal(toneConvert(test.text, test.options), test.result)
})
