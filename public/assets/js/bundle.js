'use strict';
const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(barraSuperior());
    root.append(wrapper);
}

$( _ => {
          const root = $('.root');
          render(root);
});

const barraSuperior=_=>{
    const navBar         = $('<nav class="navbar navbar-default"></nav>');
    //const titulo         =$('<h1>hola</h1>');
    const container      = $('<div class="container"></div>');
    const navHeader      = $('<div class="navbar-header"></div>');
    const button         = $('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"></button>');
    const span           = $('<span class="sr-only">Toggle navigation</span>');
    const iconBar1       = $('<span class="icon-bar"></span>');
    const iconBar2       = $('<span class="icon-bar"></span>');
    const iconBar3       = $('<span class="icon-bar"></span>');
    const nameSections   = $('<a class="navbar-brand" href="#"><span class="glyphicon glyphicon-menu-hamburguer" aria-hidden="true"></span>SECTIONS</a>');

    const navBarCollapse = $('<div class="navbar-collapse collapse"></div>');
    const ul             = $('<ul class="nav navbar-nav"></ul>');
    const home           = $('<li class="active"><a href="#">Home</a></li>');
    const about          = $('<li><a href="#about">About</a></li>');
    const contact        = $('<li><a href="#contact">Contact</a></li>');

    button.append(iconBar1);
    button.append(iconBar2);
    button.append(iconBar3);
    navHeader.append(button);
    navHeader.append(nameSections);

    ul.append(home);
    ul.append(about);
    ul.append(contact);
    navBarCollapse.append(ul);
    container.append(navHeader);
    container.append(navBarCollapse);
    navBar.append(container);

    return navBar;

}