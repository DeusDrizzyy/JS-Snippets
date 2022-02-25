function applyPlaceholders(placeholders, string, delimiters = ['{', '}']) {
    return string.replace(new RegExp(Object.keys(placeholders).map(k => `${delimiters[0]}${k}${delimiters[1]}`).join('|'), 'g'), match => placeholders[match.replace(new RegExp(delimiters.join('|'), 'g'), '')]);
}

/* Example Outputs: */
applyPlaceholders({ name: 'DeusDrizzyy', age: 17 }, 'Hello, I\'m {name} and I\'m {age} years old.');    // Hello, I'm DeusDrizzyy and I'm 17 years old.
applyPlaceholders({ result: 15 }, '10 + 5 = {{result}}', ['{{', '}}']);                                 // 10 + 5 = 15
