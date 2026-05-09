// src/content/mod1.jsx
import React, { useState } from 'react';
import { BookOpen, Globe2, Scale, ChevronRight, ChevronDown, BookMarked, AlertTriangle, Library, CheckCircle2, Eye, EyeOff, User } from 'lucide-react';

// --- COMPONENTES INTERATIVOS ESPECÍFICOS DO MÓDULO 1 ---
const PurposeToggle = () => {
  const [view, setView] = useState('revelar');
  return (
    <div className="bg-indigo-50 rounded-2xl border border-indigo-100 overflow-hidden my-8">
      <div className="flex bg-indigo-100/50 p-2">
        <button onClick={() => setView('revelar')} className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center transition-all ${view === 'revelar' ? 'bg-white text-indigo-700 shadow-sm' : 'text-indigo-400 hover:bg-indigo-100'}`}>
          <Eye className="w-5 h-5 mr-2" /> Corações Sinceros
        </button>
        <button onClick={() => setView('ocultar')} className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center transition-all ${view === 'ocultar' ? 'bg-slate-800 text-white shadow-sm' : 'text-indigo-400 hover:bg-indigo-100'}`}>
          <EyeOff className="w-5 h-5 mr-2" /> Corações Resistentes
        </button>
      </div>
      <div className="p-8">
        <div className={`${view === 'revelar' ? 'block animate-in fade-in' : 'hidden'}`}>
          <p className="text-indigo-900 font-bold mb-2 text-xl">A. Revelar (Misericórdia aos Sinceros):</p>
          <p className="text-slate-700 text-lg leading-relaxed">Para os corações genuinamente arrependidos, a parábola age como uma janela iluminada. Jesus traduz os complexos "mistérios do Reino dos Céus" em imagens indeléveis (sementes, redes, ovelhas). Uma vez que a chave da parábola é entregue ao discípulo, a sua mente jamais esquecerá a lição teológica ancorada no quotidiano.</p>
        </div>
        <div className={`${view === 'ocultar' ? 'block animate-in fade-in' : 'hidden'}`}>
          <p className="text-slate-800 font-bold mb-2 text-xl">B. Ocultar (Juízo aos Rebeldes):</p>
          <p className="text-slate-700 text-lg leading-relaxed">Para os fariseus e as multidões cínicas que O rejeitaram abertamente, a parábola torna-se um enigma impenetrável. Cumpre-se a profecia de Isaías 6 ("vendo não vejam"). Segundo MacArthur, isto é um ato de juízo divino. Contudo, há uma <strong>graça oculta neste juízo</strong>: ao retirar a luz direta e clara, Jesus impede que estes corações rebeldes acumulem ainda mais condenação no Dia do Juízo por rejeitarem verdades teológicas declaradas de forma literal.</p>
        </div>
      </div>
    </div>
  );
};

const BlombergRule = () => {
  const [activeChar, setActiveChar] = useState(0);
  const chars = [
    { name: "A Figura de Autoridade", icon: <Scale className="w-6 h-6"/>, desc: "Revela o caráter teocêntrico da história. Exemplo: O Pai em Lucas 15 revela um Deus que suporta a vergonha pública para buscar os dois filhos, demonstrando que a salvação é inteiramente pela graça e iniciativa divina." },
    { name: "O Subordinado Restaurado", icon: <User className="w-6 h-6"/>, desc: "É a figura improvável, o pecador ou marginalizado que recebe graça e age corretamente, surpreendendo a audiência. Exemplo: O Filho Pródigo ou o Bom Samaritano. Ensina sobre a natureza do arrependimento verdadeiro e a quebra de preconceitos." },
    { name: "O Subordinado Fracassado", icon: <AlertTriangle className="w-6 h-6"/>, desc: "Aquele que aparenta estar bem e dentro da lei, mas falha gravemente. Exemplo: O Irmão Mais Velho, ou o Sacerdote/Levita. É o espelho apontado para a nossa religiosidade, denunciando que estar \"perto de casa\" sem o coração do Pai é tão letal quanto estar no chiqueiro." }
  ];
  return (
    <div className="border border-emerald-200 rounded-2xl overflow-hidden my-8 bg-white">
      <div className="bg-emerald-50 p-6 border-b border-emerald-100">
        <h4 className="font-bold text-emerald-900 flex items-center text-xl">
          <BookMarked className="w-6 h-6 mr-3" /> A Estrutura dos 3 Personagens (C. Blomberg)
        </h4>
        <p className="text-md text-emerald-800 mt-2">Selecione o personagem abaixo para ver a sua aplicação hermenêutica central:</p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-slate-50 p-4 flex flex-col gap-3 border-r border-slate-100">
          {chars.map((c, i) => (
            <button key={i} onClick={() => setActiveChar(i)} className={`p-4 rounded-xl text-left text-sm font-bold flex items-center transition-all ${activeChar === i ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-200'}`}>
              <span className="mr-3 opacity-80">{c.icon}</span> {c.name.split('(')[0]}
            </button>
          ))}
        </div>
        <div className="md:w-2/3 p-8">
          {chars.map((c, i) => (
            <div key={i} className={`${activeChar === i ? 'block animate-in fade-in' : 'hidden'}`}>
              <h5 className="font-bold text-2xl text-emerald-800 mb-4 flex items-center"><span className="mr-3">{c.icon}</span> {c.name}</h5>
              <p className="text-slate-700 text-lg leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CulturalComparison = () => {
  const [culture, setCulture] = useState('west');
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-amber-200 overflow-hidden my-10">
      <div className="bg-amber-100 p-6 text-center">
        <h4 className="font-bold text-amber-900 uppercase tracking-widest text-sm mb-4">Selecione a sua Lente de Leitura Cultural</h4>
        <div className="inline-flex bg-white p-1 rounded-full shadow-sm w-full sm:w-auto overflow-x-auto">
          <button onClick={() => setCulture('west')} className={`px-8 py-3 rounded-full text-md font-bold whitespace-nowrap transition-all ${culture === 'west' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-800'}`}>Mente Ocidental (Séc. XXI)</button>
          <button onClick={() => setCulture('east')} className={`px-8 py-3 rounded-full text-md font-bold whitespace-nowrap transition-all ${culture === 'east' ? 'bg-amber-600 text-white' : 'text-slate-500 hover:text-amber-700'}`}>Mente Camponesa (Séc. I)</button>
        </div>
      </div>
      <div className="p-8 md:p-10">
        <div className={`${culture === 'west' ? 'block animate-in zoom-in-95' : 'hidden'}`}>
          <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-slate-400">
            <h4 className="font-bold text-slate-800 mb-4 uppercase text-sm tracking-widest">A Nossa Visão Legalista: Certo vs. Errado</h4>
            <p className="text-slate-700 text-lg leading-relaxed">No Ocidente, o eixo motivacional que governa a sociedade é a <strong>Culpa vs. Inocência</strong>. Quando lemos a atitude do filho mais novo pedindo a herança, enxergamos isso primariamente como uma má decisão financeira, fruto da impetuosidade e da falta de juízo de um jovem rebelde que desejava independência e autonomia longe das regras paternas. Ele faliu, sentiu culpa individual, e decidiu voltar para pedir desculpas. A história é interpretada de forma individualista e financeira.</p>
          </div>
        </div>
        <div className={`${culture === 'east' ? 'block animate-in zoom-in-95' : 'hidden'}`}>
          <div className="bg-amber-50 p-8 rounded-xl border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-900 mb-4 uppercase text-sm tracking-widest">A Visão de Bailey: Honra vs. Vergonha</h4>
            <p className="text-amber-800 text-lg leading-relaxed mb-4">Nas aldeias do Oriente Médio bíblico, a bússola da comunidade é a <strong>Honra vs. Vergonha</strong>. A imagem da família perante a aldeia é mais valiosa que a vida. Segundo <strong>Kenneth Bailey</strong>, pedir a herança com o pai vivo e saudável num vilarejo judaico do primeiro século era o equivalente exato e brutal a gritar-lhe no rosto: <strong>"Pai, eu não posso esperar que tu morras. Eu desejo que estivesses morto agora!"</strong>.</p>
            <p className="text-amber-800 text-lg leading-relaxed">Foi a ofensa pública suprema. Os ouvintes originais de Jesus (os fariseus) teriam ficado em choque apenas com o início da história. A expectativa cultural exigia que o pai restaurasse a sua honra espancando o filho e expulsando-o da aldeia imediatamente. O escândalo da graça não começa no regresso do pródigo, mas no momento em que o pai cede, reparte os bens e suporta uma vergonha incalculável perante os seus vizinhos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const NataAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden mt-8">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full bg-slate-50 p-6 flex items-center justify-between font-bold text-slate-800 hover:bg-slate-100 transition-colors">
        <span className="flex items-center text-xl"><Library className="w-6 h-6 mr-4 text-indigo-600"/> O Exemplo Clássico: Natã e Davi (2 Sm 12)</span>
        {isOpen ? <ChevronDown className="w-6 h-6 text-indigo-600" /> : <ChevronRight className="w-6 h-6 text-indigo-600" />}
      </button>
      <div className={`p-8 bg-white ${isOpen ? 'block' : 'hidden'}`}>
        <p className="text-xl text-slate-700 leading-relaxed mb-4">O Rei Davi havia cometido adultério e homicídio. O seu coração estava blindado pela arrogância do poder. Se o profeta Natã entrasse no palácio acusando-o abertamente, provavelmente seria morto. Em vez disso, Natã atua como um contador de parábolas: ele narra a história de um homem rico que rouba a única ovelhinha de um homem pobre.</p>
        <p className="text-xl text-slate-700 leading-relaxed">Davi baixa a guarda e a sua justiça inflama-se. Ele julga o personagem: <em>"Esse homem merece a morte!"</em>. Nesse instante exato, Natã abre o "Cavalo de Troia" e dispara a verdade no espírito do rei: <strong>"Esse homem és tu!"</strong>. Davi é quebrado pelo seu próprio julgamento. As parábolas de Jesus operam com esta mesma precisão cirúrgica contra a nossa hipocrisia.</p>
      </div>
    </div>
  );
};

// --- ESTRUTURA DOS DADOS DO MÓDULO ---
export const mod1 = {
  id: "mod1",
  titulo: "Módulo 1: Fundamentos das Parábolas",
  descricao: "Abertura, Hermenêutica e Paradigma Cultural",
  intro: {
    title: "Abertura do Módulo: Calibrando as Lentes",
    content: (
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>Bem-vindo ao Módulo 1 da nossa jornada pelas Parábolas de Jesus. Antes de mergulharmos nas histórias específicas de ovelhas perdidas, semeadores ou administradores infiéis, precisamos preparar o terreno. O nosso objetivo aqui não é ainda dissecar as parábolas em si, mas <strong>calibrar as nossas lentes de leitura</strong>.</p>
        <p>Muitas vezes, lemos as Escrituras com os "óculos errados". Lemos um texto oriental antigo com uma mente ocidental moderna; lemos uma advertência pastoral dura com lentes de contos infantis; ou lemos narrativas dinâmicas com lentes de alegorias místicas. Neste módulo, vamos estabelecer os alicerces.</p>
        <p>Ao longo destas três lições iniciais, seremos guiados por grandes eruditos (como MacArthur, Kistemaker, Blomberg e Bailey) para responder a três perguntas fundamentais que sustentarão todo o curso:</p>
        <ul className="list-disc pl-8 space-y-3 mt-4 text-slate-800 font-medium">
          <li><strong>Por que</strong> Jesus começou a falar por parábolas? (O propósito divino de revelar e ocultar).</li>
          <li><strong>Como</strong> devemos interpretar essas histórias? (A hermenêutica segura e a regra dos personagens).</li>
          <li><strong>Onde</strong> e para quem essas histórias foram contadas? (O contexto cultural de honra e vergonha).</li>
        </ul>
      </div>
    )
  },
  outro: {
    title: "Fechamento do Módulo: Alicerces Firmados",
    mensagemFinal: "A parábola não é um conto de fadas; é o bisturi de Cristo que separa os orgulhosos dos humildes e revela a glória do Rei aos que têm fome de justiça.",
    content: (
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>Chegamos ao fim do nosso primeiro módulo. A fundação está lançada. Através desta jornada inicial, desconstruímos a ideia simplista de que as parábolas são apenas ilustrações fáceis para camponeses ou histórias infantis.</p>
        <ul className="list-none space-y-6 my-8">
          <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-4 flex-shrink-0 mt-1 text-emerald-600" /><span>Na <strong>Aula 1</strong>, compreendemos o peso teológico do método parabólico: ele é o bisturi de Deus que revela os mistérios do Reino aos corações contritos e, simultaneamente, atua como um "Cavalo de Troia" para derrubar as defesas da nossa religiosidade.</span></li>
          <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-4 flex-shrink-0 mt-1 text-emerald-600" /><span>Na <strong>Aula 2</strong>, vacinamo-nos contra o erro milenar da hiper-alegorização. Aprendemos a usar a regra de Blomberg, procurando a ideia teológica central em cada um dos personagens principais da narrativa, garantindo fidelidade à intenção de Cristo.</span></li>
          <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-4 flex-shrink-0 mt-1 text-emerald-600" /><span>Na <strong>Aula 3</strong>, fomos transportados para as aldeias do Oriente Médio do 1º século por Kenneth Bailey. Vimos que sem entender a dinâmica feroz de <em>Honra vs. Vergonha</em> e rituais como o <em>Kezazah</em>, o escândalo da graça do Pai perde a sua glória profunda.</span></li>
        </ul>
        <p>Com as nossas lentes hermenêuticas e culturais agora perfeitamente calibradas, estamos prontos para avançar para o <strong>Módulo 2</strong>, onde exploraremos a Dinâmica de Crescimento e o Valor Inestimável do Reino de Deus.</p>

        {/* SUA NOVA SEÇÃO DE BIBLIOGRAFIA */}
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
                <span className="italic text-slate-500 text-sm">As parábolas de Lucas: Uma análise literária-cultural das parábolas em Lucas</span>
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
      id: 1,
      title: "A Natureza das Parábolas",
      icon: <BookOpen className="w-5 h-5" />,
      objective: "Compreender a viragem teológica no ministério de Jesus a partir de Mateus 13 e a função da parábola como instrumento de revelação, juízo e confronto pastoral.",
      content: (
        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>As parábolas de Jesus formam cerca de um terço de todo o Seu ensinamento registado nos Evangelhos Sinóticos. O imaginário popular foi condicionado a acreditar que uma parábola é apenas uma "ilustração terrena com um significado celestial" — uma historinha criada para simplificar a doutrina e facilitar a compreensão de camponeses iletrados. No entanto, uma análise exegética cuidadosa revela que a adoção deste método por Jesus foi um ato teológico profundo, calculado e revolucionário.</p>
          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">1. A Grande Viragem de Mateus 13</h3>
          <p>Como salienta <strong>John MacArthur</strong>, para compreendermos as parábolas, não podemos isolá-las do seu contexto cronológico. Até ao capítulo 12 de Mateus, o ensino de Cristo era predominantemente direto e proposicional. No Sermão do Monte, Ele dizia abertamente: "Bem-aventurados os pobres de espírito; Amai os vossos inimigos". O significado era inegável.</p>
          <p>Contudo, em Mateus 12, ocorre o ponto de rutura oficial de Israel. Os líderes religiosos (fariseus), testemunhando os milagres inegáveis de Jesus, cometem o pecado imperdoável: atribuem a obra e o poder do Espírito Santo a Belzebu. Esta rejeição maligna da luz traz uma consequência imediata. No capítulo seguinte (Mateus 13), Jesus sai de casa, senta-se à beira-mar e começa a falar às multidões <em>exclusivamente</em> por parábolas. Os discípulos, chocados com a mudança repentina de método, perguntam: <em>"Por que lhes falas por parábolas?"</em>. A resposta de Cristo aponta para um propósito paradoxal:</p>
          
          <PurposeToggle />
          
          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">2. O Mashal e o "Cavalo de Troia" Pastoral</h3>
          <p>A palavra grega <em>parabolé</em> traduz o termo hebraico <em>mashal</em>. Como explica <strong>Simon J. Kistemaker</strong>, o <em>mashal</em> é uma categoria literária vasta que engloba provérbios, enigmas e ditos obscuros. O seu objetivo não é entreter, mas forçar a mente a trabalhar e o coração a tomar uma decisão.</p>
          <p>Na vertente homilética, <strong>Hernandes Dias Lopes</strong> descreve as parábolas como armas argumentativas imbatíveis. Quando um pregador confronta o pecado diretamente, o ouvinte ergue instintivamente os seus escudos de defesa moral. Mas quando ouve uma história, ele baixa as guardas, entra na narrativa de forma passiva e julga os personagens. Quando percebe a lição, a verdade já transpôs as muralhas do seu coração.</p>

          <NataAccordion />

          <div className="bg-indigo-900 text-white p-8 rounded-2xl mt-10">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-indigo-200">Conclusão da Aula 1</h3>
            <p className="text-indigo-50 text-lg font-bold">A parábola, portanto, não é um conto de fadas. Ela é o bisturi de Cristo que separa os orgulhosos dos humildes. Ela esconde a glória do Rei dos corações endurecidos, ao mesmo tempo que a revela em cores vibrantes para aqueles que têm fome e sede de justiça.</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Hermenêutica: A Arte e os Perigos da Interpretação",
      icon: <Scale className="w-5 h-5" />,
      objective: "Identificar o perigo da hiper-alegorização histórica e aplicar o método exegético responsável para a pregação fiel do texto.",
      content: (
        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>Estabelecido o que são as parábolas e por que Jesus as proferiu, deparamo-nos com o maior desafio pastoral: <em>Como extrair o seu verdadeiro significado hoje?</em> As parábolas contêm ilustrações tão ricas e visuais que a tentação do leitor é colocar na boca de Jesus teologias que Ele jamais tencionou comunicar naqueles discursos.</p>
          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">1. O Pêndulo Histórico: O Risco da Alegoria Extrema</h3>
          <p>Durante os primeiros mil e novecentos anos de história da Igreja, o método prevalecente de interpretação foi a <strong>Alegoria</strong>. A alegoria assume que a parábola é um espelho místico, um grande código secreto onde cada pormenor menor (uma cor, uma árvore, um animal, uma moeda) representa verdades doutrinárias profundas, desligadas do contexto histórico.</p>

          <div className="bg-red-50 border border-red-100 p-8 rounded-2xl my-8">
            <h4 className="font-bold flex items-center mb-4 text-xl text-red-900">
              <AlertTriangle className="w-6 h-6 mr-3 text-red-700"/> O Estudo de Caso de Agostinho (O Bom Samaritano)
            </h4>
            <p className="mb-4 text-red-800">Agostinho de Hipona, um dos maiores teólogos do Cristianismo, aplicou este método à Parábola do Bom Samaritano com resultados que, embora corretos na doutrina cristã geral, são hermeneuticamente desastrosos quanto ao texto de Lucas 10. Ele pregou que:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-red-900">
              <li>O homem descendo a Jericó representa <strong>Adão</strong> caindo em pecado.</li>
              <li>Jerusalém é a <strong>cidade celestial</strong>, e Jericó é a <strong>mortalidade</strong>.</li>
              <li>Os ladrões são o <strong>Diabo e os demônios</strong>.</li>
              <li>O Sacerdote e o Levita representam a ineficácia da <strong>Lei e do Antigo Testamento</strong>.</li>
              <li>O Bom Samaritano é o próprio <strong>Senhor Jesus Cristo</strong>.</li>
              <li>A estalagem representa a <strong>Igreja</strong>, e o estalajadeiro é o <strong>Apóstolo Paulo</strong>.</li>
              <li>Os dois denários são os <strong>dois grandes mandamentos</strong> (ou os dois testamentos).</li>
            </ul>
            <p className="font-bold text-red-950">O Perigo: Ao transformar a história numa tese cristológica e eclesiológica artificial, perde-se completamente o impacto escandaloso e anti-racista que Jesus estava a causar na audiência judaica ao colocar o seu maior inimigo étnico como herói moral. A intenção original de Cristo é devorada pela alegoria.</p>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">2. O Equilíbrio Atual: A Estrutura dos 3 Personagens</h3>
          <p>Hoje, eruditos evangélicos como <strong>Craig Blomberg</strong> corrigiram os extremos e trouxeram o equilíbrio hermenêutico. Blomberg demonstra que as parábolas de Jesus não devem ser hiper-alegorizadas nos detalhes mínimos. A sua proposta metodológica foca numa ideia central teológica atrelada a cada um dos personagens principais da história:</p>
          
          <BlombergRule />
          
          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">3. As Leis de Ouro Complementares</h3>
          <p>Junto com a regra estrutural de Blomberg, <strong>MacArthur</strong> e <strong>Kistemaker</strong> relembram duas balizas cruciais:</p>
          <ul className="list-disc pl-8 space-y-3 mt-4 text-slate-800">
            <li><strong>A Supremacia do Contexto (Sitz im Leben):</strong> Qual é o enquadramento em que Jesus a contou? A parábola da ovelha perdida (Lc 15) só existe porque, no versículo 2, "os fariseus murmuravam porque Ele comia com pecadores".</li>
            <li><strong>A Regra do Golpe Final (End-Stress):</strong> Na oratória semítica, o ponto principal e o choque ficam sempre reservados para o final. O mais importante não é a viagem do pródigo, mas a reação do irmão mais velho na porta da casa de festa.</li>
          </ul>

          <div className="bg-indigo-900 text-white p-8 rounded-2xl mt-10">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-indigo-200">Conclusão da Aula 2</h3>
            <p className="text-indigo-50 text-lg font-bold">Interpretar uma parábola exige submissão à intenção original de Cristo. Ao abandonar as alegorias fantasiosas e adotar a regra dos personagens centrais guiados estritamente pelo contexto, garantimos que o texto continuará a pregar a graça escandalosa e a expor a religiosidade fria.</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "O Paradigma Cultural do Oriente Médio",
      icon: <Globe2 className="w-5 h-5" />,
      objective: "Decodificar as regras tácitas das aldeias camponesas do 1º século usando o trabalho antropológico de Kenneth Bailey para desvendar a profundidade da graça.",
      content: (
        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>A hermenêutica sozinha não basta se estivermos a ler a Bíblia através do nosso tempo e espaço geográfico. O maior inimigo na interpretação das parábolas é o <em>anacronismo cultural</em>: tentar ler histórias contadas para camponeses judeus do século I a partir da perspetiva da lógica, do individualismo, do direito e do conforto do século XXI ocidental.</p>
          <p>É neste abismo literário que o trabalho magistral do Dr. <strong>Kenneth E. Bailey</strong> se torna a ferramenta definitiva. Bailey viveu e pesquisou durante quase quarenta anos em aldeias isoladas do Egito, do Líbano, da Síria e do Iraque. Ele provou que a dinâmica de vida das comunidades conservadoras do Oriente Médio permaneceu praticamente inalterada durante dois milênios. Elas não operam pelo eixo de "Culpa vs. Inocência" do Ocidente, mas pelo sistema implacável de <strong>Honra vs. Vergonha</strong>.</p>

          <CulturalComparison />

          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-2xl my-8">
            <h4 className="font-bold mb-3 text-xl text-amber-900">O Corte Comunitário (A Lei do Kezazah)</h4>
            <p className="text-amber-800">Bailey demonstra, a partir de costumes e literatura rabínica, que um judeu que perdesse a sua herança vivendo entre os gentios enfrentaria a ira da sua aldeia se regressasse. A comunidade executaria o <strong>Kezazah</strong> (literalmente, "o corte"). Se o rapaz se aproximasse, a vila atiraria um vaso grande de barro ao chão até o estilhaçar e gritaria: <em>"Assim como este vaso está quebrado, tu estás cortado do teu povo!"</em>. Ele seria banido e suportaria a vergonha para sempre. O jovem sabia que o <em>Kezazah</em> o esperava.</p>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">O Patriarca que Corre e Expõe a Vergonha</h3>
          <div className="bg-slate-50 border-l-4 border-slate-300 p-6 my-6 italic text-2xl font-serif text-slate-800">
            "Estando ele ainda longe, o seu pai o viu... e, correndo, o abraçou." (Lucas 15:20)
          </div>
          <p>Nós, no ocidente, lemos a corrida do pai apenas como saudade emocional. Contudo, a glória cultural é infinitamente mais profunda. Homens idosos, nobres e respeitados no Oriente Médio antigo usavam túnicas longas. Eles caminhavam com passo lento e digno. <strong>Um patriarca nunca, jamais corre em público</strong>, pois para correr, é necessário levantar as vestes, expor as pernas perante os seus pares e assumir uma desonra e humilhação extremas.</p>
          <p>Por que o pai correu? Porque quando avistou o filho a aproximar-se da vila, ele sabia que os vizinhos começariam a atirar pedras para o ritual do <em>Kezazah</em>. Num ato de sacrifício absurdo, o pai abdica da sua dignidade. Ele levanta a túnica, expõe-se à chacota do vilarejo e corre desesperadamente para chegar ao menino <em>antes</em> da aldeia.</p>
          <p>O abraço protetor antes do menino sequer confessar o pecado é o escudo do pai. Ao abraçá-lo publicamente com as vestes levantadas, o pai estava a gritar à comunidade: <strong>"Se quiserem apedrejar e envergonhar o rapaz, terão de atirar pedras e envergonhar a mim primeiro. Ele está sob a minha graça."</strong></p>

          <div className="bg-indigo-900 text-white p-8 rounded-2xl mt-10">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-indigo-200">Conclusão da Aula 3</h3>
            <p className="text-indigo-50 text-lg font-bold">Ao entender o contexto de Honra e Vergonha, as parábolas transformam-se da "moralidade simples" na mais profunda revelação da Teologia da Cruz. O Pai desceu, tomou sobre Si a nossa vergonha pública e o castigo da comunidade, assumindo a desonra para nos arrastar de volta para o banquete da Vida.</p>
          </div>
        </div>
      )
    }
  ]
};
