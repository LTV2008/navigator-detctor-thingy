/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  //Watcher,
  Costume
  //Color,
  //Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 136.71742618865972,
        y: 81.55234110572634
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 139.65210064888004,
        y: 80.37225
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", { x: 0, y: 0 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.usragent = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.usragent = "navigator.userAgent";
    console.log(navigator.userAgent);
    this.costume = "backdrop3";
    yield* this.wait(0.2);
    if (
      this.stringIncludes(
        this.toString(this.vars.usragent),
        "Chrome/45.0.2442.0"
      )
    ) {
      this.costume = "backdrop1";
    } else {
      this.costume = "backdrop2";
    }
  }
}
