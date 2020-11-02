

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $adatok=[
        "Kata"=>2000,
        "Gyula"=>2001,
        "Tibi"=>2002
    ];
    print_r($adatok["Gyula"]);
    echo "<hr>";
    foreach($adatok as $kulcs=>$ertek)
    echo $kulcs." szuletesi eve:".$ertek;

    $str="";
    foreach($adatok as $kulcs=>$ertek)
    $str.="<li>".$kulcs."</li>";

    ?>
    <ul><?=$str?></ul>
</body>
</html>