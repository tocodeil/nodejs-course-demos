async function refresh() {
    const messages = await $.get('/api/1/');
    $('ul').html('');
    $.each(messages, function() {
        $('ul').append(`<li>${this.from} - ${this.text}</li>`);
    });
}

$('form').on('submit', async function(e) {
    e.preventDefault();
    const from = $('input[name="from"]').val();
    const text = $('input[name="text"]').val();
    const msg = { from, text };

    await $.post('/api/1/', msg);
    $('ul').append(`<li>${from} - ${text}</li>`);
});

$('#btn-refresh').on('click', refresh);
