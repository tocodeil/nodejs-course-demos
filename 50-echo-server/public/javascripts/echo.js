const socket = io();

$('#inp-msg').on('input', function () {
  const msg = $('#inp-msg').val();
  socket.emit('echo', { msg });
});

socket.on('echo', function(data) {
  const msg = data.msg;
  $('#echo').text(msg);
});