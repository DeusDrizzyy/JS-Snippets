function convertAbbreviatedNum(e) {
    const t = parseFloat(e.substr(0, e.length - 1)), r = e.substr(-1), s = { k: 1e3, M: 1e6, G: 1e9, T: 1e12 }; // k: thousand, M: million, G: billion, T: trillion
    return s[r] ? t * s[r] : parseFloat(e);
}

/* Example Outputs: */
convertAbbreviatedNum('30.6M'); // 30600000
convertAbbreviatedNum('5000'); // 5000
convertAbbreviatedNum('175.05k'); // 175050
