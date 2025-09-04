// JavaScript Todo Basics - Har buggar som du behöver fixa!

// STEG 1: Todo-array (fungerar bra)
let todoArray = ['Handla mat', 'Städa rummet', 'Göra läxor'];

// STEG 2: Visa todos-funktion (har problem!)
function visaTodos() {
    const listaElement = document.getElementById('todo-lista');
    let htmlString = '<h3>Mina Todos:</h3>';

    // PROBLEM: Listan visas inte! Vad saknas?
    for (let i = 0; i < todoArray.length; i++) {
        htmlString += '<div class="todo-item">';
        htmlString += '<span>' + todoArray[i] + '</span>';
        htmlString += '<button onclick="taBortTodo(' + i + ')">Ta bort</button>';
        htmlString += '</div>';
    }

    // PROBLEM: Vi uppdaterar aldrig HTML:en!
    // listaElement.innerHTML = htmlString;
}

// STEG 3: Lägg till todo (har flera problem!)
function laggTillTodo() {
    const inputElement = document.getElementById('todo-input');
    const nyTodo = inputElement.value;

    // PROBLEM: Vad händer om input är tom?
    todoArray.push(nyTodo);

    // PROBLEM: Listan uppdateras inte!
    // visaTodos();

    // PROBLEM: Input rensas inte!
    // inputElement.value = '';

    // PROBLEM: Statistik uppdateras inte!
    // uppdateraStats();
    // uppdateraDebug();
}

// STEG 4: Ta bort todo (saknas helt!)
// TODO: Skriv denna funktion
// function taBortTodo(index) {
//     // Använd splice() för att ta bort från array
//     // Uppdatera listan och statistik
// }

// STEG 5: Statistik-funktion (saknas!)
// TODO: Skriv denna funktion
// function uppdateraStats() {
//     // Uppdatera total-count
//     // Kanske fler statistik senare?
// }

// STEG 6: Debug-funktion (fungerar)
function uppdateraDebug() {
    document.getElementById('debug-length').textContent = todoArray.length;
    document.getElementById('debug-last').textContent = todoArray[todoArray.length - 1] || 'Ingen';
    document.getElementById('debug-array').textContent = JSON.stringify(todoArray);
}

// STEG 7: Event listeners (bara en fungerar!)
document.getElementById('add-btn').addEventListener('click', laggTillTodo);

// TODO: Lägg till event listener för Enter-tangent
// TODO: Lägg till event listeners för andra knappar

// STEG 8: Initiera appen (stora problem!)
// PROBLEM: Inget händer när sidan laddas!
// visaTodos();
// uppdateraStats();
// uppdateraDebug();

// TESTOMRÅDE
console.log('Todo app laddad!');
console.log('PROBLEM: Listan visas inte!');
console.log('PROBLEM: "Lägg till" fungerar inte ordentligt!');
console.log('PROBLEM: Inga delete-knappar fungerar!');
console.log('Öppna Console och testa: todoArray');
