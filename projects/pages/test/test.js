var app = getApp();
//拿到实例
Page({
	data:{
		  name:"知乎日报",
		  username:"123",
		  list:[]
		  //显示
	},
	onLoad:function(options){
		this.setData({
             username:app.getUserName()
		})
		//调用app。js的函数
		var that = this;
		wx.request({
		  url: 'http://news-at.zhihu.com/api/4/news/latest',
		  data: {
		  	
		  },
		  header: {
		      'Content-Type': 'application/json'
		  },
		  success: function(res) {
		    that.setData({
		    	list:res.data.stories
		    })
		  },
		  fail: function(res) {
		    
		  },
		  complete: function(res) {
		    
		  }
		})
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