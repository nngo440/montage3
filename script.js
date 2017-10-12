var figure = $(".music").hover( hoverMusic, stopMusic );

function hoverMusic(e) {
    $('music', this).get(0).play();
}

function stopMusic(e) {
    $('music', this).get(0).pause();
}
