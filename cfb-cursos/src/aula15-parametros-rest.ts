function fsoma(...n: number[]): number {
    let s: number = 0;
    for (let num of n) {
        s += num
    }
    //n.forEach((item: number): number => s += item, n);
    return s;
}

console.log(fsoma(10, 20, 30, 40, 100));