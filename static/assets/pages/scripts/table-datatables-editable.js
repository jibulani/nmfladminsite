
var TableDatatablesEditable = function () {

	function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    include("../assets/global/plugins/bootstrap-confirmation/bootstrap-confirmation.min.js");
	
    var handleTable = function () {

        function restoreRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);

            for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                oTable.fnUpdate(aData[i], nRow, i, false);
            }

            oTable.fnDraw();
        }
 

        function editRow(oTable, nRow) {
			//alert("error");
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);
            //jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
            var teams = ['ЦСКА', 'Зенит', 'Спартак', 'Локомотив'];
			jqTds[0].innerHTML = '<select id="home_teams" name="order_status" class="form-control input-small"><option>-----</option><option value="ЦСКА">ЦСКА</option><option value="Арсенал">Арсенал</option></select>';
            jqTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
            jqTds[2].innerHTML = '<select id="payment_types" name="order_status" class="form-control input-small"><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';// + aData[2];	
			//jqTds[2].innerHTML = '<input list="payment_types" class="form-control input-small"><datalist //id="payment_types"><option>Наличные</option><option>Безналичные</option></datalist>';
			//jqTds[2].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[2] + '">';
            jqTds[3].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[3] + '">';
			//jqTds[3].innerHTML = '<div class="input-group date date-picker margin-bottom-5" data-date-format="dd/mm/yyyy"><input type="text" class="form-control form-filter input-sm" readonly name="product_created_from" placeholder="From"><span class="input-group-btn"><button class="btn btn-sm default" type="button"><i class="fa fa-calendar"></i></button></span></div>'
			//jqTds[4].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[4] + '">';
			var home_teams = document.getElementById("home_teams");
			var selected_home_team = home_teams.options[home_teams.selectedIndex].text;
			if (selected_home_team !== "-----") {
				var allowed_guest_teams = teams.slice().splice(teams.indexOf(selected_home_team), 1);
				var guest_options = '<option>-----</option>';
				for (var i = 0; i < allowed_guest_teams.length; i++) {
					guest_options += '<option value="' + allowed_guest_teams[i] + '">' + allowed_guest_teams[i] + '</option>'
				}
				alert(guest_options);
			}
			jqTds[4].innerHTML = '<select id="guest_teams" name="order_status" class="form-control input-small"><option value="ЦСКА">ЦСКА</option><option value="Арсенал">Арсенал</option></select>';
			jqTds[5].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[5] + '">';
			//jqTds[6].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[6] + '">';
			jqTds[6].innerHTML = '<select id="payment_types_guest" name="order_status" class="form-control input-small"><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			//jqTds[7].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[7] + '">';
			jqTds[7].innerHTML = '<select id="referees" name="order_status" class="form-control input-small"><option value="Самойлов">Самойлов</option><option value="Безруков">Безруков</option></select>';
			//jqTds[8].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[8] + '">';
			jqTds[8].innerHTML = '<select id="payment_types_referee" name="order_status" class="form-control input-small"><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			//jqTds[9].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[9] + '">';
			jqTds[9].innerHTML = '<select id="photo" name="order_status" class="form-control input-small"><option value=""></option><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			//jqTds[10].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[10] + '">';
			jqTds[10].innerHTML = '<select id="video" name="order_status" class="form-control input-small"><option value=""></option><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			//jqTds[11].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[11] + '">';
			jqTds[11].innerHTML = '<select id="video_edit" name="order_status" class="form-control input-small"><option value=""></option><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			//jqTds[12].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[12] + '">';
			jqTds[12].innerHTML = '<select id="fields" name="order_status" class="form-control input-small"><option value="Лужники">Лужники</option><option value="Олимпийский">Олимпийский</option></select>';
			//jqTds[13].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[13] + '">';
			jqTds[13].innerHTML = '<select id="doctor" name="order_status" class="form-control input-small"><option value=""></option><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			jqTds[14].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[14] + '">';
			//jqTds[15].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[15] + '">';
			jqTds[15].innerHTML = '<select id="payment_types_other" name="order_status" class="form-control input-small"><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			jqTds[16].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[16] + '">';
            jqTds[17].innerHTML = '<a class="edit" href="">Сохранить</a>';
            jqTds[18].innerHTML = '<a class="cancel" href="">Отменить</a>';
			//alert(jqTds[2].innerHTML);
        }

        function newEditRow(oTable, nRow, guest_options) {
			//alert("error");
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);
            //jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
            var teams = ['ЦСКА', 'Зенит', 'Спартак', 'Локомотив'];
			jqTds[0].innerHTML = '<select id="home_teams" name="order_status" class="form-control input-small"><option>-----</option><option value="ЦСКА">ЦСКА</option><option value="Арсенал">Арсенал</option></select>';
            jqTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
            jqTds[2].innerHTML = '<select id="payment_types" name="order_status" class="form-control input-small"><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';// + aData[2];	
			//jqTds[2].innerHTML = '<input list="payment_types" class="form-control input-small"><datalist //id="payment_types"><option>Наличные</option><option>Безналичные</option></datalist>';
			//jqTds[2].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[2] + '">';
            jqTds[3].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[3] + '">';
			//jqTds[3].innerHTML = '<div class="input-group date date-picker margin-bottom-5" data-date-format="dd/mm/yyyy"><input type="text" class="form-control form-filter input-sm" readonly name="product_created_from" placeholder="From"><span class="input-group-btn"><button class="btn btn-sm default" type="button"><i class="fa fa-calendar"></i></button></span></div>'
			//jqTds[4].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[4] + '">';
			// var home_teams = document.getElementById("home_teams");
			// var selected_home_team = home_teams.options[home_teams.selectedIndex].text;
			// if (selected_home_team !== "-----") {
			// 	var allowed_guest_teams = teams.slice().splice(teams.indexOf(selected_home_team), 1);
			// 	var guest_options = '<option>-----</option>';
			// 	for (var i = 0; i < allowed_guest_teams.length; i++) {
			// 		guest_options += '<option value="' + allowed_guest_teams[i] + '">' + allowed_guest_teams[i] + '</option>'
			// 	}
			// 	alert(guest_options);
			// }
			jqTds[4].innerHTML = guest_options;
			jqTds[5].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[5] + '">';
			//jqTds[6].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[6] + '">';
			jqTds[6].innerHTML = '<select id="payment_types_guest" name="order_status" class="form-control input-small"><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			//jqTds[7].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[7] + '">';
			jqTds[7].innerHTML = '<select id="referees" name="order_status" class="form-control input-small"><option value="Самойлов">Самойлов</option><option value="Безруков">Безруков</option></select>';
			//jqTds[8].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[8] + '">';
			jqTds[8].innerHTML = '<select id="payment_types_referee" name="order_status" class="form-control input-small"><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			//jqTds[9].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[9] + '">';
			jqTds[9].innerHTML = '<select id="photo" name="order_status" class="form-control input-small"><option value=""></option><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			//jqTds[10].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[10] + '">';
			jqTds[10].innerHTML = '<select id="video" name="order_status" class="form-control input-small"><option value=""></option><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			//jqTds[11].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[11] + '">';
			jqTds[11].innerHTML = '<select id="video_edit" name="order_status" class="form-control input-small"><option value=""></option><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			//jqTds[12].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[12] + '">';
			jqTds[12].innerHTML = '<select id="fields" name="order_status" class="form-control input-small"><option value="Лужники">Лужники</option><option value="Олимпийский">Олимпийский</option></select>';
			//jqTds[13].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[13] + '">';
			jqTds[13].innerHTML = '<select id="doctor" name="order_status" class="form-control input-small"><option value=""></option><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			jqTds[14].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[14] + '">';
			//jqTds[15].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[15] + '">';
			jqTds[15].innerHTML = '<select id="payment_types_other" name="order_status" class="form-control input-small"><option value="Наличные">Наличные</option><option value="Безналичные">Безналичные</option></select>';
			jqTds[16].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[16] + '">';
            jqTds[17].innerHTML = '<a class="edit" href="">Сохранить</a>';
            jqTds[18].innerHTML = '<a class="cancel" href="">Отменить</a>';
			//alert(jqTds[2].innerHTML);
        }

        function saveRow(oTable, nRow) {
			//alert("error");
            var jqInputs = $('input', nRow);
            //$('.delete').load('.confirmation');
            var teams = ['ЦСКА', 'Зенит', 'Спартак', 'Локомотив'];
			//var e = document.getElementById("payment_types");
			//var payment_type = e.options[e.selectedIndex].text;
			var home_team = $("#home_teams").val(); 
			var guest_team = $("#guest_teams").val();
			if (home_team == guest_team) {
				alert(home_team);
				var team_index = teams.indexOf(home_team);
				alert(team_index);
				var allowed_guest_teams = teams.slice();
				allowed_guest_teams.splice(team_index, 1);
				var guest_options = '<option>-----</option>';
				for (var i = 0; i < allowed_guest_teams.length; i++) {
					guest_options += '<option value="' + allowed_guest_teams[i] + '">' + allowed_guest_teams[i] + '</option>'
				}
				guest_options = '<select id="guest_teams" name="order_status" class="form-control input-small">' + guest_options + '</select>';
				return newEditRow(oTable, nRow, guest_options)
			}
			var payment_type = $("#payment_types").val();
			var payment_type_guest = $("#payment_types_guest").val();
			var referee = $("#referees").val();
			var payment_type_referee = $("#payment_types_referee").val();
			var payment_type_other = $("#payment_types_other").val();
			var photo = $("#photo").val();
			var video = $("#video").val();
			var video_edit = $("#video_edit").val();
			var field = $("#fields").val();
			var doctor = $("#doctor").val();
			oTable.fnUpdate(home_team, nRow, 0, false);
            oTable.fnUpdate(jqInputs[0].value, nRow, 1, false);
			oTable.fnUpdate(payment_type, nRow, 2, false);
            //oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 3, false);
            //oTable.fnUpdate(jqInputs[3].value, nRow, 4, false);
			oTable.fnUpdate(guest_team, nRow, 4, false);
			oTable.fnUpdate(jqInputs[2].value, nRow, 5, false);
			oTable.fnUpdate(payment_type_guest, nRow, 6, false);
            //oTable.fnUpdate(jqInputs[5].value, nRow, 6, false);
            //oTable.fnUpdate(jqInputs[5].value, nRow, 7, false);
			oTable.fnUpdate(referee, nRow, 7, false);
			oTable.fnUpdate(payment_type_referee, nRow, 8, false);
            //oTable.fnUpdate(jqInputs[6].value, nRow, 9, false);
			oTable.fnUpdate(photo, nRow, 9, false);
			//oTable.fnUpdate(jqInputs[7].value, nRow, 10, false);
			oTable.fnUpdate(video, nRow, 10, false);
            //oTable.fnUpdate(jqInputs[8].value, nRow, 11, false);
			oTable.fnUpdate(video_edit, nRow, 11, false);
            //oTable.fnUpdate(jqInputs[9].value, nRow, 12, false);
			oTable.fnUpdate(field, nRow, 12, false);
            //oTable.fnUpdate(jqInputs[10].value, nRow, 13, false);
			oTable.fnUpdate(doctor, nRow, 13, false);
			oTable.fnUpdate(jqInputs[3].value, nRow, 14, false);
			oTable.fnUpdate(payment_type_other, nRow, 15, false);
            //oTable.fnUpdate(jqInputs[13].value, nRow, 14, false);
            //oTable.fnUpdate(jqInputs[14].value, nRow, 15, false);
            oTable.fnUpdate(jqInputs[4].value, nRow, 16, false);
			//oTable.fnUpdate(jqInputs[16].value, nRow, 16, false);
            oTable.fnUpdate('<a class="edit" href="">Редактировать</a>', nRow, 17, false);
            include("../assets/global/plugins/bootstrap-confirmation/bootstrap-confirmation.min.js");
            oTable.fnUpdate('<script src="../assets/global/plugins/bootstrap-confirmation/bootstrap-confirmation.min.js" type="text/javascript"></script><button class="btn red-mint delete" data-toggle="confirmation" data-placement="left" data-btn-ok-label="Continue" data-btn-ok-icon="icon-like" data-btn-ok-class="btn-success" data-btn-cancel-label="Stoooop!"data-btn-cancel-icon="icon-close" data-btn-cancel-class="btn-danger">Удалить</button>', nRow, 18, false);
            oTable.fnDraw();
        }

        function cancelEditRow(oTable, nRow) {
			var jqInputs = $('input', nRow);
			//var e = document.getElementById("payment_types");
			//var payment_type = e.options[e.selectedIndex].text;
			var home_team = $("#home_teams").val(); 
			var guest_team = $("#guest_teams").val();
			var payment_type = $("#payment_types").val();
			var payment_type_guest = $("#payment_types_guest").val();
			var referee = $("#referees").val();
			var payment_type_referee = $("#payment_types_referee").val();
			var payment_type_other = $("#payment_types_other").val();
			var photo = $("#photo").val();
			var video = $("#video").val();
			var video_edit = $("#video_edit").val();
			var field = $("#fields").val();
			var doctor = $("#doctor").val();
			oTable.fnUpdate(home_team, nRow, 0, false);
            oTable.fnUpdate(jqInputs[0].value, nRow, 1, false);
			oTable.fnUpdate(payment_type, nRow, 2, false);
            //oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
			oTable.fnUpdate(jqInputs[1].value, nRow, 3, false);
            //oTable.fnUpdate(jqInputs[3].value, nRow, 4, false);
			oTable.fnUpdate(guest_team, nRow, 4, false);
			oTable.fnUpdate(jqInputs[2].value, nRow, 5, false);
			oTable.fnUpdate(payment_type_guest, nRow, 6, false);
            //oTable.fnUpdate(jqInputs[5].value, nRow, 6, false);
            //oTable.fnUpdate(jqInputs[5].value, nRow, 7, false);
			oTable.fnUpdate(referee, nRow, 7, false);
			oTable.fnUpdate(payment_type_referee, nRow, 8, false);
            //oTable.fnUpdate(jqInputs[6].value, nRow, 9, false);
			oTable.fnUpdate(photo, nRow, 9, false);
			//oTable.fnUpdate(jqInputs[7].value, nRow, 10, false);
			oTable.fnUpdate(video, nRow, 10, false);
            //oTable.fnUpdate(jqInputs[8].value, nRow, 11, false);
			oTable.fnUpdate(video_edit, nRow, 11, false);
            //oTable.fnUpdate(jqInputs[9].value, nRow, 12, false);
			oTable.fnUpdate(field, nRow, 12, false);
            //oTable.fnUpdate(jqInputs[10].value, nRow, 13, false);
			oTable.fnUpdate(doctor, nRow, 13, false);
			oTable.fnUpdate(jqInputs[3].value, nRow, 14, false);
			oTable.fnUpdate(payment_type_other, nRow, 15, false);
            //oTable.fnUpdate(jqInputs[13].value, nRow, 14, false);
            //oTable.fnUpdate(jqInputs[14].value, nRow, 15, false);
            oTable.fnUpdate(jqInputs[4].value, nRow, 16, false);
			//oTable.fnUpdate(jqInputs[16].value, nRow, 16, false);
            oTable.fnUpdate('<a class="edit" href="">Редактировать</a>', nRow, 17, false);
            oTable.fnDraw();
        }

        //var table = $('#sample_editable_1');
		var table = $('#match_table');

        var oTable = table.dataTable({

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
            // So when dropdowns used the scrollable div should be removed. 
            //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],

            // Or you can use remote translation file
            //"language": {
            //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
            //},

            // set the initial value
            "pageLength": 5,

            "language": {
                "lengthMenu": " _MENU_ records"
            },
            "columnDefs": [{ // set default column settings
                'orderable': true,
                'targets': [0]
            }, {
                "searchable": true,
                "targets": [0]
            }],
            "order": [
                [0, "asc"]
            ] // set first column as a default sort by asc
        });

        var tableWrapper = $("#sample_editable_1_wrapper");

        var nEditing = null;
        var nNew = false;

        $('#sample_editable_1_new').click(function (e) {
            e.preventDefault();

            if (nNew && nEditing) {
                if (confirm("Previose row not saved. Do you want to save it ?")) {
                    saveRow(oTable, nEditing); // save
                    $(nEditing).find("td:first").html("Untitled");
                    nEditing = null;
                    nNew = false;

                } else {
                    oTable.fnDeleteRow(nEditing); // cancel
                    nEditing = null;
                    nNew = false;
                    
                    return;
                }
            }

            var aiNew = oTable.fnAddData(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
            var nRow = oTable.fnGetNodes(aiNew[0]);
            editRow(oTable, nRow);
            nEditing = nRow;
            nNew = true;
        });

        table.on('click', '.delete', function (e) {
            e.preventDefault();
            //$(this).load('.confirmation');
            if (confirm("Are you sure to delete this row ?") == false) {
                return;
            }

            var nRow = $(this).parents('tr')[0];
            oTable.fnDeleteRow(nRow);
            alert("Deleted! Do not forget to do some ajax to sync with backend :)");
        });

        table.on('click', '.cancel', function (e) {
            e.preventDefault();
            if (nNew) {
                oTable.fnDeleteRow(nEditing);
                nEditing = null;
                nNew = false;
            } else {
                restoreRow(oTable, nEditing);
                nEditing = null;
            }
        });

        table.on('click', '.edit', function (e) {
            e.preventDefault();
            nNew = false;
            
            /* Get the row as a parent of the link that was clicked on */
            var nRow = $(this).parents('tr')[0];

            if (nEditing !== null && nEditing != nRow) {
                /* Currently editing - but not this row - restore the old before continuing to edit mode */
                restoreRow(oTable, nEditing);
                editRow(oTable, nRow);
                nEditing = nRow;
            } else if (nEditing == nRow && this.innerHTML == "Сохранить") {
                /* Editing this row and want to save it */
                saveRow(oTable, nEditing);
                nEditing = null;
                alert("Updated! Do not forget to do some ajax to sync with backend :)");
            } else {
                /* No edit in progress - let's start one */
                editRow(oTable, nRow);
                nEditing = nRow;
            }
        });
    }

    return {

        //main function to initiate the module
        init: function () {
            handleTable();
        }

    };

}();

jQuery(document).ready(function() {
    TableDatatablesEditable.init();
});