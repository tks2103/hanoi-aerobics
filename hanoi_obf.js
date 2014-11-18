cn = document.body.children[0],
cx = cn.getContext('2d'),
W = 20,
MW = W * 10,
SZ = window.innerWidth - MW;
function ga(n) { return Array.apply(null, Array(n)).map(function(i, ind) { return ind; }).reverse(); }
cn.width = window.innerWidth;
cn.height = window.innerHeight;
A = ga(5);
B = [];
C = [];
it = 0;
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
  hn(A.length, A, B, C);
}
function r() {
  s();
  rn();
  window.setTimeout(r, 500);
}
function s() {
  if(i > q.length) return;
  itt = q[i], vl = itt[0].pop();
  itt[1].push(vl);
  i++;
}
function rn() {
  cn.width = cn.width;
  rt(MW, A);
  rt(SZ / 2, B);
  rt(SZ - MW, C);
}
function rt(x, a) {
  a.map(function(w,i) {
    cx.fillRect(x - w * W / 2, window.innerHeight / 2 - i * W, w*W, W);
  });
}
gq();
r();
