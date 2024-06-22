// // Question 43

let magicians : string[] = ["Alice", "Devid", "Chris"]

function copyarray(arr:string[]){
    return [...arr]
}
//  Fuction to add "the Great" to magician names

function make_great (magicianArry:string []){
    for (let i = 0; i< magicianArry.length; i ++){
        magicians[i] = ` the Great `  +  magicianArry [i]
    }
}

 function show_magicians (magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}

const copymagicianArray = copyarray (magicians)

make_great(copymagicianArray);

console.log(`\n\nThis is my original arry:`);
show_magicians(magicians);

console.log(`\n\nThis is my modified copy of array:`);
show_magicians(copymagicianArray);















 

