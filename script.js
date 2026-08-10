function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
const climaData = {
  "toronto": {
    nome: "Toronto, Canadá",
    meses: [
      { mes: "Janeiro",   maxima: -1, minima: -7, ceu: "nublado",              chuva: "neve" },
      { mes: "Fevereiro", maxima: 0,  minima: -6, ceu: "nublado",              chuva: "neve" },
      { mes: "Março",     maxima: 5,  minima: -2, ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Abril",     maxima: 12, minima: 4,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 19, minima: 10, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 24, minima: 15, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 27, minima: 18, ceu: "ensolarado",           chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 26, minima: 17, ceu: "ensolarado",           chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 22, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 14, minima: 7,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 7,  minima: 2,  ceu: "nublado",              chuva: "chuva e neve" },
      { mes: "Dezembro",  maxima: 1,  minima: -4, ceu: "nublado",              chuva: "neve" }
    ]
  },
  "nova iorque": {
    nome: "Nova Iorque, EUA",
    meses: [
      { mes: "Janeiro",   maxima: 4,  minima: -3, ceu: "parcialmente nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: 6,  minima: -2, ceu: "parcialmente nublado", chuva: "neve" },
      { mes: "Março",     maxima: 10, minima: 2,  ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Abril",     maxima: 17, minima: 7,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 22, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 27, minima: 18, ceu: "ensolarado",           chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 29, minima: 21, ceu: "ensolarado",           chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 28, minima: 21, ceu: "ensolarado",           chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 25, minima: 17, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 18, minima: 10, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 12, minima: 5,  ceu: "nublado",              chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 6,  minima: 0,  ceu: "nublado",              chuva: "chuva e neve" }
    ]
  },
  "seattle": {
    nome: "Seattle, EUA",
    meses: [
      { mes: "Janeiro",   maxima: 8,  minima: 3,  ceu: "nublado",              chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 10, minima: 3,  ceu: "nublado",              chuva: "chuva moderada" },
      { mes: "Março",     maxima: 12, minima: 4,  ceu: "nublado",              chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 15, minima: 6,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 18, minima: 9,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 21, minima: 11, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 24, minima: 13, ceu: "ensolarado",           chuva: "seco" },
      { mes: "Agosto",    maxima: 25, minima: 13, ceu: "ensolarado",           chuva: "seco" },
      { mes: "Setembro",  maxima: 21, minima: 11, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 15, minima: 8,  ceu: "nublado",              chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 10, minima: 5,  ceu: "nublado",              chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 8,  minima: 3,  ceu: "nublado",              chuva: "chuva forte" }
    ]
  },
  "nova orleans": {
    nome: "Nova Orleans, EUA",
    meses: [
      { mes: "Janeiro",   maxima: 17, minima: 8,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 19, minima: 10, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 22, minima: 13, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 26, minima: 16, ceu: "ensolarado",           chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 29, minima: 20, ceu: "ensolarado",           chuva: "chuva forte" },
      { mes: "Junho",     maxima: 32, minima: 23, ceu: "ensolarado",           chuva: "chuva forte" },
      { mes: "Julho",     maxima: 33, minima: 24, ceu: "chuvoso",              chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 33, minima: 24, ceu: "chuvoso",              chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 31, minima: 22, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 27, minima: 16, ceu: "ensolarado",           chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 22, minima: 11, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 18, minima: 9,  ceu: "parcialmente nublado", chuva: "chuva moderada" }
    ]
  },
  "washington": {
    nome: "Washington D.C., EUA",
    meses: [
      { mes: "Janeiro",   maxima: 6,  minima: -2, ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Fevereiro", maxima: 8,  minima: -1, ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Março",     maxima: 14, minima: 4,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 19, minima: 9,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 24, minima: 14, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 29, minima: 19, ceu: "ensolarado",           chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 32, minima: 22, ceu: "ensolarado",           chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 31, minima: 21, ceu: "ensolarado",           chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 27, minima: 17, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 20, minima: 10, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 14, minima: 5,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 8,  minima: 0,  ceu: "nublado",              chuva: "chuva e neve" }
    ]
  },
  "orlando": {
    nome: "Orlando, EUA",
    meses: [
      { mes: "Janeiro",   maxima: 23, minima: 11, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 24, minima: 12, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 27, minima: 15, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 29, minima: 17, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 32, minima: 21, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 33, minima: 23, ceu: "chuvoso",    chuva: "chuva forte" },
      { mes: "Julho",     maxima: 33, minima: 23, ceu: "chuvoso",    chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 33, minima: 23, ceu: "chuvoso",    chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 32, minima: 23, ceu: "chuvoso",    chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 29, minima: 19, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 26, minima: 14, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 23, minima: 11, ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "miami": {
    nome: "Miami, EUA",
    meses: [
      { mes: "Janeiro",   maxima: 25, minima: 16, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 26, minima: 17, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 27, minima: 19, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 29, minima: 21, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 30, minima: 23, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 32, minima: 25, ceu: "chuvoso",    chuva: "chuva forte" },
      { mes: "Julho",     maxima: 32, minima: 25, ceu: "chuvoso",    chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 32, minima: 25, ceu: "chuvoso",    chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 31, minima: 25, ceu: "chuvoso",    chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 29, minima: 23, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 27, minima: 20, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 26, minima: 17, ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "houston": {
    nome: "Houston (Texas), EUA",
    meses: [
      { mes: "Janeiro",   maxima: 17, minima: 7,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 19, minima: 9,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 23, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 27, minima: 17, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 30, minima: 21, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 33, minima: 24, ceu: "ensolarado", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 34, minima: 25, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 34, minima: 25, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 32, minima: 22, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 27, minima: 17, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 22, minima: 12, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 18, minima: 8,  ceu: "parcialmente nublado", chuva: "chuva moderada" }
    ]
  },
  "las vegas": {
    nome: "Las Vegas, EUA",
    meses: [
      { mes: "Janeiro",   maxima: 14, minima: 3,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 17, minima: 5,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Março",     maxima: 21, minima: 8,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Abril",     maxima: 26, minima: 12, ceu: "ensolarado", chuva: "seco" },
      { mes: "Maio",      maxima: 32, minima: 18, ceu: "ensolarado", chuva: "seco" },
      { mes: "Junho",     maxima: 39, minima: 23, ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 41, minima: 27, ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 40, minima: 26, ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 36, minima: 21, ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 28, minima: 14, ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 19, minima: 7,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 13, minima: 3,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "los angeles": {
    nome: "Los Angeles, EUA",
    meses: [
      { mes: "Janeiro",   maxima: 20, minima: 9,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 20, minima: 10, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 20, minima: 11, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 21, minima: 12, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 22, minima: 14, ceu: "parcialmente nublado", chuva: "seco" },
      { mes: "Junho",     maxima: 24, minima: 16, ceu: "parcialmente nublado", chuva: "seco" },
      { mes: "Julho",     maxima: 27, minima: 18, ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 27, minima: 18, ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 27, minima: 17, ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 25, minima: 15, ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 23, minima: 11, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 20, minima: 9,  ceu: "ensolarado", chuva: "chuva moderada" }
    ]
  },
  "cidade do mexico": {
    nome: "Cidade do México, México",
    meses: [
      { mes: "Janeiro",   maxima: 21, minima: 6,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 23, minima: 7,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Março",     maxima: 25, minima: 9,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Abril",     maxima: 26, minima: 11, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 26, minima: 12, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 24, minima: 12, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 23, minima: 12, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 23, minima: 12, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 22, minima: 12, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 22, minima: 10, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 21, minima: 7,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 20, minima: 6,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
"sao paulo": {
    nome: "São Paulo, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 28, minima: 19, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 28, minima: 19, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Março",     maxima: 27, minima: 18, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 25, minima: 15, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 23, minima: 12, ceu: "nublado",              chuva: "chuva leve" },
      { mes: "Junho",     maxima: 21, minima: 10, ceu: "nublado",              chuva: "seco" },
      { mes: "Julho",     maxima: 22, minima: 10, ceu: "ensolarado",           chuva: "seco" },
      { mes: "Agosto",    maxima: 23, minima: 11, ceu: "ensolarado",           chuva: "seco" },
      { mes: "Setembro",  maxima: 24, minima: 13, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 25, minima: 15, ceu: "nublado",              chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 26, minima: 17, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 27, minima: 18, ceu: "parcialmente nublado", chuva: "chuva forte" }
    ]
  },
  "rio de janeiro": {
    nome: "Rio de Janeiro, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 30, minima: 23, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 31, minima: 24, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 30, minima: 23, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 28, minima: 21, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 26, minima: 19, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 25, minima: 18, ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 25, minima: 17, ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 25, minima: 18, ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 25, minima: 18, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 26, minima: 19, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 27, minima: 20, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 29, minima: 22, ceu: "ensolarado", chuva: "chuva moderada" }
    ]
  },
  "curitiba": {
    nome: "Curitiba, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 26, minima: 17, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 26, minima: 17, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Março",     maxima: 25, minima: 16, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 23, minima: 13, ceu: "nublado",              chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 20, minima: 10, ceu: "nublado",              chuva: "chuva leve" },
      { mes: "Junho",     maxima: 18, minima: 8,  ceu: "nublado",              chuva: "chuva leve" },
      { mes: "Julho",     maxima: 18, minima: 8,  ceu: "nublado",              chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 20, minima: 9,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 21, minima: 11, ceu: "nublado",              chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 22, minima: 13, ceu: "nublado",              chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 24, minima: 14, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 25, minima: 16, ceu: "parcialmente nublado", chuva: "chuva forte" }
    ]
  },
  "porto alegre": {
    nome: "Porto Alegre, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 31, minima: 21, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 30, minima: 21, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 28, minima: 19, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 25, minima: 16, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 21, minima: 13, ceu: "nublado",              chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 18, minima: 10, ceu: "nublado",              chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 18, minima: 10, ceu: "nublado",              chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 19, minima: 11, ceu: "nublado",              chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 21, minima: 12, ceu: "nublado",              chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 24, minima: 15, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 27, minima: 17, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 29, minima: 19, ceu: "ensolarado", chuva: "chuva moderada" }
    ]
  },
  "amazonia": {
    nome: "Amazônia (região de Manaus), Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 31, minima: 23, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 31, minima: 23, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 31, minima: 23, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 31, minima: 23, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 31, minima: 23, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 32, minima: 23, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 32, minima: 22, ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 33, minima: 22, ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 34, minima: 23, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 34, minima: 23, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 33, minima: 23, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 32, minima: 23, ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "buenos aires": {
    nome: "Buenos Aires, Argentina",
    meses: [
      { mes: "Janeiro",   maxima: 30, minima: 20, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 29, minima: 19, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 26, minima: 17, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 22, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 18, minima: 10, ceu: "nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 14, minima: 7,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 14, minima: 7,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 16, minima: 8,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 18, minima: 10, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 21, minima: 12, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 25, minima: 16, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 28, minima: 18, ceu: "ensolarado", chuva: "chuva moderada" }
    ]
  },
"londres": {
    nome: "Londres, Reino Unido",
    meses: [
      { mes: "Janeiro",   maxima: 8,  minima: 3,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 8,  minima: 3,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 11, minima: 4,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 14, minima: 6,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 18, minima: 9,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 21, minima: 12, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 23, minima: 14, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 23, minima: 14, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 20, minima: 12, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 15, minima: 9,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 11, minima: 6,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 8,  minima: 4,  ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "manchester": {
    nome: "Manchester, Reino Unido",
    meses: [
      { mes: "Janeiro",   maxima: 7,  minima: 2,  ceu: "nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 7,  minima: 2,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 10, minima: 3,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 13, minima: 5,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 16, minima: 8,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 19, minima: 11, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 21, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 21, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 18, minima: 11, ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 14, minima: 8,  ceu: "nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 10, minima: 5,  ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 7,  minima: 3,  ceu: "nublado", chuva: "chuva forte" }
    ]
  },
  "liverpool": {
    nome: "Liverpool, Reino Unido",
    meses: [
      { mes: "Janeiro",   maxima: 7,  minima: 2,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 7,  minima: 2,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 10, minima: 4,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 13, minima: 5,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 16, minima: 8,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 19, minima: 11, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 21, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 20, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 18, minima: 11, ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 14, minima: 8,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 10, minima: 5,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 8,  minima: 3,  ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "southampton": {
    nome: "Southampton, Reino Unido",
    meses: [
      { mes: "Janeiro",   maxima: 8,  minima: 3,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 8,  minima: 3,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 11, minima: 4,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 14, minima: 6,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 17, minima: 8,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 20, minima: 11, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 22, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 22, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 20, minima: 12, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 15, minima: 9,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 11, minima: 6,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 9,  minima: 4,  ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "madrid": {
    nome: "Madrid, Espanha",
    meses: [
      { mes: "Janeiro",   maxima: 10, minima: 2,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 13, minima: 3,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 17, minima: 5,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 19, minima: 7,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 23, minima: 11, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 29, minima: 15, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 33, minima: 18, ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 32, minima: 18, ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 27, minima: 14, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 20, minima: 10, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 14, minima: 5,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 10, minima: 3,  ceu: "nublado", chuva: "chuva leve" }
    ]
  },
  "barcelona": {
    nome: "Barcelona, Espanha",
    meses: [
      { mes: "Janeiro",   maxima: 13, minima: 6,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 14, minima: 7,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 16, minima: 8,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 18, minima: 10, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 21, minima: 14, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 25, minima: 17, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 28, minima: 20, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 28, minima: 21, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 25, minima: 18, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 21, minima: 14, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 16, minima: 10, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 13, minima: 7,  ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "milao": {
    nome: "Milão, Itália",
    meses: [
      { mes: "Janeiro",   maxima: 6,  minima: 0,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 10, minima: 2,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 15, minima: 6,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 18, minima: 10, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 23, minima: 14, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 27, minima: 18, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 30, minima: 20, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 29, minima: 20, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 25, minima: 16, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 18, minima: 11, ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 11, minima: 5,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 7,  minima: 1,  ceu: "nublado", chuva: "chuva leve" }
    ]
  },
  "turim": {
    nome: "Turim, Itália",
    meses: [
      { mes: "Janeiro",   maxima: 6,  minima: -1, ceu: "nublado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 10, minima: 1,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 15, minima: 4,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 18, minima: 8,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 22, minima: 12, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 26, minima: 16, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 29, minima: 18, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 28, minima: 18, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 24, minima: 14, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 17, minima: 9,  ceu: "nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 11, minima: 4,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 6,  minima: 0,  ceu: "nublado", chuva: "chuva leve" }
    ]
  },
  "napoles": {
    nome: "Nápoles, Itália",
    meses: [
      { mes: "Janeiro",   maxima: 12, minima: 4,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 13, minima: 4,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 15, minima: 6,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 18, minima: 8,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 22, minima: 12, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 26, minima: 16, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 29, minima: 19, ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 29, minima: 19, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 26, minima: 16, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 21, minima: 13, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 16, minima: 9,  ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 13, minima: 5,  ceu: "parcialmente nublado", chuva: "chuva moderada" }
    ]
  },
  "sicilia": {
    nome: "Sicília (Palermo), Itália",
    meses: [
      { mes: "Janeiro",   maxima: 15, minima: 8,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 15, minima: 8,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 17, minima: 9,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 19, minima: 11, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 23, minima: 14, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 27, minima: 18, ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 30, minima: 21, ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 30, minima: 22, ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 28, minima: 20, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 24, minima: 16, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 19, minima: 12, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 16, minima: 9,  ceu: "parcialmente nublado", chuva: "chuva moderada" }
    ]
  },
  "munique": {
    nome: "Munique, Alemanha",
    meses: [
      { mes: "Janeiro",   maxima: 3,  minima: -4, ceu: "nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: 5,  minima: -3, ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Março",     maxima: 10, minima: 0,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 14, minima: 4,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 19, minima: 8,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 22, minima: 12, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 24, minima: 14, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 23, minima: 13, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 19, minima: 10, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 13, minima: 6,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 7,  minima: 1,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 4,  minima: -3, ceu: "nublado", chuva: "neve" }
    ]
  },
  "berlim": {
    nome: "Berlim, Alemanha",
    meses: [
      { mes: "Janeiro",   maxima: 3,  minima: -2, ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Fevereiro", maxima: 5,  minima: -2, ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Março",     maxima: 10, minima: 1,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 15, minima: 4,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 19, minima: 9,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 23, minima: 12, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 24, minima: 14, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 24, minima: 14, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 19, minima: 10, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 13, minima: 7,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 7,  minima: 2,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 4,  minima: -1, ceu: "nublado", chuva: "chuva e neve" }
    ]
  },
  "amsterdam": {
    nome: "Amsterdã, Países Baixos",
    meses: [
      { mes: "Janeiro",   maxima: 6,  minima: 1,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 7,  minima: 1,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 10, minima: 3,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 14, minima: 5,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 18, minima: 8,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 20, minima: 11, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 22, minima: 14, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 22, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 19, minima: 11, ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 14, minima: 8,  ceu: "nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 10, minima: 5,  ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 7,  minima: 2,  ceu: "nublado", chuva: "chuva forte" }
    ]
  },
  "moscou": {
    nome: "Moscou, Rússia",
    meses: [
      { mes: "Janeiro",   maxima: -4, minima: -9,  ceu: "nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: -3, minima: -10, ceu: "nublado", chuva: "neve" },
      { mes: "Março",     maxima: 3,  minima: -5,  ceu: "nublado", chuva: "neve" },
      { mes: "Abril",     maxima: 12, minima: 3,   ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Maio",      maxima: 19, minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 23, minima: 12,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 24, minima: 14,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 22, minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 16, minima: 8,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 9,  minima: 3,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 1,  minima: -3,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Dezembro",  maxima: -3, minima: -7,  ceu: "nublado", chuva: "neve" }
    ]
  },
  "bruxelas": {
    nome: "Bruxelas, Bélgica",
    meses: [
      { mes: "Janeiro",   maxima: 6,  minima: 1,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 7,  minima: 1,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 11, minima: 3,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 14, minima: 5,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 18, minima: 9,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 21, minima: 12, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 23, minima: 14, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 23, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 19, minima: 11, ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 14, minima: 8,  ceu: "nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 9,  minima: 4,  ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 6,  minima: 2,  ceu: "nublado", chuva: "chuva forte" }
    ]
  },
  "paris": {
    nome: "Paris, França",
    meses: [
      { mes: "Janeiro",   maxima: 7,  minima: 2,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 8,  minima: 2,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 12, minima: 4,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 16, minima: 6,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 19, minima: 10, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 23, minima: 13, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 25, minima: 15, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 25, minima: 15, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 21, minima: 12, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 16, minima: 9,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 10, minima: 5,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 7,  minima: 3,  ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "lyon": {
    nome: "Lyon, França",
    meses: [
      { mes: "Janeiro",   maxima: 6,  minima: 0,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 9,  minima: 1,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 14, minima: 4,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 17, minima: 7,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 21, minima: 11, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 25, minima: 14, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 28, minima: 17, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 28, minima: 16, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 23, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 17, minima: 9,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 10, minima: 4,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 6,  minima: 1,  ceu: "nublado", chuva: "chuva leve" }
    ]
  },
"tokyo": {
    nome: "Tóquio, Japão",
    meses: [
      { mes: "Janeiro",   maxima: 10, minima: 2,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 11, minima: 3,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Março",     maxima: 14, minima: 6,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 19, minima: 11, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 23, minima: 16, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 26, minima: 19, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 30, minima: 23, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 31, minima: 24, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 27, minima: 21, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 22, minima: 15, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 17, minima: 9,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 12, minima: 4,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "kyoto": {
    nome: "Kyoto, Japão",
    meses: [
      { mes: "Janeiro",   maxima: 9,  minima: 1,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 10, minima: 1,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 14, minima: 4,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 20, minima: 9,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 24, minima: 14, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 27, minima: 19, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 31, minima: 23, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 33, minima: 24, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 28, minima: 20, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 22, minima: 13, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 16, minima: 7,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 11, minima: 3,  ceu: "parcialmente nublado", chuva: "chuva leve" }
    ]
  },
  "okinawa": {
    nome: "Okinawa, Japão",
    meses: [
      { mes: "Janeiro",   maxima: 19, minima: 15, ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 19, minima: 15, ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 21, minima: 17, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 24, minima: 19, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 27, minima: 22, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 30, minima: 25, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 32, minima: 26, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 32, minima: 26, ceu: "ensolarado", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 31, minima: 25, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 28, minima: 23, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 24, minima: 20, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 21, minima: 17, ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "osaka": {
    nome: "Osaka, Japão",
    meses: [
      { mes: "Janeiro",   maxima: 9,  minima: 2,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 10, minima: 2,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 14, minima: 5,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 20, minima: 10, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 24, minima: 15, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 28, minima: 20, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 32, minima: 24, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 33, minima: 25, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 29, minima: 21, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 23, minima: 14, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 17, minima: 8,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 12, minima: 4,  ceu: "parcialmente nublado", chuva: "chuva leve" }
    ]
  },
  "seul": {
    nome: "Seul, Coreia do Sul",
    meses: [
      { mes: "Janeiro",   maxima: 1,  minima: -8,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 4,  minima: -6,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Março",     maxima: 11, minima: -1,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 18, minima: 6,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 23, minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 27, minima: 17,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 29, minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 30, minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 26, minima: 15,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 19, minima: 7,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 11, minima: 0,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 3,  minima: -6,  ceu: "ensolarado", chuva: "neve" }
    ]
  },
  "pequim": {
    nome: "Pequim, China",
    meses: [
      { mes: "Janeiro",   maxima: 2,  minima: -9,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 6,  minima: -6,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Março",     maxima: 13, minima: 0,   ceu: "parcialmente nublado", chuva: "seco" },
      { mes: "Abril",     maxima: 21, minima: 7,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 27, minima: 13,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 31, minima: 18,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 31, minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 30, minima: 21,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 26, minima: 14,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 19, minima: 7,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 10, minima: -1,  ceu: "parcialmente nublado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 3,  minima: -6,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "xangai": {
    nome: "Xangai, China",
    meses: [
      { mes: "Janeiro",   maxima: 8,  minima: 2,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 9,  minima: 3,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 13, minima: 6,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 19, minima: 12, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 24, minima: 17, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 28, minima: 21, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 32, minima: 25, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 32, minima: 25, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 28, minima: 21, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 23, minima: 15, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 17, minima: 9,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 11, minima: 3,  ceu: "nublado", chuva: "chuva leve" }
    ]
  },
  "shenzen": {
    nome: "Shenzhen, China",
    meses: [
      { mes: "Janeiro",   maxima: 19, minima: 12, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 19, minima: 13, ceu: "nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 22, minima: 16, ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 25, minima: 20, ceu: "chuvoso", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 29, minima: 23, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 31, minima: 25, ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 32, minima: 26, ceu: "ensolarado", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 32, minima: 25, ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 31, minima: 24, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 29, minima: 21, ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 25, minima: 17, ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 21, minima: 13, ceu: "ensolarado", chuva: "seco" }
    ]
  }
};

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const tab = link.dataset.tab;

    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

    link.classList.add('active');
    document.getElementById('panel-' + tab).classList.add('active');
  });
});



function fmt(n) {
  return Number(n).toLocaleString('pt-BR');
}

function fmtDate(d) {
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}


function diffDates(a, b) {
  let years  = b.getFullYear() - a.getFullYear();
  let months = b.getMonth()    - a.getMonth();
  let days   = b.getDate()     - a.getDate();

  if (days < 0) {
    months--;
    // dias no mês anterior a b
    days += new Date(b.getFullYear(), b.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
}

function totalDays(a, b) {
  return Math.floor((b - a) / 86400000);
}

function showError(id, msg) {
  const el = document.getElementById(id);
  el.classList.remove('hidden');
  el.innerHTML = `<div class="error-msg">${msg}</div>`;
}

function metricCard(num, lbl, highlight = false) {
  return `
    <div class="metric-card${highlight ? ' highlight' : ''}">
      <div class="metric-num">${fmt(num)}</div>
      <div class="metric-lbl">${lbl}</div>
    </div>`;
}

function totalItem(num, lbl) {
  return `
    <div class="total-item">
      <span class="t-num">${fmt(num)}</span>
      <span class="t-lbl">${lbl}</span>
    </div>`;
}



function calcIdade() {
  const val = document.getElementById('i-birth').value;
  if (!val) { showError('i-result', 'Informe uma data de nascimento.'); return; }

  const birth = new Date(val + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (birth > today) { showError('i-result', 'A data de nascimento não pode ser no futuro.'); return; }

  const { years, months, days } = diffDates(birth, today);
  const td   = totalDays(birth, today);
  const tw   = Math.floor(td / 7);
  const tm   = years * 12 + months;
  const th   = td * 24;

  const el = document.getElementById('i-result');
  el.classList.remove('hidden');
  el.innerHTML = `
    <div class="metrics-grid">
      ${metricCard(years,  'anos',  true)}
      ${metricCard(months, 'meses')}
      ${metricCard(days,   'dias')}
    </div>
    <div class="totals-bar">
      ${totalItem(td, 'dias no total')}
      <div class="totals-divider"></div>
      ${totalItem(tw, 'semanas')}
      <div class="totals-divider"></div>
      ${totalItem(tm, 'meses')}
      <div class="totals-divider"></div>
      ${totalItem(th, 'horas')}
    </div>`;
}



function calcDiff() {
  const sv = document.getElementById('d-start').value;
  const ev = document.getElementById('d-end').value;
  if (!sv || !ev) { showError('d-result', 'Informe as duas datas.'); return; }

  let a = new Date(sv + 'T00:00:00');
  let b = new Date(ev + 'T00:00:00');
  const inverted = a > b;
  if (inverted) [a, b] = [b, a];

  const { years, months, days } = diffDates(a, b);
  const td = totalDays(a, b);
  const tw = Math.floor(td / 7);
  const tm = years * 12 + months;

  const el = document.getElementById('d-result');
  el.classList.remove('hidden');
  el.innerHTML = `
    <div class="metrics-grid">
      ${metricCard(years,  'anos',  true)}
      ${metricCard(months, 'meses')}
      ${metricCard(days,   'dias')}
    </div>
    <div class="totals-bar">
      ${totalItem(td, 'dias')}
      <div class="totals-divider"></div>
      ${totalItem(tw, 'semanas')}
      <div class="totals-divider"></div>
      ${totalItem(tm, 'meses completos')}
      ${inverted ? '<span class="badge-past" style="margin-left:auto">ordem invertida</span>' : ''}
    </div>`;
}



function calcCountdown() {
  const val = document.getElementById('c-target').value;
  if (!val) { showError('c-result', 'Informe a data alvo.'); return; }

  const lbl    = document.getElementById('c-label').value.trim();
  const target = new Date(val + 'T00:00:00');
  const today  = new Date();
  today.setHours(0, 0, 0, 0);

  const isPast = target < today;
  const [a, b] = isPast ? [target, today] : [today, target];

  const td = totalDays(a, b);
  const { years, months, days } = diffDates(a, b);
  const tw = Math.floor(td / 7);

  const badge   = isPast
    ? '<span class="badge-past">já passou</span>'
    : '<span class="badge-future">em breve</span>';

  const pretext = isPast ? 'desde' : 'faltam para';

  const el = document.getElementById('c-result');
  el.classList.remove('hidden');
  el.innerHTML = `
    <div class="countdown-display">
      ${lbl ? `<p class="countdown-label-name">${escapeHTML(lbl)}</p>` : ''}
      <div class="countdown-big">${fmt(td)}</div>
      <div class="countdown-unit">dias ${pretext} ${fmtDate(target)} ${badge}</div>
    </div>
    <div class="metrics-grid">
      ${metricCard(years,  'anos')}
      ${metricCard(months, 'meses')}
      ${metricCard(days,   'dias')}
      ${metricCard(tw,     'semanas')}
    </div>`;
}



function calcHoras() {
  const sv = document.getElementById('h-start').value;
  const ev = document.getElementById('h-end').value;
  if (!sv || !ev) { showError('h-result', 'Informe os dois horários.'); return; }

  let a = new Date(sv);
  let b = new Date(ev);
  const inverted = a > b;
  if (inverted) [a, b] = [b, a];

  const diffMs  = b - a;
  const totSec  = Math.floor(diffMs / 1000);
  const totMin  = Math.floor(totSec / 60);
  const totHr   = Math.floor(totMin / 60);

  const h = Math.floor(diffMs / 3600000);
  const m = Math.floor((diffMs % 3600000) / 60000);
  const s = Math.floor((diffMs % 60000) / 1000);

  const td = Math.floor(diffMs / 86400000);
  const tw = Math.floor(td / 7);

  const el = document.getElementById('h-result');
  el.classList.remove('hidden');
  el.innerHTML = `
    <div class="metrics-grid">
      ${metricCard(h, 'horas',   true)}
      ${metricCard(m, 'minutos')}
      ${metricCard(s, 'segundos')}
    </div>
    <div class="totals-bar">
      ${totalItem(totHr,  'horas totais')}
      <div class="totals-divider"></div>
      ${totalItem(totMin, 'minutos')}
      <div class="totals-divider"></div>
      ${totalItem(totSec, 'segundos')}
      <div class="totals-divider"></div>
      ${totalItem(td, 'dias')}
      ${inverted ? '<span class="badge-past" style="margin-left:auto">ordem invertida</span>' : ''}
    </div>`;
}

function calcSemana() {
  const val = document.getElementById('w-date').value;
  if (!val) { showError('w-result', 'Informe uma data.'); return; }

  const target = new Date(val + 'T00:00:00');
  const today  = new Date();
  today.setHours(0, 0, 0, 0);

  const weekdayFull = target.toLocaleDateString('pt-BR', { weekday: 'long' });
  const weekdayCap  = weekdayFull.charAt(0).toUpperCase() + weekdayFull.slice(1);

  const isPast  = target < today;
  const isToday = target.getTime() === today.getTime();

  let badge, pretext;
  if (isToday) {
    badge = '<span class="badge-future">hoje</span>';
    pretext = 'é';
  } else if (isPast) {
    badge = '<span class="badge-past">já passou</span>';
    pretext = 'foi';
  } else {
    badge = '<span class="badge-future">futuro</span>';
    pretext = 'será';
  }

  const el = document.getElementById('w-result');
  el.classList.remove('hidden');
  el.innerHTML = `
    <div class="countdown-display">
      <div class="countdown-big" style="font-size: clamp(2.2rem, 6vw, 3.5rem);">${weekdayCap}</div>
      <div class="countdown-unit">${fmtDate(target)} ${pretext} ${weekdayCap.toLowerCase()} ${badge}</div>
    </div>`;
}
// ─── Autocomplete genérico (reutilizado por cidade e mês) ──────────────────

function setupAutocomplete(inputEl, suggestionsEl, getMatches, renderLabel, onSelect) {
  inputEl.addEventListener('focus', () => inputEl.select());
  
  inputEl.addEventListener('input', () => {
    const query = inputEl.value.trim().toLowerCase();
    suggestionsEl.innerHTML = '';
    inputEl.dataset.key = ''; // limpa seleção anterior ao digitar de novo

    if (!query) {
      suggestionsEl.classList.add('hidden');
      return;
    }

    const matches = getMatches(query);

    if (matches.length === 0) {
      suggestionsEl.innerHTML = '<div class="suggestion-empty">Nenhum resultado encontrado</div>';
      suggestionsEl.classList.remove('hidden');
      return;
    }

    matches.forEach(m => {
      const item = document.createElement('div');
      item.className = 'suggestion-item';
      item.textContent = renderLabel(m);
      item.addEventListener('click', () => {
        onSelect(m);
        suggestionsEl.classList.add('hidden');
      });
      suggestionsEl.appendChild(item);
    });

    suggestionsEl.classList.remove('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!inputEl.contains(e.target) && !suggestionsEl.contains(e.target)) {
      suggestionsEl.classList.add('hidden');
    }
  });

  inputEl.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();

    const firstMatch = suggestionsEl.querySelector('.suggestion-item');
    if (!suggestionsEl.classList.contains('hidden') && firstMatch) {
      firstMatch.click();
    } else {
      const card = inputEl.closest('.form-card');
      const btn  = card ? card.querySelector('.btn-calc') : null;
      if (btn) btn.click();
    }
  });
}

const cidadeInput      = document.getElementById('cl-city');
const citySuggestions  = document.getElementById('cl-suggestions');
const mesInput         = document.getElementById('cl-month');
const mesSuggestions   = document.getElementById('cl-month-suggestions');
const nomesDosMeses    = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

setupAutocomplete(
  cidadeInput,
  citySuggestions,
  query => Object.keys(climaData).filter(key => key.startsWith(query)),
  key => climaData[key].nome,
  key => { cidadeInput.value = climaData[key].nome; cidadeInput.dataset.key = key; }
);

setupAutocomplete(
  mesInput,
  mesSuggestions,
  query => nomesDosMeses.filter(m => m.toLowerCase().startsWith(query)),
  m => m,
  m => { mesInput.value = m; mesInput.dataset.key = m; }
);


// ─── Calculadora de clima ────────────────────────────────────────────────

function calcClima() {
  const key = cidadeInput.dataset.key;
  const mes = mesInput.dataset.key;

  if (!key || !climaData[key]) {
    showError('cl-result', 'Selecione uma cidade da lista de sugestões.');
    return;
  }
  if (!mes) {
    showError('cl-result', 'Selecione um mês da lista de sugestões.');
    return;
  }

  const cidade   = climaData[key];
  const dadosMes = cidade.meses.find(m => m.mes === mes);

  const el = document.getElementById('cl-result');
  el.classList.remove('hidden');
  el.innerHTML = `
    <div class="countdown-display">
      <p class="countdown-label-name">${escapeHTML(cidade.nome)} — ${mes}</p>
      <div class="countdown-big" style="font-size: clamp(2.4rem, 7vw, 4rem);">${dadosMes.maxima}° / ${dadosMes.minima}°</div>
      <div class="countdown-unit">céu ${dadosMes.ceu} &nbsp;·&nbsp; ${dadosMes.chuva}</div>
    </div>`;
}

document.getElementById('btn-clima').addEventListener('click', calcClima);


// ─── Enter para calcular nas outras abas ────────────────────────────────

document.querySelectorAll('.form-card input:not(#cl-city):not(#cl-month)').forEach(input => {
  input.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const card = input.closest('.form-card');
    const btn  = card ? card.querySelector('.btn-calc') : null;
    if (btn) btn.click();
  });
});
document.getElementById('btn-idade').addEventListener('click', calcIdade);
document.getElementById('btn-diff').addEventListener('click', calcDiff);
document.getElementById('btn-countdown').addEventListener('click', calcCountdown);
document.getElementById('btn-horas').addEventListener('click', calcHoras);
document.getElementById('btn-semana').addEventListener('click', calcSemana);
