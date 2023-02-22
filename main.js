// https://official-joke-api.appspot.com/random_joke

let button = document.querySelector('button');
button.addEventListener("click", getJoke);

function getJoke(){
    const p = axios.get('https://icanhazdadjoke.com/', { headers: { "Accept": "text/plain" }
}).then((response) => {

        const joke = response.data

        const jokeContainer = document.querySelector('.joke');

        jokeContainer.removeChild(jokeContainer.childNodes[2]);

        const blockquoteEl = document.createElement('blockquote');

        blockquoteEl.append(joke);

        jokeContainer.appendChild(blockquoteEl);
    }).catch((error) => {
        const jokeContainer = document.querySelector('.joke');
        jokeContainer.innerText = 'Joke not found :(';
    });
}