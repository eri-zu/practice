//--------------------------------------------------
//
//  Content
//
//--------------------------------------------------

import Base from "@BALANCeLibs/Base.js";
import * as THREE from "three";
import TrackballControls from "three-trackballcontrols";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Scene extends Base {
  constructor(isControl = false, renderer, camera) {
    super();

    this.renderer = renderer;
    this.camera = camera;
    this.isControl = isControl;

    this.setup();
    this.setEvents();
  }

  setup() {
    if (this.isControl) {
      // this.controls = new TrackballControls(
      //   this.camera,
      //   this.renderer.domElement
      // );
      // this.setting();
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      // this.setting();
    }
  }

  setting() {
    this.controls.rotateSpeed = 3.0; //��ܞ������Ȥ����٤�
    this.controls.zoomSpeed = 1.2; //���`�ह��Ȥ����٤�
    this.controls.panSpeed = 0.3; //�ѥ󤹤�Ȥ����٤�

    this.controls.staticMoving = false;
    this.controls.dynamicDampingFactor = 0.1; // 0 <= 1;

    this.controls.noRotate = false; //true�ǻ�ܞ�����򲻿ɤˤ���
    this.controls.noZoom = false; //true�ǥ��`������򲻿ɤˤ���
    this.controls.noPan = true; //true�ǥѥ�β����򲻿ɤˤ���

    this.controls.minDistance = 0; //���Ť�����x����С��
    this.controls.maxDistance = Infinity; //�h���������x�����
    // this.controls.maxDistance = 100; //�h���������x�����
  }

  setEvents() {}
}
