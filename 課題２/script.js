$(document).ready(function() {
  var gameContainer = $('#game-container');

  gameContainer.on('click', function(event) {
    var blockWidth =  400;
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // ランダムな色

    var newBlock = $('<div class="block"></div>').css({
      width: blockWidth + 'px',
      height: '20px',
      backgroundColor: randomColor,
      position: 'absolute',
      bottom: $('.block').length * 20 + 'px', // 上に積み上げる
    });

    gameContainer.append(newBlock);
  });
});