const tap = require('tap')
const toneConvert = require('../index')

const testCasesValid = [
    {
        options: {},
        text: 'Zhong1guo2ren2 ai4 he1 cha2 hai2shi5 ka1fei1?',
        result: 'Zhōngguórén ài hē chá háishi kāfēi?',
    },
    {
        options: { allowAnyChar: true },
        text: 'nǐhǎo。 yī，èr，sān！',
        result: 'nǐhǎo。 yī，èr，sān！'
    }
]

testCasesValid.forEach(test => {
    tap.equal(toneConvert(test.text, test.options), test.result)
    // tone marks as input just get left as is
    tap.equal(toneConvert(toneConvert(test.text, test.options), { allowAnyChar: true }), test.result)
})
