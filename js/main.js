var letter = prompt('Enter a letter?');

var i;
var j;

for (i = 0; i < 11; i++) {
  for (j = 0; j < i; j++) {
    document.write(letter);
  }
  document.write('<br>');
}
