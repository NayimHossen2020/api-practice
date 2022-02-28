const showRandom = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayRandom(data))
};

const displayRandom = (data) => {
    const users = data.results;
    const usersDiv = document.getElementById('buddies');
    for (user of users) {
        console.log(user.name.first);
        const p = document.createElement('p');
        p.innerText = `
        name: ${user.name.first} email: ${user.email}
        `;
        usersDiv.appendChild(p);
    }
}