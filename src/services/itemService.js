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
        "row": '5 / -1',
        "column": '10 / 13',
        'color': 'gold'
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "name": "Funday",
        "row": '3 / 5',
        "column": '5 / 8',
        'color': 'lightpink'

    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "name": "Mister Bitcoin",
        "row": '4/6',
        "column": 3,
        'color': '#85ceff'

    },
    {
        "_id": "5a56640243427b8f8445231e",
        "name": "Pacman",
        "row": 2,
        "column": 9,
        'color': 'lightgray'
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Meme Generator",
        "row": 1,
        "column": 4,
        'color': '#00ceff'
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Mine Sweeper",
        "row": 2,
        "column": '1/3',
        'color': 'lightgreen'
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Appsus",
        "row": 6,
        "column": 5,
        'color': 'orange'
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Mister-Toy",
        "row": 1,
        "column": '11/13',
        'color': 'aqua'
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