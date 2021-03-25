# vue-analysis

```bash
入口文件： 
  vue-analysis/src/platforms/web/entry-runtime-with-compiler.js
```

### 组件patch

```bash
 1、patch的整体流程： 
    createComponent -> 
    子组件初始化 _init -> 
    子组件render —> 
    子组件patch
    
 2、activeInstance为当前激活的vm实例；
    vm.$vnode为组件占位符；
    vm._vnode为组件的渲染vnode
    
 3、嵌套组件的插入顺序是先子后父
```