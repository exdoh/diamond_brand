function dianmond_brand(){

}

dianmond_brand.prototype.reset = function(){
	$('#home').attr('onclick','dianmond_brand.click_active("home")');
	$('#contact').attr('onclick','dianmond_brand.click_active("contact")');
	
	//this.getNumdata();
	
	//this.render_table_approve_blood_help();	
}

dianmond_brand.prototype.getNumdata = function(){
	var param = {
        mode: 'get_num_data',
        approve_status: this.approve_status
    };
    
	ajax(service_path+'/approve_blood.php', param, 'text', '', function(data){
		approve_blood.num_data_all = data;
 	});
}

//////Render///////
dianmond_brand.prototype.click_active = function(name){
	if(name == "home")
	{
		$('#home').attr('class','active');
		$('#contact').attr('class','');
	} 
	else if (name == "contact") 
	{
		$('#home').attr('class','');
		$('#contact').attr('class','active');
	}
	
}

approve_blood.prototype.render_table_approve_blood_help = function(){
	var param = {
        mode: 'get',
        approve_status: this.approve_status,
        start : this.start
    };
    
	ajax(service_path+'/approve_blood.php', param, 'text', '', function(data){
		var data_approve = JSON.parse(data).approve;
        
        var content = '<tr>';
        		
        		if(approve_blood.approve_status == 0 || approve_blood.approve_status == 1)
        		{
        			content += '<td align=center width="8%">approve</td>';
        		} else {
        			content += '<td align=center width="8%">back approve</td>';
        		}
        		
        		content += '<td align=center width="15%">Name</td>';
        		content += '<td align=center width="30%">Message</td>';
        		content += '<td align=center width="15%">Email</td>';
        		content += '<td align=center width="10%">Phone Number</td>';
        		
        		if(approve_blood.approve_status == 0 || approve_blood.approve_status == 2)
        		{
        			content += '<td align=center width="10%">create date</td>';
        		} else {
        			content += '<td align=center width="10%">approve date</td>';
        		}
        		
        	content += '</tr>';
    	
    	for(var i = 0 ; i<data_approve.length ; i++)
    	{
    		content += '<tr>';
    			
    			if(approve_blood.approve_status == 0)
        		{
        			content += '<td align=center width="8%">';
        				content += '<input type="button" id="approve" value="Approve" onclick="approve_blood.click_approve(' + data_approve[i].fhapprove_blood_id + ');">';
        				content += '<input type="button" id="cancel" value="Cancel" onclick="approve_blood.cancel_approve(' + data_approve[i].fhapprove_blood_id + ');">';
        			content += '</td>';
        		} else if(approve_blood.approve_status == 1) {
        			content += '<td align=center width="8%"><img src="image/approved.jpg" width="100"></td>';
        		} else {
        			content += '<td align=center width="8%"><input type="button" id="back" value="Back" onclick="approve_blood.back_approve(' + data_approve[i].fhapprove_blood_id + ');"></td>';
        		}
        		
        		content += '<td align=center width="15%">' + data_approve[i].name + '</td>';
        		content += '<td align=left width="30%">' + data_approve[i].message + '</td>';
        		content += '<td align=center width="15%">' + data_approve[i].email + '</td>';
        		content += '<td align=center width="10%">' + data_approve[i].phonenumber + '</td>';
        		
        		if(approve_blood.approve_status == 0 || approve_blood.approve_status == 2)
        		{
        			content += '<td align=center width="10%">' + data_approve[i].createdate + '</td>';
        		} else {
        			content += '<td align=center width="10%">' + data_approve[i].approvedate + '</td>';
        		}
        		
        	content += '</tr>';
    	}
    	
    $('#table_approve_blood').html(content);
    
	});
}
//////Render///////

//////Action///////
approve_blood.prototype.click_page_approve = function(){
	this.approve_status = 0;
	
	$('#page_approve').attr('class','button_page_active');
	$('#page_approved').attr('class','button_page_actived');
	$('#page_cancel').attr('class','button_page_actived');
	
	this.getNumdata();
	
	this.render_table_approve_blood_help();	
}

approve_blood.prototype.click_page_approved = function(){
	this.approve_status = 1;
	
	$('#page_approve').attr('class','button_page_actived');
	$('#page_approved').attr('class','button_page_active');
	$('#page_cancel').attr('class','button_page_actived');
	
	this.getNumdata();
	
	this.render_table_approve_blood_help();	
}

approve_blood.prototype.click_page_cancel = function(){
	this.approve_status = 2;
	
	$('#page_approve').attr('class','button_page_actived');
	$('#page_approved').attr('class','button_page_actived');
	$('#page_cancel').attr('class','button_page_active');
	
	this.getNumdata();
	
	this.render_table_approve_blood_help();	
}

approve_blood.prototype.click_approve = function(id){
	var yes = confirm("Approve Blood Help!");

    if (yes)
    {  
		var param = {
	        mode: 'approve',
	        fhapprove_blood_id: id
	    };
	    
	    ajax(service_path+'/approve_blood.php', param, 'text', '', function(data){
	    	approve_blood.render_table_approve_blood_help();	
	    });
	}
}

approve_blood.prototype.cancel_approve = function(id){
	var yes = confirm("Cancel Approve Blood Help!");

    if (yes)
    {  
		var param = {
	        mode: 'change',
	        fhapprove_blood_id: id,
	        approve_status: 2
	    };
	    
	    ajax(service_path+'/approve_blood.php', param, 'text', '', function(data){
	    	approve_blood.render_table_approve_blood_help();	
	    });
	}
}

approve_blood.prototype.back_approve = function(id){
	var yes = confirm("Back to Approve Blood Help!");

    if (yes)
    {  
		var param = {
	        mode: 'change',
	        fhapprove_blood_id: id,
	        approve_status: 0
	    };
	    
	    ajax(service_path+'/approve_blood.php', param, 'text', '', function(data){
	    	approve_blood.render_table_approve_blood_help();	
	    });
	}
}
//////Action///////