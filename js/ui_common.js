$(function () {
  // header fixed 클래스
  $(window).on('scroll', function () {
    var st = $(this).scrollTop();

    if (st > 0) {
      $('#header').addClass('fixed');
    } else {
      $('#header').removeClass('fixed');
    }
  });

  // header menu 이동
  $('#header .menu>li').on('click', function (e) {
    e.preventDefault();

    var idx = $(this).index();

    $('html, body').animate({
      scrollTop: $('#container>section').eq(idx).offset().top,
    });
  });

  // ABOUT 애니메이션
  $('[class*=animate_]').each(function () {
    var _this = $(this);
    $(window).on('scroll', function () {
      var posY = _this.offset().top;
      var st = $(this).scrollTop();
      var tagH = $('.main_about .tag_wrap .tag').outerHeight();

      if (st >= posY - $(this).outerHeight() - 600) {
        _this.addClass('active');
      } else if (st >= $(this).outerHeight() + tagH) {
        $('.main_about .tag_wrap .tag').addClass('active');
      } else {
        _this.removeClass('active');
      }
    });
  });

  // skill 애니메이션 효과
  draw(91, '.circle01', '#78c2c2');
  draw(90, '.circle02', '#78c2c2');
  draw(68, '.circle03', '#78c2c2');
  draw(74, '.circle04', '#78c2c2');
  draw(30, '.circle05', '#78c2c2');

  function draw(max, classname, colorname) {
    var i = 1;

    var func1 = setInterval(function () {
      if (i < max) {
        color1(i, classname, colorname);
        i++;
      } else {
        clearInterval(func1);
      }
    }, 80);
  }
  function color1(i, classname, colorname) {
    $(classname).css({
      background: 'conic-gradient(' + colorname + ' 0% ' + i + '%, #ddd ' + i + '% 100%)',
    });
  }

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
