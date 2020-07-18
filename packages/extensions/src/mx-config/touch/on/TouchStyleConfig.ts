import mx from "@mxgraph-app/mx";
import { ClassMap } from "../../ClassMap";
import { MxPanningHandler } from "./MxPanningHandler";
import { MxConstraintHandler } from "./MxConstraintHandler";
import { MxGraphHandler } from "./MxGraphHandler";
const { mxVertexHandler, mxEdgeHandler, mxShape, mxClient } = mx;
const { Graph } = ClassMap;
// import { extend } from "../../extend";

/**
 * Usage:
 * const { MxGraphHandler } = new TouchStyleConfig().configure();
 * new MxGraphHandler();
 */
export class TouchStyleConfig {
  configure(): any {
    /**
     * Implements touch style
     */
    if (Graph.touchStyle) {
      // Larger tolerance for real touch devices
      if (
        mxClient.IS_TOUCH ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      ) {
        mxShape.prototype.svgStrokeTolerance = 18;
        mxEdgeHandler.prototype.tolerance = 12;

        Graph.prototype["tolerance"] = 12;

        mxVertexHandler.prototype.tolerance = 12;
        mxVertexHandler.prototype.rotationHandleVSpacing = -16;

        return {
          MxConstraintHandler,
          MxShape: mxShape,
          MxEdgeHandler: mxEdgeHandler,
          MxVertexHandler: mxVertexHandler,
        };
      }

      return {
        MxPanningHandler,
        MxGraphHandler,
      };
    }
  }
}
