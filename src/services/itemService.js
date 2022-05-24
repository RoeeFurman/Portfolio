export default {
    query,
    getById,
    remove,
    save,
    getEmptyItem
}

const items = [
    {
        "_id": "5a566402abb3146207bc4ec5",
        "name": "Loop Machine",
        "webURL": 'https://roeefurman.github.io/loopMachine/#/',
        'color': 'white',
        'fontSize': '36px',
        'imgURL': 'loopmachine'
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "name": "Funday",
        "webURL": 'https://funday-ca.herokuapp.com/#/',
        'color': 'white',
        'fontSize': '42px',
        'imgURL': 'funday'

    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "name": "Mister Bitcoin",
        "webURL": 'https://roeefurman.github.io/Mister-Bitcoin/#/',
        'color': 'black',
        'fontSize': '34px',
        'imgURL': 'misterbitcoin'

    },
    {
        "_id": "5a56640243427b8f8445231e",
        "name": "Pacman",
        "webURL": 'https://roeefurman.github.io/Pacman/',
        'color': 'white',
        'fontSize': '34px',
        'imgURL': 'pacman'
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Meme Generator",
        "webURL": 'https://roeefurman.github.io/Meme-Generator/',

        'color': '#00ceff',
        'fontSize': '40px',
        'imgURL': 'memegene'

    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Mine Sweeper",
        "webURL": 'https://roeefurman.github.io/Mine-Sweeper/',
        'color': 'purple',
        'fontSize': '30px',
        'imgURL': 'minesweeper'

    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Appsus",
        "webURL": 'https://roeefurman.github.io/appsus',
        'color': 'darkblue',
        'fontSize': '34px',
        'imgURL': 'appsus'
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Mister-Toy",
        "webURL": 'https://protected-scrubland-64482.herokuapp.com/#/',
        'color': '#95d8ff',
        'imgURL': 'mistertoy'
    }
];

function sort(arr) {
    return arr.sort((a, b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
        }
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
        }

        return 0;
    })
}

function query(filterBy = null) {
    return new Promise((resolve, reject) => {
        var itemsToReturn = items;
        if (filterBy && filterBy.term) {
            itemsToReturn = filter(filterBy.term)
        }
        resolve(sort(itemsToReturn))
    })
}

function getById(id) {
    return new Promise((resolve, reject) => {
        const item = items.find(item => item._id === id)
        item ? resolve(item) : reject(`Item id ${id} not found!`)
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        const index = items.findIndex(item => item._id === id)
        if (index !== -1) {
            items.splice(index, 1)
        }

        resolve(items)
    })
}

function _updateItem(item) {
    return new Promise((resolve, reject) => {
        const index = items.findIndex(c => item._id === c._id)
        if (index !== -1) {
            items[index] = item
        }
        resolve(item)
    })
}

function _addItem(item) {
    return new Promise((resolve, reject) => {
        item._id = _makeId()
        items.push(item)
        resolve(item)
    })
}

function save(item) {
    return item._id ? _updateItem(item) : _addItem(item)
}

// to UPDATE
function getEmptyItem() {
    return {
        name: '',
        email: '',
        phone: ''
    }
}

function filter(term) {
    term = term.toLocaleLowerCase()
    return items.filter(item => {
        return item.name.toLocaleLowerCase().includes(term) ||
            item.phone.toLocaleLowerCase().includes(term) ||
            item.email.toLocaleLowerCase().includes(term)
    })
}
