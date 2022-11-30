// 实现一段字符串运算表达式，并计算结果 '4+2*3-10/5' = 8

function getResult(str) {

    str.push('#')
    let vals = [], exs = ['#'], index = 0
    while (index < str.length&&str[index]!='#') {
        if (/[0-9]/g.test(str[index])) {
            vals.push(str[index])
            index++
        } else {
            let tag = precede(exs[exs.length - 1], str[index])
            console.log(2, index, exs[exs.length - 1], str[index], vals, tag);
            switch (tag) {
                case '<': // 栈顶元素优先级低
                    exs.push(str[index]);
                    index++
                    break;
                case '=':  // 脱括号并接受下一个字符
                    exs.pop();
                    index++
                    break;
                case '>': // 推栈并将运算结果入栈
                    let e = exs.pop()
                    let a = vals.pop()
                    let b = vals.pop()
                    vals.push(eval(`${b}${e}${a}`))
            }
        }
    }
    console.log(vals[0]);
}
function precede(a, b) {
    let lvs = {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1,
        '(': 2,
        ')': -1,
        '#': -2,
    }
    let al = lvs[a], bl = lvs[b];
    if (a === '#' && b === '#') return '=';
    if (a === '(' || b === '(') return '<'; // 只要是（就是 <
    if (al === bl) return '<';
    if (a === '(' && b === ')') return '=';
    if (b === '#') return '>';
    return bl - al > 0 ? '<' : '>';
}

getResult(['4','+','2','*','3','-','10','/','5'])
getResult(['(', '4', '+', '2', ')', '*', '3', '-', '10', '/', '5'])