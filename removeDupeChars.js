function removeDupeChars(e, r = !1) {
    return e.split("").filter((e, i, n) => n[i] !== n[r ? i + 2 : i + 1]).join("");
}

/* Example Outputs: */
removeDupeChars('Hellooooooo, how are youuuuuuuu?????'); // Hello, how are you?????
removeDupeChars('Wow, that code is really short!', true); // Wow, that code is really short!
removeDupeChars('Ssssshhhhh, be quiet please!'); // Ssh, be quiet please!
