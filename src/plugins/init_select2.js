// import $ from 'jquery';
// import 'select2';
const cities = ["Where I am","Amsterdam","Bali","Barcelona","Belo Horizonte","Berlin","Bordeaux","Brussels","Buenos Aires","Casablanca","Chengdu","Copenhagen","Johannesburg","Kyoto","Lausanne","Lille","Lisbon","London","Lyon","Marseille","Melbourne","Mexico","Milan","Montréal","Nancy","Nantes","New York","Paris","Rio de Janeiro","São Paulo","Shanghai","Shenzhen","Tel Aviv","Tokyo","Toulouse"];

const initSelect2 = () => {
  $('.select2').select2({ data: cities });
};

export { initSelect2 };