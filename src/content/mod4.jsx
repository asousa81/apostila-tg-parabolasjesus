// src/content/mod4.jsx
import React, { useState } from 'react';
import { 
  BookOpen, Globe2, Scale, ChevronRight, ChevronDown, BookMarked, 
  Lightbulb, AlertTriangle, Library, Map, CheckCircle2, 
  Coins, Wallet, Flame, Hourglass, ArrowDownToLine, Hand,
  Gavel, FileText, Lock, Users, ScrollText
} from 'lucide-react';

// --- COMPONENTES INTERATIVOS (MÓDULO 4) --- //

const WealthParadox = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-amber-200 rounded-2xl overflow-hidden mt-8 mb-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-amber-50 p-6 flex items-center justify-between font-bold text-amber-900 hover:bg-amber-100 transition-colors"
      >
        <span className="flex items-center text-xl"><Wallet className="w-6 h-6 mr-4 text-amber-600"/> O Paradoxo: O Rico Insensato vs. O Mordomo Infiel</span>
        {isOpen ? <ChevronDown className="w-6 h-6 text-amber-600" /> : <ChevronRight className="w-6 h-6 text-amber-600" />}
      </button>
      <div className={`p-8 bg-white border-t border-amber-100 ${isOpen ? 'block animate-in fade-in' : 'hidden'}`}>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          <strong>Craig Blomberg</strong> destaca que Jesus aproxima duas parábolas contrastantes em Lucas (capítulos 12 e 16) para nos dar a teologia completa sobre a gestão de recursos (mordomia).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h5 className="font-bold text-slate-800 text-lg mb-2">O Rico Insensato (O que fracassou)</h5>
            <p className="text-slate-600 text-sm leading-relaxed">
              O seu erro não foi a riqueza (que veio de uma boa colheita dada por Deus), mas o <strong>ateísmo prático e a cobiça isolada</strong>. Simon Kistemaker nota que no seu monólogo íntimo (Lc 12:17-19), as palavras "eu", "meu" e "minha" aparecem 11 vezes. Ele não agradece a Deus nem planeia ajudar os pobres. Ele acreditava que o tempo e os bens lhe pertenciam de forma absoluta. Morreu rico na terra e falido na eternidade.
            </p>
          </div>
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h5 className="font-bold text-amber-900 text-lg mb-2">O Mordomo Infiel (O que foi elogiado)</h5>
            <p className="text-amber-800 text-sm leading-relaxed">
              Considerada a parábola mais difícil de Cristo. O mestre não elogia a desonestidade do mordomo, mas a sua <strong>sagacidade escatológica</strong>. Sabendo que o seu tempo acabou e que seria demitido, ele agiu com urgência: usou o dinheiro no tempo presente para garantir amigos que o acolhessem no futuro. Ele entendeu que os recursos são temporários, mas os relacionamentos podem ser duradouros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StewardCommission = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-emerald-200 rounded-2xl overflow-hidden mt-8 mb-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-emerald-50 p-6 flex items-center justify-between font-bold text-emerald-900 hover:bg-emerald-100 transition-colors"
      >
        <span className="flex items-center text-xl"><ScrollText className="w-6 h-6 mr-4 text-emerald-600"/> Contexto Cultural: Como o Mordomo "Roubou" o Patrão?</span>
        {isOpen ? <ChevronDown className="w-6 h-6 text-emerald-600" /> : <ChevronRight className="w-6 h-6 text-emerald-600" />}
      </button>
      <div className={`p-8 bg-white border-t border-emerald-100 ${isOpen ? 'block animate-in fade-in' : 'hidden'}`}>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Como é que Jesus pode usar um gestor que adultera contratos como um exemplo para os "filhos da luz"? A pesquisa sociológica de <strong>Kenneth E. Bailey</strong> lança luz sobre o sistema financeiro do antigo Oriente Médio.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Naquela época, a Lei Judaica proibia a cobrança de juros (usura) entre judeus. Para contornar a lei, os credores e os seus mordomos embutiam os juros ou a "comissão do mordomo" diretamente no valor total do recibo, no momento do empréstimo em mercadorias (como azeite ou trigo).
        </p>
        <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-emerald-500 mb-4">
          <p className="text-slate-800 font-bold mb-2">A Astúcia do Mordomo:</p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Quando o mordomo chama os devedores para baixar as dívidas (de 100 barris para 50, etc.), ele <strong>não estava a roubar o capital principal do patrão</strong>. Ele estava, na verdade, a retirar os juros embutidos ilegais ou a sua própria comissão de corretagem. Ao fazer isso, o patrão não o podia punir sem admitir publicamente que cobrava juros ilegais! O patrão foi forçado a rir e a elogiar a esperteza do seu funcionário, que sacrificou o lucro pessoal imediato (que ele ia perder de qualquer forma pela demissão) para ganhar o favor eterno da comunidade de devedores.
          </p>
        </div>
        <p className="text-lg text-emerald-900 font-bold leading-relaxed">
          A Lição Pastoral de Cristo: <br/>
          <span className="font-normal text-slate-700">"Usem o dinheiro (a riqueza de origem injusta) não para acumular egoisticamente, mas sejam astutos: invistam na salvação e no auxílio aos outros, abrindo mão do lucro pessoal egoísta para fazer 'amigos' que vos receberão no Céu." (Lc 16:9).</span>
        </p>
      </div>
    </div>
  );
};

const JudgeDynamics = () => {
  const [active, setActive] = useState('juiz');
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden my-8 shadow-sm">
      <div className="flex flex-wrap bg-slate-50 p-2 border-b border-slate-200">
        <button 
          onClick={() => setActive('juiz')}
          className={`flex-1 py-3 px-2 rounded-xl font-bold text-sm flex items-center justify-center transition-all m-1
            ${active === 'juiz' ? `bg-red-600 text-white shadow-md` : `text-slate-500 hover:bg-slate-200`}`}
        >
          <Gavel className="w-5 h-5 mr-2"/> A Sociologia do Juiz Iníquo
        </button>
        <button 
          onClick={() => setActive('viuva')}
          className={`flex-1 py-3 px-2 rounded-xl font-bold text-sm flex items-center justify-center transition-all m-1
            ${active === 'viuva' ? `bg-indigo-600 text-white shadow-md` : `text-slate-500 hover:bg-slate-200`}`}
        >
          <Hand className="w-5 h-5 mr-2"/> A Arma da Viúva
        </button>
      </div>
      <div className="p-8 md:p-12">
        {active === 'juiz' ? (
          <div className="animate-in fade-in duration-300">
             <h4 className="text-2xl font-bold mb-4 text-red-900 font-serif">O Juiz Implacável</h4>
             <p className="text-slate-700 text-lg leading-relaxed mb-4">
               Jesus descreve este homem com duas características aterradoras: <em>"não temia a Deus e não respeitava o homem"</em> (Lucas 18:2). <strong>John MacArthur</strong> sublinha a importância sociológica disto. 
             </p>
             <p className="text-slate-700 text-lg leading-relaxed">
               Na cultura de Honra e Vergonha, um juiz rico poderia até não temer a Deus, mas o medo de ser envergonhado perante os seus pares controlava o seu comportamento. Este juiz, no entanto, era tão depravado que nem a opinião pública lhe importava. Ele era inalcançável por suborno e insensível à compaixão. Era o cenário de caso impossível para obter justiça terrena.
             </p>
          </div>
        ) : (
          <div className="animate-in fade-in duration-300">
             <h4 className="text-2xl font-bold mb-4 text-indigo-900 font-serif">A Importunação Feroz (Anaideia)</h4>
             <p className="text-slate-700 text-lg leading-relaxed mb-4">
               A viúva representava a classe mais vulnerável do século I. Sem marido para a defender no tribunal dominado por homens, e sem dinheiro para subornar o sistema corrupto. A sua única arma de pressão era o incomodo constante e público.
             </p>
             <p className="text-slate-700 text-lg leading-relaxed mb-4">
               O texto grego traz uma expressão gráfica hilariante: o juiz decide atendê-la para que ela não venha a <em>"romper a sua cabeça"</em> (hypōpiazē - literalmente, dar-lhe um olho negro) de tanto o cansar!
             </p>
             <div className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500 mt-6">
                <p className="font-bold text-indigo-900">A Teologia da Parábola (Argumento A Fortiori):</p>
                <p className="text-indigo-800 text-sm mt-2">
                  Deus não é comparado ao juiz; Ele é o <strong>contraste absoluto</strong> do juiz! A exegese é: Se um juiz maléfico, egoísta e corrupto acaba por ceder perante o clamor de uma pobre mulher sem qualquer relação consigo, "Não fará Deus justiça aos seus escolhidos, que a ele clamam dia e noite?" (Lc 18:7). A oração perseverante exercita a fé num Deus prontíssimo a responder, mesmo quando parece demorar.
                </p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

const PrayerPostures = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-300 rounded-2xl overflow-hidden mt-8 mb-8 shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-slate-50 p-6 flex items-center justify-between font-bold text-slate-800 hover:bg-slate-100 transition-colors"
      >
        <span className="flex items-center text-xl"><ArrowDownToLine className="w-6 h-6 mr-4 text-slate-600"/> O Fariseu, o Publicano e o Gesto do Luto</span>
        {isOpen ? <ChevronDown className="w-6 h-6 text-slate-600" /> : <ChevronRight className="w-6 h-6 text-slate-600" />}
      </button>
      <div className={`p-8 bg-white border-t border-slate-200 ${isOpen ? 'block animate-in fade-in' : 'hidden'}`}>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          <strong>Kenneth Bailey</strong> convida-nos a observar as posturas físicas em Lucas 18. O Fariseu vai para a frente do Templo. Ele ora "de si para si mesmo". Ele lista as suas obras de supererogação (jejuava duas vezes por semana, quando a Lei só exigia uma vez por ano). Ele não estava orando a Deus; ele estava auditando as suas próprias obras.
        </p>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-300 mb-6">
          <h5 className="font-bold text-slate-900 text-lg mb-2">A Angústia Física do Publicano</h5>
          <p className="text-slate-700 text-sm leading-relaxed">
            O Publicano (traidor e cobrador de impostos corrupto) fica "de longe". Ele não se acha digno de entrar no Pátio de Israel. O texto de Lucas regista que ele <strong>"batia no peito"</strong>. Na cultura do Médio Oriente, bater no peito não era um ato de contrição masculina; era a expressão de luto e desespero extremo das <em>mulheres</em> nos funerais. Para um homem esmurrar o próprio peito na praça pública do Templo, a agonia de saber que o seu pecado ofendia a Deus tinha de ser absolutamente dilacerante e ensurdecedora.
          </p>
        </div>
        <p className="text-lg text-slate-700 leading-relaxed font-bold">
          A Oração da Justificação (Hilasterion)
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          No grego, ele clama: <em>"Deus, tem misericórdia (hilasthēti - sê propício) de mim, o (único) pecador!"</em>. Ele pede que a expiação do templo seja aplicada à sua vida miserável. Jesus encerra com a mais monumental teologia da Salvação pela Graça dos Evangelhos: <strong>"Este desceu justificado [declarado legalmente inocente] para sua casa, e não o outro".</strong> Obras não salvam; a falência espiritual agarrada à graça, salva.
        </p>
      </div>
    </div>
  );
};

const TheTwoPrayers = () => {
  return (
    <div className="my-10 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
       <div className="bg-slate-50 p-6 border-b border-slate-200">
         <h4 className="font-bold text-slate-800 text-xl flex items-center"><Scale className="mr-3 text-slate-600"/> O Raio-X das Duas Orações</h4>
         <p className="text-sm text-slate-500 mt-1">Uma análise exegética de <strong>Simon Kistemaker</strong> das palavras proferidas no Templo (Lucas 18):</p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <div className="p-8">
             <h5 className="font-bold text-slate-900 text-xl mb-4">O Fariseu (34 palavras no original)</h5>
             <p className="text-slate-600 italic mb-6 border-l-4 border-slate-300 pl-4">"Ó Deus, graças te dou que não sou como os demais homens, roubadores, injustos e adúlteros, nem ainda como este publicano; jejuo duas vezes na semana e dou o dízimo de tudo quanto ganho."</p>
             <ul className="space-y-4 text-sm text-slate-700">
                <li><strong className="text-slate-900">A Religião do "Eu":</strong> O pronome na primeira pessoa domina o texto. Ele não pede nada a Deus, não confessa nada; ele apenas audita a sua própria excelência diante de Deus.</li>
                <li><strong className="text-slate-900">A Supererogação:</strong> A Lei de Moisés exigia jejum apenas no Dia da Expiação (Yom Kippur). Ele jejuava 104 vezes por ano. Ele acreditava que as suas obras "compravam" o favor de Deus (Mérito).</li>
                <li><strong className="text-slate-900">A Régua Torta:</strong> Em vez de medir a sua santidade pela glória de Deus, ele mediu-se pelos piores pecadores da sociedade.</li>
             </ul>
          </div>
          <div className="p-8 bg-indigo-50/40">
             <h5 className="font-bold text-indigo-900 text-xl mb-4">O Publicano (6 palavras no original)</h5>
             <p className="text-indigo-800 italic mb-6 border-l-4 border-indigo-400 pl-4">"Ó Deus, sê propício a mim, o pecador!"</p>
             <ul className="space-y-4 text-sm text-slate-700">
                <li><strong className="text-indigo-900">A Postura (K. Bailey):</strong> De longe, sem levantar os olhos. Bater no peito era um sinal de luto feminino em funerais. Um homem rico fazer isso no Templo indicava desespero dilacerante pela sua alma.</li>
                <li><strong className="text-indigo-900">O Termo Exato (Hilasterion):</strong> Ele não pede apenas "desculpa". O verbo grego pede propiciação: que o sangue do sacrifício que ardia no altar naquele exato momento cobrisse a sua imundície.</li>
                <li><strong className="text-indigo-900">O Veredito do Reino:</strong> Jesus decreta a monumental doutrina da Justificação pela Fé. O homem sem méritos desce "declarado legalmente justo" por Deus.</li>
             </ul>
          </div>
       </div>
    </div>
  );
};

const JewishWeddingContext = () => {
  const [step, setStep] = useState(0);
  const info = [
    { 
      title: "1. O Noivado Legal (A Aliança Inicial)", 
      desc: "No tempo de Jesus, o casamento possuía três fases. A primeira era o noivado. O noivo ia à casa da noiva, assinava o contrato inviolável e pagava o dote. Eles já eram considerados casados perante a lei, mas o noivo voltava sozinho para a casa do seu pai com um objetivo: construir as moradas para o futuro casal (João 14:2-3). Esta é a fase da dispensação da Igreja hoje." 
    },
    { 
      title: "2. A Demora Inesperada (O Teste da Fidelidade)", 
      desc: "Não havia data marcada para a segunda fase do casamento (o regresso). Podia levar muitos meses. A noiva e as suas damas de honra (as virgens) deviam estar com as candeias prontas todas as noites. O atraso do noivo na parábola (Mt 25:5) retrata o longo período entre a ascensão de Cristo e a Sua Segunda Vinda. A demora divina serve para revelar a fé autêntica e expor a religiosidade falsa e apressada." 
    },
    { 
      title: "3. O Grito da Meia-Noite (O Retorno Feroz)", 
      desc: "Geralmente à meia-noite (para evitar aglomerações e calor), ouviam-se os arautos: 'Aí vem o noivo!'. O momento exigia preparação total. As prudentes tinham óleo de reserva (a plenitude do Espírito Santo/Vida de fé real). As loucas tinham lâmpadas e pavios, mas secos (a estética do cristianismo sem a essência da regeneração interior)." 
    }
  ];
  return (
    <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-200 my-8">
      <h4 className="font-bold text-indigo-900 text-xl mb-6 flex items-center"><Flame className="mr-3 text-indigo-600"/> O Casamento Judaico e as 10 Virgens</h4>
      <div className="flex justify-between mb-8 gap-2">
        {info.map((_, i) => (
          <div key={i} className={`h-2 flex-1 rounded-full transition-all ${i <= step ? 'bg-indigo-600' : 'bg-indigo-200'}`}></div>
        ))}
      </div>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-indigo-100 min-h-[160px] relative overflow-hidden">
        <h5 className="font-bold text-indigo-800 text-xl mb-3">{info[step].title}</h5>
        <p className="text-slate-700 text-lg leading-relaxed">{info[step].desc}</p>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <p className="text-indigo-900/60 font-bold text-xs uppercase tracking-widest">A Escatologia de Jesus (Mt 25)</p>
        <button onClick={() => setStep((step + 1) % 3)} className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 transition-colors flex items-center">Avançar Relógio <ChevronRight className="ml-2 w-4 h-4"/></button>
      </div>
    </div>
  );
};

const TalentEconomics = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-emerald-200 rounded-2xl overflow-hidden mt-8 mb-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-emerald-50 p-6 flex items-center justify-between font-bold text-emerald-900 hover:bg-emerald-100 transition-colors"
      >
        <span className="flex items-center text-xl"><Coins className="w-6 h-6 mr-4 text-emerald-600"/> A Economia dos Talentos: O Risco vs. O Medo</span>
        {isOpen ? <ChevronDown className="w-6 h-6 text-emerald-600" /> : <ChevronRight className="w-6 h-6 text-emerald-600" />}
      </button>
      <div className={`p-8 bg-white border-t border-emerald-100 ${isOpen ? 'block animate-in fade-in' : 'hidden'}`}>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          <strong>Craig Blomberg</strong> clarifica que, no mundo antigo, um "talento" não designava uma aptidão humana (saber tocar piano ou falar bem), mas era uma pesadíssima unidade monetária de prata ou ouro. Um único talento correspondia a 6.000 denários — o equivalente a <strong>20 anos de trabalho intenso</strong> de um agricultor.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          O senhor rico confiou quantias absolutamente astronômicas (evangelho, dons espirituais, salvação, oportunidades) aos seus servos "segundo a capacidade de cada um". Jesus aniquila a ideia do cristianismo inerte. O Reino não é para covardes que temem riscos. O servo que recebe 5 e 2 talentos sai imediatamente para investir o recurso no mercado agressivo da fé e ganhar o dobro para a glória do patrão.
        </p>
        <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500 mb-4">
          <p className="text-emerald-900 font-bold mb-2">A Teologia Distorcida do Servo Mau:</p>
          <p className="text-emerald-800 text-sm leading-relaxed">
            O terceiro servo enterra o tesouro. Qual foi a sua desculpa? <em>"Senhor, sabia que és homem severo, que ceifas onde não semeaste... tive medo"</em> (Mt 25:24). 
          </p>
          <p className="text-emerald-800 text-sm leading-relaxed mt-2">
            <strong>O seu fracasso não foi de aptidão; foi teológico.</strong> Ele não conhecia o patrão e, no fundo, odiava-o. Ele possuía uma visão mentirosa e perversa do coração do Mestre (achando-O abusivo e injusto). Onde há medo servil e ausência de amor a Deus, não há frutificação evangélica. Jesus diz-lhe: Se eu sou um Deus severo como dizes, porque não procuraste render ao menos os juros bancários fáceis? Ele é banido para as trevas exteriores. O discipulado exige investimento contínuo!
          </p>
        </div>
      </div>
    </div>
  );
};

// --- ESTRUTURA DOS DADOS DO MÓDULO 4 --- //
export const mod4 = {
  id: "mod4",
  titulo: "Módulo 4: Vida Prática, Oração e Vigilância",
  descricao: "Mordomia, Oração e a Segunda Vinda do Rei",
  alerta: "<strong>Módulo de Conclusão:</strong> Preparado e hiper-expandido para aulas densas de 60 minutos ininterruptos. A abordagem exegética desvenda de forma letal a aplicação prática do discípulo com o seu dinheiro e coração.",
  intro: {
    title: "Abertura do Módulo: Teologia em Ação",
    content: (
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          Bem-vindo ao <strong>Módulo 4</strong>, a estação final e decisiva da nossa jornada pelas Parábolas de Jesus. Nos módulos anteriores, voámos nas alturas teológicas do Reino de Deus e mergulhámos nas águas abissais da Graça de Lucas 15. Agora, o ensino do Mestre aterra de forma brutal na rotina e nas escolhas cruas do Seu discípulo.
        </p>
        <p>
          A prova inegável de que o homem foi atingido pela graça não está na retórica que ele domina, mas na vida prática que ele lidera. As parábolas que analisaremos neste módulo respondem a três áreas onde a hipocrisia não consegue disfarçar-se:
        </p>
        <p className="font-bold text-slate-800 mb-2">As Três Perguntas Existenciais da Prática:</p>
        <ol className="list-decimal pl-8 space-y-2 mb-6">
          <li>Como o discípulo gere o seu <strong>dinheiro e segurança terrena</strong>? (Mordomia)</li>
          <li>Como o discípulo demonstra a sua <strong>falência e dependência humilde</strong> perante a tribulação? (Oração)</li>
          <li>Como o discípulo vive quando ninguém está a ver, à espera da <strong>Segunda Vinda</strong> e do Juízo? (Vigilância)</li>
        </ol>
        <p>
          Para este Módulo Final, estruturado de forma hiper-expandida, escavaremos as pesquisas de MacArthur, Blomberg, Bailey, Kistemaker e Lopes. Prepara-te para desconstruir o materialismo, curar o farisaísmo da oração e despertar para o clarim da escatologia de Jesus.
        </p>
      </div>
    )
  },
  outro: {
    title: "Fechamento do Módulo: Da Audição à Prática",
    mensagemFinal: "Da teoria hermenêutica à prática do discípulo. Nenhuma parábola serve apenas como um conto moral; cada uma delas puxa-te pela gola até uma encruzilhada imediata, exigindo fé e obediência ativas — hoje!",
    content: (
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          Chegamos ao fim não apenas do Módulo 4, mas de todo o nosso curso magistral sobre as Parábolas de Jesus. Ao longo destas semanas, fomos confrontados, desconstruídos e refeitos pelas "histórias de ninar" mais letais já contadas à humanidade caída.
        </p>
        
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-8">
          <h4 className="font-bold text-xl text-slate-800 mb-6 border-b border-slate-300 pb-2">Os Quatro Pilares Finais (Síntese Geral da Ementa):</h4>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-lg text-sm mr-4 mt-0.5">Pilar 1</span>
              <div>
                <strong className="text-slate-900 block mb-1">A Autenticidade do Discipulado</strong>
                As parábolas, desde os variados solos até às virgens da meia-noite, provam que o Reino exige vida regenerada e não apenas aparência e claque religiosa. O azeite santificador não é emprestado de avós ou pastores; os dons do Mestre não podem ser enterrados sob desculpas covardes.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 font-bold px-3 py-1 rounded-lg text-sm mr-4 mt-0.5">Pilar 2</span>
              <div>
                <strong className="text-slate-900 block mb-1">O Caráter Escandaloso do Rei</strong>
                O Deus que foi pintado em Lucas 15 (que corre de forma humilhante para o pródigo) e de Lucas 18 (que justifica o odiado publicano gratuitamente e condena o fariseu perfeito) destroça a meritocracia humana. Ele não aprova parceiros contratuais; Ele levanta mortos insolvíveis pela fé.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-lg text-sm mr-4 mt-0.5">Pilar 3</span>
              <div>
                <strong className="text-slate-900 block mb-1">A Ética da Inversão Cósmica</strong>
                No Reino de Cristo, a bússola deste mundo vira ao contrário: O rico agrário milionário acorda miserável no abismo; a viúva pobre arranca resposta do juiz; o herege samaritano opera a divindade no asfalto enquanto o clero omite a salvação por medo de perder rituais.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-rose-100 text-rose-800 font-bold px-3 py-1 rounded-lg text-sm mr-4 mt-0.5">Pilar 4</span>
              <div>
                <strong className="text-slate-900 block mb-1">O Chamado Feroz à Decisão</strong>
                A natureza do antigo <em>Mashal</em> hebraico abomina a passividade dos camarotes. Nenhuma parábola serve apenas como um conto moral; cada uma delas puxa-te pela gola até uma encruzilhada imediata, exigindo fé e obediência ativas — hoje —, "antes que se oiça o grito de que o Noivo chega".
              </div>
            </li>
          </ul>
        </div>
        
        <p>
          Que a Igreja congregada no Centro de Capacitação Ministerial absorva e respire estas palavras. Elas não são literatura de encantar; elas são as Palavras da Vida Eterna, esculpidas diretamente do trono do Filho de Deus. Vão, e façam da mesma maneira.
        </p>
      </div>
    )
  },
  aulas: [
    {
      id: 10,
      title: "Mordomia e Recursos Financeiros",
      icon: <Coins className="w-5 h-5" />,
      objective: "Compreender através do Rico Insensato e do Mordomo Infiel que a gestão do dinheiro é o termómetro mais exato da saúde espiritual do coração humano.",
      content: (
        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            É um dado teológico inegável que Jesus Cristo falou muito mais exaustivamente sobre finanças, cobiça material e avareza do que sobre o céu e o inferno combinados. Porquê? Porque Jesus sabia que a maior concorrência pelo senhorio da alma e do trono do coração não seriam divindades de pau ou de pedra, mas sim a potência tirânica e atrativa da Riqueza (Mamon). 
          </p>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
            <h4 className="font-bold text-slate-900 mb-2">A Gênese da Cobiça (O Contexto do Rico Insensato):</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Lucas 12 inicia com Cristo a ensinar maravilhas profundas a multidões incalculáveis. De repente, um homem corta a teologia sagrada com um grito mesquinho: <em>"Mestre, diz a meu irmão que divida a herança comigo"</em>. A audácia de interromper Deus para litigar sobre dinheiro enfurece a Jesus. Cristo responde: "Homem, quem me designou juiz para divisão de heranças?" e logo atira um mandamento: <strong>"Cuidado! Guardai-vos de toda forma de ganância"</strong>. É aí que Ele lança a Parábola do Rico Insensato.
            </p>
          </div>

          <WealthParadox />

          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">
            A Teologia Ousada do Mordomo Infiel
          </h3>
          <p>
            O capítulo 16 de Lucas encerra a "parábola mais difícil de Cristo". No ocidente, questionamo-nos por que Jesus estaria a usar um "gestor financeiro falcatrua" como exemplo positivo para a congregação dos santos. 
          </p>
          
          <StewardCommission />

          <div className="bg-indigo-900 text-white p-8 rounded-2xl mt-10 shadow-sm">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-indigo-200">Conclusão Teológica da Aula 10</h3>
            <p className="text-indigo-50 text-lg font-bold">
              A escatologia (o destino do mundo) dita a nossa economia. O cristão sabe que não passará de um "mordomo a ser demitido pela morte". O nosso dinheiro e títulos vão ficar no chão da terra. A única aplicação inteligente e sagaz é o investimento missionário agressivo com a "riqueza profana", convertendo notas pecuniárias da bolsa na aquisição e salvação eterna de almas. Esse é o investimento celestial que jamais sofre derrapagens.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 11,
      title: "A Vida de Oração e Humildade",
      icon: <Hand className="w-5 h-5" />,
      objective: "Analisar as engrenagens psicológicas e teológicas da Oração através do clamor perseverante da viúva e o contraste fatal entre o legalismo e a contrição absoluta no Templo.",
      content: (
        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            A oração foi decretada pelos apóstolos e pelo Senhor como o oxigénio vital do reino espiritual. No Evangelho de Lucas 18, de forma sequencial tática, Jesus projeta duas ilustrações avassaladoras. Uma destina-se a curar a síndrome cristã de "desistência antes do tempo" diante de um mundo hostil. A outra destina-se a fulminar a síndrome letal da "postura de auto suficiência e presunção mística" perante o trono de Deus.
          </p>

          <JudgeDynamics />

          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">
            A Ansiedade Escatológica (Por que Deus demora?)
          </h3>
          <p>
            <strong>Hernandes Dias Lopes</strong> conecta a oração da viúva com o final do capítulo 17, onde Jesus falava da tribulação dos últimos dias. Muitas vezes, a Igreja (a viúva) chora por justiça num mundo dominado por iníquos. Deus pode parecer demorar a responder, mas essa "demora" é um filtro para desenvolver a fé perseverante. Por isso Jesus termina a parábola perguntando: <em>"Quando, porém, vier o Filho do Homem, porventura achará fé [fidelidade persistente como a da viúva] na terra?"</em>.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">
            Justificação: O Tribunal do Templo
          </h3>
          <p>
            Se a história da viúva lidou com a "perseverança persistente", a história do Fariseu e do Publicano no templo lida com o "motor de arranque da Salvação". O que nos qualifica a entrar na presença de Deus?
          </p>

          <TheTwoPrayers />

          <PrayerPostures />

          <div className="bg-indigo-900 text-white p-8 rounded-2xl mt-10 shadow-sm">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-indigo-200">Conclusão Teológica da Aula 11</h3>
            <p className="text-indigo-50 text-lg font-bold">
              As asas do crente diante do trono de Deus possuem dois propulsores inegociáveis: A <strong>insistência obstinada</strong> (da viúva) sabendo que Deus opera e trabalha muitas vezes perante os demorados relógios seculares; e a <strong>humildade destrutiva de egos</strong> (do publicano), compreendendo que um grito miserável de arrependimento clamando pela cruz de Cristo tem mais poder judicial no céu do que cinco décadas de ativismo de aparências imaculadas.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 12,
      title: "Preparação para o Encontro com o Rei",
      icon: <Hourglass className="w-5 h-5" />,
      objective: "Soar a sirene da urgência eclesial (Segunda Vinda do Rei). Compreender que as promessas exigem vigília de estado interior inalienável e serviço dinâmico aos talentos concedidos.",
      content: (
        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            No fim cronológico do Seu ensino, no topo do Monte das Oliveiras e com a visão de Jerusalém em pano de fundo, Jesus prega o Sermão Escatológico (Mt 25). Faltavam poucos dias para o esmagar e carnificina da Cruz. A temperatura profética está incandescente. Ele despacha alertas parabólicos sucessivos para destruir o conformismo dos séculos futuros: O noivo vem aí, não brinquem às religiões.
          </p>

          <JewishWeddingContext />

          <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-slate-900 border-b border-slate-200 pb-4">
            A Teologia do Atrito nas Virgens
          </h3>
          <p>
            O erudito <strong>John MacArthur</strong> ressalta uma teologia duríssima que nos ensina essa cena de Mateus 25. O comportamento ríspido das virgens prudentes em responder <em>"Não [vos daremos] para que falte a vós e a nós"</em> não denota que não eram "boas cristãs doando o que têm", não denota o seu mau feitio egoísta. 
          </p>
          <p>
            Denota que Cristo decreta o aspeto absolutamente imperecível e impagável de transação da Salvação. A conversão, a regeneração e a presença do Espírito Santo não podem ser emprestadas do marido devoto para a esposa ímpia, da mãe zelosa para a filha mundana. Ninguém partilhará uma quota do azeite celestial diante do Juízo. O estado do coração é intransferível. Todos devem comprar o óleo antes da meia-noite.
          </p>

          <TalentEconomics />

          <div className="bg-indigo-900 text-white p-8 rounded-2xl mt-10 shadow-sm">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-indigo-200">Conclusão Teológica da Aula 12</h3>
            <p className="text-indigo-50 text-lg font-bold">
              As parábolas finais são sentenças marciais. O Mestre está atrasado na cronologia terrena apenas para forjar corações no teste da paciência e da devoção diuturna. Mas aos que pensam que a passividade preguiçosa é tolerada ou o óleo alheio é salvador, a trombeta da meia-noite trará a resposta gelada de Cristo que decreta eternidade: <em>"Em verdade vos digo: nunca vos conheci."</em>
            </p>
          </div>
        </div>
      )
    }
  ]
};