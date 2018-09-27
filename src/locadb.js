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
   * Remove a specific data
   * @param {String} key 
   * @returns {undefined} nothing
   */
  remove(key) {
    localStorage.removeItem(key)
  },

  /**
   * Clear all data
   * @returns {undefined} nothing
   */
  clear() {
    localStorage.clear()
  },

  /**
   * Collect keys
   * @returns {Array} keys
   */
  keys() {
    return Object.keys(localStorage)
  },

  /**
   * Data keys size
   * @returns {number} size
   */
  size() {
    const keys = this.keys()
    return keys.length
  },

  /**
   * Collect values
   * @returns {Array} values
   */
  values() {
    const keys = this.keys()
    return keys.map(key => localStorage.getItem(key))
  }
}
