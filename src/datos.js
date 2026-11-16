/* ══ Datos: el banco oficial (data/fir.json, lo genera la GitHub Action) o, si aún no existe, un DEMO marcado como ficticio ══ */
const ASIGS_BASE = [
  ['farmacologia', 'Farmacología'], ['farmacia_clinica', 'Farmacia clínica y Farmacoterapia'], ['fisiologia', 'Fisiología'], ['fisiopatologia', 'Fisiopatología'],
  ['bioquimica', 'Bioquímica'], ['biologia_molecular', 'Genética y Biología molecular'], ['biologia_celular', 'Biología celular e Histología'], ['microbiologia', 'Microbiología'],
  ['parasitologia', 'Parasitología'], ['inmunologia', 'Inmunología'], ['quimica_farmaceutica', 'Química farmacéutica'], ['quimica_organica', 'Química orgánica'],
  ['quimica_general', 'Química general e inorgánica'], ['fisicoquimica', 'Fisicoquímica'], ['tecnicas_instrumentales', 'Técnicas instrumentales y Química analítica'], ['biofarmacia', 'Biofarmacia y Farmacocinética'],
  ['tecnologia_farmaceutica', 'Tecnología farmacéutica'], ['toxicologia', 'Toxicología'], ['nutricion', 'Nutrición y Bromatología'], ['farmacognosia', 'Farmacognosia y Fitoterapia'],
  ['botanica', 'Botánica'], ['analisis_clinicos', 'Análisis clínicos y Hematología'], ['estadistica', 'Bioestadística, Epidemiología y Salud pública'], ['legislacion', 'Legislación y Gestión farmacéutica'],
  ['otras', 'Sin clasificar']
].map(([id, nombre]) => ({id, nombre}));

/* DEMO · preguntas ESCRITAS PARA LA DEMOSTRACIÓN (no son preguntas oficiales del FIR); sirven para probar la app sin datos */
const DEMO_PREG = [
  ['farmacologia', '¿Cuál es el mecanismo de acción del omeprazol?', ['Antagonismo de los receptores H2 de histamina.', 'Inhibición irreversible de la H+/K+-ATPasa de la célula parietal.', 'Neutralización directa del ácido gástrico.', 'Agonismo de los receptores de prostaglandina E1.'], 2],
  ['biofarmacia', 'Un fármaco con cinética de eliminación de primer orden tiene una semivida de 6 horas. Tras una dosis intravenosa única, ¿qué fracción de la dosis queda en el organismo a las 18 horas?', ['El 50 %.', 'El 25 %.', 'El 12,5 %.', 'El 6,25 %.'], 3],
  ['microbiologia', '¿Cuál de estos microorganismos es un bacilo gramnegativo no fermentador y oxidasa positivo, frecuente en infecciones relacionadas con la asistencia sanitaria?', ['Escherichia coli.', 'Pseudomonas aeruginosa.', 'Staphylococcus aureus.', 'Klebsiella pneumoniae.'], 2],
  ['fisicoquimica', 'Según la ecuación de Arrhenius, si aumenta la temperatura, la constante de velocidad de una reacción:', ['Disminuye.', 'No cambia.', 'Aumenta.', 'Solo cambia si hay un catalizador.'], 3],
  ['quimica_organica', 'Un haloalcano primario reacciona con un nucleófilo fuerte en un disolvente aprótico polar. ¿Qué mecanismo es el más probable?', ['Sustitución nucleófila unimolecular (SN1).', 'Sustitución nucleófila bimolecular (SN2).', 'Eliminación unimolecular (E1).', 'Adición electrófila.'], 2],
  ['tecnicas_instrumentales', 'Según la ley de Lambert-Beer, la absorbancia de una disolución es directamente proporcional a:', ['La transmitancia.', 'La concentración del analito y la longitud del paso óptico.', 'El cuadrado de la concentración del analito.', 'La longitud de onda de la radiación.'], 2],
  ['inmunologia', '¿Qué inmunoglobulina interviene principalmente en las reacciones de hipersensibilidad de tipo I?', ['IgG.', 'IgM.', 'IgA.', 'IgE.'], 4],
  ['toxicologia', '¿Cuál es el antídoto de elección en la intoxicación por paracetamol?', ['Naloxona.', 'Flumazenilo.', 'N-acetilcisteína.', 'Atropina.'], 3],
  ['bioquimica', '¿En qué compartimento de la célula eucariota tiene lugar el ciclo de Krebs?', ['En el citosol.', 'En la matriz mitocondrial.', 'En el retículo endoplasmático.', 'En la membrana mitocondrial externa.'], 2],
  ['tecnologia_farmaceutica', '¿Cuál es la función principal de un disgregante en la formulación de comprimidos?', ['Aumentar la cohesión entre las partículas durante la compresión.', 'Favorecer la rotura del comprimido cuando entra en contacto con líquidos.', 'Reducir la fricción entre el comprimido y la matriz.', 'Enmascarar el sabor del principio activo.'], 2],
  ['estadistica', 'En la evaluación de una prueba diagnóstica, ¿cómo se define la sensibilidad?', ['Proporción de sanos con resultado negativo.', 'Proporción de positivos que están realmente enfermos.', 'Proporción de enfermos con resultado positivo.', 'Proporción de negativos que están realmente sanos.'], 3],
  ['legislacion', 'En España, ¿qué organismo autoriza la comercialización de los medicamentos de uso humano por procedimiento nacional?', ['La Agencia Europea de Medicamentos (EMA).', 'La Agencia Española de Medicamentos y Productos Sanitarios (AEMPS).', 'El Consejo General de Colegios Oficiales de Farmacéuticos.', 'Las consejerías de sanidad de las comunidades autónomas.'], 2]
].map(([asig, enunciado, opciones, correcta], i) => ({id: 'demo-' + (i + 1), anio: 0, n: i + 1, asig, enunciado, opciones, correcta, anulada: false, imagen: false, demo: true}));

/* DEMO · recuentos FICTICIOS de 2015 a 2026 (no son datos reales): solo para ver la predicción funcionando */
function demoConteos() {
  const base = {farmacologia: 22, fisiologia: 14, bioquimica: 14, microbiologia: 14, fisicoquimica: 12, tecnicas_instrumentales: 10, biofarmacia: 10, quimica_farmaceutica: 9, quimica_organica: 9, tecnologia_farmaceutica: 10, inmunologia: 8, biologia_molecular: 7, farmacia_clinica: 10, fisiopatologia: 7, parasitologia: 5, analisis_clinicos: 6, estadistica: 7, legislacion: 6, nutricion: 5, toxicologia: 5, farmacognosia: 4, quimica_general: 6, biologia_celular: 4, botanica: 2};
  const r = rng('demo-oraculofir'), c = {};
  for (let y = 2015; y <= 2026; y++) {
    c[y] = {};
    for (const k in base) { const tr = k === 'farmacologia' || k === 'farmacia_clinica' ? (y - 2015) * 0.35 : k === 'botanica' || k === 'biologia_celular' ? -(y - 2015) * 0.25 : 0; c[y][k] = Math.max(0, Math.round(base[k] * 1.05 + tr + (r() - 0.5) * 5)); }
  }
  return c;
}

let DATA = {real: false, asignaturas: ASIGS_BASE, preguntas: DEMO_PREG, conteos: demoConteos(), examenes: [], generado: null};
const nombreAsig = id => t((DATA.asignaturas.find(a => a.id === id) || {nombre: id}).nombre);
/* Carga data/fir.json (mismo origen, en GitHub Pages). Abierta como fichero local o sin datos todavía → DEMO */
async function cargaDatos() {
  try {
    const r = await fetch('data/fir.json', {cache: 'no-cache'});
    if (!r.ok) throw 0;
    const j = await r.json();
    const ps = (j.preguntas || []).filter(q => q && q.enunciado && q.anio);
    if (ps.length < 100) throw 0;
    DATA = {real: true, asignaturas: j.asignaturas || ASIGS_BASE, preguntas: ps, conteos: conteos(ps), examenes: j.examenes || [], generado: j.generado || null, clasificacion: j.clasificacion || ''};
    try { const a = await (await fetch('data/asignaturas.json', {cache: 'no-cache'})).json(); DATA.kws = Object.fromEntries((a.asignaturas || []).map(x => [x.id, x.kw || []])); } catch { DATA.kws = {}; }
  } catch { /* se queda el DEMO */ }
  return DATA;
}
