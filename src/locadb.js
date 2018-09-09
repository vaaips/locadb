export default {
  store(key, value) {
    return new Promise((resolve, reject) => {
      localStorage.setItem(key, value)
      var response = localStorage.getItem(key)
      resolve(response)
    })
  },

  collect(key) {
    return new Promise((resolve, reject) => {
      var response = localStorage.getItem(key)
      resolve(response)
    })
  },

  remove(key) {
    return new Promise((resolve, reject) => {
      localStorage.removeItem(key)
      resolve()
    })
  },

  clear() {
    return new Promise((resolve, reject) => {
      localStoage.clear()
      resolve()
    })
  },

  keys() {
    return new Promise((resolve, reject) => {
      var keys = Object.keys(localStorage)
      resolve(keys)
    })
  },

  size() {
    return new Promise((resolve, reject) => {
      var keys = Object.keys(localStorage)
      resolve(keys.length)
    })
  },

  values() {
    return new Promise((resolve, reject) => {
      var keys = Object.keys(localStorage)
      var values = keys.map(key => localStorage.getItem(key))
      resolve(values)
    })
  }
}
