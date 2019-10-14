<template>
<div>
	<table class="searchTable">
		<tr class="tableRow">
			<td class="rowTitle">采购方式</td>
			<td class="checkAll"><button class="button" :class="{buttonCheck:checkFirst==999}" @click="checkFirstBtn(999,'不限')">不限</button></td>
			<td class="list">
				<ul>
					<li v-for="purchase in purchaseData"><button class="buttonList" :class="{buttonCheck:checkFirst==purchase.id}" @click="checkFirstBtn(purchase.id,purchase.name)">{{purchase.name}}</button></li>
				</ul>
			</td>
		</tr>
		<tr class="tableRow">
			<td class="rowTitle">品目</td>
			<td class="checkAll"><button class="button" :class="{buttonCheck:checkSecond==888}" @click="checkSecondBtn(888,'不限')">不限</button></td>
			<td class="list">
				<ul>
					<li v-for="item in itemData"><button class="buttonList" :class="{buttonCheck:checkSecond==item.id}" @click="checkSecondBtn(item.id,item.name)">{{item.name}}</button></li>
				</ul>
			</td>
		</tr>
		<tr class="tableRow">
			<td class="rowTitle">地区</td>
			<td class="checkAll"><button class="button" :class="{buttonCheck:checkThird==777}" @click="checkThirdBtn(777,'不限')">不限</button></td>
			<td class="list">
				<ul>
					<li><button class="buttonList" style="" :class="{buttonCheck:checkThird==1}" @click="checkThirdBtn(1,'重庆市')">重庆市</button></li>
					<li v-for="area in areaData"><button class="districtButton" :class="{districtButtonCheck:checkThird==area.id}" @click="checkThirdBtnBy(area.id,area.name)">{{area.name}}  <svg t="1568548300979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="921" width="16" height="16"><path d="M811.818 296h82.183a8 8 0 0 1 5.968 13.327L535.862 717.31c-0.803 0.9-1.657 1.754-2.557 2.558-13.178 11.772-33.4 10.626-45.167-2.558L124.031 309.327A8 8 0 0 1 129.999 296h82.183a16 16 0 0 1 11.937 5.346L512 623.918l287.88-322.572A16 16 0 0 1 811.819 296z" p-id="922" fill="#4b4b4b"></path></svg></button></li>
				</ul>
				<div class="showDistrictList" v-if="showDistrict">
					<ul>
						<li><button class="buttonList" :class="{buttonCheck:checkDistrict==666}" @click="checkDistrictBtn(666,'不限')">不限</button></li>
						<li v-for="district in districtData"><button class="buttonListByD" :class="{buttonCheck:checkDistrict==district.id}" @click="checkDistrictBtn(district.id,district.name)">{{district.name}}</button></li>
					</ul>
				</div>
			</td>
		</tr>
	</table>

	<table class="serachInputStyle">
		<tr>
			<td class="searchTitle">
				<div>已发布公告</div>
				<div style="color:#fd4f3e">（{{boticesTotal}}）</div>
			</td>
			<td class="searchInput">
				<input type="text" name="buyerName" placeholder="采购人" class="purchaseInput" v-model="buyerName" @keyup.enter="submitSearch">
			</td>
			<td style="width:170px;position: relative;">
				<div>
					<span class="RMBStyleOne">¥</span>
					<input type="text"  name="minProjectBudget"  placeholder="最低金额"  class="minMoneyInput" v-model="minProjectBudget"       @keyup.enter="submitSearch">
					<span class="RMBStyleTwo">元</span>
				</div>
			</td>
			<td style="width:16px;text-align:center"><span>-</span></td>
			<td style="width:170px;position: relative;">
				<div>
					<span class="RMBStyleOne">¥</span>
					<input type="text"  name="maxProjectBudget"  placeholder="最高金额"  class="minMoneyInput"  v-model="maxProjectBudget"      @keyup.enter="submitSearch">
					<span class="RMBStyleTwo">元</span>
				</div>
			</td>
			<td style="width:20px">
				<div style="height:40px;border-right:1px solid #bcbcbc"></div>
			</td>
			<td style="padding-left:20px;padding-right:10px;width:90px">
				<span>展开方式</span>
			</td>
			<td style="padding-top:6px;">
				<svg style="cursor: pointer;" @click="changeListOne()" :class="{changeList:changeOne==true}" t="1568645714269" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2018" width="32" height="32"><path d="M475.09702 413.787164c0 40.939411-33.497928 74.437339-74.437339 74.437339L136.096143 488.224504c-40.940434 0-74.437339-33.497928-74.437339-74.437339L61.658803 137.960095c0-40.939411 33.495882-74.437339 74.437339-74.437339l264.565585 0c40.939411 0 74.437339 33.496905 74.437339 74.437339L475.09702 413.787164 475.09702 413.787164z" p-id="2019" fill="#666666"></path><path d="M475.09702 886.052185c0 40.940434-33.497928 74.435293-74.437339 74.435293L136.096143 960.487477c-40.940434 0-74.437339-33.494858-74.437339-74.435293l0-275.821953c0-40.940434 33.495882-74.435293 74.437339-74.435293l264.565585 0c40.939411 0 74.437339 33.495882 74.437339 74.435293L475.09702 886.052185 475.09702 886.052185z" p-id="2020" fill="#666666"></path><path d="M958.619432 413.787164c0 40.939411-33.495882 74.437339-74.437339 74.437339L619.603205 488.224504c-40.942481 0-74.436316-33.497928-74.436316-74.437339L545.166889 137.960095c0-40.939411 33.495882-74.437339 74.436316-74.437339l264.580934 0c40.940434 0 74.436316 33.496905 74.436316 74.437339L958.619432 413.787164z" p-id="2021" fill="#666666"></path><path d="M958.623525 886.052185c0 40.940434-33.497928 74.435293-74.437339 74.435293L619.604228 960.487477c-40.941458 0-74.436316-33.494858-74.436316-74.435293l0-275.821953c0-40.940434 33.495882-74.435293 74.436316-74.435293l264.581957 0c40.940434 0 74.437339 33.495882 74.437339 74.435293L958.623525 886.052185z" p-id="2022" fill="#666666"></path></svg>
			</td>
			<td style="padding-top:6px;">
				<svg style="cursor: pointer;" @click="changeListTwo()" :class="{changeList:changeTwo==true}" t="1568646048226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2246" width="32" height="32"><path d="M192 224c0 35.36-28.64 64-64 64L64 288C28.64 288 0 259.36 0 224L0 160c0-35.36 28.64-64 64-64l64 0c35.36 0 64 28.64 64 64L192 224z" p-id="2247" fill="#666666"></path><path d="M192 544c0 35.328-28.64 64-64 64L64 608c-35.36 0-64-28.672-64-64l0-64c0-35.36 28.64-64 64-64l64 0c35.36 0 64 28.64 64 64L192 544z" p-id="2248" fill="#666666"></path><path d="M192 864c0 35.328-28.64 64-64 64L64 928c-35.36 0-64-28.672-64-64l0-64c0-35.36 28.64-64 64-64l64 0c35.36 0 64 28.64 64 64L192 864z" p-id="2249" fill="#666666"></path><path d="M1024 224c0 35.36-28.64 64-64 64L384 288c-35.36 0-64-28.64-64-64L320 160c0-35.36 28.64-64 64-64l576 0c35.36 0 64 28.64 64 64L1024 224z" p-id="2250" fill="#666666"></path><path d="M1024 544c0 35.328-28.64 64-64 64L384 608c-35.36 0-64-28.672-64-64l0-64c0-35.36 28.64-64 64-64l576 0c35.36 0 64 28.64 64 64L1024 544z" p-id="2251" fill="#666666"></path><path d="M1024 864c0 35.328-28.64 64-64 64L384 928c-35.36 0-64-28.672-64-64l0-64c0-35.36 28.64-64 64-64l576 0c35.36 0 64 28.64 64 64L1024 864z" p-id="2252" fill="#666666"></path></svg>
			</td>
		</tr>
	</table>

	<div v-if="showIconData">
	<div class="bodyStyle">
		<div v-for="(notices,index) in noticesData" class="iconBody" :class="{iconBodyForth: (index+1)%4 == 0}">
			<div class="noticesTitle" :title="notices.title">{{notices.title}}</div>
			<button class="buttonIcon" style="margin-left:20px">{{notices.districtName}}</button>
			<button class="buttonIcon">{{notices.projectPurchaseWay}}</button>
			<div class="buttonIconNameDiv"><button class="buttonIconName">{{notices.projectDirectoryName}}</button></div>
			<div class="budgetDiv">
				<span style="color:#808996;font-size:14px;">预算金额： </span>
				<span style="color:#d63c00;font-size:20px;">¥{{notices.projectBudget}}</span>
			</div>
			<div class="budgetDiv">
				<span style="color:#808996;">发布时间： </span>
				<span style="color:#808996;">{{timeArray[index].issueTimeName}}</span>
			</div>
			<div style="background-color:#f8f8f8;overflow:hidden">
				<div style="overflow:hidden">
					<div style="float:left">
						<svg style="margin-top:20px;margin-left:5px" t="1568728492699" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3343" width="24" height="24"><path d="M752.63 344.2l40.83-40.83a21.33 21.33 0 0 0-30.17-30.17l-40.84 40.84a322.29 322.29 0 0 0-65.78-44.93 21.35 21.35 0 1 0-19.33 38.08 276.2 276.2 0 0 1 152 247.46C789.33 707.58 664.92 832 512 832S234.67 707.58 234.67 554.67 359.08 277.33 512 277.33A21.32 21.32 0 0 0 533.33 256v-64h64a21.33 21.33 0 1 0 0-42.67H426.67a21.33 21.33 0 1 0 0 42.67h64v43.75C324.16 246.8 192 385.41 192 554.67c0 176.46 143.54 320 320 320s320-143.54 320-320a318.36 318.36 0 0 0-79.37-210.47z" p-id="3344" fill="#2e2e02"></path><path d="M512 405.33a21.32 21.32 0 0 0-21.33 21.33v128a21.33 21.33 0 0 0 42.67 0v-128A21.32 21.32 0 0 0 512 405.33z" p-id="3345" fill="#2e2e02"></path></svg>
					</div>
					<div class="starIcon">距离投标开始：</div>
					<div class="startButton">即将开始</div>
				</div>
				<div style="margin:20px 0px;overflow:hidden;margin-right:12px">
					<div class="clockStyle">秒</div>
					<div class="clockNumberStyle">{{timeArray[index].secondTwo}}</div>
					<div class="clockNumberStyle">{{timeArray[index].secondOne}}</div>
					<div class="clockStyle">分</div>
					<div class="clockNumberStyle">{{timeArray[index].minuteTwo}}</div>
					<div class="clockNumberStyle">{{timeArray[index].minuteOne}}</div>
					<div class="clockStyle">时</div>
					<div class="clockNumberStyle">{{timeArray[index].hourTwo}}</div>
					<div class="clockNumberStyle">{{timeArray[index].hourOne}}</div>
					<div class="clockStyle">天</div>
					<div class="clockNumberStyle">{{timeArray[index].dayTwo}}</div>
					<div v-if="timeArray[index].dayOne !=''" class="clockNumberStyle">{{timeArray[index].dayOne}}</div>
				</div>
				<div class="footWatchStyle">{{notices.hits}}次围观</div>
			</div>
		</div>
	</div>
	</div>

	<div v-if="showListData">
		<div class="bodyListTable" >
			<tr class="tableRowList" v-for="(notices,index) in noticesData">
				<td class="bodyListTd">
					<div style="float:left">
						<div class="noticesListTitle">{{notices.title}}</div>
						<div style="margin-bottom:15px">
							<span style="color:#808996;font-size:14px;">预算金额： </span>
							<span style="color:#d63c00;font-size:20px;">¥{{notices.projectBudget}}</span>
							<span>&nbsp;&nbsp;</span>
							<span style="color:#808996;font-size:14px;">包数量： </span>
							<span>{{notices.packageNum}} </span>
							<span style="color:#808996;font-size:14px;">采购人： </span>
							<span>{{notices.buyerName}} </span>
						</div>
						<div>
							<button class="buttonIcon">{{notices.districtName}}</button>
							<button class="buttonIcon">{{notices.projectPurchaseWay}}</button>
							<button class="buttonIconName">{{notices.projectDirectoryName}}</button>
						</div>
					</div>
					<div style="float:right">
						<button class="buttonListNew">项目追踪</button>
					</div>
				</td>
				<td class="bodyListTdOther">
					<div style="overflow:hidden;">
						<div style="float:left">
							<svg style="margin-top:20px;margin-left:5px" t="1568728492699" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3343" width="24" height="24"><path d="M752.63 344.2l40.83-40.83a21.33 21.33 0 0 0-30.17-30.17l-40.84 40.84a322.29 322.29 0 0 0-65.78-44.93 21.35 21.35 0 1 0-19.33 38.08 276.2 276.2 0 0 1 152 247.46C789.33 707.58 664.92 832 512 832S234.67 707.58 234.67 554.67 359.08 277.33 512 277.33A21.32 21.32 0 0 0 533.33 256v-64h64a21.33 21.33 0 1 0 0-42.67H426.67a21.33 21.33 0 1 0 0 42.67h64v43.75C324.16 246.8 192 385.41 192 554.67c0 176.46 143.54 320 320 320s320-143.54 320-320a318.36 318.36 0 0 0-79.37-210.47z" p-id="3344" fill="#2e2e02"></path><path d="M512 405.33a21.32 21.32 0 0 0-21.33 21.33v128a21.33 21.33 0 0 0 42.67 0v-128A21.32 21.32 0 0 0 512 405.33z" p-id="3345" fill="#2e2e02"></path></svg>
						</div>
						<div class="starIconList">距离投标开始：</div>
						<div class="startButton">即将开始</div>
						<div style="margin-top:60px;margin-left:10px;clear:both;">
							<div v-if="timeArray[index].dayOne !=''" class="clockNumberListStyle">{{timeArray[index].dayOne}}</div>
							<div class="clockNumberListStyle">{{timeArray[index].dayTwo}}</div>
							<div class="clockListStyle">天</div>
							<div class="clockNumberListStyle">{{timeArray[index].hourOne}}</div>
							<div class="clockNumberListStyle">{{timeArray[index].hourTwo}}</div>
							<div class="clockListStyle">时</div>
							<div class="clockNumberListStyle">{{timeArray[index].minuteOne}}</div>
							<div class="clockNumberListStyle">{{timeArray[index].minuteTwo}}</div>
							<div class="clockListStyle">分</div>
							<div class="clockNumberListStyle">{{timeArray[index].secondOne}}</div>
							<div class="clockNumberListStyle">{{timeArray[index].secondTwo}}</div>
							<div class="clockListStyle">秒</div>
						</div>
					</div>
					<div class="watchAndIssueTime">
						<div style="float:left">{{notices.hits}}次围观</div>
						<div style="float:right">
							<span>发布时间： </span>
							<span>{{timeArray[index].issueTimeName}}</span>
						</div>
					</div>
				</td>
			</tr>
		</div>
	</div>

	<div class="pagingBody">
		<div class="pagingLeft">共<span style="color:#d63c00">{{totalNumber}}</span>条[每页<span style="color:#808080">{{pagerNumber}}</span>条]</div>
		<div class="pagingRight">
			<div class="buttonActive" :class="{buttonProhibit:currentPage == 1}"  @click="goToFirst()">首页</div>
			<div class="buttonActive" :class="{buttonProhibit:currentPage == 1}" @click="goToPrev()">上一页</div>
			<div class="buttonActive" :class="{buttonActiveCheck:currentPage == paginationOne}" @click="skipPage(paginationOne)">{{paginationOne}}</div>
			<div class="buttonActive"  v-if="lastPage >= 2" :class="{buttonActiveCheck:currentPage == paginationTwo}" @click="skipPage(paginationTwo)">{{paginationTwo}}</div>
			<div class="buttonActive"  v-if="lastPage >= 3" :class="{buttonActiveCheck:currentPage == paginationThree}" @click="skipPage(paginationThree)">{{paginationThree}}</div>
			<div class="buttonActive" :class="{buttonProhibit:currentPage == lastPage}"  @click="goToNext()">下一页</div>
			<div class="buttonActive" :class="{buttonProhibit:currentPage == lastPage}"  @click="goToLast()">末页</div>
		</div>
	</div>

</div>
</template>

<script>
export default {
	data(){
		return{
			checkFirst:999,			//第一列搜索选定
			checkSecond:888,		//第二列搜索选定
			checkThird:777,			//第三列搜索选定（仅限‘不限’和‘重庆市’）
			checkDistrict:666,		//绑定分区ID，按区搜索
			districtData:[],		//定义分区数据对象数组
			showDistrict:false,		//是否展示分区信息
			purchaseData:[{			//定义采购方式数据对象数组
				id:1,
				name:'竞争性磋商'
			},
			{
				id:2,
				name:'竞争性谈判'
			},
			{
				id:3,
				name:'询价采购'
			},
			{
				id:4,
				name:'邀请招标'
			},
			{
				id:5,
				name:'电子询价'
			},
			{
				id:6,
				name:'公开招标'
			},
			{
				id:7,
				name:'单一来源'
			}],
			itemData:[{			//定义品目数据对象数组
				id:1,
				name:'货物类'
			},
			{
				id:2,
				name:'工程类'
			},
			{
				id:3,
				name:'服务类'
			}],
			areaData:[{			//定义地区数据对象数组
				id:2,
				name:'主城九区'
			},
			{
				id:3,
				name:'渝东北地区'
			},
			{
				id:4,
				name:'渝东南地区'
			},
			{
				id:5,
				name:'渝西地区'
			}],
			changeOne:true,			//图标格式
			changeTwo:false,		//列表格式
			noticesData:[],			//公告数据
			boticesTotal:0,			//公告总条数
			purchaseName:'不限',		//采购方式名称(初始化，搜索全部数据)
			itemName:'不限',			//品目名称(初始化，搜索全部数据)
			areaName:'不限',			//地区名称(初始化，搜索全部数据)
			districtName:'不限',		//分地区名称(初始化，搜索全部数据(但在展开分区前无效))
			buyerName:'',				//采购人
			minProjectBudget:'',		//最小金额
			maxProjectBudget:'',		//最大金额
			timeObjest:{},				//设置一个时间对象，用来装载时间对象
			timeArray:[],				//放置一页数组对象，用于倒计时
			currentTime:'',				//存当前时间
			paginationOne:1,			//设置分页第一个页码
			paginationTwo:2,			//设置分页第二个页码
			paginationThree:3,			//设置分页第三个页码
			pagerNumber:4,				//设置每页条数
			totalNumber:'',				//设置总条数
			currentPage:1,				//设置当前页数
			lastPage:'',				//设置最后一夜
			showIconData:true,
			showListData:false,
		}
	},
	components:{
	},
	mounted(){
		this.getNotices();
		setInterval(this.changeTimeStyle,1000);
	},
	methods:{
		checkFirstBtn(num,name){
			this.checkFirst = num;
			this.purchaseName = name;
			this.currentPage = 1;		//重新赋值，因为数据发生变化（数据重新筛选）
			this.getNotices();
		},
		checkSecondBtn(num,name){
			this.checkSecond = num;
			this.itemName = name;
			this.currentPage = 1;		//重新赋值，因为数据发生变化（数据重新筛选）
			this.getNotices();
		},
		checkThirdBtn(num,name){
			this.checkThird = num;
			this.areaName = name;
			this.showDistrict = false;
			this.currentPage = 1;		//重新赋值，因为数据发生变化（数据重新筛选）
			this.getNotices();
		},
		checkThirdBtnBy(num,name){
			this.checkThird = num;
			this.areaName = name;
			this.getDistrict(name);
			this.currentPage = 1;		//重新赋值，因为数据发生变化（数据重新筛选）
			this.getNotices();
		},
		checkDistrictBtn(num,name){
			this.checkDistrict = num;
			this.districtName = name;
			this.currentPage = 1;		//重新赋值，因为数据发生变化（数据重新筛选）
			this.getNotices();
		},
		getDistrict(str){
			this.districtData = [];
			this.$ajax.get('http://localhost:8080/static/districts.json').then((res)=>{
				for (var i = 0; i <res.data.length; i++) {
					if(res.data[i].flag == str){
						this.districtData.push(res.data[i]);
					}
				}
				//初始设置分区按钮为不限，防止因分区之间跳转而没有选中按钮且数据筛选出错（会默认前一个分区的地区选择）
				this.checkDistrict = 666;
				this.districtName = '不限';
				this.showDistrict = true;
			})
		},
		changeListOne(){
			this.changeOne = true;
			this.changeTwo = false;
			this.showIconData = true;
			this.showListData = false;
		},
		changeListTwo(){
			this.changeOne = false;
			this.changeTwo = true;
			this.showIconData = false;
			this.showListData = true;
		},
		submitSearch(){
			this.currentPage = 1;	//重新赋值，因为数据发生变化（数据重新筛选）
			this.getNotices();
		},

		//图标部分的方法
		getNotices(){
			this.noticesData = [];
			this.timeArray = [];
			this.$ajax.get('http://localhost:8080/static/notices.json').then((res)=>{

				this.totalNumber = 0;

				this.boticesTotal = res.data.total;

				for (var i = 0; i < res.data.notices.length; i++) {
					if(this.purchaseName != '不限'){
						if(this.purchaseName != res.data.notices[i].projectPurchaseWay){
							continue;
						}
					}
					if(this.itemName != '不限'){
						if(this.itemName != res.data.notices[i].projectDirectoryName){
							continue;
						}
					}
					if(this.areaName != '不限'){
						if(this.areaName != res.data.notices[i].flagName){
							continue;
						}
					}
					//防止筛选其他区级后districtName回不到初始设置（且未展示时不需要筛选）
					if(this.districtName != '不限' && this.showDistrict == true){
						if(this.districtName != res.data.notices[i].districtName){
							continue;
						}
					}

					if(this.buyerName != ''){
						if(this.buyerName != res.data.notices[i].buyerName){
							continue;
						}
					}
					if(this.minProjectBudget != ''){
						if(this.minProjectBudget > res.data.notices[i].projectBudget){
							continue;
						}
					}
					if(this.maxProjectBudget != ''){
						if(this.maxProjectBudget < res.data.notices[i].projectBudget){
							continue;
						}
					}

					if(res.data.notices[i].projectBudget && res.data.notices[i].projectBudget!=null){
				        var money = String(res.data.notices[i].projectBudget);
				        var left=money.split('.')[0],right=money.split('.')[1];
				        right = right ? (right.length>=2 ? '.'+right.substr(0,2) : '.'+right+'0') : '.00';
				        var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
				        res.data.notices[i].projectBudget = (Number(money)<0?"-":"") + temp.join(',').split('').reverse().join('')+right;
				    }else if(res.data.notices[i].projectBudget===0){ 
				        res.data.notices[i].projectBudget =  '0.00';
				    }

					var startNotices = (this.currentPage -1) * this.pagerNumber;	//获取起始下标
					var endNotices = this.currentPage * this.pagerNumber -1;

					if( this.totalNumber >= startNotices && this.totalNumber <= endNotices){
						this.noticesData.push(res.data.notices[i])

						this.timeObjest.bidBeginTime = res.data.notices[i].bidBeginTime;
						this.timeObjest.issueTime = res.data.notices[i].issueTime;
						this.timeArray.push(this.timeObjest);
						this.timeObjest = {};
					}
					this.totalNumber = this.totalNumber + 1;
				}

				this.lastPage = Math.ceil(this.totalNumber/this.pagerNumber);

				this.changeTimeStyle();

			})
		},
		changeTimeStyle(){
			this.currentTime = new Date().getTime();
			var time = "";
			var issueDate = "";
			var second = "";	//倒计时 秒
			var day ="";		//倒计时 天
			var hour ="";		//倒计时 时
			var minute = "";	//倒计时 分
			for (var i = 0; i < this.timeArray.length; i++) {
				issueDate = (Math.ceil((this.currentTime - this.timeArray[i].issueTime)/1000/60/60));
				if( issueDate < 24){
					this.timeArray[i].issueTimeName = issueDate + "小时前";
				}
				else{
					time = new Date(this.timeArray[i].issueTime);
					this.timeArray[i].issueTimeName = this.changeIssueTime(time.getMonth()+1)+"-"+this.changeIssueTime(time.getDate());
				}

				if((this.timeArray[i].bidBeginTime - this.currentTime) < 0){
					second = 0;
					minute = 0;
					hour = 0;
					day = 0;
				}
				else{
					second = Math.floor((this.timeArray[i].bidBeginTime - this.currentTime) / 1000);
					day = Math.floor(second / 86400);
					second = second % 86400;
					hour = Math.floor(second / 3600);
					second = second % 3600;
					minute = Math.floor(second / 60);
					second = second % 60;
				}

				var newTime = this.timeArray[i];

				if(second < 10){
					newTime.secondOne = 0;
					newTime.secondTwo = second;
				}
				else{
					newTime.secondOne = second.toString().substring(0,1);
					newTime.secondTwo = second.toString().substring(1);
				}
				if(minute < 10){
					newTime.minuteOne = 0;
					newTime.minuteTwo = minute;
				}
				else{
					newTime.minuteOne = minute.toString().substring(0,1);
					newTime.minuteTwo = minute.toString().substring(1);
				}
				if(hour < 10){
					newTime.hourOne = 0;
					newTime.hourTwo = hour;
				}
				else{
					newTime.hourOne = hour.toString().substring(0,1);
					newTime.hourTwo = hour.toString().substring(1);
				}
				if(day < 10){
					newTime.dayOne = '';
					newTime.dayTwo = day;
				}
				else{
					newTime.dayOne = day.toString().substring(0,1);
					newTime.dayTwo = day.toString().substring(1);
				}

				this.timeArray.splice(i,1,newTime);
			}

		},
		changeIssueTime(num){
			if(num < 10){
				return "0"+num;
			}
			else{
				return num;
			}
		},

		//分页方法
		goToFirst(){
			if(this.currentPage != 1){
				this.currentPage = 1;
				this.paginationOne = 1;
				this.paginationTwo = 2;
				this.paginationThree = 3;

				this.getNotices();
			}
		},
		goToPrev(){
			if(this.currentPage != 1){
				this.currentPage = this.currentPage - 1;
				if(this.currentPage == 1){
					this.paginationOne = 1;
					this.paginationTwo = 2;
					this.paginationThree = 3;
				}
				else{
					this.paginationOne = this.currentPage - 1;
					this.paginationTwo = this.currentPage;
					this.paginationThree = this.currentPage + 1;
				}

				this.getNotices();
			}
		},
		goToNext(){
			if(this.currentPage != this.lastPage){
				this.currentPage = this.currentPage +1;
				if(this.currentPage == this.lastPage){
					if(this.lastPage == 2){
						this.paginationOne = this.lastPage - 1;
						this.paginationTwo = this.lastPage ;
					}
					else{
						this.paginationOne = this.lastPage - 2;
						this.paginationTwo = this.lastPage - 1;
						this.paginationThree = this.lastPage;
					}
				}else{
					this.paginationOne = this.currentPage - 1;
					this.paginationTwo = this.currentPage ;
					this.paginationThree = this.currentPage + 1;
				}

				this.getNotices();
			}
		},
		goToLast(){
			if(this.currentPage != this.lastPage){
				this.currentPage = this.lastPage;
				if(this.lastPage == 2){
					this.paginationOne = this.lastPage - 1;
					this.paginationTwo = this.lastPage ;
				}
				else{
					this.paginationOne = this.lastPage - 2;
					this.paginationTwo = this.lastPage - 1;
					this.paginationThree = this.lastPage;
				}

				this.getNotices();
			}
		},
		skipPage(page){
			if(this.currentPage != page){
				this.currentPage = page;
				if(page == 1){
					this.paginationOne = 1;
					this.paginationTwo = 2;
					this.paginationThree = 3;
				}
				else if(page == this.lastPage){
					if(this.lastPage == 2){
						this.paginationOne = this.lastPage - 1;
						this.paginationTwo = this.lastPage ;
					}
					else{
						this.paginationOne = this.lastPage - 2;
						this.paginationTwo = this.lastPage - 1;
						this.paginationThree = this.lastPage;
					}
				}
				else{
					this.paginationOne = page - 1;
					this.paginationTwo = page;
					this.paginationThree = page + 1;
				}

				this.getNotices();
			}
		}



	}

}
</script>

<style type="text/css">
.searchTable{
	margin:20px auto;
	border: 1px solid #bcbcbc;
	width: 1300px;
	/*height: 100%;
	min-height: 400px;*/
	height: auto;
	font-size: 18px;
	border-collapse:collapse;
	/*background-color: #F2F1F1;*/
}
.tableRow{
	border-bottom: 1px dotted #ddd;
	width:100%;
	height: auto;
	min-height: 100px;
	vertical-align:top;
}
.rowTitle{
	background-color: #f6f6f6;
	padding-top: 20px;
	padding-left: 10px;
	color: #999999;
	width: 180px;
}
.checkAll{
	width: 120px;
	color: #4b4b4b;
	padding: 18px auto auto auto;
}
.button{
	border:1px solid #efefef;
	background-color: #efefef;
	margin: 18px auto auto 30px;
	outline: none;
	border-radius: 20px;
	font-size: 18px;
	padding: 3px 8px;
	cursor: pointer;
}
.buttonList{
	border:1px solid #fff;
	background-color: #fff;
	margin-left: 25px;
  	margin-bottom:20px;
	outline: none;
	border-radius: 20px;
	font-size: 18px;
	padding: 3px 8px;
	cursor: pointer;
}
.buttonListByD{
	border:1px solid #fcfcfc;
	background-color: #fcfcfc;
	margin-left: 25px;
  	margin-bottom:20px;
	outline: none;
	border-radius: 20px;
	font-size: 18px;
	padding: 3px 8px;
	cursor: pointer;
}
.buttonCheck{
	border:1px solid #fd4f3e;
	background-color: #ffedeb;
	color: #fd4f3e;
}
.districtButton{
	border:1px solid #fff;
	background-color: #fff;
	margin-left: 25px;
  	margin-bottom:20px;
	outline: none;
	font-size: 18px;
	padding: 3px 8px;
	cursor: pointer;
	z-index: 999;
}
.districtButtonCheck{
	border: 1px solid #b4b4b4;
	border-bottom: 1px solid #fcfcfc;
	background-color: #fcfcfc;
	padding: 3px 8px 4px 8px;
}
.list{
	/*width: 850px;*/
	padding-top:18px;
}
.list ul{
	width: 997px;
	list-style:none;
	margin: 0;
	padding: 0
}
.list ul li{
	white-space: nowrap;
	color: #4b4b4b;
	display: inline-block;
	text-overflow: ellipsis;
	min-width: 150px;
}
.showDistrictList{
	border: 1px solid #b4b4b4;
	margin-bottom:10px;
	margin-left: 10px;
	margin-top: -21px;
	width: 975px;
	background-color: #fcfcfc;
	min-height: 100px;
	padding-top:18px;
}
.showDistrictList ul{
	width: 975px;
	list-style:none;
	margin: 0;
	padding: 0
}
.showDistrictList ul li{
	white-space: nowrap;
	color: #4b4b4b;
	display: inline-block;
	text-overflow: ellipsis;
	min-width: 130px;
}

/* 输入框部分的样式*/
.serachInputStyle{
	margin:0 auto;
	border: 1px solid #bcbcbc;
	width: 1300px;
	height: 68px;
	font-size: 18px;
	border-collapse:collapse;
}
.searchTitle{
	border-right:1px solid #bcbcbc;
	padding-top:10px;
	padding-bottom:10px;
	text-align: center;
	color: #4b4b4b;
	width: 178px;
}
.searchInput{
	padding-top: 15px;
	padding-bottom: 15px;
	padding-left: 15px;
	width: 460px;
}
.purchaseInput{
	width:430px;
	border-radius:5px;
	height:34px;
	padding-left:15px;
	border:1px solid #bcbcbc;
}
.minMoneyInput{
	width:120px;
	border-radius:5px;
	height:34px;
	padding-left:20px;
	padding-right:26px;
	border:1px solid #bcbcbc;
	line-height: 34px;
}
.RMBStyleOne{
	float: left;
	z-index:5;
	position: absolute;
	left: 7px;
	top: 21px;
	color:#b54b53;
}
.RMBStyleTwo{
	float: right;
	z-index:5;
	position: absolute;
	right: 7px;
	top: 21px;
	color:#b54b53;
}
.changeList{

}
.changeList path{
	fill:#fd4f3e;
}

/*图标部分的样式*/
.bodyStyle{
		margin:20px auto;
		/*border: 1px solid #bcbcbc;*/
		width: 1300px;
		/*height: 100%;*/
		min-height: 400px;
		height: auto;
		font-size: 18px;
	}
	.iconBody{
		display: inline-block;
		width: 312px;
		min-height: 100px;
		border: 1px solid #dadada;
		margin-right: 15px;
		margin-bottom: 15px;
		box-shadow: #dadada 0px 0px 3px;
	}
	.iconBodyForth{
		display: inline-block;
		width: 311px;
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
	.starIcon{
		float:left;
		height:30px;
		margin-top:20px;
	}
	.startButton{
		padding:10px 14px;
		background-color:#19aa6b;
		color:#fff;
		float:right;
	}
	.clockStyle{
		display:inline-block;
		padding:10px 0px;
		float:right;
	}
	.clockNumberStyle{
		display:inline-block;
		background-color:#272822;
		color:#fff;
		padding:7px 7px;
		margin-right:2px;
		border-radius:5px;
		float:right;
	}
	.footWatchStyle{
		color:#808996;
		text-align:center;
		margin-bottom:10px;
	}

/*分页样式*/
	.pagingBody{
		width:1300px;
		margin:10px auto;
		overflow:hidden
	}
	.pagingLeft{
		float:left;
		margin-top:10px
	}
	.pagingRight{
		float:right;
		border: 1px solid #dadada;
		border-radius:5px;
	}
	.buttonActive{
		display:inline-block;
		padding:10px 15px;
		color:#337ab7;
		border-right:1px solid #dadada;
		cursor: pointer;
	}
	.buttonProhibit{
		color:#777777;
		cursor: not-allowed;
	}
	.buttonActiveCheck{
		color: #fff;
		background-color: #337ab7;
	}

/*列表样式*/
	.bodyListTable{
		margin:20px auto;
		border: 1px solid #bcbcbc;
		width: 1300px;
		height: auto;
		font-size: 18px;
		border-collapse:collapse;
	}
	.noticesListTitle{
		font-family: SimHei;
		overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0 20px 15px 0;
        font-size: 20px;
	}
	.tableRowList{
		border-bottom: 1px solid #dedede;
		width:100%;
		height: auto;
		min-height: 100px;
		vertical-align:top;
	}
	.bodyListTd{
		width:830px;
		padding:20px 30px 10px 20px;
		border-right:1px dashed #bbbfc4;
		overflow:hidden;
	}
	.buttonListNew{
		outline:none;
		border:1px solid #337ab7;
		background-color:#337ab7;
		color:#fff;
		padding:10px 15px;
		border-radius:20px
	}
	.bodyListTdOther{
		width:419px;
		background-color: #f8f8f8;
		overflow:hidden;
	}
	.clockListStyle{
		display:inline-block;
		padding:10px 0px;
	}
	.clockNumberListStyle{
		display:inline-block;
		background-color:#272822;
		color:#fff;
		padding:7px 7px;
		margin-right:2px;
		border-radius:5px;
	}
	.starIconList{
		float:left;
		height:30px;
		width: 200px;
		margin-top:20px;
	}
	.watchAndIssueTime{
		margin:20px 10px 10px 10px;
		overflow:hidden;
		color:#808996;
	}
</style>