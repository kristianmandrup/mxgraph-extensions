import mx from "@mxgraph-app/mx";
const { mxEvent, mxConstraintHandler } = mx;
import { extend } from "../../extend";

export const MxConstraintHandler = extend([mxConstraintHandler], {
  $$init: function (graph) {
    mxConstraintHandler.apply(this, [graph]);
  },

  // Implements a smaller tolerance for mouse events and a larger tolerance for touch
  // events on touch devices. The default tolerance (4px) is used for mouse events.
  getTolerance: function (me) {
    return mxEvent.isMouseEvent(me.getEvent()) ? 4 : this.graph.getTolerance();
  },
});
