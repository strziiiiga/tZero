    var sites = [
        'o02.html',
        'o03.html',
        'o04.html',
        'o05.html',
		'o01.html',
		'o06.html',
		'o07.html',
		'o08.html',
		'o09.html',
		'o10.html',
		'o11.html',
		'o12.html',
		'o13.html',
		'o14.html',
		'o15.html',
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        location.href = sites[i];
    }