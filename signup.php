<?php
$servername="localhost";
$username="root";
$password="";
$database_name="elitmus";
$conn=mysqli_connect($servername,$username,$password,$database_name);
if(!$conn){
    die("Connection failed:". mysqli_connect_error());
}
if(isset($_POST['submitt']))
{
    
    $eid=$_POST['eid'];
    $uname=$_POST['uname'];
    $password=$_POST['pass'];
    
    $sql="INSERT INTO signup(eid,uname,pass)
    VALUES('$eid','$uname','$password')";

    if(mysqli_query($conn,$sql)){
        header('location:index.php');
    }
    else{
        echo "Error:". $sql ."". mysqli_error($conn);
    }
    mysqli_close($conn);

}
?>