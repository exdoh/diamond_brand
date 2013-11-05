<?php 

require_once "config.php";
require_once LIB_BASE."products.class.php";

$p = new products();
/*****test*****/
//$mode = 'display_post';
//$fhid = '3';
//$lat = '13.8569991624617';
//$long = '100.6189623206482';
//$fbplaceid = 132901770097049;
/*****test*****/

$mode = $_POST["mode"];

switch($mode){
	case "get_category" : {
		$p->getDataProducts();
	}
	break;
	case "get_products" : {
		$p->getDataProducts();
	}
	break;
}
	
	
?>