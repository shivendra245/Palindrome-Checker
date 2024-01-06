function isPalindrome(num){

    // const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    // console.log(cleanStr);
    // const reversedStr = cleanStr.split('').reverse().join('');
    // console.log(reversedStr);
    // return cleanStr === reversedStr;

    //  var i;
    if (num == 0) {  
    return 1;  
    }  
    else {  
    return num * isPalindrome( num - 1 );  
    }   
        
}


function palindromeChecker(){

    const inputText = document.getElementById('inputText').value;
    const result = document.getElementById('result');


    var f = isPalindrome(inputText);
    console.log(f);
    if(isPalindrome(inputText.value)){
        result.textContent = `"${inputText.value.toLowerCase().replace(/[^a-z0-9]/g,'')}" is a Palindrome`;
    }
    else{
        result.textContent = `"${inputText.value.toLowerCase().replace(/[^a-z0-9]/g,'')}" is not a Palindrome`;
    }
    
    result.classList.add('fadeIn');
    inputText.value = '';
}


document.getElementById('checkButton').addEventListener("click",palindromeChecker);
