function unique() {
    let arr = [2, 1, 1, 3, 2, 2, 3];
    return arr.filter((v, i, a) => a.indexOf(v) === i);
}

