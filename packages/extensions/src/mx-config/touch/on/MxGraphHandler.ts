import mx from "@mxgraph-app/mx";
const { mxEvent, mxGraphHandler } = mx;
import { extend } from "../../extend";

export const MxGraphHandler = extend({
  $$init: function (graph) {
    mxGraphHandler.apply(this, [graph]);
  },

  // Don't clear selection if multiple cells selected
  mouseDown: function (sender, me) {
    const graphHandlerMouseDown = mxGraphHandler.prototype.mouseDown;
    graphHandlerMouseDown.apply(this, [sender, me]);

    if (
      mxEvent.isTouchEvent(me.getEvent()) &&
      this.graph.isCellSelected(me.getCell()) &&
      this.graph.getSelectionCount() > 1
    ) {
      this.delayedSelection = false;
    }
  },
});
