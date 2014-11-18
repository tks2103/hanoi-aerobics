function ga(n) {
  var a = [];
  for(var i=n-1; i>0; i--) { a.push(i); }
  return a;
}

var cn = document.getElementById('cn'),
    cx = cn.getContext('2d'),
    W = 20,
    MW = W * 10,
    SZ = window.innerWidth - MW;

cn.width = window.innerWidth;
cn.height = window.innerHeight;

var H = function(t) {
  this.A = ga(t);
  this.B = [];
  this.C = [];
  this.i = 0;
};

H.prototype = {
  hn: function(n, a, b, c) {
    if(n>0) {
      this.hn(n-1,a,c,b);
      this.q.push([a,c]);
      this.hn(n-1,b,a,c);
    }
  },

  gq: function() {
    this.q=[];
    this.hn(this.A.length, this.A, this.B, this.C);
  },

  r: function() {
    this.s();
    this.rn();
    window.setTimeout(this.r.bind(this), 1000);
  },

  s: function() {
    if(this.i > this.q.length) return;
    var it = this.q[this.i],
        vl = it[0].pop();
    it[1].push(vl);
    this.i++;
  },

  rn: function() {
    cn.width = cn.width;
    this.rt(MW, this.A);
    this.rt(SZ / 2, this.B);
    this.rt(SZ - MW, this.C);
  },

  rt: function(x, a) {
    for(var i=0; i < a.length; i++) {
      var w = a[i] * W;
      cx.fillRect(x - w / 2, window.innerHeight / 2 - i * W, w, W);
    }
  }
};

var hs = new H(7);

hs.gq();
hs.r();
