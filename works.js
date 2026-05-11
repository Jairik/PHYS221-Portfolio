// Works — six split-view sections: image carousel left, narrative right.
// Vanilla port of the original React/JSX prototype.

const WORKS = [
  {
    id: 'activity-ii3',
    num: '01',
    kind: 'Activity II.3',
    title: "Newton's 2nd Law",
    subtitle: 'Cart on an inclined track with a pulley — and the friction we forgot to include.',
    tags: ['F = ma', 'inclined plane', 'experiment', 'friction'],
    images: ['act2-1', 'act2-2', 'act2-3', 'act2-4', 'act2-5'],
    narrative: 'The beginning',
    body: [
      { type: 'p', text: "My growth throughout this course wasn't inherently tied to performance on the exams or applications of the concepts, but rather gaining the ability to reason physically and understand how different components within a system interact." },
      { type: 'p', text: "The first instance of this was through Activity II.3, where we utilized and confirmed Newton's 2nd Law through experimentation with a cart on an inclined track and a pulley. While I usually dislike experiment-based activities (I like to stick to the numbers), this activity explicitly highlighted some of the most fundamental concepts, such as observing different forces." },
      { type: 'p', text: "I explicitly remember being extremely puzzled towards the end of this activity, as our experimental acceleration was drastically different from the theoretical acceleration. After confirming all of the experimental calculations, the group and I determined that our experimental efforts were in fact correct, however we did not factor in friction in our theoretical calculations — showcasing the gap between frictionless theoretical models and real experimental models, and really setting the stage for the next portion of the course, where we did consider friction." },
    ],
  },
  {
    id: 'exam2-p5',
    num: '02',
    kind: 'Exam 2 · Problem 5',
    title: 'Derivatives of a Particle',
    subtitle: 'Position → velocity → acceleration → net force. The story derivatives tell.',
    tags: ['kinematics', 'î ĵ', 'calculus'],
    images: ['exam2-q5'],
    narrative: 'Connecting math to meaning',
    body: [
      { type: 'pullquote', text: 'Some of my favorite parts of this course derived from connecting the all-familiar math to actual physical meanings.' },
      { type: 'p', text: 'One example of this is Exam 2 Problem 5, where we found the instantaneous velocity, acceleration, and the net force of a particle using derivatives of the position equation. In addition to the î and ĵ really appeasing my weird developer brain, this calculus-based kinematics problem represents the true story that derivatives illustrate.' },
    ],
  },
  {
    id: 'hw5-q6',
    num: '03',
    kind: 'Homework #5 · Q6',
    title: 'Banked Curve',
    subtitle: 'Minimum-to-maximum speed for a car cornering without slip. Trigonometry, regrettably.',
    tags: ['friction', 'circular motion', 'trig'],
    images: ['hw5-q6'],
    narrative: 'Power & versatility',
    body: [
      { type: 'p', text: "Additionally, in Homework #5 Question 6, we investigated the minimum range of speeds that a car can have without slipping on a banked curve road. This challenging problem demanded a deep level of understanding to connect how the mathematical representations of concepts such as Newton's 2nd Law and friction are applied in a real-world setting, requiring reasoning and an unfortunate amount of trigonometry to truly understand how the car would operate in this scenario." },
      { type: 'p', text: 'This problem in particular provided my first glimpse of the power and versatility of physics, showcasing how even foundational concepts can explain unintuitive scenarios.' },
    ],
  },
  {
    id: 'exam3-lq2',
    num: '04',
    kind: 'Exam 3 · Long Q2',
    title: 'Car Meets SUV',
    subtitle: 'Inelastic collision, work-energy theorem, friction — and a judgment call on whether to write the ticket.',
    tags: ['collisions', 'momentum', 'energy'],
    images: ['exam3-q2'],
    narrative: 'The barbaric instinct',
    body: [
      { type: 'p', text: 'My favorite concept in this course was definitely collisions, most likely because it fulfills my barbaric instinct to smash things together. Regardless, Exam 3 Long Question 2 showcased this perfectly through an unfortunate real-world scenario where a car collides with a larger SUV at varying speeds and sticks together.' },
      { type: 'p', text: 'Throughout this problem, we were able to calculate the work done by friction given fairly minimal information about the scenario, calculate the speeds at various instances, and ultimately play judge and determine if we give the car a ticket given the posted speed limit. Nested within this problem, concepts such as inelastic collisions, conservation of momentum, work-energy theorem, and friction were all chained together and fundamental to truly understand the outcomes of this scenario.' },
      { type: 'p', text: "In addition to using analytical thinking and functional understanding of physics throughout this problem, it will also give me something else to do when I'm rubbernecking an accident when driving." },
    ],
  },
  {
    id: 'hw12-q1',
    num: '05',
    kind: 'Homework #12 · Q1',
    title: 'Three Particles on a Rod',
    subtitle: 'Moment of inertia + rotational kinetic energy — the compact form of an old, familiar idea.',
    tags: ['rotation', 'I', 'KE'],
    images: ['hw12-q1'],
    narrative: 'The final chapter',
    body: [
      { type: 'p', text: 'To end off the semester, we dove immensely into rotation as a concept. This proved to be the most challenging concept for me, as it provided an important but different perspective on how we have viewed motion throughout the semester (especially with direction).' },
      { type: 'p', text: 'Homework #12 Question 1 challenged my understanding with this concept amazingly, being given three particles at different positions around rods while rotating on an axis. This question required understanding the moment of inertia, rotational kinetic energy, and perfectly tied all of it back into the familiar linear kinetic energy expressions.' },
      { type: 'p', text: 'After fully completing this problem, and checking back on my previous work and questioning my sanity, I came to realize that the rotational and linear kinetic energy expressions represent the same foundational concept, with rotational kinetic energy simply being a compacted form.' },
      { type: 'p', text: "This question ultimately cemented my understanding and showcased the beautiful evolution of physics, providing levels of abstraction and discovery throughout its history to make new realizations and make future physics people's lives easier (this exact concept is all too familiar in computer science, and I am infinitely glad that I got to see it in another field)." },
    ],
  },
  {
    id: 'activity-iv3',
    num: '06',
    kind: 'Activity IV.3',
    title: 'Rolling Down',
    subtitle: 'Five objects, one incline. Moment of inertia, and a loop-the-loop bringing the class full-circle.',
    tags: ['rolling', 'loop-the-loop', 'I'],
    images: ['rolling-1', 'rolling-2', 'rolling-3'],
    narrative: 'Full circle',
    body: [
      { type: 'p', text: 'Lastly, highlighted here for a similar reason, Activity IV.3 primarily consisted of comparing five different objects rolling down an identical incline, guiding us to find the moment of inertia for each object and understand how these factors translate into kinetic energy.' },
      { type: 'p', text: 'Additionally, this activity featured a loop-the-loop problem which added various factors into a problem seen earlier in the class, really bringing the class full-circle (haha).' },
    ],
  },
];

const SVG_NS = 'http://www.w3.org/2000/svg';

function el(tag, attrs, ...children) {
  const node = document.createElement(tag);
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === 'class') node.className = v;
      else if (k === 'dataset') Object.assign(node.dataset, v);
      else if (k.startsWith('on') && typeof v === 'function') {
        node.addEventListener(k.slice(2).toLowerCase(), v);
      } else if (k in node && k !== 'list') {
        try { node[k] = v; } catch { node.setAttribute(k, v); }
      } else {
        node.setAttribute(k, v);
      }
    }
  }
  for (const c of children) {
    if (c == null || c === false) continue;
    node.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return node;
}

function svg(attrs, ...children) {
  const node = document.createElementNS(SVG_NS, 'svg');
  for (const [k, v] of Object.entries(attrs || {})) node.setAttribute(k, v);
  for (const c of children) node.appendChild(c);
  return node;
}

function path(d) {
  const p = document.createElementNS(SVG_NS, 'path');
  p.setAttribute('d', d);
  return p;
}

function arrowSvg(d) {
  return svg(
    { viewBox: '0 0 24 24', width: '20', height: '20', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5' },
    path(d),
  );
}

function buildCarousel(images, workId) {
  const total = images.length;
  let i = 0;

  const slideEls = images.map((src, idx) =>
    el('div',
      {
        class: `carousel-slide${idx === 0 ? ' active' : ''}`,
        style: `transform: translateX(${(idx - 0) * 100}%)`,
      },
      el('img', {
        src: `assets/works/${src}.png`,
        alt: `${workId} page ${idx + 1}`,
        loading: 'lazy',
      }),
    ),
  );

  const gloss = el('div', { class: 'tilt-gloss', 'aria-hidden': 'true' });
  const glare = el('div', { class: 'tilt-glare', 'aria-hidden': 'true' });

  const inner = el('div', { class: 'carousel-inner' }, ...slideEls, gloss, glare);

  const stage = el('div', { class: 'carousel-stage' }, inner);

  const prevBtn = el('button', { class: 'car-btn prev', 'aria-label': 'Previous page' }, arrowSvg('M15 18l-6-6 6-6'));
  const nextBtn = el('button', { class: 'car-btn next', 'aria-label': 'Next page' }, arrowSvg('M9 18l6-6-6-6'));

  const dots = images.map((_, idx) =>
    el('button', {
      class: `dot${idx === 0 ? ' active' : ''}`,
      'aria-label': `Page ${idx + 1}`,
      onClick: () => setIndex(idx),
    }),
  );

  const curEl = el('span', { class: 'cur' }, '01');
  const totEl = el('span', { class: 'tot' }, String(total).padStart(2, '0'));

  let metaEl;
  if (total > 1) {
    metaEl = el('div', { class: 'carousel-meta' },
      el('div', { class: 'carousel-dots' }, ...dots),
      el('div', { class: 'carousel-count' },
        curEl,
        el('span', { class: 'sep' }, '/'),
        totEl,
      ),
    );
  } else {
    metaEl = el('div', { class: 'carousel-meta' },
      el('div', { class: 'carousel-count single' },
        el('span', { class: 'cur' }, 'single page'),
      ),
    );
  }

  const wrap = el('div', { class: 'carousel', tabIndex: 0 }, stage);
  if (total > 1) stage.append(prevBtn, nextBtn);
  wrap.append(metaEl);

  function setIndex(next) {
    i = ((next % total) + total) % total;
    slideEls.forEach((s, idx) => {
      s.classList.toggle('active', idx === i);
      s.style.transform = `translateX(${(idx - i) * 100}%)`;
    });
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    if (total > 1) curEl.textContent = String(i + 1).padStart(2, '0');
  }

  prevBtn.addEventListener('click', () => setIndex(i - 1));
  nextBtn.addEventListener('click', () => setIndex(i + 1));

  wrap.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') setIndex(i - 1);
    if (e.key === 'ArrowRight') setIndex(i + 1);
  });

  // 3D tilt — driven by mouse position over the stage.
  const MAX = 12; // degrees
  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const ry = (x - 0.5) * 2 * MAX;
    const rx = -(y - 0.5) * 2 * MAX;
    stage.style.setProperty('--rx', rx + 'deg');
    stage.style.setProperty('--ry', ry + 'deg');
    stage.style.setProperty('--mx', (x * 100) + '%');
    stage.style.setProperty('--my', (y * 100) + '%');
    stage.classList.add('tilting');
  });
  stage.addEventListener('mouseleave', () => {
    stage.style.setProperty('--rx', '0deg');
    stage.style.setProperty('--ry', '0deg');
    stage.classList.remove('tilting');
  });

  return wrap;
}

function buildBody(blocks) {
  const body = el('div', { class: 'body' });
  blocks.forEach((b) => {
    if (b.type === 'pullquote') body.append(el('p', { class: 'pullquote' }, b.text));
    else if (b.type === 'aside') body.append(el('p', { class: 'margin-note' }, '— ' + b.text));
    else body.append(el('p', null, b.text));
  });
  return body;
}

function buildWorkSection(work, flip) {
  const head = el('header', { class: 'work-head' },
    el('div', { class: 'num' }, '§ ' + work.num),
    el('div', { class: 'kind' }, work.kind),
    el('div', { class: 'rule' }),
    work.narrative ? el('div', { class: 'narrative-label' }, work.narrative) : null,
  );

  const media = el('div', { class: 'work-media' }, buildCarousel(work.images, work.id));

  const text = el('div', { class: 'work-text' },
    el('h3', { class: 'title' }, work.title),
    el('p', { class: 'subtitle' }, work.subtitle),
    buildBody(work.body),
    el('div', { class: 'tags' },
      ...work.tags.map((t) => el('span', { class: 'tag' }, t)),
    ),
  );

  const grid = el('div', { class: 'work-grid' }, media, text);

  return el('section', {
    class: 'work',
    id: work.id,
    'data-flip': flip ? 'true' : 'false',
  }, el('div', { class: 'wrap' }, head, grid));
}

function mount() {
  const root = document.getElementById('works-root');
  if (!root) return;
  const frag = document.createDocumentFragment();
  WORKS.forEach((w, i) => frag.append(buildWorkSection(w, i % 2 === 1)));
  root.append(frag);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}
