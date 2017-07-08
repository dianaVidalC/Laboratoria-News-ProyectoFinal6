'use strict';
const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(barraSuperior());
    wrapper.append(barraInferior());
    wrapper.append(noticiaPrincipal());
    root.append(wrapper);
}

const state={
    newTitle:null
}

$( _ => {
    $.get('/api/news/')
        .done(function (response) {
            state.newTitle=response;
            const root = $('.root');
            render(root);
        });
});

const barraSuperior=_=>{
    const navBar         = $('<nav class="navbar navbar-default"></nav>');
    const container      = $('<div class="container"></div>');
    const navHeader      = $('<div class="navbar-header hidden-xs"></div>');
    const nameSections   = $('<a class="navbar-brand" href="#">SECTIONS</a>');
    const imgMenu        = $('<img alt="menu" src="assets/img/menu.png">');
    const nameSearch     = $('<a class="navbar-brand" href="#">SEARCH</a>');
    const imgSearch      = $('<img alt="menu" src="assets/img/search.png">');
    const navRigth       = $('<div class="navbar-right social hidden-xs"></div>');
    const image1         = $('<img class="social__img" alt="facebook-icono" src="assets/img/fb.png">');
    const image2         = $('<img class="social__img" alt="twiter-icono" src="assets/img/tw.png">');
    const image3         = $('<img class="social__img" alt="linkedin-icono" src="assets/img/in.png">');

    navHeader.append(imgMenu);
    navHeader.append(nameSections);
    navHeader.append(imgSearch);
    navHeader.append(nameSearch);
    navRigth.append(image1);
    navRigth.append(image2);
    navRigth.append(image3);

    container.append(navHeader);
    container.append(navRigth);
    navBar.append(container);

    return navBar;

}

const barraInferior=()=>{
    const div            = $('<div class="container-inferior"></div>');
    const img            = $('<img class="img-responsive  align-center" src="assets/img/logoicon.png">');
    const navBarCollapse = $('<div id="bs-example-navbar-collapse-1" class="navbar-collapse collapse nav-responsive"></div>');
    const button         = $('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"></button>');
    const span           = $('<span class="sr-only">Toggle navigation</span>');
    const iconBar1       = $('<span class="icon-bar"></span>');
    const iconBar2       = $('<span class="icon-bar"></span>');
    const iconBar3       = $('<span class="icon-bar"></span>');
    const ul             = $('<ul class="nav navbar-nav"></ul>');
    const ultimo         = $('<li><a class="col-white" href="#">Lo último</a></li>');
    const opinion        = $('<li><a class="col-white" href="#">Opinión</a></li>');
    const cultura        = $('<li><a class="col-white" href="#">Cultura</a></li>');
    const peru           = $('<li><a class="col-white" href="#">Cultura</a></li>');
    const tecnologia     = $('<li><a class="col-white" href="#">Tecnología</a></li>');
    const mundo          = $('<li><a class="col-white" href="#">Mundo</a></li>');
    const economia       = $('<li><a class="col-white" href="#">Economía</a></li>');
    const lifestyle      = $('<li><a class="col-white" href="#">Lifestyle</a></li>');
    const deporte        = $('<li><a class="col-white" href="#">Deporte</a></li>');

    button.append(iconBar1);
    button.append(iconBar2);
    button.append(iconBar3);

    ul.append(ultimo);
    ul.append(opinion);
    ul.append(cultura);
    ul.append(peru);
    ul.append(tecnologia);
    ul.append(mundo);
    ul.append(economia);
    ul.append(lifestyle);
    ul.append(deporte);
    navBarCollapse.append(ul);
    div.append(img);
    navBarCollapse.append(button);
    div.append(navBarCollapse);

    return div;
}

const noticiaPrincipal=()=>{
    const container= $('<div class="container container-news"></div>');
    const img      = $('<img class="img-responsive" src="assets/img/news-0.png">');
    const divTitulo= $('<div class="titulo"></div> ');
    const titulo   = $('<h2>'+state.newTitle[0].title+'</h2>');
    const subtitulo= $('<h6 class="hidden-xs">'+state.newTitle[0].brief+'</h6>');
    const divImg2  = $('<div class="row"></div>');

    container.append(img);
    divImg2.append(noticiaSecundaria());
    container.append(divImg2);
    divTitulo.append(titulo);
    divTitulo.append(subtitulo);
    container.append(divTitulo);

    return container;
}

const noticiaSecundaria=()=>{
    const divSub    = $('<div class="col-xs-12 col-md-5"></div>');
    const img1      = $('<img class="img-responsive" src="assets/img/news-1.png">')
    const divTitulo1= $('<div class="subtitulo"></div>');
    const titulo    = $('<h3>'+state.newTitle[1].title+'</h3>');

    divTitulo1.append(titulo);
    divSub.append(img1);
    divSub.append(divTitulo1);

    return divSub;
}

