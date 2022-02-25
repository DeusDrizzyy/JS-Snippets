function randomColor() {
    const [R, G, B] = [~~(255 * Math.random()), ~~(255 * Math.random()), ~~(255 * Math.random())],
        HEX = "#" + ((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1), decimal = (R << 16) + (G << 8) + B;

    return { RGB: [R, G, B], HEX, decimal };
}

/* Example Output: */
randomColor(); // { RGB: [ 254, 219, 104 ], HEX: '#fedb68', decimal: 16702312 }
