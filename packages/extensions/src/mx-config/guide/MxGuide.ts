import mx from "@mxgraph-app/mx";
const { mxEvent, mxGuide, mxPolyline, mxConstants } = mx;

// See: https://johnresig.com/blog/simple-javascript-inheritance/
import { extend } from "../extend";

/**
 *
 * Usage
 * const graph = {};
 * new MxCellEditor(graph);
 */
export const MxGuide = extend({
  $$init: function (graph, states) {
    mxGuide.apply(this, [graph, states]);
  },

  /**
   * No dashed shapes.
   */
  createGuideShape: function (_horizontal) {
    var guide = new mxPolyline(
      [],
      mxConstants.GUIDE_COLOR,
      mxConstants.GUIDE_STROKEWIDTH
    );

    return guide;
  },

  // Alt-move disables guides
  isEnabledForEvent: function (evt) {
    return !mxEvent.isAltDown(evt);
  },
});
