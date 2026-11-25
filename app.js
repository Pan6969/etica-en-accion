(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  const exploredTopics = new Set();
  let selectedVideoFilter = 'Todos';

  function updateProgress() {
    const total = ETICA_TOPICS.length;
    const done = exploredTopics.size;
    const label = $('#progress-label');
    const bar = $('#topic-progress');
    const fill = $('#progress-fill');
    if (label) label.textContent = `${done} de ${total} temas explorados`;
    if (bar) bar.setAttribute('aria-valuenow', String(done));
    if (fill) fill.style.width = `${(done / total) * 100}%`;
  }

  function imageOrArtwork(topic) {
    const isImage = /\.(png|webp|jpe?g|avif)$/i.test(topic.image || '');
    if (isImage) {
      return `<div class="topic-art"><img src="${topic.image}" alt="${escapeHTML(topic.imageAlt || '')}" loading="lazy"></div>`;
    }
    return `<div class="topic-art document-art" aria-hidden="true"><span>${topic.symbol}</span><small>MATERIAL DE ESTUDIO</small><b>${escapeHTML(topic.label)}</b></div>`;
  }

  function renderTopic(index, updateHash = false) {
    const topic = ETICA_TOPICS[index];
    if (!topic) return;
    exploredTopics.add(topic.id);
    updateProgress();

    const tabButtons = $$('#topic-tabs [role="tab"]');
    tabButtons.forEach((button, i) => {
      const active = i === index;
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
    });

    const sections = topic.sections.map((section, i) => `
      <details class="topic-detail" ${i === 0 ? 'open' : ''}>
        <summary><span class="detail-number">${String(i + 1).padStart(2, '0')}</span>${escapeHTML(section.heading)}</summary>
        <div class="detail-body"><p>${escapeHTML(section.body)}</p></div>
      </details>`).join('');

    let special = '';
    if (topic.id === 'gobierno') special = renderGovernanceDiagram();
    if (topic.id === 'rse') special = renderGlobalCompactPrinciples(topic.principles || []);
    if (topic.id === 'voluntariado') special = renderVolunteerTimeline();
    if (topic.id === 'sostenibilidad') special = renderODSExplorer();

    const panel = $('#topic-panel');
    panel.innerHTML = `
      <article class="topic-feature">
        <div class="topic-aside">
          <div class="topic-number">${topic.number} <span>LECTURA GUIADA</span></div>
          <span class="topic-symbol" aria-hidden="true">${topic.symbol}</span>
          <h3>${escapeHTML(topic.title)}</h3>
          <p>${escapeHTML(topic.intro)}</p>
          ${imageOrArtwork(topic)}
          <a class="text-link" href="${topic.sourceHref}" target="_blank" rel="noopener noreferrer">Consultar material de referencia <span aria-hidden="true">↗</span></a>
        </div>
        <div class="topic-main">
          <div class="topic-lead"><span class="section-label">IDEA CENTRAL</span><p>${escapeHTML(topic.intro)}</p></div>
          <div class="topic-details">${sections}</div>
          ${special}
          <div class="example-note"><span class="section-label">EN LA PRÁCTICA · EJEMPLO ILUSTRATIVO</span><p>${escapeHTML(topic.example)}</p></div>
          <div class="topic-source"><span>Material base</span><strong>${escapeHTML(topic.source)}</strong></div>
        </div>
      </article>`;

    if (updateHash && location.hash !== `#tema-${topic.id}`) {
      history.replaceState(null, '', `${location.pathname}${location.search}#tema-${topic.id}`);
    }
    initializeTopicWidgets(topic.id);
  }

  function renderGovernanceDiagram() {
    return `
      <div class="mini-module governance-module">
        <div class="module-heading"><span class="section-label">CÓMO SE RELACIONAN</span><h4>Órganos principales del gobierno corporativo</h4></div>
        <div class="governance-flow" aria-label="Relación de accionistas, junta directiva y administración">
          <div class="governance-node"><small>01</small><strong>Accionistas</strong><span>Aportan recursos y ejercen sus derechos.</span></div>
          <div class="flow-arrow" aria-hidden="true">↓</div>
          <div class="governance-node governance-node-primary"><small>02</small><strong>Junta directiva</strong><span>Orienta y supervisa la dirección general.</span></div>
          <div class="flow-arrow" aria-hidden="true">↓</div>
          <div class="governance-node"><small>03</small><strong>Administración</strong><span>Gestiona la operación y ejecuta los planes.</span></div>
        </div>
        <p class="module-footnote">El detalle de funciones depende de la estructura y las reglas de cada organización.</p>
      </div>`;
  }

  function renderGlobalCompactPrinciples(principles) {
    return `
      <div class="mini-module principles-module">
        <div class="module-heading"><span class="section-label">PACTO GLOBAL DE NACIONES UNIDAS</span><h4>Los diez principios</h4><p>Se agrupan en cuatro áreas: derechos humanos, trabajo, medioambiente y anticorrupción.</p></div>
        <details class="principles-disclosure">
          <summary>Explorar los 10 principios <span class="summary-count">10</span></summary>
          <ol class="principles-list">${principles.map((principle, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span>${escapeHTML(principle)}</li>`).join('')}</ol>
        </details>
      </div>`;
  }

  function renderVolunteerTimeline() {
    return `
      <div class="mini-module volunteer-module">
        <div class="module-heading"><span class="section-label">PROGRAMA DE VOLUNTARIADO</span><h4>Cuatro fases para llevarlo a la práctica</h4><p>Selecciona cada fase para consultar actividades y entregables.</p></div>
        <div class="volunteer-timeline" id="volunteer-timeline">
          ${ETICA_VOLUNTEERING_STAGES.map((stage, i) => `<button type="button" class="timeline-step" data-stage="${i}" aria-pressed="${i === 0 ? 'true' : 'false'}"><span>${String(i + 1).padStart(2, '0')}</span><strong>${escapeHTML(stage.title)}</strong><small>${escapeHTML(stage.summary)}</small></button>`).join('')}
        </div>
        <div class="timeline-detail" id="timeline-detail" aria-live="polite"></div>
      </div>`;
  }

  function renderODSExplorer() {
    return `
      <div class="mini-module ods-module">
        <div class="module-heading"><span class="section-label">AGENDA 2030</span><h4>Explora los 17 Objetivos de Desarrollo Sostenible</h4><p>Filtra por dimensión para ver cómo pueden conectarse con decisiones empresariales.</p></div>
        <div class="ods-filters" role="group" aria-label="Filtrar ODS por dimensión">
          <button type="button" class="filter-chip active" data-ods-filter="todas" aria-pressed="true">Todas</button>
          <button type="button" class="filter-chip" data-ods-filter="social" aria-pressed="false">Social</button>
          <button type="button" class="filter-chip" data-ods-filter="economica" aria-pressed="false">Económica</button>
          <button type="button" class="filter-chip" data-ods-filter="ambiental" aria-pressed="false">Ambiental</button>
        </div>
        <div id="ods-grid" class="ods-grid"></div>
        <p class="module-footnote">Las dimensiones se utilizan como una clasificación didáctica: los ODS están interrelacionados y pueden contribuir a más de una dimensión.</p>
      </div>`;
  }

  function initializeTopicWidgets(topicId) {
    if (topicId === 'voluntariado') {
      const renderStage = (index) => {
        const stage = ETICA_VOLUNTEERING_STAGES[index];
        $$('#volunteer-timeline [data-stage]').forEach((button, i) => {
          button.setAttribute('aria-pressed', String(i === index));
        });
        $('#timeline-detail').innerHTML = `<strong>${escapeHTML(stage.title)}</strong><p>${escapeHTML(stage.detail)}</p><span>ENTREGABLE ESPERADO</span><p>${escapeHTML(stage.deliverable)}</p>`;
      };
      $$('#volunteer-timeline [data-stage]').forEach((button) => {
        button.addEventListener('click', () => renderStage(Number(button.dataset.stage)));
      });
      renderStage(0);
    }

    if (topicId === 'sostenibilidad') initializeODSExplorer();
  }

  function initializeODSExplorer() {
    const grid = $('#ods-grid');
    if (!grid) return;

    const renderODS = (filter = 'todas') => {
      const filtered = ETICA_ODS.filter((item) => filter === 'todas' || item.dims.includes(filter));
      grid.innerHTML = filtered.map((item) => `
        <details class="ods-card" style="--ods-color:${item.color}">
          <summary><span class="ods-num">${String(item.n).padStart(2, '0')}</span><span class="ods-title">${escapeHTML(item.title)}</span><span class="ods-toggle" aria-hidden="true">+</span></summary>
          <div class="ods-card-body"><p>${escapeHTML(item.purpose)}</p><strong>Acción empresarial posible</strong><p>${escapeHTML(item.action)}</p></div>
        </details>`).join('');
    };

    $$('[data-ods-filter]').forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.odsFilter;
        $$('[data-ods-filter]').forEach((other) => {
          other.classList.toggle('active', other === button);
          other.setAttribute('aria-pressed', String(other === button));
        });
        renderODS(filter);
      });
    });
    renderODS('todas');
  }

  function initializeTabs() {
    const tabs = $('#topic-tabs');
    tabs.innerHTML = ETICA_TOPICS.map((topic, index) => `
      <button type="button" class="topic-tab" id="tab-${topic.id}" role="tab" aria-controls="topic-panel" aria-selected="${index === 0 ? 'true' : 'false'}" tabindex="${index === 0 ? '0' : '-1'}" data-topic-index="${index}">
        <span>${topic.number}</span><strong>${escapeHTML(topic.label)}</strong>
      </button>`).join('');

    tabs.addEventListener('click', (event) => {
      const button = event.target.closest('[role="tab"]');
      if (button) renderTopic(Number(button.dataset.topicIndex), true);
    });

    tabs.addEventListener('keydown', (event) => {
      const current = event.target.closest('[role="tab"]');
      if (!current) return;
      const currentIndex = Number(current.dataset.topicIndex);
      let nextIndex = currentIndex;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (currentIndex + 1) % ETICA_TOPICS.length;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (currentIndex + ETICA_TOPICS.length - 1) % ETICA_TOPICS.length;
      else if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = ETICA_TOPICS.length - 1;
      else return;
      event.preventDefault();
      renderTopic(nextIndex, true);
      const next = $(`#tab-${ETICA_TOPICS[nextIndex].id}`);
      next.focus();
      next.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });

    const requestedId = location.hash.startsWith('#tema-') ? location.hash.slice(6) : '';
    const requestedIndex = ETICA_TOPICS.findIndex((topic) => topic.id === requestedId);
    renderTopic(requestedIndex >= 0 ? requestedIndex : 0);
  }

  function initializeDilemma() {
    const responses = [
      ['Transparencia para decidir con imparcialidad.', 'Declarar el vínculo permite que la instancia correspondiente evalúe el conflicto y determine las medidas necesarias. Puede ser necesario apartarse de la decisión y dejar registro, de acuerdo con el procedimiento aplicable.'],
      ['El silencio impide gestionar el conflicto.', 'Una oferta competitiva no elimina el vínculo personal. Ocultarlo compromete la transparencia y puede poner en duda la imparcialidad del proceso. La alternativa responsable es declararlo antes de intervenir.'],
      ['Excluir la oferta sin explicar tampoco resuelve el problema.', 'Una decisión unilateral puede afectar la objetividad de la evaluación. Lo adecuado es declarar el vínculo y permitir que la instancia correspondiente aplique criterios transparentes y el procedimiento establecido.']
    ];

    $$('.dilemma-choice').forEach((button) => {
      button.addEventListener('click', () => {
        $$('.dilemma-choice').forEach((other) => {
          other.classList.toggle('selected', other === button);
          other.setAttribute('aria-pressed', String(other === button));
        });
        const response = responses[Number(button.dataset.choice)];
        $('#dilemma-feedback').innerHTML = `<strong>${response[0]}</strong><p>${response[1]}</p><small>Se relaciona con: código de ética · transparencia · conflicto de intereses.</small>`;
      });
    });
  }

  function initializeStakeholders() {
    const buttons = $('#stakeholder-buttons');
    const detail = $('#stakeholder-detail');
    buttons.innerHTML = ETICA_STAKEHOLDERS.map((stakeholder, index) => `
      <button type="button" class="stakeholder-pill" data-stakeholder="${stakeholder.id}" aria-pressed="${index === 0 ? 'true' : 'false'}">${escapeHTML(stakeholder.title)}</button>`).join('');

    const showStakeholder = (id) => {
      const stakeholder = ETICA_STAKEHOLDERS.find((item) => item.id === id) || ETICA_STAKEHOLDERS[0];
      $$('#stakeholder-buttons button').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.stakeholder === stakeholder.id));
      });
      detail.innerHTML = `
        <span class="section-label">GRUPO SELECCIONADO</span><h4>${escapeHTML(stakeholder.title)}</h4>
        <dl><div><dt>Expectativas</dt><dd>${escapeHTML(stakeholder.expectation)}</dd></div>
        <div><dt>Riesgos</dt><dd>${escapeHTML(stakeholder.risks)}</dd></div>
        <div><dt>Responsabilidad de la organización</dt><dd>${escapeHTML(stakeholder.duty)}</dd></div></dl>`;
    };

    buttons.addEventListener('click', (event) => {
      const button = event.target.closest('[data-stakeholder]');
      if (button) showStakeholder(button.dataset.stakeholder);
    });
    showStakeholder(ETICA_STAKEHOLDERS[0].id);
  }

  function initializeChecklist() {
    const container = $('#supplier-checklist');
    container.innerHTML = ETICA_CHECKLIST.map((group, groupIndex) => `
      <fieldset class="checklist-group"><legend>${escapeHTML(group.group)}</legend>
        ${group.items.map((item, itemIndex) => {
          const id = `supplier-${groupIndex}-${itemIndex}`;
          return `<label class="check-item" for="${id}"><input id="${id}" type="checkbox" data-check-group="${groupIndex}"><span>${escapeHTML(item)}</span></label>`;
        }).join('')}
      </fieldset>`).join('');

    const update = () => {
      const checked = $$('input[type="checkbox"]', container).filter((input) => input.checked).length;
      const total = ETICA_CHECKLIST.reduce((sum, group) => sum + group.items.length, 0);
      $('#checklist-count').textContent = `${checked}/${total}`;
      const complete = ETICA_CHECKLIST.map((group, index) => {
        const count = $$(`input[data-check-group="${index}"]`, container).filter((input) => input.checked).length;
        return { name: group.group, complete: count === group.items.length };
      });
      const pending = complete.filter((item) => !item.complete).map((item) => item.name);
      let message = `${checked} de ${total} criterios marcados. `;
      if (pending.length === 0) message += 'Has revisado criterios de todas las dimensiones; conserva evidencias y define acciones de mejora.';
      else message += `Dimensiones que todavía requieren revisión: ${pending.join(', ')}.`;
      $('#checklist-feedback').textContent = `${message} Este resultado es orientativo y no constituye una certificación.`;
    };
    container.addEventListener('change', update);
    update();
  }

  function initializeQuiz() {
    const questionBox = $('#quiz-questions');
    questionBox.innerHTML = ETICA_QUIZ.map((question, index) => `
      <fieldset class="quiz-question"><legend><span>${String(index + 1).padStart(2, '0')}</span>${escapeHTML(question.q)}</legend>
        <div class="quiz-options">${question.options.map((option, optionIndex) => `
          <label class="quiz-option" for="quiz-${index}-${optionIndex}"><input id="quiz-${index}-${optionIndex}" type="radio" name="quiz-${index}" value="${optionIndex}" required><span>${escapeHTML(option)}</span></label>`).join('')}
        </div>
      </fieldset>`).join('');

    $('#quiz-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const answers = ETICA_QUIZ.map((question, index) => {
        const chosen = $(`input[name="quiz-${index}"]:checked`);
        return chosen ? Number(chosen.value) : -1;
      });
      if (answers.some((answer) => answer < 0)) {
        $('#quiz-result').hidden = false;
        $('#quiz-result').textContent = 'Responde las diez preguntas antes de finalizar.';
        return;
      }

      const score = answers.filter((answer, index) => answer === ETICA_QUIZ[index].answer).length;
      const details = ETICA_QUIZ.map((question, index) => {
        const answer = answers[index];
        const correct = answer === question.answer;
        const explanation = correct ? question.why : question.wrong[answer < question.answer ? answer : answer - 1];
        return `<article class="quiz-review ${correct ? 'is-correct' : 'is-wrong'}"><strong>${String(index + 1).padStart(2, '0')} · ${correct ? 'Respuesta adecuada' : 'Revisa esta respuesta'}</strong><p>${escapeHTML(question.q)}</p><span>Tu respuesta: ${escapeHTML(question.options[answer])}</span><span>Respuesta correcta: ${escapeHTML(question.options[question.answer])}</span><p>${escapeHTML(correct ? question.why : explanation)}</p></article>`;
      }).join('');
      const recommendation = score >= 9 ? 'Excelente dominio de los conceptos. Continúa relacionándolos con casos y decisiones concretas.' : score >= 7 ? 'Buen resultado. Repasa las preguntas que fallaste y vuelve a conectar los conceptos.' : 'Conviene repasar los módulos de fundamentos, código de ética, RSE y sostenibilidad antes de repetir la evaluación.';
      const result = $('#quiz-result');
      result.hidden = false;
      result.innerHTML = `<div class="quiz-score"><span>RESULTADO</span><strong>${score}/10</strong><p>${escapeHTML(recommendation)}</p></div><div class="quiz-reviews">${details}</div>`;
      result.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    });
  }

  function initializeProposalBuilder() {
    $('#proposal-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const rows = [1, 2, 3].map((index) => {
        const action = $(`#proposal-${index}`).value.trim();
        const ods = $(`#ods-${index}`);
        const metric = $(`#metric-${index}`).value.trim();
        return { action, ods: `ODS ${ods.value} · ${ods.selectedOptions[0].textContent}`, metric };
      });
      const text = rows.map((row, index) => `${index + 1}. ${row.action}\n   ${row.ods}\n   Indicador: ${row.metric}`).join('\n\n');
      const result = $('#proposal-result');
      result.hidden = false;
      result.innerHTML = `<strong>Tu propuesta está lista para revisar.</strong><pre>${escapeHTML(text)}</pre><button class="button button-outline copy-proposal" type="button">Copiar propuesta <span aria-hidden="true">⧉</span></button>`;
      $('.copy-proposal', result).addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(text);
          $('.copy-proposal', result).textContent = 'Copiada';
        } catch {
          const temporary = document.createElement('textarea');
          temporary.value = text;
          temporary.setAttribute('readonly', '');
          temporary.style.position = 'absolute';
          temporary.style.left = '-9999px';
          document.body.appendChild(temporary);
          temporary.select();
          const copied = document.execCommand('copy');
          temporary.remove();
          $('.copy-proposal', result).textContent = copied ? 'Copiada' : 'Selecciona el texto para copiarlo';
        }
      });
    });
  }

  function initializeCases() {
    $('#case-grid').innerHTML = ETICA_CASES.map((item, index) => `
      <article class="real-case-card">
        <div class="case-card-head"><span>${String(index + 1).padStart(2, '0')}</span><small>${escapeHTML(item.year)}</small></div>
        <div class="real-case-tag">${escapeHTML(item.label)}</div>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.summary)}</p>
        <details class="case-more"><summary>Ver consecuencias y preguntas <span aria-hidden="true">+</span></summary>
          <p>${escapeHTML(item.detail)}</p>
          <strong>Preguntas para analizar</strong>
          <ul>${item.questions.map((question) => `<li>${escapeHTML(question)}</li>`).join('')}</ul>
        </details>
        <a class="text-link" href="${item.url}" target="_blank" rel="noopener noreferrer">Fuente: ${escapeHTML(item.source)} <span aria-hidden="true">↗</span></a>
      </article>`).join('');
  }

  function initializeVideos() {
    const filters = ['Todos', ...new Set(ETICA_VIDEOS.map((video) => video.topic))];
    $('#video-filters').innerHTML = filters.map((filter, index) => `<button type="button" class="filter-chip ${index === 0 ? 'active' : ''}" data-video-filter="${escapeHTML(filter)}" aria-pressed="${index === 0 ? 'true' : 'false'}">${escapeHTML(filter)}</button>`).join('');

    const render = () => {
      const videos = selectedVideoFilter === 'Todos' ? ETICA_VIDEOS : ETICA_VIDEOS.filter((video) => video.topic === selectedVideoFilter);
      $('#video-grid').innerHTML = videos.map((video, index) => `
        <article class="video-card">
          <div class="video-visual" aria-hidden="true"><span class="play-mark">▶</span><span class="video-topic">${escapeHTML(video.topic)}</span></div>
          <div class="video-card-body"><div class="video-meta"><span>${escapeHTML(video.type)}</span><span>${escapeHTML(video.duration)}</span></div>
            <h3>${escapeHTML(video.title)}</h3><p class="video-creator">${escapeHTML(video.creator)}</p><p>${escapeHTML(video.note)}</p>
            <a class="text-link" href="${video.url}" target="_blank" rel="noopener noreferrer">${video.type === 'Podcast complementario' ? 'Abrir recurso de la OIT' : 'Ver en YouTube'} <span aria-hidden="true">↗</span></a>
          </div>
        </article>`).join('');
    };
    $('#video-filters').addEventListener('click', (event) => {
      const button = event.target.closest('[data-video-filter]');
      if (!button) return;
      selectedVideoFilter = button.dataset.videoFilter;
      $$('[data-video-filter]').forEach((other) => {
        const active = other === button;
        other.classList.toggle('active', active);
        other.setAttribute('aria-pressed', String(active));
      });
      render();
    });
    render();
  }

  function initializeSources() {
    const sources = [
      { title: 'Fundamentos de ética y responsabilidad social', type: 'PDF · Material del proyecto base', href: 'assets/fundamentos.pdf' },
      { title: 'Código de ética', type: 'PDF · Material del proyecto base', href: 'assets/codigo.pdf' },
      { title: 'Código de ética', type: 'PDF · Copia adicional incluida en el ZIP', href: 'assets/documentos/codigo-etica-original.pdf' },
      { title: 'Crecimiento y desarrollo económico', type: 'PDF · Material del proyecto base', href: 'assets/desarrollo.pdf' },
      { title: 'Crecimiento y desarrollo económico', type: 'PDF · Copia adicional incluida en el ZIP', href: 'assets/documentos/crecimiento-desarrollo-original.pdf' },
      { title: 'Ramas del poder público en Colombia', type: 'PDF · Material del proyecto base', href: 'assets/poder.pdf' },
      { title: 'Ramas del poder público en Colombia', type: 'PDF · Copia adicional incluida en el ZIP', href: 'assets/documentos/ramas-poder-publico-original.pdf' },
      { title: 'Normas y estándares en ética y RSE', type: 'PDF · Material del proyecto base', href: 'assets/rse.pdf' },
      { title: 'Gobierno corporativo: ¿qué es?', type: 'PDF · Material adicional', href: 'assets/documentos/gobierno-corporativo.pdf' },
      { title: 'Grupos de interés, ciudadanía corporativa y consumidor', type: 'PDF · Material adicional', href: 'assets/documentos/grupos-interes-consumidor.pdf' },
      { title: 'Fundaciones y voluntariados corporativos', type: 'PDF · Material adicional', href: 'assets/documentos/fundaciones-voluntariado.pdf' },
      { title: 'Guía de contenido sobre ética, sostenibilidad y ODS', type: 'DOCX · Resumen entregado en el ZIP', href: 'assets/documentos/guia-etica-sostenibilidad-ods.docx' },
      { title: 'Objetivos de Desarrollo Sostenible', type: 'Recurso oficial · Naciones Unidas', href: 'https://sdgs.un.org/goals' },
      { title: 'Objetivos de Desarrollo Sostenible', type: 'Recurso oficial en español · PNUD', href: 'https://www.undp.org/es/sustainable-development-goals' }
    ];
    $('#source-grid').innerHTML = sources.map((source, index) => `
      <a class="source-card" href="${source.href}" target="_blank" rel="noopener noreferrer">
        <span class="source-index">${String(index + 1).padStart(2, '0')}</span>
        <span class="source-type">${escapeHTML(source.type)}</span>
        <strong>${escapeHTML(source.title)}</strong>
        <span class="source-action">Abrir material <span aria-hidden="true">↗</span></span>
      </a>`).join('');
  }

  async function registerVisit() {
    const counter = $('#visit-count');
    if (!counter) return;
    try {
      const response = await fetch('/.netlify/functions/visits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store'
      });
      if (!response.ok) throw new Error('Counter request failed');
      const data = await response.json();
      const visits = Number(data.visits);
      if (!Number.isSafeInteger(visits) || visits < 151) throw new Error('Invalid counter response');
      counter.textContent = visits.toLocaleString('es-CO');
      counter.setAttribute('aria-label', `Visitas registradas: ${counter.textContent}`);
    } catch {
      counter.textContent = '—';
      counter.setAttribute('aria-label', 'Contador de visitas no disponible');
    }
  }

  function boot() {
    initializeTabs();
    initializeDilemma();
    initializeStakeholders();
    initializeChecklist();
    initializeQuiz();
    initializeProposalBuilder();
    initializeCases();
    initializeVideos();
    initializeSources();
    registerVisit();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
