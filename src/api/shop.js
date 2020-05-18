/**
 * Mocking client-server processing
 */
const _products = [
    { "id": 1,

      "title": "Joowish Original-T MK1",
      "price": 500.01,
      "inventory": 1
    },
    { "id": 2,
      "title": "Joowish Sweater MK1",
      "price": 10.99,
      "inventory": 10
    },
    { "id": 3,
      "title": "Joowish Cap MK2",
      "price": 19.99,
      "inventory": 5
    },
    { "id": 4,
      "title": "Joowish Masks",
      "price": 19.99,
      "inventory": 5
    },
    { "id": 5,
      "title": "Joowish Original-T MK1",
      "price": 500.01,
      "inventory": 1
    },
    { "id": 6,
      "title": "Joowish Sweater MK1",
      "price": 10.99,
      "inventory": 10
    },
    { "id": 7,
      "title": "Joowish Cap MK2",
      "price": 19.99,
      "inventory": 5
    },
    { "id": 8,
      "title": "Joowish Masks",
      "price": 19.99,
      "inventory": 5
    },
    { "id": 9,
      "title": "Joowish Cap MK2",
      "price": 19.99,
      "inventory": 5
    },
    { "id": 10,
      "title": "Joowish Masks",
      "price": 19.99,
      "inventory": 5
    },
    { "id": 11,
      "title": "Joowish Sweater MK1",
      "price": 10.99,
      "inventory": 10
    },
    { "id": 12,
      "title": "Joowish Cap MK2",
      "price": 19.99,
      "inventory": 5
    },
    { "id": 13,
      "title": "Joowish Masks",
      "price": 19.99,
      "inventory": 5
    },
    { "id": 14,
      "title": "Joowish Cap MK2",
      "price": 19.99,
      "inventory": 5
    },
    { "id": 15,
      "title": "Joowish Masks",
      "price": 19.99,
      "inventory": 5
    }
]

export default {
    getProducts(callback) {
        setTimeout(() => callback(_products),1500)
    },

    buyProducts(products, callback, errorCallback) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.webdriver) ?
            callback(): errorCallback()
        }, 100)
    }
}
