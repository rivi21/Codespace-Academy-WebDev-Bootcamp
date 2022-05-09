<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="procesar.php" method="POST" enctype="multipart/form-data">
        <!-- para enviar texto -->
        <label>
            Nombre:
            <input type="text" name="name">
        </label>

        <br>
        <!-- para enviar solo números -->
        <label>
            Edad:
            <input type="number" name="age">
        </label>

        <br>
        <!-- para enviar un dato u otro -->
        <p>Sexo:</p>

        <label>
            <input type="radio" name="sex" value="Masculino">
            Masculino
        </label>
        <label>
            <input type="radio" name="sex" value="Femenino">
            Femenino
        </label>

        <br>
        <!-- para enviar varios datos a la vez -->
        <p>Roles:</p>

        <label>
            <input type="checkbox" name="roles[]" value="Administrador">
            Administrador
        </label>
        <!-- ponemos las llaves en el atributo name para indicar que se trata de un array
            y así poder enviar varias opciones seleccionadas. Porque un usuario puede tener
            varios roles -->
        <label>
            <input type="checkbox" name="roles[]" value="Editor">
            Editor
        </label>
        <label>
            <input type="checkbox" name="roles[]" value="Moderador">
            Moderador
        </label>

        <br><br>
        <!-- para enviar archivos -->
        <!-- Hay que hacerlo exclusivamente con el método POST 
             y tb. habilitar el envío de archivos desde un formulario con
             (enctype="multipart/form-data) -->
        <label>
            Imagen:
            <br>
            <input type="file" name="image">
        </label>

        <br><br>
        <!-- select -->
        <p>Turno de trabajo: </p>

        <select name="turno">
            <!-- por defecto puedo poner una opcion seleccionada con selected="laQueSea" -->

            <option value="Mañana">Mañana</option>
            <option value="Tarde">Tarde</option>
            <option value="Noche">Noche</option>

        </select>

        <br><br>
        <!-- text area -->
        <textArea name="mensaje" cols="30" rows="10"></textArea>

        <br><br>

        <button type="submit">Enviar</button>

    </form>
</body>

</html>