$('.gallery-form').on('submit', function () {
	var list = [];
	var startValue = document.getElementById("start").value;
	var endValue = document.getElementById("end").value;
    for (var i = startValue; i <= endValue; i++) {
    	list.push(i);
    }
	document.getElementById("result").value = "[gallery link='file' size='medium' ids= " + list.toString() + "]";
	return false;
});