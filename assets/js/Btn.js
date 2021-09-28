//BASIC_MENU_MACHINE
function sideMenu_btn(click_Selector, action_Selector, time = 400) {
  $(click_Selector).click(function () {
    $(action_Selector).toggle(time)
  })
}

//SLIDE_MENU_MACHINE
function sideMenu_btn_silde(click_Selector, action_Selector, time = 400) {
  $(click_Selector).click(function () {
    $(action_Selector).slideToggle(time)
  })
}

//FADE_MENU_MACHINE
function sideMenu_btn_fade(click_Selector, action_Selector, time = 400) {
  $(click_Selector).click(function () {
    $(action_Selector).fadeToggle(time)
  })
}



//Menu btn function(사이드 메뉴바 컨트롤)
sideMenu_btn('.nav_hamMenu', '#side_Bar', 400);
sideMenu_btn('#side_close_btn', '#side_Bar', 200);

// //사이드 알람 버튼 컨트롤
sideMenu_btn_silde('.sideAlarm_btn', '.sideAlarm_modal');
sideMenu_btn_silde('.sideAlarm_close_btn', '.sideAlarm_modal');


//네비 프로필 알람 버튼 컨트롤 
sideMenu_btn_silde('.nav_profile', '.nav_loginfor');

//모델창 컨트롤(modla_window)
sideMenu_btn_fade('.modal_close_btn','#modal_Window');
sideMenu_btn_fade('#side_bar_settingM','#modal_Window');
sideMenu_btn_fade('#nav_settingM','#modal_Window');





// 사이드 jSON 버튼 구성

$('.sideAlarm_btn').click(function () {

  $.ajax({
    url: "./assets/JSON/ex.json",
    type: 'GET'
  }).done(function (데이터) {
    //내용초기화
    $('.side_content').remove()

    //jSON 불러오기

    for (let i = 0; i <= 데이터.note.length; i++) {

      $('.side_content_wrap').append(
        `
          <div class='side_content'>
              <a href="${데이터.note[i].link}">
                  <h1><em>${데이터.note[i].no}.</em>${데이터.note[i].title}</h1>
                  <p>${데이터.note[i].content}</p>
                  <span>${데이터.note[i].date}</span>
                  <hr>
              </a>
          </div>
        `
      )
    }

  }).fail(function () {
    //데이터 요청을 실패 헀을떄실행
    console.log('Json 불러오는것을 실패하였습니다.')
  }).always(function () {
    //실패 or 성공하든 계속 실행해주는거 ex)로딩창
    console.log('불러오는 중입니담.')
  });

})



//theme_change_MACHINE
function changeTheme(click_Selector, bgcColor) {
  $(click_Selector).click(function () {
    $(':root').css('--main-back', bgcColor);
    $(':root').css('--sidebar-back', bgcColor);

  })
}

//테마색 컨트롤러
changeTheme('.theme_change_Black', 'rgba(36, 33, 33, 0.7)')
changeTheme('.theme_change_White', 'rgba(252, 252, 252, 0.5)')
changeTheme('.theme_change_Red', 'rgba(158, 4, 4, 0.7)')
changeTheme('.theme_change_Indigo', 'rgba(5, 0, 12, 0.7)')


//themefont_change_MACHINE
function changeFontColor(click_Selector, fontColor) {
  $(click_Selector).click(function () {
    $(':root').css('--main-text', fontColor);
    $(':root').css('--sidebar-text', fontColor);

  })
}

//글자색 컨트롤러
changeFontColor('.theme_change_Font_Black', '#000')
changeFontColor('.theme_change_Font_White', '#fff')