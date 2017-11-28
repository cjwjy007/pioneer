export default class storage {

  static setVar(key, value) {
    return localStorage.setItem(key, value);
  }

  static getVar(key) {
    return localStorage.getItem(key);
  }

  static removeVar(key) {
    return localStorage.removeItem(key);
  }

  static setObject(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  static getObject(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static removeObject(key) {
    return localStorage.removeItem(key);
  }
}
