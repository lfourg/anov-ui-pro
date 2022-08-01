window.anovuiConfig = {
  serviceBasePath: "",
  sourceTypeValue:"static,api,datasource,staticFile,indicator",
  uploadAction: "/management/management/v1/go-cases/v1/components/upload",
  assetsBasePath: "/anov-ui-pro/static/",
  geoJsonBasePath:"https://obs-helf.woyun.cn/anov-resources/anov-geojson",
  uploadFileSize: {
    //资源上传大小限制，单位M
    image: 5,
    video: 20,
    file: 10,
  },
  dataSource: {
    dataBase: {
      saveFormUrl: "/management/v1/data-sources/jdbc/v1",
      testConnectUrl: "/management/v1/data-sources/v1/test-connection",
    },
    StaticFile: {
      uploadAction: "/management/v1/data-sources/file/v1",
      fileSize: 512,
      accept: ".csv,.xlsx,.xls,.json",
    },
  },
  app: {
    key: "app",
    value: "",
    tag: "O",
    children: [
      {
        key: "$emit",
        annotation: "全局事件调用",
        param: ["@param{EventType} e", "@param{*} arguments"],
        example: "app.$emit(e,arguments)",
        tag: "E",
      },
      {
        key: "GlobalVars",
        value: "{ 'key': 'value', ... }",
        tag: "O",
      },
      {
        key: "EventType",
        tag: "O",
        children: [
          {
            key: "setGlobalVar",
            param: ["@param{String} key", "@param{*} value"],
            annotation: "设置全局变量",
            tag: "E",
          },
          {
            key: "showComponent",
            param: ["@param{String|Array} cid"],
            annotation: "显示组件",
            tag: "E",
          },
          {
            key: "hideComponent",
            param: ["@param{String|Array} cid"],
            annotation: "隐藏组件",
            tag: "E",
          },
          {
            key: "toPage",
            param: ["@param{Object} {name:'',params:{}} | {path:''}"],
            annotation: "跳转页面",
            tag: "E",
          },
          {
            key: "setDyComponentState",
            param: ["@param{Object} {cid:'',name:''}"],
            annotation: "改变动态组件状态",
            tag: "E",
          },
        ],
      },
      {
        key: "getElementByCid",
        param: ["@param{String} cid"],
        annotation: "返回Dom对象",
        example: "app.getElementByCid(cid)",
        tag: "E",
      },
      {
        key: "getComponentByCid",
        param: ["@param{String} cid"],
        annotation: "获取VUE组件实例",
        example: "app.getComponentByCid(cid)",
        tag: "E",
      },
      {
        key: "getPage",
        annotation: "获取当前页面",
        example: "app.getPage()",
        tag: "E",
      },
    ],
  },
};
