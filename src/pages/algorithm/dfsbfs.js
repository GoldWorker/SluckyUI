let tree = [{
    id: 1,
    ch: [{
        id: 11
    }, {
        id: 12,
        ch: [{
            id: 121
        }]
    }, {
        id: 13
    }]
}, {
    id: 2,
    ch: [{
        id: 21
    }, {
        id: 22
    }]
}, {
    id: 3
}];

function dfs(node) {
    console.log(node);
    for (let i = 0; i < node.length; i++) {
        console.log(node[i].id);
        if (node[i].ch) {
            const children = node[i].ch;
            dfs(children);
        }
    }
}

function dfsQueue(node) {
    const que = node;
    while (que.length) {
        const item = que.shift();
        console.log(item.id);
        if (item.ch) {
            que.unshift(...item.ch);
        }
    }
}

function bfs(node) {
    const que = node;
    while (que.length) {
        const item = que.shift();
        console.log(item.id);
        if (item.ch) {
            que.push(...item.ch);
        }
    }
}
dfs(tree);
dfsQueue(tree);
bfs(tree);

function convert(str) {
    str = str.toString();
    if (str)
        {return convert(str.substr(1)) + str.substr(0, 1);}
    return '';
}
convert(12345);

let arr = [0, 1, 0, 3, 12];
for (let i = 0; i < arr.length; i++) {
    arr[i] ? '' : arr = arr.concat(arr.splice(i, 1));
}
console.log(arr);

let arr1 = [3, 1, 5, 8, 2, 9, 0];

function sort_s(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        for (let k = 0; k < arr1.length - i - 1; k++) {
            const a = arr1[k];
            const b = arr1[k + 1];
            if (b < a) {
                arr1[k] = b;
                arr1[k + 1] = a;
            }
        }
    }
    return arr1;
}
sort_s(arr1);
