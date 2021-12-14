!(function () {
    const viewport = document.querySelector('meta[name="viewport"]');
    function switchViewport() {
      const value =
        window.outerWidth > 360
          ? 'width=device-width,initial-scale=1'
          : 'width=360';
      if (viewport.getAttribute('content') !== value) {
        viewport.setAttribute('content', value);
      }
    }
    addEventListener('resize', switchViewport, false);
    switchViewport();
  })();

  $(function(){
    $(window).on('load scroll',function (){
      $('.p-main__section ').each(function(){
        //ターゲットの位置を取得
        var target = $(this).offset().top;
        //スクロール量を取得
        var scroll = $(window).scrollTop();
        //ウィンドウの高さを取得
        var height = $(window).height();
        //ターゲットまでスクロールするとフェードインする
        if (scroll > target - height){
          //クラスを付与
          $(this).addClass('active');
        }
      });
    });
  });

  $(function(){
    // ハンバーガーメニュークリックイベント
    $('.p-header__hambuger').click(function(){
      if($('.p-header__list').hasClass('open')){
        // ナビゲーション非表示
        $('.p-header__list').removeClass('open');
        // ハンバーガーメニューを元に戻す
        $(this).removeClass('open');
        $('body').css('overflow', 'auto');
      }else{
        // ナビゲーションを表示
        $('.p-header__list').addClass('open');
        // ハンバーガーメニューを✖印に変更
        $(this).addClass('open');
        $('body').css('overflow', 'hidden');
      }
    });
  });