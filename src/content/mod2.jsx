// src/content/mod2.jsx
import React, { useState } from 'react';
import { 
  Leaf, Sprout, Gem, ChevronRight, ChevronDown, BookMarked, 
  AlertTriangle, Library, CheckCircle2, TreeDeciduous, 
  Wind, Pickaxe, Droplets, SunMedium, ShieldQuestion, ScrollText
} from 'lucide-react';

// --- COMPONENTES INTERATIVOS EXPANDIDOS (MÓDULO 2) --- //

const AgricolaContext = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-amber-200 rounded-2xl overflow-hidden mt-8 mb-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-amber-50 p-6 flex items-center justify-between font-bold text-amber-900 hover:bg-amber-100 transition-colors"
      >
        <span className="flex items-center text-xl"><ScrollText className="w-6 h-6 mr-4 text-amber-600"/> Curiosidade: A Prática Agrícola no Século I</span>
        {isOpen ? <ChevronDown className="w-6 h-6 text-amber-600" /> : <ChevronRight className="w-6 h-6 text-amber-600" />}
      </button>
      <div className={`p-8 bg-white border-t border-amber-100 ${isOpen ? 'block animate-in fade-in' : 'hidden'}`}>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Para o leitor ocidental moderno, o semeador da parábola parece descuidado, desperdiçando sementes preciosas nas pedras e no caminho. Contudo, <strong>Joachim Jeremias</strong> e outros estudiosos do Oriente Médio explicam que a prática agrícola palestina era inversa à nossa.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Eles <strong>não aravam a terra antes de semear</strong>. O semeador atirava as sementes sobre a terra dura (onde as pessoas caminhavam), sobre áreas onde os espinhos haviam secado no verão e sobre lugares onde a rocha matriz estava logo abaixo da fina camada de pó. <strong>Apenas depois de semear é que o arado passava</strong> para misturar a semente com a terra. Isso explica por que a semente caiu em todos os tipos de solo: o semeador estava cobrindo o campo inteiro antes de lavrá-lo.
        </p>
      </div>
    </div>
  );
};

const SoilTabs = () => {
  const [activeSoil, setActiveSoil] = useState(0);
  const soils = [
    { 
      id: 'caminho', name: "À Beira do Caminho", icon: <Droplets className="w-5 h-5"/>, color: 'slate',
      title: "O Coração Endurecido e Cínico",
      desc: "Representa a terra batida pelos pés dos viajantes. A semente fica exposta na superfície. É o ouvinte que escuta o Evangelho com cinismo, indiferença ou presunção intelectual. A Palavra não penetra, não há arrependimento, e o diabo (as aves) arrebata a semente antes que produza qualquer efeito. É a tragédia da mente fechada à revelação."
    },
    { 
      id: 'pedregoso', name: "Solo Rochoso", icon: <SunMedium className="w-5 h-5"/>, color: 'amber',
      title: "O Coração Emocional e Raso",
      desc: "Não se trata de terra com pedrinhas, mas de um leito de rocha calcária com uma fina camada de terra por cima. A semente brota rápido porque a terra é quente, mas não tem para onde deitar raízes profundas. Quando o sol escaldante da perseguição ou da aflição surge, a planta murcha. Representa falsas conversões baseadas em emocionalismo momentâneo ou num 'evangelho de prosperidade' que não suporta a cruz."
    },
    { 
      id: 'espinhoso', name: "Solo Espinhoso", icon: <AlertTriangle className="w-5 h-5"/>, color: 'red',
      title: "O Coração Dividido e Mundano",
      desc: "O solo é profundo e rico o suficiente para suportar raízes. A Palavra penetra e cresce, mas as raízes dos espinhos (as ervas daninhas cortadas na superfície, mas vivas abaixo da terra) ainda estão lá. Representa a pessoa que quer Jesus, mas também quer o mundo. A 'fascinação das riquezas e os cuidados da vida' competem pelos nutrientes da alma e acabam sufocando o Evangelho. Dá folhagem, mas não dá fruto."
    },
    { 
      id: 'bom', name: "A Boa Terra", icon: <Sprout className="w-5 h-5"/>, color: 'emerald',
      title: "O Coração Preparado e Frutífero",
      desc: "A única marca definitiva do verdadeiro discipulado não é o choro no altar ou a alegria inicial, mas sim a frutificação constante (a 30, 60 e 100 por um). É o coração que foi arado pelo Espírito Santo (arrependimento), que ouve, compreende e submete-se ao senhorio de Cristo, produzindo o fruto do Espírito a longo prazo."
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden my-8 shadow-sm">
      <div className="flex flex-wrap bg-slate-50 p-2 border-b border-slate-200">
        {soils.map((soil, idx) => (
          <button 
            key={soil.id} onClick={() => setActiveSoil(idx)}
            className={`flex-1 min-w-[140px] py-3 px-2 rounded-xl font-bold text-sm flex flex-col items-center justify-center transition-all m-1
              ${activeSoil === idx ? `bg-${soil.color}-600 text-white shadow-md` : `text-slate-500 hover:bg-slate-200`}`}
          >
            <div className="mb-1">{soil.icon}</div>
            {soil.name}
          </button>
        ))}
      </div>
      <div className="p-8 md:p-12">
        <h4 className={`text-2xl font-bold mb-4 text-${soils[activeSoil].color}-800`}>
          {soils[activeSoil].title}
        </h4>
        <p className="text-slate-700 text-lg leading-relaxed">
          {soils[activeSoil].desc}
        </p>
      </div>
    </div>
  );
};

const ExpectationVsReality = () => {
  const [view, setView] = useState('expectativa');
  return (
    <div className="border border-indigo-200 rounded-2xl overflow-hidden my-8 bg-white">
      <div className="bg-indigo-50 p-6 border-b border-indigo-100 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h4 className="font-bold text-indigo-900 flex items-center text-xl"><BookMarked className="w-6 h-6 mr-3" /> A Imagem do Reino</h4>
          <p className="text-md text-indigo-800 mt-1">Contraste entre a teologia rabínica e o ensino de Jesus:</p>
        </div>
        <div className="flex bg-white rounded-lg p-1 border border-indigo-200 shadow-sm">
          <button onClick={() => setView('expectativa')} className={`px-4 py-2 rounded-md font-bold text-sm transition-colors ${view === 'expectativa' ? 'bg-indigo-600 text-white' : 'text-indigo-600 hover:bg-indigo-50'}`}>A Expectativa</button>
          <button onClick={() => setView('realidade')} className={`px-4 py-2 rounded-md font-bold text-sm transition-colors ${view === 'realidade' ? 'bg-emerald-600 text-white' : 'text-emerald-600 hover:bg-emerald-50'}`}>A Realidade (Jesus)</button>
        </div>
      </div>
      <div className="p-8 md:p-10">
        <div className={`${view === 'expectativa' ? 'block animate-in zoom-in-95' : 'hidden'}`}>
          <div className="flex items-start">
            <TreeDeciduous className="w-12 h-12 text-indigo-800 mr-6 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-2xl text-indigo-900 mb-3">O Majestoso Cedro do Líbano</h5>
              <p className="text-slate-700 text-lg leading-relaxed">
                Na mente judaica do 1º século, fundamentada em Ezequiel 17:22-24, o Reino Messiânico seria implantado como um <strong>glorioso e altivo Cedro do Líbano</strong> plantado no alto de um monte. Eles esperavam um reino político imediato, um exército imbatível que esmagaria o Império Romano numa explosão de glória visível e poderio bélico que faria as nações tremerem.
              </p>
            </div>
          </div>
        </div>
        <div className={`${view === 'realidade' ? 'block animate-in zoom-in-95' : 'hidden'}`}>
          <div className="flex items-start">
            <Leaf className="w-12 h-12 text-emerald-600 mr-6 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-2xl text-emerald-800 mb-3">A Humilde e Invasiva Mostarda</h5>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Jesus choca a audiência ao rejeitar a metáfora do Cedro majestoso e escolher a <strong>Semente de Mostarda</strong>. Esta era a menor semente agrícola plantada na Palestina. A mostarda crescia como um arbusto desordenado (não uma árvore de madeira nobre), quase como uma erva daninha que, uma vez plantada, se espalhava agressivamente e não podia ser detida.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                A lição de Cristo é clara: o Reino começará de forma insignificante, desprezível e frágil aos olhos humanos (com um carpinteiro e doze galileus rústicos). No entanto, o seu crescimento exterior será tão vasto, incontrolável e abrangente que abrigará pessoas de todas as nações (as "aves do céu" aninhando-se nos seus ramos — um símbolo profético para a inclusão dos gentios).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeavenDeepDive = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-purple-200 rounded-2xl overflow-hidden mt-8 mb-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-purple-50 p-6 flex items-center justify-between font-bold text-purple-900 hover:bg-purple-100 transition-colors"
      >
        <span className="flex items-center text-xl"><Wind className="w-6 h-6 mr-4 text-purple-600"/> Curiosidade Teológica: As Três Medidas de Farinha</span>
        {isOpen ? <ChevronDown className="w-6 h-6 text-purple-600" /> : <ChevronRight className="w-6 h-6 text-purple-600" />}
      </button>
      <div className={`p-8 bg-white border-t border-purple-100 ${isOpen ? 'block animate-in fade-in' : 'hidden'}`}>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Você já se perguntou por que Jesus especificou que a mulher escondeu o fermento em <strong>"três medidas de farinha"</strong>? O teólogo <strong>Kenneth Bailey</strong> chama a atenção para este detalhe aparentemente banal. Três medidas de farinha representam cerca de 36 a 40 litros de massa — o suficiente para alimentar mais de 100 a 150 pessoas! Era uma quantidade absurda para uma família camponesa fazer pão diariamente.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Na verdade, esta quantidade exata remete a <strong>Gênesis 18:6</strong>, quando Abraão pede a Sara para preparar "três medidas de flor de farinha" para alimentar o próprio Deus (na forma dos três anjos visitantes). 
        </p>
        <div className="mt-4 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
          <p className="text-purple-900 font-bold">O Significado Escatológico:</p>
          <p className="text-purple-800 text-md">
            Ao usar a imagem de uma quantidade festiva gigantesca que lembra a refeição oferecida ao Senhor por Abraão, Jesus ensina que a operação do Evangelho (o fermento invisível) culminará não apenas numa melhora moral da sociedade, mas no grandioso e abundante Banquete Messiânico do fim dos tempos.
          </p>
        </div>
      </div>
    </div>
  );
};

const ValueComparison = () => {
  const [culture, setCulture] = useState('tesouro');
  
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-amber-200 overflow-hidden my-10">
      <div className="bg-amber-100 p-6 text-center">
        <h4 className="font-bold text-amber-900 uppercase tracking-widest text-sm mb-4">As Duas Vias de Encontro com o Reino</h4>
        <div className="inline-flex bg-white p-1 rounded-full shadow-sm w-full sm:w-auto overflow-x-auto">
          <button 
            onClick={() => setCulture('tesouro')}
            className={`px-8 py-3 rounded-full text-md font-bold whitespace-nowrap transition-all ${culture === 'tesouro' ? 'bg-amber-800 text-white' : 'text-amber-700 hover:text-amber-900'}`}
          >
            O Tesouro Escondido
          </button>
          <button 
            onClick={() => setCulture('perola')}
            className={`px-8 py-3 rounded-full text-md font-bold whitespace-nowrap transition-all ${culture === 'perola' ? 'bg-amber-500 text-white' : 'text-amber-700 hover:text-amber-800'}`}
          >
            A Pérola de Grande Valor
          </button>
        </div>
      </div>

      <div className="p-8 md:p-10">
        <div className={`${culture === 'tesouro' ? 'block animate-in zoom-in-95' : 'hidden'}`}>
          <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-amber-800">
            <h4 className="font-bold text-amber-900 mb-4 uppercase text-sm tracking-widest flex items-center"><Pickaxe className="mr-2 w-5 h-5"/> Encontrado pelo Acaso (Graça Inesperada)</h4>
            <p className="text-slate-700 text-lg leading-relaxed">
              O homem da primeira parábola era, provavelmente, um diarista pobre trabalhando no campo de outro homem. Ele <strong>não estava à procura</strong> de um tesouro; estava apenas a lavrar a terra para sobreviver. De repente, o arado bate em algo. Ele encontra uma fortuna que muda a sua vida por puro acidente.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mt-4">
              Isso ilustra maravilhosamente a <strong>Graça Irresistível e Surpreendente</strong>. Representa aquelas pessoas que não estão a buscar ativamente a Deus. Estão ocupadas com a rotina, ociosas espiritualmente ou até hostis, mas a graça do Evangelho irrompe nas suas vidas de forma inesperada (ex: A mulher samaritana indo buscar água, Zaqueu subindo na árvore por curiosidade, ou o Apóstolo Paulo a caminho de Damasco para prender cristãos). Deus os encontra.
            </p>
          </div>
        </div>

        <div className={`${culture === 'perola' ? 'block animate-in zoom-in-95' : 'hidden'}`}>
          <div className="bg-amber-50 p-8 rounded-xl border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-900 mb-4 uppercase text-sm tracking-widest flex items-center"><Gem className="mr-2 w-5 h-5"/> Encontrado pela Busca Diligente</h4>
            <p className="text-amber-800 text-lg leading-relaxed mb-4">
              O mercador de pérolas é o exato oposto. Ele é rico, viajado e um perito no assunto. Ele dedicou a sua vida inteira a viajar, a investigar e a <strong>buscar intencionalmente</strong> as melhores pérolas do mundo.
            </p>
            <p className="text-amber-800 text-lg leading-relaxed">
              Ele representa as almas sedentas e inquiridoras. São pessoas que estão ativamente à procura de sentido, verdade e paz através de religiões, filosofias ou conhecimento (ex: o eunuco etíope a ler o pergaminho no seu carro, ou Nicodemos procurando Jesus à noite). Quando ele finalmente põe os olhos em Cristo (A Pérola Única), ele reconhece a perfeição absoluta e percebe que todas as outras "pérolas" (ideologias e bens) que colecionou não têm valor algum em comparação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TreasureEthics = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-300 rounded-2xl overflow-hidden mt-8 mb-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white p-6 flex items-center justify-between font-bold text-slate-800 hover:bg-slate-50 transition-colors"
      >
        <span className="flex items-center text-xl"><ShieldQuestion className="w-6 h-6 mr-4 text-slate-600"/> O Dilema Ético: Foi roubo esconder o tesouro?</span>
        {isOpen ? <ChevronDown className="w-6 h-6 text-slate-600" /> : <ChevronRight className="w-6 h-6 text-slate-600" />}
      </button>
      <div className={`p-8 bg-slate-50 border-t border-slate-200 ${isOpen ? 'block animate-in fade-in' : 'hidden'}`}>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Frequentemente questiona-se a ética do lavrador: Por que ele não entregou o tesouro ao dono do campo? Ele o escondeu de volta e comprou a propriedade. Jesus estaria a incentivar a desonestidade?
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          <strong>Craig Blomberg</strong> e as leis rabínicas da época esclarecem isso. Na antiguidade, sem bancos seguros, esconder fortunas no chão durante invasões de impérios estrangeiros era comum. Se o dono atual do campo tivesse enterrado o tesouro, não o teria esquecido. Claramente, o tesouro pertencia a antigos proprietários falecidos, cujo rasto se perdeu.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed font-bold">
          A Lei Rabínica ditava: "Se um homem encontra dinheiro espalhado ou um objeto de valor antigo num campo, isso pertence a quem descobre, desde que ele o retire fisicamente do solo (a lei do levantamento)." 
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mt-4">
          Se o trabalhador apenas o levantasse, os outros diaristas poderiam reivindicá-lo, ou o dono poderia forçar uma disputa judicial exaustiva. Para garantir o direito inquestionável, ele faz algo radical e perfeitamente legal: devolve-o à terra, vai embora, vende tudo o que tem na vida (roupas, casa, ferramentas) e compra a terra inteira a preço de mercado. O seu ato ilustra um desejo frenético e legal de possuir o Reino, custe o que custar.
        </p>
      </div>
    </div>
  );
};

// --- ESTRUTURA DOS DADOS DO MÓDULO 2 --- //
export const mod2 = {
  id: "mod2",
  titulo: "Módulo 2: A Dinâmica do Reino",
  descricao: "A Semeadura, O Crescimento e O Valor Inestimável",
  intro: {
    title: "Abertura do Módulo: A Dinâmica do Reino",
    content: (
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          Bem-vindo ao <strong>Módulo 2</strong> da nossa jornada. No módulo anterior, calibramos as nossas lentes hermenêuticas e culturais para não distorcermos a leitura. Agora, vamos aplicar esse conhecimento ao mais famoso agrupamento parabólico do Novo Testamento: o capítulo 13 do Evangelho de Mateus.
        </p>
        <p>
          Neste ponto do ministério de Jesus, a tensão é palpável. Os líderes religiosos acabaram de blasfemar contra o Espírito Santo, e os discípulos estão confusos. Afinal, as multidões queriam um Messias político; esperavam um Reino de glória imediata que destruiria Roma. A revolução de Jesus, no entanto, não envolvia espadas ou exércitos físicos.
        </p>
        <p>
          Diante desse descompasso de expectativas, Cristo passa a ensinar através de parábolas predominantemente rurais. Ele revela que o <strong>Reino de Deus operaria através de uma dinâmica misteriosa, subversiva e, aos olhos humanos iniciais, dececionante.</strong>
        </p>
        <p className="font-bold text-indigo-900 mt-6 text-xl">
          A Trilogia do Reino que estudaremos:
        </p>
        <ul className="list-none space-y-4 mt-4">
          <li className="flex items-start">
            <CheckCircle2 className="w-6 h-6 mr-3 text-indigo-500 flex-shrink-0 mt-0.5"/>
            <span><strong>A Semeadura (O Semeador):</strong> Revela que o Reino não é imposto pela força, mas semeado num mundo misto, onde a responsabilidade reside inteiramente na resposta humana (o solo).</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-6 h-6 mr-3 text-indigo-500 flex-shrink-0 mt-0.5"/>
            <span><strong>O Crescimento (Mostarda e Fermento):</strong> Garante que, apesar do começo aparentemente fútil e frágil, a expansão do Reino será absolutamente irrefreável, transformando o mundo de dentro para fora.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-6 h-6 mr-3 text-indigo-500 flex-shrink-0 mt-0.5"/>
            <span><strong>O Valor Inestimável (Tesouro e Pérola):</strong> Desvenda o mistério do discipulado radical, onde abrir mão de toda a vida terrena não é visto como um sacrifício trágico, mas como o negócio mais alegre e lucrativo do universo.</span>
          </li>
        </ul>
      </div>
    )
  },
  outro: {
    title: "Fechamento do Módulo: O Valor Supremo",
    mensagemFinal: "A marca de um coração que encontrou o verdadeiro Reino é a alegria de se esvaziar de si mesmo e do mundo para ficar plenamente repleto de Cristo.",
    content: (
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          Encerramos a nossa imersão na Dinâmica do Reino apresentada em Mateus 13. Jesus desconstruiu o militarismo e o imediatismo judaico da Sua época, revelando a natureza espiritual e incontrolável da Sua operação no mundo.
        </p>
        
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-8">
          <h4 className="font-bold text-xl text-slate-800 mb-6 border-b border-slate-300 pb-2">Síntese Teológica das Três Aulas:</h4>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 font-bold px-3 py-1 rounded-lg text-sm mr-4 mt-0.5">Aula 4</span>
              <div>
                <strong className="text-slate-900 block mb-1">O Mistério da Recepção Mista</strong>
                Fomos confrontados pela Parábola do Semeador. O poder inerente de salvação está exclusivamente na Semente (a Palavra). A semente nunca falha pela sua essência. A frutificação, no entanto, é barrada pela dureza, superficialidade ou cobiça do coração humano. Não importa como a nossa fé começa, a única prova de conversão verdadeira é a perseverança e o fruto constante.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-lg text-sm mr-4 mt-0.5">Aula 5</span>
              <div>
                <strong className="text-slate-900 block mb-1">O Mistério do Crescimento Silencioso</strong>
                Maravilhámo-nos com as imagens agrícolas modestas. O Reino recusa os esplendores dos "cedros do Líbano". Ele enraíza-se como uma reles semente de mostarda e infiltra-se na farinha de forma impercetível (o Fermento). Contudo, o fim dessa trajetória não tem limites; resultará no grandioso banquete escatológico de Deus que abrangerá todas as nações.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-lg text-sm mr-4 mt-0.5">Aula 6</span>
              <div>
                <strong className="text-slate-900 block mb-1">O Mistério da Troca Alegre</strong>
                Por fim, vimos que o Evangelho salva pecadores em contextos opostos (achado por acaso ou pela busca incansável). A grande lição não é a dor da renúncia cristã, mas a alegria do lucro. Quando compreendemos a imensidão da glória de Cristo, vender as posses temporais e o eu soberbo torna-se a decisão mais eufórica que um ser humano pode tomar.
              </div>
            </li>
          </ul>
        </div>
        
        <p>
          Com os corações sondados pelo Semeador e confiantes na expansão silenciosa do Reino, estamos prontos para avançar para o Módulo 3, onde mergulharemos nas pungentes parábolas da Graça, Misericórdia e Perdão de Lucas 15.
        </p>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif flex items-center">
            <Library className="w-6 h-6 mr-3 text-indigo-600"/>
            Autores e Obras Base Utilizadas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5"/>
              <div>
                <span className="font-bold text-slate-800">Hernandes Dias Lopes</span><br/>
                <span className="italic text-slate-500 text-sm">As Parábolas de Jesus: Desvendando a riqueza espiritual das palavras do Filho de Deus</span>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5"/>
              <div>
                <span className="font-bold text-slate-800">John MacArthur</span><br/>
                <span className="italic text-slate-500 text-sm">As Parábolas de Jesus: Os mistérios do reino de Deus revelados nas histórias contadas pelo Salvador</span>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5"/>
              <div>
                <span className="font-bold text-slate-800">Simon J. Kistemaker</span><br/>
                <span className="italic text-slate-500 text-sm">As parábolas de Jesus: Uma Análise exegética e prática dos ensinos de Cristo</span>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5"/>
              <div>
                <span className="font-bold text-slate-800">Kenneth E. Bailey</span><br/>
                <span className="italic text-slate-500 text-sm">Jesus pela ótica do Oriente Médio: Estudos culturais sobre os Evangelhos</span>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5"/>
              <div>
                <span className="font-bold text-slate-800">Craig L. Blomberg</span><br/>
                <span className="italic text-slate-500 text-sm">Pregando as parábolas: Da interpretação responsável à proclamação poderosa</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  },
  aulas: [
    {
      id: 4,
      title: "O Semeador e a Responsabilidade Humana",
      icon: <Leaf className="w-5 h-5" />,
      objective: "Compreender que o Reino não é imposto pela força, mas semeado num mundo misto, onde a responsabilidade reside inteiramente na resposta humana (o solo).",
      content: (
        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            A Parábola do Semeador é frequentemente chamada de "A Parábola Matriz". A sua importância é singular, pois é uma das poucas que o próprio Jesus interpretou em detalhes. Em Marcos 4:13, Ele desafia os discípulos: <em>"Não compreendeis esta parábola? Como, pois, compreendereis todas as parábolas?"</em>. Ela é a chave hermenêutica para a compreensão da pedagogia de Cristo.
          </p>

          <AgricolaContext />

          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">
            A Perfeição da Semente e a Variável do Solo
          </h3>
          <p>
            Como nota <span className="font-bold text-slate-800">Hernandes Dias Lopes</span>, ao analisarmos os elementos desta parábola, notamos algo vital: não existe qualquer deficiência no Semeador (o Filho do Homem e, por extensão, os Seus pregadores fiéis), nem existe qualquer falha na genética da Semente (o Evangelho do Reino).
          </p>
          <p>
            A semente possui poder intrínseco, vivificador e divino. Se você colocar uma semente num balcão de vidro, ela não fará nada. O milagre do crescimento requer interação com a terra. A única variável responsável pelo sucesso ou pelo fracasso trágico da colheita não é a qualidade da mensagem de Cristo, mas sim <strong>a disposição e o estado moral do solo</strong> — o coração humano.
          </p>

          <SoilTabs />

          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">
            A Advertência Pastoral
          </h3>
          <p>
            O ensino aqui é brutalmente honesto. Jesus está a vacinar os seus discípulos (e a Igreja do futuro) contra a ilusão do avivamento total e da aceitação unânime. O Evangelho será pregado de forma indiscriminada (semeado largamente), mas <strong>a maior parte do esforço não dará fruto para a vida eterna</strong>. Três em cada quatro terrenos falham.
          </p>
          <p>
            Além disso, os solos rochosos e espinhosos são alertas devastadores contra as falsas conversões modernas baseadas no emocionalismo e no pragmatismo terreno. Se a palavra não gerar arrependimento autêntico (arado) e não resistir à provação, não foi fé salvífica.
          </p>
          
          <div className="bg-indigo-900 text-white p-8 rounded-2xl mt-10">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-indigo-200">Conclusão da Aula 3</h3>
            <p className="text-indigo-50 text-lg font-bold">
              A Parábola do Semeador é um apelo de sondagem aos nossos corações. Jesus tira o foco da popularidade temporária (a multidão que O ouvia) e coloca-o no discipulado genuíno. A única evidência incontestável de que somos a "boa terra" e não um falso convertido emocional, é o fruto espiritual invisível que se manifesta na perseverança da santidade ao longo do tempo.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "O Crescimento Irresistível do Reino",
      icon: <Sprout className="w-5 h-5" />,
      objective: "Desconstruir as expectativas messiânicas judaicas e contemplar a natureza subversiva, silenciosa e irrefreável da expansão do Reino de Deus (Mostarda e Fermento).",
      content: (
        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Após o "banho de água fria" da Parábola do Semeador — que avisou de forma cristalina que a maioria dos corações resistiria ou fracassaria em reter o Evangelho — os discípulos poderiam cair num estado de profundo desânimo e ceticismo. <em>Será que a missão ia falhar? Será que os inimigos seriam fortes demais para a semente?</em> 
          </p>
          <p>
            Para curar esse pessimismo preventivo, Jesus emenda um par de parábolas curtas que formam o eixo da certeza cristã: A Parábola do Grão de Mostarda e a Parábola do Fermento. O objetivo é garantir a vitória absoluta do Reino, apresentando, no entanto, uma dinâmica operacional diametralmente oposta à força dos impérios humanos.
          </p>

          <ExpectationVsReality />

          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">
            O Escândalo do Fermento na Massa
          </h3>
          <p>
            Se a mostarda chocou pela sua pequenez botânica, o fermento foi ainda mais contundente do ponto de vista teológico. Na vasta maioria da literatura rabínica, e em toda a Bíblia, <strong>o fermento é um símbolo consagrado para o pecado e a impureza</strong>. 
          </p>
          <p>
            Antes da Páscoa, as famílias judaicas vasculhavam cada centímetro da casa com velas para erradicar qualquer rasto de pão levedado. O Apóstolo Paulo usaria mais tarde a mesma figura dizendo: <em>"Um pouco de fermento leveda toda a massa. Alimpai-vos, pois, do fermento velho"</em> (1 Co 5:6-7).
          </p>
          <p>
            Portanto, quando Jesus ousa usar o fermento como imagem do Reino Santo de Deus, a audiência para. É um choque pedagógico magistral. Ele ignora a simbologia do pecado para aproveitar a <strong>propriedade físico-química da infiltração</strong>. Ao contrário da semente de mostarda que cresce para fora, tornando-se imensa ao ar livre, o fermento atua escondido e trabalha silenciosamente de dentro para fora, infetando e transformando inexoravelmente toda a farinha ao redor.
          </p>

          <LeavenDeepDive />

          <div className="bg-emerald-900 text-white p-8 rounded-2xl mt-10">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-emerald-200">Conclusão da Aula 2</h3>
            <p className="text-emerald-50 text-lg font-bold">
              A dinâmica do Reino é surpreendente: externa e visivelmente, crescerá do insignificante (12 homens simples) até abrigar gentios de todo o mundo. Internamente, agirá de forma subversiva nas estruturas da sociedade humana, não pela força política da espada romana, mas como fermento espiritual, espalhando uma transformação irreversível até à consumação dos séculos.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "O Valor Inestimável (Tesouro e Pérola)",
      icon: <Gem className="w-5 h-5" />,
      objective: "Demonstrar através do Tesouro Escondido e da Pérola de Grande Valor que o discipulado autêntico e a entrega total a Cristo não são fundados na tristeza da perda, mas na exultação do ganho incalculável.",
      content: (
        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Enquanto as parábolas anteriores do Semeador, Mostarda e Fermento foram ensinadas abertamente às multidões na beira da praia, Mateus regista em 13:36 uma mudança drástica de cenário. Jesus despede a multidão e entra <strong>em casa, a sós com os Seus discípulos</strong>. O clima muda de instrução pública para discipulado íntimo e radical. O objetivo agora é revelar o preço pessoal exigido por este Reino misterioso.
          </p>
          <p>
            Cristo fá-lo através de duas parábolas "gémeas". Embora curtas, elas carregam algumas das implicações mais profundas de todo o Novo Testamento sobre a teologia da conversão e da graça.
          </p>

          <ValueComparison />

          <TreasureEthics />

          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">
            A Teologia da Alegria na Renúncia
          </h3>
          <p>
            O erudito <span className="font-bold text-slate-800">John MacArthur</span> destaca que o pormenor literário mais revolucionário, contudo o mais frequentemente ignorado, da Parábola do Tesouro Escondido está comprimido numa pequena frase: <strong>"...e por causa da alegria, vai, vende tudo..."</strong> (Mt 13:44).
          </p>
          <p>
            Culturalmente, a igreja moderna desenvolveu um grave vício ao evangelizar. Muitas vezes apresentamos a conversão e o seguir a Cristo como se fosse uma tragédia lúgubre, um despojar choroso dos "prazeres" deste mundo para assumir obrigações austeras e o peso amargo de uma cruz. A visão que Jesus dá é exatamente a oposta. 
          </p>
          <p>
            Se você disser a um investidor que, para ele comprar os direitos vitalícios e intocáveis de todas as refinarias de ouro do mundo, ele precisa de vender a sua bicicleta em segunda mão e o seu velho apartamento de um quarto, ele não choraria no momento de assinar os papéis de venda. Ele não ficaria relutante ou com pena da sua bicicleta; ele correria desesperado e em euforia indescritível para livrar-se daquilo e comprar o novo bem. 
          </p>
          <p>
            Cristo é esse Tesouro e essa Pérola. O Evangelho é um bem de valor tão estupendo, absurdo e eterno, que quando os olhos do entendimento são abertos, livrar-se do ego, da justiça própria, das ambições profanas e de todas as riquezas seculares é feito não com pranto, mas com o que o teólogo C.S. Lewis chamaria de "graça a qualquer custo". É, literalmente, o melhor negócio do cosmos.
          </p>

          <div className="bg-indigo-900 text-white p-8 rounded-2xl mt-10">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-indigo-200">Conclusão da Aula 3</h3>
            <p className="text-indigo-50 text-lg font-bold">
              A salvação cristã é totalmente gratuita para nós (o tesouro é achado, não fabricado), mas, na prática, custará absolutamente tudo o que o homem é e tem (vendeu tudo para possuí-lo). A marca registrada de um coração convertido que entendeu verdadeiramente o que é o Reino dos Céus é o esvaziar-se de si mesmo com suprema e irresistível alegria, para ficar cheio do Rei.
            </p>
          </div>
        </div>
      )
    }
  ]
};