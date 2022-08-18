const jokeEl = document.querySelector('#joke'); 
const jokeBtn = document.querySelector('#jokeBtn');

jokeBtn.addEventListener('click', generateJoke)


//USING ASYNC AWAIT
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke



}

//Using .then
/* function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com/', config)     This using fetch
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
        })
     } */ 