var TableDatatablesEditable = function () {


    var handleTable = function () {

    	function getCookie(name) {
    		var cookieValue = null;
    		if (document.cookie && document.cookie !== '') {
        		var cookies = document.cookie.split(';');
        		for (var i = 0; i < cookies.length; i++) {
            		var cookie = jQuery.trim(cookies[i]);
            		// Does this cookie string begin with the name we want?
            		if (cookie.substring(0, name.length + 1) === (name + '=')) {
                		cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
               			break;
            		}
        		}
    		}
    		return cookieValue;
		}

		function csrfSafeMethod(method) {
    		// these HTTP methods do not require CSRF protection
    		return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
		}

		

        function saveAjax(formData)
        {
        	var csrftoken = getCookie('csrftoken');
            var method = 'POST';

            $.ajaxSetup({
            	beforeSend: function(xhr, settings) {
        			if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            			xhr.setRequestHeader("X-CSRFToken", csrftoken);
        			}
    			}
                // headers: {
                //     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                // }
            });
            $.ajax({
                data: formData,
                dataType: 'json',
                type: method,
                url: '/leagues/',
                success: function (response) {
                    if (!response.error && method == 'POST')
                    {
                    	console.log('ok');
                        //adding ids in new row                      
                        //$('tr').find('td [data-id =""]').attr('data-id', response.id);
                    }

                },
                /*error: function (data) {
                 console.log('Error:', data);
                 }*/
            });
        }

        function deleteAjax(dataId, url)
        {
        	var csrftoken = getCookie('csrftoken');

            $.ajaxSetup({
                beforeSend: function(xhr, settings) {
        			if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            			xhr.setRequestHeader("X-CSRFToken", csrftoken);
        			}
    			}
            });
            $.ajax({
                dataType: 'json',
                type: 'DELETE',
                url: '/edit_delete_league/' + dataId,
                success: function (data) {
                    console.log(data);
                },
                error: function (data) {
                    console.log('Error:', data);
                }
            });
        }

 		function editAjax(id, formData)
        {
            var method = 'POST';
            var csrftoken = getCookie('csrftoken');

            $.ajaxSetup({
            	beforeSend: function(xhr, settings) {
        			if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            			xhr.setRequestHeader("X-CSRFToken", csrftoken);
        			}
    			}
                // headers: {
                //     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                // }
            });
            $.ajax({
                data: formData,
                dataType: 'json',
                type: method,
                url: '/edit_delete_league/' + id + '/',
                success: function (response) {
                    if (!response.error && method == 'POST')
                    {
                    	console.log('ok');
                        //adding ids in new row                      
                        //$('tr').find('td [data-id =""]').attr('data-id', response.id);
                    }
                    else {
                    	console.log(response.error);
                    }

                },
                /*error: function (data) {
                 console.log('Error:', data);
                 }*/
            });    
        }

        function restoreRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);

            for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                oTable.fnUpdate(aData[i], nRow, i, false);
            }

            oTable.fnDraw();
        }

        function editRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);
            var dataId = $('.edit', nRow).attr('data-id');
            jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
			jqTds[1].innerHTML = '<select id="sport_list" class="form-control input-small teams"><option disabled selected value="0">Выбрать</option><option value="1">Волейбол</option><option value="2">Футбол</option><option value="3">Мини-футбол</option></select>';
			jqTds[2].innerHTML = '<select id="type_list" class="form-control input-small teams"><option disabled selected value="0">Выбрать</option><option value="1">Студенческий</option><option value="2">Молодежный</option></select>';
            if (dataId !== undefined) {
            	jqTds[4].innerHTML = '<a class="edit" data-id="' + dataId + '" href="">Сохранить</a>';
            }
            else {
            	jqTds[4].innerHTML = '<a class="edit" href="">Сохранить</a>';
            }
            jqTds[5].innerHTML = '<a class="cancel" href="">Отмена</a>';
			    if (dataId !== undefined) {
                jqTds[3].innerHTML =  'Сначала сохраните..';
            }
            else {
                jqTds[3].innerHTML = 'Сначала сохраните..';
            }
        }

        function saveRow(oTable, nRow) {
            var jqInputs = $('input', nRow);
			var sport = $("#sport_list :selected").text();
			var type = $("#type_list :selected").text();
            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
			oTable.fnUpdate(sport, nRow, 1, false);
			oTable.fnUpdate(type, nRow, 2, false);
			oTable.fnUpdate('<a href="">Добавить лигу</a>', nRow, 3, false);
            oTable.fnUpdate('<a class="edit" href="">Редактировать</a>', nRow, 4, false);
            //init_confirmation();
            oTable.fnUpdate('<button class="btn red-mint delete" data-toggle="confirmation" data-placement="left" data-btn-ok-label="Удалить" data-btn-ok-icon="icon-like" data-btn-ok-class="btn-success" data-btn-cancel-label="Отмена"data-btn-cancel-icon="icon-close" data-btn-cancel-class="btn-danger" href="javascript:;"> Удалить </button>', nRow, 5, false);
            $('[data-toggle=confirmation]').confirmation({
                rootSelector: '[data-toggle=confirmation]'
            });

            $('[data-toggle=confirmation]').confirmation({onConfirm: function(event){
                var nRow = $(this).parents('tr')[0];
                oTable.fnDeleteRow(nRow);
            }});

            oTable.fnDraw();
        }

        function cancelEditRow(oTable, nRow) {
            var jqInputs = $('input', nRow);
            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
            oTable.fnUpdate('<a class="edit" href="">Редактировать</a>', nRow, 1, false);
            oTable.fnUpdate('<a href="">Добавить команду</a>', nRow, 3, false);
            oTable.fnDraw();
        }
	        function validateData(nRow)
        {
            $(this, '.help-block').remove();
            var errors = false;
            $('.help-block', nRow).remove();
            if ($('input:text', nRow).val() == "")
            {
                $('input:text', nRow).css('border-color', '#e73d4a')
                        .after('<span class="help-block">Поле должно быть заполнено!</span>');
                errors = true;
            }
            return errors;
        }

        var table = $('#sample_editable_1');

        var oTable = table.dataTable({

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
            // So when dropdowns used the scrollable div should be removed. 
            //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "Все"] // change per page values here
            ],

            // Or you can use remote translation file
            //"language": {
            //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
            //},

            // set the initial value
            "pageLength": 5,

                  "language": {
                      "aria": {
                    "sortAscending": ": активировать для сортировки столбца по возрастанию",
                    "sortDescending": ": активировать для сортировки столбца по убыванию"
                },
                "processing": "Подождите...",
                "search": "Поиск:",
                "lengthMenu": "Показать _MENU_ записей",
                "info": "Записи с _START_ до _END_ из _TOTAL_ записей",
                "infoEmpty": "Записи с 0 до 0 из 0 записей",
                "infoFiltered": "(отфильтровано из _MAX_ записей)",
                "infoPostFix": "",
                "loadingRecords": "Загрузка записей...",
                "zeroRecords": "Записи отсутствуют.",
                "emptyTable": "В таблице отсутствуют данные",
                "paginate": {
                    "first": "Первая",
                    "previous": "Предыдущая",
                    "next": "Следующая",
                    "last": "Последняя"
                }
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

            var aiNew = oTable.fnAddData(['', '', '', '']);
            var nRow = oTable.fnGetNodes(aiNew[0]);
            editRow(oTable, nRow);
            nEditing = nRow;
            nNew = true;
        });

        table.on('click', '.delete', function (e) {
            // $('[data-toggle=confirmation]').confirmation({
            //     rootSelector: '[data-toggle=confirmation]'
            // });

            // $('[data-toggle=confirmation]').confirmation({onConfirm: function(event){
            //         alert('Hello');
            //         var nRow = $(this).parents('tr')[0];
            //         oTable.fnDeleteRow(nRow);
            //     }});

            // $('[data-toggle=confirmation]').confirmation(onConfirm = function(){
            //     var nRow = $(this).parents('tr')[0];
            //     oTable.fnDeleteRow(nRow);
            // });
            var dataId = $(this).attr('data-id');
            $(this).confirmation("show");
            if(e.target){
                //console.log(e.target.children);
                var nRow = $(this).parents('tr')[0];
                oTable.fnDeleteRow(nRow);
            }
            deleteAjax(dataId);
			//location.reload(true);
            //alert('Hello');
            // e.preventDefault();

            // if (confirm("Are you sure to delete this row ?") == false) {
            //     return;
            // }

            // var nRow = $(this).parents('tr')[0];
            // oTable.fnDeleteRow(nRow);
            // alert("Deleted! Do not forget to do some ajax to sync with backend :)");
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
            var id = $(this).attr('data-id');
            // var id = $(this).attr('data-id');
            // if (id) {
            // 	var aData = oTable.fnGetData(nRow);
            // 	var formData = {
            // 		league: aData[0],
            // 	}
            	
            //     editAjax(id, formData);
            //     return;
            // }
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
				       table.on('click', '.cancel', function (e) {
                    e.preventDefault();
                    oTable.fnDeleteRow(nRow);
                });
				     if (!validateData(nEditing))
                {
                saveRow(oTable, nEditing);
                var jqInputs = $('input', nRow);
                var aData = oTable.fnGetData(nRow);
                var formData = {
                    tournament: aData[0],
					sport:sport,
					type:type
                };
             
                if (id !== undefined) {
                	editAjax(id, formData);
                	
            	}
            	else {
            		saveAjax(formData);
            	}
                nEditing = null;
			    $('.alert-danger').css('display','none');
                location.reload(true);
				}
				else{
					$('.alert-danger').css('display','block');
				}
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