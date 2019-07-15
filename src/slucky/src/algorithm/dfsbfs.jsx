const deepTraversal2 = (node) => {
    let nodes = []
    console.log(node);
    console.log(node.children);
    if (node !== null) {
        nodes.push(node)
        let children = node.children
        for (let i = 0; i < children.length; i++) {
            nodes = nodes.concat(deepTraversal2(children[i]))
        }
    }
    return nodes
}

const widthTraversal2 = (node) => {
    let nodes = []
    let stack = []
    if (node) {
        stack.push(node)
        while (stack.length) {
            let item = stack.shift()
            let children = item.children
            nodes.push(item)
            // 队列，先进先出
            // nodes = [] stack = [parent]
            // nodes = [parent] stack = [child1,child2,child3]
            // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]
            // nodes = [parent,child1,child2]
            for (let i = 0; i < children.length; i++) {
                stack.push(children[i])
            }
        }
    }
    return nodes
}

node = {
    name: 'p',
    children: [
        {
            name: 1,
            children: [
                {
                    name: 1.1,
                    children: []
                }
            ]
        }, {
            name: 2,
            children: [
                {
                    name: 2.1,
                    children: []
                }
            ]
        }
    ]
}
