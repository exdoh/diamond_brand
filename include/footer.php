    <div class="footer">
    	<div class="container">
    		&copy Charoensarp 2013
    	</div>
    </div>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery-2.0.3.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Include Ajax and Javascript Diamond Brand -->
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

    </script>
    
  </body>
</html>