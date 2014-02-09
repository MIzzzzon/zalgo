(function () {
  var is_zalgo_char, rand, rand_zalgo, zalgo, zalgo_down, zalgo_mid;

  rand = function(max) {
    return Math.floor(Math.random() * max);
  };

  rand_zalgo = function(array) {
    var ind;
    ind = Math.floor(Math.random() * array.length);
    return array[ind];
  };

  is_zalgo_char = function(c) {
    var i;
    i = void 0;
    i = 0;
    while (i < zalgo_down.length) {
      if (c === zalgo_down[i]) {
        return true;
      }
      i++;
    }
    i = 0;
    while (i < zalgo_mid.length) {
      if (c === zalgo_mid[i]) {
        return true;
      }
      i++;
    }
    return false;
  };

  zalgo = function(txt, level) {
    var i, j, newtxt, num_down, num_mid, num_up, q;
    if (level == null) {
      level = 0;
    }
    newtxt = "";
    i = 0;
    while (i < txt.length) {
      if (is_zalgo_char(txt.substr(i, 1))) {
        continue;
      }
      num_up = void 0;
      num_mid = void 0;
      num_down = void 0;
      newtxt += txt.substr(i, 1);
      if (level === 0) {
        num_up = rand(8);
        num_mid = rand(2);
        num_down = rand(8);
      } else if (level > 0) {
        num_up = rand(16) / 2 + 1;
        num_mid = rand(6) / 2;
        num_down = rand(16) / 2 + 1;
      }
      j = 0;
      while (j < num_mid) {
        newtxt += rand_zalgo(zalgo_mid);
        j++;
      }
      q = 0;
      while (q < num_down) {
        newtxt += rand_zalgo(zalgo_down);
        q++;
      }
      i++;
    }
    return newtxt;
  };



  var each = Array.prototype.forEach;
  var slice = Array.prototype.slice;

  var nodes = slice.call(document.querySelectorAll('body, body *'))
    .filter(function (el) {
      var child = el.childNodes[0];
      return el.hasChildNodes() && child.nodeType === Node.TEXT_NODE;
    })
    .map(function (el) {
      return el.childNodes[0];
    });


  var i = 0;
  var time = 1e3;
  var img = new Image();
  img.src = 'http://fsymbols.com/images/zalgo.jpg';

  setTimeout(function fn() {

    var node = nodes[i];
    try {
      node.nodeValue = zalgo(node.nodeValue);
    } catch(e) {
      console.log('he comes...');

      var d = document.createElement('div');

      d.innerHTML = 'he comes...';
      d.appendChild(document.createElement('br'));
      d.appendChild(document.createElement('br'));
      d.appendChild(img);

      var s = d.style;
      s.height = '100%';
      s.width = '100%';
      s.position = 'fixed';
      s.background = '#000';
      s.opacity = 0.85;
      s.zIndex = 99999999;
      s.top = 0;
      s.textAlign = 'center';
      s.padding = '15%';
      s.fontSize = '50px';
      s.fontFamily = 'monospace';

      document.body.appendChild(d);

      return;
    }

    i += 1;
    time -= Math.round(Math.random() * 1e2);

    // will cause nodes[i] to use an index passed the length of nodes
    // let it crash because... ZALGOOOOOO ...he comes
    setTimeout(fn, time);

  }, 0);

  zalgo_down = ["̖", "̗", "̘", "̙", "̜", "̝", "̞", "̟", "̠", "̤", "̥", "̦", "̩", "̪", "̫", "̬", "̭", "̮", "̯", "̰", "̱", "̲", "̳", "̹", "̺", "̻", "̼", "ͅ", "͇", "͈", "͉", "͍", "͎", "͓", "͔", "͕", "͖", "͙", "͚", "̣"];

  zalgo_mid = ["̕", "̛", "̀", "́", "͘", "̡", "̢", "̧", "̨", "̴", "̵", "̶", "͏", "͜", "͝", "͞", "͟", "͠", "͢", "̸", "̷", "͡", "҉"];

})();
