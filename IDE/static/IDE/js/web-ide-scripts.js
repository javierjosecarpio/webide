$(function() {
            var json = '[' +
              '{' +
                '"text": "BD 1",' +
                '"icon": "fa fa-database",'+
                '"nodes": [' +
                  '{' +
                    '"text": "Tablas",' +
                    '"icon": "fa fa-table",'+
                    '"nodes": [' +
                      '{' +
                        '"text": "Tabla 1",' +
                        '"icon": "fa fa-table"'+
                      '},' +
                      '{' +
                        '"text": "Tabla 2",' +
                        '"icon": "fa fa-table"'+
                      '}' +
                    ']' +
                  '},' +
                  '{' +
                    '"text": "Procedimientos",' +
                    '"icon": "fa fa-code"'+
                  '},' +
                  '{' +
                    '"text": "Objetos",' +
                    '"icon": "fa fa-cube"'+
                  '}' +
                ']' +
              '},' +
              '{' +
                '"text": "BD FISQL"' +
              '},' +
              '{' +
                '"text": "BD 3"' +
              '},' +
              '{' +
                '"text": "Base de datos prueba"' +
              '},' +
              '{' +
                '"text": "BD prueba 5"' +
              '}' +
            ']';
    
    
    
            var $tree = $('#treeview12').treeview({
              data: json,
              
          showBorder: false
            });
        });