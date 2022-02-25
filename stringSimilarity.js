function checkSimilarity(s1, s2) {
    if (s1 === s2) return 1.0;

    const z = s1.length, y = s2.length, n = ~~(Math.max(z, y) / 2) - 1, o = [], q = [];
    let m = 0, t = 0, p = 0;

    for (let a = 0; a < z; a++) for (let h = Math.max(0, a - n); h < Math.min(y, a + n + 1); h++) if (s1.charAt(a) === s2.charAt(h) && !q[h]) {
        o[a] = 1; q[h] = 1; m++;
        break;
    }

    if (!m) return 0.0;

    for (let h = 0; h < z; h++) if (o[h]) {
        for (; !q[p];) p++;
        s1.charAt(h) !== s2.charAt(p++) && t++;
    }

    t >>= 1;
    return ((m / z) + (m / y) + ((m - t) / m)) / 3.0;
}

/* Example Outputs: */
checkSimilarity('No', 'Yes'); // 0
checkSimilarity('DeusDrizzyy', 'DeusDrizzyy'); // 1
checkSimilarity('CRATE', 'TRACE'); // ~0.73334
checkSimilarity('DwAyNE', 'DuANE'); // ~0.82223
