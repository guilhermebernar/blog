export{API_request_comments}

class API_request_comments{
    static base_url = "https://blog-m2.herokuapp.com/posts"
    static token = JSON.parse(localStorage.getItem("@kenzie-blog:token"))
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async requisicao(){
        let page = 1
        const response = await fetch(`${this.base_url}?page=${page}`,{
            method: "GET",
            headers: this.headers,  
        })
        .then(response  =>  response.json())
        .then(response  =>  response)
        .catch((err)    =>  {err.message})

        console.log(response)
        return response
    }

    static async post(comment){
        return await fetch(`${this.base_url}`,{
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(comment)
          })
          .then(res => res.json()).then(message => console.log(message))
          .catch(err => console.log(err))
    }

    static async editPost(edition, id){
        let postToEdit = id
        return await fetch(`${this.base_url}/${postToEdit}`,{
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(edition)
          })
          .then(res => res.json()).then(message => console.log(message))
          .catch(err => console.log(err))
    }

    static async deletePost(id){

        return await fetch(`${this.base_url}/${id}`,{
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(id)
          })
          .then(res => res.json()).then(message => console.log(message))
          .catch(err => console.log(err))

    // 1562
    }    
}
    

