
//Filters
$(function() { 

  // Select Get Started button. When clicked, fade out overlay.
  $('.get-started').on('click',function() {
    $('.introduction').fadeOut();
  });

  // init Isotope by selecting the grid class and selecting the grid-item to be filtered
  let $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
  });

  // Filtering interaction with buttons
  $('.filter-button-group').on( 'click', 'button', function() { // When a filter button is clicked on...
    let filterValue = $(this).attr('data-filter'); // Get it's data-filter value
    // try console.log filterValue to see what gets displayed in the browser console
    $grid.isotope({ filter: filterValue }); // Pass the value to the isotope array object
  });

})

//Open About
$(".about-button").on("click", function() {
  $(".about-overlay, .about-content").addClass("active");
});

//Close About
$(".close, .about-overlay").on("click", function() {
  $(".about-overlay, .about-content").removeClass("active");
});

// Open Sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

// Close Sidebar
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
/*
// Mouse follow image
$(document).mousemove(function(e){
  $("#mouse-follow").css({left:e.clientX, top:e.clientY});
});
*/

		// Creating a constant variable to store the API endpoint URL.

		const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/437990';
		fetch(url)
			.then(function(response) {
				// First get confirmation there's a connection
				console.log(response);
				return response.json();
			})
			.then(function(data) {
				// If there's a connection, then we can use the data from the API
				console.log(data);

				// Try writing a for loop to get all 22 films to display on the page.
        $(".painting-image img").attr('src', data[0].primaryImage)
				$(".painting-title").html(data[0].title);
        $(".painting-date").html(data[0].objectDate);
        $(".painting-artist").html(data[0].artistDisplayName)
        $(".painting-link").html(data[0].objectURL)
				$(".painting-description p").html(data[0].description);
			})
			.catch(function(error) {
				// If there's an error, show in the browser console.
				console.log(error);
			});

  /* 
	To load JSON file, whether it's locally stored on your computer or on the web, you need to have a server. You can run a local server using MAMP or Terminal. 
	
	Using Terminal, change your directory to where your index.html file is. To do this, type the command cd and drag your folder to Terminal. Hit return.

	Then copy and paste this command: python3 -m http.server and then go to http://localhost:8000/ in your browser. Your file will now load.
	*/

// Impressionism JSON set

	// First pass the json file name into Fetch.
	fetch('paintings1.json') 
  // See if there's a response. If all good move to the next step.
    .then(function(response) {
      return response.json();
    })
    // Get the data from the JSON file.
    .then(function(data) {
    for (let i = 0; i < data.paintings1.length; i++) {
      $(".paintings1").append(
        '<div class="painting-item '+ data.paintings1[i].colour +' '+ data.paintings1[i].movement +'">'+
          '<a href="'+ data.paintings1[i].link +'" target=_blank>'+
          '<img src="'+ data.paintings1[i].photo +'">'+
          '<div class="painting-content">'+
            '<h2>'+ data.paintings1[i].name +'</h2>'+
            '<h3>'+ data.paintings1[i].artist +'</h3>'+
            '<h4>'+ data.paintings1[i].date +'</h4>'+
            '<p>'+ data.paintings1[i].description +'</p>'+
          '</div>'+
          '</a>'+
        '</div>'
      )
    }
    })
    // At any point if there's an error in the chain of events, then it immediately goes to an error state.
    .catch(function(error) {
      $('h1').html('Error!')
      console.log(error);
    })

// Post-Impressionism JSON set
   
	// First pass the json file name into Fetch.
	fetch('paintings2.json') 
  // See if there's a response. If all good move to the next step.
    .then(function(response) {
      return response.json();
    })
    // Get the data from the JSON file.
    .then(function(data) {
    for (let i = 0; i < data.paintings2.length; i++) {
      $(".paintings2").append(
        '<div class="painting-item '+ data.paintings2[i].colour +' '+ data.paintings2[i].movement +'">'+
          '<a href="'+ data.paintings2[i].link +'" target=_blank>'+
          '<img src="'+ data.paintings2[i].photo +'">'+
          '<div class="painting-content">'+
            '<h2>'+ data.paintings2[i].name +'</h2>'+
            '<h3>'+ data.paintings2[i].artist +'</h3>'+
            '<h4>'+ data.paintings2[i].date +'</h4>'+
            '<p>'+ data.paintings2[i].description +'</p>'+
          '</div>'+
          '</a>'+
        '</div>'
      )
    }
    })
    // At any point if there's an error in the chain of events, then it immediately goes to an error state.
    .catch(function(error) {
      $('h1').html('Error!')
      console.log(error);
    })
    
    
