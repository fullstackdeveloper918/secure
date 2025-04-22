import $ from 'jquery';
import * as THREE from 'three';

export default class WebGL {
  constructor(e) {
    this.scene = new THREE.Scene();
    this.vertex = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`;

    this.material = e.material;
    this.fragment = e.fragment;
    this.uniforms = e.uniforms;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0x232f3a, 1);

    this.container = document.getElementById('canvas-slider');
    this.images = Array.from(document.querySelectorAll('.slide-img'));

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );
    this.camera.position.set(0, 0, 2);

    this.current = 0;
    this.textures = [];
    this.isRunning = false;
    this.paused = true;

    this.initiate(() => {
      this.setupResize();
      this.addObjects();
      this.resize();
      this.play();
    });
  }

  initiate(callback) {
    const promises = this.images.map((img, index) => {
      return new Promise((resolve) => {
        this.textures[index] = new THREE.TextureLoader().load(img.src, resolve);
      });
    });

    Promise.all(promises).then(callback);
  }

  setupResize() {
    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;

    this.imageAspect = this.textures[0].image.height / this.textures[0].image.width;

    let a1, a2;
    if (this.height / this.width > this.imageAspect) {
      a1 = (this.width / this.height) * this.imageAspect;
      a2 = 1;
    } else {
      a1 = 1;
      a2 = this.height / this.width / this.imageAspect;
    }

    this.material.uniforms.resolution.value.x = this.width;
    this.material.uniforms.resolution.value.y = this.height;
    this.material.uniforms.resolution.value.z = a1;
    this.material.uniforms.resolution.value.w = a2;

    const dist = this.camera.position.z;
    this.camera.fov = (180 / Math.PI) * 2 * Math.atan(1 / (2 * dist));
    this.plane.scale.x = this.camera.aspect;
    this.plane.scale.y = 1;
    this.camera.updateProjectionMatrix();
  }

  addObjects() {
    const patternImg = $('#showcase-slider-holder').attr('data-pattern-img');
    const dispTexture = new THREE.TextureLoader().load(patternImg);
    dispTexture.wrapS = dispTexture.wrapT = THREE.RepeatWrapping;

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        effectFactor: { type: 'f', value: 0.15 },
        dispFactor: { type: 'f', value: 0 },
        currentImage: { type: 't', value: this.textures[0] },
        nextImage: { type: 't', value: this.textures[1] },
        disp: { type: 't', value: dispTexture },
        resolution: { type: 'v4', value: new THREE.Vector4() },
      },
      vertexShader: this.vertex,
      fragmentShader: this.fragment,
      transparent: true,
      opacity: 1,
    });

    this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2);
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  stop() {
    this.paused = true;
  }

  play() {
    this.paused = false;
    this.render();
  }

  render() {
    if (!this.paused) {
      requestAnimationFrame(() => this.render());
      this.renderer.render(this.scene, this.camera);
    }
  }
}
