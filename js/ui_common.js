$(function () {
  // 데스크탑header menu 이동
  $('#header .menu>li').on('click', function (e) {
    e.preventDefault();

    var idx = $(this).index();

    $('html, body').animate({
      scrollTop: $('#container>section').eq(idx).offset().top,
    });
  });

  // 모바일 header
  $('#header .m_mymenu .logo a').on('click', function (e) {
    e.preventDefault();

    $('#header .m_mymenu .m_menu').addClass('on');
  });

  $('#header .m_mymenu .m_menu .btn_close').on('click', function (e) {
    $('#header .m_mymenu .m_menu').removeClass('on');
  });

  // 모바일 header menu 이동
  $('#header .m_mymenu .m_menu>li').on('click', function (e) {
    e.preventDefault();

    var idx = $(this).index();

    $('html, body').animate({
      scrollTop: $('#container>section').eq(idx).offset().top,
    });
  });

  // skill 애니메이션 효과
  // draw(91, '.circle01', '#A8A2E0');
  // draw(90, '.circle02', '#A8A2E0');
  // draw(64, '.circle03', '#A8A2E0');
  // draw(78, '.circle04', '#A8A2E0');
  // draw(40, '.circle05', '#A8A2E0');

  // function draw(max, classname, colorname) {
  //   var i = 1;

  //   var func1 = setInterval(function () {
  //     if (i < max) {
  //       color1(i, classname, colorname);
  //       i++;
  //     } else {
  //       setInterval(func1);
  //     }
  //   }, 50);
  // }

  // function color1(i, classname, colorname) {
  //   $(classname).css({
  //     background: 'conic-gradient(' + colorname + ' 0% ' + i + '%, #ddd ' + i + '% 100%)',
  //   });
  // }

  $(window).scroll(function () {
    var skill = $('#skill').offset().top - 1000;

    if ($(this).scrollTop() > skill) {
      $('.circle01').easyPieChart({
        barColor: '#A8A2E0',
        trackColor: '#ddd',
        scaleColor: false,
        lineCap: 'square',
        lineWidth: 20,
        animate: 3000,
      });
      $('.circle02').easyPieChart({
        barColor: '#A8A2E0',
        trackColor: '#ddd',
        scaleColor: false,
        lineCap: 'square',
        lineWidth: 20,
        animate: 3000,
      });
      $('.circle03').easyPieChart({
        barColor: '#A8A2E0',
        trackColor: '#ddd',
        scaleColor: false,
        lineCap: 'square',
        lineWidth: 20,
        animate: 3000,
      });
      $('.circle04').easyPieChart({
        barColor: '#A8A2E0',
        trackColor: '#ddd',
        scaleColor: false,
        lineCap: 'square',
        lineWidth: 20,
        animate: 3000,
      });
    }
  });

  // 프로젝트 tap
  $('.main_project .type_list .btn_type').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');

    var filter = $(this).data('filter');

    if (filter === '*') {
      $('.main_project .project_wrap .project').show();
    } else {
      $('.main_project .project_wrap .project').hide();
      $('.main_project .project_wrap .project[data-filter=' + filter + ']').show();
    }
  });
});
