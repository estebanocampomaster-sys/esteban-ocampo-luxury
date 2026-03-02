import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, TrendingDown, Scale, Info } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('convert');
  const [form, setForm] = useState({ q: 24, m: 1000, peso: 1000, leyActual: 916, leyDeseada: 750 });
  const [result, setResult] = useState("");

  const handleCalc = () => {
    let res = "";
    const { q, m, peso, leyActual, leyDeseada } = form;

    if (activeTab === 'convert') {
      const milesimas = (q * 1000 / 24).toFixed(2);
      const quilates = (m * 24 / 1000).toFixed(2);
      res = `${q}q = ${milesimas} milésimas | ${m} milésimas = ${quilates}q`;
    } 
    else if (activeTab === 'bajar') {
      if (leyActual <= leyDeseada) return setResult("La ley actual debe ser mayor para bajarla.");
      const liga = (((leyActual - leyDeseada) * peso) / leyDeseada);
      const total = parseFloat(peso) + liga;
      res = `Añadir ${liga.toFixed(2)}g de liga. Total: ${total.toFixed(2)}g a ley ${leyDeseada}.`;
    } 
    else if (activeTab === 'subir') {
      if (leyActual >= leyDeseada) return setResult("La ley actual debe ser menor para subirla.");
      const fino = (((leyDeseada - leyActual) * peso) / (1000 - leyDeseada));
      const total = parseFloat(peso) + fino;
      res = `Añadir ${fino.toFixed(2)}g de oro fino. Total: ${total.toFixed(2)}g a ley ${leyDeseada}.`;
    }
    setResult(res);
  };

  useEffect(() => { handleCalc(); }, [form, activeTab]);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', padding: '40px 0', borderBottom: '1px solid #111' }}>
        <h1 style={{ letterSpacing: '10px', textTransform: 'uppercase', fontWeight: '200', fontSize: '1.5rem' }}>Esteban Ocampo</h1>
        <p style={{ color: '#c5a47e', fontSize: '0.7rem', marginTop: '10px', letterSpacing: '3px' }}>PRECISIÓN EN JOYERÍA 3D</p>
      </header>

      <div style={{ maxWidth: '900px', margin: '40px auto', background: '#050505', borderRadius: '40px', border: '1px solid #1a1a1a', overflow: 'hidden' }}>
        {/* NAVEGACIÓN DE HERRAMIENTAS */}
        <div style={{ display: 'flex', background: '#0a0a0a' }}>
          {[
            { id: 'convert', label: 'Conversión', icon: <Scale size={16}/> },
            { id: 'bajar', label: 'Bajar Ley', icon: <TrendingDown size={16}/> },
            { id: 'subir', label: 'Subir Ley', icon: <TrendingUp size={16}/> }
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              flex: 1, padding: '25px', border: 'none', background: activeTab === tab.id ? '#000' : 'transparent',
              color: activeTab === tab.id ? '#c5a47e' : '#444', cursor: 'pointer', fontSize: '0.7rem', textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: '0.3s'
            }}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* ÁREA DE TRABAJO TÉCNICO */}
        <div style={{ padding: '60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            {activeTab === 'convert' && (
              <>
                <div><label style={{display:'block', fontSize:'0.6rem', color:'#444', marginBottom:'10px'}}>QUILATES</label>
                <input type="number" value={form.q} onChange={e => setForm({...form, q: e.target.value})} style={inputStyle}/></div>
                <div><label style={{display:'block', fontSize:'0.6rem', color:'#444', marginBottom:'10px'}}>MILÉSIMAS</label>
                <input type="number" value={form.m} onChange={e => setForm({...form, m: e.target.value})} style={inputStyle}/></div>
              </>
            )}
            {(activeTab === 'bajar' || activeTab === 'subir') && (
              <>
                <div><label style={{display:'block', fontSize:'0.6rem', color:'#444', marginBottom:'10px'}}>PESO LINGOTE (g)</label>
                <input type="number" value={form.peso} onChange={e => setForm({...form, peso: e.target.value})} style={inputStyle}/></div>
                <div><label style={{display:'block', fontSize:'0.6rem', color:'#444', marginBottom:'10px'}}>LEY ACTUAL</label>
                <input type="number" value={form.leyActual} onChange={e => setForm({...form, leyActual: e.target.value})} style={inputStyle}/></div>
                <div><label style={{display:'block', fontSize:'0.6rem', color:'#444', marginBottom:'10px'}}>LEY DESEADA</label>
                <input type="number" value={form.leyDeseada} onChange={e => setForm({...form, leyDeseada: e.target.value})} style={inputStyle}/></div>
              </>
            )}
          </div>

          {result && (
            <div style={{ marginTop: '50px', padding: '40px', background: '#000', borderRadius: '20px', border: '1px solid #c5a47e33', textAlign: 'center' }}>
              <p style={{ color: '#c5a47e', fontSize: '0.7rem', marginBottom: '10px', textTransform: 'uppercase' }}>Resultado de Taller</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0' }}>{result}</h2>
            </div>
          )}
        </div>
      </div>
      
      <footer style={{ textAlign: 'center', marginTop: '60px', opacity: '0.2', fontSize: '0.6rem', letterSpacing: '3px' }}>
        HERRAMIENTA PROFESIONAL • ESTEBAN OCAMPO • 2026
      </footer>
    </div>
  );
}

const inputStyle = {
  width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #222', 
  color: '#fff', fontSize: '1.5rem', outline: 'none', padding: '10px 0'
};
