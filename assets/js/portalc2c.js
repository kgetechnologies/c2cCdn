     $(document).ready(function () {
        var handleFileSelect = function (evt) {
            var files = evt.target.files;
            var file = files[0];

            if (files && file) {
                var reader = new FileReader();

                reader.onload = function (readerEvt) {
                    var binaryString = readerEvt.target.result;
                    var data = btoa(binaryString);
                    var profileId = document.getElementById('_ProfileId').value;
                    var fileExtn = file.name.split('.').pop().toLowerCase();
                    $.ajax({
                        url: "/File/UploadFile",
                        method: "POST",
                        data: {
                            Base64String: data,
                            ProfileId: profileId,
                            Extn: fileExtn
                        },
                        success: function (data) {
                            //alert(data.FileId);
                            if (data != null && data.FileId != null) {                                
                                var textBoxToUpdate = document.getElementById('fieldtoUpdate').value;								
                                $("." + textBoxToUpdate).val(data.FileId);
								$("#fileClose").click();
                            }
                            else {
                                $('#preview').after('<p class="filealert">Error Occured: ' + data.ErrorMessage + ' </p>');
                            }
                        },
                        error: function (data) {
                            //alert(data);
                            $('#preview').after('<p class="filealert">Error Occured</p>' + data);
                        }
                    });

                };

                reader.readAsBinaryString(file);
            }
        };

        // if (window.File && window.FileReader && window.FileList && window.Blob) {
        if (document.getElementById('filePicker')!=null)
        document.getElementById('filePicker').addEventListener('change', handleFileSelect, false);	
        //} else {
        //    alert('The File APIs are not fully supported in this browser.');
        //}

        $(".btnModalPopup").click(function () {
            var forField = this.getAttribute("upload-field");
            document.getElementById('fieldtoUpdate').value = forField;
			$('.filealert').empty();
        });
    });

   $(document).ready(function () {
        $('#kt_datatable_2').DataTable(
            {
                "aLengthMenu": [[5, 10], [5, 10]],
                "iDisplayLength": 5
            }
        );

    });
    $(document).ready(function () {
        $('#kt_datatable_3').DataTable(
            {
                "aLengthMenu": [[5, 10], [5, 10]],
                "iDisplayLength": 5
            }
        );
    });
	 $(document).ready(function () {
        $('#kt_datatable_77').DataTable(
            {
                "aLengthMenu": [[5, 10,15], [5, 10,15]],
                "iDisplayLength": 10
            }
        );
    });
    $(document).ready(function () {
        $('#kt_datatable_4').DataTable(
            {
                "aLengthMenu": [[5, 10], [5, 10]],
                "iDisplayLength": 5
            }
        );
    });
    $(document).ready(function () {
        $('#kt_datatable_5').DataTable(
            {
                "aLengthMenu": [[5, 10], [5, 10]],
                "iDisplayLength": 5
            }
        );
    });
    $(document).ready(function () {
        $('table.display').dataTable(
            {
                "aLengthMenu": [[5, 10], [5, 10]],
                "iDisplayLength": 5
            }
        );
    });

    $(document).ready(function () {
        $('.select2').select2(
            {
                placeholder: "Select your choice"
            });

    });
    $(document).ready(function () {
        $(".scroll").click(function (event) {
            $('html,body,li').animate({ scrollTop: $(this.hash).offset().top }, 500);
        });
    });
