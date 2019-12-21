	var date=new Date;
	var y = date.getFullYear()
	var m = date.getMonth() + 1
	var d = date.getDate()
	
	var myChart = echarts.init(document.getElementById('main'))
	var myChart2 = echarts.init(document.getElementById('main2'))
	var myChart3 = echarts.init(document.getElementById('main3'))
	var myChart4 = echarts.init(document.getElementById('main4'))
	
	var date_time=[],
		date_deal = [],
	    date_award=[],
	    date_terminal=[],
	    date_channel=[];
	
	var option1 = {}
	var option2 = {}
	var option3 = {}
	
	function count(arr,multiple){
        return Array.from(arr, (n) => n / multiple)
    }
	
	function content(datay,datam){
		console.log(datay[1])
		console.log(datam)
		
		date_time=[];
		date_deal = [];
	    date_award=[];
	    date_terminal=[];
	    date_channel=[];
		
		var i =0,j=0;
		
		 $.getJSON("js/month.json", function(data) {　 //each循环 使用$.each方法遍历返回的数据date
			console.log(data)
			$.each(data.detail, function(i, item) {
				        	date_time.push(item.time)
							date_deal.push(item.deal)
						    date_award.push(item.award)
						    date_terminal.push(item.terminal)
						    date_channel.push(item.channel)
				       })
			console.log(date_time)
			console.log(date_deal)
			console.log(date_award)
			console.log(date_terminal)
			console.log(date_channel)
	        var maxprice=0;
	        var aw_maxprice=0;
	        var tr_maxprice=0;
	        var ch_maxprice=0;
	        var unit = "元";
	        var aw_unit = "元";
	        var tr_unit = "元";
	        var ch_unit = "元";
	        var newarr = []
	        for(let i =1; i<date_deal.length;i++){
	        	if(date_deal[i]>=maxprice){
	        		maxprice=date_deal[i]
	        	}
	        	if(date_award[i]>=aw_maxprice){
	        		aw_maxprice=date_award[i]
	        	}
	        	if(date_terminal[i]>=tr_maxprice){
	        		tr_maxprice=date_terminal[i]
	        	}
	        	if(date_channel[i]>=ch_maxprice){
	        		ch_maxprice=date_channel[i]
	        	}
	        }
	        var i=0,j=0,k=0,l=0;
	        function judge(value,judge_array){
		        	switch(true){
			        	case value<1000:
			        		if(judge_array==1){
			        			newarr= count(date_deal_deal,1);
			        			i++
			        		}
			        		if(judge_array==2){
			        			aw_newarr= count(date_award,1);
			        			j++
			        		}
			        		if(judge_array==3){
			        			tr_newarr= count(date_terminal,1);
			        			k++
			        		}
			        		if(judge_array==4){
			        			ch_newarr= count(date_channel,1);
			        			l++
			        		}
				        	return ""; 
				        	break;
			        	case value>1000:
			        		if(judge_array==1){
			        			newarr= count(date_deal,1000);
			        			i++
			        		}
			        		if(judge_array==2){
			        			aw_newarr= count(date_award,1000);
			        			j++
			        		}
			        		if(judge_array==3){
			        			tr_newarr= count(date_terminal,1000);
			        			k++
			        		}
			        		if(judge_array==4){
			        			ch_newarr= count(date_channel,1000);
			        			l++
			        		}
				        	return "千"; 
				        	break;
				        case value>10000:
				        	if(judge_array==1){
			        			newarr= count(date_deal,10000);
			        			i++
			        		}
			        		if(judge_array==2){
			        			aw_newarr= count(date_award,10000);
			        			j++
			        		}
			        		if(judge_array==3){
			        			tr_newarr= count(date_terminal,10000);
			        			k++
			        		}
			        		if(judge_array==4){
			        			ch_newarr= count(date_channel,10000);
			        			l++
			        		}
				        	return "万"; 
				        	break;
			        	case value>1000000:
			        		if(judge_array==1){
			        			newarr= count(date_deal,1000000);
			        			i++
			        		}
			        		if(judge_array==2){
			        			aw_newarr= count(date_award,1000000);
			        			j++
			        		}
			        		if(judge_array==3){
			        			tr_newarr= count(date_terminal,1000000);
			        			k++
			        		}
			        		if(judge_array==4){
			        			ch_newarr= count(date_channel,1000000);
			        			l++
			        		}
				        	return "百万"; 
				        	break;
				        case value>100000000:
				        	if(judge_array==1){
			        			newarr= count(date_deal,100000000);
			        			i++
			        		}
			        		if(judge_array==2){
			        			aw_newarr= count(date_award,100000000);
			        			j++
			        		}
			        		if(judge_array==3){
			        			tr_newarr= count(date_terminal,100000000);
			        			k++
			        		}
			        		if(judge_array==4){
			        			ch_newarr= count(date_channel,100000000);
			        			l++
			        		}
				        	return "亿"; 
				        	break;
			        }
		        
	        }
	        console.log(maxprice)
	        unit=judge(maxprice,1)
	        aw_unit=judge(aw_maxprice,2)
	        tr_unit=judge(tr_maxprice,3)
	        ch_unit=judge(ch_maxprice,4)
	        console.log(unit)
	        console.log(newarr)
	        console.log(data.length)
	        $(".money1").text(date_deal[date_deal.length-1])
	        $(".money2").text(date_award[date_deal.length-1])
	        $(".money3").text(date_terminal[date_deal.length-1])
	        $(".money4").text(date_channel[date_deal.length-1])
	        option1 = {
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'line',
			            label: {
		                    show: true
		                }
			            
			        }
			    },
			       toolbox: {
			           feature: {
			               dataView: {show: true, readOnly: true},
			               magicType: {show: true, type: ['line', 'bar']},
			               restore: {show: true},
			               saveAsImage: {show: false}
			           }
			       },
			
			    xAxis: [
			        {
			            type: 'category',
			            axisTick: {
			                show: false
			            },
			             showMaxLabel: true,
			             data: date_time,
			             axisLabel: {
			             	interval:date_time.length-2
			             }
			        },
			         {
			            type: 'category',
			            data: date_time,
			            axisTick: {
			                show: false
			            },
			            axisLine: {
		                   lineStyle: {
		                       color: '#3093F0',
		                   }
		              },
			            scale:true,
			            show:false
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            name: '金额/'+unit+'元',
			        }
			    ],
			    series: [
			        {
			            name:'金额/'+unit,
			            type:'bar',
			            data:newarr,
			            barMaxWidth:20,
			            symbol:'none',
			            itemStyle: {
							normal: {
							// 随机显示
							//color:function(d){return “#”+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
							// 定制显示
								color: "#3093F0"
								//如果是两色交替 可以判断params.dataIndex的奇偶去设置颜色
							},
						},
						animationDelay: function (idx) {
				            return idx * 20;
				        }
			        }
			    ]
			};
			myChart.setOption(option1);
			 option2 = {
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'line',
			            label: {
		                    show: true
		                }
			            
			        }
			    },
			       toolbox: {
			           feature: {
			               dataView: {show: true, readOnly: true},
			               magicType: {show: true, type: ['line', 'bar']},
			               restore: {show: true},
			               saveAsImage: {show: false}
			           }
			       },
			
			    xAxis: [
			        {
			            type: 'category',
			            axisTick: {
			                show: false
			            },
			             showMaxLabel: true,
			             data: date_time,
			             axisLabel: {
			             	interval:date_time.length-2
			             }
			        },
			         {
			            type: 'category',
			            data: date_time,
			            axisTick: {
			                show: false
			            },
			            axisLine: {
		                   lineStyle: {
		                       color: '#3093F0',
		                   }
		              },
			            scale:true,
			            show:false
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            name: '金额/'+aw_unit+'元',
			        }
			    ],
			    series: [
			        {
			            name:'金额/'+aw_unit,
			            type:'bar',
			            data:aw_newarr,
			            barMaxWidth:20,
			            symbol:'none',
			            itemStyle: {
							normal: {
							// 随机显示
							//color:function(d){return “#”+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
							// 定制显示
								color: "#3093F0"
								//如果是两色交替 可以判断params.dataIndex的奇偶去设置颜色
							},
						},
						animationDelay: function (idx) {
				            return idx * 20;
				        }
			        }
			    ]
			};
			myChart2.setOption(option2);
			
			option3 = {
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'line',
			            label: {
		                    show: true
		                }
			            
			        }
			    },
			       toolbox: {
			           feature: {
			               dataView: {show: true, readOnly: true},
			               magicType: {show: true, type: ['line', 'bar']},
			               restore: {show: true},
			               saveAsImage: {show: false}
			           }
			       },
			
			    xAxis: [
			        {
			            type: 'category',
			            axisTick: {
			                show: false
			            },
			             showMaxLabel: true,
			             data: date_time,
			             axisLabel: {
			             	interval:date_time.length-2
			             }
			        },
			         {
			            type: 'category',
			            data: date_time,
			            axisTick: {
			                show: false
			            },
			            axisLine: {
		                   lineStyle: {
		                       color: '#3093F0',
		                   }
		              },
			            scale:true,
			            show:false
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            name: '金额/'+tr_unit+'元',
			        }
			    ],
			    series: [
			        {
			            name:'金额/'+ch_unit,
			            type:'line',
			            data:ch_newarr,
			            barMaxWidth:20,
			            symbol:'none',
			            areaStyle: {         // 颜色自上而下渐变
			                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{        // 1代表上面
			                    offset: 0,
			                    color: '#007EFF'
			                }, {
			                    offset: .5,
			                    color: '#6EB5FD'
			                }, {
			                    offset: 1,
			                    color: '#D7E8FB'
			                }]),
			                opacity: 1    // 填充区域透明度
			            },
			            itemStyle: {
							normal: {
							// 随机显示
							//color:function(d){return “#”+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
							// 定制显示
								color: "#3093F0"
								//如果是两色交替 可以判断params.dataIndex的奇偶去设置颜色
							},
						},
						animationDelay: function (idx) {
				            return idx * 20;
				        }
			        }
			    ]
			};
			myChart3.setOption(option3);
			option4 = {
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'line',
			            label: {
		                    show: true
		                }
			            
			        }
			    },
			       toolbox: {
			           feature: {
			               dataView: {show: true, readOnly: true},
			               magicType: {show: true, type: ['line', 'bar']},
			               restore: {show: true},
			               saveAsImage: {show: false}
			           }
			       },
			
			    xAxis: [
			        {
			            type: 'category',
			            axisTick: {
			                show: false
			            },
			             showMaxLabel: true,
			             data: date_time,
			             axisLabel: {
			             	interval:date_time.length-2
			             }
			        },
			         {
			            type: 'category',
			            data: date_time,
			            axisTick: {
			                show: false
			            },
			            axisLine: {
		                   lineStyle: {
		                       color: '#3093F0',
		                   }
		              },
			            scale:true,
			            show:false
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            name: '金额/'+ch_unit+'元',
			        }
			    ],
			    series: [
			        {
			            name:'金额/'+ch_unit,
			            type:'line',
			            data:ch_newarr,
			            barMaxWidth:20,
			            symbol:'none',
			            areaStyle: {         // 颜色自上而下渐变
			                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{        // 1代表上面
			                    offset: 0,
			                    color: '#007EFF'
			                }, {
			                    offset: .5,
			                    color: '#6EB5FD'
			                }, {
			                    offset: 1,
			                    color: '#D7E8FB'
			                }]),
			                opacity: 1    // 填充区域透明度
			            },
			            itemStyle: {
							normal: {
							// 随机显示
							//color:function(d){return “#”+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
							// 定制显示
								color: "#3093F0"
								//如果是两色交替 可以判断params.dataIndex的奇偶去设置颜色
							},
						},
						animationDelay: function (idx) {
				            return idx * 20;
				        }
			        }
			    ]
			};
			myChart4.setOption(option4);
	     });
	}
	content([y,m,1],[y,m,d])
	myChart.getZr().on('click', params => {
		 const pointInPixel = [params.offsetX, params.offsetY]
		  if (myChart.containPixel('grid', pointInPixel)) {
			    let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
			    $(".money1").text(date_deal[xIndex])
		   }
	})
	myChart.getZr().on('mousemove', params => {
		 const pointInPixel = [params.offsetX, params.offsetY]
		  if (myChart.containPixel('grid', pointInPixel)) {
			    let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
			    $(".money1").text(date_deal[xIndex])

		   }
	})
	
	myChart2.getZr().on('click', params => {
		 const pointInPixel = [params.offsetX, params.offsetY]
		  if (myChart.containPixel('grid', pointInPixel)) {
			    let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
			    $(".money2").text(date_award[xIndex])
		   }
	})
	myChart2.getZr().on('mousemove', params => {
		 const pointInPixel = [params.offsetX, params.offsetY]
		  if (myChart.containPixel('grid', pointInPixel)) {
			    let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
			    $(".money2").text(date_award[xIndex])

		   }
	})
	
	myChart3.getZr().on('click', params => {
		 const pointInPixel = [params.offsetX, params.offsetY]
		  if (myChart.containPixel('grid', pointInPixel)) {
			    let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
			    $(".money3").text(date_terminal[xIndex])
		   }
	})
	myChart3.getZr().on('mousemove', params => {
		 const pointInPixel = [params.offsetX, params.offsetY]
		  if (myChart.containPixel('grid', pointInPixel)) {
			    let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
			    $(".money3").text(date_terminal[xIndex])

		   }
	})
	
	myChart4.getZr().on('click', params => {
		 const pointInPixel = [params.offsetX, params.offsetY]
		  if (myChart.containPixel('grid', pointInPixel)) {
			    let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
			    $(".money4").text(date_channel[xIndex])
		   }
	})
	myChart4.getZr().on('mousemove', params => {
		 const pointInPixel = [params.offsetX, params.offsetY]
		  if (myChart.containPixel('grid', pointInPixel)) {
			    let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
			    $(".money4").text(date_channel[xIndex])

		   }
	})
	
	
	

$(".jz_date2 , .car_date2",parent.document).on("input",function(){
	console.log("Aaaaaaaaaa")
	var arr = $(this).val().split("-")
	if(arr[1]>y){
		confirm("请输入合法日期")
		$(this).val(y+"-"+m+"-"+d)
	}else if(arr[1]==y){
		if(arr[2]>m){
			confirm("请输入合法日期")
			$(this).val(y+"-"+m+"-"+d)
		}else if(arr[2]==m){
			if(arr[3]>d){
				confirm("请输入合法日期")
				$(this).val(y+"-"+m+"-"+d)
			}
		}
	}
		
	if($(".jz_date2",parent.document).val()!="开始时间"&&$(".car_date2",parent.document).val()!="结束时间"){
		var arr1 = $(".jz_date2",parent.document).val().split("-")
		var arr2 = $(".car_date2",parent.document).val().split("-")
		var days = daysBetween($(".jz_date2",parent.document).val(),$(".car_date2",parent.document).val());
		if(days<0){
			confirm("起始时间不能大于终止时间!")
		}else if(days>29){
			confirm("区间不能大于30天!")
		}else{
			console.log("aaaaaaaaaa")
			content(Array.from(arr1, (n) => parseInt(n)),Array.from(arr2, (n) => parseInt(n)))
		}
	}
})
function daysBetween(sDate1,sDate2){
	//Date.parse() 解析一个日期时间字符串，并返回1970/1/1 午夜距离该日期时间的毫秒数
	var time1 = Date.parse(new Date(sDate1));
	var time2 = Date.parse(new Date(sDate2));
	var nDays = parseInt((time2 - time1)/1000/3600/24);
	return nDays;
};