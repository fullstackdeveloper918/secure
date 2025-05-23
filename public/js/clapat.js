'use strict';
var _ie,
  _firefox,
  _opera,
  _webkit,
  _chrome,
  _ie_real_version,
  _osx,
  _windows,
  _linux,
  _android,
  _win64,
  _iphone,
  _ipad,
  _native,
  _mobile,
  useHasFeature,
  _populated = !1;
function _populate() {
  if (!_populated) {
    _populated = !0;
    var t = navigator.userAgent,
      e =
        /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
          t
        ),
      i = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
    if (
      ((_iphone = /\b(iPhone|iP[ao]d)/.exec(t)),
      (_ipad = /\b(iP[ao]d)/.exec(t)),
      (_android = /Android/i.exec(t)),
      (_native = /FBAN\/\w+;/i.exec(t)),
      (_mobile = /Mobile/i.exec(t)),
      (_win64 = !!/Win64/.exec(t)),
      e)
    ) {
      (_ie = e[1] ? parseFloat(e[1]) : e[5] ? parseFloat(e[5]) : NaN) &&
        document &&
        document.documentMode &&
        (_ie = document.documentMode);
      var s = /(?:Trident\/(\d+.\d+))/.exec(t);
      (_ie_real_version = s ? parseFloat(s[1]) + 4 : _ie),
        (_firefox = e[2] ? parseFloat(e[2]) : NaN),
        (_opera = e[3] ? parseFloat(e[3]) : NaN),
        (_chrome =
          (_webkit = e[4] ? parseFloat(e[4]) : NaN) &&
          (e = /(?:Chrome\/(\d+\.\d+))/.exec(t)) &&
          e[1]
            ? parseFloat(e[1])
            : NaN);
    } else _ie = _firefox = _opera = _chrome = _webkit = NaN;
    if (i) {
      if (i[1]) {
        var n = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
        _osx = !n || parseFloat(n[1].replace('_', '.'));
      } else _osx = !1;
      (_windows = !!i[2]), (_linux = !!i[3]);
    } else _osx = _windows = _linux = !1;
  }
}
var UserAgent_DEPRECATED = {
    ie: function () {
      return _populate() || _ie;
    },
    ieCompatibilityMode: function () {
      return _populate() || _ie_real_version > _ie;
    },
    ie64: function () {
      return UserAgent_DEPRECATED.ie() && _win64;
    },
    firefox: function () {
      return _populate() || _firefox;
    },
    opera: function () {
      return _populate() || _opera;
    },
    webkit: function () {
      return _populate() || _webkit;
    },
    safari: function () {
      return UserAgent_DEPRECATED.webkit();
    },
    chrome: function () {
      return _populate() || _chrome;
    },
    windows: function () {
      return _populate() || _windows;
    },
    osx: function () {
      return _populate() || _osx;
    },
    linux: function () {
      return _populate() || _linux;
    },
    iphone: function () {
      return _populate() || _iphone;
    },
    mobile: function () {
      return _populate() || _iphone || _ipad || _android || _mobile;
    },
    nativeApp: function () {
      return _populate() || _native;
    },
    android: function () {
      return _populate() || _android;
    },
    ipad: function () {
      return _populate() || _ipad;
    },
  },
  canUseDOM = !!('undefined' != typeof window && window.document && window.document.createElement),
  ExecutionEnvironment = {
    canUseDOM: canUseDOM,
    canUseWorkers: 'undefined' != typeof Worker,
    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen,
    isInWorker: !canUseDOM,
  };
function isEventSupported(t, e) {
  if (!ExecutionEnvironment.canUseDOM || (e && !('addEventListener' in document))) return !1;
  var i = 'on' + t,
    s = i in document;
  if (!s) {
    var n = document.createElement('div');
    n.setAttribute(i, 'return;'), (s = 'function' == typeof n[i]);
  }
  return (
    !s &&
      useHasFeature &&
      'wheel' === t &&
      (s = document.implementation.hasFeature('Events.wheel', '3.0')),
    s
  );
}
ExecutionEnvironment.canUseDOM &&
  (useHasFeature =
    document.implementation &&
    document.implementation.hasFeature &&
    !0 !== document.implementation.hasFeature('', ''));
var PIXEL_STEP = 10,
  LINE_HEIGHT = 40,
  PAGE_HEIGHT = 800;
function normalizeWheel(t) {
  var e = 0,
    i = 0,
    s = 0,
    n = 0;
  return (
    'detail' in t && (i = t.detail),
    'wheelDelta' in t && (i = -t.wheelDelta / 120),
    'wheelDeltaY' in t && (i = -t.wheelDeltaY / 120),
    'wheelDeltaX' in t && (e = -t.wheelDeltaX / 120),
    'axis' in t && t.axis === t.HORIZONTAL_AXIS && ((e = i), (i = 0)),
    (s = e * PIXEL_STEP),
    (n = i * PIXEL_STEP),
    'deltaY' in t && (n = t.deltaY),
    'deltaX' in t && (s = t.deltaX),
    (s || n) &&
      t.deltaMode &&
      (1 == t.deltaMode
        ? ((s *= LINE_HEIGHT), (n *= LINE_HEIGHT))
        : ((s *= PAGE_HEIGHT), (n *= PAGE_HEIGHT))),
    s && !e && (e = s < 1 ? -1 : 1),
    n && !i && (i = n < 1 ? -1 : 1),
    { spinX: e, spinY: i, pixelX: s, pixelY: n }
  );
}
normalizeWheel.getEventType = function () {
  return UserAgent_DEPRECATED.firefox()
    ? 'DOMMouseScroll'
    : isEventSupported('wheel')
      ? 'wheel'
      : 'mousewheel';
};
const store = {
  ww: window.innerWidth,
  wh: window.innerHeight,
  isDevice:
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i),
};
class ClapatWebGL {
  constructor(t) {
    (this.scene = new THREE.Scene()),
      (this.vertex =
        'varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}'),
      (this.material = t.material),
      (this.fragment = t.fragment),
      (this.uniforms = t.uniforms),
      (this.renderer = new THREE.WebGLRenderer()),
      (this.width = window.innerWidth),
      (this.height = window.innerHeight),
      this.renderer.setPixelRatio(window.devicePixelRatio),
      this.renderer.setSize(this.width, this.height),
      this.renderer.setClearColor(2303786, 1),
      (this.container = document.getElementById('canvas-slider')),
      (this.images = Array.from(document.querySelectorAll('.slide-img'))),
      (this.width = this.container.offsetWidth),
      (this.height = this.container.offsetHeight),
      this.container.appendChild(this.renderer.domElement),
      (this.camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.001,
        1e3
      )),
      this.camera.position.set(0, 0, 2),
      (this.current = 0),
      (this.textures = []),
      (this.isRunning = !1),
      (this.paused = !0),
      (this.onTexturesLoaded = null),
      this.initiate(() => {
        this.setupResize(),
          this.addObjects(),
          this.resize(),
          this.onTexturesLoaded && this.onTexturesLoaded(),
          this.play();
      });
  }
  initiate(t) {
    let e = [],
      i = this;
    this.images.forEach((t, s) => {
      let n = new Promise((e) => {
        i.textures[s] = new THREE.TextureLoader().load(t.src, e);
      });
      e.push(n);
    }),
      Promise.all(e).then(() => {
        t();
      });
  }
  setupResize() {
    window.addEventListener('resize', this.resize.bind(this));
  }
  resize() {
    (this.width = this.container.offsetWidth),
      (this.height = this.container.offsetHeight),
      this.renderer.setSize(this.width, this.height),
      (this.camera.aspect = this.width / this.height),
      (this.imageAspect = this.textures[0].image.height / this.textures[0].image.width);
    let t, e;
    this.height / this.width > this.imageAspect
      ? ((t = (this.width / this.height) * this.imageAspect), (e = 1))
      : ((t = 1), (e = this.height / this.width / this.imageAspect)),
      (this.material.uniforms.resolution.value.x = this.width),
      (this.material.uniforms.resolution.value.y = this.height),
      (this.material.uniforms.resolution.value.z = t),
      (this.material.uniforms.resolution.value.w = e);
    let i = this.camera.position.z;
    (this.camera.fov = 2 * (180 / Math.PI) * Math.atan(1 / (2 * i))),
      (this.plane.scale.x = this.camera.aspect),
      (this.plane.scale.y = 1),
      this.camera.updateProjectionMatrix();
  }
  addObjects() {
    let t = jQuery('#clapat-webgl-slider').attr('data-pattern-img'),
      e = new THREE.TextureLoader().load(t);
    (e.wrapS = e.wrapT = THREE.RepeatWrapping),
      (this.material = new THREE.ShaderMaterial({
        uniforms: {
          effectFactor: { type: 'f', value: 0.15 },
          dispFactor: { type: 'f', value: 0 },
          currentImage: { type: 't', value: this.textures[0] },
          nextImage: { type: 't', value: this.textures[1] },
          disp: { type: 't', value: e },
          resolution: { type: 'v4', value: new THREE.Vector4() },
        },
        vertexShader: this.vertex,
        fragmentShader: this.fragment,
        transparent: !0,
        opacity: 1,
      })),
      (this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2)),
      (this.plane = new THREE.Mesh(this.geometry, this.material)),
      this.scene.add(this.plane);
  }
  stop() {
    this.paused = !0;
  }
  play() {
    (this.paused = !1), this.render();
  }
  render() {
    this.paused ||
      (requestAnimationFrame(this.render.bind(this)),
      this.renderer.render(this.scene, this.camera));
  }
}
class ClapatSlider {
  constructor(t, e = {}) {
    if ((this.bindAll(), this.isElement(t))) (this.el = t), (this.el.clapat_slider = this);
    else {
      let i = document.querySelectorAll(t);
      for (let s = 0; s < i.length; s++) {
        let n = i[s];
        0 == s ? ((this.el = n), (this.el.clapat_slider = this)) : new ClapatSlider(n, e);
      }
    }
    (this.opts = Object.assign(
      {
        debug: !1,
        direction: 'horizontal',
        eventTarget: '.clapat-slider',
        outer: '.clapat-slider',
        inner: '.clapat-slider-viewport',
        slides: '.clapat-slide',
        clones: 'clapat-slide-clone',
        snap: !1,
        snapwait: { before: 10, after: 80 },
        autoplay: !1,
        speed: 2,
        threshold: 50,
        ease: 0.075,
        click: !1,
        mousewheel: !0,
        navigation: !0,
        pagination: !0,
        renderBullet: null,
        webgl: !1,
        webgl_direction: 'horizontal',
        parallax: null,
        rotate: null,
        opacity: null,
        scale: null,
        on: {
          init: null,
          activeSlideChange: null,
          slideEnterViewport: null,
          slideLeaveViewport: null,
          slideEnter: null,
          slideLeave: null,
        },
      },
      e
    )),
      (this.elEventTarget = this.el.querySelector(this.opts.eventTarget)),
      (this.elInner = this.el.querySelector(this.opts.inner)),
      (this.elOuter = this.el.querySelector(this.opts.outer)),
      (this.btnNext = this.btnPrev = null),
      this.isObject(this.opts.navigation) ||
        !0 != this.opts.navigation ||
        ((this.btnNext = this.el.querySelector('.clapat-button-next')),
        (this.btnPrev = this.el.querySelector('.clapat-button-prev'))),
      this.isObject(this.opts.navigation) &&
        ((this.btnNext = document.querySelector(this.opts.navigation.nextEl)),
        (this.btnPrev = document.querySelector(this.opts.navigation.prevEl))),
      null != this.btnNext &&
        this.btnNext.addEventListener('click', this.debounce(this.onNext, 50)),
      null != this.btnPrev &&
        this.btnPrev.addEventListener('click', this.debounce(this.onPrev, 50)),
      (this.elPagination = null),
      this.isObject(this.opts.pagination) ||
        !0 != this.opts.pagination ||
        (this.elPagination = this.el.querySelector('.clapat-pagination')),
      this.isObject(this.opts.pagination) &&
        (this.elPagination = this.el.querySelector(this.opts.navigation.el)),
      (this.vh = store.wh),
      (this.vw = store.ww),
      (this.vshifth = 0),
      (this.vshiftw = 0),
      (this.state = {
        target: 0,
        current: 0,
        currentRounded: 0,
        prevRounded: 0,
        currentMovingDirection: 0,
        currentSlideItem: null,
        moveOffset: 0,
        y: 0,
        on: { x: 0, y: 0 },
        off: 0,
        progress: 0,
        diff: 0,
        flags: { mousedown: !1, dragging: !1, click: !0, resizing: !1 },
      }),
      (this.items = []),
      (this.itemsInitial = []),
      (this.itemsCloned = []),
      (this.itemsPagination = []),
      (this.tl = null),
      (this.events = {
        move: store.isDevice ? 'touchmove' : 'mousemove',
        up: store.isDevice ? 'touchend' : 'mouseup',
        down: store.isDevice ? 'touchstart' : 'mousedown',
        click: 'click',
        wheel: 'wheel',
        mousewheel: 'mousewheel',
        resize: 'resize',
      }),
      (this.enabled = !0),
      (this.length = 0),
      (this.updater = gsap.set(this.updateUI, {
        delay: 0.2,
        onRepeat: this.updateUI,
        repeat: -1,
        repeatDelay: 0.2,
      })),
      (this.snapWheelEvents = { tsSnap: null, events: [] }),
      (this.gl_canvas = null),
      this.init(),
      ClapatSlider.instances.push(this);
  }
  bindAll() {
    [
      'onDown',
      'onMove',
      'onUp',
      'onClick',
      'onWheel',
      'onResize',
      'onPagination',
      'onPrev',
      'onNext',
      'updateUI',
      'updateWheelSnap',
      'tick',
    ].forEach((t) => (this[t] = this[t].bind(this)));
  }
  init() {
    return gsap.utils.pipe(this.setup(), this.setupEvents());
  }
  on(t, e) {
    this.opts.on[t] = e;
  }
  destroy() {
    this.off(), (this.state = null), (this.items = null), (this.opts = null), (this.ui = null);
  }
  setupEvents() {
    let { move: t, up: e, down: i, resize: s, wheel: n, mousewheel: l } = this.events,
      a = this.elEventTarget;
    null != a &&
      (a.addEventListener(i, this.onDown),
      a.addEventListener(t, this.onMove),
      this.opts.mousewheel &&
        (a.addEventListener(n, this.onWheel), a.addEventListener(l, this.onWheel)),
      window.addEventListener(e, this.onUp)),
      window.addEventListener(s, this.debounce(this.onResize, 250));
  }
  off() {
    let { move: t, up: e, down: i, resize: s, wheel: n, mousewheel: l } = this.events,
      a = this.elEventTarget;
    null != a &&
      (a.removeEventListener(i, this.onDown),
      a.removeEventListener(t, this.onMove),
      this.opts.mousewheel &&
        (a.removeEventListener(n, this.onWheel), a.removeEventListener(l, this.onWheel)),
      window.removeEventListener(e, this.onUp)),
      null != this.btnNext &&
        this.btnNext.removeEventListener('click', this.debounce(this.onNext, 50)),
      null != this.btnPrev &&
        this.btnPrev.removeEventListener('click', this.debounce(this.onPrev, 50)),
      null != this.el &&
        !1 != this.opts.click &&
        this.el.removeEventListener('click', this.onClick),
      window.removeEventListener(s, this.debounce(this.onResize, 250)),
      this.updater.kill(),
      (this.updater = null),
      gsap.ticker.remove(this.tick),
      clearInterval(this.threadAutoplay);
  }
  viewportSize() {
    return 'vertical' == this.opts.direction ? this.vh : this.vw;
  }
  viewportShift() {
    return 'vertical' == this.opts.direction ? this.vshifth : this.vshiftw;
  }
  setup() {
    if (null != this.el) {
      let { top: t, left: e, width: i, height: s } = this.el.getBoundingClientRect();
      (this.vh = s), (this.vw = i), (this.vshifth = t), (this.vshiftw = e);
    }
    let n = this.elInner.querySelectorAll(this.opts.slides),
      l = 1;
    for (let a = n.length - 1; a >= 0; a--) {
      let r = n[a],
        o = r.cloneNode(!0);
      'vertical' == this.opts.direction
        ? ((r.style.top = 100 * a + '%'),
          (o.style.top = -(100 * l) + '%'),
          o.classList.add(this.opts.clones),
          this.elInner.append(o))
        : ((r.style.left = 100 * a + '%'),
          (o.style.left = -(100 * l) + '%'),
          o.classList.add(this.opts.clones),
          this.elInner.prepend(o)),
        l++;
    }
    if (null != this.elPagination)
      for (let h = 0; h < n.length; h++) {
        n[h];
        let d = document.createElement('div');
        d.classList.add('clapat-pagination-bullet'),
          'function' == typeof this.opts.renderBullet && (d.innerHTML = this.opts.renderBullet()),
          this.elPagination.appendChild(d),
          d.addEventListener('click', this.onPagination),
          this.itemsPagination.push({ el: d });
      }
    this.tl = gsap.timeline({ paused: !0, defaults: { duration: 1, ease: 'linear' } });
    let p = this.elInner.querySelectorAll(this.opts.slides);
    for (let u = 0; u < p.length; u++) {
      let c = p[u],
        { left: g, right: m, top: v, bottom: f, width: $, height: w } = c.getBoundingClientRect(),
        x = null;
      'vertical' == this.opts.direction
        ? ((x = { el: c, start: v, end: f, length: w, translate: 0 }), (this.length += w))
        : ((x = { el: c, start: g, end: m, length: $, translate: 0 }), (this.length += $)),
        c.classList.contains(this.opts.clones)
          ? (this.itemsCloned.push(x), (x.clone = !0))
          : (this.itemsInitial.push(x), (x.clone = !1)),
        this.items.push(x);
    }
    'vertical' == this.opts.direction && this.itemsCloned.reverse();
    let E = n.length;
    if ('vertical' == this.opts.direction) {
      for (let b = 0; b < E; b++) {
        let _ = this.items[b];
        0 == b ? (_.prevElement = this.items[E]) : (_.prevElement = this.items[b - 1]),
          b == E - 1
            ? (_.nextElement = this.items[this.items.length - 1])
            : (_.nextElement = this.items[b + 1]);
      }
      for (let y = this.items.length - 1; y >= E; y--) {
        let I = this.items[y];
        y == this.items.length - 1
          ? (I.prevElement = this.items[E - 1])
          : (I.prevElement = this.items[y + 1]),
          y == E ? (I.nextElement = this.items[0]) : (I.nextElement = this.items[y - 1]);
      }
    } else
      for (let L = 0; L < this.items.length; L++) {
        let S = this.items[L];
        0 == L
          ? (S.prevElement = this.items[this.items.length - 1])
          : (S.prevElement = this.items[L - 1]),
          L == this.items.length - 1
            ? (S.nextElement = this.items[0])
            : (S.nextElement = this.items[L + 1]);
      }
    for (let P = 0; P < this.items.length; P++) {
      let T = this.items[P];
      if (Array.isArray(this.opts.parallax))
        for (let A = 0; A < this.opts.parallax.length; A++) {
          let R = this.opts.parallax[A];
          if (void 0 !== R.element && void 0 !== R.margin) {
            let D = T.el.querySelectorAll(R.element);
            T.elParallaxList = D;
          }
        }
      if (Array.isArray(this.opts.rotate))
        for (let M = 0; M < this.opts.rotate.length; M++) {
          let k = this.opts.rotate[M];
          if (void 0 !== k.element && void 0 !== k.factor) {
            let W = T.el.querySelectorAll(k.element);
            T.elRotateList = W;
          }
        }
      if (Array.isArray(this.opts.opacity))
        for (let C = 0; C < this.opts.opacity.length; C++) {
          let U = this.opts.opacity[C];
          if (void 0 !== U.element && void 0 !== U.factor) {
            let z = T.el.querySelectorAll(U.element);
            T.elOpacityList = z;
          }
        }
      if (Array.isArray(this.opts.scale))
        for (let O = 0; O < this.opts.scale.length; O++) {
          let F = this.opts.scale[O];
          if (void 0 !== F.element && void 0 !== F.factor) {
            let H = T.el.querySelectorAll(F.element);
            T.elScaleList = H;
          }
        }
    }
    if (
      (null != this.el && !1 != this.opts.click && this.el.addEventListener('click', this.onClick),
      this.setupWebGL(),
      gsap.ticker.add(this.tick),
      (this.threadAutoplay = null),
      this.opts.autoplay)
    ) {
      let B = 5e3;
      this.isObject(this.opts.autoplay) &&
        this.opts.autoplay.hasOwnProperty('speed') &&
        (B = this.opts.autoplay.speed),
        B >= 500 && (this.threadAutoplay = setInterval(this.onNext, B));
    }
  }
  tick() {
    this.render();
  }
  calc() {
    let t = this.state;
    if (
      ((t.current += (t.target - t.current) * this.opts.ease),
      (t.prevRounded = t.currentRounded),
      (t.currentRounded = Math.round(100 * t.current) / 100),
      t.prevRounded != t.currentRounded)
    ) {
      t.diff = t.target - t.currentRounded;
      let e = Math.round((-this.length / 2) * 100) / 100;
      (t.progress = gsap.utils.wrap(0, 1, t.currentRounded / e)),
        (t.moveOffset = gsap.utils.wrap(0, this.length, Math.abs(t.currentRounded))),
        t.prevRounded > t.currentRounded && (t.currentMovingDirection = 1),
        t.prevRounded < t.currentRounded && (t.currentMovingDirection = -1),
        this.tl && this.tl.progress(t.progress);
    }
  }
  render() {
    this.state.flags.resizing ||
      (this.opts.snap && this.updateWheelSnap(),
      this.calc(),
      this.transformItems(),
      this.effects());
  }
  transformItems() {
    let t = this.viewportSize(),
      e = this.viewportShift();
    for (let i = 0; i < this.items.length; i++) {
      let s = this.items[i],
        n = this.state.moveOffset * Math.sign(this.state.currentRounded);
      n < 0 && s.end + n < t + e + s.length - this.length && (n += this.length),
        n > 0 && s.end + n > this.length && (n -= this.length),
        'vertical' == this.opts.direction
          ? (s.el.style.transform = 'translate(0, ' + n + 'px)')
          : (s.el.style.transform = 'translate(' + n + 'px, 0)');
    }
  }
  updateUI() {
    let t = this.viewportSize(),
      e = this.viewportShift(),
      i = this.elInner.getBoundingClientRect(),
      s = this.elOuter.getBoundingClientRect(),
      n = gsap.utils.wrap(0, this.length, Math.abs(this.state.target)),
      l = Math.sign(this.state.target);
    null != this.el &&
      (this.state.currentMovingDirection >= 0
        ? (this.el.classList.contains('bw') && this.el.classList.remove('bw'),
          this.el.classList.add('fw'))
        : (this.el.classList.contains('fw') && this.el.classList.remove('fw'),
          this.el.classList.add('bw')));
    let a = this.state.currentSlideItem;
    this.state.currentSlideItem = null;
    for (let r = 0; r < this.items.length; r++) {
      let o = this.items[r],
        h = n * l;
      h < 0 && o.end + h < t + e + o.length - this.length && (h += this.length),
        h > 0 && o.end + h > this.length && (h -= this.length);
      let d = o.start + h - (e + (t - o.length) / 2);
      if (
        (Math.abs(d) < o.length / 2
          ? (o.el.classList.add('clapat-slide-active'),
            o.nextElement.el.classList.add('clapat-slide-next'),
            o.nextElement.nextElement.el.classList.add('clapat-slide-next-two'),
            o.nextElement.nextElement.nextElement.el.classList.add('clapat-slide-next-three'),
            o.prevElement.el.classList.add('clapat-slide-prev'),
            o.prevElement.prevElement.el.classList.add('clapat-slide-prev-two'),
            o.prevElement.prevElement.prevElement.el.classList.add('clapat-slide-prev-three'),
            (this.state.currentSlideItem = o),
            null != a &&
              a !== this.state.currentSlideItem &&
              'function' == typeof this.opts.on.activeSlideChanged &&
              this.opts.on.activeSlideChanged(
                this.state.currentSlideItem.el,
                this.state.currentSlideItem.prevElement.el,
                this.state.currentSlideItem.nextElement.el
              ))
          : (o.el.classList.remove('clapat-slide-active'),
            o.nextElement.el.classList.remove('clapat-slide-next'),
            o.nextElement.nextElement.el.classList.remove('clapat-slide-next-two'),
            o.nextElement.nextElement.nextElement.el.classList.remove('clapat-slide-next-three'),
            o.prevElement.el.classList.remove('clapat-slide-prev'),
            o.prevElement.prevElement.el.classList.remove('clapat-slide-prev-two'),
            o.prevElement.prevElement.prevElement.el.classList.remove('clapat-slide-prev-three')),
        o.end + h > e && o.start + h < t + e
          ? o.el.classList.add('clapat-slide-visible')
          : o.el.classList.remove('clapat-slide-visible'),
        o.translate != h)
      ) {
        let p = this.isItemInsideView(i, o);
        o.translate = h;
        let u = this.isItemInsideView(i, o),
          c = this.isItemInsideView(s, o);
        p &&
          !u &&
          'function' == typeof this.opts.on.slideLeaveViewport &&
          this.opts.on.slideLeaveViewport(o.el),
          !p &&
            u &&
            'function' == typeof this.opts.on.slideEnterViewport &&
            this.opts.on.slideEnterViewport(o.el);
        let g = this.isItemInsideView(s, o);
        c && !g && 'function' == typeof this.opts.on.slideLeave && this.opts.on.slideLeave(o.el),
          !c && g && 'function' == typeof this.opts.on.slideEnter && this.opts.on.slideEnter(o.el);
      }
    }
    this.state.flags.dragging
      ? this.el.classList.add('clapat-state-dragging')
      : this.el.classList.remove('clapat-state-dragging'),
      this.updatePaginationUI(),
      null == a && 'function' == typeof this.opts.on.init && this.opts.on.init();
  }
  updatePaginationUI() {
    if (
      this.opts.pagination &&
      !(this.itemsPagination.length <= 0) &&
      null != this.state.currentSlideItem
    ) {
      let t = null;
      t = this.state.currentSlideItem.clone ? this.itemsCloned : this.itemsInitial;
      let e = -1;
      for (let i = 0; i < t.length; i++) {
        let s = t[i];
        if (this.state.currentSlideItem.el === s.el) {
          e = i;
          break;
        }
      }
      let n = this.itemsPagination[e];
      null != n && n.el.classList.add('clapat-pagination-bullet-active');
      let l = e - 1;
      l < 0 && (l = this.itemsPagination.length - 1);
      let a = this.itemsPagination[l];
      null != a && a.el.classList.add('clapat-pagination-bullet-prev');
      let r = e + 1;
      r >= this.itemsPagination.length && (r = 0);
      let o = this.itemsPagination[r];
      null != o && o.el.classList.add('clapat-pagination-bullet-next');
      for (let h = 0; h < this.itemsPagination.length; h++) {
        let d = this.itemsPagination[h];
        h != e && d.el.classList.remove('clapat-pagination-bullet-active'),
          h != r && d.el.classList.remove('clapat-pagination-bullet-next'),
          h != l && d.el.classList.remove('clapat-pagination-bullet-prev');
      }
    }
  }
  effects() {
    if (
      (null == this.opts.parallax || !1 == this.opts.parallax) &&
      (null == this.opts.rotate || !1 == this.opts.rotate) &&
      (null == this.opts.opacity || !1 == this.opts.opacity) &&
      (null == this.opts.scale || !1 == this.opts.scale)
    )
      return;
    let t = this.viewportSize(),
      e = this.viewportShift();
    this.elInner.getBoundingClientRect();
    let i = this.state.moveOffset * Math.sign(this.state.currentRounded);
    for (let s = 0; s < this.items.length; s++) {
      let n = this.items[s],
        l = i;
      if (
        (l < 0 && n.end + l < t + e + n.length - this.length && (l += this.length),
        l > 0 && n.end + l > this.length && (l -= this.length),
        n.end + l > e && n.start + l < t + e)
      ) {
        let a = n.start + l - (e + (t - n.length) / 2);
        if (Array.isArray(this.opts.parallax))
          for (let r = 0; r < this.opts.parallax.length; r++) {
            let o = this.opts.parallax[r];
            if (void 0 !== o.element && void 0 !== o.margin) {
              let h = n.elParallaxList,
                d = -(o.margin * a * 2) / (n.length + t);
              for (let p = 0; p < h.length; p++) {
                let u = h[p],
                  c = u.style.transform,
                  g = '';
                if ('vertical' == this.opts.direction) {
                  let m = /translateY\(([^)]+)\)/;
                  g =
                    c.search(m) >= 0
                      ? c.replace(m, 'translateY(' + d + '%)')
                      : c + ' translateY(' + d + '%)';
                } else {
                  let v = /translateX\(([^)]+)\)/;
                  g =
                    c.search(v) >= 0
                      ? c.replace(v, 'translateX(' + d + '%)')
                      : c + ' translateX(' + d + '%)';
                }
                u.style.transform = g;
              }
            }
          }
        if (Array.isArray(this.opts.rotate))
          for (let f = 0; f < this.opts.rotate.length; f++) {
            let $ = this.opts.rotate[f];
            if (void 0 !== $.element && void 0 !== $.factor) {
              let w = n.elRotateList,
                x = -($.factor * a * 2) / (n.length + t);
              for (let E = 0; E < w.length; E++) {
                let b = w[E],
                  _ = b.style.transform,
                  y = /rotate\(([^)]+)\)/,
                  I = '';
                (I =
                  _.search(y) >= 0
                    ? _.replace(y, 'rotate(' + x + 'deg)')
                    : _ + ' rotate(' + x + 'deg)'),
                  (b.style.transform = I);
              }
            }
          }
        if (Array.isArray(this.opts.opacity))
          for (let L = 0; L < this.opts.opacity.length; L++) {
            let S = this.opts.opacity[L];
            if (void 0 !== S.element && void 0 !== S.factor) {
              let P = n.elOpacityList,
                T = -(S.factor * a * 2) / t;
              T = 1 - Math.abs(T);
              for (let A = 0; A < P.length; A++) P[A].style.opacity = T;
            }
          }
        if (Array.isArray(this.opts.scale))
          for (let R = 0; R < this.opts.scale.length; R++) {
            let D = this.opts.scale[R];
            if (void 0 !== D.element && void 0 !== D.factor) {
              let M = n.elScaleList,
                k = -(D.factor * a * 2) / t;
              k = 1 - Math.abs(k);
              for (let W = 0; W < M.length; W++) {
                let C = M[W],
                  U = C.style.transform,
                  z = /scale\(([^)]+)\)/,
                  O = '';
                (O = U.search(z) >= 0 ? U.replace(z, 'scale(' + k + ')') : U + ' scale(' + k + ')'),
                  (C.style.transform = O);
              }
            }
          }
      }
    }
  }
  snapTargetOnDrag(t) {
    let e = this.viewportSize(),
      i = this.viewportShift(),
      s = gsap.utils.wrap(0, this.length, Math.abs(t)),
      n = Math.sign(t);
    for (let l = 0; l < this.items.length; l++) {
      let a = this.items[l],
        r = s * n;
      r < 0 && a.end + r < e + i + a.length - this.length && (r += this.length),
        r > 0 && a.end + r > this.length && (r -= this.length);
      let o = a.start + r - (i + (e - a.length) / 2);
      if (Math.abs(o) < a.length / 2) return t - o;
    }
    return t;
  }
  snapTargetOnWheel(t, e) {
    let i = this.viewportSize(),
      s = this.viewportShift(),
      n = gsap.utils.wrap(0, this.length, Math.abs(t)),
      l = Math.sign(t),
      a = -1;
    for (let r = 0; r < this.items.length; r++) {
      let o = this.items[r],
        h = n * l;
      h < 0 && o.end + h < i + s + o.length - this.length && (h += this.length),
        h > 0 && o.end + h > this.length && (h -= this.length);
      let d = o.start + h - (s + (i - o.length) / 2);
      if (Math.abs(d) < o.length / 2) {
        a = r;
        break;
      }
    }
    let p = gsap.utils.wrap(0, this.length, Math.abs(e)),
      u = Math.sign(e);
    for (let c = 0; c < this.items.length; c++) {
      let g = this.items[c],
        m = p * u;
      m < 0 && g.end + m < i + s + g.length - this.length && (m += this.length),
        m > 0 && g.end + m > this.length && (m -= this.length);
      let v = g.start + m - (s + (i - g.length) / 2);
      if (Math.abs(v) < g.length / 2) {
        if (!(a == c && Math.abs(e - t) < this.length))
          return this.log('Snapping - start and end items are different'), e - v;
        if (
          (this.log(
            'Snapping - start and end items are the same, the scroll did not go over a full item'
          ),
          this.state.currentMovingDirection > 0)
        ) {
          if (v < 0) return e - (g.length / 2 + v + g.nextElement.length / 2);
          return e - v;
        }
        if (v < 0) return e - v;
        return e - v + g.prevElement.length;
      }
    }
    return e;
  }
  getPos({ changedTouches: t, clientX: e, clientY: i, target: s }) {
    let n = t ? t[0].clientX : e,
      l = t ? t[0].clientY : i;
    return { x: n, y: l, target: s };
  }
  onDown(t) {
    if (!this.enabled) return;
    let { x: e, y: i } = this.getPos(t),
      { flags: s, on: n } = this.state;
    (s.mousedown = !0), (n.x = e), (n.y = i);
  }
  onMove(t) {
    if (!this.enabled) return;
    let e = this.state;
    if (!e.flags.mousedown) return;
    let { x: i, y: s } = this.getPos(t);
    e.flags.dragging = !0;
    let { off: n, on: l } = e,
      a = i - l.x,
      r = s - l.y;
    Math.abs(a) > Math.abs(r) && t.cancelable && t.preventDefault(),
      'vertical' == this.opts.direction
        ? (e.target = n + r * this.opts.speed)
        : (e.target = n + a * this.opts.speed);
  }
  onUp(t) {
    if (!this.enabled) return;
    this.log('on up');
    let e = this.state;
    this.opts.snap && (e.target = this.snapTargetOnDrag(e.target));
    let i = e.flags.dragging;
    if (((e.flags.mousedown = !1), (e.flags.dragging = !1), (e.off = e.target), i)) {
      if (((e.flags.click = !1), t.cancelable))
        return t.preventDefault(), t.stopPropagation(), this.log('ending dragging'), !1;
    } else (e.flags.click = !0), this.log('simple click');
  }
  onClick(t) {
    if (this.enabled) {
      if ((this.log('on click. Drag? ' + !this.state.flags.click), this.state.flags.click)) {
        let e = null;
        null != t.target && null != (e = t.target.querySelector('a')) && e.click();
      }
      this.state.flags.click = !1;
    }
  }
  isItemInsideView(t, e) {
    let i = 0,
      s = 0,
      n = e.start + e.translate,
      l = e.end + e.translate;
    return (
      'vertical' == this.opts.direction
        ? ((i = t.top + 5), (s = t.bottom - 5))
        : ((i = t.left + 5), (s = t.right - 5)),
      l > i && n < s
    );
  }
  distanceToCenter(t) {
    if (null == t) return null;
    let e = this.viewportSize(),
      i = this.viewportShift(),
      s =
        gsap.utils.wrap(0, this.length, Math.abs(this.state.target)) * Math.sign(this.state.target);
    return t.start + s - (i + (e - t.length) / 2);
  }
  goTo(t) {
    if (t < 0 || t >= this.items.length) return;
    let e = this.items[t];
    (this.state.target -= this.distanceToCenter(e)), (this.state.off = this.state.target);
  }
  update() {
    let t = this.viewportSize(),
      e = this.viewportShift(),
      i = gsap.utils.wrap(0, this.length, Math.abs(this.state.target)),
      s = Math.sign(this.state.target),
      n = 0;
    for (let l = 0; l < this.items.length; l++) {
      let a = this.items[l],
        r = i * s;
      r < 0 && a.end + r < t + e + a.length - this.length && (r += this.length),
        r > 0 && a.end + r > this.length && (r -= this.length);
      let o = a.start + r - (e + (t - a.length) / 2);
      if (Math.abs(o) < a.length / 2) {
        n = l;
        break;
      }
    }
    if (null != this.el) {
      let { top: h, left: d, width: p, height: u } = this.el.getBoundingClientRect();
      (this.vh = u), (this.vw = p), (this.vshifth = h), (this.vshiftw = d);
    } else (this.vh = store.wh), (this.vw = store.ww), (this.vshifth = 0), (this.vshiftw = 0);
    this.length = 0;
    for (let c = 0; c < this.items.length; c++) {
      let g = this.items[c];
      if ('vertical' == this.opts.direction) {
        g.el.style.transform = 'translate(0, 0px)';
        let {
          left: m,
          right: v,
          top: f,
          bottom: $,
          width: w,
          height: x,
        } = g.el.getBoundingClientRect();
        (this.length += x), (g.start = f), (g.end = $), (g.length = x);
      } else {
        g.el.style.transform = 'translate(0px, 0)';
        let {
          left: E,
          right: b,
          top: _,
          bottom: y,
          width: I,
          height: L,
        } = g.el.getBoundingClientRect();
        (this.length += I), (g.start = E), (g.end = b), (g.length = I);
      }
    }
    let S = 0;
    if (n < this.items.length / 2) {
      if ('vertical' == this.opts.direction)
        for (let P = 0; P < n; P++) {
          let T = this.items[P];
          S -= T.length;
        }
      else
        for (let A = n; A < this.items.length / 2; A++) {
          let R = this.items[A];
          S += R.length;
        }
    } else if ('vertical' == this.opts.direction)
      for (let D = this.items.length / 2; D <= n; D++) {
        let M = this.items[D];
        S += M.length;
      }
    else
      for (let k = this.items.length / 2; k < n; k++) {
        let W = this.items[k];
        S -= W.length;
      }
    (this.state.currentRounded = this.state.current = this.state.target = S),
      (this.state.off = this.state.target);
  }
  onResize(t) {
    (this.state.flags.resizing = !0),
      this.update(),
      (this.state.flags.resizing = !1),
      this.log('on resize');
  }
  onPagination(t) {
    if (!this.enabled) return;
    let e = -1;
    for (let i = 0; i < this.itemsPagination.length; i++) {
      let s = this.itemsPagination[i];
      if (s.el === t.currentTarget) {
        e = i;
        break;
      }
    }
    if (e >= 0 && null != this.state.currentSlideItem) {
      let n = this.itemsInitial;
      this.state.currentSlideItem.clone && (n = this.itemsCloned);
      let l = n[e];
      (this.state.target -= this.distanceToCenter(l)), (this.state.off = this.state.target);
    }
  }
  onPrev(t) {
    if (!this.enabled) return;
    let e = this.viewportSize(),
      i = this.viewportShift(),
      s = gsap.utils.wrap(0, this.length, Math.abs(this.state.target)),
      n = Math.sign(this.state.target);
    for (let l = 0; l < this.items.length; l++) {
      let a = this.items[l],
        r = s * n;
      r < 0 && a.end + r < e + i + a.length - this.length && (r += this.length),
        r > 0 && a.end + r > this.length && (r -= this.length);
      let o = a.start + r - (i + (e - a.length) / 2);
      Math.abs(o) < a.length / 2 &&
        ((this.state.target = this.state.target - o + a.prevElement.length),
        (this.state.off = this.state.target));
    }
  }
  onNext(t) {
    if (!this.enabled) return;
    let e = this.viewportSize(),
      i = this.viewportShift(),
      s = gsap.utils.wrap(0, this.length, Math.abs(this.state.target)),
      n = Math.sign(this.state.target);
    for (let l = 0; l < this.items.length; l++) {
      let a = this.items[l],
        r = s * n;
      r < 0 && a.end + r < e + i + a.length - this.length && (r += this.length),
        r > 0 && a.end + r > this.length && (r -= this.length);
      let o = a.start + r - (i + (e - a.length) / 2);
      Math.abs(o) < a.length / 2 &&
        ((this.state.target = this.state.target - (a.length / 2 + o + a.nextElement.length / 2)),
        (this.state.off = this.state.target));
    }
  }
  onWheel(t) {
    if (!this.enabled) return;
    let e = performance.now(),
      i = this.state,
      s = normalizeWheel(t),
      n = 0.2 * s.pixelY,
      { x: l, y: a } = this.getPos(t);
    i.flags.dragging = !1;
    let { off: r, on: o } = i;
    if (
      (this.log('Event timestamp: ' + e + ' Scroll delta ' + n),
      this.opts.snap && null != this.snapWheelEvents.tsSnap)
    ) {
      if (e - this.snapWheelEvents.tsSnap <= this.opts.snapwait.after) {
        this.log('Ignoring wheel event as there is a snapping going on');
        return;
      }
      this.log('Resetting the snapping events buffer'),
        (this.snapWheelEvents.tsSnap = null),
        (this.snapWheelEvents.events = []);
    }
    (i.target -= n * this.opts.speed),
      this.opts.snap &&
        this.snapWheelEvents.events.push({ ts: e, delta: n, currentTarget: i.target }),
      'vertical' == this.opts.direction ? (o.y = i.target) : (o.x = i.target),
      (i.off = i.target);
  }
  updateWheelSnap() {
    if (this.opts.snap && this.snapWheelEvents.events.length > 0) {
      let t = performance.now();
      if (
        t - this.snapWheelEvents.events[this.snapWheelEvents.events.length - 1].ts >
        this.opts.snapwait.before
      ) {
        let e = 0,
          i = 0,
          s = 1e4,
          n = 0,
          l = 0,
          a = 1e4,
          r = 0;
        for (let o = 0; o < this.snapWheelEvents.events.length; o++) {
          let h = this.snapWheelEvents.events[o];
          if ((0 == o && (r = h.currentTarget), o > 0)) {
            let d = this.snapWheelEvents.events[o - 1],
              p = h.ts - d.ts;
            (e += p), i < p && (i = p), s > p && (s = p);
          }
          let u = h.delta;
          (n += u), l < u && (l = u), a > u && (a = u);
        }
        this.log(
          '--> Event timestamp: ' +
            t +
            '. Snapping.\nAvg time interval between scroll events: ' +
            e / this.snapWheelEvents.events.length +
            '.\nMin time interval between scroll events: ' +
            s +
            '.\nMax time interval between scroll events: ' +
            i +
            '.\nWheel events count: ' +
            this.snapWheelEvents.events.length
        ),
          this.log(
            'Total delta interval: ' +
              n +
              '.\nAvg delta interval between scroll events: ' +
              n / this.snapWheelEvents.events.length +
              '.\nMin delta interval between scroll events: ' +
              a +
              '.\nMax delta interval between scroll events: ' +
              l +
              '.'
          );
        let c = this.state,
          { off: g, on: m } = c;
        (c.target = this.snapTargetOnWheel(r, c.target)),
          'vertical' == this.opts.direction ? (m.y = c.target) : (m.x = c.target),
          (c.off = c.target),
          (this.snapWheelEvents.tsSnap = t),
          (this.snapWheelEvents.events = []);
      }
    }
  }
  setupWebGL() {
    if (!this.opts.webgl) return;
    let t = '',
      e = `
			varying vec2 vUv;

			uniform sampler2D currentImage;
			uniform sampler2D nextImage;
			uniform sampler2D disp;
			uniform float dispFactor;
			uniform float effectFactor;
			uniform vec4 resolution;

			void main() {

				vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

				vec4 disp = texture2D(disp, uv);
				
				${(t =
          'horizontal' == this.opts.webgl_direction
            ? `
				// Horizontal Effect
				vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
				vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
			`
            : `
				// Vertical Effect			
				vec2 distortedPosition = vec2(uv.x, uv.y - dispFactor * (disp.r*effectFactor));
				vec2 distortedPosition2 = vec2(uv.x, uv.y + (1.0 - dispFactor) * (disp.r*effectFactor));
			`)}
				
				vec4 _currentImage = texture2D(currentImage, distortedPosition);
				vec4 _nextImage = texture2D(nextImage, distortedPosition2);
				vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

				gl_FragColor = finalTexture; }

			`;
    (this.gl_canvas = new ClapatWebGL({
      vertex:
        'varying vec2 vUv; void main() {  vUv = uv;  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );	}',
      fragment: e,
    })),
      (this.gl_canvas.isRunning = !1);
    let i = this,
      s = this.gl_canvas,
      n = function (t) {
        let e = Math.round((-i.length / 2) * 100) / 100,
          n = gsap.utils.wrap(0, 1, i.state.prevRounded / e);
        if (i.state.prevRounded > i.state.currentRounded && n > i.state.progress) {
          console.log(
            'fBeginTransition: Moving forward but we rewind. Current index: ' +
              t +
              ' Position: ' +
              i.state.progress
          );
          return;
        }
        if (i.state.prevRounded < i.state.currentRounded && n < i.state.progress) {
          console.log(
            'fBeginTransition: Moving backward but we fast forward. Current index: ' +
              t +
              ' Position: ' +
              i.state.progress
          );
          return;
        }
        if (i.state.currentMovingDirection >= 0) {
          console.log(
            'fBeginTransition: Transition started - new current index ' +
              t +
              ' Moving forward. Position: ' +
              i.state.progress
          );
          let l = t + 1;
          l >= a && (l = 0),
            (s.material.uniforms.currentImage.value = s.textures[t]),
            (s.material.uniforms.currentImage.needsUpdate = !0),
            (s.material.uniforms.nextImage.value = s.textures[l]),
            (s.material.uniforms.nextImage.needsUpdate = !0),
            (s.material.uniforms.dispFactor.value = 0);
        } else
          console.log(
            'fBeginTransition: Transition started - new current index ' +
              t +
              ' Moving backward. Position: ' +
              i.state.progress
          ),
            (s.material.uniforms.dispFactor.value = 1),
            (s.material.uniforms.currentImage.value = s.textures[t]),
            (s.material.uniforms.currentImage.needsUpdate = !0),
            (s.material.uniforms.nextImage.value = s.textures[t]),
            (s.material.uniforms.nextImage.needsUpdate = !0);
      },
      l = function (t) {
        let e = Math.round((-i.length / 2) * 100) / 100,
          n = gsap.utils.wrap(0, 1, i.state.prevRounded / e);
        if (i.state.prevRounded > i.state.currentRounded && n > i.state.progress) {
          console.log(
            'fEndTransition: Moving forward but we rewind. Current index: ' +
              t +
              ' Position: ' +
              i.state.progress
          ),
            (s.material.uniforms.dispFactor.value = 0);
          return;
        }
        if (i.state.prevRounded < i.state.currentRounded && n < i.state.progress) {
          console.log(
            'fEndTransition: Moving backward but we fast forward. Current index: ' +
              t +
              ' Position: ' +
              i.state.progress
          ),
            (s.material.uniforms.dispFactor.value = 0);
          return;
        }
        if ((t >= a && (t = 0), i.state.currentMovingDirection < 0)) {
          console.log(
            'fEndTransition: Transition ended - new current index ' +
              t +
              ' Moving backward. Position: ' +
              i.state.progress
          );
          let l = t - 1;
          l < 0 && (l = a - 1),
            (s.material.uniforms.currentImage.value = s.textures[l]),
            (s.material.uniforms.currentImage.needsUpdate = !0),
            (s.material.uniforms.nextImage.value = s.textures[t]),
            (s.material.uniforms.nextImage.needsUpdate = !0),
            (s.material.uniforms.dispFactor.value = 0);
        } else
          console.log(
            'fEndTransition: Transition ended - new current index ' +
              t +
              ' Moving forward. Position: ' +
              i.state.progress
          ),
            (s.material.uniforms.currentImage.value = s.textures[t]),
            (s.material.uniforms.currentImage.needsUpdate = !0),
            (s.material.uniforms.dispFactor.value = 0);
      },
      a = s.images.length,
      r = 1 / a;
    if (i.opts.snap) {
      let o = r / 6,
        h = 5 * o;
      s.onTexturesLoaded = function () {
        (s.material.uniforms.nextImage.value = s.textures[0]),
          (s.material.uniforms.nextImage.needsUpdate = !0);
        for (let t = 0; t < a; t++)
          0 == t
            ? i.tl
                .to({}, { duration: o / 2 }, 0)
                .call(n, [0], '>')
                .to(
                  s.material.uniforms.dispFactor,
                  { duration: h, value: 1, ease: 'Sine.easeInOut' },
                  '>'
                )
                .call(l, [1], '>')
            : i.tl
                .to({}, { duration: o }, '>')
                .call(n, [t], '>')
                .to(
                  s.material.uniforms.dispFactor,
                  { duration: h, value: 1, ease: 'Sine.easeInOut' },
                  '>'
                )
                .call(l, [t + 1], '>');
      };
    } else {
      let d = r / 2,
        p = r / 2;
      (s.onTexturesLoaded = function () {
        (s.material.uniforms.nextImage.value = s.textures[0]),
          (s.material.uniforms.nextImage.needsUpdate = !0);
        for (let t = 0; t < a; t++)
          0 == t
            ? i.tl
                .to({}, { duration: p / 2 }, 0)
                .call(n, [0], '>')
                .to(
                  s.material.uniforms.dispFactor,
                  { duration: d, value: 1, ease: 'slow(0.7,0.7,false)' },
                  '>'
                )
                .call(l, [1], '>')
            : i.tl
                .to({}, { duration: p }, '>')
                .call(n, [t], '>')
                .to(
                  s.material.uniforms.dispFactor,
                  { duration: d, value: 1, ease: 'slow(0.7,0.7,false)' },
                  '>'
                )
                .call(l, [t + 1], '>');
      }),
        i.tl.to({}, { duration: p / 2 }, '>');
    }
  }
  debounce(t, e) {
    let i;
    return function (...s) {
      i && clearTimeout(i), (i = setTimeout(() => t(...s), e));
    };
  }
  isObject(t) {
    return t instanceof Object && !Array.isArray(t) && null !== t;
  }
  isElement(t) {
    return 'object' == typeof HTMLElement
      ? t instanceof HTMLElement
      : t &&
          'object' == typeof t &&
          null !== t &&
          1 === t.nodeType &&
          'string' == typeof t.nodeName;
  }
  log(t) {
    !0 == this.opts.debug && console.log(t);
  }
}
ClapatSlider.instances = [];
