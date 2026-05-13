// ═══════════════════════════════════════════════════════
//  JOTIQUE — datos.js
//  Edita este archivo con tus datos reales de Apple Health
// ═══════════════════════════════════════════════════════

// ── FOTOS ──────────────────────────────────────────────
// Sube tus fotos al repo y cambia las URLs por "./fotos/tu-foto.jpg"
const IMAGENES = {
  foto_running:   "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=900&q=80",
  foto_montana:   "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
  foto_gym:       "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80",
  foto_zapatilla: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
  foto_ruta_1:    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=700&q=80",
  foto_ruta_2:    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80",
  foto_ruta_3:    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80",
};

const JOTIQUE_DATA = {

  meta: {
    actualizado: "Mayo 2026",
  },

  // ─── RESUMEN GENERAL ────────────────────────────────
  resumen: {
    km_total:         842,
    km_mes_actual:    94,
    carreras_total:   67,
    rutas_montana:    12,
    km_montana_total: 148,
    pasos_total:      4820000,
    fc_reposo_min:    42,
    hrv_media:        68,
    sueno_promedio:   7.4,
  },

  // ─── MESES ──────────────────────────────────────────
  meses: [
    { mes:"Septiembre", km:72,  carreras:9,  record:false, activo:false, color:"run",   info:"Inicio de temporada. Vuelta progresiva tras el verano." },
    { mes:"Octubre",    km:88,  carreras:11, record:false, activo:false, color:"run",   info:"Buena progresión. Primer rodaje largo de más de 20km." },
    { mes:"Noviembre",  km:95,  carreras:12, record:false, activo:false, color:"run",   info:"Mejor mes otoñal. Series en pista introducidas." },
    { mes:"Diciembre",  km:68,  carreras:8,  record:false, activo:false, color:"muted", info:"Mes festivo. Volumen reducido pero constancia mantenida." },
    { mes:"Enero",      km:110, carreras:14, record:true,  activo:false, color:"heart", info:"🏆 Récord de volumen mensual. Pico de forma invernal." },
    { mes:"Febrero",    km:98,  carreras:12, record:false, activo:false, color:"run",   info:"Consolidación. Rodaje de 28km completado." },
    { mes:"Marzo",      km:105, carreras:13, record:false, activo:false, color:"run",   info:"Excelente mes. Ritmos mejorando semana a semana." },
    { mes:"Abril",      km:112, carreras:14, record:false, activo:false, color:"run",   info:"Mes de montaña combinado con asfalto. Gran variedad." },
    { mes:"Mayo",       km:94,  carreras:11, record:false, activo:true,  color:"run",   info:"Mes en curso. Datos parciales hasta hoy." },
  ],

  // ─── SESIONES RECIENTES (main dashboard) ────────────
  sesiones_recientes: [
    { tipo:"run",  nombre:"Rodaje mañana",    fecha:"Hoy", km:12.4, duracion:"1h 01m", ritmo:"4:55", kcal:640  },
    { tipo:"hike", nombre:"Sierra Crevillent",fecha:"Dom", km:18.2, duracion:"4h 30m", ritmo:null,   kcal:1100 },
    { tipo:"run",  nombre:"Series 1km × 8",   fecha:"Vie", km:14.0, duracion:"58m",    ritmo:"4:08", kcal:720  },
    { tipo:"run",  nombre:"Fondo largo",       fecha:"Mié", km:22.6, duracion:"1h 52m", ritmo:"4:58", kcal:1180 },
    { tipo:"run",  nombre:"Regenerativo suave",fecha:"Mar", km:8.1,  duracion:"44m",    ritmo:"5:26", kcal:410  },
  ],

  // ─── CARRERAS COMPLETAS ─────────────────────────────
  carreras: [
    { fecha:"12 May", nombre:"Rodaje mañana",     km:12.4, duracion:"1h 01m",  ritmo:"4:55", fc_avg:148, fc_max:168, kcal:640,  dplus:85,  record:false, race:false, gold:false, gps_id:null,      nota:"" },
    { fecha:"07 May", nombre:"Series 1km × 8",    km:14.0, duracion:"58m",     ritmo:"4:08", fc_avg:172, fc_max:186, kcal:720,  dplus:40,  record:true,  race:false, gold:false, gps_id:null,      nota:"Mejor ritmo de la temporada en series" },
    { fecha:"05 May", nombre:"Fondo largo",        km:22.6, duracion:"1h 52m",  ritmo:"4:58", fc_avg:152, fc_max:174, kcal:1180, dplus:210, record:false, race:false, gold:true,  gps_id:"fondo1",  nota:"Mayor distancia del mes" },
    { fecha:"02 May", nombre:"Regenerativo",       km:8.1,  duracion:"44m",     ritmo:"5:26", fc_avg:128, fc_max:145, kcal:410,  dplus:30,  record:false, race:false, gold:false, gps_id:null,      nota:"" },
    { fecha:"28 Abr", nombre:"Media Maratón Elda", km:21.1, duracion:"1h 33m",  ritmo:"4:23", fc_avg:174, fc_max:188, kcal:1050, dplus:180, record:false, race:true,  gold:false, gps_id:"mm_elda", nota:"🥈 Puesto 23 AG. Nuevo PB personal — 1:33:12" },
    { fecha:"24 Abr", nombre:"Rodaje Z2",          km:16.8, duracion:"1h 28m",  ritmo:"5:15", fc_avg:140, fc_max:158, kcal:860,  dplus:120, record:false, race:false, gold:false, gps_id:null,      nota:"" },
    { fecha:"21 Abr", nombre:"Tempo 10km",         km:10.0, duracion:"41m 20s", ritmo:"4:08", fc_avg:169, fc_max:183, kcal:520,  dplus:55,  record:false, race:false, gold:false, gps_id:null,      nota:"" },
    { fecha:"17 Abr", nombre:"Fondo + progresivo", km:20.0, duracion:"1h 42m",  ritmo:"5:06", fc_avg:150, fc_max:178, kcal:1030, dplus:190, record:false, race:false, gold:false, gps_id:null,      nota:"" },
    { fecha:"14 Abr", nombre:"Series 400m × 12",   km:10.5, duracion:"52m",     ritmo:"4:57", fc_avg:168, fc_max:187, kcal:550,  dplus:20,  record:false, race:false, gold:false, gps_id:null,      nota:"" },
    { fecha:"10 Abr", nombre:"Rodaje nocturno",     km:13.2, duracion:"1h 08m",  ritmo:"5:08", fc_avg:144, fc_max:162, kcal:680,  dplus:95,  record:false, race:false, gold:false, gps_id:null,      nota:"" },
  ],

  // ─── ZONAS FC ────────────────────────────────────────
  zonas_fc: [
    { zona:"Z1 Base",     pct:12, color:"var(--slp)"  },
    { zona:"Z2 Aeróbico", pct:48, color:"var(--mnt)"  },
    { zona:"Z3 Tempo",    pct:24, color:"var(--run)"  },
    { zona:"Z4 Umbral",   pct:11, color:"var(--gold)" },
    { zona:"Z5 VO₂max",   pct:5,  color:"var(--heart)"},
  ],

  // ─── PASOS MENSUALES ────────────────────────────────
  pasos_mensuales: [
    { mes:"Sep", pasos:480000, activo:false },
    { mes:"Oct", pasos:520000, activo:false },
    { mes:"Nov", pasos:560000, activo:false },
    { mes:"Dic", pasos:440000, activo:false },
    { mes:"Ene", pasos:640000, activo:false },
    { mes:"Feb", pasos:580000, activo:false },
    { mes:"Mar", pasos:620000, activo:false },
    { mes:"Abr", pasos:660000, activo:false },
    { mes:"May", pasos:320000, activo:true  },
  ],

  // ─── RÉCORDS ─────────────────────────────────────────
  records: [
    { id:"mayor_km",    emoji:"📏", label:"Mayor distancia",  valor:"28.4", unidad:"km",    fecha:"Feb 2026", color:"var(--run)",   info:"Rodaje largo del 16 de febrero. Ritmo 5:04/km. FC media 148ppm." },
    { id:"mejor_ritmo", emoji:"⚡", label:"Mejor ritmo",      valor:"4:08", unidad:"/km",   fecha:"May 2026", color:"var(--heart)", info:"Series 1km × 8 del 7 de mayo. FC máxima 186ppm." },
    { id:"mayor_dplus", emoji:"⛰️", label:"Mayor D+",         valor:"1.240",unidad:"m",     fecha:"Abr 2026", color:"var(--mnt)",   info:"Ruta Penyagolosa. 28km y 6h en montaña." },
    { id:"mejor_pb",    emoji:"🏅", label:"PB media maratón", valor:"1:33", unidad:"hh:mm", fecha:"Abr 2026", color:"var(--gold)",  info:"Media Maratón de Elda. Ritmo 4:23/km. Puesto 23 AG." },
  ],

  // ─── ZAPATILLA PRINCIPAL (fichas de carrera) ────────
  zapatilla: {
    modelo:        "Nike Vomero 18",
    color:         "Negro / Naranja",
    amortiguacion: "ZoomX + React",
  },

  // ─── ZAPATILLAS (selector dashboard) ────────────────
  zapatillas: [
    {
      id:            "vomero18",
      emoji:         "🟠",
      modelo:        "Nike Vomero 18",
      accent:        "#ff8c00",
      accent2:       "#ff4500",
      descripcion:   "La zapatilla de rodaje diario por excelencia. ZoomX en talón y React en antepié. Ideal para fondos largos y regenerativos.",
      km_acumulados: 420,
      km_vida_util:  800,
      specs: [
        { k:"Drop",         v:"10 mm"   },
        { k:"Peso",         v:"310 g"   },
        { k:"Stack",        v:"40 mm"   },
        { k:"Terreno",      v:"Asfalto" },
        { k:"Amortiguación",v:"ZoomX"   },
        { k:"Uso",          v:"Diario"  },
      ],
    },
    {
      id:            "vomeroplus",
      emoji:         "🟢",
      modelo:        "Nike Vomero Plus",
      accent:        "#00c896",   // verde
      accent2:       "#00e8af",
      descripcion:   "Versión maximalista con stack de 46mm. Perfecta para regenerativos lentos y recuperación activa. Sensación de correr sobre nubes.",
      km_acumulados: 180,
      km_vida_util:  700,
      specs: [
        { k:"Drop",         v:"8 mm"        },
        { k:"Peso",         v:"330 g"        },
        { k:"Stack",        v:"46 mm"        },
        { k:"Terreno",      v:"Asfalto"      },
        { k:"Amortiguación",v:"React foam"   },
        { k:"Uso",          v:"Regenerativo" },
      ],
    },
  ],

  // ─── SUEÑO ───────────────────────────────────────────
  sueno: [
    { dia:1,  fecha:"1 Abr",  deep:1.6, rem:1.8, core:3.8, total:7.4, puntuacion:88 },
    { dia:2,  fecha:"2 Abr",  deep:1.2, rem:1.4, core:3.6, total:6.4, puntuacion:72 },
    { dia:3,  fecha:"3 Abr",  deep:1.9, rem:2.0, core:3.7, total:7.8, puntuacion:93 },
    { dia:4,  fecha:"4 Abr",  deep:1.4, rem:1.6, core:3.4, total:6.6, puntuacion:76 },
    { dia:5,  fecha:"5 Abr",  deep:1.7, rem:1.9, core:3.9, total:7.6, puntuacion:90 },
    { dia:6,  fecha:"6 Abr",  deep:1.1, rem:1.3, core:3.2, total:5.8, puntuacion:64 },
    { dia:7,  fecha:"7 Abr",  deep:2.0, rem:2.1, core:4.0, total:8.2, puntuacion:96 },
    { dia:8,  fecha:"8 Abr",  deep:1.5, rem:1.7, core:3.6, total:7.0, puntuacion:82 },
    { dia:9,  fecha:"9 Abr",  deep:1.3, rem:1.5, core:3.4, total:6.4, puntuacion:74 },
    { dia:10, fecha:"10 Abr", deep:1.8, rem:2.0, core:3.8, total:7.8, puntuacion:92 },
    { dia:11, fecha:"11 Abr", deep:1.6, rem:1.8, core:3.7, total:7.4, puntuacion:87 },
    { dia:12, fecha:"12 Abr", deep:1.4, rem:1.6, core:3.5, total:6.8, puntuacion:79 },
    { dia:13, fecha:"13 Abr", deep:1.9, rem:2.0, core:4.1, total:8.2, puntuacion:95 },
    { dia:14, fecha:"14 Abr", deep:1.2, rem:1.4, core:3.3, total:6.2, puntuacion:70 },
  ],

  // ─── HRV (14 días) ───────────────────────────────────
  hrv: [58, 62, 71, 65, 74, 68, 72, 61, 69, 75, 70, 66, 73, 68],

  // ─── FC DIARIA ───────────────────────────────────────
  fc_diaria: [
    { dia:"L", avg:58,  color:"mnt"   },
    { dia:"M", avg:142, color:"heart" },
    { dia:"X", avg:56,  color:"mnt"   },
    { dia:"J", avg:148, color:"heart" },
    { dia:"V", avg:155, color:"heart" },
    { dia:"S", avg:60,  color:"mnt"   },
    { dia:"D", avg:54,  color:"mnt"   },
    { dia:"L", avg:145, color:"heart" },
    { dia:"M", avg:57,  color:"mnt"   },
    { dia:"X", avg:152, color:"heart" },
    { dia:"J", avg:58,  color:"mnt"   },
    { dia:"V", avg:160, color:"heart" },
    { dia:"S", avg:62,  color:"mnt"   },
    { dia:"D", avg:55,  color:"mnt"   },
  ],

  // ─── RUTAS DE MONTAÑA ────────────────────────────────
  rutas: [
    { id:"crevillent1",  num:"01", nombre:"Sierra Crevillent — Cresta Norte",  fecha:"6 Abr 2026",  km:18.2, dplus:840,  fc_avg:148, kcal:1100, record:false, pendiente:false, nota:"Ruta clásica de la sierra local. Vistas al Mar Menor.",     center:[38.26,-0.82] },
    { id:"mariola1",     num:"02", nombre:"Serra Mariola — Cim de la Mariola", fecha:"20 Abr 2026", km:22.4, dplus:1060, fc_avg:152, kcal:1350, record:false, pendiente:false, nota:"Cumbre principal de la Mariola. Flora protegida y vistas 360°.", center:[38.72,-0.55] },
    { id:"penyagolosa1", num:"03", nombre:"Penyagolosa — Cim 1.813m",          fecha:"27 Abr 2026", km:28.0, dplus:1240, fc_avg:156, kcal:1680, record:true,  pendiente:false, nota:"🏆 Mayor desnivel de la temporada. Pico más alto de la CV.",  center:[40.23,-0.35] },
    { id:"crevillent2",  num:"04", nombre:"Vuelta al Pico del Águila",         fecha:"4 May 2026",  km:14.8, dplus:680,  fc_avg:144, kcal:880,  record:false, pendiente:false, nota:"",                                                            center:[38.26,-0.82] },
    { id:"aitana1",      num:"05", nombre:"Serra Aitana — Cim 1.558m",         fecha:"11 May 2026", km:19.6, dplus:980,  fc_avg:151, kcal:1180, record:false, pendiente:true,  nota:"Próxima ruta planificada.",                                    center:[38.65,-0.26] },
  ],

  // ─── GPS ─────────────────────────────────────────────
  // Formato por punto: [latitud, longitud, altitud_metros]
  // Exporta desde Garmin Connect / Strava / Wikiloc como GPX
  // y pega aquí las coordenadas.
  gps: {
    crevillent1: [
      [38.245,-0.832,380],[38.248,-0.829,395],[38.252,-0.825,420],[38.257,-0.820,460],
      [38.262,-0.815,510],[38.268,-0.810,565],[38.273,-0.806,620],[38.278,-0.802,680],
      [38.282,-0.799,720],[38.286,-0.796,760],[38.289,-0.794,800],[38.291,-0.792,830],
      [38.290,-0.790,840],[38.287,-0.788,820],[38.283,-0.786,790],[38.278,-0.784,750],
      [38.272,-0.782,700],[38.266,-0.783,640],[38.260,-0.785,580],[38.254,-0.789,510],
      [38.249,-0.794,450],[38.245,-0.800,410],[38.243,-0.808,385],[38.245,-0.820,380],
    ],
    mariola1: [
      [38.705,-0.558,680],[38.710,-0.552,720],[38.716,-0.546,780],[38.722,-0.540,850],
      [38.728,-0.534,920],[38.733,-0.528,990],[38.737,-0.522,1050],[38.740,-0.516,1100],
      [38.742,-0.510,1140],[38.743,-0.504,1160],[38.741,-0.498,1140],[38.737,-0.492,1090],
      [38.731,-0.488,1020],[38.724,-0.486,950],[38.716,-0.488,880],[38.708,-0.492,800],
      [38.700,-0.498,730],[38.693,-0.506,680],[38.690,-0.518,660],[38.695,-0.535,668],
      [38.700,-0.548,675],[38.705,-0.558,680],
    ],
    penyagolosa1: [
      [40.218,-0.358,1200],[40.222,-0.352,1260],[40.226,-0.346,1320],[40.230,-0.340,1390],
      [40.234,-0.334,1450],[40.238,-0.328,1520],[40.241,-0.322,1580],[40.243,-0.316,1640],
      [40.244,-0.310,1700],[40.245,-0.305,1740],[40.244,-0.300,1780],[40.242,-0.296,1800],
      [40.240,-0.293,1813],[40.237,-0.292,1800],[40.233,-0.294,1760],[40.228,-0.298,1700],
      [40.222,-0.303,1620],[40.215,-0.310,1540],[40.208,-0.318,1460],[40.201,-0.326,1380],
      [40.194,-0.334,1300],[40.188,-0.342,1230],[40.183,-0.350,1200],[40.180,-0.356,1195],
      [40.183,-0.360,1200],[40.190,-0.360,1205],[40.200,-0.358,1202],[40.210,-0.358,1200],
      [40.218,-0.358,1200],
    ],
    crevillent2: [
      [38.252,-0.828,360],[38.256,-0.824,390],[38.261,-0.819,430],[38.266,-0.814,480],
      [38.271,-0.809,540],[38.275,-0.804,600],[38.278,-0.800,650],[38.280,-0.797,680],
      [38.278,-0.794,660],[38.274,-0.792,630],[38.269,-0.794,580],[38.263,-0.798,520],
      [38.257,-0.804,460],[38.252,-0.814,400],[38.249,-0.823,365],[38.252,-0.828,360],
    ],
    fondo1: [
      [38.240,-0.840,210],[38.244,-0.835,218],[38.249,-0.829,226],[38.254,-0.823,238],
      [38.260,-0.816,252],[38.266,-0.810,268],[38.272,-0.803,285],[38.278,-0.796,302],
      [38.284,-0.789,320],[38.289,-0.782,338],[38.294,-0.775,355],[38.298,-0.768,370],
      [38.296,-0.761,358],[38.291,-0.756,342],[38.285,-0.753,325],[38.278,-0.752,308],
      [38.271,-0.754,290],[38.264,-0.758,272],[38.257,-0.764,254],[38.250,-0.771,236],
      [38.244,-0.779,220],[38.240,-0.790,213],[38.239,-0.802,211],[38.240,-0.815,210],
      [38.240,-0.840,210],
    ],
    mm_elda: [
      [38.478,-0.800,440],[38.482,-0.795,445],[38.487,-0.789,452],[38.492,-0.782,460],
      [38.497,-0.775,468],[38.502,-0.768,475],[38.506,-0.761,480],[38.510,-0.754,478],
      [38.513,-0.747,474],[38.515,-0.740,470],[38.513,-0.733,472],[38.509,-0.727,468],
      [38.504,-0.722,462],[38.498,-0.718,455],[38.491,-0.716,448],[38.484,-0.718,444],
      [38.477,-0.723,440],[38.471,-0.730,438],[38.466,-0.738,436],[38.462,-0.747,435],
      [38.460,-0.758,436],[38.462,-0.769,438],[38.466,-0.779,440],[38.472,-0.788,442],
      [38.478,-0.800,440],
    ],
  },

};
