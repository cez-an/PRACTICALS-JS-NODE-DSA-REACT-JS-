// String (Immutable)

let srt = "cezanne";

for(let i of srt){
    srt[i] = "C";
}

srt[0] = "C";

console.log(srt);
