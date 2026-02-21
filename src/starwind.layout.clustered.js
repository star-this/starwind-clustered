// sw-clustered.js
import {
  createStarwindElement,
  defineElement,
} from "./starwind.elements.util.js";

const SwClusteredLayout = createStarwindElement({
  gap: { var: "--sw-clustered-gap", type: "space" },
  align: { var: "--sw-clustered-align", type: "raw" },
  justify: { var: "--sw-clustered-justify", type: "raw" },
});

export function defineSwClustered() {
  defineElement("sw-clustered", SwClusteredLayout);
}
