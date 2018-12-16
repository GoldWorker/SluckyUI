import todoList from '../../components/todoList/highorder-todoList'
import about from '../../components/about/display-about'
import nav from '../../components/nav/highorder-navNormalize'
import article from '../../components/article/highorder-article'
import articleDetailHot from "../../components/articleDetail/highorder-articleDetailHot";
import weiboHotList from '../../components/spider/highorder-weiboHotList'

export default {
    onLoadCom : (name, cb) => {
        switch (name) {
            case 'todoList':
                return todoList
                break;
            case 'nav':
                return nav
                break;
            case 'about':
                return about;
                break;
            case 'article':
                return article
            case 'articleDetail':
                return articleDetailHot(41)
            case 'weiboHotList':
                return weiboHotList
            default:
                break;
        }
    }
}