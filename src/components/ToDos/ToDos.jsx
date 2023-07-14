import Footer from "./compose/Footer/Footer";
import Header from "./compose/Header/Header";
import List from "./compose/List/List";

const mockToDos = [
  { id: "0", name: "Fazer o desafio de Talysson" },
  { id: "1", name: "Fazer as correções do betinho" },
  { id: "2", name: "Fazer as coisas do cliente" },
];

const ToDos = () => {
  return (
    <div>
      <Header />
      <List todos={mockToDos} />
      <Footer />
    </div>
  );
};

export default ToDos;
