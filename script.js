$(document).ready(function () {
    $('#example').DataTable({
      ajax: 'http://localhost:3306/',
      "columns": [
        { "data": "id" },
        { "data": "cname" },
        { "data": "date" },
        { "data": "total" },
        { "data": "status" },
        {
          "data": null,
          "defaultContent": '<i class="bx bxs-edit" data-mdb-toggle="modal" data-mdb-target="#updateModal"/>',
          "orderable": false
        },
        {
          "data": null,
          "defaultContent": '<a class="delete"><i class="bx bx-x-circle"/></a>',
          "orderable": false
        }
      ]
    });
  });
  