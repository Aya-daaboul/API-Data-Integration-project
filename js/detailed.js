async function getallUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Unable to fetch resource");
        }
        return await response.json(); 
    } catch (error) {
        console.error(error);
    }
}

async function populateUsers() {
    const data = await getallUsers();

    const mainContainer = document.querySelector(".main_container");

    data.forEach((user, index) => {
        // Create a new div for the item
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.id = `section--${index}`;

        // Populate the item div with content
        itemDiv.innerHTML = `
            <h1 class="name name--${index}">${user.name}</h1>
            <h2 class="username username--${index}">${user.username}</h2>
            <h3 class="email email--${index}">${user.email}</h3>
            <h3 class="phone phone--${index}">${user.phone}</h3>
            <h3 class="address address--${index}">
              <span class="street street--${index}">${user.address.street}</span> <br>
              <span class="suite suite--${index}">${user.address.suite}</span> <br>
              <span class="city city--${index}">${user.address.city}</span> <br>
              <span class="zipcode zipcode--${index}">${user.address.zipcode}</span>
            </h3>
            <h3 class="website website--${index}">${user.website}</h3>
            <h2 class="company company--${index}">
              <span class="companyname companyname--${index}">${user.company.name}</span> <br>
              <span class="catchPhrase catchPhrase--${index}">${user.company.catchPhrase}</span> <br>
              <span class="bs bs--${index}">${user.company.bs}</span>
            </h2>
        `;

        
        mainContainer.appendChild(itemDiv);
    });
}

populateUsers();