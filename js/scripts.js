
var detailImage = document.getElementById('detail_image');

detailImage.addEventListener('click', function(e) {
	e.preventDefault();
	document.getElementsByTagName("html")[0].classList.toggle('dark');
});
