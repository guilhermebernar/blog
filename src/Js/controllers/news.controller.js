export{API_request_news, API_request_comments}

class API_request_news {

    static async requisicao(){
    
        const response = await fetch('https://kenzie-news-api.herokuapp.com/api/news')
        .then(response  =>  response.json())
        .then(response => response)
        .catch((err)    =>  {err.message})
        
        //console.log(response)
        return response
    }
}

class API_request_comments{
}