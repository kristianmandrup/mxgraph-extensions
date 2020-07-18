// See: https://johnresig.com/blog/simple-javascript-inheritance/
import { extend } from "../extend";
import { ClassMap } from "../ClassMap";
const { HoverIcons } = ClassMap;

const proto = HoverIcons.prototype;

// TODO: move to sidebar module
export const Sidebar = extend({
  triangleUp: proto.triangleUp,
  triangleRight: proto.triangleRight,
  triangleDown: proto.triangleDown,
  triangleLeft: proto.triangleLeft,
  refreshTarget: proto.refreshTarget,
  roundDrop: proto.roundDrop,
});
