import { H as get_store_value, an as s } from "./index.ae92f232.js";
const getNodeChildren = (node) => {
  const fallback = get_store_value(s).en;
  const nodes = node.split(".");
  const nodeValue = nodes.reduce((acc, cur) => acc[cur], fallback);
  if (nodeValue) {
    return Object.keys(nodeValue);
  }
  return [];
};
export { getNodeChildren as g };
