function vowelfinder(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    let consonants = 0;
    let numbers = 0;
    for (CHAR in str){
        if (vowels.includes(str[CHAR])) {
            count++;
        }
        if (str[CHAR]=== '0' || str[CHAR]==='1' || str[CHAR]==='2' || str[CHAR]==='3' || str[CHAR]==='4' || str[CHAR]==='5' || str[CHAR]==='6' || str[CHAR]==='7' || str[CHAR]==='8' || str[CHAR]==='9') {
            numbers++;
        }
        if (!vowels.includes(str[CHAR]) && str[CHAR] !== ' ') {
            consonants++;
        }
    }
    console.log(`consonants: ${consonants}`);
    console.log(`numbers: ${numbers}`);
    console.log(`vowels: ${count}`);
    return count;
}
console.log(vowelfinder("JavaScript is fun22")); 
