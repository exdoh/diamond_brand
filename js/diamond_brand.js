function diamond_brand(){
	this.l_en_headfoot = ['Diamond Brand','By Charoensarp','The best concrete nail','Some detail about this topic. It should be around 3-4 lines. Some detail about this topic. It should be around 3-4 lines.','&copy Charoensarp 2013'];
	this.l_th_headfoot = ['ไดมอนต์ แบรนต์','บาย เจริญศรัพย์','ตะปูคอนกรีตคุณภาพเยี่ยม','สำ ดีเมล ดีส ท๊อปปิก. อิส ชูด บี อราว ๓-๔ ไลน์. สำ ดีเมล ดีส ท๊อปปิก. อิส ชูด บี อราว ๓-๔ ไลน์.','&copy เจริญทรัพย์ 2556'];
	
	this.l_nav_en = ['Home','Products','About & Contact'];
	this.l_nav_th = ['หน้าแรก','สินค้า','เกี่ยวกับเรา'];
	
	this.l_en = ['ic-lang-en.png','English','Thai'];
	this.l_th = ['ic-lang-th.png','อังกฤษ','ไทย'];
	
	this.l_en_home = ['more detail','Our quality products','For more infomation','Tel: (+66)2 455 9204','Email: csdiamondbrand@gmail.com'];
	this.l_th_home = ['ข้อมูลอื่น','อาวเออร์ คอลิตี้ โพรดัก','ฟอ มอ อินฟอเมชั่น','เบอร์โทร: (+66)2 455 9204','อีเมล์: csdiamondbrand@gmail.com'];
	
	this.l_en_products = ['Product specification'];
	this.l_th_products = ['โพรดัก สเปฟิเคชั่น'];
	
	this.l_en_about = ['Contact Information','Tel: ','Email: ','Address: ','Bangpoo Industrial, 657 Moo2, Soi 1 Sukhumvit Rd, Bangpoomai, Muang, Samutprakarn Thailand 10280'];
	this.l_th_about = ['ข้อมูลการติดต่อ','เบอร์โทร: ','อีเมล์: ','ที่อยู่: ','นิคมอุตรสาหกรรมบางปู 657 หมู 2 ซอย 1 ถนนสุขุมวิท ตำบลบางปูใหม่ อำเภอเมือง จังหวัดสมุทรปราการ ประเทศไทย 10280'];
	
	
}

diamond_brand.prototype.reset = function()
{
	diamond_brand.render_products();
	diamond_brand.change_language('en');
	
	$('#home').attr('onclick','diamond_brand.click_active("home")');
	$('#products').attr('onclick','diamond_brand.click_active("products")');
	$('#menu-diamond').attr('onclick','diamond_brand.click_active("banner")');
	$('#menu-eagle').attr('onclick','diamond_brand.click_active("eagle")');
	$('#aboutcontact').attr('onclick','diamond_brand.click_active("aboutcontact")');
	
	$('#moredetail').attr('onclick','diamond_brand.click_active("moredetail")');
	
	$('#english').attr('onclick','diamond_brand.change_language("en")');
	$('#thailand').attr('onclick','diamond_brand.change_language("th")');
	
	//this.getNumdata();
	
	//this.render_table_diamond_brand_help();	
}

//////Render///////
diamond_brand.prototype.render_category_home = function(){
	var param = {
        mode: 'get_num_data',
        approve_status: this.approve_status
    };
    
	ajax(service_path+'/diamond_brand.php', param, 'text', '', function(data){
		diamond_brand.num_data_all = data;
 	});
}
diamond_brand.prototype.render_products = function(){
	var param = {
        mode: 'get_products',
    };
    
	ajax(service_path+'/products.php', param, 'text', '', function(data){
		alert(data);
		//pro.products = data;
 	});
}

diamond_brand.prototype.change_language = function(lang)
{
	if(lang == 'en')
	{
		$('body').attr('class','en');
		
		//header & footer
		$('#logo h1').html(this.l_en_headfoot[0]);
		$('#logo .font-footer').html(this.l_en_headfoot[1]);
		$('#recommend h1').html(this.l_en_headfoot[2]);
		$('#recommend p').html(this.l_en_headfoot[3]);
		$('#text-footer').html(this.l_en_headfoot[4]);
		
		//menu
		$('#home a').html(this.l_nav_en[0]);
		$('#products .dropdown-toggle').html(this.l_nav_en[1] + '<b class="caret"></b>');
		$('#aboutcontact a').html(this.l_nav_en[2]);
		
		//menu language
		$('#lang-menu img').attr('src','images/' + this.l_en[0]);
		$('#english a').html(this.l_en[1]);
		$('#thailand a').html(this.l_en[2]);
		
		//carousel
		$('#moredetail').html(this.l_en_home[0]);
		
		//home info
		$('#for-more').html(this.l_en_home[2]);
		$('#tel').html(this.l_en_home[3]);
		$('#email').html(this.l_en_home[4]);
		
		//about
		$('#headerinfo').html(this.l_en_about[0]);
		$('#info_tel').html(this.l_en_about[1]);
		$('#info_email').html(this.l_en_about[2]);
		$('#info_address').html(this.l_en_about[3]);
		$('#dataadd').html(this.l_en_about[4]);
		
		
	} else {
		$('body').attr('class','th');
		
		//header & footer
		$('#logo h1').html(this.l_th_headfoot[0]);
		$('#logo .font-footer').html(this.l_th_headfoot[1]);
		$('#recommend h1').html(this.l_th_headfoot[2]);
		$('#recommend p').html(this.l_th_headfoot[3]);
		$('#text-footer').html(this.l_th_headfoot[4]);
		
		//menu
		$('#home a').html(this.l_nav_th[0]);
		$('#products .dropdown-toggle').html(this.l_nav_th[1] + '<b class="caret"></b>');
		$('#aboutcontact a').html(this.l_nav_th[2]);
		
		//menu language
		$('#lang-menu img').attr('src','images/' + this.l_th[0]);
		$('#english a').html(this.l_th[1]);
		$('#thailand a').html(this.l_th[2]);
		
		//carousel
		$('#moredetail').html(this.l_th_home[0]);
		
		//home info
		$('#for-more').html(this.l_th_home[2]);
		$('#tel').html(this.l_th_home[3]);
		$('#email').html(this.l_th_home[4]);
		
		//about
		$('#headerinfo').html(this.l_th_about[0]);
		$('#info_tel').html(this.l_th_about[1]);
		$('#info_email').html(this.l_th_about[2]);
		$('#info_address').html(this.l_th_about[3]);
		$('#dataadd').html(this.l_th_about[4]);
		
	}
}

diamond_brand.prototype.click_active = function(name){
	if(name == "home")
	{
		$('#homepage').show();
		$('#carousel').show();
		$('#productspage').hide();
		$('#aboutpage').hide();
		
		$('#home').attr('class','active');
		$('#products').attr('class','dropdown');
		$('#aboutcontact').attr('class','');
	} 
	else if (name == "products") 
	{
		/*$('#homepage').hide();
		$('#carousel').hide();
		$('#productspage').show();
		$('#aboutpage').hide();*/
		
		$('#home').attr('class','');
		//$('#products').attr('class','dropdown active');
		$('#aboutcontact').attr('class','');
		
	}
	else if (name == "aboutcontact") 
	{
		$('#homepage').hide();
		$('#carousel').hide();
		$('#productspage').hide();
		$('#aboutpage').show();
		
		$('#home').attr('class','');
		$('#products').attr('class','dropdown');
		$('#aboutcontact').attr('class','active');
	}
	else {
		$('#homepage').hide();
		$('#carousel').hide();
		$('#productspage').show();
		$('#aboutpage').hide();
		
		$('#home').attr('class','');
		$('#products').attr('class','dropdown active');
		$('#aboutcontact').attr('class','');
		
		$('html,body').animate({
        	scrollTop: $("#"+name).offset().top},
        2000);
	}
	
}

diamond_brand.prototype.render_table_diamond_brand_help = function(){
	var param = {
        mode: 'get',
        approve_status: this.approve_status,
        start : this.start
    };
    
	ajax(service_path+'/diamond_brand.php', param, 'text', '', function(data){
		var data_approve = JSON.parse(data).approve;
        
        var content = '<tr>';
        		
        		if(diamond_brand.approve_status == 0 || diamond_brand.approve_status == 1)
        		{
        			content += '<td align=center width="8%">approve</td>';
        		} else {
        			content += '<td align=center width="8%">back approve</td>';
        		}
        		
        		content += '<td align=center width="15%">Name</td>';
        		content += '<td align=center width="30%">Message</td>';
        		content += '<td align=center width="15%">Email</td>';
        		content += '<td align=center width="10%">Phone Number</td>';
        		
        		if(diamond_brand.approve_status == 0 || diamond_brand.approve_status == 2)
        		{
        			content += '<td align=center width="10%">create date</td>';
        		} else {
        			content += '<td align=center width="10%">approve date</td>';
        		}
        		
        	content += '</tr>';
    	
    	for(var i = 0 ; i<data_approve.length ; i++)
    	{
    		content += '<tr>';
    			
    			if(diamond_brand.approve_status == 0)
        		{
        			content += '<td align=center width="8%">';
        				content += '<input type="button" id="approve" value="Approve" onclick="diamond_brand.click_approve(' + data_approve[i].fhdiamond_brand_id + ');">';
        				content += '<input type="button" id="cancel" value="Cancel" onclick="diamond_brand.cancel_approve(' + data_approve[i].fhdiamond_brand_id + ');">';
        			content += '</td>';
        		} else if(diamond_brand.approve_status == 1) {
        			content += '<td align=center width="8%"><img src="image/approved.jpg" width="100"></td>';
        		} else {
        			content += '<td align=center width="8%"><input type="button" id="back" value="Back" onclick="diamond_brand.back_approve(' + data_approve[i].fhdiamond_brand_id + ');"></td>';
        		}
        		
        		content += '<td align=center width="15%">' + data_approve[i].name + '</td>';
        		content += '<td align=left width="30%">' + data_approve[i].message + '</td>';
        		content += '<td align=center width="15%">' + data_approve[i].email + '</td>';
        		content += '<td align=center width="10%">' + data_approve[i].phonenumber + '</td>';
        		
        		if(diamond_brand.approve_status == 0 || diamond_brand.approve_status == 2)
        		{
        			content += '<td align=center width="10%">' + data_approve[i].createdate + '</td>';
        		} else {
        			content += '<td align=center width="10%">' + data_approve[i].approvedate + '</td>';
        		}
        		
        	content += '</tr>';
    	}
    	
    $('#table_diamond_brand').html(content);
    
	});
}
//////Render///////

//////Action///////
diamond_brand.prototype.click_page_approve = function(){
	this.approve_status = 0;
	
	$('#page_approve').attr('class','button_page_active');
	$('#page_approved').attr('class','button_page_actived');
	$('#page_cancel').attr('class','button_page_actived');
	
	this.getNumdata();
	
	this.render_table_diamond_brand_help();	
}

diamond_brand.prototype.click_page_approved = function(){
	this.approve_status = 1;
	
	$('#page_approve').attr('class','button_page_actived');
	$('#page_approved').attr('class','button_page_active');
	$('#page_cancel').attr('class','button_page_actived');
	
	this.getNumdata();
	
	this.render_table_diamond_brand_help();	
}

diamond_brand.prototype.click_page_cancel = function(){
	this.approve_status = 2;
	
	$('#page_approve').attr('class','button_page_actived');
	$('#page_approved').attr('class','button_page_actived');
	$('#page_cancel').attr('class','button_page_active');
	
	this.getNumdata();
	
	this.render_table_diamond_brand_help();	
}

diamond_brand.prototype.click_approve = function(id){
	var yes = confirm("Approve Blood Help!");

    if (yes)
    {  
		var param = {
	        mode: 'approve',
	        fhdiamond_brand_id: id
	    };
	    
	    ajax(service_path+'/diamond_brand.php', param, 'text', '', function(data){
	    	diamond_brand.render_table_diamond_brand_help();	
	    });
	}
}

diamond_brand.prototype.cancel_approve = function(id){
	var yes = confirm("Cancel Approve Blood Help!");

    if (yes)
    {  
		var param = {
	        mode: 'change',
	        fhdiamond_brand_id: id,
	        approve_status: 2
	    };
	    
	    ajax(service_path+'/diamond_brand.php', param, 'text', '', function(data){
	    	diamond_brand.render_table_diamond_brand_help();	
	    });
	}
}

diamond_brand.prototype.back_approve = function(id){
	var yes = confirm("Back to Approve Blood Help!");

    if (yes)
    {  
		var param = {
	        mode: 'change',
	        fhdiamond_brand_id: id,
	        approve_status: 0
	    };
	    
	    ajax(service_path+'/diamond_brand.php', param, 'text', '', function(data){
	    	diamond_brand.render_table_diamond_brand_help();	
	    });
	}
}
//////Action///////