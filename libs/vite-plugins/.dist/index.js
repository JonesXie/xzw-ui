import { each, isFunction } from "lodash";
import shell from "shelljs";
function hooksPlugin({
  rmFiles = [],
  afterBuild,
  beforeBuild
}) {
  return {
    name: "custom-hooks-plugin",
    buildStart() {
      each(rmFiles, (fName) => shell.rm("-rf", fName));
      isFunction(beforeBuild) && (beforeBuild == null ? void 0 : beforeBuild());
    },
    buildEnd(err) {
      !err && isFunction(afterBuild) && (afterBuild == null ? void 0 : afterBuild());
    }
  };
}
export {
  hooksPlugin
};
