import mx from "@mxgraph-app/mx";
const { mxSvgCanvas2D } = mx;
import { extend } from "../extend";

export const MxSvgCanvas2D = extend([mxSvgCanvas2D], {
  // Alternative text for unsupported foreignObjects
  foAltText: "[Not supported by viewer]",
});
