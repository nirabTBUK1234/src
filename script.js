const textarea = document.getElementById('plaintext');
const charCount = document.getElementById('charCount');
const latexOutput = document.getElementById('latexOutput');

function escapeLaTeX(str) {
    const replacements = {
        '\\': '\\textbackslash{}',
        '{': '\\{',
        '}': '\\}',
        '_': '\\_',
        '^': '\\^{}',
        '%': '\\%',
        '$': '\\$',
        '#': '\\#',
        '&': '\\&',
        '~': '\\textasciitilde{}'
    };
    return str.replace(/[\\{}_^%$#&~]/g, match => replacements[match]);
}

function convertToLaTeX(plainText) {
    const escapedText = escapeLaTeX(plainText);
    return escapedText.replace(/\n/g, '\\\\\n');
}

// Merge both updates in a single listener
textarea.addEventListener('input', () => {
    charCount.textContent = `${textarea.value.length} / ${textarea.maxLength}`;
    latexOutput.textContent = convertToLaTeX(textarea.value);
});