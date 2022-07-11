import {main, News} from "../Js/models/news.js"
import {unloggedNav} from "../Js/models/nav.js"
import {API_request_news} from "../Js/controllers/news.controller.js"

unloggedNav()

main()

News.featured(await API_request_news.requisicao())
News.listCard(await API_request_news.requisicao())
