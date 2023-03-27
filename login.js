var idPass = false;

$('#id').on('keyup', function(){
    // 아이디 입력란에 입력된 값 : $(this).val() == this.value
    let idValue = $(this).val();
    if(idValue.length == 0){                             // 입력된 글자가 없다면
        $('#msg_id').text('');                          // 아무 텍스트도 뜨지 않는다.
        idPass = false;                                 // 입력된 글자의 길이가 4 미만이면
    } else if(idValue.length < 4) {                    
        $('#msg_id').text('아이디는 4자 이상입니다.').css('color', '#FF0000').css('font-size', '14px');  // text가 뜬다.
        idPass = false;   
    } else {                                            // 모두 아니라면
        $('#msg_id').text('정상적인 아이디입니다.').css('color', '#0000FF').css('font-size', '14px');;    // 정상적인 아이디다.
        idPass = true;   
    }
    // idPass = idValue.length >= 4; // 입력된 아이디의 길이가 4이상이다..
})

$('#frm_login').on('submit', function(event){
    if(idPass == false){
        alert('아이디를 확인하세요.');
        event.preventDefault();
        return;
    }
    if($('#pw').val() == ''){ // if($('#pw').val().length() == 0 : 왜 이건 서브밋이되지?
        alert('비밀번호를 입력하세요.');
        event.preventDefault();
        return;
    }
})