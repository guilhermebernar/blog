import {main, News} from "../Js/models/news.js"
import {loggedNav} from "../Js/models/nav.js"
import {API_request_news} from "../Js/controllers/news.controller.js"
import {API_request_comments} from "../Js/controllers/comments.controller.js"
import {commentsSection, Comments} from "../Js/models/comments.js"

loggedNav()

main()
commentsSection()

News.featured(await API_request_news.requisicao())
News.listCard(await API_request_news.requisicao())
Comments.createCard(await API_request_comments.requisicao())