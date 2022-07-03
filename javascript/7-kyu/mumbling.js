// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
    let str = s.split("");
    let mumble ="";

    console.log(str);

    str.forEach((element, index) => {
        for (let i = 0; i <= index + 1; i++){
            console.log(`index ${index} with ${element} at i ${i}`);
            if (i === 0) {
                mumble += element.toUpperCase();
            } else if (i < index + 1){
                mumble += element.toLowerCase();
            } else if (i < str.length){
                mumble += '-';
            }
        }
    });

    return mumble;
}

// a far more elegant solution could have been done using map and repeat:
//
// function accum(s) {
//   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
