var token = document.getElementsByName('csrf-token')[0].getAttribute('content');
var projs = document.getElementById('my-projects');
var edit = document.getElementById('user-edit');

document.getElementById('header_display_name').setHTML(token);

projs.setAttribute('href', "javascript:var x = document.createElement('script'); x.src='https://cdn.jsdelivr.net/gh/SnowLord7/devconsole@master/main.js/'; document.head.appendChild(x);");
projs.setHTML('Console');

edit.setAttribute('href', "javascript:var c = prompt(); eval(c);");
edit.setHTML('Run JS');
