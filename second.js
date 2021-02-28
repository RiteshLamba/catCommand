
// function sq(x) {

//     return x*x;
// }
// console.log (sq(4))
// function ap(a,n,d){
    //     return a+(n-1)*d }

    
//     console.log(ap(5,3,2))

// let arr = []
// arr[2] = 3;
// arr[0]=1;
// console.log(arr[2 * arr[2] - 6 * arr[0]]);
// arr[1] += arr[0] + arr[2]
// console.log(arr[1]);

let cmd = process.argv.slice(2);

let options = []
let files = []

for (let i=0;i<cmd.length;i++){
    if (cmd[i].startsWith("-")){
        options.push(cmd[i])

    }
    else {
        files.push(cmd[i])
    }
}
console.log(options);
console.log(files);




