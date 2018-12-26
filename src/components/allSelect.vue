<template>
  <div class="projects">
    <div class="content"> 
      <div> 
        <div class="checkbox " @click="letsGetThisFuckingCheck">
	      	<span :class="isCheckAll?'selectImg':'checkImg'"></span>
	      	<span>选择全部</span>    
	      </div>
	      <div class="search_main">
	      	<div class="search_contents">
	      		<ul>
	      			<div style="width: 100%;height: 0.01rem;"></div>
		      		<li v-for="(item, index) in tableData" :key="index" @click="check(item,index)">	
		      			<div style="margin: 0.34rem;">
			      			<div class="checkboxMain">
			      				<div class="checkboxImg"><span :class="checkbox.includes(index)?'selectImg':'checkImg'" ></span></div>
			      				<div class="checkboxTip">
			      					<span>{{item.date}}</span>
			      					<span>{{item.name}}</span>
			      				</div> 			      				
			      			</div>
			      			<div class="comSize">
			      				<span class="comSize_tip">姓名</span>
			      				<span>{{item.username}} </span>
			      			</div>
			      			<div class="comSize">
			      				<span class="comSize_tip">序号</span>
			      				<span>{{item.fact_worktime}}</span>
			      			</div>
			      			<div class="comSize">
			      				<span class="comSize_tip">时间</span>
			      				 <span style="margin-left: 0.28rem;color:#929292">{{item.verify_worktime}}</span> 
			      		 	</div>
			      			<div class="comSpan">
			      				<span class="spanTip">内容</span>
			      				<span class="spanMain">{{item.content}}</span> 
			  				</div>
		  				</div>
		  				<div class="border"></div>
	      			</li>      
	      			
	      		</ul>
	      	</div>
	      </div> 
	      <div class="sumbit"> 
	    		<div class="sum_btn">
						<button class="sum_left" type="primary" @click="sumbit">提交</button>
					</div> 
	    	</div>
    	</div> 
    	
    </div>
  </div>
</template>

<script> 
import {flex} from './flexible.js'

  export default {
    name: 'projects',
    data() {
      return { 
      	showDate:true,
      	rangeDate:true,
      	show:true,
      	date: null,
      	endate:null,
      	checkbox:[],
		    datalist:[],  
      	startdate:'',
	    	enddate:'',
        activeName: 'first',
        activeTable: true,
        stretch: true,
        search: '',
        tableData: [],
        selectData:[],
      }
    },
    computed: {

    //判断是否全部选中
    isCheckAll(){
      if((this.checkbox.length==this.tableData.length)&& this.checkbox.length >0){
        return true;
      }
      	return false;
      }
    },
    created() {  
    	this.fit();
			this.getList();  
		},
    methods: { 
      //适配
	    fit(){
	        flex();
	    },
    	//搜索
    	searchFocus(){
    		this.showDate =false;
    		this.rangeDate = false;
    	},
    	searchBtn(){
    		this.listData.startdate = '';
    		this.listData.enddate = '';
    		this.getList();
    		let self=this;
    		if(self && !self._isDestroyed) {
            setTimeout(() => {
              if (self && !self._isDestroyed)
                  this.showDate = true;
            }, 1000);
        }  
    		
    	},
    	//取消时间
    	cancel(){
    		this.show = true; 
    	},
    	//确认时间
    	confirm(){
    		if (this.listData.startdate&&this.listData.enddate) {
    			this.show = true;
    			this.rangeDate = true;
    			this.getList();
    		}else{
    			 this.$message.error('请选择时间！');
    		}
    	},
    	check(item,index){ 
	      var idx = this.checkbox.indexOf(index);
	
	      //如果已经选中了，那就取消选中，如果没有，则选中 
	      if(idx>-1){
					this.$set(item, 'checked', false);
	        this.checkbox.splice(idx,1); 
	
	      }else{
					this.$set(item, 'checked', true);
	        this.checkbox.push(index); 
	      }
	      // console.log(this.datalist)

     },
     letsGetThisFuckingCheck(){ 
      if(this.isCheckAll){ 
        this.clearCheckbox(); 
      }else{ 
        this.checkAll();
      }

    },
     //选中全部 
    checkAll(){ 
      var len = this.tableData.length; 
      this.checkbox = []; 
      for(var i=0;i<len;i++){
			this.$set(this.tableData[i], 'checked', true);
        this.checkbox.push(i);

      }
      this.datalist = this.tableData;
	     console.log(this.tableData)
    },
    clearCheckbox(){
      this.checkbox = [];
      this.datalist = [];
	    console.log(this.datalist)
    },
    	//日期选择
    	dateSelect(){
    		this.show = false
//  		this.$router.push('/dateRang')
    	},
    	//适配
	    fit(){
	        flex();
	    },
	    //查询
	    Bulr(){ 
	    	this.getList();
	    },
	    //审批列表
    	getList() {   	
	            const data = [
                {
                  username:'name1',
                  fact_worktime:2,
                  verify_worktime:3,
                  content:'1111',

                },
                {
                  username:'name2',
                  fact_worktime:2,
                  verify_worktime:3,
                  content:'222',

                },
              ]; 
	            this.tableData = data;
	            this.datalist = data;
	            this.tableData.map(item=>{ 
					      Object.assign(item,{
					          checked:false
					      })           
							})  
	            console.log(this.tableData);  
//	            console.log(data) 	         
	     },
	     handleCurrentChange(val) {
        console.log(val)
      },
      //多选
	    handleSelectionChange(val) {
	    	this.selectData = val;
        console.log(this.selectData)
     }, 
      changeType(tab, event){
      	if (tab.index == 0) {
      		this.listData.type = '1';
      		this.getList(); 
      	}else if (tab.index == 1) {
      		this.listData.type = '2';
      		this.getList();
      	}else{
      		this.listData.type = '3';
      		this.getList();
      	}
        console.log(tab.index, event);
      },
      handleClick(row) {
        // console.log(row);
      },
      //审批提交操作
      sumbit() { 
	      console.log(this.tableData);        	
		     
      },
      go(url) {
        this.$router.push(url)
      }
    },
    watch: {
      "activeName"() {
        this.activeTable = false
        setTimeout(() => {
          this.activeTable = true
        }, 300)
      }
    },
    mounted() {  
    }
  }
</script>

<style lang='less' scoped> 
*{
	-webkit-tap-highlight-color:rgba(255,0,0,0);
}
@white: white;
.projects {
  /*overflow-x: hidden;*/
  position: relative;
  background: #f7f7f7; 
  -webkit-overflow-scrolling: touch;
  width: 100%;
  font-size: 0.26rem;
  .content {
    width: 100%;
    position: relative;
    .tabs-handle {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
      background: #fff;
      .tab{
      	.el-tabs__header{
	      	margin: 0 0 1px;
	      }
      }
      
    }
    .dateRang{
    	position: fixed;
    	background: #FFFFFF;
    	height: auto;
    	top: 1.3rem;
    	width: 100%;
    	.start{
    		display: flex;
    	  display: -webkit-box;
    	  .start_tip{
	    		text-indent: 0.34rem;
	    		flex: 1;
	    		-webkit-box-flex: 1;
	    		color: #222222;
	    		font-size: 0.3rem;
	    		line-height: 3;
	    	}
	    	.start_range{
	    		width: 2.5rem;
	    	}
	    	.group{
		    	margin: 0!important; 
		    }
    	}
    	.end{
    		border-top:#EDEDED 0.01rem solid ;
    		display: flex;
    	  display: -webkit-box;
    	  .end_tip{
	    		text-indent: 0.34rem;
	    		flex: 1;
	    		-webkit-box-flex: 1;
	    		color: #222222;
	    		font-size: 0.3rem;
	    		line-height: 3;
	    	}
	    	.end_range{
	    		width: 2.5rem;
	    	}
	    	.group{
		    	margin: 0!important; 
		    }
    	} 
    	.confirm{
   			 position: fixed;
   			 left: 0;
   			 bottom: 0;
   			 z-index: 9999;
   			 width: 100%;
   			 height: 1.4rem;
   			 background: #FFFFFF;
   			.sumbitBtn{
   				width: 3.32rem;
   				height: 0.8rem;
   				line-height: 0.8rem;
   				text-align: center;
   				display: block;
   				float: left;
   				background: #FFFFFF;
   				font-size: 0.36rem;
   				color: #777777;
   				border-radius:5px ;
   				margin-right: 0.2rem;
   				cursor: pointer;
   				margin-top: 0.24rem;
   			}
   			.cancel{
   				margin-left: 0.32rem;
   				border: #EDEDED 0.01rem solid;
   			}
   		}
    }
    .data_search{
    	width: 100%;
    	height: 1rem;
    	background: @white;
    	margin-top: 45px;
    	display: flex;
    	display: -webkit-flex;
    	div{
		    -webkit-box-flex: 1;
		    -ms-flex: 1;
		    flex: 1;
		    font-size: .26rem;
    	}
    	.search{
    		margin-left: 12%;
    		input{  
    			-webkit-tap-highlight-color:rgba(255,0,0,0);
    			border: none;
    			outline:none; 
    			height: 0.7rem;
    			line-height: 0.7rem;
    			border-radius: 3px;
    			width: 60%;
    			/*float: left;*/
    			/*background-image: url(../image/search.png); 			
					background-position: 5px 4px; 				
					background-repeat: no-repeat; 		
					padding: 8px 10px 8px 40px; */
    		}
    		i{
    			float: left;
    			line-height: 1.9;
    			font-size: 0.38rem;
    			margin-right: 0.2rem;
    		}
    	}
    	.date{
    		button { 
	    		border: none;  
					outline:none; 
					color: #5094f2;
					background: @white;
					height: 0.75rem;
					/*background-image: url(../image/date.png);设置小图标 			
					background-position: 5px 4px;小图标在input的位置				
					background-repeat: no-repeat;背景小图标不重复			
					padding: 8px 10px 8px 40px;设置input内边距*/
			}
	    }
    }
    /**/
   .dateShow {
   		width: 100%;
   		height: 0.6rem;
   		background: #5094f2;
   		color: #FFFFFF;
   		line-height: 0.6rem;
   		.date_time{
   			margin-left: 0.34rem;
   		}
   		.close{
   			float: right;
   			margin-right: 0.34rem; 
		    height: 100%; 
		    text-align: center;
   		}
   		
   }
   .checkbox{
		width: 100%;
		height: 0.98rem;
		background: @white;
		font-size: 0.32rem;
		color: #222222;
		line-height: 0.98rem;
		margin: 0.3rem 0;
		.checkImg{
				background-image: url(image/noCheck.png); 			
				background-position: 0.32rem 6px; 				
				background-repeat: no-repeat; 
				background-size: 0.4rem;		
				padding: 6px 10px 8px 0.8rem; 
				
		}
		.selectImg{
				background-image: url(image/checked.png); 			
				background-position: 0.32rem 6px; 				
				background-repeat: no-repeat; 
				background-size: 0.4rem;		
				padding: 6px 10px 8px 0.8rem; 
				
		}
	} 
	.search_main{
		width: 100%;
		height: auto;
		background: #FFFFFF;
		// margin-bottom: 0.7rem;
		.search_contents{
			/*margin: 0.34rem;*/
			/*padding-bottom:0.5rem;*/
			ul,li{ 
				list-style-type:none;
				margin: 0;
				padding: 0;
			}
			.border{
				width: 100%;
				height: 0.2rem;
				background: #f7f7f7;
			}
			ul{
				/*padding-top: 0.5rem;*/
				.comSize{
					font-size: 0.32rem;
					color: #333333;
					margin-top: 0.26rem;
					margin-left: 0.7rem;
					span{
						display: block;
					}
					.comSize_tip{
						width: 1.3rem; 
						float: left;
						margin-right: 0.2rem;
						color: #929292;
					}
				}
				.comSpan{
					display: flex;
					display: -webkit-box;
					font-size: 0.3rem;
					color: #333333;
					margin-top: 0.26rem;
					margin-left: 0.7rem;
					.spanTip{
						display: block;
						width: 1.53rem; 
						color: #929292;
					}
					.spanMain{
						flex: 1;
						-webkit-box-flex: 1;
						display: block;
					}
				}
				.checkboxMain{
					font-size: 0.36rem;
					color: #222222;
					line-height: 0.62rem;
					display: flex;
					display: -webkit-flex;
					.checkboxImg{
						flex: 0 0 0.7rem;
						.checkImg{
								background-image: url(image/noCheck.png); 			
								background-position: 0rem 6px; 				
								background-repeat: no-repeat; 
								background-size: 0.4rem;		
								padding: 5px 10px 8px 0.4rem; 							
						}
						.selectImg{
								background-image: url(image/checked.png); 			
								background-position: 0rem 6px; 				
								background-repeat: no-repeat; 
								background-size: 0.4rem;		
								padding: 5px 10px 8px 0.4rem; 								
						}
					}
					.checkboxTip{
						flex: 1;
						-webkit-box-flex: 1;
					}
				}
			}
		}
	}
	.sumbit{
			background: #F7F7F7;
			width: 100%;
			height: auto;
			position: fixed;
			bottom: 0;
			z-index: 9999;
			/*display: flex;
			display: -webkit-flex;*/ 
			
			.sum_btn{   
          background: #fff!important;
				  padding: 0.24rem 0;
					button{
            background: #5094f3!important;
            color: #FFFFFF;
						border: 0;
						display: block; 
            height: 0.88rem;
            width: 5.92rem;
            border-radius: 8px; 
            background: #f5f5f5;
            font-size: 0.36rem; 
            text-align: center;
            margin: 0 auto;
            outline: none;
					    
					} 
			}			
		}
    .examine_sumbit{
    	padding-left: 20px;
    }
    .body {
      padding: 44px 20px 0 20px; 
      width: 100%;
      .search-handle {
        padding: 20px 0;
        position: relative;
        &::after {
          content: "";
          height: 1px;
          background: #e1e1e1;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
        .content {
          display: flex;
          justify-content: space-between;
          .search-box {
            width: 250px;
            &.el-input--small .el-input__icon {
              height: 32px;
              cursor: pointer;
            }
          }
          .search-btn {
            width: 136px;
            padding: 8px 20px;
          }
        }
      }
      .table-handle {
        padding: 20px 0; 
        position: relative;
        .el-table--border th {
          background-color: #e6e5e6;
        }
        .el-table thead {
          color: #222;
        }
        .useless {
          &.el-button--text {
            color: #838383;
          }
        }
      }
    }
  }
}
</style>

<style lang='less'>
.el-tabs__item {
  color: #777;
  height: 44px;
  line-height: 44px;
}
.el-tabs__nav-wrap::after {
  height: 1px;
  background-color: #e1e1e1;
}
.el-tabs__header {
  margin: 0;
}
</style>

