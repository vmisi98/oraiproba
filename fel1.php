<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP kódrészlet</title>
</head>
<body>
    <?php 
    $a=10;
    echo"A kapott pontszám:".$a; 
    $tomb=[10,22,34,45];
    echo "<br>";
    print_r($tomb);
    echo "<br>";
    echo $tomb[2];
    echo "<br>";
    foreach($tomb as $elem)
    echo $elem.";";

    echo "<br>";

    foreach($tomb as $kulcs=>$ertek)
    echo $kulcs."-".$ertek."<br>";

    //egy változó típusa:
    echo "<br>";
    var_dump($a);
    $b="alma";
    echo "<br>";
    var_dump($b);
    echo "<br>";
    $szam=11;
echo fakt($szam);
    function fakt($n){
        if($n<=1)
        return 1;
        else
        return $n*fakt($n-1);
    }

    
    ?>
    <h1>A felhasználó által adott pont <?= $a?> </h1>
    <div>HTML-ben meghivott php fuggveny: <?=$szam. "!=".fakt($szam)?></div>


</body>
</html>