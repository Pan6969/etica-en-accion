/* Contenido académico resumido a partir de los documentos incluidos en el ZIP.
   Los ejemplos marcados como ilustrativos no representan casos reales. */
const ETICA_TOPICS = [
  {
    id: 'fundamentos',
    label: 'Fundamentos de ética',
    number: '01',
    symbol: '✦',
    title: 'La ética es una brújula para decidir.',
    intro: 'Examinar las decisiones, sus razones y sus consecuencias permite actuar con criterio, incluso cuando no existe una respuesta sencilla.',
    image: 'assets/etica-profesional.png',
    imageAlt: 'Imagen del material académico sobre ética profesional y relaciones de trabajo',
    source: 'Ética y responsabilidad social · Fundamentos',
    sourceHref: 'assets/fundamentos.pdf',
    sections: [
      { heading: 'Ética y moral: relacionadas, pero distintas', body: 'La moral reúne normas, valores y costumbres que orientan la vida de una comunidad. La ética examina críticamente esos criterios: pregunta por qué una acción se considera correcta, si puede justificarse y qué consecuencias produce. Una costumbre aceptada también puede cuestionarse.' },
      { heading: 'Ética profesional', body: 'Aplica principios éticos al ejercicio de una actividad. Supone observar la honestidad, respetar a las personas, cumplir compromisos y manejar la información con responsabilidad. La ética ayuda a regular decisiones y acciones dentro de una profesión.' },
      { heading: 'Ética en las relaciones humanas', body: 'Las relaciones humanas implican la interacción entre dos o más personas. Se desarrollan reconociendo la cultura y las normas de los demás, compartiendo, conviviendo y comunicándose con respeto.' },
      { heading: 'Dimensión interna y externa de la ética empresarial', body: 'La dimensión interna comprende el trato a los trabajadores, la gestión de recursos humanos, la igualdad, la remuneración y la confidencialidad. La dimensión externa abarca las relaciones con clientes, proveedores, autoridades, comunidades y medioambiente.' },
      { heading: 'Confianza, imagen y legitimidad', body: 'La pérdida de confianza puede alejar a clientes, trabajadores y otros grupos de interés. Una conducta coherente fortalece la imagen y la legitimidad de la organización y ayuda a construir relaciones duraderas.' },
      { heading: 'Problemas éticos que deben prevenirse', body: 'En el ámbito interno: desigualdad, acoso laboral o mobbing, retribución injusta, falta de confidencialidad y vulneraciones legales. En el externo: falta de transparencia, publicidad engañosa, corrupción, incumplimientos frente a terceros y falta de respeto por el medioambiente.' }
    ],
    example: 'Una campaña puede aumentar las ventas y, al mismo tiempo, inducir a error al consumidor. La reflexión ética exige revisar la veracidad del mensaje y sus efectos, además del resultado comercial.'
  },
  {
    id: 'codigo',
    label: 'Código de ética',
    number: '02',
    symbol: '§',
    title: 'Los valores necesitan convertirse en conducta.',
    intro: 'Un código de ética orienta las decisiones de una organización y ayuda a construir comportamientos basados en principios compartidos.',
    image: 'assets/codigo.png',
    imageAlt: 'Vista previa del documento académico Código de ética',
    source: 'Código de ética',
    sourceHref: 'assets/codigo.pdf',
    sections: [
      { heading: '¿Qué es un código de ética?', body: 'Es un conjunto de principios, valores y normas que orientan la manera correcta de actuar dentro de una institución, empresa, profesión u organización. Busca facilitar decisiones responsables y promover comportamientos íntegros.' },
      { heading: 'Principios fundamentales', body: 'Honestidad: actuar con verdad. Responsabilidad: asumir las consecuencias. Respeto: reconocer la dignidad y los derechos. Imparcialidad: decidir sin favoritismos. Transparencia: hacer comprensibles y verificables las actuaciones. Integridad: mantener coherencia entre lo que se dice y se hace. Confidencialidad: proteger la información reservada.' },
      { heading: 'Código de ética y código de conducta', body: 'El código de ética expresa principios generales, por ejemplo: “actuamos con integridad y transparencia”. El código de conducta traduce esos principios en comportamientos concretos, por ejemplo: “informamos cualquier situación que pueda representar un conflicto de intereses”. Se complementan; no son lo mismo.' },
      { heading: 'Conflictos de intereses: real, potencial y aparente', body: 'Un conflicto aparece cuando los intereses personales, familiares, económicos o profesionales pueden interferir, o parecer interferir, con el cumplimiento imparcial de una responsabilidad. Es real si ya influye en la decisión; potencial si podría hacerlo más adelante; y aparente si las circunstancias generan una percepción razonable de parcialidad.' },
      { heading: 'Flujo de actuación ante un conflicto', body: 'Identificar el interés involucrado; analizar su relación con la decisión; declarar la situación a la instancia correspondiente; evitar intervenir cuando la imparcialidad esté comprometida; seguir el procedimiento institucional; documentar lo necesario; y pedir orientación si existen dudas.' }
    ],
    example: 'Si participas en la evaluación de una oferta presentada por una empresa de un familiar, declarar el vínculo permite que la organización valore el riesgo y decida cómo gestionar tu participación.'
  },
  {
    id: 'desarrollo',
    label: 'Crecimiento y desarrollo',
    number: '03',
    symbol: '↗',
    title: 'Crecer no lo explica todo.',
    intro: 'El crecimiento económico observa cuánto produce una economía. El desarrollo pregunta cómo esa capacidad productiva mejora las condiciones de vida y cómo se distribuyen sus beneficios.',
    image: 'assets/desarrollo.png',
    imageAlt: 'Vista previa del material académico sobre crecimiento y desarrollo económico',
    source: 'Crecimiento y desarrollo económico',
    sourceHref: 'assets/desarrollo.pdf',
    sections: [
      { heading: 'Crecimiento económico: producir más', body: 'Es el aumento de la cantidad de bienes y servicios producidos durante un periodo. El material lo relaciona con la variación porcentual del producto interno bruto (PIB), que mide el valor de la producción final de una economía.' },
      { heading: 'Desarrollo económico: mejorar el bienestar', body: 'Es un proceso más amplio que busca elevar las condiciones de vida y hacer que los bienes, servicios y oportunidades alcancen a distintos grupos sociales. Incluye aspectos como salud, educación, infraestructura y distribución de ingresos y riqueza.' },
      { heading: 'Capital físico y capital humano', body: 'El capital físico reúne herramientas, maquinaria y equipos que facilitan producir. El capital humano comprende conocimientos y capacidades de las personas; la formación y la capacitación contribuyen a fortalecerlo.' },
      { heading: 'Tecnología y recursos naturales', body: 'La tecnología combina insumos, maquinaria y conocimientos para mejorar la producción. Los recursos naturales son parte de la actividad económica, pero requieren un aprovechamiento responsable.' },
      { heading: 'Inversión, consumo, ahorro y políticas públicas', body: 'También influyen la inversión, el nivel de consumo, las políticas gubernamentales, el fomento al ahorro y las tasas de interés. Estos factores inciden en la actividad económica y en las posibilidades de desarrollo.' },
      { heading: 'La pregunta ética del desarrollo', body: 'Producir más no garantiza por sí solo bienestar distribuido. Es necesario preguntar quién recibe los beneficios, quién asume los costos y qué efectos se generan sobre las condiciones laborales, las oportunidades y el ambiente.' }
    ],
    example: 'Una fábrica aumenta su producción, pero contamina el agua de una comunidad. La cifra de producción puede mostrar crecimiento; para valorar su aporte al desarrollo también hay que considerar salud, ambiente y condiciones laborales.'
  },
  {
    id: 'poder',
    label: 'Poder público en Colombia',
    number: '04',
    symbol: '⚖',
    title: 'El poder público implica rendir cuentas.',
    intro: 'Las funciones del Estado se distribuyen entre ramas con responsabilidades diferenciadas. La ética pública exige transparencia, imparcialidad y servicio al interés general.',
    image: 'assets/poder.png',
    imageAlt: 'Vista previa del material académico sobre las ramas del poder público en Colombia',
    source: 'Ramas del poder público en Colombia',
    sourceHref: 'assets/poder.pdf',
    sections: [
      { heading: 'Rama legislativa: elaborar leyes y ejercer control político', body: 'Tiene la función de elaborar y modificar leyes y realizar control político sobre la acción del Gobierno. La responsabilidad ética exige deliberar con transparencia y representar el interés general.' },
      { heading: 'Rama ejecutiva: gobernar y administrar', body: 'Dirige la acción gubernamental y administra políticas y recursos públicos. Su ejercicio responsable requiere servicio, imparcialidad, evitar favoritismos y explicar el uso de los recursos.' },
      { heading: 'Rama judicial: administrar justicia', body: 'Administra justicia. La independencia, la imparcialidad y el respeto de los derechos son esenciales para que las decisiones no respondan a beneficios personales ni a presiones indebidas.' },
      { heading: 'Organismos de control y organización electoral', body: 'Los materiales también abordan órganos de control y la organización electoral. Son instituciones diferenciadas: no constituyen una cuarta rama del poder público. Su función se relaciona con el control, la vigilancia y la organización de procesos democráticos.' },
      { heading: 'Transparencia y ciudadanía', body: 'La participación ciudadana, el control y la rendición de cuentas permiten vigilar el ejercicio del poder. Esta guía presenta funciones generales y evita reproducir cifras de integrantes, nombres de titulares o detalles institucionales históricos de las diapositivas.' }
    ],
    example: 'En una contratación pública deben existir criterios claros y verificables. Favorecer a una persona por una relación privada compromete la imparcialidad y la confianza en el uso de los recursos colectivos.'
  },
  {
    id: 'gobierno',
    label: 'Gobierno corporativo',
    number: '05',
    symbol: '⌘',
    title: 'Gobernar bien es distribuir responsabilidades.',
    intro: 'El gobierno corporativo reúne las prácticas que ordenan las relaciones entre propietarios, órganos de dirección y administración.',
    image: 'assets/documentos/gobierno-corporativo.pdf',
    imageAlt: 'Documento académico de referencia sobre gobierno corporativo',
    source: 'Gobierno corporativo: ¿qué es?',
    sourceHref: 'assets/documentos/gobierno-corporativo.pdf',
    sections: [
      { heading: '¿Qué es el gobierno corporativo?', body: 'Es el conjunto de prácticas, expresadas formalmente o no, que gobiernan las relaciones entre los participantes de una empresa, principalmente entre quienes administran y quienes aportan recursos, como propietarios y prestamistas.' },
      { heading: 'Accionistas o propietarios', body: 'Aportan capital y participan en las decisiones que les corresponden, como la designación de órganos de dirección y asuntos relevantes de la empresa.' },
      { heading: 'Junta directiva o directorio', body: 'Orienta la dirección general y participa en decisiones sustantivas, como objetivos, planes de inversión y líneas principales del negocio, dentro de las funciones que tenga asignadas.' },
      { heading: 'Administración o gerencia', body: 'Opera la empresa en el día a día y ejecuta las decisiones y planes. La claridad de funciones y la rendición de cuentas ayudan a evitar conflictos y vacíos de responsabilidad.' },
      { heading: 'Principios de un buen gobierno', body: 'Eficiencia: generar valor utilizando adecuadamente los recursos. Equidad: tratar con criterios justos. Respeto de los derechos: proteger los derechos de los participantes. Cumplimiento responsable: atender obligaciones y compromisos. Transparencia: proporcionar información relevante de forma clara.' },
      { heading: 'Beneficios', body: 'Puede mitigar conflictos, fortalecer la reputación y la confianza, facilitar el acceso a financiación, apoyar procesos eficientes, detectar errores y mejorar la claridad de las decisiones y la sostenibilidad financiera.' }
    ],
    example: 'Una junta que revisa periódicamente la información de la gerencia y solicita auditorías contribuye a que las decisiones sean comprensibles y puedan ser evaluadas.'
  },
  {
    id: 'rse',
    label: 'Responsabilidad social',
    number: '06',
    symbol: '◎',
    title: 'La responsabilidad no termina en la empresa.',
    intro: 'La RSE considera los impactos económicos, sociales y ambientales de las decisiones y actividades de una organización.',
    image: 'assets/rse.png',
    imageAlt: 'Vista previa de la presentación sobre normas y estándares en ética y responsabilidad social empresarial',
    source: 'Normas y estándares en ética y RSE',
    sourceHref: 'assets/rse.pdf',
    sections: [
      { heading: 'Responsabilidad social empresarial', body: 'Implica actuar de manera ética y transparente, considerar las expectativas de los grupos de interés, cumplir la legislación aplicable e integrar la responsabilidad social en la organización y sus relaciones.' },
      { heading: 'Grupos de interés o stakeholders', body: 'Son personas, organizaciones o colectivos que pueden influir en una empresa o verse afectados por sus decisiones, actividades y resultados. Entre ellos están trabajadores, consumidores, proveedores, propietarios, comunidades, autoridades y medioambiente.' },
      { heading: 'ISO 26000', body: 'Es una guía que orienta la responsabilidad social y la integración de sus temas en la gestión. El material indica que no es una norma certificable.' },
      { heading: 'SA8000 y AA1000 SES', body: 'SA8000 se centra en condiciones sociales y laborales, con referencia a derechos humanos y estándares laborales. AA1000 SES aborda el diálogo y la participación de grupos de interés; el material la presenta como auditable, pero no certificable.' },
      { heading: 'GRI', body: 'Ofrece herramientas de reporte para comunicar políticas, objetivos e impactos económicos, sociales y ambientales. Reportar no demuestra por sí solo que el desempeño sea responsable: la información debe permitir evaluar la gestión.' },
      { heading: 'Pacto Global: diez principios en cuatro áreas', body: 'Los diez principios se agrupan en derechos humanos, estándares laborales, medioambiente y lucha contra la corrupción. Se presentan completos en la lista desplegable que sigue.' }
    ],
    principles: [
      'Apoyar y respetar la protección de los derechos humanos reconocidos universalmente.',
      'Asegurarse de no actuar como cómplice de vulneraciones de derechos humanos.',
      'Respetar la libertad de asociación y el reconocimiento efectivo de la negociación colectiva.',
      'Apoyar la eliminación del trabajo forzoso o realizado bajo coacción.',
      'Apoyar la abolición efectiva del trabajo infantil.',
      'Apoyar la eliminación de la discriminación en el empleo y la ocupación.',
      'Aplicar un enfoque de precaución frente a los desafíos ambientales.',
      'Promover iniciativas para una mayor responsabilidad ambiental.',
      'Favorecer el desarrollo y la difusión de tecnologías respetuosas con el medioambiente.',
      'Trabajar contra la corrupción en todas sus formas, incluidas la extorsión y el soborno.'
    ],
    example: 'Una empresa identifica riesgos laborales en proveedores, dialoga con los grupos afectados, acuerda mejoras y comunica los resultados. La RSE se integra en la operación y no se limita a una campaña de imagen.'
  },
  {
    id: 'consumidor',
    label: 'Consumidor, justicia y equidad',
    number: '07',
    symbol: '◇',
    title: 'Proteger a las personas también es hacer empresa.',
    intro: 'La seguridad del producto, la información clara y la equidad ayudan a equilibrar relaciones en las que las empresas suelen tener más información y capacidad de decisión.',
    image: 'assets/documentos/grupos-interes-consumidor.pdf',
    imageAlt: 'Documento académico de referencia sobre grupos de interés, consumidor, justicia social y equidad',
    source: 'Grupos de interés, seguridad del consumidor y equidad',
    sourceHref: 'assets/documentos/grupos-interes-consumidor.pdf',
    sections: [
      { heading: 'Seguridad del producto', body: 'Comprende garantías y protecciones para las personas que adquieren o utilizan bienes y servicios. Desde la ética empresarial, el consumidor no debe ser engañado, manipulado ni expuesto a riesgos injustificados para favorecer el interés económico de una organización.' },
      { heading: 'Derechos del consumidor señalados en el material', body: 'El documento relaciona estos derechos con la Ley 1480 de 2011 (Estatuto del Consumidor de Colombia): recibir productos de calidad; seguridad; información clara, veraz, suficiente y oportuna; no ser engañado; reclamar; contar con protección contractual; elegir libremente; y acceder a educación y participación.' },
      { heading: 'Deberes éticos frente al consumidor', body: 'Evitar publicidad engañosa; informar precios totales y cargos adicionales; respetar promociones; proteger datos personales; atender quejas oportunamente; ofrecer soluciones justas frente a errores o incumplimientos; y no aprovecharse de la desinformación o vulnerabilidad.' },
      { heading: 'Justicia laboral', body: 'Promover remuneración justa, condiciones de trabajo dignas, prevención del acoso y la discriminación, oportunidades transparentes de formación y respeto por la salud, la seguridad y la dignidad humana.' },
      { heading: 'Inclusión y diversidad', body: 'Eliminar barreras para personas con discapacidad, promover oportunidades sin discriminación y facilitar la participación de grupos históricamente excluidos.' },
      { heading: 'Equidad económica, territorial y ambiental', body: 'Promover condiciones comerciales justas, evitar abusos frente a trabajadores y pequeños proveedores, generar empleo local, respetar comunidades y utilizar los recursos considerando el bienestar de las generaciones futuras.' }
    ],
    example: 'Una agencia turística comunica desde el principio el precio total, las exclusiones y las condiciones de cancelación; además, adapta sus actividades para que personas mayores o con discapacidad puedan participar.'
  },
  {
    id: 'voluntariado',
    label: 'Fundaciones y voluntariado',
    number: '08',
    symbol: '♡',
    title: 'El compromiso social necesita organización.',
    intro: 'El voluntariado corporativo conecta las capacidades y el tiempo de los empleados con proyectos que buscan apoyar a comunidades locales o grupos desfavorecidos.',
    image: 'assets/documentos/fundaciones-voluntariado.pdf',
    imageAlt: 'Documento académico sobre fundaciones y voluntariado corporativo',
    source: 'Fundaciones y voluntariados corporativos',
    sourceHref: 'assets/documentos/fundaciones-voluntariado.pdf',
    sections: [
      { heading: 'Fundaciones y organizaciones aliadas', body: 'En los materiales, las fundaciones aparecen como organizaciones que pueden seleccionarse para desarrollar iniciativas y programas de voluntariado. El documento invita a describir su concepto, finalidad y programa; no desarrolla una definición jurídica completa, por lo que esta guía no atribuye una forma legal específica.' },
      { heading: '¿Qué es el voluntariado corporativo?', body: 'Utiliza el tiempo, las capacidades y la participación de los empleados de una empresa para promover el desarrollo de comunidades locales o grupos desfavorecidos. Busca conectar la participación de los trabajadores con una misión social y cooperar con organizaciones y comunidades.' },
      { heading: 'Beneficios para la comunidad y la empresa', body: 'Puede aportar capacidades y apoyo a las comunidades beneficiarias. En la empresa puede fortalecer la comunicación interna, el trabajo en equipo y la motivación, y permite que los trabajadores participen en objetivos colectivos.' },
      { heading: 'Cómo se organiza un programa', body: 'El material distingue cuatro fases: identificación, preparación, ejecución, y seguimiento y evaluación. Selecciona cada fase de la línea de tiempo para conocer actividades y entregables.' }
    ],
    example: 'Una empresa y una organización comunitaria acuerdan un proyecto, definen responsabilidades y recursos, acompañan a los voluntarios y evalúan los resultados con indicadores acordados.'
  },
  {
    id: 'sostenibilidad',
    label: 'Sostenibilidad y ODS',
    number: '09',
    symbol: '∞',
    title: 'Pensar en el futuro cambia las decisiones de hoy.',
    intro: 'La sostenibilidad combina viabilidad económica, bienestar social y protección ambiental. Los ODS ofrecen un marco compartido para orientar acciones.',
    image: 'assets/hero.webp',
    imageAlt: 'Composición simbólica de una balanza, un árbol y una escalera de piedra',
    source: 'Guía de contenido sobre ética, sostenibilidad y ODS',
    sourceHref: 'assets/documentos/guia-etica-sostenibilidad-ods.docx',
    sections: [
      { heading: '¿Qué es sostenibilidad?', body: 'Consiste en satisfacer las necesidades actuales sin comprometer la capacidad de las futuras generaciones para satisfacer sus propias necesidades. No se limita al cuidado ambiental: considera también el bienestar social y la viabilidad económica.' },
      { heading: 'Tres dimensiones relacionadas', body: 'Económica: rentabilidad responsable, empleo e innovación. Social: equidad, inclusión, derechos humanos y reducción de desigualdades. Ambiental: protección de ecosistemas, reducción de contaminación y uso responsable de los recursos.' },
      { heading: 'Negocios éticos e inclusivos', body: 'Los negocios éticos actúan con integridad, transparencia y respeto por la ley. Los negocios inclusivos amplían la participación de poblaciones que enfrentan barreras, como trabajadores, proveedores, emprendedores, distribuidores o consumidores.' },
      { heading: 'Suministro responsable', body: 'Gestiona de manera ética, social y ambiental la selección de proveedores, la compra de materias primas, la producción, el transporte y la entrega. No consiste solo en comprar al menor precio: exige revisar criterios laborales, ambientales, comerciales, éticos y de trazabilidad.' },
      { heading: 'Cómo integrar sostenibilidad y ODS', body: 'Diagnosticar los impactos; definir compromisos; implementar acciones; medir resultados con indicadores; y comunicar avances y dificultades de manera transparente, sin exagerar logros ni presentar como sostenibles acciones que no lo son.' }
    ],
    example: 'Un hotel puede contratar proveedores locales con condiciones laborales verificables, reducir el consumo de agua, adaptar sus servicios y medir los resultados en vez de limitarse a anunciar que es sostenible.'
  }
];

const ETICA_ODS = [
  { n: 1, title: 'Fin de la pobreza', purpose: 'Eliminar la pobreza en todas sus formas.', action: 'Desarrollar empleo formal y fortalecer oportunidades económicas para comunidades vulnerables.', dims: ['social', 'economica'], color: '#e5243b' },
  { n: 2, title: 'Hambre cero', purpose: 'Combatir el hambre y mejorar la nutrición.', action: 'Reducir pérdidas de alimentos y apoyar compras responsables a productores locales.', dims: ['social', 'ambiental'], color: '#dda63a' },
  { n: 3, title: 'Salud y bienestar', purpose: 'Promover una vida saludable.', action: 'Garantizar condiciones seguras de trabajo y productos que no expongan a riesgos injustificados.', dims: ['social'], color: '#4c9f38' },
  { n: 4, title: 'Educación de calidad', purpose: 'Garantizar educación inclusiva y equitativa.', action: 'Apoyar formación, becas, capacitación laboral y aprendizaje permanente.', dims: ['social', 'economica'], color: '#c5192d' },
  { n: 5, title: 'Igualdad de género', purpose: 'Garantizar igualdad de derechos y oportunidades.', action: 'Aplicar políticas de igualdad salarial, prevención del acoso y acceso equitativo al liderazgo.', dims: ['social', 'economica'], color: '#ff3a21' },
  { n: 6, title: 'Agua limpia y saneamiento', purpose: 'Garantizar acceso al agua y saneamiento.', action: 'Medir el consumo de agua, reducir desperdicios y prevenir vertimientos contaminantes.', dims: ['ambiental', 'social'], color: '#26bde2' },
  { n: 7, title: 'Energía asequible y no contaminante', purpose: 'Promover energía limpia y accesible.', action: 'Mejorar la eficiencia energética y evaluar fuentes de energía menos contaminantes.', dims: ['ambiental', 'economica'], color: '#fcc30b' },
  { n: 8, title: 'Trabajo decente y crecimiento económico', purpose: 'Fomentar empleo digno y crecimiento inclusivo.', action: 'Ofrecer empleos seguros, remuneración justa y condiciones laborales dignas.', dims: ['economica', 'social'], color: '#a21942' },
  { n: 9, title: 'Industria, innovación e infraestructura', purpose: 'Impulsar infraestructura resiliente e innovación.', action: 'Invertir en procesos productivos seguros, innovadores y eficientes en el uso de recursos.', dims: ['economica', 'ambiental'], color: '#fd6925' },
  { n: 10, title: 'Reducción de las desigualdades', purpose: 'Disminuir brechas sociales y económicas.', action: 'Eliminar barreras de acceso al empleo, a los servicios y a la participación comercial.', dims: ['social', 'economica'], color: '#dd1367' },
  { n: 11, title: 'Ciudades y comunidades sostenibles', purpose: 'Crear comunidades seguras y sostenibles.', action: 'Priorizar proveedores locales, movilidad sostenible y respeto por las comunidades.', dims: ['social', 'ambiental'], color: '#fd9d24' },
  { n: 12, title: 'Producción y consumo responsables', purpose: 'Reducir residuos y utilizar eficientemente los recursos.', action: 'Diseñar productos duraderos, reducir desperdicios y revisar la cadena de suministro.', dims: ['ambiental', 'economica'], color: '#bf8b2e' },
  { n: 13, title: 'Acción por el clima', purpose: 'Actuar frente al cambio climático.', action: 'Medir y reducir emisiones y preparar operaciones para riesgos climáticos.', dims: ['ambiental'], color: '#3f7e44' },
  { n: 14, title: 'Vida submarina', purpose: 'Proteger océanos y recursos marinos.', action: 'Evitar residuos y vertimientos que afecten mares y ecosistemas costeros.', dims: ['ambiental'], color: '#0a97d9' },
  { n: 15, title: 'Vida de ecosistemas terrestres', purpose: 'Conservar bosques, suelos y biodiversidad.', action: 'Evitar deforestación y apoyar prácticas de abastecimiento que protejan ecosistemas.', dims: ['ambiental'], color: '#56c02b' },
  { n: 16, title: 'Paz, justicia e instituciones sólidas', purpose: 'Promover justicia, transparencia y paz.', action: 'Prevenir corrupción, proteger denunciantes y asegurar decisiones trazables.', dims: ['social', 'economica'], color: '#00689d' },
  { n: 17, title: 'Alianzas para lograr los objetivos', purpose: 'Fortalecer la cooperación entre actores.', action: 'Crear alianzas entre empresas, gobiernos, universidades y organizaciones sociales.', dims: ['social', 'economica', 'ambiental'], color: '#19486a' }
];

const ETICA_VOLUNTEERING_STAGES = [
  { title: 'Identificación', summary: 'Definir prioridades y seleccionar un proyecto coherente.', detail: 'Establecer objetivos de la empresa; identificar y analizar el proyecto adecuado; y comprobar que sea coherente con la estrategia, el perfil y las prioridades de la organización y de la comunidad.', deliverable: 'Objetivos, criterios de selección y proyecto priorizado.' },
  { title: 'Preparación', summary: 'Formalizar acuerdos y preparar recursos.', detail: 'Formalizar el convenio con la organización aliada, definir comunicación, seleccionar voluntarios, preparar logística y recursos, gestionar expectativas e informar a la ONG y a la comunidad beneficiaria.', deliverable: 'Acuerdos, plan de comunicación, selección y logística.' },
  { title: 'Ejecución', summary: 'Acompañar la acción y mantener coordinación.', detail: 'Dar la bienvenida a los voluntarios, gestionar el proyecto, acompañar a quienes participan, informar y facilitar retroalimentación periódica, y cerrar adecuadamente la actividad.', deliverable: 'Actividades realizadas, registro de participación e incidencias.' },
  { title: 'Seguimiento y evaluación', summary: 'Comparar resultados con los objetivos acordados.', detail: 'Recoger datos antes y después, utilizar indicadores, analizar resultados y elaborar un informe. La organización aliada puede coordinar la evaluación y la empresa comunicar los resultados con transparencia.', deliverable: 'Indicadores, informe de evaluación y acciones de mejora.' }
];

const ETICA_CASES = [
  {
    title: 'Cityparking: responsabilidad social en Colombia',
    label: 'Caso real · Estudio de la OIT',
    year: 'Periodo analizado por el estudio',
    summary: 'El estudio de la OIT describe iniciativas de movilidad sostenible, bienestar de trabajadores, inclusión laboral y relación con la comunidad, incluido el programa Cityncluyo y acciones de accesibilidad.',
    detail: 'El estudio reporta 16 personas vinculadas mediante el programa de inclusión, más del 30 % de empleados que utilizaban bicicleta y una reducción del 10 % de la huella de carbono en 2020 frente a 2019. Son cifras del periodo estudiado; no representan una auditoría ni indicadores actuales verificados.',
    questions: ['¿Qué grupos de interés aparecen?', '¿Cómo se conectan inclusión y movilidad sostenible?', '¿Qué indicadores permitirían comprobar que los compromisos continúan?'],
    source: 'OIT · Estudio de caso Cityparking y Ecopetrol',
    url: 'https://webapps.ilo.org/static/spanish/intserv/working-papers/wp047/index.html'
  },
  {
    title: 'Volkswagen: manipulación de pruebas de emisiones',
    label: 'Caso real · Agencia de Protección Ambiental de EE. UU.',
    year: 'Caso documentado por la EPA',
    summary: 'La EPA documentó que Volkswagen instaló software en determinados vehículos diésel para detectar cuándo eran sometidos a pruebas de emisiones y activar controles que no funcionaban de la misma manera durante la conducción normal.',
    detail: 'La EPA indicó que ciertos vehículos emitían óxidos de nitrógeno hasta 40 veces por encima del estándar aplicable. El caso derivó en acuerdos y sanciones. Los conceptos para analizarlo son transparencia, publicidad, cumplimiento, daño ambiental, salud pública y confianza del consumidor.',
    questions: ['¿Qué información se ocultó a consumidores y autoridades?', '¿Qué riesgos generó la falta de transparencia?', '¿Qué controles internos y externos habrían ayudado a prevenir el daño?'],
    source: 'EPA · Learn About Volkswagen Violations',
    url: 'https://www.epa.gov/vw/learn-about-volkswagen-violations'
  },
  {
    title: 'Rana Plaza: seguridad laboral en la cadena de suministro',
    label: 'Caso real · Organización Internacional del Trabajo',
    year: '24 de abril de 2013',
    summary: 'El edificio Rana Plaza se derrumbó en las afueras de Daca, Bangladés. La OIT señala que murieron más de 1.100 personas, en su mayoría trabajadoras y trabajadores de la confección, y muchas más resultaron heridas.',
    detail: 'La tragedia mostró los riesgos de una cadena de suministro que no garantiza condiciones adecuadas de seguridad en los centros de producción. Permite analizar debida diligencia, salud y seguridad laboral, derechos humanos, trazabilidad y responsabilidad de compradores y proveedores.',
    questions: ['¿Qué responsabilidades tienen proveedores y compradores?', '¿Qué señales de riesgo deben investigarse antes de contratar?', '¿Cómo se puede verificar la seguridad laboral en la cadena de suministro?'],
    source: 'OIT · Diez años después de Rana Plaza',
    url: 'https://webapps.ilo.org/infostories/es-ES/Stories/Country-Focus/rana-plaza.html'
  },
  {
    title: 'Odebrecht y el proyecto del río Bogotá',
    label: 'Caso real · Grupo Banco Mundial',
    year: 'Acuerdo anunciado en enero de 2019',
    summary: 'El Grupo Banco Mundial anunció una inhabilitación de tres años para Construtora Norberto Odebrecht S.A. relacionada con prácticas fraudulentas y colusorias durante su participación en el proyecto de adecuación hidráulica y recuperación ambiental del río Bogotá.',
    detail: 'El proyecto estaba financiado por el Banco Mundial. El comunicado indicó que la empresa reconoció su responsabilidad en las prácticas sancionables subyacentes. El caso permite analizar corrupción, conflictos de intereses, contratación, transparencia, competencia leal e integridad.',
    questions: ['¿Cómo afectan las prácticas colusorias la competencia?', '¿Qué controles de contratación y auditoría son relevantes?', '¿Cómo se protege el interés público en proyectos financiados?'],
    source: 'Banco Mundial · Acuerdo con subsidiaria de Odebrecht (2019)',
    url: 'https://www.bancomundial.org/es/news/press-release/2019/01/29/world-bank-group-announces-settlement-with-brazilian-subsidiary-of-odebrecht'
  }
];

const ETICA_VIDEOS = [
  { topic: 'Ética empresarial', title: 'La ética empresarial: compromiso con la sociedad', creator: 'El Colombiano', type: 'Video', url: 'https://www.youtube.com/watch?v=-AX_VMClUDs', duration: 'No indicada', note: 'Conversación sobre transparencia y cumplimiento como compromiso con la sociedad.' },
  { topic: 'ODS y Agenda 2030', title: 'Los Objetivos de Desarrollo Sostenible: qué son y cómo alcanzarlos', creator: 'UNESCO en español', type: 'Video', url: 'https://www.youtube.com/watch?v=MCKH5xk8X-g', duration: '6:00', note: 'Animación introductoria sobre Agenda 2030, equidad, derechos y ciudadanía.' },
  { topic: 'Responsabilidad social', title: 'La Responsabilidad Social Empresarial: un modelo de gestión voluntario y sostenible en el tiempo', creator: 'Oficina de la OIT para América Latina y el Caribe', type: 'Video', url: 'https://www.youtube.com/watch?v=uuPBsVERk0U', duration: 'No indicada', note: 'Recurso elaborado por la Confederación de Empresarios Privados de Bolivia con apoyo de la OIT.' },
  { topic: 'Sostenibilidad y rentabilidad', title: 'ODS Año 8: Rentabilidad y sostenibilidad', creator: 'Pacto Mundial de la ONU España', type: 'Video', url: 'https://www.youtube.com/watch?v=0cQRYO46SjA', duration: 'No indicada', note: 'Declaraciones de líderes empresariales sobre sostenibilidad y rentabilidad.' },
  { topic: 'Trabajo decente', title: 'Inicie y mejore su negocio: impulsar el trabajo decente en las pequeñas y medianas empresas', creator: 'Organización Internacional del Trabajo', type: 'Podcast complementario', url: 'https://podcast.ilo.org/es-es/episode/inicie-y-mejore-su-negocio-impulsar-el-trabajo-decente-en-las-pequenas-y-medianas-empresas', duration: '17:10', note: 'Recurso de audio de la OIT sobre formación, emprendimiento y trabajo decente. La página ofrece opciones para escuchar y ver.' },
  { topic: 'Gobierno corporativo', title: '¿Qué es el gobierno corporativo y por qué tu empresa lo necesita?', creator: 'PDLC', type: 'Video', url: 'https://www.youtube.com/watch?v=Aa0bt4ZS_m4', duration: 'No indicada', note: 'Conversación sobre estructura, continuidad y claridad en la empresa.' },
  { topic: 'Cadena de suministro y trabajo digno', title: 'La tragedia del Rana Plaza en Bangladés', creator: 'Naciones Unidas', type: 'Video', url: 'https://www.youtube.com/watch?v=zBKHDp18D9o', duration: '4:18', note: 'Reportaje de Naciones Unidas sobre el derrumbamiento y las medidas para mejorar la seguridad laboral.' },
  { topic: 'Crecimiento y desarrollo económico', title: 'Crecimiento y desarrollo económico', creator: 'Video enlazado en el PDF académico del curso', type: 'Video', url: 'https://www.youtube.com/watch?v=fuOfyCiY-sk', duration: 'No indicada', note: 'Enlace incluido en la portada del material de crecimiento y desarrollo económico.' }
];

const ETICA_QUIZ = [
  { q: '¿Qué estudia la ética?', options: ['Las costumbres de una sola empresa', 'Los principios y valores que orientan el comportamiento humano', 'Únicamente las leyes del Estado'], answer: 1, why: 'La ética reflexiona sobre principios y valores que orientan la conducta y ayudan a distinguir entre lo correcto y lo incorrecto.', wrong: ['Las costumbres pueden formar parte de la moral, pero no agotan el campo de la ética.', 'La ley es relevante, pero la ética también examina decisiones que no se reducen al cumplimiento legal.'] },
  { q: '¿Qué diferencia hay entre ética y moral?', options: ['Son exactamente lo mismo', 'La moral reúne normas y costumbres; la ética las examina críticamente', 'La ética solo se aplica al trabajo'], answer: 1, why: 'La moral reúne normas, valores y costumbres; la ética pregunta por qué esos criterios se consideran correctos y si pueden justificarse.', wrong: ['Están relacionadas, pero no son idénticas.', 'La ética también se aplica a decisiones personales, profesionales, empresariales y públicas.'] },
  { q: 'Una persona participa hoy en una decisión que favorece a una empresa de un familiar. ¿Qué tipo de conflicto puede existir?', options: ['Real', 'Potencial', 'No hay conflicto si la oferta es económica'], answer: 0, why: 'El interés personal está conectado directamente con una decisión en curso, por lo que puede influir en la imparcialidad.', wrong: ['Potencial se refiere a una interferencia que podría aparecer más adelante.', 'Que una oferta sea competitiva no elimina la obligación de declarar el vínculo.'] },
  { q: '¿Qué hace el código de conducta frente al código de ética?', options: ['Sustituye todos los valores', 'Traduce principios en comportamientos concretos', 'Solo reúne sanciones'], answer: 1, why: 'El código de ética establece principios generales y el código de conducta los traduce en comportamientos esperados.', wrong: ['Los valores siguen siendo el fundamento de las conductas.', 'Puede incluir pautas y consecuencias, pero no se limita a sanciones.'] },
  { q: '¿Cuál afirmación distingue mejor crecimiento y desarrollo económico?', options: ['Crecimiento y desarrollo siempre significan lo mismo', 'El crecimiento mide producción; el desarrollo considera bienestar y distribución de oportunidades', 'El desarrollo solo mide el PIB'], answer: 1, why: 'El crecimiento observa el aumento de producción; el desarrollo incorpora condiciones de vida, oportunidades y distribución de beneficios.', wrong: ['El material los trata como conceptos relacionados, pero diferentes.', 'El PIB es una medida de producción, no una medida suficiente del desarrollo.'] },
  { q: '¿Qué actores aparecen como participantes principales del gobierno corporativo?', options: ['Accionistas, junta directiva y administración', 'Solo clientes y proveedores', 'Únicamente el área de ventas'], answer: 0, why: 'El material identifica propietarios o accionistas, junta directiva o directorio y administración o gerencia.', wrong: ['Clientes y proveedores pueden ser grupos de interés, pero no son los participantes internos principales descritos.', 'El gobierno corporativo alcanza al conjunto de la empresa y sus órganos de dirección y administración.'] },
  { q: 'Según los materiales, ¿qué caracteriza a ISO 26000?', options: ['Es una guía de responsabilidad social y no es certificable', 'Es un sello obligatorio de producto', 'Es una ley colombiana'], answer: 0, why: 'El material la presenta como una guía para orientar la responsabilidad social, no como una norma certificable.', wrong: ['El documento no la presenta como sello de producto.', 'No se describe como una ley colombiana.'] },
  { q: 'Una empresa anuncia un precio y luego agrega cargos no informados. ¿Qué principio o derecho compromete?', options: ['Transparencia e información clara al consumidor', 'Solo eficiencia operativa', 'Libertad de asociación'], answer: 0, why: 'La información sobre precio y condiciones debe ser clara y suficiente para que el consumidor pueda decidir.', wrong: ['La eficiencia no justifica ocultar información comercial.', 'La libertad de asociación es un derecho laboral distinto.'] },
  { q: '¿Qué significa suministro responsable?', options: ['Comprar siempre al menor precio', 'Gestionar criterios laborales, ambientales, comerciales, éticos y de trazabilidad', 'Evaluar únicamente el tiempo de entrega'], answer: 1, why: 'El suministro responsable considera la conducta de proveedores y toda la cadena, no solamente el precio.', wrong: ['El precio no permite conocer por sí solo las condiciones de producción.', 'El cumplimiento logístico es solo un criterio dentro de una evaluación más amplia.'] },
  { q: '¿Cuál opción describe la sostenibilidad?', options: ['Priorizar beneficios económicos del trimestre', 'Equilibrar viabilidad económica, bienestar social y protección ambiental', 'Evitar únicamente el uso de plástico'], answer: 1, why: 'La sostenibilidad considera el equilibrio entre las dimensiones económica, social y ambiental, así como las generaciones futuras.', wrong: ['La rentabilidad a corto plazo no refleja todos los impactos ni el bienestar futuro.', 'Reducir plástico puede ayudar, pero no cubre por sí solo la sostenibilidad.'] }
];

const ETICA_STAKEHOLDERS = [
  { id: 'trabajadores', title: 'Trabajadores', expectation: 'Condiciones dignas, remuneración justa, seguridad, formación, respeto y no discriminación.', risks: 'Acoso, accidentes, desigualdad, trabajo forzoso o infantil en la cadena de valor.', duty: 'Prevenir riesgos laborales, escuchar sus necesidades y cumplir los compromisos laborales.' },
  { id: 'consumidores', title: 'Consumidores', expectation: 'Productos seguros, calidad, información clara, publicidad veraz y atención a reclamaciones.', risks: 'Daños por productos inseguros, engaño, cargos no informados o uso indebido de datos.', duty: 'Informar con claridad, cumplir lo ofrecido y ofrecer canales de atención y solución.' },
  { id: 'proveedores', title: 'Proveedores', expectation: 'Contratos claros, pagos oportunos, criterios de selección transparentes y relaciones justas.', risks: 'Presión abusiva sobre precios, retrasos de pago, colusión o condiciones laborales deficientes.', duty: 'Evaluar la cadena de suministro, comunicar criterios y cumplir los acuerdos comerciales.' },
  { id: 'propietarios', title: 'Propietarios e inversionistas', expectation: 'Información relevante, gestión responsable de recursos, control y decisiones sostenibles.', risks: 'Fraude, conflictos de interés, opacidad y decisiones sin rendición de cuentas.', duty: 'Establecer controles, gobernanza clara y reportes comprensibles.' },
  { id: 'comunidad', title: 'Comunidad', expectation: 'Respeto, empleo local, diálogo, seguridad y contribución al bienestar del territorio.', risks: 'Impactos sociales, desplazamiento, contaminación o falta de participación.', duty: 'Dialogar antes de actuar, evaluar impactos y responder a inquietudes.' },
  { id: 'autoridades', title: 'Autoridades', expectation: 'Cumplimiento normativo, colaboración institucional y transparencia.', risks: 'Soborno, fraude, obstrucción de controles o información falsa.', duty: 'Cumplir la ley, mantener registros y prevenir prácticas corruptas.' },
  { id: 'ambiente', title: 'Medioambiente', expectation: 'Uso responsable de recursos, prevención de contaminación y protección de ecosistemas.', risks: 'Emisiones, residuos, vertimientos y traslado de costos ambientales a comunidades vulnerables.', duty: 'Medir impactos, prevenir daños y mejorar continuamente el desempeño ambiental.' }
];

const ETICA_CHECKLIST = [
  { group: 'Laboral', items: ['Se verifican condiciones de seguridad y salud en el trabajo.', 'Se previenen el trabajo infantil, el trabajo forzoso y la discriminación.'] },
  { group: 'Ambiental', items: ['Se revisa el manejo de residuos, emisiones y uso de recursos.', 'Se identifican impactos sobre agua, suelo y ecosistemas.'] },
  { group: 'Comercial', items: ['Hay contratos claros, pagos oportunos y condiciones justas.', 'Los precios, responsabilidades y plazos son transparentes.'] },
  { group: 'Ético', items: ['Existen medidas contra soborno, fraude y conflictos de interés.', 'La selección de proveedores utiliza criterios imparciales.'] },
  { group: 'Trazabilidad', items: ['Se conoce el origen de bienes, materias primas y servicios.', 'Se pueden revisar evidencias y hacer seguimiento a mejoras.'] }
];
