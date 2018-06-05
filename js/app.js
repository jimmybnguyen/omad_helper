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

$('.sidebar-form').on('submit', function () {
	var articleLink = document.getElementById("link").value;
	var articleTitle = document.getElementById("title").value;
	var articleDate = document.getElementById("date").value;
	var articleImg = document.getElementById("image").value;
	document.getElementById("result").value = '<a href="' + articleLink + '"><img class="alignleft wp-image-25193 size-thumbnail" src="' + 
												articleImg + '" alt="Link to article: ' + articleTitle + '" width="150" height="150" /></a><a class="widget-link" href="' + 
												articleLink + '" target="_blank">' + articleTitle + '</a><small>' + articleDate + '</small>';
	return false;
});

