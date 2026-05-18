$(document).ready(function() {
    
    $('#btnsimpan').on('click', function() {
        let newNama = $('#inputNama').val();
        let newEmail = $('#inputEmail').val();
        let newNIM = $('#inputNIM').val();

        let liNama = $('<li></li>').html(newNama).addClass('nama');
        let liEmail = $('<li></li>').html(newEmail).addClass('email');
        let liNIM = $('<li></li>').html(newNIM).addClass('nim');

        $('#result').append(liNama,liEmail,liNIM,$('<br>'));
    });
    
});