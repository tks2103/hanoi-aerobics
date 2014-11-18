function ga(n) {
  var ary = [];
  for(var i=n-1; i>0; i--) {
    ary.push(i);
  }
  return ary;
}

var can = document.getElementById("can"),
    cx  = can.getContext("2d");

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
    this.renderTower(0, this.A);
    this.renderTower(100, this.B);
    this.renderTower(200, this.C);
  },

  renderTower: function(x, ary) {
    for(var i = 0; i < ary.length; i++) {
      cx.fillRect(10 + x, 100 - i * 10, ary[i] * 10, 10);
    }
  }
}

var hs  = new Hanoi(7);

cx.fillStyle = "rgb(255,0,0)";

hs.generate_queue();
hs.resolve();
