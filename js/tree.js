$(function() {
	require.config({
		paths: {
			echarts: 'echarts/build/dist'
		}
	});
	require(
		[
			'echarts',
			'echarts/chart/tree',
		],
		function(ec) {
			cropbarChart = ec.init(document.getElementById('tree')); //属性分析
			cropbarChart.setOption(tree());
		});
});

function tree() {
	return {
		title : {
        text: '树状图（完善中）',
//      subtext: '虚构数据'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,

    series : [
        {
            name:'树图',
            type:'tree',
            orient: 'vertical',  // vertical horizontal
            rootLocation: {x: 'center',y: 50}, // 根节点位置  {x: 100, y: 'center'}
            nodePadding: 20,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b}"
                    },
                    lineStyle: {
                        color: '#48b',
                        shadowColor: 'white',
                        shadowBlur: 5,
                        shadowOffsetX: 5,
                        shadowOffsetY: 8,
                        type: 'solid' // 'curve'|'broken'|'solid'|'dotted'|'dashed'

                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            
            data: [
                {
                    name: '根节点',
                    value: 6,
                    id:6,
                    children: [
                        {
                            name: '节点1',
                            value: 4,
                            children: [
                                {
                                    name: '叶子节点1',
                                    value: 4
                                },
                                {
                                    name: '叶子节点2',
                                    value: 4
                                },
                                {
                                    name: '叶子节点3',
                                    value: 2
                                }
                            ]
                        },
                        {
                            name: '节点2',
                            value: 4,
                            children: [{
                                name: '叶子节点7',
                                value: 4
                            },
                            {
                                name: '叶子节点8',
                                value: 4
                            }]
                        },
                        {
                            name: '节点3',
                            value: 1,
                            children: [
                                {
                                    name: '叶子节点9',
                                    value: 4
                                },
                                {
                                    name: '叶子节点10',
                                    value: 4
                                },
                                {
                                    name: '叶子节点11',
                                    value: 2
                                },
                                 {
                                    name: '叶子节点12',
                                    value: 2
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
	}
};

function createRandomItemStyle() {
	return {
		normal: {
			color: 'rgb(' + [
				Math.round(50 + Math.random() * 255),
				Math.round(50 + Math.random() * 255),
				Math.round(50 + Math.random() * 255)
			].join(',') + ')'
		}
	};
}