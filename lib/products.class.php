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
	 * เพิ่มข้อมูล
	 * @param string $fhid รหัส  fhid,int $visitcount จำนวนการเข้าใช้ระบบ;
	 * @return -
	 * @access public
	 */	
	 function addData($fbid,$name,$email,$choice_vote){
	 	    require_once "dbi.class.php";
			$db = new dbi();
			
			$arr = array();
			
			$db->clear();
			$db->dict["fbid"] = $fbid;
	        $db->dict["name"] = $name;
	        $db->dict["email"] = $email;
			$db->dict["createdate"] = date("Y-m-d H:i:s");
	   
			$db->table = "profile";

        	$id = $db->insertiden();
			
			$db->close();
			
			$this->postData($id,$choice_vote);
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
			 	
	 		 $db->clear();
			 $db->addfield("*");
		     
		     $db->table="products";
			 $db->order = "id asc";
			 
			 //echo $db->query2();exit();
			 if ($db->query()) {
	             if ($row = $db->getrow()) {
	             	 $arr[0] = array(
					     'id'=> $row["id"],
					     'name_en'=> $row["name_en"],
					     'name_th'=> $row["name_th"],
					     'content_en'=> $row["content_en"],
					     'content_th'=> $row["content_th"],
					     'speci_en'=> $row["name_en"],
					     'speci_th'=> $row["name_th"],
					     'image'=> $row["image"]
					 );
	             }
			}
			$db->close();
			
			echo '{"products":'.json_encode($arr).'}';	
	 }
}
?>
