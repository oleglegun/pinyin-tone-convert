const toneParse = require('pinyin-tone-parse')

const tones = {
    a: ['a', 'ā', 'á', 'ǎ', 'à', 'a'],
    A: ['A', 'Ā', 'Á', 'Ǎ', 'À', 'A'],
    e: ['e', 'ē', 'é', 'ě', 'è', 'e'],
    E: ['E', 'Ē', 'É', 'Ě', 'È', 'E'],
    i: ['i', 'ī', 'í', 'ǐ', 'ì', 'i'],
    I: ['I', 'Ī', 'Í', 'Ǐ', 'Ì', 'I'],
    o: ['o', 'ō', 'ó', 'ǒ', 'ò', 'o'],
    O: ['O', 'Ō', 'Ó', 'Ǒ', 'Ò', 'O'],
    u: ['u', 'ū', 'ú', 'ǔ', 'ù', 'u'],
    U: ['U', 'Ū', 'Ú', 'Ǔ', 'Ù', 'U'],
    ü: ['ü', 'ǖ', 'ǘ', 'ǚ', 'ǜ', 'ü'],
    Ü: ['Ü', 'Ǖ', 'Ǘ', 'Ǚ', 'Ǜ', 'Ü'],
}

/**
 * Convert pinyin tone numbers to tone marks.
 * @param {String} text
 * @param {Object} options
 * @returns {String}
 * @throws {Error} 
 */
function convert(text, options) {
    if (typeof text !== 'string') {
        throw new Error('Parameter `text` must be a string.')
    }

    let result = ''

    toneParse(text, options).forEach(elem => {
        if (Array.isArray(elem)) {
            result += mark(...elem)
        } else {
            result += elem
        }
    })
    return result
}

/**
 * @param {String} word
 * @param {Number} toneNumber
 * @returns {String} Word with marked tone
 */
function mark(word, toneNumber) {
    if (toneNumber === 5 || toneNumber === null) {
        return word
    }

    // Check for syllables in priority order
    if (word.includes('a')) {
        return word.replace('a', tones.a[toneNumber])
    } else if (word.includes('A')) {
        return word.replace('A', tones.A[toneNumber])
    } else if (word.includes('e')) {
        return word.replace('e', tones.e[toneNumber])
    } else if (word.includes('E')) {
        return word.replace('E', tones.E[toneNumber])
    } else if (word.includes('o')) {
        return word.replace('o', tones.o[toneNumber])
    } else if (word.includes('O')) {
        return word.replace('O', tones.O[toneNumber])
    } else {
        // Mark last syllable
        for (let i = word.length - 1; i >= 0; i--) {
            const index = 'iouüIOUÜ'.indexOf(word[i])
            if (index !== -1) {
                // last syllable found
                return word.replace(word[i], tones[word[i]][toneNumber])
            }
        }
        // No syllables found
        return word
    }
}

module.exports = convert
