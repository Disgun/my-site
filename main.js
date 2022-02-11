let box = document.querySelector('.infoBox');
const btn = document.querySelector('.someFunc');
let text = document.createElement('p');

btn.addEventListener('click', async function(){
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    let response = await fetch(url);
    let commits = await response.json();
    console.log(commits)
    text.textContent = commits.userId;
    box.appendChild(text);
})
