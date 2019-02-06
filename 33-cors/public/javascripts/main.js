const base = 'http://localhost:3000';

async function refresh() {
    const messages = await $.get(`${base}/api/v1.0/messages`);
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

    await $.post(`${base}/api/v1.0/messages`, msg);
    $('ul').append(`<li>${from} - ${text}</li>`);
});

$('#btn-refresh').on('click', refresh);