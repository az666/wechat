Page({
	data:{
		list:[
			{name:"tc01",address:"eneneenen"},
			{name:"tc02",address:"zhengzhou"},
		],
		templatetest:{
                     name:"template测试",
                     address:"测试成功(包含import引用测试)"
		},
		array:[1,2,3,4],
		flag:true,
		msg:"按钮传参测试",
	},
	test1:function(e){
		console.log(e);
		console.log(e.target.dataset.a);
		this.setData({
			msg:(new Date-0)

		})

	},
	func2:function(){
        console.log('func2')
	},
	func3:function(){
        console.log('func3')
	},
	func4:function(){
		console.log('func4')

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