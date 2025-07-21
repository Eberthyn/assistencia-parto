$(document).ready(function () {
    function getMaiorScrollHeight() {
        var h1 = $('#collapse50anos')[0].scrollHeight * ($('#collapse50anos').hasClass('collapsing') || $('#collapse50anos').hasClass('show'));
        var h2 = $('#collapseXX')[0].scrollHeight * ($('#collapseXX').hasClass('collapsing') || $('#collapseXX').hasClass('show'));
        return Math.max(
            $('#collapse50anos').hasClass('collapsing') || $('#collapse50anos').hasClass('show') ? $('#collapse50anos')[0].scrollHeight : 0,
            $('#collapseXX').hasClass('collapsing') || $('#collapseXX').hasClass('show') ? $('#collapseXX')[0].scrollHeight : 0
        );
    }

    function updateMargin(marginHeight) {
        $('#accordionExterno').css('margin-top', marginHeight + 'px');
    }

    function ajustaMargem() {
        var h = getMaiorScrollHeight();
        updateMargin(h);
    }

    $('#collapse50anos, #collapseXX')
        .on('show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse', function () {
            // Timeout garante que pegamos a altura certa após a transição iniciar
            setTimeout(ajustaMargem, 10);
        });

    // Estado inicial
    ajustaMargem();
});