const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const morseKeys = Object.keys(MORSE_TABLE);
    const morseValues = Object.values(MORSE_TABLE);
    const masTmp = [];
    const masExpr = expr.split('');
    let resultStr = [];

    for (let i = 0; i < expr.length / 10; i++) {
        masTmp.push(masExpr.splice(0,10));
    }

    masTmp.forEach((item, i) => {
      let keyMorseStr = [];

      if (item[0] === "*") {
        resultStr.push(" ");
      }
      else {
        for (let j = item.indexOf("1"); j < item.length; j += 2) {
          if (item[j].concat(item[j + 1]) === "10") keyMorseStr.push(".");
          if (item[j].concat(item[j + 1]) === "11") keyMorseStr.push("-");
        }

        resultStr.push(morseValues[morseKeys.indexOf(keyMorseStr.join(''))]);
      }
    });

    return resultStr.join('');
}

module.exports = {
    decode
}
