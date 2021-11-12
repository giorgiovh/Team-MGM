const BASE_URL = 'https://anime-city-mgm.herokuapp.com/api/favorites'

function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    .then(res => res.json())
}

export {
    deleteOne
}