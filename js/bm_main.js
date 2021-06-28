//<!-- Scripting -->
	
	//<script>

		var currentPageID = "tm-section-0";
		const mediaQuery = window.matchMedia('(max-width: 991px)');
		var scale = 'scale(1)';
		

  		function changePage(pg) {
			var nextpage = document.getElementById("tm-section-"+pg);
			var prevpage = document.getElementById(currentPageID);
			  
			  prevpage.style.display = "none";
			  nextpage.style.display = "block";
			  
			  currentPageID="tm-section-"+pg;
			  
			  if (mediaQuery.matches) {
				ToggleSideBar();
			  }
			  
  		}
		
		function ToggleSideBar(){
			//var cnt = document.getElementsByClassName("tm-content");
			var sb = document.getElementById("tmSideBar");
			var btn = document.getElementById("tmMainNavToggle");
					
			if (sb.style.left !== "0px") { //sidebar not visible
				sb.style.position="absolute";
				sb.style.left="0px";
				//cnt.style.left = sb.style.right;
				btn.style.display="none";}
			else if (sb.style.left === "0px") {
				sb.style.position="absolute";
				sb.style.left="-300px";
				btn.style.display="block";}

		}

  	
	