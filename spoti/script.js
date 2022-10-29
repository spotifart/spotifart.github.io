$(window).on('load', () => {
    console.log('loaded');

    // var preview = document.getElementById('preview');
    // var preview_ctx = document.getElementById('preview').getContext('2d');
    
    // coverUrl = 'https://pbs.twimg.com/profile_images/1555682467528441858/Xp6JRhzx_400x400.jpg';
    // var cover = new Image();
    // cover.src = coverUrl;

    // var heart = new Image();
    // heart.src = 'assets/heart-2.png';
    
    // var nheart = new Image();
    // nheart.src = 'assets/heart-1.png';
    
    // var seek = new Image();
    // seek.src = 'assets/seek.png';

    // var seekBar = new Image();
    // seekBar.src = 'assets/seek-bar.png';

    // var controller = new Image();
    // controller.src = 'assets/controller-pause.png';

    // controller.onload = function() {
    //     preview.width = controller.width; //document.getElementById('preview').width = controller.width;
    //     preview.height = (cover.height + heart.height + controller.height) * 2;

    //     preview_ctx.drawImage(cover, cover.width/2+50, 0, cover.width, cover.height);

    //     preview_ctx.font = "500 35px Work Sans";
    //     preview_ctx.fillText("Sober", 2, (controller.height * 4 - 225));
        
    //     preview_ctx.font = "300 27px Work Sans";
    //     preview_ctx.fillText("Lorde", 3, (controller.height * 4 - 195));

    //     preview_ctx.drawImage(heart, controller.width - 72, (controller.height * 4 - 255));
    //     preview_ctx.drawImage(seekBar, 0, (controller.height * 4 - 100));
    //     preview_ctx.drawImage(seek, 0, (controller.height * 4 - 104));
    //     preview_ctx.drawImage(controller, 0, controller.height * 4);
    // };

});

// function setReady() {
//     var preview = document.getElementById('preview');
//     var preview_ctx = document.getElementById('preview').getContext('2d');
    
//     coverUrl = $('#cover').val() !== '' ? $('#cover').val() : 'https://upload.wikimedia.org/wikipedia/tr/e/ef/Lorde_Melodrama_album_cover_2017_03_02.jpg';
//     var cover = new Image();
//     cover.src = coverUrl;

//     var heart = new Image();
//     heart.src = $('#heart').is(':checked') == true ? 'assets/heart-2.png' : 'assets/heart-1.png';
    
//     var seek = new Image();
//     seek.src = 'assets/seek.png';

//     var seekBar = new Image();
//     seekBar.src = 'assets/seek-bar.png';

//     var controller = new Image();
//     controller.src = 'assets/controller-pause.png';

//     cover.onload = function() {
//         preview.width = controller.width; //document.getElementById('preview').width = controller.width;
//         preview.height = (cover.height + heart.height + controller.height) * 2;

//         preview_ctx.drawImage(cover, cover.width/2+50, 0, cover.width, cover.height);

//         preview_ctx.font = "500 35px Work Sans";
//         preview_ctx.fillText(($('#song').val() !== '' ? $('#song').val() : 'Kaderin sürprizi'), 2, (controller.height * 4 - 225));
        
//         preview_ctx.font = "300 27px Work Sans";
//         preview_ctx.fillText($('#singer').val() !== '' ? $('#singer').val() : 'Meli', 3, (controller.height * 4 - 195));

//         preview_ctx.drawImage(heart, controller.width - 72, (controller.height * 4 - 255));
//         preview_ctx.drawImage(seekBar, 0, (controller.height * 4 - 100));
//         preview_ctx.drawImage(seek, (seekBar.width - seek.width) / (100 / $('#time').val()), (controller.height * 4 - 104));
//         preview_ctx.drawImage(controller, 0, controller.height * 4);
//     };

// }

// $(window).on('load', generateLyrics())

// function generateLyrics() {
//     var lyrics = document.getElementById('lyrics');
//     lyrics.width = $(window).width()/2;

//     var ctx_lyrics = lyrics.getContext('2d');
//     // ctx_lyrics.font = "500 55px Work Sans";

//     // lyric = $('#input_lyrics').val() !== '' ? $('#input_lyrics').val() : 'urfa sana küsmüş';

//     // ctx_lyrics.fillText(lyric, 2, ctx_lyrics.measureText(lyrics).fontBoundingBoxAscent);

//     var pre = new Image();
//     pre.src = 'assets/lyrics.webp';
//     lyrics.height = 1920;
//     lyrics.width = 1080;
//     pre.onload = function() {
//         ctx_lyrics.drawImage(pre, 0, 0);

//         var lyric = "Gonna eat all the candy while you straddle and lay me";
//         ctx_lyrics.font = "900 50px Work Sans";
//         ctx_lyrics.fillText(lyric, 260, 745);
//     }
// }

function setReady() {
    var coverInput = $('#cover').val();
    var albumCover = $('.albumCover');

    coverInput.replaceAll(' ', '') == '' ? albumCover.attr('src', 'https://upload.wikimedia.org/wikipedia/tr/e/ef/Lorde_Melodrama_album_cover_2017_03_02.jpg') : albumCover.attr('src', coverInput);

    var songInput = $('#song').val();
    var songPlace = $('.songName');

    songInput.replaceAll(' ', '') == '' ? songPlace.text('Supercut') : songPlace.text(songInput);

    var artistInput = $('#artist').val();
    var artistPlace = $('.artistName');
    artistInput.replaceAll(' ', '') == '' ? artistPlace.text('Lorde') : artistPlace.text(artistInput);

    $('#liked').is(':checked') ?  $('#like').removeClass('hide') : $('#like').addClass('hide');
    $('#shuffled').is(':checked') ? $('#shuffle').removeClass('hide') : $('#shuffle').addClass('hide');
    $('#playing').is(':checked') ? $('#play').removeClass('hide') : $('#play').addClass('hide');

}

function download() {
        html2canvas(document.querySelector('.songScreen'), {useCORS: true,allowTaint: true, scale: 1}).then(canvas => {
            $('#download').html(canvas);
            console.log('done');
        });

}