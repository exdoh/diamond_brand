    </div>
    <div class="footer font-footer">
    	<div id="text-footer" class="container">
    		&copy Charoensarp 2013
    	</div>
    </div>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- Add jQuery library -->
    <script src="js/jquery-2.0.3.min.js"></script>
    <!-- Add mousewheel plugin (this is optional) -->
	<script src="js/jquery.mousewheel-3.0.6.pack.js"></script>
	
	<!-- Add fancyBox main JS files -->
	<script src="fancybox/jquery.fancybox.js?v=2.1.5"></script>
	<!-- Add Thumbnail helper (this is optional) -->
	<script src="fancybox/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>
    
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    
    <!-- Include Ajax and Javascript Diamond Brand -->
    <script type="text/javascript">
		 	var service_path = '<?php echo $url_path;?>' + 'localhost/diamond_brand/controllers';
		 	//var service_path = '/vote_policy/controllers';
	</script>
    
    <script src="js/common.js"></script>
	<script src="js/diamond_brand.js"></script>
	<script type="text/javascript">
		var diamond_brand = new diamond_brand();
        	
    	$(document).ready(function(){
	        diamond_brand.reset();
        });
        
        $(function() {
		    // Stick the #nav to the top of the window
		    var nav = $('#navbar');
		    var navHomeY = nav.offset().top;
		    var isFixed = false;
		    var $w = $(window);
		    $w.scroll(function() {
		        var scrollTop = $w.scrollTop();
		        var shouldBeFixed = scrollTop > navHomeY;
		        if (shouldBeFixed && !isFixed) {
		            nav.css({
		                position: 'fixed',
		                top: 0,
		                left: nav.offset().left,
		                width: nav.width()
		            });
		            isFixed = true;
		        }
		        else if (!shouldBeFixed && isFixed)
		        {
		            nav.css({
		                position: 'static'
		            });
		            isFixed = false;
		        }
		    });
		});
		
		$('.fancybox-thumbs').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,
				arrows    : false,
				nextClick : true,

				helpers : {
					thumbs : {
						width  : 50,
						height : 50
					}
				}
			});

    </script>
    
  </body>
</html>