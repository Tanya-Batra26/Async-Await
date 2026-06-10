document.addEventListener("DOMContentLoaded", () => {
    fetchUsers();
});

async function fetchUsers() {

    const loading = document.getElementById("loading");
    const usersTable = document.getElementById("users");

    try {
        loading.textContent = "Loading users...";

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        users.forEach(user => {
            usersTable.innerHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                </tr>
            `;
        });

    } catch (error) {
        usersTable.innerHTML = `
            <tr>
                <td colspan="2">${error.message}</td>
            </tr>
        `;
    } finally {
        loading.textContent = "";
    }
}
