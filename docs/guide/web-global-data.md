# 前端全局数据

## 用户信息

可以使用 `useUserStore` 获取用户信息

```ts
import { useUserStore } from '@/stores/user';

...

const userStore = useUserStore();
console.log(userStore.currentUser);
```

数据结构

```ts
type CurrentUserVO = {
  /** 用户ID */
  id?: string;
  /** 用户名称 */
  userName?: string;
  /** 用户昵称 */
  nickName?: string;
  /** 手机号 */
  phoneNumber?: string;
  /** 邮箱 */
  email?: string;
  /** 头像地址 */
  avatarPath?: string;
  /** 头像 */
  avatar?: FileEntity;
  /** 角色列表 */
  roles?: RoleVO[];
  /** 用户分配的菜单列表 */
  menus?: MenuVO[];
};
```

::: details 点我查看用户测试数据

```json
{
  "id": "1999360162267136",
  "createDate": "2023-06-27T12:24:44.613Z",
  "updateDate": "2024-12-24T09:20:07.000Z",
  "userName": "user",
  "nickName": "用户",
  "phoneNumber": "18233333333",
  "email": "876809592@qq.com",
  "avatar": {
    "id": "1998463730450432",
    "createDate": "2023-06-27T12:21:10.888Z",
    "updateDate": "2023-06-27T12:24:44.000Z",
    "fileName": "1687868470874_242091682079921_.pic_hd.jpg",
    "filePath": "/file/fluxy-admin/1687868470874_242091682079921_.pic_hd.jpg",
    "pkName": "user_avatar",
    "pkValue": "1999360162267136"
  },
  "roles": [
    {
      "id": "5126498239381504",
      "createDate": "2023-07-06T03:30:52.433Z",
      "updateDate": "2023-07-06T03:30:52.433Z",
      "name": "用户",
      "code": "user"
    }
  ],
  "avatarPath": "/file/fluxy-admin/1687868470874_242091682079921_.pic_hd.jpg",
  "menus": [
    {
      "id": "2709189189173248",
      "createDate": "2023-06-29T11:25:21.041Z",
      "updateDate": "2023-07-08T06:44:38.668Z",
      "parentId": null,
      "name": "仪表盘",
      "icon": "DashboardOutlined",
      "type": 2,
      "route": "/dashboard",
      "filePath": "/dashboard/index.tsx",
      "orderNumber": 10,
      "url": "/dashboard",
      "show": true,
      "authCode": "",
      "curVersion": null,
      "path": "/dashboard",
      "parentPaths": []
    },
    {
      "id": "223474146036678656",
      "createDate": "2025-02-27T16:06:28.368Z",
      "updateDate": "2025-02-27T16:06:28.368Z",
      "parentId": null,
      "name": "demo",
      "icon": "FullscreenExitOutlined",
      "type": 2,
      "route": "/demo",
      "filePath": "/demo/index.tsx",
      "orderNumber": 11,
      "url": null,
      "show": true,
      "authCode": null,
      "curVersion": null,
      "path": "/demo",
      "parentPaths": [],
      "children": [
        {
          "id": "223474351243001856",
          "createDate": "2025-02-27T16:07:17.291Z",
          "updateDate": "2025-02-27T16:07:17.291Z",
          "parentId": "223474146036678656",
          "name": "普通用户按钮",
          "icon": null,
          "type": 3,
          "route": null,
          "filePath": null,
          "orderNumber": null,
          "url": null,
          "show": false,
          "authCode": "user-button",
          "curVersion": null,
          "path": "/demonull",
          "parentPaths": ["/demo"]
        }
      ]
    }
  ],
  "flatMenus": [
    {
      "id": "2709189189173248",
      "createDate": "2023-06-29T11:25:21.041Z",
      "updateDate": "2023-07-08T06:44:38.668Z",
      "parentId": null,
      "name": "仪表盘",
      "icon": "DashboardOutlined",
      "type": 2,
      "route": "/dashboard",
      "filePath": "/dashboard/index.tsx",
      "orderNumber": 10,
      "url": "/dashboard",
      "show": true,
      "authCode": "",
      "curVersion": null,
      "path": "/dashboard",
      "parentPaths": []
    },
    {
      "id": "223474146036678656",
      "createDate": "2025-02-27T16:06:28.368Z",
      "updateDate": "2025-02-27T16:06:28.368Z",
      "parentId": null,
      "name": "demo",
      "icon": "FullscreenExitOutlined",
      "type": 2,
      "route": "/demo",
      "filePath": "/demo/index.tsx",
      "orderNumber": 11,
      "url": null,
      "show": true,
      "authCode": null,
      "curVersion": null,
      "path": "/demo",
      "parentPaths": []
    },
    {
      "id": "223474351243001856",
      "createDate": "2025-02-27T16:07:17.291Z",
      "updateDate": "2025-02-27T16:07:17.291Z",
      "parentId": "223474146036678656",
      "name": "普通用户按钮",
      "icon": null,
      "type": 3,
      "route": null,
      "filePath": null,
      "orderNumber": null,
      "url": null,
      "show": false,
      "authCode": "user-button",
      "curVersion": null,
      "path": "/demonull",
      "parentPaths": ["/demo"]
    }
  ],
  "authList": ["user-button"]
}
```

:::

## 全局数据

可以使用 useGlobalStore hooks获取全局数据

```ts
const globalData = useGlobalStore();
console.log(globalData);
```

数据结构

```ts
interface State {
  // 暗黑模式
  darkMode: boolean;
  // 侧边栏折叠
  collapsed: boolean;
  // 语言
  lang: string;
  // token
  token: string;
  // 刷新token
  refreshToken: string;
}
```

方法

```ts
interface Action {
  // 设置暗黑模式
  setDarkMode: (darkMode: State['darkMode']) => void;
  // 设置侧边栏折叠
  setCollapsed: (collapsed: State['collapsed']) => void;
  // 设置语言
  setLang: (lang: State['lang']) => void;
  // 设置token
  setToken: (lang: State['token']) => void;
  // 设置刷新token
  setRefreshToken: (lang: State['refreshToken']) => void;
}
```

## 获取websocket数据

```ts
  const { latestMessage } = useMessageStore();

  useEffect(() => {
    // 监听消息
  }, [latestMessage])
```

```ts

interface State {
  latestMessage?: SocketMessage | null;
}

interface SocketMessage {
  type: SocketMessageType;
  data: any;
}

enum SocketMessageType {
  // 角色权限改变
  PermissionChange = 'PermissionChange',
  // 密码改变
  PasswordChange = 'PasswordChange',
  // token过期
  TokenExpire = 'TokenExpire',
}

```
