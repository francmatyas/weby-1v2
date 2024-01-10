import * as lib from "./exportActions";
//import configuration from "../app.config.js";
class ActionLib {
  constructor() {}
}
const appAction = new ActionLib();

Object.keys(lib).forEach((name) => {
  ActionLib.prototype[name] = lib[name];
});
//appAction.global = configuration;

export default appAction;