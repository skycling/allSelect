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
	      			<div></div>
		      		<li v-for="(item, index) in tableData" :key="index" @click="check(item,index)">	
		      			<div>
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
			      				 <span>{{item.verify_worktime}}</span> 
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
// @ts-check 
  export default {
    name: 'projects',
    data() {
      return {  
      	checkbox:[],
		    datalist:[],  
				tableData: [], 
				newArr:[]
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
			// 点击选择
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
	      console.log(this.checkbox)

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
	    //列表
    	getList() {   
					//数据 
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
	     }, 
      //提交操作
      sumbit() {
				let checked = false;//要删除的元素
				 this.newArr = this.tableData.filter((obj) => {
				  return checked !== obj.checked;
				});
				console.log(this.newArr);  
      }, 
    },
    watch: {
       
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
    /**/ 
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
		.search_contents{
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
  }
}
</style> 

