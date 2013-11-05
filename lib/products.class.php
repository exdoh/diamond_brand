<?php
/**
 * Producs
 * @access public
 * @author Mr.GRITSAKORN  VULLIYAMATEE <raider_ex@live.com>
 * @copyright Copyright (c) 2013, Charoensarp
 * @package Service Human Fence
 * @property string $db_options option of Pear database connection
 */

Class Products{
     
	 /**	 
	 * แสดงข้อมูล products
	 * @param -
	 * @return -
	 * @access public
	 */	
	 function getDataCategorys(){
	 		 require_once "dbi.class.php";
			 $db = new dbi();
			 
			 $arr = array();
			 $i = 0;
			 	
	 		 $db->clear();
			 $db->addfield("*");
		     
		     $db->table="categorys";
			 $db->order = "id asc";
			 
			 //echo $db->query2();exit();
			 if ($db->query()) {
	             while ($row = $db->getrow()) {
	             	 $arr[$i] = array(
					     'id'=> $row["id"],
					     'name_en'=> $row["name_en"],
					     'name_th'=> $row["name_th"],
					     'content_en'=> $row["content_en"],
					     'content_th'=> $row["content_th"],
					     'image'=>$row["image"]
					 );
					 
					 $i++;
	             }
			}
			$db->close();
			
			echo '{"categorys":'.json_encode($arr).'}';	
	 }
	 
	 /**	 
	 * แสดงข้อมูล products
	 * @param -
	 * @return -
	 * @access public
	 */	
	 function getDataProducts(){
	 		 require_once "dbi.class.php";
			 $db = new dbi();
			 
			 $arr = array();
			 $i = 0;
			 	
	 		 $db->clear();
			 $db->addfield("*");
		     
		     $db->table="products";
			 $db->order = "id asc";
			 
			 //echo $db->query2();exit();
			 if ($db->query()) {
	             while ($row = $db->getrow()) {
	             	 $arr[$i] = array(
					     'id'=> $row["id"],
					     'id_name'=> $row["id_name"],
					     'name_en'=> $row["name_en"],
					     'name_th'=> $row["name_th"],
					     'content_en'=> $row["content_en"],
					     'content_th'=> $row["content_th"],
					     'speci_en'=> $row["speci_en"],
					     'speci_th'=> $row["speci_th"],
					     'image'=> $row["image"]
					 );
					 
					 $i++;
	             }
			}
			$db->close();
			
			echo '{"products":'.json_encode($arr).'}';	
	 }
}
?>
