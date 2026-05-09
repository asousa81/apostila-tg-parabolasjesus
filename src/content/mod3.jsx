// src/content/mod3.jsx
import React, { useState } from 'react';
import { 
  HeartHandshake, HeartCrack, Users, ChevronRight, ChevronDown, 
  BookMarked, Lightbulb, AlertTriangle, Library, Map, CheckCircle2, 
  ShieldAlert, Cross, ScrollText, HeartPulse, Search, Coins,
  Swords, ShieldX, HandHeart, Sparkles, Footprints, Flame, 
  MessageSquareQuote, Microscope, PartyPopper, UserPlus,
  Shirt, Gem, Utensils, Ear, Frown, Smile
} from 'lucide-react';

// --- COMPONENTES INTERATIVOS DE ALTO IMPACTO (MÓDULO 3) --- //

const LostDynamics = () => {
  const [active, setActive] = useState('ovelha');
  return (
    <div className="border border-indigo-200 rounded-2xl overflow-hidden my-8 bg-white shadow-sm">
      <div className="bg-indigo-50 p-6 border-b border-indigo-100 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h4 className="font-bold text-indigo-900 flex items-center text-xl"><Search className="w-6 h-6 mr-3" /> PONTO 1: A Natureza do Distanciamento</h4>
          <p className="text-md text-indigo-800 mt-1">Diferenciando como nos afastamos de Deus:</p>
        </div>
        <div className="flex bg-white rounded-lg p-1 border border-indigo-200 shadow-sm">
          <button onClick={() => setActive('ovelha')} className={`px-4 py-2 rounded-md font-bold text-sm transition-colors ${active === 'ovelha' ? 'bg-indigo-600 text-white' : 'text-indigo-600 hover:bg-indigo-50'}`}>Ovelha (Displicência)</button>
          <button onClick={() => setActive('dracma')} className={`px-4 py-2 rounded-md font-bold text-sm transition-colors ${active === 'dracma' ? 'bg-amber-600 text-white' : 'text-amber-600 hover:bg-amber-50'}`}>Dracma (Descuido)</button>
        </div>
      </div>
      <div className="p-8 md:p-10">
        {active === 'ovelha' ? (
          <div className="animate-in zoom-in-95 duration-300">
             <div className="flex items-center mb-6 text-indigo-900">
                <Footprints className="w-10 h-10 mr-4 opacity-20"/>
                <h5 className="font-bold text-2xl font-serif">Vagando sem Rumo: O Pecado Irracional</h5>
             </div>
             <p className="text-slate-700 text-lg leading-relaxed mb-6">
               A ovelha perde-se por <strong>displicência</strong>. Ela não planeia uma rebelião; apenas segue o próximo tufo de erva até que a distância do pastor se torna irreversível. <strong>Simon Kistemaker</strong> nota que a ovelha é um animal que, uma vez perdido, deita-se e bale balindo aterrorizada, incapaz de achar o caminho de volta.
             </p>
             <div className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
                <p className="font-bold text-indigo-900 mb-2">Exegese de Kenneth Bailey (O Fardo da Restauração):</p>
                <p className="text-indigo-800 italic">"O Pastor deixa as 99 no deserto — um lugar seguro para pastagem temporária sob a guarda de pastores assistentes — para assumir o <strong>Fardo da Restauração</strong>. Ele coloca a ovelha de 30kg nos ombros. A graça não é apenas apontar a direção certa; é carregar o peso exaustivo do pecador de volta para casa."</p>
             </div>
          </div>
        ) : (
          <div className="animate-in zoom-in-95 duration-300">
             <div className="flex items-center mb-6 text-amber-600">
                <Coins className="w-10 h-10 mr-4 opacity-20"/>
                <h5 className="font-bold text-2xl font-serif">Perdida em Casa: O Erro da Comunidade</h5>
             </div>
             <p className="text-slate-700 text-lg leading-relaxed mb-6">
               A dracma perde-se por <strong>descuido de terceiros dentro de casa</strong>. Ela é inanimada e a sua perda reflete uma falha no ambiente interno. Representa os que se perdem "dentro" da própria Igreja devido a negligência, falta de discipulado ou escândalos institucionais.
             </p>
             <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
                <p className="font-bold text-amber-900 mb-2">A Tensão Sociológica do Dote (Kenneth Bailey):</p>
                <p className="text-amber-800 italic">"A moeda de prata não era apenas dinheiro para pão; era parte do ornamento de cabeça do casamento da camponesa (seu dote e segurança). Perder uma dracma era uma vergonha pública, semelhante a perder a pedra principal de uma aliança de noivado hoje. A busca meticulosa reflete o desespero de Deus em restaurar a honra da Sua Aliança com a humanidade."</p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MurmuringVsJoy = () => {
  return (
    <div className="border border-slate-200 bg-slate-50 rounded-2xl p-8 my-8 shadow-sm">
      <h3 className="text-2xl font-bold mb-6 font-serif text-slate-900 flex items-center">
        <Ear className="mr-3 text-indigo-500"/> PONTO 2: A Guerra das Reações
      </h3>
      <p className="text-lg text-slate-700 leading-relaxed mb-8">
        <strong>John MacArthur</strong> esclarece que as parábolas de Lucas 15 são um ataque direto à teologia farisaica. O choque de Jesus é evidenciado ao contrastar duas reações opostas ao pecador:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border-t-4 border-red-500 shadow-sm">
          <Frown className="w-8 h-8 text-red-500 mb-3" />
          <h4 className="font-bold text-red-900 text-xl mb-2">O Nojo Religioso</h4>
          <p className="text-slate-600">A elite judaica murmurava: <em>"Este recebe pecadores e come com eles"</em> (Lc 15:2). A teologia deles ditava que a santidade é mantida por segregação. O pecador não arrependido devia ser evitado e odiado como um agente de contaminação cerimonial.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border-t-4 border-emerald-500 shadow-sm">
          <Smile className="w-8 h-8 text-emerald-500 mb-3" />
          <h4 className="font-bold text-emerald-900 text-xl mb-2">O Júbilo Celestial</h4>
          <p className="text-slate-600">Jesus retruca afirmando que <em>"há júbilo diante dos anjos de Deus por um pecador que se arrepende"</em> (Lc 15:10). Se o Deus Altíssimo promove uma festa cósmica ao recuperar um pária, a face fechada e rancorosa da religião terrestre é, na verdade, uma rebelião contra o céu.</p>
        </div>
      </div>
    </div>
  );
};

const KezazahVisual = () => {
  const [step, setStep] = useState(0);
  const info = [
    { title: "A Ofensa Capital (Vergonha)", desc: "No antigo Oriente Médio, solicitar a divisão de bens com o patriarca saudável era declarar guerra emocional à família. Era o equivalente a gritar perante a vila: 'Pai, mal posso esperar pelo teu enterro!'." },
    { title: "O Ritual do Kezazah (A Ameaça)", desc: "Os judeus possuíam um rito extraoficial rigoroso. Se o rapaz esbanjou dinheiro judaico entre os gentios e retornasse, a vila estilhaçaria um grande vaso de barro aos seus pés na fronteira da cidade, banindo-o eternamente sob pedras." },
    { title: "A Corrida do Pai (O Esvaziamento)", desc: "O patriarca avista o filho e toma uma atitude impensável para a sua honra: ele levanta a túnica, expõe as pernas nuas e corre. Ele absorve a humilhação para si e alcança o rapaz antes da multidão, servindo de escudo humano contra o Kezazah." }
  ];
  return (
    <div className="bg-rose-50 rounded-2xl p-8 border border-rose-200 my-8">
      <h4 className="font-bold text-rose-900 text-2xl mb-6 flex items-center"><ScrollText className="mr-3 text-rose-500"/> PONTO 1: O Choque do Contexto Sociológico</h4>
      <div className="flex justify-between mb-8 gap-2">
        {info.map((_, i) => (
          <div key={i} className={`h-2 flex-1 rounded-full transition-all ${i <= step ? 'bg-rose-600' : 'bg-rose-200'}`}></div>
        ))}
      </div>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-rose-100 min-h-[150px] relative overflow-hidden">
        <h5 className="font-bold text-rose-800 text-xl mb-3">{info[step].title}</h5>
        <p className="text-slate-700 text-lg leading-relaxed">"{info[step].desc}"</p>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <p className="text-rose-900/60 font-bold text-xs uppercase tracking-widest">Exegese: Kenneth E. Bailey</p>
        <button onClick={() => setStep((step + 1) % 3)} className="bg-rose-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-rose-700 transition-colors flex items-center">Avançar Cenas <ChevronRight className="ml-2 w-4 h-4"/></button>
      </div>
    </div>
  );
};

const SymbolsOfGrace = () => {
  return (
    <div className="my-10">
      <h3 className="text-2xl font-bold mb-6 font-serif text-slate-900 border-b border-slate-200 pb-2">PONTO 3: A Restauração Tangível (Os Símbolos da Graça)</h3>
      <p className="text-lg text-slate-700 leading-relaxed mb-8">
        O arrependimento inicial do Pródigo era focado na barriga (fome) e a sua teologia era utilitarista ("trata-me como um dos teus diaristas"). Contudo, a graça de Deus atropela o plano meritocrático do homem. O Pai não aceita escravos na família; Ele investe o pecador de total honra através de quatro símbolos imediatos:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
          <Shirt className="w-10 h-10 mx-auto text-amber-500 mb-3" />
          <h4 className="font-bold text-slate-800">A Melhor Veste</h4>
          <p className="text-sm text-slate-500 mt-2">Cobre os andrajos e o odor do chiqueiro. É a imputação da justiça e honra de Cristo.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
          <Gem className="w-10 h-10 mx-auto text-amber-500 mb-3" />
          <h4 className="font-bold text-slate-800">O Anel no Dedo</h4>
          <p className="text-sm text-slate-500 mt-2">O anel de sinete (selo). Restaura a autoridade legal do rapaz em nome da família.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
          <Footprints className="w-10 h-10 mx-auto text-amber-500 mb-3" />
          <h4 className="font-bold text-slate-800">As Sandálias</h4>
          <p className="text-sm text-slate-500 mt-2">Dignidade. Escravos andavam descalços. Apenas os filhos andavam calçados em casa.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
          <Utensils className="w-10 h-10 mx-auto text-amber-500 mb-3" />
          <h4 className="font-bold text-slate-800">O Novilho Cevado</h4>
          <p className="text-sm text-slate-500 mt-2">A Reconciliação Comunitária. A aldeia inteira é convidada a aceitar o rapaz no banquete.</p>
        </div>
      </div>
    </div>
  );
};

const ThreePhilosophies = () => {
  return (
    <div className="my-10 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
      <div className="mb-6">
        <h3 className="text-2xl font-bold flex items-center text-slate-900 font-serif"><HandHeart className="mr-3 text-emerald-600"/> PONTO 2: As Três Filosofias Morais</h3>
        <p className="text-slate-600 mt-2"><strong>Hernandes Dias Lopes</strong> estrutura a parábola com base na ética de cada interveniente:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-t-4 border-red-500 rounded-xl p-6 shadow-sm">
          <Swords className="w-10 h-10 text-red-500 mb-4" />
          <h4 className="font-bold text-xl text-red-900 mb-2">Salteadores</h4>
          <p className="text-red-700 font-bold italic mb-3">"O que é teu é meu, eu o tomo!"</p>
          <p className="text-slate-600 text-sm leading-relaxed">A filosofia da <strong>Violência e Cobiça</strong>. O próximo é um objeto descartável a ser espoliado. Representa o sistema mundano.</p>
        </div>
        <div className="bg-white border-t-4 border-slate-400 rounded-xl p-6 shadow-sm">
          <ShieldX className="w-10 h-10 text-slate-400 mb-4" />
          <h4 className="font-bold text-xl text-slate-800 mb-2">Religiosos</h4>
          <p className="text-slate-500 font-bold italic mb-3">"O que é meu é meu, guardo-o!"</p>
          <p className="text-slate-600 text-sm leading-relaxed">A filosofia da <strong>Indiferença Pessoal</strong>. O sacerdote e o levita temiam a impureza. Valorizaram o conforto teológico acima da vida.</p>
        </div>
        <div className="bg-white border-t-4 border-emerald-500 rounded-xl p-6 shadow-sm">
          <HandHeart className="w-10 h-10 text-emerald-500 mb-4" />
          <h4 className="font-bold text-xl text-emerald-900 mb-2">Samaritano</h4>
          <p className="text-emerald-700 font-bold italic mb-3">"O que é meu é teu, partilho-o!"</p>
          <p className="text-slate-600 text-sm leading-relaxed">A filosofia da <strong>Graça Prática</strong>. O amor real quebra fronteiras raciais e assume os danos materiais para promover a vida.</p>
        </div>
      </div>
    </div>
  );
};

const TheCostOfCompassion = () => {
  return (
    <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl shadow-md relative overflow-hidden my-8">
      <h3 className="text-2xl font-bold mb-6 font-serif border-b border-slate-700 pb-4 text-emerald-400">PONTO 3: A Fatura do Amor (O Custo da Compaixão)</h3>
      <p className="text-lg text-slate-300 leading-relaxed mb-6">
        <strong>Craig Blomberg</strong> insiste que a parábola desromantiza o amor cristão. O amor de Jesus não é poético; é caro, cirúrgico e exige sacrifício de bens materiais. O Samaritano assinou a fatura inteira da restauração:
      </p>
      <div className="space-y-4">
        <div className="bg-slate-800 p-5 rounded-xl flex items-start">
          <span className="bg-emerald-500 text-emerald-950 font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1">1</span>
          <div>
            <strong className="block text-lg text-emerald-300">Custos Médicos Iniciais</strong>
            <span className="text-slate-300 text-base">Ele cede as ataduras e aplica os seus medicamentos valiosos de viagem: <strong>Vinho</strong> (como antisséptico) e <strong>Óleo</strong> (como bálsamo analgésico).</span>
          </div>
        </div>
        <div className="bg-slate-800 p-5 rounded-xl flex items-start">
          <span className="bg-emerald-500 text-emerald-950 font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1">2</span>
          <div>
            <strong className="block text-lg text-emerald-300">Risco Físico e Esforço</strong>
            <span className="text-slate-300 text-base">Ele desce do animal, coloca o homem sangrento sobre a própria cavalgadura e faz o resto da "Passagem Sangrenta" a pé, lento e vulnerável aos mesmos assaltantes.</span>
          </div>
        </div>
        <div className="bg-slate-800 p-5 rounded-xl flex items-start">
          <span className="bg-emerald-500 text-emerald-950 font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1">3</span>
          <div>
            <strong className="block text-lg text-emerald-300">A Conta Financeira Aberta</strong>
            <span className="text-slate-300 text-base">Ele entrega dois denários ao estalajadeiro (equivalente a 24 dias de alojamento da época) e promete: <em>"Gasta o que for preciso, eu te pagarei na volta"</em>. O amor cristão garante a restauração.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- ESTRUTURA DOS DADOS DO MÓDULO 3 --- //

export const mod3 = {
  id: "mod3",
  titulo: "Módulo 3: Graça, Perdão e Misericórdia",
  descricao: "A Ovelha, a Dracma, o Pródigo e o Samaritano",
  intro: {
    title: "Abertura do Módulo: O Coração do Pai",
    content: (
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          Bem-vindo ao <strong>Módulo 3</strong> da nossa formação teológica. Se no módulo anterior fomos assombrados pelo crescimento do Reino de Deus, agora penetramos no Santo dos Santos do ensino de Jesus: o Seu caráter relacional e o abismo escandaloso da graça.
        </p>
        <p>
          Este módulo (com aulas expandidas para 60 minutos de exposição ininterrupta) lida com as tensões mais profundas da existência humana: o orgulho farisaico, a rebelião destrutiva de um filho e o ódio racial institucionalizado. Em todas estas fraturas da vida, Jesus não oferece à Sua Igreja um manual de ética fria; Ele destrói o mito de que a salvação tem origem na retidão cerimonial humana.
        </p>
        <p>
          Aprofundando os estudos de Kistemaker, Bailey, Blomberg e MacArthur, seremos desafiados a amar como fomos amados e perdoar como fomos perdoados.
        </p>
        <p className="font-bold text-indigo-900 mt-6 text-xl">
          As narrativas de resgate que estudaremos:
        </p>
        <ul className="list-none space-y-4 mt-4">
          <li className="flex items-start">
            <CheckCircle2 className="w-6 h-6 mr-3 text-indigo-500 flex-shrink-0 mt-0.5"/>
            <span><strong>Aula 7: A Alegria de Deus.</strong> A Ovelha e a Dracma Perdida revelarão um Deus que toma a iniciativa, assume o fardo da busca e exige que o céu e a terra celebrem o resgate.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-6 h-6 mr-3 text-indigo-500 flex-shrink-0 mt-0.5"/>
            <span><strong>Aula 8: O Escândalo da Graça.</strong> A história do Filho Pródigo desmascara tanto a devassidão quanto a justiça própria, apresentando um Pai que se humilha para salvar ambos.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-6 h-6 mr-3 text-indigo-500 flex-shrink-0 mt-0.5"/>
            <span><strong>Aula 9: Amor Sem Fronteiras.</strong> O Bom Samaritano descontrói o racismo religioso e ensina que o verdadeiro amor ao próximo arrisca, suja as mãos e paga o preço da restauração.</span>
          </li>
        </ul>
      </div>
    )
  },
  outro: {
    title: "Fechamento do Módulo: O Desafio da Compaixão",
    mensagemFinal: "A graça não é apenas apontar a direção certa ao caído; é o próprio Deus assumindo o fardo exaustivo de carregar o pecador de volta para casa.",
    content: (
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          Finalizamos o Módulo 3. A teologia destas parábolas destrói impiedosamente qualquer presunção de justiça própria. Ninguém que tenha prestado atenção exegética pode ler estas histórias de Lucas 15 e 10 e permanecer confortável na sua religiosidade mecânica.
        </p>
        
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-8">
          <h4 className="font-bold text-xl text-slate-800 mb-6 border-b border-slate-300 pb-2">Síntese Pastoral Exegética:</h4>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 font-bold px-3 py-1 rounded-lg text-sm mr-4 mt-0.5">Aula 7</span>
              <div>
                <strong className="text-slate-900 block mb-1">A Iniciativa Divina</strong>
                Deus é quem busca incansavelmente. Ao contrário das religiões humanas, Ele assume o fardo pesado da nossa restauração para glória do Seu próprio nome.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-lg text-sm mr-4 mt-0.5">Aula 8</span>
              <div>
                <strong className="text-slate-900 block mb-1">A Extravagância do Amor</strong>
                O Pai humilha-se para salvar o libertino através de símbolos reais de adoção, enquanto o moralista ressente-se da festa e prefere as trevas da justiça própria.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-lg text-sm mr-4 mt-0.5">Aula 9</span>
              <div>
                <strong className="text-slate-900 block mb-1">A Fatura Prática do Amor</strong>
                A pergunta não é "Quem merece o meu amor?". O discípulo verdadeiro recusa a omissão litúrgica e opta pela ética onerosa (financeiramente e fisicamente) do Samaritano.
              </div>
            </li>
          </ul>
        </div>
        
        <p>
          Com as barreiras do moralismo destruídas e cientes do custo astronômico perdoado na Cruz, a turma está plenamente madura para adentrar o <strong>Módulo 4 (O Módulo Final)</strong>: Onde a Graça torna-se Vida Prática, Dinheiro, Oração e Vigilância.
        </p>

        {/* BIBLIOGRAFIA REINSERIDA AQUI! */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif flex items-center">
            <Library className="w-6 h-6 mr-3 text-indigo-600"/>
            Autores e Obras Base Utilizadas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5"/>
              <div><span className="font-bold text-slate-800">Hernandes Dias Lopes</span><br/><span className="italic text-slate-500 text-sm">As Parábolas de Jesus: Desvendando a riqueza espiritual das palavras do Filho de Deus</span></div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5"/>
              <div><span className="font-bold text-slate-800">John MacArthur</span><br/><span className="italic text-slate-500 text-sm">As Parábolas de Jesus: Os mistérios do reino de Deus revelados nas histórias contadas pelo Salvador</span></div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5"/>
              <div><span className="font-bold text-slate-800">Simon J. Kistemaker</span><br/><span className="italic text-slate-500 text-sm">As parábolas de Jesus: Uma Análise exegética e prática dos ensinos de Cristo</span></div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5"/>
              <div><span className="font-bold text-slate-800">Kenneth E. Bailey</span><br/><span className="italic text-slate-500 text-sm">As parábolas de Lucas: Uma análise literária-cultural das parábolas em Lucas</span></div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5"/>
              <div><span className="font-bold text-slate-800">Kenneth E. Bailey</span><br/><span className="italic text-slate-500 text-sm">Jesus pela ótica do Oriente Médio: Estudos culturais sobre os Evangelhos</span></div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5"/>
              <div><span className="font-bold text-slate-800">Craig L. Blomberg</span><br/><span className="italic text-slate-500 text-sm">Pregando as parábolas: Da interpretação responsável à proclamação poderosa</span></div>
            </div>
          </div>
        </div>

      </div>
    )
  },
  aulas: [
    {
      id: 7,
      title: "A Alegria de Deus ao Recuperar o Perdido",
      icon: <Sparkles className="w-5 h-5" />,
      objective: "Analisar as parábolas da Ovelha e da Dracma para compreender a busca ativa do Criador e a resposta correta de exultação da Igreja perante o resgate.",
      content: (
        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Jesus profere o capítulo 15 de Lucas em resposta ao escárnio dos fariseus e escribas que O censuravam abertamente. Para a ortodoxia daquela época, Deus acolheria o pecador apenas se este se purificasse rigorosamente pelas suas próprias obras antes de se apresentar.
          </p>

          <LostDynamics />

          <MurmuringVsJoy />

          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">
             PONTO 3: A Celebração Comunitária
          </h3>
          <p>
            Tanto o pastor (Lucas 15:6) quanto a mulher (Lucas 15:9) não festejam de portas trancadas. O ato culminante de ambas as parábolas é idêntico: <em>"Reuni as amigas e vizinhas e alegrai-vos comigo!"</em>. 
          </p>
          <p>
            O perdão de Deus não produz um crente secreto. A salvação de um pecador não é um evento meramente psicológico isolado; é um evento cósmico que mobiliza o céu (os anjos de Deus regozijam-se) e exige que a comunidade terrena (a Igreja) promova o banquete e se alegre com o mesmo calor que o Pai.
          </p>

          <div className="bg-indigo-900 text-white p-8 rounded-2xl mt-10">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-indigo-200">Síntese da Aula 7</h3>
            <p className="text-indigo-50 text-lg font-bold">
              O Evangelho reescreve a salvação. Não é o homem buscando a Deus através de regras; é Deus investindo recursos divinos, sujando-Se e exaurindo-Se para carregar nos ombros aquele que a religião rejeitou.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "O Escândalo da Graça (Os Dois Filhos)",
      icon: <Users className="w-5 h-5" />,
      objective: "Decodificar o Filho Pródigo, expondo a perdição evidente do libertino, a perdição cega do religioso legalista, e a imensa condescendência amorosa do Pai.",
      content: (
        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Na leitura comum, admiramos o pecador sujo que pede desculpas. Mas a tragédia, como ensina Kenneth Bailey, é que a parábola é um espelho. Ela não mostra a história de um filho que fugiu, mas a radiografia de dois filhos que nunca entenderam o amor do seu próprio pai.
          </p>

          <KezazahVisual />

          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">
             PONTO 2: A Perdição do Irmão Moralista
          </h3>
          <p>
            <strong>John MacArthur</strong> reforça enfaticamente que a história atinge o seu clímax letal na reação do filho que "ficou em casa". Ele estava no curral, observando a lei, mas a sua teologia era de escravo: <em>"Sirvo-te como um escravo há tantos anos... e nunca me deste nem um cabrito"</em>.
          </p>
          <p>
            Ele não servia o pai por amor. Ele servia para cobrar a herança e o salário no final. Ofendido pela graça concedida ao irmão fracassado, ele envergonha a família ao recusar-se a entrar no banquete na frente de todos os convidados ilustres. A ironia de Lucas 15 é arrepiante: o "pecador imoral" aceita o amor e acaba sentado no banquete de Deus, enquanto o "homem de moral inatacável" recusa-se a entrar, acabando nas trevas da sua própria solidão punitiva.
          </p>

          <SymbolsOfGrace />

          <div className="bg-indigo-900 text-white p-8 rounded-2xl mt-10">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-indigo-200">Síntese da Aula 8</h3>
            <p className="text-indigo-50 text-lg font-bold">
              O coração de Deus humilha-Se para perdoar tanto quem transgride as regras com paixão mundana quanto quem usa o rigor das regras para encobrir o orgulho gélido e a ausência de amor ao próximo.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Amor ao Próximo sem Fronteiras",
      icon: <HeartHandshake className="w-5 h-5" />,
      objective: "Analisar o Bom Samaritano como o fim das teologias excludentes. O amor bíblico quebra tradições puritanas e materializa-se numa compaixão curativa de alto custo.",
      content: (
        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            A parábola do Bom Samaritano é uma reação ao doutor da Lei que desejava saber "o limite da misericórdia". Para a ortodoxia da época, "meu próximo" era unicamente o fariseu justo e temente. Os gentios, soldados romanos, cobradores de impostos e, principalmente, os samaritanos hereges não passavam de lixo moral.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">
             PONTO 1: O Perigo da Pureza Ritual
          </h3>
          <p>
            <strong>Craig Blomberg</strong> contextualiza o porquê do Sacerdote e do Levita terem mudado para o "outro lado da estrada". Não foi maldade gratuita, foi religiosidade. Tocar num corpo sem vida os enquadraria na profanação ritual de Levítico 21, forçando-os a um custoso processo de purificação e impedindo o clero de recolher ofertas. Eles valorizaram a <strong>Liturgia do Templo</strong> acima da <strong>Vida que jazia na vala</strong>.
          </p>

          <ThreePhilosophies />

          <TheCostOfCompassion />

          <div className="bg-indigo-900 text-white p-8 rounded-2xl mt-10">
             <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-indigo-200">Síntese da Aula 9</h3>
             <p className="text-indigo-50 text-lg font-bold">
               Jesus vira o raciocínio teológico de cabeça para baixo. A pergunta do Mestre não é teórica ("Quem merece ser tratado como o meu próximo?"), mas inteiramente existencial: <em>"De quem VOCÊ decidirá fazer-se próximo hoje, suportando as consequências?"</em>.
             </p>
          </div>
        </div>
      )
    }
  ]
};