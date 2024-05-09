const card = document.getElementById('card');

const API = "https://jsonplaceholder.typicode.com/comments";

const getdata = async (resourse) => {
    const request = await fetch(resourse);
    const data = await request.json();
    console.log(data);
    for (const item of data.slice(0,20)) {
        card.innerHTML += `
        <div>
        <h1 class="a">Name: ${item.name}</h1>
        <p class="b">Id: ${item.id}</p>
        <p class="c">Email: ${item.email}</p>
        </div>
        `
    }
}

getdata(API);