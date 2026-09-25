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
  },
  "sao goncalo": {
    nome: "São Gonçalo, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 30, minima: 23, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 31, minima: 24, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 30, minima: 23, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 28, minima: 21, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 26, minima: 19, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 25, minima: 17, ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 25, minima: 17, ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 25, minima: 18, ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 25, minima: 18, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 26, minima: 19, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 27, minima: 20, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 29, minima: 22, ceu: "ensolarado", chuva: "chuva moderada" }
    ]
  },
  "niteroi": {
    nome: "Niterói, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 29, minima: 23, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 30, minima: 24, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 29, minima: 23, ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 27, minima: 21, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 25, minima: 19, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 24, minima: 18, ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 24, minima: 17, ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 24, minima: 18, ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 24, minima: 18, ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 25, minima: 19, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 26, minima: 20, ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 28, minima: 22, ceu: "ensolarado", chuva: "chuva moderada" }
    ]
  },
  "edimburgo": {
    nome: "Edimburgo, Escócia (Reino Unido)",
    meses: [
      { mes: "Janeiro",   maxima: 7,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 7,   minima: 1,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 10,  minima: 2,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 12,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 15,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 18,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 19,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 19,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 17,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 13,  minima: 7,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 9,   minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 7,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "glasgow": {
    nome: "Glasgow, Escócia (Reino Unido)",
    meses: [
      { mes: "Janeiro",   maxima: 7,   minima: 1,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 7,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 9,   minima: 2,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 12,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 16,  minima: 6,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 18,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 19,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 19,  minima: 11,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 16,  minima: 9,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 13,  minima: 6,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 9,   minima: 3,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 7,   minima: 1,   ceu: "nublado", chuva: "chuva forte" }
    ]
  },
  "inverness": {
    nome: "Inverness (Terras Altas), Escócia (Reino Unido)",
    meses: [
      { mes: "Janeiro",   maxima: 7,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 7,   minima: 1,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 9,   minima: 2,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 11,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 14,  minima: 6,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 17,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 19,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 18,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 16,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 12,  minima: 6,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 9,   minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 7,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "aberdeen": {
    nome: "Aberdeen, Escócia (Reino Unido)",
    meses: [
      { mes: "Janeiro",   maxima: 6,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 7,   minima: 1,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 9,   minima: 2,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 11,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 13,  minima: 6,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 16,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 18,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 18,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 16,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 13,  minima: 6,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 9,   minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 7,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "cardiff": {
    nome: "Cardiff, País de Gales (Reino Unido)",
    meses: [
      { mes: "Janeiro",   maxima: 8,   minima: 3,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 9,   minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 11,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 14,  minima: 6,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 17,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 20,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 21,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 21,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 19,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 15,  minima: 9,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 11,  minima: 5,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 9,   minima: 3,   ceu: "nublado", chuva: "chuva forte" }
    ]
  },
  "swansea": {
    nome: "Swansea, País de Gales (Reino Unido)",
    meses: [
      { mes: "Janeiro",   maxima: 8,   minima: 4,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 8,   minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 10,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 13,  minima: 6,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 16,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 18,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 20,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 20,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 18,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 15,  minima: 9,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 11,  minima: 6,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 9,   minima: 4,   ceu: "nublado", chuva: "chuva forte" }
    ]
  },
  "vancouver": {
    nome: "Vancouver, Canadá",
    meses: [
      { mes: "Janeiro",   maxima: 7,   minima: 1,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 8,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 10,  minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 13,  minima: 5,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 17,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 19,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 22,  minima: 13,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 22,  minima: 13,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 19,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 13,  minima: 6,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 9,   minima: 3,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 6,   minima: 1,   ceu: "nublado", chuva: "chuva forte" }
    ]
  },
  "montreal": {
    nome: "Montreal, Canadá",
    meses: [
      { mes: "Janeiro",   maxima: -5,  minima: -13, ceu: "nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: -3,  minima: -11, ceu: "nublado", chuva: "neve" },
      { mes: "Março",     maxima: 3,   minima: -5,  ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Abril",     maxima: 11,  minima: 2,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 19,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 24,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 26,  minima: 17,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 25,  minima: 16,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 20,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 13,  minima: 5,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 5,   minima: -1,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Dezembro",  maxima: -2,  minima: -9,  ceu: "nublado", chuva: "neve" }
    ]
  },
  "quebec": {
    nome: "Quebec (cidade), Canadá",
    meses: [
      { mes: "Janeiro",   maxima: -8,  minima: -18, ceu: "nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: -6,  minima: -16, ceu: "nublado", chuva: "neve" },
      { mes: "Março",     maxima: 0,   minima: -9,  ceu: "parcialmente nublado", chuva: "neve" },
      { mes: "Abril",     maxima: 8,   minima: -1,  ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Maio",      maxima: 17,  minima: 5,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 22,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 25,  minima: 14,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 24,  minima: 13,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 18,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 11,  minima: 2,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 3,   minima: -4,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Dezembro",  maxima: -4,  minima: -13, ceu: "nublado", chuva: "neve" }
    ]
  },
  "ottawa": {
    nome: "Ottawa, Canadá",
    meses: [
      { mes: "Janeiro",   maxima: -6,  minima: -15, ceu: "nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: -4,  minima: -13, ceu: "nublado", chuva: "neve" },
      { mes: "Março",     maxima: 2,   minima: -7,  ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Abril",     maxima: 11,  minima: 1,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 19,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 24,  minima: 13,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 27,  minima: 15,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 25,  minima: 14,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 20,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 13,  minima: 3,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 5,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Dezembro",  maxima: -3,  minima: -11, ceu: "nublado", chuva: "neve" }
    ]
  },
  "calgary": {
    nome: "Calgary, Canadá",
    meses: [
      { mes: "Janeiro",   maxima: -1,  minima: -13, ceu: "ensolarado", chuva: "neve" },
      { mes: "Fevereiro", maxima: 0,   minima: -12, ceu: "ensolarado", chuva: "neve" },
      { mes: "Março",     maxima: 4,   minima: -8,  ceu: "parcialmente nublado", chuva: "neve" },
      { mes: "Abril",     maxima: 11,  minima: -2,  ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Maio",      maxima: 16,  minima: 3,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 20,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 23,  minima: 10,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 23,  minima: 9,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 18,  minima: 4,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 11,  minima: -2,  ceu: "ensolarado", chuva: "neve" },
      { mes: "Novembro",  maxima: 3,   minima: -9,  ceu: "parcialmente nublado", chuva: "neve" },
      { mes: "Dezembro",  maxima: -1,  minima: -13, ceu: "ensolarado", chuva: "neve" }
    ]
  },
  "cancun": {
    nome: "Cancún, México",
    meses: [
      { mes: "Janeiro",   maxima: 28,  minima: 19,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 28,  minima: 19,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 30,  minima: 21,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Abril",     maxima: 31,  minima: 22,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Maio",      maxima: 32,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 32,  minima: 25,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 33,  minima: 25,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 33,  minima: 25,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 32,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 29,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 28,  minima: 19,  ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "guadalajara": {
    nome: "Guadalajara, México",
    meses: [
      { mes: "Janeiro",   maxima: 25,  minima: 7,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 27,  minima: 8,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Março",     maxima: 29,  minima: 10,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Abril",     maxima: 31,  minima: 12,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Maio",      maxima: 32,  minima: 15,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Junho",     maxima: 30,  minima: 17,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 27,  minima: 16,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 27,  minima: 16,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 27,  minima: 16,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 27,  minima: 13,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 26,  minima: 10,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 25,  minima: 8,   ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "monterrey": {
    nome: "Monterrey, México",
    meses: [
      { mes: "Janeiro",   maxima: 20,  minima: 8,   ceu: "parcialmente nublado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 23,  minima: 10,  ceu: "parcialmente nublado", chuva: "seco" },
      { mes: "Março",     maxima: 27,  minima: 13,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Abril",     maxima: 30,  minima: 17,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 32,  minima: 20,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 34,  minima: 22,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 35,  minima: 22,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 35,  minima: 22,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 31,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 27,  minima: 17,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 24,  minima: 12,  ceu: "parcialmente nublado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 21,  minima: 9,   ceu: "parcialmente nublado", chuva: "seco" }
    ]
  },
  "cordoba": {
    nome: "Córdoba, Argentina",
    meses: [
      { mes: "Janeiro",   maxima: 31,  minima: 17,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 30,  minima: 16,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 28,  minima: 15,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 25,  minima: 11,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 22,  minima: 7,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Junho",     maxima: 19,  minima: 4,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 19,  minima: 3,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 21,  minima: 4,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 24,  minima: 8,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 26,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 29,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 30,  minima: 16,  ceu: "parcialmente nublado", chuva: "chuva forte" }
    ]
  },
  "mendoza": {
    nome: "Mendoza, Argentina",
    meses: [
      { mes: "Janeiro",   maxima: 32,  minima: 19,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 30,  minima: 17,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 27,  minima: 15,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 23,  minima: 10,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Maio",      maxima: 19,  minima: 6,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Junho",     maxima: 15,  minima: 3,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 15,  minima: 2,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 18,  minima: 4,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 21,  minima: 7,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 25,  minima: 11,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 29,  minima: 15,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 31,  minima: 18,  ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "bariloche": {
    nome: "San Carlos de Bariloche, Argentina",
    meses: [
      { mes: "Janeiro",   maxima: 22,  minima: 6,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 22,  minima: 6,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Março",     maxima: 18,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 14,  minima: 2,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 10,  minima: 0,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 7,   minima: -1,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Julho",     maxima: 6,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Agosto",    maxima: 8,   minima: -2,  ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Setembro",  maxima: 11,  minima: -1,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 14,  minima: 1,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 18,  minima: 3,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 20,  minima: 5,   ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "ushuaia": {
    nome: "Ushuaia (Terra do Fogo), Argentina",
    meses: [
      { mes: "Janeiro",   maxima: 14,  minima: 5,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 14,  minima: 5,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 12,  minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 9,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 6,   minima: -1,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Junho",     maxima: 4,   minima: -3,  ceu: "nublado", chuva: "neve" },
      { mes: "Julho",     maxima: 4,   minima: -3,  ceu: "nublado", chuva: "neve" },
      { mes: "Agosto",    maxima: 5,   minima: -2,  ceu: "nublado", chuva: "neve" },
      { mes: "Setembro",  maxima: 8,   minima: 0,   ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Outubro",   maxima: 10,  minima: 1,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 12,  minima: 3,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 13,  minima: 4,   ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "salvador": {
    nome: "Salvador, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 30,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 30,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 30,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 29,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 28,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 27,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 26,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 27,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 27,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 28,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 29,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 30,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "recife": {
    nome: "Recife, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 31,  minima: 25,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 31,  minima: 25,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 31,  minima: 25,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 30,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 29,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 28,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 27,  minima: 21,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 28,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 29,  minima: 22,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 30,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 30,  minima: 24,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 31,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "fortaleza": {
    nome: "Fortaleza, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 31,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 31,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 30,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 30,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 30,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 30,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 30,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 30,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 31,  minima: 24,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 31,  minima: 24,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 31,  minima: 25,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 31,  minima: 25,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "natal": {
    nome: "Natal, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 30,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 30,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 30,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 30,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 29,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 28,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 28,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 28,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 29,  minima: 22,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 30,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 30,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 30,  minima: 24,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "belem": {
    nome: "Belém, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 32,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 32,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 32,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 33,  minima: 22,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 33,  minima: 22,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 33,  minima: 22,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 33,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 32,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva moderada" }
    ]
  },
  "brasilia": {
    nome: "Brasília, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 27,  minima: 18,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 27,  minima: 18,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 27,  minima: 18,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 27,  minima: 17,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 26,  minima: 15,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 25,  minima: 13,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 25,  minima: 13,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 27,  minima: 14,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 29,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 29,  minima: 18,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 27,  minima: 18,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 27,  minima: 18,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "belo horizonte": {
    nome: "Belo Horizonte, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 29,  minima: 19,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 30,  minima: 19,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 29,  minima: 19,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 28,  minima: 17,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 26,  minima: 15,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Junho",     maxima: 25,  minima: 13,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 25,  minima: 13,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 26,  minima: 14,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 28,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 28,  minima: 18,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 28,  minima: 18,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 28,  minima: 19,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "florianopolis": {
    nome: "Florianópolis, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 29,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 29,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Março",     maxima: 28,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 26,  minima: 19,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 24,  minima: 16,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 22,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 21,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 21,  minima: 14,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 22,  minima: 15,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 24,  minima: 17,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 26,  minima: 19,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 28,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" }
    ]
  },
  "gramado": {
    nome: "Gramado (Serra Gaúcha), Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 25,  minima: 15,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 25,  minima: 15,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 23,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 20,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 17,  minima: 8,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 15,  minima: 6,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 14,  minima: 6,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 16,  minima: 7,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 17,  minima: 8,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 20,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 22,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 24,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" }
    ]
  },
  "antartida": {
    nome: "Antártida (Estação McMurdo)",
    meses: [
      { mes: "Janeiro",   maxima: 0,   minima: -5,  ceu: "ensolarado o dia inteiro (sol da meia-noite)", chuva: "neve" },
      { mes: "Fevereiro", maxima: -4,  minima: -10, ceu: "parcialmente nublado", chuva: "neve" },
      { mes: "Março",     maxima: -11, minima: -18, ceu: "nublado, com o sol se pondo", chuva: "neve" },
      { mes: "Abril",     maxima: -15, minima: -22, ceu: "escuro (noite polar)", chuva: "neve" },
      { mes: "Maio",      maxima: -16, minima: -24, ceu: "escuro (noite polar)", chuva: "neve" },
      { mes: "Junho",     maxima: -16, minima: -24, ceu: "escuro (noite polar)", chuva: "neve" },
      { mes: "Julho",     maxima: -18, minima: -27, ceu: "escuro (noite polar)", chuva: "neve" },
      { mes: "Agosto",    maxima: -19, minima: -27, ceu: "escuro, com o sol voltando", chuva: "neve" },
      { mes: "Setembro",  maxima: -17, minima: -25, ceu: "nublado", chuva: "neve" },
      { mes: "Outubro",   maxima: -13, minima: -20, ceu: "parcialmente nublado", chuva: "neve" },
      { mes: "Novembro",  maxima: -5,  minima: -12, ceu: "ensolarado quase o dia inteiro", chuva: "neve" },
      { mes: "Dezembro",  maxima: 0,   minima: -5,  ceu: "ensolarado o dia inteiro (sol da meia-noite)", chuva: "neve" }
    ]
  },
  "artico": {
    nome: "Ártico (Longyearbyen, Svalbard)",
    meses: [
      { mes: "Janeiro",   maxima: -13, minima: -20, ceu: "escuro (noite polar)", chuva: "neve" },
      { mes: "Fevereiro", maxima: -13, minima: -20, ceu: "escuro, com o sol voltando", chuva: "neve" },
      { mes: "Março",     maxima: -13, minima: -20, ceu: "parcialmente nublado", chuva: "neve" },
      { mes: "Abril",     maxima: -9,  minima: -16, ceu: "ensolarado quase o dia inteiro", chuva: "neve" },
      { mes: "Maio",      maxima: -2,  minima: -7,  ceu: "ensolarado o dia inteiro (sol da meia-noite)", chuva: "chuva e neve" },
      { mes: "Junho",     maxima: 4,   minima: 0,   ceu: "ensolarado o dia inteiro (sol da meia-noite)", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 8,   minima: 4,   ceu: "ensolarado o dia inteiro (sol da meia-noite)", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 6,   minima: 3,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 1,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Outubro",   maxima: -4,  minima: -9,  ceu: "parcialmente nublado", chuva: "neve" },
      { mes: "Novembro",  maxima: -8,  minima: -14, ceu: "escuro (noite polar)", chuva: "neve" },
      { mes: "Dezembro",  maxima: -11, minima: -17, ceu: "escuro (noite polar)", chuva: "neve" }
    ]
  },
  "carcosa": {
    nome: "Carcosa, às margens do Lago de Hali",
    meses: [
      { mes: "Janeiro",   maxima: 13,  minima: 6,   ceu: "de estrelas negras", chuva: "névoa sobre o Lago de Hali" },
      { mes: "Fevereiro", maxima: 12,  minima: 5,   ceu: "com duas luas girando", chuva: "nuvens que se desfazem no lago" },
      { mes: "Março",     maxima: 13,  minima: 6,   ceu: "com sóis gêmeos afundando no lago", chuva: "as sombras se alongam à tarde" },
      { mes: "Abril",     maxima: 11,  minima: 4,   ceu: "de estrelas negras", chuva: "névoa sobre o Lago de Hali" },
      { mes: "Maio",      maxima: 12,  minima: 5,   ceu: "com as Híades no alto", chuva: "canção das Híades no vento" },
      { mes: "Junho",     maxima: 13,  minima: 6,   ceu: "amarelo e imóvel", chuva: "nuvens que se desfazem no lago" },
      { mes: "Julho",     maxima: 13,  minima: 6,   ceu: "de estrelas negras", chuva: "névoa sobre o Lago de Hali" },
      { mes: "Agosto",    maxima: 12,  minima: 5,   ceu: "com sóis gêmeos afundando no lago", chuva: "as sombras se alongam à tarde" },
      { mes: "Setembro",  maxima: 11,  minima: 4,   ceu: "com duas luas girando", chuva: "canção das Híades no vento" },
      { mes: "Outubro",   maxima: 10,  minima: 3,   ceu: "de estrelas negras", chuva: "névoa sobre o Lago de Hali" },
      { mes: "Novembro",  maxima: 9,   minima: 2,   ceu: "com Aldebarã no alto", chuva: "o Rei de Amarelo tirou a máscara?" },
      { mes: "Dezembro",  maxima: 13,  minima: 6,   ceu: "amarelo e imóvel", chuva: "não há máscara" }
    ]
  },
  "estrela da morte": {
    nome: "Estrela da Morte, Império Galáctico",
    meses: [
      { mes: "Janeiro",   maxima: 21,  minima: 19,  ceu: "de aço (climatizado pelo Império)", chuva: "sem chuva, só disparos de blaster" },
      { mes: "Fevereiro", maxima: 21,  minima: 19,  ceu: "de aço (climatizado pelo Império)", chuva: "sem chuva, só disparos de blaster" },
      { mes: "Março",     maxima: 21,  minima: 19,  ceu: "de aço (climatizado pelo Império)", chuva: "sem chuva, só disparos de blaster" },
      { mes: "Abril",     maxima: 21,  minima: 19,  ceu: "de aço (climatizado pelo Império)", chuva: "sem chuva, só disparos de blaster" },
      { mes: "Maio",      maxima: 21,  minima: 19,  ceu: "de aço (climatizado pelo Império)", chuva: "que a Força esteja com você" },
      { mes: "Junho",     maxima: 21,  minima: 19,  ceu: "de aço (climatizado pelo Império)", chuva: "sem chuva, só disparos de blaster" },
      { mes: "Julho",     maxima: 21,  minima: 19,  ceu: "de aço (climatizado pelo Império)", chuva: "sem chuva, só disparos de blaster" },
      { mes: "Agosto",    maxima: 21,  minima: 19,  ceu: "de aço (climatizado pelo Império)", chuva: "sem chuva, só disparos de blaster" },
      { mes: "Setembro",  maxima: 21,  minima: 19,  ceu: "de aço (climatizado pelo Império)", chuva: "sem chuva, só disparos de blaster" },
      { mes: "Outubro",   maxima: 21,  minima: 19,  ceu: "de aço (climatizado pelo Império)", chuva: "sem chuva, só disparos de blaster" },
      { mes: "Novembro",  maxima: 21,  minima: 19,  ceu: "de aço (climatizado pelo Império)", chuva: "sem chuva, só disparos de blaster" },
      { mes: "Dezembro",  maxima: 21,  minima: 19,  ceu: "de aço (climatizado pelo Império)", chuva: "sem chuva, só disparos de blaster" }
    ]
  },
  "goiania": {
    nome: "Goiânia, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 30,  minima: 20,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 30,  minima: 20,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 30,  minima: 20,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 30,  minima: 19,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 29,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 29,  minima: 14,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 30,  minima: 14,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 32,  minima: 15,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 33,  minima: 18,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 32,  minima: 20,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 30,  minima: 20,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 30,  minima: 20,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "campo grande": {
    nome: "Campo Grande, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 31,  minima: 21,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 31,  minima: 21,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 31,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 30,  minima: 19,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 28,  minima: 16,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 27,  minima: 15,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 28,  minima: 14,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 30,  minima: 15,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 31,  minima: 18,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 32,  minima: 20,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 32,  minima: 21,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 32,  minima: 21,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "cuiaba": {
    nome: "Cuiabá, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 33,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 33,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 33,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 33,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 32,  minima: 20,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 32,  minima: 18,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 33,  minima: 17,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 35,  minima: 18,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 36,  minima: 22,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 35,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 34,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 33,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "vitoria": {
    nome: "Vitória, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 31,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 32,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 31,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 30,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 28,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 27,  minima: 19,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 27,  minima: 19,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 27,  minima: 19,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 27,  minima: 20,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 28,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 29,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 30,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "sao luis": {
    nome: "São Luís, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 31,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 31,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 31,  minima: 22,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 32,  minima: 22,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 32,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 32,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 32,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 32,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva leve" }
    ]
  },
  "teresina": {
    nome: "Teresina, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 32,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 32,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 31,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 32,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 32,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 33,  minima: 21,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 34,  minima: 20,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 36,  minima: 20,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 37,  minima: 22,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 37,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 36,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 34,  minima: 23,  ceu: "chuvoso", chuva: "chuva moderada" }
    ]
  },
  "joao pessoa": {
    nome: "João Pessoa, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 30,  minima: 25,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 31,  minima: 25,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 30,  minima: 25,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 30,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 29,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 28,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 27,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 28,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 29,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 30,  minima: 24,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 30,  minima: 24,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 31,  minima: 25,  ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "maceio": {
    nome: "Maceió, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 30,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 31,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 31,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 30,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 29,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 28,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 27,  minima: 21,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 27,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 28,  minima: 21,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 29,  minima: 22,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 30,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 30,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "aracaju": {
    nome: "Aracaju, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 30,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 30,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 31,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 30,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 29,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 28,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 27,  minima: 21,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 27,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 28,  minima: 22,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 29,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 30,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 30,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "porto velho": {
    nome: "Porto Velho, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 31,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 31,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 31,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 31,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 31,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 32,  minima: 19,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 33,  minima: 18,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 34,  minima: 19,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 33,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 32,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 31,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 31,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "rio branco": {
    nome: "Rio Branco, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 31,  minima: 21,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 31,  minima: 21,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 31,  minima: 21,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 31,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 30,  minima: 19,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 30,  minima: 17,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 31,  minima: 15,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 33,  minima: 16,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 33,  minima: 19,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 32,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 31,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 31,  minima: 21,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "macapa": {
    nome: "Macapá, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 30,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 30,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 30,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 30,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 31,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 31,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 32,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 33,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 33,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 33,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 32,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva leve" }
    ]
  },
  "boa vista": {
    nome: "Boa Vista, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 33,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 34,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Março",     maxima: 34,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 33,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 32,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 32,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 33,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 34,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 34,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 33,  minima: 24,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "palmas": {
    nome: "Palmas, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 32,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 32,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 32,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 32,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 33,  minima: 21,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 33,  minima: 19,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 34,  minima: 18,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 36,  minima: 19,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 37,  minima: 22,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 35,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 33,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 32,  minima: 22,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "campinas": {
    nome: "Campinas, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 30,  minima: 19,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 30,  minima: 19,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 30,  minima: 18,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 28,  minima: 16,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 26,  minima: 13,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 25,  minima: 11,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 25,  minima: 11,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 27,  minima: 12,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 29,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 29,  minima: 16,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 30,  minima: 17,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 29,  minima: 18,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "santos": {
    nome: "Santos, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 30,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 31,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Março",     maxima: 30,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 28,  minima: 20,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 26,  minima: 18,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 25,  minima: 16,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 24,  minima: 15,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 24,  minima: 16,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 24,  minima: 17,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 26,  minima: 18,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 27,  minima: 20,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 29,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva forte" }
    ]
  },
  "campos do jordao": {
    nome: "Campos do Jordão, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 23,  minima: 13,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 24,  minima: 13,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 23,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 21,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 19,  minima: 6,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 18,  minima: 4,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 18,  minima: 3,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 20,  minima: 4,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 20,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 21,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 22,  minima: 11,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 22,  minima: 12,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "ouro preto": {
    nome: "Ouro Preto, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 25,  minima: 15,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 26,  minima: 15,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 25,  minima: 15,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 24,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 22,  minima: 10,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 21,  minima: 8,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 21,  minima: 8,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 22,  minima: 9,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 24,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 24,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 24,  minima: 14,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 24,  minima: 15,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "foz do iguacu": {
    nome: "Foz do Iguaçu, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 33,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 32,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 31,  minima: 20,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 29,  minima: 17,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 25,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 23,  minima: 12,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 23,  minima: 11,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 25,  minima: 12,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 27,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 29,  minima: 17,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 31,  minima: 18,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 32,  minima: 20,  ceu: "parcialmente nublado", chuva: "chuva forte" }
    ]
  },
  "fernando de noronha": {
    nome: "Fernando de Noronha, Brasil",
    meses: [
      { mes: "Janeiro",   maxima: 29,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 29,  minima: 24,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 29,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 29,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 29,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 28,  minima: 23,  ceu: "chuvoso", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 28,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 28,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 28,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 29,  minima: 24,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 29,  minima: 24,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 29,  minima: 24,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "lisboa": {
    nome: "Lisboa, Portugal",
    meses: [
      { mes: "Janeiro",   maxima: 15,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 16,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 19,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 20,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 23,  minima: 14,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 26,  minima: 17,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 28,  minima: 18,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 29,  minima: 19,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 27,  minima: 18,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 22,  minima: 15,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 18,  minima: 11,  ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 15,  minima: 9,   ceu: "nublado", chuva: "chuva forte" }
    ]
  },
  "porto": {
    nome: "Porto, Portugal",
    meses: [
      { mes: "Janeiro",   maxima: 14,  minima: 5,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 15,  minima: 6,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Março",     maxima: 17,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 18,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 20,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 23,  minima: 14,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 25,  minima: 16,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 25,  minima: 15,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 24,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 20,  minima: 12,  ceu: "nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 17,  minima: 8,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 14,  minima: 7,   ceu: "nublado", chuva: "chuva forte" }
    ]
  },
  "dublin": {
    nome: "Dublin, Irlanda",
    meses: [
      { mes: "Janeiro",   maxima: 8,   minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 9,   minima: 3,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 11,  minima: 4,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 13,  minima: 5,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 15,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 18,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 20,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 19,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 17,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 14,  minima: 7,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 10,  minima: 4,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 8,   minima: 3,   ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "roma": {
    nome: "Roma, Itália",
    meses: [
      { mes: "Janeiro",   maxima: 12,  minima: 3,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 13,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 16,  minima: 6,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 19,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 23,  minima: 12,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 28,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 31,  minima: 18,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 31,  minima: 19,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 27,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 22,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 16,  minima: 7,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 13,  minima: 4,   ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "veneza": {
    nome: "Veneza, Itália",
    meses: [
      { mes: "Janeiro",   maxima: 6,   minima: 0,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 9,   minima: 1,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 13,  minima: 5,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 17,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 22,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 26,  minima: 17,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 29,  minima: 19,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 28,  minima: 19,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 24,  minima: 15,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 18,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 12,  minima: 5,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 7,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "florenca": {
    nome: "Florença, Itália",
    meses: [
      { mes: "Janeiro",   maxima: 11,  minima: 1,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 13,  minima: 2,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 16,  minima: 5,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 20,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 24,  minima: 12,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 29,  minima: 15,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 33,  minima: 18,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 32,  minima: 17,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 28,  minima: 14,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 21,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 15,  minima: 5,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 11,  minima: 2,   ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "atenas": {
    nome: "Atenas, Grécia",
    meses: [
      { mes: "Janeiro",   maxima: 13,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 14,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 17,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 20,  minima: 12,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 25,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 30,  minima: 20,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 33,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 33,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 29,  minima: 20,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 24,  minima: 16,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 19,  minima: 12,  ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 15,  minima: 9,   ceu: "nublado", chuva: "chuva forte" }
    ]
  },
  "istambul": {
    nome: "Istambul, Turquia",
    meses: [
      { mes: "Janeiro",   maxima: 9,   minima: 4,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 9,   minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 12,  minima: 5,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 16,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 21,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 26,  minima: 18,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 28,  minima: 21,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 29,  minima: 21,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 25,  minima: 18,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 20,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 15,  minima: 9,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 11,  minima: 6,   ceu: "nublado", chuva: "chuva forte" }
    ]
  },
  "viena": {
    nome: "Viena, Áustria",
    meses: [
      { mes: "Janeiro",   maxima: 3,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Fevereiro", maxima: 5,   minima: -1,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Março",     maxima: 10,  minima: 2,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 16,  minima: 6,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 21,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 24,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 27,  minima: 16,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 26,  minima: 16,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 21,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 15,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 8,   minima: 3,   ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Dezembro",  maxima: 4,   minima: -1,  ceu: "nublado", chuva: "chuva e neve" }
    ]
  },
  "praga": {
    nome: "Praga, República Tcheca",
    meses: [
      { mes: "Janeiro",   maxima: 2,   minima: -3,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Fevereiro", maxima: 4,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Março",     maxima: 9,   minima: 1,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 15,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 20,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 23,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 25,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 25,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 20,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 14,  minima: 6,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 7,   minima: 2,   ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Dezembro",  maxima: 3,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" }
    ]
  },
  "zurique": {
    nome: "Zurique, Suíça",
    meses: [
      { mes: "Janeiro",   maxima: 3,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Fevereiro", maxima: 5,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Março",     maxima: 10,  minima: 1,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 15,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 19,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 23,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 25,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 24,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 20,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 14,  minima: 6,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 8,   minima: 2,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 4,   minima: -1,  ceu: "nublado", chuva: "chuva e neve" }
    ]
  },
  "copenhague": {
    nome: "Copenhague, Dinamarca",
    meses: [
      { mes: "Janeiro",   maxima: 3,   minima: -1,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 3,   minima: -1,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 6,   minima: 0,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 11,  minima: 3,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 16,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 19,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 22,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 21,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 18,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 12,  minima: 7,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 7,   minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 4,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" }
    ]
  },
  "estocolmo": {
    nome: "Estocolmo, Suécia",
    meses: [
      { mes: "Janeiro",   maxima: 1,   minima: -3,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Fevereiro", maxima: 1,   minima: -4,  ceu: "nublado", chuva: "neve" },
      { mes: "Março",     maxima: 5,   minima: -2,  ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Abril",     maxima: 11,  minima: 2,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 16,  minima: 7,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 21,  minima: 12,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 23,  minima: 14,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 21,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 16,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 10,  minima: 5,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 5,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 2,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" }
    ]
  },
  "oslo": {
    nome: "Oslo, Noruega",
    meses: [
      { mes: "Janeiro",   maxima: -1,  minima: -7,  ceu: "nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: 0,   minima: -7,  ceu: "nublado", chuva: "neve" },
      { mes: "Março",     maxima: 4,   minima: -4,  ceu: "parcialmente nublado", chuva: "neve" },
      { mes: "Abril",     maxima: 10,  minima: 1,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 16,  minima: 6,   ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 20,  minima: 10,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 22,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 21,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 16,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 9,   minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 3,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Dezembro",  maxima: 0,   minima: -6,  ceu: "nublado", chuva: "neve" }
    ]
  },
  "helsinque": {
    nome: "Helsinque, Finlândia",
    meses: [
      { mes: "Janeiro",   maxima: -2,  minima: -7,  ceu: "nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: -3,  minima: -8,  ceu: "nublado", chuva: "neve" },
      { mes: "Março",     maxima: 1,   minima: -5,  ceu: "parcialmente nublado", chuva: "neve" },
      { mes: "Abril",     maxima: 8,   minima: 0,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 15,  minima: 6,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 19,  minima: 10,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 22,  minima: 14,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 20,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 15,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 8,   minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 3,   minima: -1,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Dezembro",  maxima: -1,  minima: -5,  ceu: "nublado", chuva: "neve" }
    ]
  },
  "rovaniemi": {
    nome: "Rovaniemi (Lapônia), Finlândia",
    meses: [
      { mes: "Janeiro",   maxima: -9,  minima: -17, ceu: "nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: -8,  minima: -16, ceu: "nublado", chuva: "neve" },
      { mes: "Março",     maxima: -2,  minima: -11, ceu: "parcialmente nublado", chuva: "neve" },
      { mes: "Abril",     maxima: 4,   minima: -4,  ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Maio",      maxima: 11,  minima: 2,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 18,  minima: 8,   ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 20,  minima: 11,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 17,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 11,  minima: 4,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 3,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Novembro",  maxima: -3,  minima: -8,  ceu: "nublado", chuva: "neve" },
      { mes: "Dezembro",  maxima: -7,  minima: -14, ceu: "nublado", chuva: "neve" }
    ]
  },
  "reykjavik": {
    nome: "Reykjavík, Islândia",
    meses: [
      { mes: "Janeiro",   maxima: 3,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Fevereiro", maxima: 3,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Março",     maxima: 4,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Abril",     maxima: 6,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 10,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 12,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 14,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 14,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 11,  minima: 6,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 7,   minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 4,   minima: 0,   ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Dezembro",  maxima: 3,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" }
    ]
  },
  "varsovia": {
    nome: "Varsóvia, Polônia",
    meses: [
      { mes: "Janeiro",   maxima: 0,   minima: -5,  ceu: "nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: 2,   minima: -4,  ceu: "nublado", chuva: "neve" },
      { mes: "Março",     maxima: 7,   minima: -1,  ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Abril",     maxima: 14,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 20,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 23,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 25,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 24,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 19,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 13,  minima: 5,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 6,   minima: 1,   ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Dezembro",  maxima: 1,   minima: -3,  ceu: "nublado", chuva: "neve" }
    ]
  },
  "budapeste": {
    nome: "Budapeste, Hungria",
    meses: [
      { mes: "Janeiro",   maxima: 2,   minima: -3,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Fevereiro", maxima: 5,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Março",     maxima: 11,  minima: 2,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 17,  minima: 6,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 22,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 25,  minima: 14,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 28,  minima: 16,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 28,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 22,  minima: 12,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 16,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 8,   minima: 2,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 3,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" }
    ]
  },
  "chicago": {
    nome: "Chicago, EUA",
    meses: [
      { mes: "Janeiro",   maxima: 0,   minima: -8,  ceu: "nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: 2,   minima: -6,  ceu: "nublado", chuva: "neve" },
      { mes: "Março",     maxima: 8,   minima: -1,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Abril",     maxima: 15,  minima: 5,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 21,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 27,  minima: 16,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 29,  minima: 19,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 28,  minima: 18,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 24,  minima: 14,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 17,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 9,   minima: 1,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 2,   minima: -5,  ceu: "nublado", chuva: "neve" }
    ]
  },
  "san francisco": {
    nome: "San Francisco, EUA",
    meses: [
      { mes: "Janeiro",   maxima: 14,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 16,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 17,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 18,  minima: 10,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 19,  minima: 11,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Junho",     maxima: 21,  minima: 12,  ceu: "parcialmente nublado", chuva: "seco" },
      { mes: "Julho",     maxima: 21,  minima: 13,  ceu: "nublado", chuva: "seco" },
      { mes: "Agosto",    maxima: 22,  minima: 13,  ceu: "nublado", chuva: "seco" },
      { mes: "Setembro",  maxima: 23,  minima: 13,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 21,  minima: 12,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 17,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 14,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" }
    ]
  },
  "boston": {
    nome: "Boston, EUA",
    meses: [
      { mes: "Janeiro",   maxima: 2,   minima: -5,  ceu: "nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: 4,   minima: -4,  ceu: "nublado", chuva: "neve" },
      { mes: "Março",     maxima: 8,   minima: 0,   ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Abril",     maxima: 14,  minima: 5,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 20,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 25,  minima: 15,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 28,  minima: 19,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 27,  minima: 18,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 23,  minima: 14,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 17,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 11,  minima: 3,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 5,   minima: -2,  ceu: "nublado", chuva: "neve" }
    ]
  },
  "denver": {
    nome: "Denver, EUA",
    meses: [
      { mes: "Janeiro",   maxima: 7,   minima: -7,  ceu: "ensolarado", chuva: "neve" },
      { mes: "Fevereiro", maxima: 8,   minima: -6,  ceu: "ensolarado", chuva: "neve" },
      { mes: "Março",     maxima: 13,  minima: -2,  ceu: "ensolarado", chuva: "neve" },
      { mes: "Abril",     maxima: 16,  minima: 1,   ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Maio",      maxima: 22,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 28,  minima: 12,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 32,  minima: 15,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 30,  minima: 15,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 26,  minima: 10,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 19,  minima: 3,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 11,  minima: -3,  ceu: "ensolarado", chuva: "neve" },
      { mes: "Dezembro",  maxima: 7,   minima: -7,  ceu: "ensolarado", chuva: "neve" }
    ]
  },
  "honolulu": {
    nome: "Honolulu (Havaí), EUA",
    meses: [
      { mes: "Janeiro",   maxima: 27,  minima: 19,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 27,  minima: 19,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 28,  minima: 20,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 28,  minima: 21,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 29,  minima: 22,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 30,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 31,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 31,  minima: 24,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 31,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 30,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 29,  minima: 21,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 27,  minima: 20,  ceu: "parcialmente nublado", chuva: "chuva moderada" }
    ]
  },
  "anchorage": {
    nome: "Anchorage (Alasca), EUA",
    meses: [
      { mes: "Janeiro",   maxima: -4,  minima: -11, ceu: "nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: -2,  minima: -10, ceu: "nublado", chuva: "neve" },
      { mes: "Março",     maxima: 2,   minima: -7,  ceu: "parcialmente nublado", chuva: "neve" },
      { mes: "Abril",     maxima: 8,   minima: -1,  ceu: "parcialmente nublado", chuva: "chuva e neve" },
      { mes: "Maio",      maxima: 14,  minima: 5,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 18,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 19,  minima: 11,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 18,  minima: 10,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 13,  minima: 5,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 5,   minima: -2,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Novembro",  maxima: -2,  minima: -8,  ceu: "nublado", chuva: "neve" },
      { mes: "Dezembro",  maxima: -3,  minima: -10, ceu: "nublado", chuva: "neve" }
    ]
  },
  "havana": {
    nome: "Havana, Cuba",
    meses: [
      { mes: "Janeiro",   maxima: 26,  minima: 19,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 27,  minima: 19,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 28,  minima: 20,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 29,  minima: 21,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 30,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 32,  minima: 24,  ceu: "chuvoso", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 32,  minima: 24,  ceu: "chuvoso", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 31,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 29,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 28,  minima: 21,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 27,  minima: 19,  ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "punta cana": {
    nome: "Punta Cana, República Dominicana",
    meses: [
      { mes: "Janeiro",   maxima: 28,  minima: 21,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 28,  minima: 21,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 29,  minima: 21,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 29,  minima: 22,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 30,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 31,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 31,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 31,  minima: 24,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 31,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 30,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 29,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 28,  minima: 21,  ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "bogota": {
    nome: "Bogotá, Colômbia",
    meses: [
      { mes: "Janeiro",   maxima: 19,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 19,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 19,  minima: 9,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 19,  minima: 9,   ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 19,  minima: 10,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 18,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 18,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 18,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 18,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 18,  minima: 8,   ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 18,  minima: 9,   ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 19,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" }
    ]
  },
  "quito": {
    nome: "Quito, Equador",
    meses: [
      { mes: "Janeiro",   maxima: 19,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 19,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 19,  minima: 10,  ceu: "nublado", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 19,  minima: 10,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 19,  minima: 10,  ceu: "chuvoso", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 19,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 19,  minima: 9,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 20,  minima: 9,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 20,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 20,  minima: 10,  ceu: "chuvoso", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 19,  minima: 10,  ceu: "chuvoso", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 19,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva moderada" }
    ]
  },
  "lima": {
    nome: "Lima, Peru",
    meses: [
      { mes: "Janeiro",   maxima: 26,  minima: 20,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 27,  minima: 21,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Março",     maxima: 27,  minima: 20,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Abril",     maxima: 25,  minima: 18,  ceu: "parcialmente nublado", chuva: "seco" },
      { mes: "Maio",      maxima: 23,  minima: 17,  ceu: "nublado", chuva: "seco" },
      { mes: "Junho",     maxima: 20,  minima: 16,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 19,  minima: 15,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 19,  minima: 15,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 20,  minima: 15,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 21,  minima: 16,  ceu: "nublado", chuva: "seco" },
      { mes: "Novembro",  maxima: 23,  minima: 17,  ceu: "parcialmente nublado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 25,  minima: 19,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "cusco": {
    nome: "Cusco, Peru",
    meses: [
      { mes: "Janeiro",   maxima: 19,  minima: 7,   ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 19,  minima: 7,   ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 19,  minima: 7,   ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 20,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 20,  minima: 1,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 20,  minima: -1,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 19,  minima: -1,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 20,  minima: 1,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 21,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 21,  minima: 6,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 21,  minima: 6,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 20,  minima: 7,   ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "la paz": {
    nome: "La Paz, Bolívia",
    meses: [
      { mes: "Janeiro",   maxima: 15,  minima: 3,   ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 15,  minima: 3,   ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 15,  minima: 3,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 15,  minima: 2,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 14,  minima: -1,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Junho",     maxima: 13,  minima: -3,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 13,  minima: -3,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 14,  minima: -2,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 15,  minima: 0,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 16,  minima: 1,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 17,  minima: 2,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 16,  minima: 3,   ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "santiago": {
    nome: "Santiago, Chile",
    meses: [
      { mes: "Janeiro",   maxima: 30,  minima: 13,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 30,  minima: 13,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Março",     maxima: 28,  minima: 11,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Abril",     maxima: 24,  minima: 8,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 19,  minima: 6,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 16,  minima: 4,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 16,  minima: 3,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 17,  minima: 4,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 20,  minima: 6,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 23,  minima: 8,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 27,  minima: 10,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 29,  minima: 12,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "montevideu": {
    nome: "Montevidéu, Uruguai",
    meses: [
      { mes: "Janeiro",   maxima: 28,  minima: 18,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 27,  minima: 18,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 25,  minima: 16,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 22,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 18,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 15,  minima: 7,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 14,  minima: 7,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 16,  minima: 8,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 17,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 20,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 23,  minima: 14,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 26,  minima: 17,  ceu: "ensolarado", chuva: "chuva moderada" }
    ]
  },
  "cairo": {
    nome: "Cairo, Egito",
    meses: [
      { mes: "Janeiro",   maxima: 19,  minima: 9,   ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 21,  minima: 10,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Março",     maxima: 24,  minima: 12,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Abril",     maxima: 28,  minima: 15,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Maio",      maxima: 32,  minima: 18,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Junho",     maxima: 34,  minima: 21,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 35,  minima: 22,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 35,  minima: 22,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 33,  minima: 21,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 30,  minima: 18,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 25,  minima: 14,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 20,  minima: 10,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "marrakech": {
    nome: "Marrakech, Marrocos",
    meses: [
      { mes: "Janeiro",   maxima: 18,  minima: 6,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 20,  minima: 8,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 23,  minima: 10,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 25,  minima: 12,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 29,  minima: 15,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Junho",     maxima: 33,  minima: 18,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 37,  minima: 21,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 37,  minima: 21,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 32,  minima: 18,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 28,  minima: 15,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 22,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 19,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva leve" }
    ]
  },
  "cidade do cabo": {
    nome: "Cidade do Cabo, África do Sul",
    meses: [
      { mes: "Janeiro",   maxima: 27,  minima: 16,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 27,  minima: 16,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Março",     maxima: 26,  minima: 15,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 23,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 21,  minima: 10,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 19,  minima: 8,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 18,  minima: 7,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 18,  minima: 8,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 20,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 22,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 24,  minima: 13,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 26,  minima: 15,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "nairobi": {
    nome: "Nairóbi, Quênia",
    meses: [
      { mes: "Janeiro",   maxima: 25,  minima: 12,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 27,  minima: 12,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 26,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 24,  minima: 15,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Maio",      maxima: 23,  minima: 14,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 22,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 21,  minima: 11,  ceu: "nublado", chuva: "seco" },
      { mes: "Agosto",    maxima: 22,  minima: 11,  ceu: "nublado", chuva: "seco" },
      { mes: "Setembro",  maxima: 25,  minima: 11,  ceu: "parcialmente nublado", chuva: "seco" },
      { mes: "Outubro",   maxima: 25,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 23,  minima: 14,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 23,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" }
    ]
  },
  "dubai": {
    nome: "Dubai, Emirados Árabes",
    meses: [
      { mes: "Janeiro",   maxima: 24,  minima: 14,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 25,  minima: 15,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 28,  minima: 18,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 33,  minima: 21,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Maio",      maxima: 38,  minima: 25,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Junho",     maxima: 40,  minima: 28,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 41,  minima: 30,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 41,  minima: 30,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 39,  minima: 27,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 35,  minima: 23,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 30,  minima: 19,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 26,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "jerusalem": {
    nome: "Jerusalém, Israel",
    meses: [
      { mes: "Janeiro",   maxima: 12,  minima: 6,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 13,  minima: 6,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Março",     maxima: 16,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 21,  minima: 12,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 25,  minima: 15,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Junho",     maxima: 27,  minima: 17,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Julho",     maxima: 29,  minima: 19,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Agosto",    maxima: 29,  minima: 19,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Setembro",  maxima: 28,  minima: 18,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Outubro",   maxima: 25,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 19,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 14,  minima: 8,   ceu: "nublado", chuva: "chuva forte" }
    ]
  },
  "bangkok": {
    nome: "Bangkok, Tailândia",
    meses: [
      { mes: "Janeiro",   maxima: 32,  minima: 22,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 33,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 34,  minima: 25,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 35,  minima: 26,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 34,  minima: 26,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 33,  minima: 26,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 33,  minima: 25,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 33,  minima: 25,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 32,  minima: 25,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 32,  minima: 25,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 32,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 31,  minima: 22,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "singapura": {
    nome: "Singapura",
    meses: [
      { mes: "Janeiro",   maxima: 30,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 31,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 32,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 32,  minima: 25,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 32,  minima: 25,  ceu: "chuvoso", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 31,  minima: 25,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 31,  minima: 25,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 31,  minima: 25,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 31,  minima: 25,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 31,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Novembro",  maxima: 31,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 30,  minima: 23,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "hong kong": {
    nome: "Hong Kong, China",
    meses: [
      { mes: "Janeiro",   maxima: 19,  minima: 14,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 19,  minima: 15,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 22,  minima: 17,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 25,  minima: 21,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 29,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 31,  minima: 26,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 32,  minima: 27,  ceu: "ensolarado", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 32,  minima: 26,  ceu: "ensolarado", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 31,  minima: 26,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 28,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 24,  minima: 20,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 20,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" }
    ]
  },
  "mumbai": {
    nome: "Mumbai, Índia",
    meses: [
      { mes: "Janeiro",   maxima: 31,  minima: 17,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Fevereiro", maxima: 32,  minima: 18,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Março",     maxima: 33,  minima: 21,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Abril",     maxima: 33,  minima: 24,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Maio",      maxima: 34,  minima: 27,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 32,  minima: 26,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 30,  minima: 25,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 30,  minima: 25,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 31,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 33,  minima: 23,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 33,  minima: 21,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 32,  minima: 19,  ceu: "ensolarado", chuva: "seco" }
    ]
  },
  "nova delhi": {
    nome: "Nova Délhi, Índia",
    meses: [
      { mes: "Janeiro",   maxima: 20,  minima: 8,   ceu: "nublado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 24,  minima: 11,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 30,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 36,  minima: 22,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Maio",      maxima: 40,  minima: 26,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 39,  minima: 28,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 35,  minima: 27,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 34,  minima: 26,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 34,  minima: 25,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 33,  minima: 19,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Novembro",  maxima: 28,  minima: 13,  ceu: "ensolarado", chuva: "seco" },
      { mes: "Dezembro",  maxima: 22,  minima: 9,   ceu: "nublado", chuva: "seco" }
    ]
  },
  "bali": {
    nome: "Bali (Denpasar), Indonésia",
    meses: [
      { mes: "Janeiro",   maxima: 31,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Fevereiro", maxima: 31,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Março",     maxima: 31,  minima: 24,  ceu: "chuvoso", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 32,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 31,  minima: 24,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 30,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 30,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 30,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 31,  minima: 23,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 32,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 32,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Dezembro",  maxima: 31,  minima: 24,  ceu: "chuvoso", chuva: "chuva forte" }
    ]
  },
  "hanoi": {
    nome: "Hanói, Vietnã",
    meses: [
      { mes: "Janeiro",   maxima: 20,  minima: 14,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 21,  minima: 15,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 23,  minima: 18,  ceu: "nublado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 28,  minima: 21,  ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 32,  minima: 24,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Junho",     maxima: 33,  minima: 26,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 33,  minima: 26,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 32,  minima: 26,  ceu: "chuvoso", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 31,  minima: 25,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Outubro",   maxima: 29,  minima: 22,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 26,  minima: 18,  ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 22,  minima: 15,  ceu: "nublado", chuva: "chuva leve" }
    ]
  },
  "sapporo": {
    nome: "Sapporo (Hokkaido), Japão",
    meses: [
      { mes: "Janeiro",   maxima: -1,  minima: -7,  ceu: "nublado", chuva: "neve" },
      { mes: "Fevereiro", maxima: 0,   minima: -7,  ceu: "nublado", chuva: "neve" },
      { mes: "Março",     maxima: 4,   minima: -3,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Abril",     maxima: 11,  minima: 3,   ceu: "parcialmente nublado", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 17,  minima: 8,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 21,  minima: 13,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 25,  minima: 18,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 26,  minima: 19,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 22,  minima: 14,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 16,  minima: 7,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 8,   minima: 1,   ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Dezembro",  maxima: 2,   minima: -4,  ceu: "nublado", chuva: "neve" }
    ]
  },
  "sydney": {
    nome: "Sydney, Austrália",
    meses: [
      { mes: "Janeiro",   maxima: 26,  minima: 19,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Fevereiro", maxima: 26,  minima: 19,  ceu: "ensolarado", chuva: "chuva moderada" },
      { mes: "Março",     maxima: 25,  minima: 18,  ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Abril",     maxima: 23,  minima: 15,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 20,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 18,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 17,  minima: 8,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Agosto",    maxima: 19,  minima: 9,   ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Setembro",  maxima: 21,  minima: 11,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Outubro",   maxima: 23,  minima: 14,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Novembro",  maxima: 24,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Dezembro",  maxima: 26,  minima: 18,  ceu: "ensolarado", chuva: "chuva moderada" }
    ]
  },
  "melbourne": {
    nome: "Melbourne, Austrália",
    meses: [
      { mes: "Janeiro",   maxima: 26,  minima: 14,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 26,  minima: 14,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 24,  minima: 13,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Abril",     maxima: 20,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 17,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 14,  minima: 7,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Julho",     maxima: 14,  minima: 6,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Agosto",    maxima: 15,  minima: 7,   ceu: "nublado", chuva: "chuva moderada" },
      { mes: "Setembro",  maxima: 17,  minima: 8,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 20,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 22,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 24,  minima: 13,  ceu: "ensolarado", chuva: "chuva moderada" }
    ]
  },
  "auckland": {
    nome: "Auckland, Nova Zelândia",
    meses: [
      { mes: "Janeiro",   maxima: 24,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Fevereiro", maxima: 24,  minima: 16,  ceu: "ensolarado", chuva: "chuva leve" },
      { mes: "Março",     maxima: 23,  minima: 15,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 21,  minima: 13,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Maio",      maxima: 18,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Junho",     maxima: 16,  minima: 9,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Julho",     maxima: 15,  minima: 8,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Agosto",    maxima: 15,  minima: 8,   ceu: "nublado", chuva: "chuva forte" },
      { mes: "Setembro",  maxima: 17,  minima: 9,   ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Outubro",   maxima: 18,  minima: 11,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Novembro",  maxima: 20,  minima: 12,  ceu: "parcialmente nublado", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 22,  minima: 15,  ceu: "ensolarado", chuva: "chuva moderada" }
    ]
  },
  "tatooine": {
    nome: "Tatooine, Orla Exterior",
    meses: [
      { mes: "Janeiro",   maxima: 46,  minima: 27,  ceu: "com dois sóis", chuva: "seco (nenhuma nuvem desde sempre)" },
      { mes: "Fevereiro", maxima: 47,  minima: 28,  ceu: "com dois sóis", chuva: "seco (nenhuma nuvem desde sempre)" },
      { mes: "Março",     maxima: 48,  minima: 28,  ceu: "com dois sóis", chuva: "seco (nenhuma nuvem desde sempre)" },
      { mes: "Abril",     maxima: 47,  minima: 27,  ceu: "com dois sóis", chuva: "tempestade de areia no Mar de Dunas" },
      { mes: "Maio",      maxima: 45,  minima: 26,  ceu: "com dois sóis", chuva: "seco (nenhuma nuvem desde sempre)" },
      { mes: "Junho",     maxima: 44,  minima: 25,  ceu: "com dois sóis", chuva: "seco (nenhuma nuvem desde sempre)" },
      { mes: "Julho",     maxima: 45,  minima: 26,  ceu: "com dois sóis", chuva: "seco (nenhuma nuvem desde sempre)" },
      { mes: "Agosto",    maxima: 47,  minima: 27,  ceu: "com dois sóis", chuva: "tempestade de areia no Mar de Dunas" },
      { mes: "Setembro",  maxima: 48,  minima: 28,  ceu: "com dois sóis", chuva: "seco (nenhuma nuvem desde sempre)" },
      { mes: "Outubro",   maxima: 47,  minima: 28,  ceu: "com dois sóis", chuva: "seco (nenhuma nuvem desde sempre)" },
      { mes: "Novembro",  maxima: 46,  minima: 27,  ceu: "com dois sóis", chuva: "calor de derreter o droide" },
      { mes: "Dezembro",  maxima: 45,  minima: 26,  ceu: "com dois sóis", chuva: "seco (nenhuma nuvem desde sempre)" }
    ]
  },
  "mustafar": {
    nome: "Mustafar, Orla Exterior",
    meses: [
      { mes: "Janeiro",   maxima: 68,  minima: 52,  ceu: "de cinzas e fumaça vulcânica", chuva: "chuva de brasas" },
      { mes: "Fevereiro", maxima: 70,  minima: 54,  ceu: "de cinzas e fumaça vulcânica", chuva: "chuva de brasas" },
      { mes: "Março",     maxima: 71,  minima: 55,  ceu: "de cinzas e fumaça vulcânica", chuva: "chuva de brasas" },
      { mes: "Abril",     maxima: 69,  minima: 53,  ceu: "de cinzas e fumaça vulcânica", chuva: "chuva de brasas" },
      { mes: "Maio",      maxima: 70,  minima: 54,  ceu: "de cinzas e fumaça vulcânica", chuva: "rios de lava transbordando" },
      { mes: "Junho",     maxima: 72,  minima: 56,  ceu: "de cinzas e fumaça vulcânica", chuva: "chuva de brasas" },
      { mes: "Julho",     maxima: 73,  minima: 57,  ceu: "de cinzas e fumaça vulcânica", chuva: "chuva de brasas" },
      { mes: "Agosto",    maxima: 71,  minima: 55,  ceu: "de cinzas e fumaça vulcânica", chuva: "chuva de brasas" },
      { mes: "Setembro",  maxima: 70,  minima: 54,  ceu: "de cinzas e fumaça vulcânica", chuva: "\"É o fim, Anakin. Eu tenho o terreno mais alto.\"" },
      { mes: "Outubro",   maxima: 69,  minima: 53,  ceu: "de cinzas e fumaça vulcânica", chuva: "chuva de brasas" },
      { mes: "Novembro",  maxima: 68,  minima: 52,  ceu: "de cinzas e fumaça vulcânica", chuva: "chuva de brasas" },
      { mes: "Dezembro",  maxima: 70,  minima: 54,  ceu: "de cinzas e fumaça vulcânica", chuva: "chuva de brasas" }
    ]
  },
  "hoth": {
    nome: "Hoth, Orla Exterior",
    meses: [
      { mes: "Janeiro",   maxima: -32, minima: -58, ceu: "branco e sem horizonte", chuva: "nevasca" },
      { mes: "Fevereiro", maxima: -33, minima: -60, ceu: "branco e sem horizonte", chuva: "nevasca" },
      { mes: "Março",     maxima: -31, minima: -57, ceu: "branco e sem horizonte", chuva: "nevasca (cuidado com os wampas)" },
      { mes: "Abril",     maxima: -30, minima: -55, ceu: "branco e sem horizonte", chuva: "nevasca" },
      { mes: "Maio",      maxima: -28, minima: -52, ceu: "branco e sem horizonte", chuva: "nevasca" },
      { mes: "Junho",     maxima: -29, minima: -54, ceu: "branco e sem horizonte", chuva: "nevasca" },
      { mes: "Julho",     maxima: -31, minima: -57, ceu: "branco e sem horizonte", chuva: "nevasca" },
      { mes: "Agosto",    maxima: -33, minima: -60, ceu: "branco e sem horizonte", chuva: "nevasca" },
      { mes: "Setembro",  maxima: -32, minima: -58, ceu: "branco e sem horizonte", chuva: "nevasca" },
      { mes: "Outubro",   maxima: -30, minima: -55, ceu: "branco e sem horizonte", chuva: "nevasca (cuidado com os wampas)" },
      { mes: "Novembro",  maxima: -31, minima: -57, ceu: "branco e sem horizonte", chuva: "nevasca" },
      { mes: "Dezembro",  maxima: -32, minima: -59, ceu: "branco e sem horizonte", chuva: "nevasca" }
    ]
  },
  "coruscant": {
    nome: "Coruscant, Núcleo Galáctico",
    meses: [
      { mes: "Janeiro",   maxima: 23,  minima: 17,  ceu: "de tráfego aéreo sem fim", chuva: "chuva leve entre os arranha-céus" },
      { mes: "Fevereiro", maxima: 23,  minima: 17,  ceu: "de tráfego aéreo sem fim", chuva: "chuva leve entre os arranha-céus" },
      { mes: "Março",     maxima: 24,  minima: 18,  ceu: "de tráfego aéreo sem fim", chuva: "chuva leve entre os arranha-céus" },
      { mes: "Abril",     maxima: 24,  minima: 18,  ceu: "de tráfego aéreo sem fim", chuva: "chuva leve entre os arranha-céus" },
      { mes: "Maio",      maxima: 25,  minima: 19,  ceu: "de tráfego aéreo sem fim", chuva: "chuva leve entre os arranha-céus" },
      { mes: "Junho",     maxima: 25,  minima: 19,  ceu: "de tráfego aéreo sem fim", chuva: "garoa sobre o Templo Jedi" },
      { mes: "Julho",     maxima: 25,  minima: 19,  ceu: "de tráfego aéreo sem fim", chuva: "chuva leve entre os arranha-céus" },
      { mes: "Agosto",    maxima: 25,  minima: 19,  ceu: "de tráfego aéreo sem fim", chuva: "chuva leve entre os arranha-céus" },
      { mes: "Setembro",  maxima: 24,  minima: 18,  ceu: "de tráfego aéreo sem fim", chuva: "chuva leve entre os arranha-céus" },
      { mes: "Outubro",   maxima: 24,  minima: 18,  ceu: "de tráfego aéreo sem fim", chuva: "chuva leve entre os arranha-céus" },
      { mes: "Novembro",  maxima: 23,  minima: 17,  ceu: "de tráfego aéreo sem fim", chuva: "chuva leve entre os arranha-céus" },
      { mes: "Dezembro",  maxima: 23,  minima: 17,  ceu: "de tráfego aéreo sem fim", chuva: "chuva leve entre os arranha-céus" }
    ]
  },
  "mordor": {
    nome: "Mordor, Terra-média",
    meses: [
      { mes: "Janeiro",   maxima: 34,  minima: 20,  ceu: "coberto pela fumaça da Montanha da Perdição", chuva: "chuva de cinzas" },
      { mes: "Fevereiro", maxima: 35,  minima: 21,  ceu: "coberto pela fumaça da Montanha da Perdição", chuva: "chuva de cinzas" },
      { mes: "Março",     maxima: 36,  minima: 22,  ceu: "coberto pela fumaça da Montanha da Perdição", chuva: "um Olho sem pálpebra vigia você" },
      { mes: "Abril",     maxima: 37,  minima: 23,  ceu: "coberto pela fumaça da Montanha da Perdição", chuva: "chuva de cinzas" },
      { mes: "Maio",      maxima: 38,  minima: 24,  ceu: "coberto pela fumaça da Montanha da Perdição", chuva: "chuva de cinzas" },
      { mes: "Junho",     maxima: 39,  minima: 25,  ceu: "coberto pela fumaça da Montanha da Perdição", chuva: "chuva de cinzas" },
      { mes: "Julho",     maxima: 40,  minima: 26,  ceu: "coberto pela fumaça da Montanha da Perdição", chuva: "chuva de cinzas" },
      { mes: "Agosto",    maxima: 40,  minima: 26,  ceu: "coberto pela fumaça da Montanha da Perdição", chuva: "chuva de cinzas" },
      { mes: "Setembro",  maxima: 38,  minima: 24,  ceu: "coberto pela fumaça da Montanha da Perdição", chuva: "não se entra simplesmente em Mordor" },
      { mes: "Outubro",   maxima: 36,  minima: 22,  ceu: "coberto pela fumaça da Montanha da Perdição", chuva: "chuva de cinzas" },
      { mes: "Novembro",  maxima: 35,  minima: 21,  ceu: "coberto pela fumaça da Montanha da Perdição", chuva: "chuva de cinzas" },
      { mes: "Dezembro",  maxima: 34,  minima: 20,  ceu: "coberto pela fumaça da Montanha da Perdição", chuva: "chuva de cinzas" }
    ]
  },
  "valfenda": {
    nome: "Valfenda, Terra-média",
    meses: [
      { mes: "Janeiro",   maxima: 12,  minima: 4,   ceu: "sereno sobre o vale", chuva: "cachoeiras e brisa leve" },
      { mes: "Fevereiro", maxima: 13,  minima: 4,   ceu: "sereno sobre o vale", chuva: "cachoeiras e brisa leve" },
      { mes: "Março",     maxima: 16,  minima: 6,   ceu: "sereno sobre o vale", chuva: "cachoeiras e brisa leve" },
      { mes: "Abril",     maxima: 19,  minima: 8,   ceu: "sereno sobre o vale", chuva: "cachoeiras e brisa leve" },
      { mes: "Maio",      maxima: 22,  minima: 11,  ceu: "sereno sobre o vale", chuva: "cachoeiras e brisa leve" },
      { mes: "Junho",     maxima: 25,  minima: 14,  ceu: "sereno sobre o vale", chuva: "cachoeiras e brisa leve" },
      { mes: "Julho",     maxima: 27,  minima: 16,  ceu: "sereno sobre o vale", chuva: "cachoeiras e brisa leve" },
      { mes: "Agosto",    maxima: 26,  minima: 15,  ceu: "sereno sobre o vale", chuva: "cachoeiras e brisa leve" },
      { mes: "Setembro",  maxima: 23,  minima: 12,  ceu: "dourado de outono élfico", chuva: "cachoeiras e brisa leve" },
      { mes: "Outubro",   maxima: 18,  minima: 9,   ceu: "sereno sobre o vale", chuva: "o Conselho de Elrond está reunido" },
      { mes: "Novembro",  maxima: 14,  minima: 6,   ceu: "sereno sobre o vale", chuva: "cachoeiras e brisa leve" },
      { mes: "Dezembro",  maxima: 12,  minima: 4,   ceu: "sereno sobre o vale", chuva: "cachoeiras e brisa leve" }
    ]
  },
  "winterfell": {
    nome: "Winterfell, Westeros",
    meses: [
      { mes: "Janeiro",   maxima: -6,  minima: -15, ceu: "nublado", chuva: "neve (o inverno chegou)" },
      { mes: "Fevereiro", maxima: -5,  minima: -14, ceu: "nublado", chuva: "neve (o inverno chegou)" },
      { mes: "Março",     maxima: 0,   minima: -8,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Abril",     maxima: 6,   minima: -2,  ceu: "nublado", chuva: "o inverno está chegando" },
      { mes: "Maio",      maxima: 12,  minima: 3,   ceu: "nublado", chuva: "o inverno está chegando" },
      { mes: "Junho",     maxima: 17,  minima: 7,   ceu: "nublado", chuva: "o inverno está chegando" },
      { mes: "Julho",     maxima: 19,  minima: 9,   ceu: "nublado", chuva: "chuva leve (o inverno está chegando)" },
      { mes: "Agosto",    maxima: 18,  minima: 8,   ceu: "nublado", chuva: "chuva leve (o inverno está chegando)" },
      { mes: "Setembro",  maxima: 13,  minima: 4,   ceu: "nublado", chuva: "o inverno está chegando" },
      { mes: "Outubro",   maxima: 6,   minima: -1,  ceu: "nublado", chuva: "chuva e neve" },
      { mes: "Novembro",  maxima: 0,   minima: -7,  ceu: "nublado", chuva: "neve (o inverno chegou)" },
      { mes: "Dezembro",  maxima: -4,  minima: -12, ceu: "nublado", chuva: "neve (o inverno chegou)" }
    ]
  },
  "narnia": {
    nome: "Nárnia",
    meses: [
      { mes: "Janeiro",   maxima: -4,  minima: -12, ceu: "branco, com um poste de luz aceso", chuva: "neve (sempre inverno, nunca Natal)" },
      { mes: "Fevereiro", maxima: -4,  minima: -12, ceu: "branco, com um poste de luz aceso", chuva: "neve (sempre inverno, nunca Natal)" },
      { mes: "Março",     maxima: -4,  minima: -12, ceu: "branco, com um poste de luz aceso", chuva: "neve (sempre inverno, nunca Natal)" },
      { mes: "Abril",     maxima: -4,  minima: -12, ceu: "branco, com um poste de luz aceso", chuva: "neve (sempre inverno, nunca Natal)" },
      { mes: "Maio",      maxima: -4,  minima: -12, ceu: "branco, com um poste de luz aceso", chuva: "neve (sempre inverno, nunca Natal)" },
      { mes: "Junho",     maxima: -4,  minima: -12, ceu: "branco, com um poste de luz aceso", chuva: "neve (sempre inverno, nunca Natal)" },
      { mes: "Julho",     maxima: -4,  minima: -12, ceu: "branco, com um poste de luz aceso", chuva: "neve (sempre inverno, nunca Natal)" },
      { mes: "Agosto",    maxima: -4,  minima: -12, ceu: "branco, com um poste de luz aceso", chuva: "neve (sempre inverno, nunca Natal)" },
      { mes: "Setembro",  maxima: -4,  minima: -12, ceu: "branco, com um poste de luz aceso", chuva: "neve (sempre inverno, nunca Natal)" },
      { mes: "Outubro",   maxima: -4,  minima: -12, ceu: "branco, com um poste de luz aceso", chuva: "neve (sempre inverno, nunca Natal)" },
      { mes: "Novembro",  maxima: -4,  minima: -12, ceu: "branco, com um poste de luz aceso", chuva: "neve (sempre inverno, nunca Natal)" },
      { mes: "Dezembro",  maxima: -4,  minima: -12, ceu: "branco, com um poste de luz aceso", chuva: "neve (sempre inverno… e nunca Natal)" }
    ]
  },
  "arrakis": {
    nome: "Arrakis (Duna)",
    meses: [
      { mes: "Janeiro",   maxima: 52,  minima: 18,  ceu: "ensolarado e impiedoso", chuva: "nenhuma gota em mil anos" },
      { mes: "Fevereiro", maxima: 53,  minima: 19,  ceu: "ensolarado e impiedoso", chuva: "nenhuma gota em mil anos" },
      { mes: "Março",     maxima: 55,  minima: 21,  ceu: "ensolarado e impiedoso", chuva: "nenhuma gota em mil anos" },
      { mes: "Abril",     maxima: 57,  minima: 23,  ceu: "ensolarado e impiedoso", chuva: "nenhuma gota em mil anos" },
      { mes: "Maio",      maxima: 59,  minima: 25,  ceu: "ensolarado e impiedoso", chuva: "nenhuma gota em mil anos" },
      { mes: "Junho",     maxima: 60,  minima: 26,  ceu: "ensolarado e impiedoso", chuva: "tempestade de Coriolis" },
      { mes: "Julho",     maxima: 60,  minima: 26,  ceu: "ensolarado e impiedoso", chuva: "nenhuma gota em mil anos" },
      { mes: "Agosto",    maxima: 59,  minima: 25,  ceu: "ensolarado e impiedoso", chuva: "nenhuma gota em mil anos" },
      { mes: "Setembro",  maxima: 57,  minima: 23,  ceu: "ensolarado e impiedoso", chuva: "nenhuma gota em mil anos" },
      { mes: "Outubro",   maxima: 55,  minima: 21,  ceu: "ensolarado e impiedoso", chuva: "nenhuma gota em mil anos" },
      { mes: "Novembro",  maxima: 53,  minima: 19,  ceu: "ensolarado e impiedoso", chuva: "nenhuma gota em mil anos" },
      { mes: "Dezembro",  maxima: 52,  minima: 18,  ceu: "ensolarado e impiedoso", chuva: "cuidado com os vermes de areia" }
    ]
  },
  "rlyeh": {
    nome: "R'lyeh, sob o Pacífico Sul",
    meses: [
      { mes: "Janeiro",   maxima: 4,   minima: 2,   ceu: "de ângulos impossíveis", chuva: "o oceano pesa sobre as torres" },
      { mes: "Fevereiro", maxima: 4,   minima: 2,   ceu: "de ângulos impossíveis", chuva: "o oceano pesa sobre as torres" },
      { mes: "Março",     maxima: 4,   minima: 2,   ceu: "de ângulos impossíveis", chuva: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn" },
      { mes: "Abril",     maxima: 4,   minima: 2,   ceu: "de ângulos impossíveis", chuva: "o oceano pesa sobre as torres" },
      { mes: "Maio",      maxima: 4,   minima: 2,   ceu: "de ângulos impossíveis", chuva: "o oceano pesa sobre as torres" },
      { mes: "Junho",     maxima: 4,   minima: 2,   ceu: "de ângulos impossíveis", chuva: "o oceano pesa sobre as torres" },
      { mes: "Julho",     maxima: 4,   minima: 2,   ceu: "de ângulos impossíveis", chuva: "o oceano pesa sobre as torres" },
      { mes: "Agosto",    maxima: 4,   minima: 2,   ceu: "de ângulos impossíveis", chuva: "o oceano pesa sobre as torres" },
      { mes: "Setembro",  maxima: 4,   minima: 2,   ceu: "de ângulos impossíveis", chuva: "o oceano pesa sobre as torres" },
      { mes: "Outubro",   maxima: 4,   minima: 2,   ceu: "de ângulos impossíveis", chuva: "o oceano pesa sobre as torres" },
      { mes: "Novembro",  maxima: 4,   minima: 2,   ceu: "de ângulos impossíveis", chuva: "o oceano pesa sobre as torres" },
      { mes: "Dezembro",  maxima: 4,   minima: 2,   ceu: "de ângulos impossíveis", chuva: "o oceano pesa sobre as torres" }
    ]
  },
  "hogwarts": {
    nome: "Hogwarts, Terras Altas da Escócia",
    meses: [
      { mes: "Janeiro",   maxima: 6,   minima: 0,   ceu: "encantado do Salão Principal", chuva: "neve nos jardins" },
      { mes: "Fevereiro", maxima: 7,   minima: 0,   ceu: "encantado do Salão Principal", chuva: "chuva e neve" },
      { mes: "Março",     maxima: 9,   minima: 1,   ceu: "encantado do Salão Principal", chuva: "chuva moderada" },
      { mes: "Abril",     maxima: 11,  minima: 3,   ceu: "encantado do Salão Principal", chuva: "chuva leve" },
      { mes: "Maio",      maxima: 14,  minima: 6,   ceu: "encantado do Salão Principal", chuva: "chuva leve" },
      { mes: "Junho",     maxima: 17,  minima: 9,   ceu: "encantado do Salão Principal", chuva: "chuva leve" },
      { mes: "Julho",     maxima: 18,  minima: 11,  ceu: "encantado do Salão Principal", chuva: "férias de verão (castelo vazio)" },
      { mes: "Agosto",    maxima: 18,  minima: 10,  ceu: "encantado do Salão Principal", chuva: "férias de verão (castelo vazio)" },
      { mes: "Setembro",  maxima: 16,  minima: 8,   ceu: "encantado do Salão Principal", chuva: "chegada do Expresso de Hogwarts" },
      { mes: "Outubro",   maxima: 12,  minima: 5,   ceu: "encantado do Salão Principal", chuva: "abóboras de Halloween no Salão Principal" },
      { mes: "Novembro",  maxima: 9,   minima: 2,   ceu: "encantado do Salão Principal", chuva: "chuva moderada" },
      { mes: "Dezembro",  maxima: 7,   minima: 0,   ceu: "encantado do Salão Principal", chuva: "neve e banquete de Natal" }
    ]
  },
  "gotham": {
    nome: "Gotham City, EUA",
    meses: [
      { mes: "Janeiro",   maxima: 4,   minima: -3,  ceu: "com o Bat-sinal aceso", chuva: "chuva de sempre nos becos" },
      { mes: "Fevereiro", maxima: 6,   minima: -2,  ceu: "com o Bat-sinal aceso", chuva: "chuva de sempre nos becos" },
      { mes: "Março",     maxima: 10,  minima: 2,   ceu: "com o Bat-sinal aceso", chuva: "chuva de sempre nos becos" },
      { mes: "Abril",     maxima: 17,  minima: 7,   ceu: "com o Bat-sinal aceso", chuva: "chuva de sempre nos becos" },
      { mes: "Maio",      maxima: 22,  minima: 13,  ceu: "com o Bat-sinal aceso", chuva: "chuva de sempre nos becos" },
      { mes: "Junho",     maxima: 27,  minima: 18,  ceu: "com o Bat-sinal aceso", chuva: "chuva de sempre nos becos" },
      { mes: "Julho",     maxima: 29,  minima: 21,  ceu: "com o Bat-sinal aceso", chuva: "chuva de sempre nos becos" },
      { mes: "Agosto",    maxima: 28,  minima: 21,  ceu: "com o Bat-sinal aceso", chuva: "chuva de sempre nos becos" },
      { mes: "Setembro",  maxima: 25,  minima: 17,  ceu: "com o Bat-sinal aceso", chuva: "chuva de sempre nos becos" },
      { mes: "Outubro",   maxima: 18,  minima: 10,  ceu: "com o Bat-sinal aceso", chuva: "gargalhadas ecoando no Asilo Arkham" },
      { mes: "Novembro",  maxima: 12,  minima: 5,   ceu: "com o Bat-sinal aceso", chuva: "chuva de sempre nos becos" },
      { mes: "Dezembro",  maxima: 6,   minima: 0,   ceu: "com o Bat-sinal aceso", chuva: "chuva de sempre nos becos" }
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

function plural(n, singular, pluralForm) {
  return Math.abs(n) === 1 ? singular : pluralForm;
}

// Lê uma data digitada como "dd/mm/aaaa" e devolve um Date local ao meio-dia
// (o meio-dia evita meias-noites inexistentes em dias de mudança de horário).
// Retorna null se não for uma data de calendário válida.
function parseDateInput(val) {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(val.trim());
  if (!m) return null;
  const d = +m[1], mo = +m[2] - 1, y = +m[3];
  if (mo < 0 || mo > 11 || d < 1 || d > daysInMonth(y, mo)) return null;
  const date = new Date(2000, 0, 1, 12);
  date.setFullYear(y, mo, d);
  return date;
}

// Lê "dd/mm/aaaa hh:mm" e devolve o Date local correspondente, ou null se inválido.
function parseDateTimeInput(val) {
  const m = /^(\d{2}\/\d{2}\/\d{4}) (\d{2}):(\d{2})$/.exec(val.trim());
  if (!m) return null;
  const day = parseDateInput(m[1]);
  const h = +m[2], mi = +m[3];
  if (!day || h > 23 || mi > 59) return null;
  day.setHours(h, mi, 0, 0);
  return day;
}

// Máscara de digitação: o usuário digita só números e as barras, o espaço e os
// dois-pontos aparecem sozinhos (dd/mm/aaaa ou dd/mm/aaaa hh:mm).
function formatDateDigits(digits, withTime) {
  const seps = withTime ? ['/', '/', ' ', ':'] : ['/', '/'];
  const sizes = withTime ? [2, 2, 4, 2, 2] : [2, 2, 4];
  let out = '', pos = 0;
  for (let i = 0; i < sizes.length && pos < digits.length; i++) {
    if (i > 0) out += seps[i - 1];
    out += digits.slice(pos, pos + sizes[i]);
    pos += sizes[i];
  }
  return out;
}

function setupDateMask(input) {
  const withTime = input.dataset.mask === 'datetime';
  const maxDigits = withTime ? 12 : 8;

  input.addEventListener('input', () => {
    let raw = input.value;
    // Colar no formato "aaaa-mm-dd" (ou "aaaa-mm-ddThh:mm") também funciona
    const iso = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}))?/.exec(raw.trim());
    if (iso) raw = iso[3] + iso[2] + iso[1] + (withTime && iso[4] ? iso[4] + iso[5] : '');

    const caret = input.selectionStart == null ? raw.length : input.selectionStart;
    const digitsBeforeCaret = raw.slice(0, caret).replace(/\D/g, '').length;
    const digits = raw.replace(/\D/g, '').slice(0, maxDigits);
    const formatted = formatDateDigits(digits, withTime);
    if (formatted === input.value) return;
    input.value = formatted;

    // Mantém o cursor depois do mesmo número de dígitos que antes
    let newCaret = 0, seen = 0;
    while (newCaret < formatted.length && seen < digitsBeforeCaret) {
      if (/\d/.test(formatted[newCaret])) seen++;
      newCaret++;
    }
    if (iso) newCaret = formatted.length;
    try { input.setSelectionRange(newCaret, newCaret); } catch (_) {}
  });
}

document.querySelectorAll('input[data-mask]').forEach(setupDateMask);

// Número do dia no calendário (independente de fuso, horário de verão e horário histórico local).
function dayNumber(y, m, d) {
  const t = new Date(0);
  t.setUTCFullYear(y, m, d);
  return t.getTime() / 86400000;
}

function dayNumberOf(date) {
  return dayNumber(date.getFullYear(), date.getMonth(), date.getDate());
}

function daysInMonth(y, m) {
  return dayNumber(y, m + 1, 1) - dayNumber(y, m, 1);
}

// Data em que se completam `k` meses a partir de `a`. Se o dia não existe no mês
// (ex.: 31/02 ou 29/02 em ano comum), o prazo se completa no dia 1 do mês seguinte
// (Código Civil, art. 132, § 3º).
function monthAnniversary(a, k) {
  const total = a.getFullYear() * 12 + a.getMonth() + k;
  const y = Math.floor(total / 12);
  const m = total - y * 12;
  const d = a.getDate();
  return d <= daysInMonth(y, m) ? dayNumber(y, m, d) : dayNumber(y, m + 1, 1);
}

// Diferença de calendário entre a e b (a <= b) em anos, meses e dias completos.
function diffDates(a, b) {
  const end = dayNumberOf(b);
  let k = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
  if (monthAnniversary(a, k) > end) k--;

  return {
    years:  Math.floor(k / 12),
    months: k % 12,
    days:   end - monthAnniversary(a, k)
  };
}

function totalDays(a, b) {
  return dayNumberOf(b) - dayNumberOf(a);
}

function todayLocal() {
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  return today;
}

// Rola a página só o necessário para o resultado ficar visível.
function revealResult(el) {
  requestAnimationFrame(() => {
    const viewH = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    const rect  = el.getBoundingClientRect();
    const margin = 16;
    // O cabeçalho fica fixo no topo; o resultado não deve parar escondido atrás dele
    const header = document.querySelector('header');
    const pos = header ? getComputedStyle(header).position : '';
    const topLimit = (pos === 'sticky' || pos === 'fixed') ? header.getBoundingClientRect().bottom : 0;
    if (rect.bottom <= viewH - margin && rect.top >= topLimit) return;
    const delta = Math.min(rect.bottom - viewH + margin, rect.top - topLimit - margin);
    if (delta > 0) window.scrollBy({ top: delta, behavior: 'smooth' });
  });
}

function showResult(id, html) {
  const el = document.getElementById(id);
  el.classList.remove('hidden');
  el.innerHTML = html;
  revealResult(el);
}

function showError(id, msg) {
  showResult(id, `<div class="error-msg">${escapeHTML(msg)}</div>`);
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

  const birth = parseDateInput(val);
  if (!birth) { showError('i-result', 'Data de nascimento inválida. Use o formato dd/mm/aaaa.'); return; }
  const today = todayLocal();

  if (dayNumberOf(birth) > dayNumberOf(today)) { showError('i-result', 'A data de nascimento não pode ser no futuro.'); return; }

  const { years, months, days } = diffDates(birth, today);
  const td   = totalDays(birth, today);
  const tw   = Math.floor(td / 7);
  const tm   = years * 12 + months;
  const th   = td * 24;

  showResult('i-result', `
    <div class="metrics-grid">
      ${metricCard(years,  plural(years,  'ano', 'anos'),   true)}
      ${metricCard(months, plural(months, 'mês', 'meses'))}
      ${metricCard(days,   plural(days,   'dia', 'dias'))}
    </div>
    <div class="totals-bar">
      ${totalItem(td, 'dias no total')}
      <div class="totals-divider"></div>
      ${totalItem(tw, plural(tw, 'semana', 'semanas'))}
      <div class="totals-divider"></div>
      ${totalItem(tm, plural(tm, 'mês', 'meses'))}
      <div class="totals-divider"></div>
      ${totalItem(th, plural(th, 'hora', 'horas'))}
    </div>`);
}

function calcDiff() {
  const sv = document.getElementById('d-start').value;
  const ev = document.getElementById('d-end').value;
  if (!sv || !ev) { showError('d-result', 'Informe as duas datas.'); return; }

  let a = parseDateInput(sv);
  let b = parseDateInput(ev);
  if (!a || !b) { showError('d-result', 'Data inválida. Use o formato dd/mm/aaaa.'); return; }
  const inverted = dayNumberOf(a) > dayNumberOf(b);
  if (inverted) [a, b] = [b, a];

  const { years, months, days } = diffDates(a, b);
  const td = totalDays(a, b);
  const tw = Math.floor(td / 7);
  const tm = years * 12 + months;

  showResult('d-result', `
    <div class="metrics-grid">
      ${metricCard(years,  plural(years,  'ano', 'anos'),   true)}
      ${metricCard(months, plural(months, 'mês', 'meses'))}
      ${metricCard(days,   plural(days,   'dia', 'dias'))}
    </div>
    <div class="totals-bar">
      ${totalItem(td, plural(td, 'dia', 'dias'))}
      <div class="totals-divider"></div>
      ${totalItem(tw, plural(tw, 'semana', 'semanas'))}
      <div class="totals-divider"></div>
      ${totalItem(tm, plural(tm, 'mês completo', 'meses completos'))}
      ${inverted ? '<span class="badge-past" style="margin-left:auto">ordem invertida</span>' : ''}
    </div>`);
}

function calcCountdown() {
  const val = document.getElementById('c-target').value;
  if (!val) { showError('c-result', 'Informe a data alvo.'); return; }

  const lbl    = document.getElementById('c-label').value.trim();
  const target = parseDateInput(val);
  if (!target) { showError('c-result', 'Data alvo inválida. Use o formato dd/mm/aaaa.'); return; }
  const today  = todayLocal();

  const isPast  = dayNumberOf(target) < dayNumberOf(today);
  const isToday = dayNumberOf(target) === dayNumberOf(today);
  const [a, b] = isPast ? [target, today] : [today, target];

  const td = totalDays(a, b);
  const { years, months, days } = diffDates(a, b);
  const tw = Math.floor(td / 7);

  let badge, headline;
  if (isToday) {
    badge    = '<span class="badge-future">hoje</span>';
    headline = `é hoje — ${fmtDate(target)}`;
  } else if (isPast) {
    badge    = '<span class="badge-past">já passou</span>';
    headline = `${plural(td, 'dia', 'dias')} desde ${fmtDate(target)}`;
  } else {
    badge    = '<span class="badge-future">em breve</span>';
    headline = `${plural(td, 'dia falta', 'dias faltam')} para ${fmtDate(target)}`;
  }

  showResult('c-result', `
    <div class="countdown-display">
      ${lbl ? `<p class="countdown-label-name">${escapeHTML(lbl)}</p>` : ''}
      <div class="countdown-big">${fmt(td)}</div>
      <div class="countdown-unit">${headline} ${badge}</div>
    </div>
    <div class="metrics-grid">
      ${metricCard(years,  plural(years,  'ano', 'anos'))}
      ${metricCard(months, plural(months, 'mês', 'meses'))}
      ${metricCard(days,   plural(days,   'dia', 'dias'))}
      ${metricCard(tw,     plural(tw,     'semana', 'semanas'))}
    </div>`);
}

function calcHoras() {
  const sv = document.getElementById('h-start').value;
  const ev = document.getElementById('h-end').value;
  if (!sv || !ev) { showError('h-result', 'Informe os dois horários.'); return; }

  let a = parseDateTimeInput(sv);
  let b = parseDateTimeInput(ev);
  if (!a || !b) { showError('h-result', 'Data ou horário inválido. Use o formato dd/mm/aaaa hh:mm.'); return; }
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

  showResult('h-result', `
    <div class="metrics-grid">
      ${metricCard(h, plural(h, 'hora', 'horas'),       true)}
      ${metricCard(m, plural(m, 'minuto', 'minutos'))}
      ${metricCard(s, plural(s, 'segundo', 'segundos'))}
    </div>
    <div class="totals-bar">
      ${totalItem(totHr,  plural(totHr, 'hora total', 'horas totais'))}
      <div class="totals-divider"></div>
      ${totalItem(totMin, plural(totMin, 'minuto', 'minutos'))}
      <div class="totals-divider"></div>
      ${totalItem(totSec, plural(totSec, 'segundo', 'segundos'))}
      <div class="totals-divider"></div>
      ${totalItem(td, plural(td, 'dia', 'dias'))}
      ${inverted ? '<span class="badge-past" style="margin-left:auto">ordem invertida</span>' : ''}
    </div>`);
}

function calcSemana() {
  const val = document.getElementById('w-date').value;
  if (!val) { showError('w-result', 'Informe uma data.'); return; }

  const target = parseDateInput(val);
  if (!target) { showError('w-result', 'Data inválida. Use o formato dd/mm/aaaa.'); return; }
  const today  = todayLocal();

  const weekdayFull = target.toLocaleDateString('pt-BR', { weekday: 'long' });
  const weekdayCap  = weekdayFull.charAt(0).toUpperCase() + weekdayFull.slice(1);

  const isPast  = dayNumberOf(target) < dayNumberOf(today);
  const isToday = dayNumberOf(target) === dayNumberOf(today);

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

  showResult('w-result', `
    <div class="countdown-display">
      <div class="countdown-big" style="font-size: clamp(2.2rem, 6vw, 3.5rem);">${weekdayCap}</div>
      <div class="countdown-unit">${fmtDate(target)} ${pretext} ${weekdayCap.toLowerCase()} ${badge}</div>
    </div>`);
}

// Minúsculas e sem acentos: "São Paulo" → "sao paulo".
function normalizeText(str) {
  return String(str).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
}

function setupAutocomplete(inputEl, suggestionsEl, getMatches, renderLabel, onSelect) {
  inputEl.addEventListener('focus', () => inputEl.select());

  inputEl.addEventListener('input', () => {
    const query = normalizeText(inputEl.value);
    suggestionsEl.innerHTML = '';
    inputEl.dataset.key = '';

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
      submitFromInput(inputEl);
    }
  });
}

const cidadeInput     = document.getElementById('cl-city');
const citySuggestions = document.getElementById('cl-suggestions');
const mesInput        = document.getElementById('cl-month');
const mesSuggestions  = document.getElementById('cl-month-suggestions');
const nomesDosMeses   = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

// Outros nomes pelos quais uma cidade pode ser procurada.
const cidadeApelidos = {
  "nova iorque": ["nova york", "new york", "ny"],
  "tokyo":       ["toquio"],
  "shenzen":     ["shenzhen"],
  "amazonia":    ["manaus"],
  "sicilia":     ["palermo"],
  "washington":  ["washington dc"],
  "cidade do mexico": ["mexico"],
  "amsterdam":   ["amsterda"],
  "edimburgo": ["edinburgh"],
  "inverness": ["highlands", "terras altas", "lago ness", "loch ness"],
  "cardiff": ["gales", "pais de gales", "wales"],
  "swansea": ["gales", "pais de gales", "wales"],
  "calgary": ["rochosas", "banff"],
  "cancun": ["riviera maya"],
  "bariloche": ["patagonia"],
  "ushuaia": ["terra do fogo", "fim do mundo"],
  "salvador": ["bahia"],
  "recife": ["pernambuco"],
  "fortaleza": ["ceara"],
  "brasilia": ["distrito federal", "df"],
  "belo horizonte": ["bh", "minas gerais"],
  "florianopolis": ["floripa", "santa catarina"],
  "gramado": ["serra gaucha", "canela"],
  "antartida": ["antartica", "polo sul", "mcmurdo"],
  "artico": ["polo norte", "svalbard", "longyearbyen"],
  "carcosa": ["rei de amarelo", "rei amarelo", "lago de hali", "hali", "king in yellow", "hastur", "sinal amarelo"],
  "estrela da morte": ["death star", "imperio", "darth vader", "vader"],
  "goiania": ["goias"],
  "campo grande": ["mato grosso do sul"],
  "cuiaba": ["mato grosso", "pantanal"],
  "vitoria": ["espirito santo"],
  "sao luis": ["maranhao", "lencois maranhenses"],
  "teresina": ["piaui"],
  "joao pessoa": ["paraiba"],
  "maceio": ["alagoas"],
  "aracaju": ["sergipe"],
  "porto velho": ["rondonia"],
  "rio branco": ["acre"],
  "macapa": ["amapa"],
  "boa vista": ["roraima"],
  "palmas": ["tocantins", "jalapao"],
  "santos": ["litoral paulista"],
  "campos do jordao": ["serra da mantiqueira"],
  "foz do iguacu": ["cataratas", "iguacu"],
  "fernando de noronha": ["noronha"],
  "lisboa": ["lisbon"],
  "roma": ["rome", "vaticano"],
  "veneza": ["venice"],
  "florenca": ["florence", "toscana"],
  "atenas": ["athens"],
  "istambul": ["istanbul", "constantinopla"],
  "viena": ["vienna"],
  "praga": ["prague", "tchequia"],
  "zurique": ["zurich", "alpes"],
  "copenhague": ["copenhagen"],
  "estocolmo": ["stockholm"],
  "helsinque": ["helsinki"],
  "rovaniemi": ["laponia", "papai noel", "aurora boreal"],
  "reykjavik": ["iceland"],
  "varsovia": ["warsaw"],
  "budapeste": ["budapest"],
  "san francisco": ["sf", "california"],
  "denver": ["colorado"],
  "honolulu": ["havai", "hawaii"],
  "anchorage": ["alaska"],
  "punta cana": ["caribe"],
  "cusco": ["machu picchu"],
  "montevideu": ["montevideo"],
  "cairo": ["piramides", "egito"],
  "marrakech": ["saara"],
  "cidade do cabo": ["cape town"],
  "nairobi": ["safari"],
  "singapura": ["singapore"],
  "mumbai": ["bombaim"],
  "nova delhi": ["delhi"],
  "bali": ["denpasar"],
  "sapporo": ["hokkaido"],
  "tatooine": ["luke", "skywalker", "mos eisley", "dois sois"],
  "mustafar": ["anakin", "darth vader", "lava", "vulcao"],
  "hoth": ["wampa", "base eco"],
  "coruscant": ["templo jedi", "senado galactico", "republica"],
  "mordor": ["senhor dos aneis", "sauron", "frodo", "monte da perdicao", "terra media"],
  "valfenda": ["rivendell", "elrond", "senhor dos aneis", "terra media"],
  "winterfell": ["game of thrones", "got", "stark", "westeros", "jon snow"],
  "narnia": ["aslam", "feiticeira branca", "guarda-roupa", "guarda roupa"],
  "arrakis": ["duna", "dune", "shai-hulud", "especiaria"],
  "rlyeh": ["cthulhu", "lovecraft", "r'lyeh"],
  "hogwarts": ["harry potter", "hogsmeade"],
  "gotham": ["batman", "arkham", "coringa"]
};

// Termos pesquisáveis de cada cidade: chave, nome exibido e apelidos, sem acentos.
const cidadeTermos = Object.keys(climaData).map(key => ({
  key,
  termos: [key, normalizeText(climaData[key].nome), ...(cidadeApelidos[key] || [])]
}));

function buscarCidades(query) {
  const exato = [], inicio = [], palavra = [];
  cidadeTermos.forEach(({ key, termos }) => {
    // Nome exato primeiro ("porto" → Porto, antes de Porto Alegre)
    if (termos.some(t => t === query || t.split(',')[0].trim() === query)) {
      exato.push(key);
    } else if (termos.some(t => t.startsWith(query))) {
      inicio.push(key);
    } else if (termos.some(t => t.split(/[^a-z0-9]+/).some(w => w && w.startsWith(query)))) {
      palavra.push(key);
    }
  });
  return exato.concat(inicio, palavra);
}

setupAutocomplete(
  cidadeInput,
  citySuggestions,
  buscarCidades,
  key => climaData[key].nome,
  key => { cidadeInput.value = climaData[key].nome; cidadeInput.dataset.key = key; }
);

setupAutocomplete(
  mesInput,
  mesSuggestions,
  query => nomesDosMeses.filter(m => normalizeText(m).startsWith(query)),
  m => m,
  m => { mesInput.value = m; mesInput.dataset.key = m; }
);

function calcClima() {
  const key = cidadeInput.dataset.key;
  const mes = mesInput.dataset.key;

  if (!key || !Object.prototype.hasOwnProperty.call(climaData, key)) {
    showError('cl-result', 'Selecione uma cidade da lista de sugestões.');
    return;
  }
  if (!mes) {
    showError('cl-result', 'Selecione um mês da lista de sugestões.');
    return;
  }

  const cidade   = climaData[key];
  const dadosMes = cidade.meses.find(m => m.mes === mes);
  if (!dadosMes) {
    showError('cl-result', 'Selecione um mês da lista de sugestões.');
    return;
  }

  const media = Math.round((dadosMes.maxima + dadosMes.minima) / 2);

  showResult('cl-result', `
    <div class="countdown-display">
      <p class="countdown-label-name">${escapeHTML(cidade.nome)} — ${escapeHTML(mes)}</p>
      <div class="countdown-big" style="font-size: clamp(2.4rem, 7vw, 4rem);">${dadosMes.maxima} °C / ${dadosMes.minima} °C</div>
      <div class="countdown-unit">média de ${media} °C &nbsp;·&nbsp; céu ${escapeHTML(dadosMes.ceu)} &nbsp;·&nbsp; ${escapeHTML(dadosMes.chuva)}</div>
    </div>`);
}

// Enter em qualquer campo: fecha o teclado no celular e aciona o botão do formulário.
function submitFromInput(inputEl) {
  const card = inputEl.closest('.form-card');
  const btn  = card ? card.querySelector('.btn-calc') : null;
  if (!btn) return;
  inputEl.blur();
  btn.click();
}

document.querySelectorAll('.form-card input:not(#cl-city):not(#cl-month)').forEach(input => {
  input.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    submitFromInput(input);
  });
});

// Ao editar um campo, esconde o resultado anterior para não mostrar um valor que não
// corresponde mais à entrada atual.
document.querySelectorAll('.panel').forEach(panel => {
  const result = panel.querySelector('.result-area');
  if (!result) return;
  panel.querySelectorAll('.form-card input').forEach(input => {
    input.addEventListener('input', () => result.classList.add('hidden'));
  });
});

document.getElementById('btn-idade').addEventListener('click', calcIdade);
document.getElementById('btn-diff').addEventListener('click', calcDiff);
document.getElementById('btn-countdown').addEventListener('click', calcCountdown);
document.getElementById('btn-horas').addEventListener('click', calcHoras);
document.getElementById('btn-semana').addEventListener('click', calcSemana);
document.getElementById('btn-clima').addEventListener('click', calcClima);
