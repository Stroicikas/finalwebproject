let counter = 0;
function pokemons(name) {

    fetch (`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => newRow(data))
}


function newRow(data) {

    document.getElementById("newrow").innerHTML += `
    <tr>
        <th scope="row"><img id="img${counter}" width="50px" height="50px" src="${data.sprites.front_default}"></th>
        <td id="name${counter}">${data.name}</td>
        <td id="ability0${counter}"></td>
        <td id="ability1${counter}"></td>
        <td id="ability2${counter}"></td>
        <td id="ability3${counter}"></td>
        <td id="items0${counter}"></td>
        <td id="items1${counter}"></td>
        <td id="items2${counter}"></td>
    </tr>`;

    for(let i = 0; i < 4; i++) {
        if(data.abilities[i] != null) {
            document.getElementById(`ability${i}${counter}`).innerHTML = data.abilities[i].ability.name;
        }
        else {
            document.getElementById(`ability${i}${counter}`).innerHTML = "";
        }
    }
    for(let i = 0; i < 3; i++) {
        if (data.held_items[i] != null) {
            document.getElementById(`items${i}${counter}`).innerHTML = data.held_items[i].item.name;
        }
        else {
            document.getElementById(`items${i}${counter}`).innerHTML = "";
        } 
    }
    counter ++;
    }



