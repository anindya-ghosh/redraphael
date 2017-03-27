var Raphael = require('../../lib/raphael');
var rect;

Raphael(10, 10, 600, 400, function () {
    var paper = window.pap = this;

    // Draw a red rectangle with red fill color.
    rect = paper.rect({
    	x: 0,
    	y: 0,
    	width: 500,
    	height: 200
    })
    .attr({
    	fill: '#FF0000'
    });

    // Draw text on top of rectangle with white fill color.
    paper.text({
        text: ['Use index.html as a template to work on temporary workspace!',
               '',
               'Ensure that your test files are named spec-<somename>.html'],
        x: 10,
        y: 20,
        fill: '#FFFFFF',
        'text-anchor': 'left',
        'vertical-align': 'top'
    });


});
