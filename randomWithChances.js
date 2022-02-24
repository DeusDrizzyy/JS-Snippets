function getRandom(n) {
    const e = Array.from(n);
    e.reduce((n, e, r, t) => t[r] = n + e.chance, 0);
    return n[e.findIndex(n => n > Math.random() * e[e.length - 1])];
}

/* Usage Examples: */
getRandom([
    { rarity: 'Common', chance: 60 },
    { rarity: 'Uncommon', chance: 25 },
    { rarity: 'Rare', chance: 10 },
    { rarity: 'Very Rare', chance: 5 }
]);

getRandom([
    { side: 'VSC', chance: 50 },
    { side: 'WebStorm', chance: 50 }
]);
