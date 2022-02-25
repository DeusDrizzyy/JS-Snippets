function didYouMean(e, i, n = 60) {  // Similarity ( Default: 60% (recommended) )
    return i.map(i => ({
        e: i, v: checkSimilarity(e, i) // checkSimilarity function can be found in stringSimilarity.js
    })).filter(({ v: e }) => e >= n / 100).reduce((e, i, n, r) => r[n].v > i ? r[n].v : i.e, null);
}

/* Example Outputs: */
console.log(didYouMean('hekp', ['goodbye', 'hello', 'help'])) // help
console.log(didYouMean('dodgeball', ['pencil', 'avocado', 'supermarket'])) // null
console.log(didYouMean('intsagrm', ['facebook', 'instagram', 'twitter', 'linkedin', 'github'])) // instagram
