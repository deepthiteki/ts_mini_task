const rev = (str:string):string => {
    return str.split('').reverse().join('');
}

console.log(rev("hi"));