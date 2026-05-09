import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Map, 
  CheckCircle2, 
  Lightbulb, 
  Library, 
  Sparkles, 
  BookMarked, 
  BookOpen, 
  Send, 
  Crown,
  BookOpenCheck
} from 'lucide-react';

// Importação dos seus arquivos de conteúdo
import { mod1 } from './content/mod1';
import { mod2 } from './content/mod2';
import { mod3 } from './content/mod3';
import { mod4 } from './content/mod4';
import { mod5 } from './content/mod5'; 

const modulosDisponiveis = [mod1, mod2, mod3, mod4, mod5];

export default function App() {
  const [moduloAtivo, setModuloAtivo] = useState(null);
  const [activeLesson, setActiveLesson] = useState(0);

  useEffect(() => {
    if (moduloAtivo) {
      document.title = `Apostila | ${moduloAtivo.titulo}`;
    } else {
      document.title = "As Parábolas de Jesus | Menu Principal";
    }
  }, [moduloAtivo]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeLesson, moduloAtivo]);

  // Componente de Rodapé Reutilizável
  const FooterPersonalizado = () => (
    <footer className="bg-white text-center py-10 text-slate-500 text-sm border-t border-slate-200 mt-auto w-full">
      <p className="font-bold text-slate-800 mb-2 italic px-4">
        "Uma jornada exegética e cultural pelos mistérios do Reino"
      </p>
      <p className="uppercase tracking-widest text-xs font-black text-slate-400">
        CCM - Centro de Capacitação Ministerial • IEQ Templo Gospel
      </p>
      <div className="mt-4 flex justify-center items-center text-xs font-bold text-indigo-400 uppercase tracking-widest">
        <span className="bg-indigo-50 px-4 py-1 rounded-full border border-indigo-100">
          Uma Igreja para Permanecer
        </span>
      </div>
    </footer>
  );

  const renderizarMenu = () => {
    const principais = modulosDisponiveis.filter(m => m.id !== 'mod5');
    const bonus = modulosDisponiveis.find(m => m.id === 'mod5');

    return (
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-slate-50 to-indigo-50/30 flex flex-col">
        <div className="p-8 max-w-6xl mx-auto pt-24 pb-20 flex-grow w-full">
          
          <div className="mb-16 text-center animate-in fade-in slide-in-from-top-6 duration-700">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
              Formação Teológica 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 font-serif tracking-tight">
              As Parábolas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-900">Jesus</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Uma jornada exegética e cultural pelos mistérios do Reino. Selecione um estágio da sua formação.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-10">
            {principais.map((mod, index) => (
              <button 
                key={mod.id}
                onClick={() => { setModuloAtivo(mod); setActiveLesson(0); }}
                className="group relative bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors duration-500"></div>
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      {index === 0 && <BookMarked className="w-6 h-6" />}
                      {index === 1 && <Map className="w-6 h-6" />}
                      {index === 2 && <Library className="w-6 h-6" />}
                      {index === 3 && <Sparkles className="w-6 h-6" />}
                    </div>
                    <span className="text-slate-200 font-black text-3xl opacity-50">0{index + 1}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">{mod.titulo}</h2>
                  <p className="text-slate-500 leading-relaxed mb-6 line-clamp-2 text-sm">{mod.descricao}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-slate-400 text-xs font-medium">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {mod.aulas.length} Aulas disponíveis
                  </div>
                  <div className="text-indigo-600 font-bold text-sm flex items-center">
                    Acessar <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {bonus && (
            <button 
              onClick={() => { setModuloAtivo(bonus); setActiveLesson(0); }}
              className="w-full group relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-[2.5rem] p-1 shadow-2xl hover:scale-[1.01] transition-all duration-500 overflow-hidden"
            >
              <div className="relative bg-slate-900/90 rounded-[2.3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="w-20 h-20 bg-amber-500 text-slate-900 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)] group-hover:rotate-12 transition-transform duration-500">
                    <Send className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                      <span className="bg-amber-500/20 text-amber-500 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-amber-500/30">Exclusivo</span>
                      <span className="text-indigo-300 text-sm font-bold uppercase tracking-widest">Estágio Final</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">{bonus.titulo}</h2>
                    <p className="text-slate-400 text-lg mt-2 max-w-xl">Consolidação teológica e o envio missionário para o banquete do Rei.</p>
                  </div>
                </div>
                <div className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg flex items-center shadow-xl transition-all">
                  COMEÇAR O ENCERRAMENTO <ChevronRight className="w-6 h-6 ml-2" />
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Crown className="w-40 h-40 text-white" />
              </div>
            </button>
          )}
        </div>
        <FooterPersonalizado />
      </div>
    );
  };

  const renderizarModulo = () => (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-4 md:px-6 py-10 flex-grow w-full">
        <aside className="md:w-1/4 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sticky top-28">
            <button onClick={() => setModuloAtivo(null)} className="w-full text-left mb-6 pb-4 border-b border-slate-100 text-indigo-600 font-bold flex items-center text-xs uppercase tracking-wider">
              &larr; Voltar ao Menu
            </button>
            <nav className="space-y-2">
              <button onClick={() => setActiveLesson(0)} className={`w-full text-left flex items-center p-4 rounded-xl transition-all ${activeLesson === 0 ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}>
                <Map className="w-5 h-5 mr-3 opacity-70"/> <span className="text-sm font-medium text-slate-600">Abertura</span>
              </button>
              {moduloAtivo.aulas.map((lesson) => (
                <button key={lesson.id} onClick={() => setActiveLesson(lesson.id)} className={`w-full text-left flex items-center p-4 rounded-xl transition-all ${activeLesson === lesson.id ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-100' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <div className="mr-3 opacity-70">{lesson.icon}</div>
                  <span className="text-sm font-medium">Aula {lesson.id}</span>
                </button>
              ))}
              <button onClick={() => setActiveLesson(99)} className={`w-full text-left flex items-center p-4 rounded-xl transition-all ${activeLesson === 99 ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}>
                <CheckCircle2 className="w-5 h-5 mr-3 opacity-70"/> <span className="text-sm font-medium">Conclusão</span>
              </button>
            </nav>
          </div>
        </aside>

        <main className="md:w-3/4 pb-12">
          <div className="bg-amber-100 text-amber-900 p-5 rounded-xl mb-8 flex items-start border border-amber-300 shadow-sm">
            <Lightbulb className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
            {moduloAtivo.alerta ? (
              <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: moduloAtivo.alerta}} />
            ) : (
              <div className="text-sm"><strong>Aviso:</strong> Utilize o menu lateral para navegar entre as aulas deste módulo.</div>
            )}
          </div>

          {activeLesson === 0 && (
            <article className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 md:p-14 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-4xl font-extrabold font-serif mb-8 text-slate-900 border-b pb-6">{moduloAtivo.intro.title}</h2>
              <div className="prose prose-slate max-w-none">{moduloAtivo.intro.content}</div>
              <div className="mt-12 text-right">
                <button onClick={() => setActiveLesson(moduloAtivo.aulas[0].id)} className="bg-indigo-900 text-white px-8 py-4 rounded-xl font-bold flex items-center ml-auto transition-all shadow-lg hover:bg-indigo-800">
                  Iniciar Módulo <ChevronRight className="ml-3 w-5 h-5"/>
                </button>
              </div>
            </article>
          )}

          {moduloAtivo.aulas.map((lesson, index) => {
            const nextId = index < moduloAtivo.aulas.length - 1 ? moduloAtivo.aulas[index + 1].id : 99;
            return activeLesson === lesson.id && (
              <article key={lesson.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-slate-900 text-white p-10 md:p-14">
                  <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-400/30">Aula {lesson.id}</span>
                  <h2 className="text-4xl md:text-5xl font-extrabold font-serif mt-6 mb-6 leading-tight">{lesson.title}</h2>
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 italic text-slate-300">{lesson.objective}</div>
                </div>
                <div className="p-10 md:p-14">{lesson.content}</div>
                <div className="p-8 bg-slate-50 border-t flex justify-between">
                  <button onClick={() => setActiveLesson(0)} className="text-slate-500 font-bold px-4">Início</button>
                  <button onClick={() => setActiveLesson(nextId)} className="bg-indigo-900 text-white px-8 py-4 rounded-xl font-bold flex items-center transition-all shadow-md">
                    {nextId === 99 ? 'Ver Conclusão' : 'Próxima Aula'} <ChevronRight className="ml-3 w-5 h-5"/>
                  </button>
                </div>
              </article>
            )
          })}

          {activeLesson === 99 && (
            <article className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 md:p-14 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-4xl font-extrabold font-serif mb-8 text-slate-900 border-b pb-6">{moduloAtivo.outro.title}</h2>
              <div className="prose prose-slate max-w-none">{moduloAtivo.outro.content}</div>
              <div className="mt-12 bg-amber-50 border border-amber-200 p-8 rounded-2xl text-center">
                <CheckCircle2 className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-amber-900 mb-2">{moduloAtivo.titulo} Finalizado!</h3>
                <p className="text-amber-800">{moduloAtivo.outro.mensagemFinal}</p>
              </div>
            </article>
          )}
        </main>
      </div>
      <FooterPersonalizado />
    </div>
  );

  return (
    <div className="min-h-screen font-sans">
      <header className="bg-indigo-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <span className="text-indigo-300 font-bold tracking-widest text-xs uppercase">CCM • Templo Gospel</span>
            <h1 className="text-xl font-serif">{moduloAtivo ? moduloAtivo.titulo : "As Parábolas de Jesus"}</h1>
          </div>
        </div>
      </header>
      {moduloAtivo ? renderizarModulo() : renderizarMenu()}
    </div>
  );
}