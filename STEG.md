# STEG-FÖR-STEG INSTRUKTIONER
JavaScript Todo Basics - Upptäck och Lös Problem!

## Innan du börjar
1. Öppna `index.html` i webbläsaren
2. Öppna Developer Tools (F12) - Console-fliken
3. **Observera:** Appen ser fel ut och fungerar inte!

**Detta är meningen!** Du ska upptäcka och fixa problemen.

---

## PROBLEM 1: Appen ser fruktansvärd ut! 🎨

**Vad du ser:** Gul knapp med blå text, röd ram på input, allt ser fel ut.

### Steg 1.1: Fixa input-fältet
I `style.css`, ändra:
```css
#todo-input {
    padding: 10px;           /* Istället för 5px */
    font-size: 16px;         /* Istället för 12px */
    border: 1px solid #ddd;  /* Istället för 3px solid red */
    width: 300px;
    border-radius: 4px;      /* Lägg till detta */
}
```

### Steg 1.2: Fixa knappen
```css
.add-button {
    padding: 10px 15px;          /* Istället för 5px */
    font-size: 16px;             /* Istället för 12px */
    border: none;                /* Istället för 3px solid purple */
    background-color: #007acc;   /* Istället för yellow */
    color: white;                /* Istället för blue */
    cursor: pointer;
    border-radius: 4px;          /* Lägg till */
    margin-left: 10px;           /* Lägg till */
}
```

### Steg 1.3: Fixa layout för input-sektion
```css
.input-section {
    display: flex;              /* Lägg till */
    align-items: center;        /* Lägg till */
    margin-bottom: 20px;
}
```

### Steg 1.4: Förbättra övrig styling
```css
body {
    margin: 20px;               /* Istället för 10px */
    background-color: #f5f5f5;  /* Istället för white */
}

.container {
    padding: 30px;              /* Istället för 10px */
    background-color: white;    /* Lägg till */
    border-radius: 10px;        /* Lägg till */
    box-shadow: 0 2px 10px rgba(0,0,0,0.1); /* Lägg till */
}

h1 {
    text-align: center;         /* Istället för left */
    color: #333;               /* Istället för black */
}
```

---

## PROBLEM 2: Listan visas inte! 😱

**Testa:** Ladda om sidan. Ser du några todos? Nej!

### Steg 2.1: Fixa visaTodos()-funktionen
I `script.js`, ta bort `//` framför denna rad:
```javascript
function visaTodos() {
    // ... kod ...
    
    listaElement.innerHTML = htmlString; // ← Ta bort // här!
}
```

### Steg 2.2: Anropa funktionen när sidan laddas
Ta bort `//` framför dessa rader längst ned:
```javascript
visaTodos();
// uppdateraStats();    // Vi fixar denna senare
uppdateraDebug();
```

**Testa:** Ladda om sidan. Nu ska du se 3 todos!

---

## PROBLEM 3: "Lägg till" fungerar halvdant! 🤔

**Testa:** Skriv "Diska" och tryck "Lägg till". Vad händer?

### Steg 3.1: Fixa så listan uppdateras
I `laggTillTodo()`-funktionen, ta bort `//`:
```javascript
function laggTillTodo() {
    // ... kod ...
    
    visaTodos();        // ← Ta bort // här!
    // inputElement.value = '';  // Fixa senare
    // uppdateraStats();         // Fixa senare  
    uppdateraDebug();   // ← Ta bort // här!
}
```

### Steg 3.2: Fixa så input rensas
Ta bort `//` framför:
```javascript
inputElement.value = '';
```

### Steg 3.3: Skriv uppdateraStats()-funktionen
```javascript
function uppdateraStats() {
    const totalElement = document.getElementById('total-count');
    totalElement.textContent = todoArray.length;
}
```

### Steg 3.4: Anropa uppdateraStats()
Ta bort `//` framför `uppdateraStats();` i båda `laggTillTodo()` och längst ned.

**Testa:** Nu ska "Lägg till" fungera perfekt!

---

## PROBLEM 4: Ta bort-knapparna fungerar inte! ❌

**Testa:** Tryck på "Ta bort". Får du fel i Console?

### Steg 4.1: Skriv taBortTodo()-funktionen
```javascript
function taBortTodo(index) {
    todoArray.splice(index, 1);  // Ta bort 1 element på position index
    visaTodos();                 // Uppdatera listan
    uppdateraStats();           // Uppdatera statistik
    uppdateraDebug();           // Uppdatera debug
}
```

**Testa:** Nu ska ta bort-knapparna fungera!

---

## PROBLEM 5: Tom input kan läggas till! 🚫

**Testa:** Tryck "Lägg till" utan att skriva något. Läggs en tom todo till?

### Steg 5.1: Lägg till validering
I `laggTillTodo()`, ändra:
```javascript
function laggTillTodo() {
    const inputElement = document.getElementById('todo-input');
    const nyTodo = inputElement.value.trim(); // .trim() tar bort mellanslag
    
    // Validering!
    if (nyTodo === '') {
        alert('Du måste skriva något!');
        return; // Avsluta funktionen tidigt
    }
    
    todoArray.push(nyTodo);
    // ... resten av koden
}
```

---

## PROBLEM 6: CSS för todo-items saknas! 🎨

Todo-items ser tråkiga ut. Lägg till CSS:

### Steg 6.1: Styling för todo-items
Lägg till i `style.css`:
```css
.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
    background-color: white;
}

.todo-item:hover {
    background-color: #f9f9f9;
}

.todo-item span {
    flex-grow: 1;
    font-size: 16px;
}

.todo-item button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
}

.todo-item button:hover {
    background-color: #c82333;
}
```

---

## UTMANING: Lägg till fler funktioner! 🚀

### Lägg till "Rensa alla"-knapp
HTML (lägg till i input-section):
```html
<button id="clear-btn" class="clear-button">Rensa alla</button>
```

JavaScript:
```javascript
function rensaAllaTodos() {
    todoArray = [];
    visaTodos();
    uppdateraStats();
    uppdateraDebug();
}

document.getElementById('clear-btn').addEventListener('click', rensaAllaTodos);
```

CSS:
```css
.clear-button {
    background-color: #6c757d;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
}
```

### Lägg till Enter-tangent support
```javascript
document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        laggTillTodo();
    }
});
```

### Lägg till checkbox-funktionalitet
Ändra i `visaTodos()`:
```javascript
htmlString += '<input type="checkbox" onchange="toggleTodo(' + i + ')">';
```

Lägg till funktion:
```javascript
function toggleTodo(index) {
    // Implementera "klar/inte klar" funktionalitet
    // Tips: Lägg till en "completed" property till varje todo
}
```

---

## Grattis! 🎉

Du har nu:
- ✅ Fixat CSS-problem och gjort appen snygg
- ✅ Löst JavaScript-buggar
- ✅ Lagt till validering
- ✅ Byggt en fullt fungerande todo-app
- ✅ Lärt dig arrays, DOM-manipulation och problemlösning

---

## Nästa Nivå: Avancerade Funktioner 🤔

Nu när du har en fungerande todo-app, börjar det riktiga tänkandet! Här är några utmaningar som får dig att tänka som en riktig utvecklare:

### 💾 **LocalStorage - Spara data mellan sessioner**
Just nu försvinner alla dina todos när du laddar om sidan. Frustrerande, eller hur? Tänk på det:
- Var sparas `todoArray` egentligen? (Svar: I datorns minne)
- Vad händer med minnet när du stänger webbläsaren?
- Hur skulle du kunna "komma ihåg" todos nästa gång du öppnar appen?

**Ledtråd:** Webbläsaren har något som heter `localStorage` - som en liten databas i din dator. Den kan spara text-data permanent. Men den kan bara spara strings, inte arrays... Hur löser man det? 🧩

**Frågor att fundera på:**
- När ska du spara till localStorage? Efter varje förändring?
- När ska du ladda från localStorage? När sidan startar?
- Vad händer första gången någon besöker appen (tom localStorage)?

### 📊 **Sortering - Organisera dina todos**
Tänk dig att du har 50 todos. Kaos! Hur skulle du vilja organisera dem?
- Alfabetisk ordning?
- Äldsta först? Nyaste först?
- Klara todos nederst?

**Utmaning:** JavaScript arrays har en `.sort()` metod. Men hur säger du åt den HUR den ska sortera? Hint: Du kan ge den en funktion som jämför två items...

**Fundera:**
- Var lägger du sortering-knapparna i HTML?
- Hur vet appen vilket sätt användaren vill sortera på?
- Ska sorteringen sparas mellan sessioner?

### 🏷️ **Kategorier - Gruppera relaterade todos**
"Handla mat", "Plugga matte", "Träna" - dessa hör till olika delar av livet. Vad om varje todo kunde ha en kategori?

**Tänk större:** Istället för att `todoArray` innehåller strings, vad om den innehöll objekt?
```javascript
// Från detta:
todoArray = ['Handla mat', 'Plugga matte'];

// Till detta:
todoArray = [
    { text: 'Handla mat', category: 'Hushåll', completed: false },
    { text: 'Plugga matte', category: 'Skola', completed: true }
];
```

**Utmaningar:**
- Hur ändrar du `visaTodos()` för att hantera objekt istället för strings?
- Hur lägger du till en dropdown för att välja kategori?
- Kan du filtrera todos baserat på kategori?
- Olika färger för olika kategorier?

### 🎯 **Deadline-funktionalitet**
Vad händer om vissa todos har en deadline? "Lämna in uppsats" borde kanske visas i rött om det är försenat?

**Tekniska utmaningar:**
- JavaScript Date-objekt för att hantera datum
- Jämföra datum (är deadline passerad?)
- Visuell feedback (röd text för försenade todos?)

### 🔍 **Sökfunktion**
50 todos = svårt att hitta "den där grejen om tandläkaren". En sök-ruta skulle vara smidig!

**Fundera:**
- Var placerar du sök-rutan?
- Ska den söka medan du skriver (live search) eller när du trycker Enter?
- Söka bara i todo-text eller även i kategorier?

### 📱 **Responsiv design**
Din app ser bra ut på dator, men vad händer på mobilen? 

**CSS-utmaning:**
- Media queries för olika skärmstorlekar
- Touch-vänliga knappar (större på mobil)
- Vertikal layout på smala skärmar

---

## Filosofiska Frågor för Utvecklare 🧠

**Användbarhet:**
- Vad är viktigast: Många funktioner eller att det är enkelt att använda?
- Hur många klick ska det ta att lägga till en todo?

**Prestanda:**
- Vad händer om någon har 1000 todos? Blir appen långsam?
- Ska du ladda alla todos på en gång eller bara visa 20 åt gången?

**Data:**
- Vad händer om användaren har todos på flera enheter? 
- Ska data synkas mellan telefon och dator?

**Säkerhet:**
- LocalStorage kan andra webbsidor läsa? (Nej, men användaren kan)
- Vad om todos innehåller känslig information?

---

Du har mästrat grunderna i JavaScript utveckling! Nu handlar det om att tänka som en produktutvecklare. Varje funktion du lägger till ska lösa ett verkligt problem för användaren.

**Börja enkelt:** Välj EN funktion och implementera den ordentligt. Det är bättre än att halvimplementera fem funktioner! 💪

**Pro-tips:** Riktig mjukvaruutveckling handlar 80% om att tänka och planera, 20% om att skriva kod. Du är redan på väg! 🚀
