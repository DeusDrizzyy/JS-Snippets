function applyLineBreaks(string, maxCharLengthPerLine) {
    const split = string.split(' '), chunks = [];
    for (let i = 0, j = 0; i < split.length; i++) {
        if ((chunks[j] + split[i]).length > maxCharLengthPerLine) j++;

        chunks[j] = (chunks[j] || '') + split[i] + ' ';
    }

    return chunks.map(c => c.trim()).join('\n');
}


/* Example Outputs: */
applyLineBreaks('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 30)
/*
  Lorem ipsum dolor sit amet,
  consectetur adipiscing elit.
*/

applyLineBreaks('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 20)
/*
  Lorem ipsum dolor
  sit amet,
  consectetur
  adipiscing elit.
*/
