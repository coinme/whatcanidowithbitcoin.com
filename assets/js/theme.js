$(function(){
    var cursor = 1 + Math.floor((text.length - 1)*Math.random());
    var $frames = $('#frames');
    var $current, $old;
    var frame_template = $('#frame_template').html();

    function next_frame(){
        $old = $($current);

        // set up next frame
        $current = $(Mustache.render(frame_template, {
            text: text[cursor],
            footnote: footnotes[cursor],
            quip: quips[Math.floor(Math.random()*quips.length)]
        })).appendTo($frames);

        $old.removeClass('flipInY');
        $old.addClass('flipOutY');
        setTimeout(function(){
            $current.removeClass('');
            setTimeout(function(){
                $old.remove();
            }, 6000);
        }, 2000);

        cursor = (cursor >= text.length -1) ? 1 : cursor + 1;
    }

    console.log($frames);
    $frames.delegate('a.quip', 'click', function(){
        next_frame();
    });

    next_frame();
});