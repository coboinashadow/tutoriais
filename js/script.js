function exibe() {
	if(!navegacao) {
		navegacao = true;
		licao = 0;
	}

	htm = "<article>" + articles[licao % articles.length] + "</article>";
	htm += "<h3><button onclick='licao = licao + articles.length - 1; exibe();'>&lt;&lt; anterior</button>&nbsp;&nbsp;<button onclick='licao = licao + 1; exibe();'>próximo &gt;&gt;</button></h3>";
	htm += "<div id='coment'><div id='disqus_thread'></div></div>";
	document.getElementsByTagName("main")[0].innerHTML = htm;

	document.getElementsByTagName('footer')[0].innerHTML = "<button onclick=\"location.href = 'index.html';\">home</button>";
	window.scrollTo(0,0);
	Prism.highlightAll();
}

conteudo = document.getElementsByTagName('article');
articles = [];
licao = 0;
navegacao = false;

for(x = 0; x < conteudo.length; x++) {
    articles[x] = conteudo[x].innerHTML;
}

document.body.addEventListener('keydown', function(k) {
	if(k.keyCode == 37 || k.keyCode == 65) {
		licao = licao + articles.length - 1;
		exibe();
	}
	if(k.keyCode == 39 || k.keyCode == 68) {
		licao = licao + 1;
		exibe();
	}
});

disqus_config = function () {
	this.page.url = location.href;
	this.page.identifier = location.href;
};

s = document.createElement('script');
s.src = 'https://tutoriais-v2.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
