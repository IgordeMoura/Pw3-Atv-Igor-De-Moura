//componentes importados
import './App.css';
import Produto from './Components/Produto';
import Descricao from './Components/Descricao';


// imagens importadas
import babilonia from './Livros/Babilônia_A_Mesopotâmia.jpg';
import Informacoes from './Components/Informacoes';


const desc = 'teste'

function App() {
  return (
    <div className='App'>
      <Produto
        imagem = {babilonia}
        legenda = {desc}
      />
      <Descricao
        titulo= "Babilônia: A mesopotâmia e o nascimento da civilização"
        descricao="Em Babilônia, Paul Kriwaczek conta a história da antiga Mesopotâmia, desde as primeiras povoações, em torno de 5400 a.C., até a chegada dos persas no século VI a.C. O autor faz a crônica da ascensão e queda do reino babilônico durante esse período e analisa suas numerosas inovações materiais, sociais e culturais. O povo da Mesopotâmia lançou as bases do que hoje conhecemos como civilização – com o nascimento da escrita, do estado centralizado, da divisão do trabalho, da religião organizada, da matemática e da lei, entre muitas outras coisas fundamentais que nos servem até hoje. Nas cidades que construíram se desenrolou metade da história humana. No cerne da magistral narrativa de Kriwaczek está a glória da Babilônia ― “o portal dos deuses” ―, que teve seu apogeu no reinado do soberano amorita Hamurábi, que unificou a cidade entre 1800 e 1750 a.C. Embora o poder babilônico viesse a crescer e depois declinar nos séculos seguintes, a Babilônia preservou sua importância como centro cultural, religioso e político por mais de 4 mil anos."
      />
    </div>
  );
}

export default App;
