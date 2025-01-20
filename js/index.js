//https://jsonplaceholder.typicode.com/users
getUsers()
async function getUsers() {
    try{
        const response= await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok){
            throw new Error("Unable to fetch the provided resource");
        }
        const data = await response.json();
        console.log(data);
        for(i=0;i<10;i++){ //can't be static
            if(!data[i].name){
                document.querySelector(`..name--${i}`).innerHTML="N/A";   
            }
            else{
                document.querySelector(`.name--${i}`).innerHTML=data[i].name;
            }
            if(!data[i].username)
            {
                document.querySelector(`.username--${i}`).innerHTML="N/A";
            }
            else{
                document.querySelector(`.username--${i}`).innerHTML=data[i].username;
            }
            if(!data[i].email){
                document.querySelector(`.email--${i}`).innerHTML="N/A";
            }
            else{
            document.querySelector(`.email--${i}`).innerHTML=data[i].email;
    }
    }
}
    catch(error){
        console.log(error);

    }
}