
var result = document.getElementById("res");
var upper = document.getElementById("up");
var lower = document.getElementById("low");
var consonant = document.getElementById("con");
var vowel = document.getElementById("vowel");
var space = document.getElementById("space");
var special = document.getElementById("special");
var length = document.getElementById("len")
var palindrome = document.getElementById("pal");

//  upper function declaration
function countOfUpper(val){
    var count=0;
    for(var i=0;i<val.length;i++){
        if(val[i] >= "A" && val[i] <= "Z"){
            count++;
        }
    }
    result.innerHTML = "Total upper Alphabate is : "+count;
}
// function calling on clicking upper btn
upper.onclick = function(){
    var value = document.querySelector("input").value;
    countOfUpper(value);
}

// lower function declaration 
function countOfLower(val){
    var count=0;
    for(var i=0;i<val.length;i++){
        if(val[i] >= "a" && val[i] <= "z"){
            count++;
        }
    }
    result.innerHTML = "Total lower Alphabate is : "+count;
}
// function calling on clicking lower btn
lower.onclick = function(){
    var value = document.querySelector("input").value;
    countOfLower(value);
}


// vowel function declaration
function countOfVowel(){
    var value = document.querySelector("input").value;
    var count=0;
    for(var i=0;i<value.length;i++){
        var letter = value[i];
        if((letter >= "A" || letter >= "a") && (letter <= "Z" || letter <= "z")){
            if(letter == "A" || letter =="a" || letter == "E" || letter == "e" || letter == "I" || letter == "i" ||
                letter == "O" || letter == "o" || letter == "U" || letter == "u"){
                count++;
            }
        }
    }
    return count;
    
}
// function calling on click vowel btn
vowel.onclick = function(){
    result.innerHTML = "Total vowel Alphabate is : "+countOfVowel();
}

// consonant function declaration
function countOfConsonent(){
    var value = document.querySelector("input").value;
    var count=0;
    for(var i=0;i<value.length;i++){
        var letter = value[i];
        if((letter >= "A" || letter >= "a") && (letter <= "Z" || letter <= "z")){
            if(letter != "A" && letter !="a" && letter != "E" && letter != "e" && letter != "I" && letter != "i" &&
                letter != "O" && letter != "o" && letter != "U" && letter != "u"){
                count++; 
            }
        }
    }
    return count;
    
}
// function calling on click consonent btn
consonant.onclick = function(){
    result.innerHTML = "Total consonant Alphabate is : "+countOfConsonent();
}

// space function declaration
function countOfSpace(val){
    
    var count=0;
    for(var i=0;i<val.length;i++){
        var letter = val[i];
        if(letter == " "){
                count++
            
        }
    }
    return count;
    
}
// calling space function on clicking space btn
space.onclick = function(){
    var value = document.querySelector("input").value;
    result.innerHTML = "Total space is : "+countOfSpace(value);
}

// special function declaration
function countOfSpecial(val){
    
    var count=0;
    for(var i=0;i<val.length;i++){
        var letter = val[i];
        if((letter >= "A" || letter >= "a") && (letter <= "Z" || letter <= "z")){
            
        }else if(letter == " "){

        }else if(letter >= 0 && letter <=9){

        }
        else{
            count++;
        }
        
    }
    return count;
}
// calling special function on clicking btn
special.onclick = function(){
    var value = document.querySelector("input").value;
    result.innerHTML = "Total Special character is : "+countOfSpecial(value);
}

// length declaration
function totalLength(){
    var value = document.querySelector("input").value;
    result.innerHTML = "Length is : "+value.length;
}
length.onclick = function(){
    totalLength();
}

// calling palindrome on clicking btn 
function checkPalindrome(){
    var value = document.querySelector("input").value;
    var rev = "";
    for(var i=value.length-1;i >=0;i--){
        rev += value[i];
    }
    if(rev == value){
        result.innerHTML = "Yes it is Palindrome";
    }else{
        result.innerHTML = "No it is not Palindrome";
    }
}
palindrome.onclick = function(){
    checkPalindrome();
}