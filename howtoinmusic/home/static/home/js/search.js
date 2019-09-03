var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];


// constructs the suggestion engine
// var states = new Bloodhound({
//   datumTokenizer: Bloodhound.tokenizers.whitespace,
//   queryTokenizer: Bloodhound.tokenizers.whitespace,
//   // `states` is an array of state names defined in "The Basics"
//   local: states
// });

// $('#bloodhound .typeahead').typeahead({
//   hint: true,
//   highlight: true,
//   minLength: 1
// },
// {
//   name: 'states',
//   source: states
// });



// 

// constructs the for remote data
$(document).ready(function() {


	//Artists
	var artists = new Bloodhound({
	  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('artist_sp'),
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  prefetch: 'http://127.0.0.1:8000/music/json/artist?q=%',
	  remote: {
	    url: 'http://127.0.0.1:8000/music/json/artist?q=%QUERY',
	    wildcard: '%QUERY'
	  }
	});

	//Albums
	var albums = new Bloodhound({
	  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('album_name'),
	  queryTokenizer: Bloodhound.tokenizers.whitespace,	
	  prefetch: 'http://127.0.0.1:8000/music/json/album?q=%',  
	  remote: {
	    url: 'http://127.0.0.1:8000/music/json/album?q=%QUERY',
	    wildcard: '%QUERY'
	  }
	});

	// //Tracks
	var tracks = new Bloodhound({
	  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('track_name'),
	  queryTokenizer: Bloodhound.tokenizers.whitespace,	
	  prefetch: 'http://127.0.0.1:8000/music/json/track?q=%',
	  remote: {
	    url: 'http://127.0.0.1:8000/music/json/track?q=%QUERY',
	    wildcard: '%QUERY'
	  }
	});

	$('#bloodhound .typeahead').typeahead(
	{
		hint: true,
		highlight: true,
		minLength: 1
	},  
	{
	  name: 'artists',
	  limit: 5,
	  display: 'artist_sp',
	  source: artists.ttAdapter(),
	  templates: {
	  	header: '<h4 class="search_header"><Artists</h4>'
		}
	},
	{
	  name: 'albums',
	  limit: 5,
	  display: 'album_name',
	  source: albums.ttAdapter(),
	  templates: {
	  	header: '<h4 class="search_header"><Albums</h4>'
		}
	},
	{
	  name: 'tracks',
	  limit: 5,
	  display: 'track_name',
	  source: tracks.ttAdapter(),
	  templates: {
	  	header: '<h4 class="search_header"><Tracks</h4>'
		}
	});

	// Autofocus input on modal open
	// $('#exampleModalLong').on('shown.bs.modal', function() {
		$('input').focus();
	// });

});