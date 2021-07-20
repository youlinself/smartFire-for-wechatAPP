//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {
      StatusBar: 20,
      CustomBar: 10,
      screenHeight: 0,
      screenWidth: 0,
      userInfo: null,
      UserInfoData: null,
      UserInfoDataChangeFlag: false,
      openid: null,
      hydrantNumber: null,
      nowCityNameDetail: null,
      nowCityName: null,
      installRecord: null,
      location:{
        longitude: null,
        latitude: null
      },
      mineRecordNum: 0,
      hydrantRecordNum: 1,
      addressArray:[],
      eqDataArray:[],
      ARnameNum: 0,
      FireMoni: [],//模拟火情
    },
    wx.getSystemInfo({
      success: (result) => {
        console.log(result);
        this.globalData.StatusBar = result.statusBarHeight;
        this.globalData.CustomBar = result.screenHeight * 0.084 + 7;
        this.globalData.screenHeight = result.screenHeight;
        this.globalData.screenWidth = result.screenWidth;
      },
    })
  }
})
