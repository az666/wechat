Page({
	data:{
		index:0,
		arrayOject:["选择框","test1","测试"],
		icons:[{type:'success',size:25},{type:'info',size:25}],
		poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        name: '此时此刻',
        author: '许巍',
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        video_src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
        danmulist:[
        {text:"6666",
         color:'blue',
         time: 2
        },
         {text:"弹幕测试",
         color:'red',
         time: 2
        },
         {text:"弹幕测试666",
         color:'yellow',
         time: 2
        },

        ],
	},
	change:function(e){
           this.setData({
           	index:e.detail.value
           })
	},
	sw_change:function(e){
           console.log(e.detail.value)
	},
	tiaozhuan:function(){
           wx.navigateTo({
           	    url:'/pages/index/index'
           })
	},
	tz_map:function(){
		   wx.navigateTo({
           	    url:'/pages/map/map'
           }),
           wx.showToast({
       title:"正在跳转",
       icon: 'success',
       duration: 2000
      })

	},
	onLoad:function(options){
		
	},
	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
	},
		
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
	}
})		