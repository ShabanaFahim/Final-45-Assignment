//Question 32
// Checking Usernames
let current_user : string [] =["admin", "Sana", "Zara", "Aira", "Rida"];
let new_user : string[] = ["admin", "Sana", "Rahima" ,"Faria", "Hafsa", ];

new_user.forEach((new_user) => {
    if  (
        current_user.some(
            (current_user) => current_user .toLowerCase() === new_user .toLowerCase ()
        )

    ) {
        console.log(`${new_user} will need to enter anew username.`);
    }else {
        console.log(`${new_user} is available.`);
    }
}
    )