//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.loadTexture();
    this.ready();
    this.add();
  }

  loadTexture() {
    this.textureLoader = new THREE.TextureLoader();

    // door
    this.doorColorTexture = this.textureLoader.load(
      "./assets/resource/img/textures/door/color.jpg"
    );
    this.doorAlphaTexture = this.textureLoader.load(
      "./assets/resource/img/textures/door/alpha.jpg"
    );
    this.doorAmbientOcclusionTexture = this.textureLoader.load(
      "./assets/resource/img/textures/door/ambientOcclusion.jpg"
    );
    this.doorHeightTexture = this.textureLoader.load(
      "./assets/resource/img/textures/door/height.jpg"
    );
    this.doorNormalTexture = this.textureLoader.load(
      "./assets/resource/img/textures/door/normal.jpg"
    );
    this.doorMetalnessTexture = this.textureLoader.load(
      "./assets/resource/img/textures/door/metalness.jpg"
    );
    this.doorRoughnessTexture = this.textureLoader.load(
      "./assets/resource/img/textures/door/roughness.jpg"
    );

    // bricks
    this.bricksColorTexture = this.textureLoader.load(
      "./assets/resource/img/textures/bricks/color.jpg"
    );
    this.bricksAmbientOcclusionTexture = this.textureLoader.load(
      "./assets/resource/img/textures/bricks/ambientOcclusion.jpg"
    );
    this.bricksNormalTexture = this.textureLoader.load(
      "./assets/resource/img/textures/bricks/normal.jpg"
    );
    this.bricksRoughnessTexture = this.textureLoader.load(
      "./assets/resource/img/textures/bricks/roughness.jpg"
    );

    // grass
    this.grassColorTexture = this.textureLoader.load(
      "./assets/resource/img/textures/grass/color.jpg"
    );
    this.grassAmbientOcclusionTexture = this.textureLoader.load(
      "./assets/resource/img/textures/grass/ambientOcclusion.jpg"
    );
    this.grassNormalTexture = this.textureLoader.load(
      "./assets/resource/img/textures/grass/normal.jpg"
    );
    this.grassRoughnessTexture = this.textureLoader.load(
      "./assets/resource/img/textures/grass/roughness.jpg"
    );

    this.grassColorTexture.repeat.set(8, 8);
    this.grassAmbientOcclusionTexture.repeat.set(8, 8);
    this.grassNormalTexture.repeat.set(8, 8);
    this.grassRoughnessTexture.repeat.set(8, 8);

    this.grassColorTexture.wrapS = THREE.RepeatWrapping;
    this.grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
    this.grassNormalTexture.wrapS = THREE.RepeatWrapping;
    this.grassRoughnessTexture.wrapS = THREE.RepeatWrapping;

    this.grassColorTexture.wrapT = THREE.RepeatWrapping;
    this.grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;
    this.grassNormalTexture.wrapT = THREE.RepeatWrapping;
    this.grassRoughnessTexture.wrapT = THREE.RepeatWrapping;
  }

  ready() {
    // group
    this.house = new THREE.Group();

    // wall
    this.walls = new THREE.Mesh(
      new THREE.BoxGeometry(4, 2.5, 4),
      new THREE.MeshStandardMaterial({
        map: this.bricksColorTexture,
        aoMap: this.bricksAmbientOcclusionTexture,
        normalMap: this.bricksNormalTexture,
        roughnessMap: this.bricksRoughnessTexture,
      })
    );
    this.walls.geometry.setAttribute(
      "uv2",
      new THREE.Float32BufferAttribute(
        this.walls.geometry.attributes.uv.array, // float32ArrayをbufferAttributeにconvert
        2
      )
    );
    this.walls.position.y = 2.5 / 2;
    this.walls.castShadow = true;

    // roof
    // ConeGeometry(radius, height, radialsegment)
    this.roof = new THREE.Mesh(
      new THREE.ConeGeometry(3.5, 1, 4),
      new THREE.MeshStandardMaterial({ color: "#b35f45" })
    );
    this.roof.position.y = 2.5 + 1 / 2;
    this.roof.rotation.y = Math.PI * 0.25;

    // door
    this.door = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
      new THREE.MeshStandardMaterial({
        map: this.doorColorTexture,
        transparent: true,
        alphaMap: this.doorAlphaTexture, // maskする transparent必要
        aoMap: this.doorAmbientOcclusionTexture, // 影にメリハリつけて立体的に uv2必要
        displacementMap: this.doorHeightTexture, // 凹凸作る 頂点情報必要
        displacementScale: 0.1,
        normalMap: this.doorNormalTexture, // もっとdetail加える
        metalnessMap: this.doorMetalnessTexture,
        roughnessMap: this.doorRoughnessTexture,
      })
    );
    this.door.geometry.setAttribute(
      "uv2",
      new THREE.Float32BufferAttribute(
        this.door.geometry.attributes.uv.array, // float32ArrayをbufferAttributeにconvert
        2
      )
    );
    this.door.position.z = 4 / 2 + 0.01;
    this.door.position.y = 2 / 2;

    // bush
    this.bushGeometry = new THREE.SphereGeometry(1, 16, 16);
    this.bushMaterial = new THREE.MeshStandardMaterial({ color: "#89c854" });

    this.bush1 = new THREE.Mesh(this.bushGeometry, this.bushMaterial);
    this.bush1.scale.set(0.5, 0.5, 0.5);
    this.bush1.position.set(0.8, 0.2, 2.2);
    this.bush1.castShadow = true;

    this.bush2 = new THREE.Mesh(this.bushGeometry, this.bushMaterial);
    this.bush2.scale.set(0.25, 0.25, 0.25);
    this.bush2.position.set(1.4, 0.1, 2.1);
    this.bush2.castShadow = true;

    this.bush3 = new THREE.Mesh(this.bushGeometry, this.bushMaterial);
    this.bush3.scale.set(0.4, 0.4, 0.4);
    this.bush3.position.set(-0.8, 0.1, 2.2);
    this.bush3.castShadow = true;

    this.bush4 = new THREE.Mesh(this.bushGeometry, this.bushMaterial);
    this.bush4.scale.set(0.15, 0.15, 0.15);
    this.bush4.position.set(-1, 0.05, 2.6);
    this.bush4.castShadow = true;

    // grave
    this.graves = new THREE.Group();
    this.graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
    this.graveMaterial = new THREE.MeshStandardMaterial({ color: "gray" });

    for (let i = 0; i < 50; i++) {
      this.angle = Math.random() * Math.PI * 2;
      this.radius = 3 + Math.random() * 6;
      this.x = Math.sin(this.angle) * this.radius;
      this.z = Math.cos(this.angle) * this.radius;

      this.grave = new THREE.Mesh(this.graveGeometry, this.graveMaterial);
      this.grave.position.set(this.x, 0.3, this.z);
      this.grave.rotation.y = (Math.random() - 0.5) * 0.4;
      this.grave.rotation.z = (Math.random() - 0.5) * 0.4;

      this.grave.castShadow = true;

      this.graves.add(this.grave);
    }

    // fog
    this.fog = new THREE.Fog("#262837", 0, 15);
    this.scene.fog = this.fog;

    // floor
    this.floor = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.MeshStandardMaterial({
        map: this.grassColorTexture,
        aoMap: this.grassAmbientOcclusionTexture,
        normalMap: this.grassNormalTexture,
        roughnessMap: this.grassRoughnessTexture,
      })
    );
    this.floor.geometry.setAttribute(
      "uv2",
      new THREE.Float32BufferAttribute(
        this.floor.geometry.attributes.uv.array, // float32ArrayをbufferAttributeにconvert
        2
      )
    );
    this.floor.rotation.x = -Math.PI * 0.5;
    this.floor.position.y = 0;
    this.floor.receiveShadow = true;

    this.house.add(
      this.walls,
      this.roof,
      this.door,
      this.bush1,
      this.bush2,
      this.bush3,
      this.bush4,
      this.graves
    );
  }

  add() {
    this.scene.add(this.sphere, this.floor, this.house);
  }

  update() {
    this.mesh.rotation.set(gb.up.frame / 100, gb.up.frame / 50, 0);
  }

  draw() {}

  timeline() {}

  onResize() {}
}
