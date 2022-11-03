import Hos1 from '../img/Hospedagens/hospedagem01.png';
import Hos2 from '../img/Hospedagens/hospedagem02.png';
import Hos3 from '../img/Hospedagens/hospedagem03.png';

export const DadosHospedagens = {
  id: 'Hospedagens',
  titulo: 'Pousadas e Hotéis em Paraty',
  texto:
    'Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.',
  dados: [
    {
      imagem: Hos1,
      nome: 'Pousada Missanga',
      valor: 350.0,
      localizacao: 'Próx. à Av. Roberto Silveira',
    },
    {
      imagem: Hos2,
      nome: 'Pousada Morro do Forte',
      valor: 450.0,
      localizacao: 'Próx. à Praia - Pontal',
    },
    {
      imagem: Hos3,
      nome: 'Pousada Porto Imperial',
      valor: 550.0,
      localizacao: 'Centro Histórico',
    },
  ],
};
