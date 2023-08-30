const userCard = document.querySelector(".card")
const form = document.querySelector(".user-input")
const inputField = document.querySelector("input")

const fetchUser = (username) => {
    const url = `https://api.github.com/users/${username}`
    fetch(url).then(response => {
        if (!response.ok) {
            throw new Error("User not found")
        }
        return response.json()
    }).then(data => {
        const card = `
        <section class="user-card">
        <img src="${data.avatar_url}" alt="user-photo">
        <div class="user-details">
        <p class="user-name">${data.login}</p>
        <p class="id">${data.id}</p>
        </div>
        </section>`;
        userCard.innerHTML = card
    }).catch(err => {
        const card = `
        <section class="user-card">
            <p>No user found</p>
        </section>`;
        userCard.innerHTML = card
    })
}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const username = inputField.value;
    fetchUser(username)
    inputField.value = "";
})