<template>
<div>
	<div class="bodyStyle">
		<div v-for="(notices,index) in noticesData" class="iconBody" :class="{iconBodyForth: (index+1)%4 == 0}">
			<div class="noticesTitle">{{notices.title}}</div>
			<button class="buttonIcon" style="margin-left:20px">{{notices.districtName}}</button>
			<button class="buttonIcon">{{notices.projectPurchaseWay}}</button>
			<div class="buttonIconNameDiv"><button class="buttonIconName">{{notices.projectDirectoryName}}</button></div>
			<div class="budgetDiv">
				<span style="color:#808996;font-size:14px;">预算金额： </span>
				<span style="color:#d63c00;font-size:20px;">¥{{notices.projectBudget}}</span>
			</div>
			<div class="budgetDiv">
				<span style="color:#808996;">发布时间： </span>
				<span style="color:#808996;">2小时前</span>
			</div>
			<div style="background-color:#f8f8f8;overflow:hidden">
				<div style="overflow:hidden">
					<div style="float:left">
						<svg style="margin-top:20px" t="1568728492699" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3343" width="24" height="24"><path d="M752.63 344.2l40.83-40.83a21.33 21.33 0 0 0-30.17-30.17l-40.84 40.84a322.29 322.29 0 0 0-65.78-44.93 21.35 21.35 0 1 0-19.33 38.08 276.2 276.2 0 0 1 152 247.46C789.33 707.58 664.92 832 512 832S234.67 707.58 234.67 554.67 359.08 277.33 512 277.33A21.32 21.32 0 0 0 533.33 256v-64h64a21.33 21.33 0 1 0 0-42.67H426.67a21.33 21.33 0 1 0 0 42.67h64v43.75C324.16 246.8 192 385.41 192 554.67c0 176.46 143.54 320 320 320s320-143.54 320-320a318.36 318.36 0 0 0-79.37-210.47z" p-id="3344" fill="#2e2e02"></path><path d="M512 405.33a21.32 21.32 0 0 0-21.33 21.33v128a21.33 21.33 0 0 0 42.67 0v-128A21.32 21.32 0 0 0 512 405.33z" p-id="3345" fill="#2e2e02"></path></svg>
					</div>
					<div style="float:left;height:30px;margin-top:20px">距离投标开始：</div>
					<div class="startButton">即将开始</div>
				</div>
				<div style="margin:20px 0px;overflow:hidden">
					<div style="display:inline-block;padding:10px 0px;float:right">秒</div>
					<div style="display:inline-block;background-color:#272822;color:#fff;padding:7px 7px;margin-right:2px;border-radius:5px;float:right">0</div>
					<div style="display:inline-block;background-color:#272822;color:#fff;padding:7px 7px;margin-right:2px;border-radius:5px;float:right">0</div>
					<div style="display:inline-block;padding:10px 0px;float:right">分</div>
					<div style="display:inline-block;background-color:#272822;color:#fff;padding:7px 7px;margin-right:2px;border-radius:5px;float:right">3</div>
					<div style="display:inline-block;background-color:#272822;color:#fff;padding:7px 7px;margin-right:2px;border-radius:5px;float:right">1</div>
					<div style="display:inline-block;padding:10px 0px;float:right">时</div>
					<div style="display:inline-block;background-color:#272822;color:#fff;padding:7px 7px;margin-right:2px;border-radius:5px;float:right">9</div>
					<div style="display:inline-block;background-color:#272822;color:#fff;padding:7px 7px;margin-right:2px;border-radius:5px;float:right">1</div>
					<div style="display:inline-block;padding:10px 0px;float:right">天</div>
					<div style="display:inline-block;background-color:#272822;color:#fff;padding:7px 7px;margin-right:2px;border-radius:5px;float:right">4</div>
				</div>
				<div style="color:#808996;text-align:center;margin-bottom:10px">{{notices.hits}}次围观</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data(){
		return{
			noticesData:[],			//公告数据
			currentTime:'',
			purchase:sessionStorage.getItem("purchase"),
		}
	},
	mounted(){
		console.log(sessionStorage.getItem("purchase"))
		this.purchase = sessionStorage.getItem("purchase");
		this.currentTime = new Date().getTime();
		console.log(new Date().getTime());
		//(Math.ceil((new Date().getTime() - this.timeArray.issueTime)/1000/60/60)) < 24
		console.log(((new Date().getTime() - 1568826670000)/1000/60/60) + "小时前");
		this.getNotices();
	},
	methods:{
		getNotices(){
			this.noticesData = [];
			this.$ajax.get('http://localhost:8080/static/notices.json').then((res)=>{
				// for (var i = 0; i <res.data.length; i++) {
				// 	if(res.data[i].flag == str){
				// 		this.districtData.push(res.data[i]);
				// 	}
				// }
				if(this.purchase != ''){
					let purchases = this.purchase;
					let result = res.data.notices.filter(function(n){
						return n.projectPurchaseWay == purchases;
					})
					this.noticesData = result;
				}
				else{
					this.noticesData = res.data.notices;
				}
				console.log(this.noticesData);
			})
		}
	}

}
</script>
<style>
	.bodyStyle{
		margin:20px auto;
		/*border: 1px solid #bcbcbc;*/
		width: 1100px;
		/*height: 100%;*/
		min-height: 400px;
		height: auto;
		font-size: 18px;
	}
	.iconBody{
		display: inline-block;
		width: 261px;
		min-height: 100px;
		border: 1px solid #dadada;
		margin-right: 15px;
		margin-bottom: 15px;
		box-shadow: #dadada 0px 0px 3px;
	}
	.iconBodyForth{
		display: inline-block;
		width: 261px;
		min-height: 100px;
		border: 1px solid #dadada;
		margin-bottom: 15px;
		margin-right: 0px;
	}
	.noticesTitle{
		font-family: SimHei;
		text-align: center;
		overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 20px 20px 10px 20px;
        font-size: 20px;
	}
	.buttonIcon{
		border:1px solid #fd4f3e;
		background-color: #fff;
		outline: none;
		border-radius: 20px;
		font-size: 18px;
		padding: 3px 8px;
		color: #fd4f3e;
		margin-bottom: 10px;
		margin-right: 10px;
	}
	.buttonIconNameDiv{
		margin-left: 20px;
	}
	.buttonIconName{
		border:1px solid #00c797;
		background-color: #fff;
		outline: none;
		border-radius: 20px;
		font-size: 18px;
		padding: 3px 8px;
		color: #00c797;
		margin-bottom: 15px;
	}
	.budgetDiv{
		margin-left: 20px;
		margin-bottom:15px;
	}
	.startButton{
		padding:10px 14px;
		background-color:#19aa6b;
		color:#fff;
		float:right;
	}
</style>