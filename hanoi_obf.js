cn = document.body.children[0],
cx = cn.getContext('2d');
function ga(n) { return Array.apply(null, Array(n)).map(function(i, d) { return d; }).reverse(); }
cn.width = 1000;
cn.height = 600;
x = ga(7);
y = [];
z = [];
i = 0;
function hn(n, a, b, c) {
  if(n>0) {
    hn(n-1,a,c,b);
    q.push([a,c]);
    hn(n-1,b,a,c);
  }
}
function gq() {
  q = [];
  hn(x.length, x, y, z);
}
function r() {
  if(i > q.length) return;
  it = q[i], vl = it[0].pop();
  it[1].push(vl);
  i++;
  cn.width = cn.width;
  rt(260, x);
  rt(500, y);
  rt(740, z);
  setTimeout(r, 500);
}
function rt(x, a) {
  a.map(function(c,i) {
    cx.fillRect(x - c * 5, innerHeight / 2 - i * 10, c*10, 10);
  });
}
gq();
r();
