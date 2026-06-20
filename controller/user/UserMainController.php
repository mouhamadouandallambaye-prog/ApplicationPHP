<?php 

require_once("UserController.php");

$controller = new UserController();

if (isset($_POST['frmLogin'])) {
    $controller->auth();
} 

if (isset($_POST['frmRegister'])) {
    $controller->register();
}

if (isset($_GET['action'])) {
    if ($_GET['action'] == 'logout') {
        $controller->logout();
    }
}