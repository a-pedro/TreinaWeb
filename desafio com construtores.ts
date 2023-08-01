class Circulo {
  raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  calcularArea() {
    return 3.14 * this.raio * this.raio;
  }

  calcularPerimetro() {
    return 2 * 3.14 * this.raio;
  }
}