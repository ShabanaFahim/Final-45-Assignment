//Question 11


let names:string[]=[`Ayesha`,`Sahar`,`Umama`,`Aiza`];

// loop

for(let i=0 ;i<names.length; i++){
    console.log(names[i]);
}

//  For each

names.forEach(friend=> {
    console.log(friend);
});

//for of loop

for (const friendName of names) {
    console.log(friendName);
}

//question no 12

// loop

for(let i=0 ;i<names.length; i++){
    console.log(`Hello,${names[i]}! how are you today?`);
}

// for each
names.forEach(friend=> {
    console.log(`Hi,${friend}! how are you today?`);
});

// for of each
for (const friendName of names) {
    console.log(`Dear,${friendName}! how are you today?`);
}

// Question no 13

let transportationMode:string[] = ["car","motorcycle","bicycle","bus"];
//for loop

for (let i = 0; i < transportationMode.length;i++) {
    console.log(`i would like to own ${transportationMode[i]}`);
} 

//for each

transportationMode.forEach(mode=> {
    console.log(`i would like to own,${mode}`);
});








