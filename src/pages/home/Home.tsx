import { HomeWrapper } from './styleHome';

const Home = () => {
  return (
    <HomeWrapper>
      <img src="./img/nubank_logo.png" alt="" />
      <input type="text" placeholder="Usuário" />
      <input type="text" placeholder="Senha" />
      <button>Entrar</button>
      <button className="">Criar uma nova conta</button>
    </HomeWrapper>
  );
};
export default Home;
