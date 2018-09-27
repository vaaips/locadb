export default {
  /**
   * Set data
   * @param {String} key 
   * @param {Any} value 
   * @returns {undefined} nothing
   */
  set(key, value) {
    localStorage.setItem(key, value)
  },

  /**
   * Get data
   * @param {String} key 
   * @returns {Any} value
   */
  get(key) {
    return localStorage.getItem(key)
  },

  /**
   * Remove a data
   * @param {String} key 
   * @returns {undefined} nothing
   */
  remove(key) {
    localStorage.removeItem(key)
  },

  /**
   * Remove all data
   * @returns {undefined} nothing
   */
  clear() {
    localStorage.clear()
  },

  /**
   * Get database size
   * @returns {number} size
   */
  size() {
    const keys = this.keys()
    return keys.length
  },

  /**
   * Get keys of all data
   * @returns {Array} keys
   */
  keys() {
    return Object.keys(localStorage)
  },

  /**
   * Get values of all data
   * @returns {Array} values
   */
  values() {
    const keys = this.keys()
    return keys.map(key => localStorage.getItem(key))
  }
}
