/**
 * 
 * @authors flyTeng (695508580@qq.com)
 * @date    2016-12-08 16:47:59
 * @version 1.0.0
 */

var unburdenWall = angular.module('unburdenWall', ['ui.router']);

unburdenWall.directive('btmPublish', function() {
    return {
        scope: {
            publishdata: "=",
        },
        controller: function($scope, $element, $attrs, $transclude) {

        },
        restrict: 'AE',
        templateUrl: './tem/public/btmPublish.html',
        replace: true,
    };
});

unburdenWall.controller('dispatcher', function($scope, $http) {

    sessionStorage.setItem("openid", GetQueryString("openid"));
    log(sessionStorage.getItem("openid"));

    get_msg();
    $scope.publishdata = {
        show: false,
        close: function() {
            $scope.publishdata.show = false;
        },
        publish: function() {
            var form = document.forms["msg_board"];
            form.onsubmit = function(e) {
                e.preventDefault();
                log("submit")
                var content = $$("board").value;
                log(content)
                $http({
                    url: "http://charmingkamly.cn/confession/msgPublish.php",
                    method: "POST",
                    data: {
                        content: content,
                        openid: sessionStorage.getItem("openid")
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                }).success(function(data, status, headers, config) {
                    log(data)
                    alert("发表成功-。-")
                    refresh();
                }).error(function(data, header, config, status) {
                    console.log(data);
                    console.log(header);
                    console.log(status);
                    alert('请检查网络连接')
                });
            }
        }
    }

    $scope.open_btm_bool = function() {
        $scope.publishdata.show = true;
    }

    $scope.person_icon = function(obj) {
        // log(obj)
        var path = "./images/head_";
        var radm = Math.floor(Math.random() * 16 + 1);
        log(radm);
        obj.src = path + radm + ".png";
    }

    get_img();

    function get_img() {
        $http({
            url: "http://charmingkamly.cn/confession/msgGetHeadUrl.php",
            method: "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).success(function(data, status, headers, config) {
            log(data[0].data)
            $$("appbar_img").src = data[0].data.url;
        }).error(function(data, header, config, status) {
            console.log(data);
            console.log(header);
            console.log(status);
            alert('请检查网络连接')
        });
    }

    $scope.refresh = refresh;

    function refresh() {
        get_msg();
        $scope.publishdata.show = false;
        pcont(1);
        document.body.scrollTop = 0;
    }

    window.onscroll = function(e) {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = document.body.scrollHeight;
        var screenHeight = window.screen.height;
        var limit = (scrollTop + screenHeight) / scrollHeight
        if (limit >= 1) {
            var page = pcont();
            log(page)

            $http({
                url: "http://charmingkamly.cn/confession/msgGet.php",
                method: "POST",
                data: {
                    page: page,
                    openid: sessionStorage.getItem("openid")
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }).success(function(data, status, headers, config) {
                log(data[0].data.content)

                if (data[0].data.content == "NULL") {
                    $scope.loading = false;
                } else $scope.msgs = $scope.msgs.concat(data[0].data.message);
            }).error(function(data, header, config, status) {
                console.log(data);
                console.log(header);
                console.log(status);
                // alert('请检查网络连接')
            });
        }

    }

    function get_msg() {
        $http({
            url: "http://charmingkamly.cn/confession/msgGet.php",
            method: "POST",
            data: {
                openid: sessionStorage.getItem("openid")
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            // params: {},
        }).success(function(data, status, headers, config) {
            log(data[0].data)
            $scope.msgs = data[0].data.message;
        }).error(function(data, header, config, status) {
            console.log(data);
            console.log(header);
            console.log(status);
            // alert('请检查网络连接')
        });
    }

    var pcont = page_cont();

    function page_cont(reset) {
        var num = 1;
        return function(reset) {
            if (reset) {
                return num = 1;
            } else return num++;
        }
    }

    function GetQueryString(key) { //匹配参数
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var value = window.location.search.substr(1).match(reg);
        if (value != null)
            return unescape(value[2]);
        return null;
    }

});

unburdenWall.config(router);

function router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/index').otherwise('/index');

    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: './index.html'
        });
}

function log(content) {
    var args = Array.prototype.slice.call(arguments);
    args.unshift('[app]:');
    console.log.apply(console, args);
}

var $$ = function(id) {
    return document.getElementById(id);
};
