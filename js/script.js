'use strict'
;(function () {
  // Global variables
  var userAgent = navigator.userAgent.toLowerCase(),
    initialDate = new Date(),
    $document = $(document),
    $window = $(window),
    $html = $('html'),
    $body = $('body'),
    isDesktop = $html.hasClass('desktop'),
    isIE =
      userAgent.indexOf('msie') !== -1
        ? parseInt(userAgent.split('msie')[1], 10)
        : userAgent.indexOf('trident') !== -1
        ? 11
        : userAgent.indexOf('edge') !== -1
        ? 12
        : false,
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ),
    windowReady = false,
    isNoviBuilder = false,
    livedemo = true,
    plugins = {
      dateCountdown: $('.DateCountdown'),
      countDown: $('.countdown'),
    }

  // Initialize scripts that require a finished document
  $(function () {
    isNoviBuilder = window.xMode

    // TimeCircles
    if (plugins.dateCountdown.length) {
      for (var i = 0; i < plugins.dateCountdown.length; i++) {
        var dateCountdownItem = $(plugins.dateCountdown[i]),
          countdownRender = function () {
            dateCountdownItem
              .TimeCircles({
                time: { Seconds: { show: !(window.innerWidth < 768) } },
              })
              .rebuild()
          }

        dateCountdownItem.TimeCircles({
          color: dateCountdownItem.attr('data-color')
            ? dateCountdownItem.attr('data-color')
            : 'rgba(247, 247, 247, 1)',
          animation: 'smooth',
          bg_width: dateCountdownItem.attr('data-bg-width')
            ? dateCountdownItem.attr('data-bg-width')
            : 0.6,
          circle_bg_color: dateCountdownItem.attr('data-bg')
            ? dateCountdownItem.attr('data-bg')
            : 'rgba(0, 0, 0, 1)',
          fg_width: dateCountdownItem.attr('data-width')
            ? dateCountdownItem.attr('data-width')
            : 0.03,
          time: {
            Days: {
              text: 'Days',
              show: true,
              color: dateCountdownItem.attr('data-color')
                ? dateCountdownItem.attr('data-color')
                : '#f9f9f9',
            },
            Hours: {
              text: 'Hours',
              show: true,
              color: dateCountdownItem.attr('data-color')
                ? dateCountdownItem.attr('data-color')
                : '#f9f9f9',
            },
            Minutes: {
              text: 'Minutes',
              show: true,
              color: dateCountdownItem.attr('data-color')
                ? dateCountdownItem.attr('data-color')
                : '#f9f9f9',
            },
            Seconds: {
              text: 'Seconds',
              show: false,
              color: dateCountdownItem.attr('data-color')
                ? dateCountdownItem.attr('data-color')
                : '#f9f9f9',
            },
          },
        })

        countdownRender()
        window.addEventListener('resize', countdownRender)
      }
    }

    // jQuery Countdown
    if (plugins.countDown.length) {
      for (var i = 0; i < plugins.countDown.length; i++) {
        var $countDownItem = $(plugins.countDown[i]),
          settings = {
            format: $countDownItem.attr('data-format'),
            layout: $countDownItem.attr('data-layout'),
          }

        if (livedemo) {
          var d = new Date(2021, 2, 31)
          //d.setDate(d.getDate() + 3)
          settings[$countDownItem.attr('data-type')] = d
        } else {
          settings[$countDownItem.attr('data-type')] = new Date(
            $countDownItem.attr('data-time')
          )
          settings[$countDownItem.attr('data-type')] = new Date(
            $countDownItem.attr('data-time')
          )
        }

        $countDownItem.countdown(settings)
      }
    }
  })
})()
