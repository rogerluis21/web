// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//     "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll(".needs-validation");

//   // Loop over them and prevent submission
//     Array.from(forms).forEach((form) => {
//     form.addEventListener(
//     "submit",
//     (event) => {
//         if (!form.checkValidity()) {
//         event.preventDefault();
//         event.stopPropagation();
//         }

//         form.classList.add("was-validated");
//     },
//         false
//     );
//     });
// })();



// $(document).ready(function() {
//     let acuerdoCount = 0; // Contador para los acuerdos

//     $('#guardarAcuerdo').click(function() {
//         var fecha = $('#fecha').val();
//         var responsable = $('#responsable').val();
//         var estado = $('#estado').val();
//         var descripcion = $('#descripcion').val();

//         if (fecha && responsable && descripcion) {
//             acuerdoCount++; // Incrementar el contador de acuerdos

//             var nuevoAcuerdo = '<tr>' +
//                                 '<td>' + acuerdoCount + '</td>' +
//                                 '<td>' + fecha + '</td>' +
//                                 '<td>' + responsable + '</td>' +
//                                 '<td>' + estado + '</td>' +
//                                 '<td>' + descripcion + '</td>' +
//                                 '<td>' +
//                                     '<button class="btn btn-danger btn-sm mr-2">Eliminar</button>' +
//                                     '<button class="btn btn-secondary btn-sm">Modificar</button>' +
//                                 '</td>' +
//                             '</tr>';

//             $('#acuerdosTabla').append(nuevoAcuerdo);
//             $('#formAcuerdo')[0].reset();
//             $('#nuevoAcuerdoModal').modal('hide'); // Ocultar el modal usando Bootstrap
//         }
//     });

//     $('#acuerdosTabla').on('click', '.btn-danger', function() {
//         $(this).closest('tr').remove();
//     });

//     $('#btnAgregar').click(function (e) {
//         e.preventDefault();
//         $('#nuevoAcuerdoModal').modal('show'); // Mostrar el modal usando Bootstrap
//     });



//         // Manejar el cierre del modal cuando se hace clic en el botón "Cerrar"
//         $('#btnCerrarModal').click(function(e) {
//             e.preventDefault();
//             $('#nuevoAcuerdoModal').modal('hide'); // Ocultar el modal usando Bootstrap
//         });
    
//         // Manejar el cierre del modal cuando se hace clic en el botón "Cerrar" en la cabecera del modal
//         $('.close').click(function(e) {
//             e.preventDefault();
//             $('#nuevoAcuerdoModal').modal('hide'); // Ocultar el modal usando Bootstrap
//         });
// });



// $(document).ready(function() {
//     let acuerdoCount = 0; // Contador para los acuerdos

//     $('#guardarAcuerdo').click(function() {
//         var form = $('#formAcuerdo')[0];
//         if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//         } else {
//             var fecha = $('#fecha').val();
//             var responsable = $('#responsable').val();
//             var estado = $('#estado').val();
//             var descripcion = $('#descripcion').val();

//             if (fecha && responsable && descripcion) {
//                 acuerdoCount++; // Incrementar el contador de acuerdos

//                 var nuevoAcuerdo = '<tr>' +
//                                     '<td>' + acuerdoCount + '</td>' +
//                                     '<td>' + fecha + '</td>' +
//                                     '<td>' + responsable + '</td>' +
//                                     '<td>' + estado + '</td>' +
//                                     '<td>' + descripcion + '</td>' +
//                                     '<td>' +
//                                         '<button class="btn btn-danger btn-sm mr-2">Eliminar</button>' +
//                                         '<button class="btn btn-secondary btn-sm">Modificar</button>' +
//                                     '</td>' +
//                                 '</tr>';

//                 $('#acuerdosTabla').append(nuevoAcuerdo);
//                 $('#formAcuerdo')[0].reset();
//                 $('#nuevoAcuerdoModal').modal('hide'); // Ocultar el modal usando Bootstrap
//             }
//         }
//         form.classList.add('was-validated');
//     });

//     $('#acuerdosTabla').on('click', '.btn-danger', function() {
//         $(this).closest('tr').remove();
//     });

//     $('#btnAgregar').click(function (e) {
//         e.preventDefault();
//         $('#nuevoAcuerdoModal').modal('show'); // Mostrar el modal usando Bootstrap
//     });

//     // Manejar el cierre del modal cuando se hace clic en el botón "Cerrar"
//     $('#btnCerrarModal').click(function(e) {
//         e.preventDefault();
//         $('#nuevoAcuerdoModal').modal('hide'); // Ocultar el modal usando Bootstrap
//     });

//     // Manejar el cierre del modal cuando se hace clic en el botón "Cerrar" en la cabecera del modal
//     $('.close').click(function(e) {
//         e.preventDefault();
//         $('#nuevoAcuerdoModal').modal('hide'); // Ocultar el modal usando Bootstrap
//     });



//     const input = $("#responsable");

//     input.on("input", function () {
//     let inputValue = $(this).val();

//     // Eliminar cualquier carácter que no sea una letra
//     inputValue = inputValue.replace(/[^a-zA-Z\s]/g, "");


//     // Limitar el valor a 6 caracteres
//     if (inputValue.length > 20) {
//         inputValue = inputValue.slice(0, 20);
//     }

//     $(this).val(inputValue);
//     });
// });


$(document).ready(function() {
    let acuerdoCount = 0; // Contador para los acuerdos

    $('#guardarAcuerdo').click(function(event) {
        var form = $('#formAcuerdo')[0];
        var responsable = $('#responsable').val();

        // Validar que el campo "Responsable" solo contenga letras
        var regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(responsable)) {
            $('#responsable').addClass('is-invalid');
            $('#responsable').next('.invalid-feedback').text('El nombre del responsable solo puede contener letras.');
            event.preventDefault();
            event.stopPropagation();
        } else {
            $('#responsable').removeClass('is-invalid');
        }

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            var fecha = $('#fecha').val();
            var estado = $('#estado').val();
            var descripcion = $('#descripcion').val();

            if (fecha && responsable && descripcion) {
                acuerdoCount++; // Incrementar el contador de acuerdos

                var nuevoAcuerdo = '<tr>' +
                                    '<td>' + acuerdoCount + '</td>' +
                                    '<td>' + fecha + '</td>' +
                                    '<td>' + responsable + '</td>' +
                                    '<td>' + estado + '</td>' +
                                    '<td>' + descripcion + '</td>' +
                                    '<td>' +
                                        '<button class="btn btn-danger btn-sm mr-2">Eliminar</button>' +
                                        '<button class="btn btn-secondary btn-sm">Modificar</button>' +
                                    '</td>' +
                                '</tr>';

                $('#acuerdosTabla').append(nuevoAcuerdo);
                $('#formAcuerdo')[0].reset();
                $('#nuevoAcuerdoModal').modal('hide'); // Ocultar el modal usando Bootstrap
            }
        }
        form.classList.add('was-validated');
    });

    $('#acuerdosTabla').on('click', '.btn-danger', function() {
        $(this).closest('tr').remove();
    });

    $('#btnAgregar').click(function (e) {
        e.preventDefault();
        $('#nuevoAcuerdoModal').modal('show'); // Mostrar el modal usando Bootstrap
    });

    // Manejar el cierre del modal cuando se hace clic en el botón "Cerrar"
    $('#btnCerrarModal').click(function(e) {
        e.preventDefault();
        $('#nuevoAcuerdoModal').modal('hide'); // Ocultar el modal usando Bootstrap
    });

    // Manejar el cierre del modal cuando se hace clic en el botón "Cerrar" en la cabecera del modal
    $('.close').click(function(e) {
        e.preventDefault();
        $('#nuevoAcuerdoModal').modal('hide'); // Ocultar el modal usando Bootstrap
    });

    // Restablecer el formulario y las validaciones cuando el modal se oculta
    $('#nuevoAcuerdoModal').on('hidden.bs.modal', function () {
        var form = $('#formAcuerdo')[0];
        form.reset();
        form.classList.remove('was-validated');
        $('#responsable').removeClass('is-invalid');
    });

    const input = $("#responsable");

    input.on("input", function () {
        let inputValue = $(this).val();

        // Eliminar cualquier carácter que no sea una letra
        inputValue = inputValue.replace(/[^a-zA-Z\s]/g, "");

        // Limitar el valor a 20 caracteres
        if (inputValue.length > 20) {
            inputValue = inputValue.slice(0, 20);
        }

        $(this).val(inputValue);
    });
});