// src/App.jsx
import React, { useState, useEffect } from 'react';
import { ChevronRight, Map, CheckCircle2, Lightbulb, Library } from 'lucide-react';
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
  }, [activeLesson]);

  const renderizarMenu = () => (
    <div className="p-8 max-w-4xl mx-auto pt-20">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4 font-serif">
          As Parábolas de Jesus
        </h1>
        <p className="text-lg text-slate-600">
          Selecione um módulo abaixo para iniciar o estudo.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {modulosDisponiveis.map((mod) => (
          <button 
            key={mod.id}
            onClick={() => {
              setModuloAtivo(mod);
              setActiveLesson(0);
            }}
            className="p-6 bg-white border-2 border-indigo-100 rounded-xl shadow-sm hover:border-indigo-500 hover:shadow-md transition-all text-left flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-indigo-900">{mod.titulo}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{mod.descricao}</p>
            </div>
            <div className="mt-6 text-indigo-600 font-semibold text-sm uppercase tracking-wider flex items-center">
              Acessar Módulo <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderizarModulo = () => (
    <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-4 md:px-6 py-10">
      
      <aside className="md:w-1/4 flex-shrink-0">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sticky top-28">
          <button 
            onClick={() => setModuloAtivo(null)}
            className="w-full text-left mb-6 pb-4 border-b border-slate-100 text-indigo-600 hover:text-indigo-800 font-bold flex items-center text-sm uppercase tracking-wider"
          >
            &larr; Voltar aos Módulos
          </button>

          <h3 className="font-bold text-slate-800 mb-5 px-2 uppercase text-xs tracking-widest">Navegação do Módulo</h3>
          <nav className="space-y-3">
            <button onClick={() => setActiveLesson(0)} className={`w-full text-left flex items-center p-4 rounded-xl transition-all ${activeLesson === 0 ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-100 shadow-sm scale-105' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Map className="w-5 h-5 mr-4 opacity-70"/> <span className="text-sm">Abertura do Módulo</span>
            </button>
            
            {moduloAtivo.aulas.map((lesson) => (
              <button key={lesson.id} onClick={() => setActiveLesson(lesson.id)} className={`w-full text-left flex items-center p-4 rounded-xl transition-all ${activeLesson === lesson.id ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-100 shadow-sm scale-105' : 'text-slate-600 hover:bg-slate-50'}`}>
                <div className="mr-4 opacity-70">{lesson.icon}</div>
                <span className="text-sm">Aula {lesson.id}</span>
              </button>
            ))}
          
            <button onClick={() => setActiveLesson(99)} className={`w-full text-left flex items-center p-4 rounded-xl transition-all ${activeLesson === 99 ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-100 shadow-sm scale-105' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle2 className="w-5 h-5 mr-4 opacity-70"/> <span className="text-sm">Fechamento</span>
            </button>
          </nav>
        </div>
      </aside>

      <main className="md:w-3/4 pb-12">
        <div className="bg-amber-100 text-amber-900 p-5 rounded-xl mb-8 text-base flex items-start border border-amber-300 shadow-sm">
          <Lightbulb className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
          {/* AQUI ESTÁ A CORREÇÃO DA SINTAXE DO REACT */}
          {moduloAtivo.alerta ? (
            <div dangerouslySetInnerHTML={{__html: moduloAtivo.alerta}} />
          ) : (
            <div>
              <strong>Ambiente de Estudo Online:</strong> Navegue com os menus à esquerda. Esta versão foi dedicada 100% para o estudo interativo.
            </div>
          )}
        </div>

        {activeLesson === 0 && (
          <article className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 md:p-14 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl md:text-5xl font-extrabold font-serif mb-8 text-slate-900 border-b border-slate-200 pb-6">{moduloAtivo.intro.title}</h2>
            {moduloAtivo.intro.content}
            <div className="mt-12 text-right">
              <button onClick={() => setActiveLesson(moduloAtivo.aulas[0].id)} className="bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-4 rounded-xl font-bold flex items-center ml-auto transition-colors shadow-md">
                Iniciar Aula {moduloAtivo.aulas[0].id} <ChevronRight className="ml-3 w-5 h-5"/>
              </button>
            </div>
          </article>
        )}

        {moduloAtivo.aulas.map((lesson, index) => {
          const prevLessonId = index > 0 ? moduloAtivo.aulas[index - 1].id : 0;
          const nextLessonId = index < moduloAtivo.aulas.length - 1 ? moduloAtivo.aulas[index + 1].id : 99;

          return activeLesson === lesson.id && (
            <article key={lesson.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-900 text-white p-10 md:p-14 relative">
                <div className="flex items-center mb-6">
                  <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest border border-indigo-400/30">
                    Aula {lesson.id}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif mb-6 leading-tight">
                  {lesson.title}
                </h2>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 mt-8">
                  <p className="text-slate-300 font-medium italic text-xl">
                    <strong className="text-white not-italic uppercase text-sm tracking-widest block mb-3">Foco Pedagógico & Objetivo: </strong> 
                    {lesson.objective}
                  </p>
                </div>
              </div>
              <div className="p-10 md:p-14">
                {lesson.content}
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
                 <button onClick={() => setActiveLesson(prevLessonId)} className="text-slate-500 hover:text-slate-800 font-bold px-4 py-2">
                   Voltar
                 </button>
                 {nextLessonId === 99 ? (
                   <button onClick={() => setActiveLesson(99)} className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold flex items-center transition-colors shadow-md">
                     Ver Fechamento <ChevronRight className="ml-3 w-5 h-5"/>
                   </button>
                 ) : (
                   <button onClick={() => setActiveLesson(nextLessonId)} className="bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-4 rounded-xl font-bold flex items-center transition-colors shadow-md">
                     Próxima Aula <ChevronRight className="ml-3 w-5 h-5"/>
                   </button>
                 )}
              </div>
            </article>
          )
        })}

        {activeLesson === 99 && (
          <article className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 md:p-14 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl md:text-5xl font-extrabold font-serif mb-8 text-slate-900 border-b border-slate-200 pb-6">{moduloAtivo.outro.title}</h2>
            {moduloAtivo.outro.content}
            
            <div className="mt-12 bg-amber-50 border border-amber-200 p-8 rounded-2xl text-center">
              <CheckCircle2 className="w-16 h-16 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-900 mb-2">{moduloAtivo.titulo} Concluído!</h3>
              <p className="text-amber-800 text-lg">
                {moduloAtivo.outro.mensagemFinal || "Parabéns por concluir esta etapa do seu crescimento teológico."}
              </p>
            </div>
          </article>
        )}
      </main>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 font-sans selection:bg-indigo-200 flex flex-col">
      <header className="bg-indigo-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <span className="text-indigo-300 font-bold tracking-widest text-xs uppercase">Apostila Interativa de Ensino</span>
            <h1 className="text-xl md:text-2xl font-bold font-serif">
              {moduloAtivo ? moduloAtivo.titulo : "Página Inicial"}
            </h1>
          </div>
        </div>
      </header>
      <div className="flex-grow">
        {moduloAtivo ? renderizarModulo() : renderizarMenu()}
      </div>
      <footer className="bg-white text-center py-8 text-slate-500 text-sm border-t border-slate-200 mt-auto">
        <p className="font-bold text-slate-800">CCM - Centro de Capacitação Ministerial</p>
        <p>IEQ Templo Gospel 2026 • As Parábolas de Jesus</p>
      </footer>
    </div>
  );
}