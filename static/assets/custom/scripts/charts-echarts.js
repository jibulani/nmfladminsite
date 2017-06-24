jQuery(document).ready(function() {
    // ECHARTS
    require.config({
        paths: {
            echarts: '../assets/global/plugins/echarts/'
        }
    });

    // DEMOS
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/chord',
            'echarts/chart/eventRiver',
            'echarts/chart/force',
            'echarts/chart/funnel',
            'echarts/chart/gauge',
            'echarts/chart/heatmap',
            'echarts/chart/k',
            'echarts/chart/line',
            'echarts/chart/map',
            'echarts/chart/pie',
            'echarts/chart/radar',
            'echarts/chart/scatter',
            'echarts/chart/tree',
            'echarts/chart/treemap',
            'echarts/chart/venn',
            'echarts/chart/wordCloud'
        ],
        function(ec) {
            //--- BAR ---
            var myChart = ec.init(document.getElementById('echarts_bar'));
            myChart.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: [window.homeTeam, window.guestTeam]//['ЦСКА', 'Зенит']
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {
                            show: true
                        },
                        dataView: {
                            show: true,
                            readOnly: false
                        },
                        magicType: {
                            show: true,
                            type: ['line', 'bar']
                        },
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                calculable: true,
                xAxis: [{
                    type: 'category',
                    data: window.categories
                }],
                yAxis: [{
                    type: 'value',
                    splitArea: {
                        show: true
                    }
                }],
                series: [{
                    name: window.homeTeam,
                    type: 'bar',
                    data: window.homeTeamStat
                }, {
                    name: window.guestTeam,
                    type: 'bar',
                    data: window.guestTeamStat
                }]
            });
           //['голы', 'передач', 'гол+пас', 'фол+', 'фол-', 'др+', 'др-', 'пот', 'пер', 'ств', 'мимо', 'min']
        //[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        //[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            //--- BAR ---
            // var myChart2 = ec.init(document.getElementById('echarts_leagues'));
            // myChart2.setOption({
            //     tooltip: {
            //         trigger: 'axis'
            //     },
            //     legend: {
            //         data: ['Лига 1', 'Лига 2']
            //     },
            //     toolbox: {
            //         show: true,
            //         feature: {
            //             mark: {
            //                 show: true
            //             },
            //             dataView: {
            //                 show: true,
            //                 readOnly: false
            //             },
            //             magicType: {
            //                 show: true,
            //                 type: ['line', 'bar']
            //             },
            //             restore: {
            //                 show: true
            //             },
            //             saveAsImage: {
            //                 show: true
            //             }
            //         }
            //     },
            //     calculable: true,
            //     xAxis: [{
            //         type: 'category',
            //         data: ['голы', 'передач', 'гол+пас', 'фол+', 'фол-', 'др+', 'др-', 'пот', 'пер', 'ств', 'мимо', 'min']
            //     }],
            //     yAxis: [{
            //         type: 'value',
            //         splitArea: {
            //             show: true
            //         }
            //     }],
            //     series: [{
            //         name: 'Лига 1',
            //         type: 'bar',
            //         data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            //     }, {
            //         name: 'Лига 2',
            //         type: 'bar',
            //         data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            //     }]
            // });
        }
    );
});