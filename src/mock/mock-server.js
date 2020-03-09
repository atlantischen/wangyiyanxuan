// 引入Mock
import Mock from "mockjs";
// 引入data数据
import data from "./datas/index.json";
import dataNav from './datas/cateNavDatas.json'

// 拦截地址,产生数据

//接口地址:  '/goods'   '/ratings'   '/info'

Mock.mock("/tablist", { code: 0, data: data.kingKongModule });
Mock.mock("/cagetorynav", { code: 0, data: dataNav.categoryL1List});

