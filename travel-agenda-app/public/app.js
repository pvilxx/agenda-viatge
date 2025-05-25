const apiUrl = '/api/clients';

function fetchClients(destination = '') {
    let url = apiUrl;
    if (destination) url += `?destination=${encodeURIComponent(destination)}`;
    fetch(url)
        .then(res => res.json())
        .then(renderClientsTable);
}

function renderClientsTable(clients) {
    const tbody = document.querySelector('#clients-table tbody');
    tbody.innerHTML = '';
    clients.forEach(client => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${client.nom}</td>
            <td>${client.cognoms}</td>
            <td>${client.telefon}</td>
            <td>${client.email}</td>
            <td>${client.destinacio}</td>
            <td>${new Date(client.data_creacio).toLocaleDateString()}</td>
            <td>
                <button onclick="editClient(${client.id})">Editar</button>
                <button onclick="deleteClient(${client.id})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById('client-form').onsubmit = function(e) {
    e.preventDefault();
    const id = document.getElementById('client-id').value;
    const client = {
        nom: document.getElementById('nom').value,
        cognoms: document.getElementById('cognoms').value,
        telefon: document.getElementById('telefon').value,
        email: document.getElementById('email').value,
        destinacio: document.getElementById('destinacio').value
    };
    if (id) {
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(client)
        }).then(() => {
            resetForm();
            fetchClients();
        });
    } else {
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(client)
        }).then(() => {
            resetForm();
            fetchClients();
        });
    }
};

function editClient(id) {
    fetch(`${apiUrl}/${id}`)
        .then(res => res.json())
        .then(client => {
            document.getElementById('client-id').value = client.id;
            document.getElementById('nom').value = client.nom;
            document.getElementById('cognoms').value = client.cognoms;
            document.getElementById('telefon').value = client.telefon;
            document.getElementById('email').value = client.email;
            document.getElementById('destinacio').value = client.destinacio;
            document.getElementById('form-title').textContent = 'Editar Client';
            document.getElementById('cancelEdit').style.display = 'inline-block';
        });
}

function deleteClient(id) {
    if (confirm('Segur que vols eliminar aquest client?')) {
        fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
            .then(() => fetchClients());
    }
}

document.getElementById('cancelEdit').onclick = resetForm;

function resetForm() {
    document.getElementById('client-id').value = '';
    document.getElementById('client-form').reset();
    document.getElementById('form-title').textContent = 'Afegir Client';
    document.getElementById('cancelEdit').style.display = 'none';
}

document.getElementById('searchBtn').onclick = function() {
    const dest = document.getElementById('search').value;
    fetchClients(dest);
};

document.getElementById('search').onkeyup = function(e) {
    if (e.key === 'Enter') {
        fetchClients(this.value);
    }
};

fetchClients();
