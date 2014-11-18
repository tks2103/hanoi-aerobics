function ga(n) {
  var ary = [];
  for(var i=n-1; i>0; i--) {
    ary.push(i);
  }
  return ary;
}

var can = document.getElementById("can"),
    cx  = can.getContext("2d"),
    WIDTH = 20,
    MAX_WIDTH = WIDTH * 10,
    SIZE = window.innerWidth - MAX_WIDTH;

can.width = window.innerWidth;
can.height = window.innerHeight;

var Hanoi = function(twrs) {
  this.A = ga(twrs);
  this.B = [];
  this.C = [];
  this.i = 0;
};

Hanoi.prototype = {
  hn: function(n, a, b, c) {
    if(n > 0) {
      this.hn(n-1, a, c, b);
      this.queue.push([a, c]);
      this.hn(n-1, b, a, c);
    }
  },

  generate_queue: function() {
    this.queue = [];
    this.hn(this.A.length, this.A, this.B, this.C);
  },

  log: function() {
    console.log(this.A, this.B, this.C);
  },

  resolve: function() {
    this.step();
    this.render();
    window.setTimeout(this.resolve.bind(this), 1000);
  },

  step: function() {
    if(this.i >= this.queue.length) { return; }
    var item = this.queue[this.i],
        val  = item[0].pop();
    item[1].push(val);
    this.i++;
  },

  render: function() {
    can.width = can.width;
    this.renderTower(MAX_WIDTH, this.A);
    this.renderTower(SIZE / 2, this.B);
    this.renderTower(SIZE - MAX_WIDTH, this.C);
  },

  renderTower: function(x, ary) {
    for(var i = 0; i < ary.length; i++) {
      var width = ary[i] * WIDTH;
      cx.fillRect(x - width / 2, window.innerHeight / 2 - i * WIDTH, width, WIDTH);
    }
  }
}

var hs  = new Hanoi(7);

cx.fillStyle = "rgb(255,0,0)";

hs.generate_queue();
hs.resolve();
