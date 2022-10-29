$(window).on('load', () => {
    setReady();
});

var title;
var artist;

function setReady() {
    var coverInput = $('#input_cover').val();
    var albumCover = $('.albumCover');

    const [file] = imgInp.files;
    if (file) {
      albumCover.attr('src', URL.createObjectURL(file));
    } else {
        coverInput.replaceAll(' ', '') == '' ? albumCover.attr('src', 'assets/img/8450017.jpg') : albumCover.attr('src', coverInput);
    }

    var songInput = $('#input_song').val();
    var songPlace = $('.songName');

    songInput.replaceAll(' ', '') == '' ? songPlace.text('Spotifart') : songPlace.text(songInput);

    var artistInput = $('#input_artist').val();
    var artistPlace = $('.artistName');
    artistInput.replaceAll(' ', '') == '' ? artistPlace.text('berkantkz') : artistPlace.text(artistInput);    
    // $('#check_like').is(':checked') ?  $('#like').removeClass('hide') : $('#like').addClass('hide');
    // $('#check_shuffle').is(':checked') ? $('#shuffle').removeClass('hide') : $('#shuffle').addClass('hide');
    // $('#check_playing').is(':checked') ? $('#play').removeClass('hide') : $('#play').addClass('hide');
}

const colorThief = new ColorThief();

function setPosition() {
    var albumCover = $('.albumCover');
    var type = '';

    albumCover.removeClass('square');
    albumCover.removeClass('portrait');
    albumCover.removeClass('landscape');

    if (albumCover.width() > albumCover.height()){
        albumCover.addClass('landscape');
        type = 'landscape';
    } else if (albumCover.width() < albumCover.height()){
        albumCover.addClass('portrait');
        type = 'portrait';
    } else {
        albumCover.addClass('square');
        type = 'square';
    }
    
    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')

    var imgO = new Image();
    imgO.src = albumCover.attr('src');
    imgO.crossOrigin = "Anonymous";
    
    imgO.addEventListener('load', function() {
        var colors = colorThief.getPalette(imgO, 2);
        var color1, color2;
        color1 = rgbToHex(colors[0][0], colors[0][1], colors[0][2]);
        color2 = rgbToHex(colors[1][0], colors[1][1], colors[1][2]);
        //console.log("colors in hex: \n" + color1 + "4\n" + color2);

        document.documentElement.style.setProperty('--color1', color1);
        document.documentElement.style.setProperty('--color2', color2);

        var n_match = ntc.name(color1);

        console.log("Info:\nSelected image is " + type + ".\nThe first color is " + ntc.name(color1)[1] + " and the second color is " + ntc.name(color2)[1]);

        // $('.screen').css('background', 'linear-gradient(' + color1 + ', ' + color2 + '), url(../spoti/assets/bg.png)')
    });
}

function like() {
    if ($('#btn-like').attr('status') == 'false') {
        $('#btn-like').attr('status', 'true');
        $('#like').removeClass('hide');
    } else {
        $('#btn-like').attr('status', 'false');
        $('#like').addClass('hide');
    }
    $('#btn-like').toggleClass("clicked");

    setReady();
}

function shuffle() {
    if ($('#btn-shuffle').attr('status') == 'false') {
        $('#btn-shuffle').attr('status', 'true');
        $('#shuffle').removeClass('hide');
    } else {
        $('#btn-shuffle').attr('status', 'false');
        $('#shuffle').addClass('hide');
    }
    $('#btn-shuffle').toggleClass("clicked");

    setReady();
}

function play() {
    if ($('#btn-play').attr('status') == 'false') {
        $('#btn-play').attr('status', 'true');
        $('#play').removeClass('hide');
    } else {
        $('#btn-play').attr('status', 'false');
        $('#play').addClass('hide');
    }
    $('#btn-play').toggleClass("clicked");

    setReady();
}

function getIt() {
    html2canvas(document.querySelector('.phone-1'), { useCORS: true, allowTaint: true, scale: 1 }).then(canvas => {
        $('#save').html(canvas);
        console.log('canvas was created');

        var fileName = "spotifart_" + Date.now() + "_" + ($('#input_song').val() !== '' ? $('#input_song').val() : "supercut") + "_" + ($('#input_artist').val() !== "" ? $('#input_artist').val() : "lorde");
        Canvas2Image.saveAsPNG(canvas, 1080, 2340, fileName);
    });
}