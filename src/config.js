const __PORT__ = "801"
const __PATH__ = "http://www.brandf.cn:" + __PORT__

const __API__ = {
	weiboHostList: __PATH__ + "/crawler/weibo",
	articleAll: __PATH__ + "/article/all",
	articleOnce: __PATH__ + "/article/once/",
	articleEdit: __PATH__ + "/article",
	articlePage: __PATH__ + "/article/page/",
	login: __PATH__ + "/users/login",
	logout: __PATH__ + "/users/logout",
	getArtComment: __PATH__ + "/comment/normal/",
	postArtComment: __PATH__ + "/comment/normal",
	postCommentReply: __PATH__ + "/comment/reply",
	postVerifyEmail: __PATH__ + "/users/emailVerify",
	postRegister: __PATH__ + "/users/register",
	keepOnline: __PATH__ + "/users/keepOnline",
	comConf: __PATH__ + "/component/conf",
	comConfUpdate: __PATH__ + "/component/conf",
	comConfInit: __PATH__ + "/component/conf"
}

export default __API__