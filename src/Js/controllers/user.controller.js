export default class UserRequests {
  static base_url = "https://blog-m2.herokuapp.com/users"
  static token = JSON.parse(localStorage.getItem("@kenzie-blog:token"))
  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`
  }

    static async createUser(createUserData) {
        return await fetch(`${this.base_url}/register`, {
          method: "POST",
          headers: this.headers,
          body: JSON.stringify(createUserData)
        })
        .then(res => res.json()).then(message => console.log(message))
        .catch(err => console.log(err))
    }

    static async login(loginData) {
        return await fetch(`${this.base_url}/login`, {
          method: "POST",
          headers: this.headers,
          body: JSON.stringify(loginData)
        })
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          localStorage.setItem("@kenzie-blog:user", JSON.stringify(res.userId))
          localStorage.setItem("@kenzie-blog:token", JSON.stringify(res.token))

          return res
        })
        .catch(err => console.log(err))
      }
}