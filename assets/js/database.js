// database.js - Central de Produtos e Categorias

const categorias = [
    { id: 'parafusos', nome: 'Parafusos & Fixadores' },
    { id: 'chaves', nome: 'Chaves de Precisão' },
    { id: 'eletricas', nome: 'Ferramentas Elétricas' }
];

const produtos = [
    {
        id: 1,
        categoria: 'parafusos',
        nome: 'Parafuso Sextavado Inox A2 M8',
        imagem: 'img/produtos/parafuso-sextavado.jpg', // Caminho da imagem (você criará)
        resumo: 'Alta resistência à corrosão, ideal para ambientes industriais litorâneos.',
        medidas: ['M6 x 20', 'M8 x 30', 'M10 x 50', 'M12 x 80'],
        especificacoes: {
            Material: 'Aço Inox A2 (AISI 304)',
            Norma: 'DIN 933',
            Classe: '70',
            Acabamento: 'Polido'
        }
    },
    {
        id: 2,
        categoria: 'chaves',
        nome: 'Chave de Fenda de Precisão Pro',
        imagem: 'img/produtos/chave-fenda.jpg',
        resumo: 'Cabo ergonômico antiderrapante e ponta magnética.',
        medidas: ['1/8 x 3"', '1/4 x 4"', '1/4 x 6"', '5/16 x 8"'],
        especificacoes: {
            Tipo: 'Fenda (Slotted)',
            Material: 'Aço Cromo Vanádio',
            Marca: 'ProTools'
        }
    }
    // ... adicione mais produtos aqui
];