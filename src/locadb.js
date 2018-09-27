export default {
  store(key, value) {
    localStorage.setItem(key, value)
  },

  collect(key) {
    return localStorage.getItem(key)
  },

  remove(key) {
    localStorage.removeItem(key)
  },

  clear() {
    localStorage.clear()
  },

  keys() {
    return Object.keys(localStorage)
  },

  size() {
    const keys = this.keys()
    return keys.length
  },

  values() {
    const keys = this.keys()
    return keys.map(key => localStorage.getItem(key))
  }
}
