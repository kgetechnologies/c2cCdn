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
