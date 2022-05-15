class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
        <header class="header">
        <img class="vector" src="imagenes/Vector.svg" alt="Logo Alura" />
      </header>  
        `;
  }
}
customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
    <footer class="footer">
    <div><p>Made by Mauro Lizarriaga</p></div>
  </footer>
    `;
  }
}
customElements.define("my-footer", MyFooter);
