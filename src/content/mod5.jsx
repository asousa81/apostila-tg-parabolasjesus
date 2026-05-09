// src/content/mod5.jsx
import React from 'react';
import { 
  BookOpen, Globe2, ChevronRight, BookMarked, 
  Library, CheckCircle2, Home, Hammer, Wind, Crown, 
  PartyPopper, Utensils, Send, Megaphone, ShieldCheck, DoorOpen
} from 'lucide-react';

// --- COMPONENTES DO ENCERRAMENTO ---
const TheFourPillars = () => (
  <div className="my-10">
    <div className="text-center mb-8">
      <h3 className="text-3xl font-bold text-slate-900 font-serif">Os 4 Pilares das Parábolas</h3>
      <p className="text-slate-500 mt-2">A síntese teológica de todo o currículo ensinado:</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-8 rounded-2xl border-t-8 border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300">
        <ShieldCheck className="w-10 h-10 text-emerald-600 mb-4" />
        <h4 className="font-bold text-slate-900 text-xl mb-3 font-serif">1. A Autenticidade do Discipulado</h4>
        <p className="text-slate-600 text-base leading-relaxed">As parábolas provam que o Reino exige vida regenerada. O azeite santificador não é transferível e o solo bom exige frutos reais.</p>
      </div>
      <div className="bg-white p-8 rounded-2xl border-t-8 border-indigo-500 shadow-sm hover:shadow-xl transition-all duration-300">
        <Crown className="w-10 h-10 text-indigo-600 mb-4" />
        <h4 className="font-bold text-slate-900 text-xl mb-3 font-serif">2. O Caráter Escandaloso do Rei</h4>
        <p className="text-slate-600 text-base leading-relaxed">O Deus de Lucas 15 destroça a meritocracia: Ele busca a ovelha, corre para o pródigo e justifica o publicano.</p>
      </div>
      <div className="bg-white p-8 rounded-2xl border-t-8 border-amber-500 shadow-sm hover:shadow-xl transition-all duration-300">
        <Globe2 className="w-10 h-10 text-amber-600 mb-4" />
        <h4 className="font-bold text-slate-900 text-xl mb-3 font-serif">3. A Ética da Inversão Cósmica</h4>
        <p className="text-slate-600 text-base leading-relaxed">No Reino, a bússola vira: o rico acorda falido na eternidade, a viúva arranca justiça e o samaritano opera a divindade no asfalto.</p>
      </div>
      <div className="bg-white p-8 rounded-2xl border-t-8 border-rose-500 shadow-sm hover:shadow-xl transition-all duration-300">
        <ShieldCheck className="w-10 h-10 text-rose-600 mb-4" />
        <h4 className="font-bold text-slate-900 text-xl mb-3 font-serif">4. O Chamado Feroz à Decisão</h4>
        <p className="text-slate-600 text-base leading-relaxed">O Mashal não admite espectadores. Cada parábola é uma encruzilhada que exige obediência ativa HOJE.</p>
      </div>
    </div>
  </div>
);

const TwoBuilders = () => (
  <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-14 my-10 relative overflow-hidden shadow-2xl">
    <div className="absolute top-0 right-0 p-8 opacity-5"><Hammer className="w-64 h-64"/></div>
    <h3 className="text-3xl md:text-4xl font-bold font-serif text-amber-400 mb-6 border-b border-slate-700 pb-4 relative z-10">O Teste Final: O Ouvinte vs. O Praticante</h3>
    <p className="text-xl text-slate-300 leading-relaxed mb-10 relative z-10 italic">"Jesus encerrou o Seu maior sermão com uma parábola brutal: Os Dois Construtores (Mt 7:24-27)."</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors">
        <div className="flex items-center mb-6 text-emerald-400"><Home className="w-10 h-10 mr-4" /><h4 className="font-bold text-2xl font-serif">A Casa na Rocha</h4></div>
        <p className="text-slate-300 text-lg">Ouve e pratica. Representa o crente que cavou fundo. Quando a tempestade do juízo bate, a casa não cede.</p>
      </div>
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-rose-500 transition-colors">
        <div className="flex items-center mb-6 text-rose-400"><Wind className="w-10 h-10 mr-4" /><h4 className="font-bold text-2xl font-serif">A Casa na Areia</h4></div>
        <p className="text-slate-300 text-lg">Ouve mas não pratica. Representa a falsa conversão. Quando o rio transborda, a queda é estrondosa.</p>
      </div>
    </div>
  </div>
);

export const mod5 = {
  id: "mod5",
  titulo: "Módulo Bônus: Celebração e Envio",
  descricao: "Consolidação teológica e o Envio Missionário (Lucas 14)",
  alerta: "<strong>Sessão de Consagração:</strong> Este ambiente foi desenhado para o encerramento do curso. Prepare o coração para o envio missionário.",
  intro: {
    title: "O Fim da Jornada Teológica",
    content: (
      <div className="space-y-6 text-slate-700 text-lg text-center max-w-3xl mx-auto">
        <Crown className="w-20 h-20 mx-auto text-amber-500 mb-4" />
        <p>O que começou como um estudo de narrativas transformou-se no desmascarar das intenções dos nossos corações. O bisturi de Cristo operou em nós.</p>
        <div className="text-left bg-slate-50 p-8 rounded-2xl border border-slate-200 mt-6">
          <p className="font-bold text-indigo-900 mb-4">Neste encontro final:</p>
          <ul className="space-y-4">
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-emerald-500 shrink-0"/> <span><strong>Check-up da Fundação:</strong> Consolidaremos as estacas teológicas para sermos praticantes na Rocha.</span></li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-amber-500 shrink-0"/> <span><strong>Envio para a Festa:</strong> Substituiremos os diplomas pelo avental de servo do Banquete (Lucas 14).</span></li>
          </ul>
        </div>
      </div>
    )
  },
  outro: {
    title: "Formatura e Bibliografia Geral",
    mensagemFinal: "Ouçam a voz do Noivo. Vão aos caminhos e valados e forcem-nos a entrar, para que a Casa de Deus se encha!",
    content: (
      <div className="space-y-10 text-slate-700 text-lg">
        <div className="text-center"><CheckCircle2 className="w-24 h-24 text-emerald-500 mx-auto mb-6" /><h2 className="text-4xl font-bold font-serif">Curso Concluído!</h2></div>
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 font-serif flex items-center justify-center"><Library className="w-8 h-8 mr-4 text-indigo-600"/> Bibliografia que Alimentou a Jornada</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
             <div className="p-4 bg-slate-50 rounded-xl border border-slate-200"><strong>Hernandes Dias Lopes:</strong> As Parábolas de Jesus</div>
             <div className="p-4 bg-slate-50 rounded-xl border border-slate-200"><strong>John MacArthur:</strong> Os mistérios do reino de Deus</div>
             <div className="p-4 bg-slate-50 rounded-xl border border-slate-200"><strong>Simon J. Kistemaker:</strong> Análise exegética e prática</div>
             <div className="p-4 bg-slate-50 rounded-xl border border-slate-200"><strong>Kenneth E. Bailey:</strong> Uma análise literária-cultural</div>
          </div>
        </div>
        <div className="mt-16 bg-indigo-950 text-white p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10"><Send className="w-48 h-48"/></div>
          <h3 className="text-4xl font-bold text-white mb-6 font-serif relative z-10">Ide, e fazei o mesmo!</h3>
          <p className="text-indigo-200 text-xl relative z-10 italic">"Sai pelos caminhos e valados, e força-os a entrar." (Lc 14:23)</p>
        </div>
      </div>
    )
  },
  aulas: [
    {
      id: 13,
      title: "Da Audição à Prática e Celebração",
      icon: <Send className="w-5 h-5" />,
      objective: "Consolidar a hermenêutica das parábolas e culminar no envio missionário baseado no Banquete de Lucas 14.",
      content: (
        <div className="space-y-8 text-lg text-slate-700">
          <TheFourPillars />
          <TwoBuilders />
          <div className="my-12 bg-emerald-50 border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="text-3xl font-bold flex items-center text-slate-900 font-serif mb-6"><Utensils className="mr-3 text-emerald-600"/> O Envio do Banquete</h3>
            <p className="mb-8">Diante da rejeição dos "dignos", o Senhor alarga a porta. Ele ordena trazer os pobres e mancos. O termo <strong>anankason</strong> (forçar) é a urgência apaixonada da persuasão.</p>
            <div className="bg-white p-8 rounded-2xl border-l-8 border-emerald-500 shadow-md italic text-xl">"A Graça pagou a conta. Saiam desta sala e tragam o mundo para a festa do Cordeiro!"</div>
          </div>
        </div>
      )
    }
  ]
};