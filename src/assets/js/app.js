'use strict';
const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(barraSuperior(_ => render(root)));
    root.append(wrapper);
}

$( _ => {
    console.log("hola");
          const root = $('.root');
          render(root);
});