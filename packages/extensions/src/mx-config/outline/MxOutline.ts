import mx from "@mxgraph-app/mx";
const { mxOutline } = mx;
// See: https://johnresig.com/blog/simple-javascript-inheritance/
import { extend } from "../extend";
import { ClassMap } from "../ClassMap";
const { HoverIcons } = ClassMap;

/**
 *
 * Usage
 * const graph = {};
 * new MxCellEditor(graph);
 */
export const MxOutline = extend([mxOutline], {
  init: function (source, container) {
    mxOutline.apply(this, [source, container]);
  },
  sizerImage: HoverIcons.prototype["mainHandle"],
});
