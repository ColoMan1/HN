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