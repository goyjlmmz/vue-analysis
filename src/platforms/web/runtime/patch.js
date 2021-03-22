/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

// createPatchFunction 函数柯理化 return 一个 根据不同运行环境的方法
// vue-analysis/src/core/vdom/patch.js createPatchFunction方法内部的patch方法
export const patch: Function = createPatchFunction({ nodeOps, modules })
