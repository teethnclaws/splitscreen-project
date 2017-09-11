document.addEventListener('DOMContentLoaded', function(){
	let wrapper = document.getElementById('wrapper');
	let topLayer = wrapper.querySelector('.top');
	let handle = wrapper.querySelector('.handle');
	let skew = 0;
	let delta = 0;
	
	// if wrapper has a class of skew, we'll want to set the skew to 1000px

if(wrapper.className.indexOf('skewed') != -1) {
	// you can adjust the skew slightly to get a different effect, if you wish to deviate from having the single screen split bar.
	skew = 1000;	
}

wrapper.addEventListener('mousemove', function(e) {
	delta = (e.clientX - window.innerWidth / 2) * 0.5;
	// changing the left property of the handle class
	handle.style.left = e.clientX + delta + 'px';
	// at this point the handle bar is moving along the page diagonally.
	
	topLayer.style.width= e.clientX + skew + delta + 'px';
	// now the layers are responding to the mouse movement along the page 
	
	});
	
});



