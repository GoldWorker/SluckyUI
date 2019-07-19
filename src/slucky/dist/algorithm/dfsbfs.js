'use strict';

var deepTraversal2 = function deepTraversal2(node) {
    var nodes = [];
    console.log(node);
    console.log(node.children);
    if (node !== null) {
        nodes.push(node);
        var children = node.children;
        for (var i = 0; i < children.length; i++) {
            nodes = nodes.concat(deepTraversal2(children[i]));
        }
    }
    return nodes;
};

var widthTraversal2 = function widthTraversal2(node) {
    var nodes = [];
    var stack = [];
    if (node) {
        stack.push(node);
        while (stack.length) {
            var item = stack.shift();
            var children = item.children;
            nodes.push(item);
            // 队列，先进先出
            // nodes = [] stack = [parent]
            // nodes = [parent] stack = [child1,child2,child3]
            // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]
            // nodes = [parent,child1,child2]
            for (var i = 0; i < children.length; i++) {
                stack.push(children[i]);
            }
        }
    }
    return nodes;
};

node = {
    name: 'p',
    children: [{
        name: 1,
        children: [{
            name: 1.1,
            children: []
        }]
    }, {
        name: 2,
        children: [{
            name: 2.1,
            children: []
        }]
    }]
};