$("#ch3form").submit(function(){
    if($('input[name="fruit"]:checked').val() && $('input[name="standing"]:checked').val()){
        return true;
    }
    
    if($('input[name="fruit"]:checked').val() && !$('input[name="standing"]:checked').val()){
        alert("You must pick a standing!")
        return false;
    }

    if(!$('input[name="fruit"]:checked').val() && $('input[name="standing"]:checked').val()){
        alert("You must pick a fruit!")
        return false;
    }
    else{
        alert("You must pick a standing and a fruit!")
        return false;
    }
})



// ch3form.onsubmit = function() {
//     var fruit = 
//     document.querySelectorAll('input[name="fruit"]')


//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }

//     alert("You must pick a fruit!")
//     return false;





    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    
    // alert("You must pick a fruit!")
    // return false;
//   }