//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import * as dat from "lil-gui";
import CANNON from "cannon";
export default class Plane extends Base {
  constructor(scene, camera, renderer) {
    super();

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.clock = new THREE.Clock();
    this.oldElapsedTime = 0;
    this.objectsToUpdate = [];

    this.isUEv = true;

    this.setup();
    this.setEvents();

    this.timeline();
  }

  setup() {
    this.gui = new dat.GUI();
    this.debugObject = {};

    this.hitSound = new Audio("./assets/resource/sounds/hit.mp3");

    this.playHitSound = (collision) => {
      // console.log(collision);
      console.log(collision.contact.getImpactVelocityAlongNormal()); // 衝突の強さ

      const impactStrength = collision.contact.getImpactVelocityAlongNormal();

      if (impactStrength > 1.5) {
        // 衝突強かったら音出す
        this.hitSound.volume = Math.random();
        this.hitSound.currentTime = 0;
        this.hitSound.play();
      }
    };

    this.loadTexture();
    this.createPhysicsWorld();
    this.ready();
    this.createSphere(0.5, { x: 0, y: 3, z: 0 });
    this.createBox(1, 1.5, 2, { x: 0, y: 3, z: 0 });

    /**
     * sphere
     */

    this.debugObject.createSphere = () => {
      this.createSphere(Math.random() * 0.5, {
        x: (Math.random() - 0.5) * 3,
        y: 3,
        z: (Math.random() - 0.5) * 3,
      });
    };
    this.gui.add(this.debugObject, "createSphere"); // object

    /**
     * box
     */

    this.debugObject.createBox = () => {
      this.createBox(
        Math.random(), // width
        Math.random(), // height
        Math.random(), // dpeth
        {
          x: (Math.random() - 0.5) * 3, // position
          y: 3,
          z: (Math.random() - 0.5) * 3,
        }
      );
    };
    this.gui.add(this.debugObject, "createBox"); // object

    /**
     * reset
     */
    this.debugObject.reset = () => {
      for (const object of this.objectsToUpdate) {
        // remove body
        object.body.removeEventListener("collide", this.playHitSound);
        this.world.removeBody(object.body);

        // remove mesh
        this.scene.remove(object.mesh);
      }
    };
    this.gui.add(this.debugObject, "reset"); // object

    this.add();
  }

  loadTexture() {
    this.textureLoader = new THREE.TextureLoader();
    this.cubeTextureLoader = new THREE.CubeTextureLoader();

    this.environmentMapTexture = this.cubeTextureLoader.load([
      "./assets/resource/textures/environmentMaps/0/px.png", // positive x
      "./assets/resource/textures/environmentMaps/0/nx.png", /// negative x
      "./assets/resource/textures/environmentMaps/0/py.png",
      "./assets/resource/textures/environmentMaps/0/ny.png",
      "./assets/resource/textures/environmentMaps/0/pz.png",
      "./assets/resource/textures/environmentMaps/0/nz.png",
    ]);
  }

  createPhysicsWorld() {
    /**
     * world
     */
    this.world = new CANNON.World();
    this.world.gravity.set(0, -9.82, 0);

    // パフォーマンス改善
    // 衝突判定の方法の一つ 全てのbody同士をtestするのではなく、任意の軸で大まかに選定　パフォーマンスを良くするためにこれに帰ることを推奨
    this.world.broadphase = new CANNON.SAPBroadphase(this.world);
    // 動いてないbodyもtestされてしまってるので、sleepにする
    this.world.allowSleep = true;

    /**
     * material
     */
    // contactMaterial : Defines what happens when two materials meet.

    // 一つのマテリアルだけなら、名前は'default' or 'plastic'
    // this.defaultMaterial = new CANNON.Material("default");
    // this.defalutContactMaterial = new CANNON.ContactMaterial(
    //   this.defaultMaterial, // first material
    //   this.defaultMaterial, // second material
    //   {
    //     friction: 0.1, // what will happen
    //     restitution: 0.7, // 跳ね返り
    //   }
    // );
    // this.world.addContactMaterial(this.defalutContactMaterial);
    // this.world.defaultContactMaterial = this.defalutContactMaterial;

    // 2つ以上のマテリアルなら、名前は'concrete' and 'plastic'とかに
    this.concreteMaterial = new CANNON.Material("concrete");
    this.plasticMaterial = new CANNON.Material("plastic");
    this.concretePlasticContactMaterial = new CANNON.ContactMaterial(
      this.concreteMaterial, // first material
      this.plasticMaterial, // second material
      {
        friction: 0.1, // what will happen
        restitution: 0.7, // 跳ね返り
      }
    );

    this.world.addContactMaterial(this.concretePlasticContactMaterial);

    /**
     * sphere
     */
    // this.sphereShape = new CANNON.Sphere(0.5);
    // this.sphereBody = new CANNON.Body({
    //   mass: 1,
    //   position: new CANNON.Vec3(0, 3, 0), // 落ちる開始位置
    //   shape: this.sphereShape,
    //   material: this.plasticMaterial,
    // });

    // this.sphereBody.applyLocalForce(
    //   new CANNON.Vec3(150, 0, 0), // force
    //   new CANNON.Vec3(0, 0, 0) // どこに力を加えたいか local座標
    // );

    // this.world.addBody(this.sphereBody);

    /**
     * floor
     */
    this.floorShape = new CANNON.Plane(); // inifit
    this.floorBody = new CANNON.Body();
    this.floorBody.mass = 0; // = doesnt move
    this.floorBody.addShape(this.floorShape);
    this.floorBody.quaternion.setFromAxisAngle(
      new CANNON.Vec3(-1, 0, 0), // rotation axis x軸の-方向からスティック入れて、それを軸に回転さセルイメージ
      Math.PI * 0.5 // angle
    );
    this.floorBody.material = this.concreteMaterial;

    this.world.addBody(this.floorBody);
  }

  ready() {
    /**
     * sphere
     */
    // this.sphere = new THREE.Mesh(
    //   new THREE.SphereGeometry(0.5, 32, 32),
    //   new THREE.MeshStandardMaterial({
    //     metalness: 0.3,
    //     roughness: 0.4,
    //     envMap: this.environmentMapTexture,
    //     envMapIntensity: 0.5,
    //   })
    // );

    // this.sphere.castShadow = true;
    // this.sphere.position.y = 0.5;

    this.sphereGeometry = new THREE.SphereGeometry(1, 20, 20);
    this.sphereMaterial = new THREE.MeshStandardMaterial({
      metalness: 0.3,
      roughness: 0.4,
      envMap: this.environmentMapTexture,
      envMapIntensity: 0.5,
    });

    /**
     * box
     */
    this.boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    this.boxMaterial = new THREE.MeshStandardMaterial({
      metalness: 0.3,
      roughness: 0.4,
      envMap: this.environmentMapTexture,
      envMapIntensity: 0.5,
    });

    /**
     * floor
     */
    this.floor = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshStandardMaterial({
        color: "#777777",
        metalness: 0.3,
        roughness: 0.4,
        envMap: this.environmentMapTexture,
        envMapIntensity: 0.5,
      })
    );

    this.floor.receiveShadow = true;
    this.floor.rotation.x = -Math.PI * 0.5;
  }

  createSphere(radius, position) {
    /**
     * three.js
     */
    this.mesh = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial);
    this.mesh.scale.set(radius, radius, radius);
    this.mesh.castShadow = true;
    this.mesh.position.copy(position);
    this.scene.add(this.mesh);

    /**
     * cannon js
     */
    this.shape = new CANNON.Sphere(radius);
    this.body = new CANNON.Body({
      mass: 1,
      position: new CANNON.Vec3(0, 3, 0), // 落ちる開始位置
      shape: this.shape,
      material: this.plasticMaterial,
    });

    this.body.position.copy(position);
    this.body.addEventListener("collide", this.playHitSound);
    this.world.addBody(this.body);

    /**
     * Save in objects to update
     */
    this.objectsToUpdate.push({
      mesh: this.mesh, // three.js
      body: this.body, // cannon js
    });
  }

  createBox(width, height, depth, position) {
    /**
     * three.js
     */
    this.mesh = new THREE.Mesh(this.boxGeometry, this.boxMaterial);
    this.mesh.scale.set(width, height, depth);
    this.mesh.castShadow = true;
    this.mesh.position.copy(position);
    this.scene.add(this.mesh);

    /**
     * cannon js
     */
    this.shape = new CANNON.Box(
      new CANNON.Vec3(width * 0.5, height * 0.5, depth * 0.5) // ベクトル：キューブの真ん中からコーナーへの距離
    );
    this.body = new CANNON.Body({
      mass: 1,
      position: new CANNON.Vec3(0, 3, 0), // 落ちる開始位置
      shape: this.shape,
      material: this.plasticMaterial,
    });

    this.body.position.copy(position);
    this.body.addEventListener("collide", this.playHitSound);
    this.world.addBody(this.body);

    /**
     * Save in objects to update
     */
    this.objectsToUpdate.push({
      mesh: this.mesh, // three.js
      body: this.body, // cannon js
    });
  }

  add() {
    // this.scene.add(this.sphere);
    this.scene.add(this.floor);
  }

  update() {
    this.elpasedTime = this.clock.getElapsedTime();
    const deltaTime = this.elpasedTime - this.oldElapsedTime;
    this.oldElapsedTime = this.elpasedTime;

    /**
     * 風の力加える
     */
    // this.sphereBody.applyForce(
    //   new CANNON.Vec3(-0.5, 0, 0), // force
    //   this.sphereBody.position // world座標
    // );

    /**
     * update physics world
     */
    this.world.step(1 / 60, deltaTime, 3); // fixed time stamp, how much time passed since the last step, how much the iterations the world can apply to catch up with a potencial delay

    for (const object of this.objectsToUpdate) {
      object.mesh.position.copy(object.body.position);
      object.mesh.quaternion.copy(object.body.quaternion); // boxは衝突したら回転して崩れるように
    }

    // this.sphere.position.copy(this.sphereBody.position);
    // this.sphere.position.x = this.sphereBody.position.x;
    // this.sphere.position.y = this.sphereBody.position.y;
    // this.sphere.position.z = this.sphereBody.position.z;
  }

  draw() {}

  timeline() {}

  onResize() {}
}
