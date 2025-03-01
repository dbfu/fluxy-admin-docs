# 脚本

::: tip 提示
为了提高开发效率，框架内置了脚本，可以快速创建代码模板。
:::

## 创建前端页面模板

```bash
node ./script/create-page demo
```

```  
├── index.tsx          // 列表页面
└── new-edit-form.tsx  // 表单页面
```

该脚本有 1 个参数，表示功能名称。

## 创建后端增删改查模块

```bash
node ./script/create-module demo demo demo 演示
```

该脚本有 4 个参数，第一个 demo 表述文件夹名称，第二个 demo 表示功能名称，第三个 demo 表示数据库表前缀，第四个 演示 表示功能描述。

执行命令后，项目中会多出一些文件。

```
└── demo
    ├── controller          // 接口入口，主要参数校验
    │   └── demo.ts           
    ├── dto                 // 前端传给后端的参数模型定义
    │   ├── demo-page.ts      
    │   └── demo.ts
    ├── entity              // 数据库实体
    │   └── demo.ts
    ├── service             // 处理业务逻辑
    │   └── demo.ts
    └── vo                  // 返回给前端的参数模型定义
        ├── demo-page.ts
        └── demo.ts
```
