var ChartsAmcharts = function() {
			    var initChartSample1 = function() {
        var chart = AmCharts.makeChart("chart_1", {
            "theme": "light",
            "type": "serial",
            "startDuration": 2,

            "fontFamily": 'Open Sans',
            
            "color":    '#888',

            "dataProvider": window.dataChart1,
            // [{
            //     "player": "Высшая лига",
            //     "goals": 15,
            //     "color": "#FF0F00"
            // }, {
            //     "player": "Первая лига A",
            //     "goals": 10,
            //     "color": "#FF6600"
            // }, {
            //     "player": "Первая лига B",
            //     "goals": 18,
            //     "color": "#FF9E01"
            // }, {
            //     "player": "2-ая лига север",
            //     "goals": 8,
            //     "color": "#FCD202"
            // }, {
            //     "player": "2-ая лига юг",
            //     "goals": 6,
            //     "color": "#F8FF01"
            // }, {
            //     "player": "2-я лига восток",
            //     "goals": 4,
            //     "color": "#B0DE09"
            // }, {
            //     "player": "2-я лига запад",
            //     "goals": 3,
            //     "color": "#04D215"
            // }, {
            //     "player": "Fashion-лига",
            //     "goals": 9,
            //     "color": "#0D8ECF"
            // },  {
            //     "player": "Лига C",
            //     "goals": 19,
            //     "color": "#d279d2"
            // }],
            // "valueAxes": [{
            //     "position": "left",
            //     "axisAlpha": 0,
            //     "gridAlpha": 0
            // }],
            "graphs": [{
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "colorField": "color",
                "fillAlphas": 0.85,
                "lineAlpha": 0.1,
                "type": "column",
                "topRadius": 1,
                "valueField": "goals"
            }],
            "depth3D": 40,
            "angle": 30,
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "league",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "gridAlpha": 0

            },
            "exportConfig": {
                "menuTop": "20px",
                "menuRight": "20px",
                "menuItems": [{
                    "icon": '/lib/3/images/export.png',
                    "format": 'png'
                }]
            }
        }, 0);

        jQuery('.chart_1_chart_input').off().on('input change', function() {
            var property = jQuery(this).data('property');
            var target = chart;
            chart.startDuration = 0;

            if (property == 'topRadius') {
                target = chart.graphs[0];
            }

            target[property] = this.value;
            chart.validateNow();
        });

        $('#chart_1').closest('.portlet').find('.fullscreen').click(function() {
            chart.invalidateSize();
        });
    }
  
    return {
        //main function to initiate the module

        init: function() {

            initChartSample1();
        }

    };

}();

jQuery(document).ready(function() {    
   ChartsAmcharts.init(); 
});