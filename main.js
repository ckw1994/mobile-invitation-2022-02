
// document.ready() - html이 loading된 후 함수가 실행
$(function(){
    $('.img-list > li > a').on('click', function(e){
        e.preventDefault(); // 기본 이벤트를 제거 <-a태그의 기본적인 하이퍼링크 이벤트를 없앰
        var src = $(this).children().attr('src')
        $('.main-photo > img').attr('src', src);
    })
})


// loding 준비 완료 이벤트 (제이쿼리 x , 자바스크립로 이벤트 핸들러 문법)
window.onload = function () {
    // 로딩중 지연시간
    setTimeout(function(){
        console.log('3초가 경과함')
        $('.splash-screen').removeClass('on');
    }, 3000)

    // console.log('문서 로딩 완료!');
    // $('.splash-screen').removeClass('on'); <- 이 부분을 setTimeout 함수 안에 안 적고 이런식으로 독립
    // 적으로 적으면 아무리 setTimeout 함수가 먼저 적용되어도 3초딜레이가 강제 적용이 되어 있어서 이 독립된 함수코드가 먼저 실행이 되어 짐 / 따라서 이 함수를 setTimeout함수 안에 넣어줘야 함.
}