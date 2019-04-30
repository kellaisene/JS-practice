function remove(string,n) {
    for (var i = 0; i <= n; i++){
        string = string.replace('!', '')
    }
    return string;
}

console.log('REMOVE !', remove("!!Hey!!", 3))