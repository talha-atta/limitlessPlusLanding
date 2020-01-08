var first = ['Protein','Personalized','Nutrition'];
var second = ['beginners', 'pros','goals','good', 'you' ];
var firstM = [], secondM = [], el;

var $first = $('.the-first'); 
var $second = $('.the-second'); 
var $container = $('#for-container');


// init static //    
$first.text(first[0]);
$second.text(second[0]);

// create measurables //
for(var i = 0; i < first.length; i++){
    el = $('<div class="measurable">' + first[i] + '</div>');
    $container.append(el);
    firstM.push(el.width());
}
for(var i = 0; i < second.length; i++){
    el = $('<div class="measurable">' + second[i] + '</div>');
    $container.append(el);
    secondM.push(el.width());
}

// absolutize //
var positions = [];
$('#for-container > span').each(function(){
    positions.push($(this).position());
});
$('#for-container > span').each(function(){
    var pos = positions.shift();
    $(this).css({
        position: 'absolute',
        left: pos.left,
        top: pos.top
    });
});

// remember initial sizes //
var firstInitialWidth = $first.width();
var secondInitialWidth = $second.width();

// loop the loop //
var activeWordsIndex = 0;

function proteinForFunc() {

setInterval(function(){
    activeWordsIndex++;
    var firstIndex = activeWordsIndex % first.length;
    var secondIndex = activeWordsIndex % second.length;
    $first.text( first[firstIndex] );
    $second.text( second[secondIndex] );
    
    var firstLineOffset = (firstM[firstIndex] - firstInitialWidth) / 2;
    var secondLineOffset = (secondM[secondIndex] - secondInitialWidth) / 2;
   
    $('.static.first').css({
        transform: 'translateX(' + firstLineOffset + 'px)'
    });
    $('.static.second').css({
        transform: 'translateX(' + (-secondLineOffset) + 'px)'
    });
    if (second[secondIndex] == "you") {
        $second.css({color: "red"});
    }
    else {
        $second.css({color: "black"});
    }
    
    $first.css({
        transition: 'none', 
        transform: 'translate(' + (-firstLineOffset) + 'px, -30px)',
        opacity: '0'
    });
    setTimeout(function(){
        $first.css({
            transition: 'all 1s ease',
            transform: 'translate(' + (-firstLineOffset) + 'px, 0px)',
            opacity: '1'
        });
    }, 50);
    
    $second.css({
        transition: 'none', 
        transform: 'translate(' + (-secondLineOffset) + 'px, 30px)',
        opacity: '0'
    });
    setTimeout(function(){
        $second.css({
            transition: 'all 1s ease',
            transform: 'translate(' + (-secondLineOffset) + 'px, 0px)',
            opacity: '1'
        });
    }, 50);
}, 2000);

}

var func = proteinForFunc();
func;

$(window).resize(function() {
    window.clearInterval(func);

    setTimeout(function(){
    // create measurables //
    var og = `<span class="the-first">Nutrition</span> 
        </br>
        <span class="static second">for</span> 
        <span class="the-second">beginners</span>`

    $container.html(og);
    $first = $('.the-first'); 
    $second = $('.the-second'); 



    for(var i = 0; i < first.length; i++){
        el = $('<div class="measurable">' + first[i] + '</div>');
        $container.append(el);
        firstM.push(el.width());
    }
    for(var i = 0; i < second.length; i++){
        el = $('<div class="measurable">' + second[i] + '</div>');
        $container.append(el);
        secondM.push(el.width());
    }

    // absolutize //
    positions = [];
    $('#for-container > span').each(function(){
        positions.push($(this).position());
    });
    $('#for-container > span').each(function(){
        var pos = positions.shift();
        $(this).css({
            position: 'absolute',
            left: pos.left,
            top: pos.top
        });
    });

    // remember initial sizes //
    firstInitialWidth = $first.width();
    secondInitialWidth = $second.width();

    // loop the loop //
    activeWordsIndex = 0;
    func;
    }, 500);

});