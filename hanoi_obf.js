cn=document.body.children[0],
cx=cn.getContext('2d');
x=[5,4,3,2,1];
y=[];
z=[];
q=[];
i=0;
function hn(n, a, b, c) {
  if(n>0) {
    hn(n-1,a,c,b);
    q.push([a,c]);
    hn(n-1,b,a,c);
  }
}
function r() {
  it=q[i], vl=it[0].pop();
  it[1].push(vl);
  i++;
  cn.width=cn.width;
  rt(260,x);
  rt(500,y);
  rt(740,z);
  setTimeout(r,450);
}
function rt(x, a) {
  a.map(function(c,i) {
    cx.fillRect(x-c*10, 400-i*20, c*20, 20);
  });
}
hn(x.length,x,y,z);
r();
