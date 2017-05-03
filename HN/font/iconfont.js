;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M784.535 911.467c0 26.133-22.4 48.533-48.533 48.533l-448 0c-26.133 0-48.533-22.4-48.533-48.533L239.469 112.534c0-26.133 22.4-48.532 48.533-48.532l448 0c26.133 0 48.533 22.399 48.533 48.532L784.535 911.467zM713.6 213.334c0-26.133-14.933-48.533-41.067-48.533L355.2 164.801c-29.867 0-52.267 22.4-52.267 48.533l0 496.533c0 26.133 22.399 48.533 48.532 48.533l313.601 0c26.133 0 48.532-22.4 48.532-48.533L713.598 213.334 713.6 213.334zM545.6 859.2c0-18.667-14.933-33.601-33.601-33.601-18.667 0-33.6 14.934-33.6 33.601s14.933 33.6 33.6 33.6C530.668 892.8 545.6 877.867 545.6 859.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-suo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M760.32 437.248l-27.136 0 0-122.88c0-121.856-99.328-221.184-221.184-221.184-121.856 0-221.696 99.328-221.696 221.184l0 122.88-27.136 0c-39.936 0-72.704 32.256-72.704 72.704l0 348.16c0 39.936 32.256 72.704 72.704 72.704l497.152 0c39.936 0 72.704-32.256 72.704-72.704l0-348.16C833.536 470.016 800.768 437.248 760.32 437.248zM512 144.384c93.696 0 169.984 76.288 169.984 169.984l0 122.88-8.192 0L350.208 437.248l-8.192 0 0-122.88C341.504 220.672 418.304 144.384 512 144.384zM494.592 756.224c-4.096-4.608-6.656-10.24-6.656-16.896l0-19.968c-23.552-9.728-40.448-33.28-40.448-59.904 0-35.84 29.184-64.512 64.512-64.512 35.328 0 64.512 29.184 64.512 64.512 0.512 27.136-15.872 50.688-39.424 59.904l0 19.968c0 6.656-2.56 12.288-6.656 16.896L494.592 756.224z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.588549 948.503539c-2.495844-213.985606-49.936319-244.803495-364.526227-379.258767 69.298296-73.806983 115.335818-196.209754 115.335818-306.675658 0-172.213223-111.682615-249.430886-249.430886-249.430886-137.746224 0-249.430886 77.217662-249.430886 249.430886 0 110.465904 46.039569 232.868675 115.335818 306.675658C63.286372 703.700043 15.84999 734.517933 13.349029 948.503539l-0.210801 0 0 62.359256 997.72252 0 0-62.359256L1010.588549 948.503539z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangxiajiantou" viewBox="0 0 1075 1024">' +
    '' +
    '<path d="M530.794 689.576l17.5 17.923 245.622-251.748c4.298-4.403 6.952-10.43 6.952-17.077 0-13.505-10.947-24.451-24.451-24.451-6.858 0-13.056 2.823-17.496 7.371l-228.127 233.831h35l-228.123-233.825c-4.445-4.552-10.643-7.375-17.501-7.375-13.505 0-24.451 10.947-24.451 24.451 0 6.646 2.652 12.675 6.955 17.081l228.116 233.82z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duigou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1024C229.236364 1024 0 794.763636 0 512S229.236364 0 512 0s512 229.236364 512 512-229.236364 512-512 512z m279.761455-692.200727a34.955636 34.955636 0 0 0-49.384728 0L437.946182 636.253091l-156.322909-156.346182a34.909091 34.909091 0 1 0-49.384728 49.384727l181.015273 181.015273a34.909091 34.909091 0 0 0 49.384727 0l329.12291-329.122909a34.909091 34.909091 0 0 0 0-49.384727z" fill="#24BE74" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-x" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1024C229.236364 1024 0 794.763636 0 512S229.236364 0 512 0s512 229.236364 512 512-229.236364 512-512 512z m217.344-656.709818a34.909091 34.909091 0 1 0-49.361455-49.361455L523.636364 474.274909l-156.346182-156.346182a34.909091 34.909091 0 1 0-49.361455 49.361455l156.346182 156.346182-156.346182 156.346181a34.909091 34.909091 0 1 0 49.361455 49.361455l156.346182-156.346182 156.346181 156.346182a34.909091 34.909091 0 1 0 49.361455-49.361455L572.997818 523.636364l156.346182-156.346182z" fill="#FF5353" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)