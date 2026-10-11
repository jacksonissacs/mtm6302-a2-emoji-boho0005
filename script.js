const emojiCodes = [128512, 128526, 128640, 127752, 127800, 127774, 127881, 127829, 128049, 128054, 127911, 128161];
const gallery = document.querySelector('#gallery');

function showEmojis(count = emojiCodes.length) {
  // Each call replaces the previous collection, including when count is zero.
  gallery.replaceChildren();

  for (let i = 0; i < count; i++) {
    const card = document.createElement('li');
    card.className = 'emoji-card';

    const emoji = document.createElement('span');
    emoji.className = 'emoji';
    emoji.textContent = String.fromCodePoint(emojiCodes[i]);

    const code = document.createElement('span');
    code.className = 'code';
    code.textContent = `Decimal ${emojiCodes[i]}`;

    card.append(emoji, code);
    gallery.append(card);
  }
}

showEmojis();
