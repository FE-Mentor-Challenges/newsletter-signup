const $form = $('.form');
const $success = $('.success');
const $valid_text = $('.valid-text')
const $input = $('input[type="email"]');

function validateBtn($input){
    var $validateRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if ($input.value.match(validRegex)) {
        $success.removeClass('hidden')
        $form.addClass('hidden')
    }

    else{
        $input.addClass('unsuccessfull-input')
        $valid_text.removeClass('hidden')
    }
}
function dismissBtn(){}