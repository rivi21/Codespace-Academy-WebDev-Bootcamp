<?php
/* print_r($_POST); */

$finded = false;

$credentials = array(
    0 =>
    array(
        0 => 'tbedell0@wikimedia.org',
        1 => 'Qwlff8f',
    ),
    1 =>
    array(
        0 => 'arawling1@uiuc.edu',
        1 => 'l7BneiS',
    ),
    2 =>
    array(
        0 => 'lbuey2@nba.com',
        1 => 'Z2cx1Pk1p8Q',
    ),
    3 =>
    array(
        0 => 'scullum3@washington.edu',
        1 => 'qwmqVzE',
    ),
    4 =>
    array(
        0 => 'lokeshott4@over-blog.com',
        1 => 'NoVinh',
    ),
);

for ($i = 0; $i < count($credentials); $i++) {
    if ($_POST['email'] === $credentials[$i][0] && $_POST['password'] === $credentials[$i][1]) {
        $finded = true;
        print 'Encontrado';
        break;
    }
}
?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Ejercicio 2</title>
</head>

<body>
    <div class="container mx-3 my-3">
        <?php
        if ($finded === true) {
            echo '<div class=" alert alert-primary" role="alert">
                    Success! Access granted.
                  </div>';
        } else {
            echo '<div class=" alert alert-danger" role="alert">
                    Forbidden! Access denied.
                 </div>';
            echo ' <button><a href="index.php" class=" btn btn-dark">Back to Login</a></button>';
        }
        ?>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
</body>

</html>