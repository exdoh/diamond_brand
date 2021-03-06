<?php require_once "controllers/config.php";?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="images/favicon.ico">

    <title>Diamond Brand</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <!--<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">-->
	
	<!-- Add fancyBox main CSS files -->
	<link rel="stylesheet" href="fancybox/jquery.fancybox.css?v=2.1.5" media="screen" />
	<!-- Add Thumbnail helper (this is optional) -->
	<link rel="stylesheet" href="fancybox/helpers/jquery.fancybox-thumbs.css?v=1.0.7" />
	
	<!-- SASS style CSS -->
	<link href="css/reset.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="assets/js/html5shiv.js"></script>
      <script src="assets/js/respond.min.js"></script>
    <![endif]-->
  </head>

  <body class="en">
  	 <div id="wrap">
	<div id="banner">
		<header>
			<div id="logo">
				<div class="container">
					<img src="images/logo.png">
					<h1>Diamond Brand</h1>
					<div class="font-footer">By Charoensarp</div>
				</div>
			</div>
			
			
			<div id="navbar" class="navbar">
				<div class="navbar-inner">
					<div class="container">					
						<ul class="nav">
							<li id="home" class="font-footer active">
								<a href="#">Home</a>
							</li>
							<li id="products" class="font-footer dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">
									Products
									<b class="caret"></b>
								</a>
								<ul id="menu-list" class="dropdown-menu">
									<!--Render-->
									<li id="menu-diamond"><a href="#">Diamond Concrete Nail</a></li>
									<li id="menu-eagle"><a href="#">Eagle Concrete Nail</a></li>
								</ul>
							</li>
							<li id="aboutcontact" class="font-footer">
								<a href="#">About & Contact</a>
							</li>
						</ul>
					
					
						<div id="lang-menu" class="btn-group pull-right">
						   <button class="btn dropdown-toggle" data-toggle="dropdown">
						     	<img src="images/ic-lang-en.png">
						     	<span class="caret"></span>
						   </button>
						   <ul class="dropdown-menu">
							    <li id="english"><a href="#">English</a></li>
								<li id="thailand"><a href="#">Thai</a></li>
						   </ul>
						</div>
					</div><!--container-->
				</div><!--navbar-inner-->
			</div><!--navbar-->
			
		</header>