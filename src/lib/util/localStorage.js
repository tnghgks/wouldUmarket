export class LocalStorage {
  static getStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  static setStorage(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));
  }
}
