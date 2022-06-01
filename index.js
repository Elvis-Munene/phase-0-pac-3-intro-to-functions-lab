function shout(string){
    return string.toUpperCase();
}
console.log(shout("I am your dad"));

function whisper(string){
    return string.toLowerCase();
}
console.log(whisper("I AM NOT YOUR BROTHER!"));


function logShout(string) {
    console.log(string.toUpperCase());
}
console.log(logShout("Hi Kennedy!"));

function logWhisper(string) {
    console.log(string.toLowerCase());
}
console.log(logWhisper("Hi Kennedy!"));

let string;
function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
        // console.log("I can't hear you!");
        return "I can't hear you!";
    }
    if (string === string.toUpperCase()){

        // console.log("YES INDEED!");
        return "YES INDEED!";
    }
    if (string ==="Let's have dinner together!"){

        // console.log("I would love to!");
        return "I would love to!";

    }
}
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));