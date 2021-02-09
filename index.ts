 const isLeap = (year:number): boolean => {
    if(year%4===0)
    return true;
    else
    return false;
}

isLeap(2020);