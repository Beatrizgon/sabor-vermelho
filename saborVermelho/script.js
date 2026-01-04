
// scroll header
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));
// FIM scroll header

// modal e filtro de pratos
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalNome = document.getElementById('modal-nome');
const modalDesc = document.getElementById('modal-descricao');
const modalPreco = document.getElementById('modal-preco');
const closeBtn = document.querySelector('.close');
const modalPeso = document.getElementById('modal-peso');

document.querySelectorAll('.ver-mais').forEach(btn => {
    btn.addEventListener('click', () => {
        modalImg.src = btn.dataset.img;
        modalNome.textContent = btn.dataset.nome;
        modalDesc.textContent = btn.dataset.descricao;
        modalPeso.textContent = btn.dataset.peso;
        modalPreco.textContent = btn.dataset.preco;

        modal.classList.remove('hide');
        modal.classList.add('show');
        modal.style.display = 'flex';
    });
});

function fecharModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');

    setTimeout(() => {
        modal.style.display = 'none';
    }, 600);
}

closeBtn.addEventListener('click', fecharModal);

modal.addEventListener('click', e => {
    if (e.target === modal) fecharModal();
});

const filtros = document.querySelectorAll('.filtros button');
const linha = document.querySelector('.linha-ativa');
const pratos = document.querySelectorAll('.prato');

function moverLinha(botao) {
    linha.style.width = botao.offsetWidth + 'px';
    linha.style.left = botao.offsetLeft + 'px';
}

filtros.forEach(botao => {
    botao.addEventListener('click', () => {
        filtros.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');

        moverLinha(botao);

        const categoria = botao.dataset.categoria;

        pratos.forEach(prato => {
            if (categoria === 'todos' || prato.dataset.categoria === categoria) {
                prato.style.display = 'flex';
            } else {
                prato.style.display = 'none';
            }
        });
    });
});

window.addEventListener('load', () => {
    const ativo = document.querySelector('.filtros button.ativo');
    moverLinha(ativo);
});
// FIM modal e filtro de pratos

// carousel de imagens
const imagens = document.querySelectorAll('.carousel img');
let index = 0;

setInterval(() => {
    imagens[index].classList.remove('ativo');
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('ativo');
}, 4000);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
// FIM carousel de imagens

// masked input celular e cpf
    const celular = document.getElementById('celular');
    celular.addEventListener('input', () => {
        let valor = celular.value.replace(/\D/g, '');
        valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
        valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
        celular.value = valor;
    });

    const cpf = document.getElementById('cpf');
    cpf.addEventListener('input', () => {
        let valor = cpf.value.replace(/\D/g, '');
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        cpf.value = valor;
    });
// FIM masked input celular e cpf










