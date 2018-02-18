var app = getApp();
var that;
var tltle;
var Util = require('../../utils/util.js');
Page({
	data:{
		indicatorDots:true,
		interval:3000,
		duration:1000,
		image:[
		    'http://www.wenzheng.club/photos/images/pic01.jpg',
		    'http://www.wenzheng.club/photos/images/pic05.jpg',
		    'http://www.wenzheng.club/photos/images/pic03.jpg',
		    'http://www.wenzheng.club/photos/images/pic04.jpg',		    
		],
		city_name:'',	
		red:'green',		
	},
	onLoad:function(options){
            this.setData({
          title:options.title
      })
    that = this; 
    wx.request({  
      url: "http://op.juhe.cn/onebox/weather/query",  
      header: {  
      //请求头和ajax写法一样
        "Content-Type": "application/x-www-form-urlencoded"  
      },  
      method: "POST",   
      data: Util.json2Form( { cityname: "郑州", key: "1430ec127e097e1113259c5e1be1ba70" }),  
      complete: function( res ) { 
         wx.showToast({           
            icon:'success',
            duration:2000
         })
        that.setData({   
          red:'red',
          city_name: res.data.result.data.realtime.city_name,  
          date: res.data.result.data.realtime.date,  
          info: res.data.result.data.realtime.weather.info,  
        });  
        if( res == null || res.data == null ) {  
          console.error( '网络请求失败' );  
          return;  
        }  
         setTimeout(function(){
         wx.hideToast()
         },2000)
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