
var result = document.getElementById("res");
var upper = document.getElementById("up");
var lower = document.getElementById("low");
var consonant = document.getElementById("con");
var vowel = document.getElementById("vowel");
var space = document.getElementById("space");
var special = document.getElementById("special");
var length = document.getElementById("len")
var palindrome = document.getElementById("pal");

// upper
upper.onclick = function(){
    var value = document.querySelector("input").value;
    var count=0;
    for(var i=0;i<value.length;i++){
        if(value[i] >= "A" && value[i] <= "Z"){
            count++;
        }
    }
    result.innerHTML = "Total upper Alphabate is : "+count;
}

// lower
lower.onclick = function(){
    var value = document.querySelector("input").value;
    var count=0;
    for(var i=0;i<value.length;i++){
        if(value[i] >= "a" && value[i] <= "z"){
            count++;
        }
    }
    result.innerHTML = "Total lower Alphabate is : "+count;
}

// vowel
vowel.onclick = function(){
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
    result.innerHTML = "Total vowel Alphabate is : "+count;
}

// consonant
consonant.onclick = function(){
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
    result.innerHTML = "Total consonant Alphabate is : "+count;
}

// space
space.onclick = function(){
    var value = document.querySelector("input").value;
    var count=0;
    for(var i=0;i<value.length;i++){
        var letter = value[i];
        if(letter == " "){
                count++
            
        }
    }
    result.innerHTML = "Total space is : "+count;
}

// special
special.onclick = function(){
    var value = document.querySelector("input").value;
    var count=0;
    for(var i=0;i<value.length;i++){
        var letter = value[i];
        if((letter >= "A" || letter >= "a") && (letter <= "Z" || letter <= "z")){
            
        }else if(letter == " "){

        }else if(letter >= 0 && letter <=9){

        }
        else{
            count++;
        }
        
    }
    result.innerHTML = "Total Special character is : "+count;
}

// length
length.onclick = function(){
    var value = document.querySelector("input").value;
    result.innerHTML = "Length is : "+value.length;
}

// palindrome
palindrome.onclick = function(){
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