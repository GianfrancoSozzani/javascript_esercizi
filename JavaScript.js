const a = document.getElementById("utenti-presenti");
const b = document.getElementById("commenti");

function mostra_post(utente, listapost) { // Passa listapost come parametro
    let x = "";
    listapost.forEach(u => {
        if (u.userId == utente) {
            x += `<div class="col">
                               <div class="card">
                                   <div class="card-body">
                                       <h5 class="card-title">${u.title}</h5>
                                       <p class="card-text">${u.body}</p>
                                   </div>
                               </div>
                          </div>`;
        }
    });
    b.innerHTML = x;
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(listaUtenti => {

        lista = listaUtenti; // Assegna listaUtenti a lista

        let codiceHTML = "";

        for (let i = 0; i < listaUtenti.length; i++) {
            if (listaUtenti[i].userId !== listaUtenti[i + 1]?.userId) {
                codiceHTML += `<button type='button' class='btn btn-success mx-2' onclick="mostra_post('${listaUtenti[i].userId}', lista)" > ${listaUtenti[i].userId}</button >`;
            }
        }
        a.innerHTML = codiceHTML;


        //listaUtenti.forEach((u, i) => {
        //    if (listaUtenti[i].userId !== listaUtenti[i + 1]?.userId) {
        //        codiceHTML += `<button type='button' class='btn btn-success' onclick="mostra_post('${u.userId}')" > ${u.userId}</button >`;
        //    };
        //}
        /*);*/

    });

//JavaScript cercherà di accedere alla proprietà userId dell'oggetto listaUtenti[i + 1], ma solo se listaUtenti[i + 1] esiste (cioè non è null o undefined). Se listaUtenti[i + 1] è null o undefined, l'operatore ?. fa sì che l'espressione ritorni undefined anziché generare un errore.

// Esempio:
//Se listaUtenti[i + 1] esiste e ha una proprietà userId, allora l'espressione restituirà il valore di userId.

//Se listaUtenti[i + 1] è null o undefined, allora l'espressione restituirà undefined senza generare un errore.

//Questo è utile per evitare errori che si verificherebbero tentando di accedere a una proprietà su un valore null o undefined.

function svuota() {
    b.innerHTML = "";
}