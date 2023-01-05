import { Brand } from "./Brand";

export const General = function () {
  return (
    <section className="general">
        <h2>General</h2>
      <h3>¿Quienes somos?</h3>
      <div id="q1">
      <p>
        Somos una tienda virtual (E-Commerce) que busca brindarle un espacio único a todas aquellas
        personas que aman a sus mascotas y desean comprarle alimentos de calidad.
      </p>
      </div>
      <h3>¿Qué metodos de pagos aceptan?</h3>
      <div id="q2">
      <p>
        Aceptamos multiples metodos de pago a excepción del efectivo, vea la lista para averiguar
        todos los métodos:
      </p>
      <ul>
        <li id="deb">Débito</li>
        <li id="cre">Crédito</li>
        <li id="mp">Mercado Pago</li>
        <li id="pp">PayPal</li>
      </ul>
      </div>
      <h3 class="lastTitle">MARCAS SOPORTADAS</h3>
      <div class="lastDiv">
      <Brand img="https://images2.imgbox.com/6e/c6/8tNoYrXi_o.png" givenId="whiskas" name="Whiskas"></Brand>
      <Brand img="https://images2.imgbox.com/5e/a9/WkPTqu2v_o.png" givenId="royal" name="Royal Canin"></Brand>
      <Brand img="https://images2.imgbox.com/33/72/c1tkkm7y_o.png" givenId="purina" name="Purina"></Brand>
      <Brand img="https://images2.imgbox.com/53/7f/yAOC33zO_o.png" givenId="shulet" name="Shulet"></Brand>
      </div>
    </section>
  );
};
