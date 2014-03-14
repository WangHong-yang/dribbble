window.onload = function() {
			// control the slide down list
			var shots = document.getElementById('shots');
			var explore = document.getElementById('explore');
			var designers = document.getElementById('designers');
			var shots_nav = document.getElementById('second-nav-shots');
			var explore_nav = document.getElementById('second-nav-explore');
			var designers_nav = document.getElementById('second-nav-designers');

			shots.onmouseover = function() {
				shots_nav.style.display = 'block';
			}
			shots.onmouseout = function() {
				shots_nav.style.display = 'none';
			}

			explore.onmouseover = function() {
				explore_nav.style.display = 'block';
			}
			explore.onmouseout = function() {
				explore_nav.style.display = 'none';
			}

			designers.onmouseover = function() {
				designers_nav.style.display = 'block';
			}
			designers.onmouseout = function() {
				designers_nav.style.display = 'none';
			}

			// control the two buttons
			var learn_more_button = document.getElementById('learn-more-button');
			learn_more_button.onmouseover = function() {
				this.style.opacity = 0.8;
			}
			learn_more_button.onmouseout = function() {
				this.style.opacity = 1;
			}
			var sign_in_button = document.getElementById('sign-in-button');
			sign_in_button.onmouseover = function() {
				this.style.opacity = 0.8;
			}
			sign_in_button.onmouseout = function() {
				this.style.opacity = 1;
			}
		}