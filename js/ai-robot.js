import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// All humanoid parts are genuine Three.js meshes, not a flat image or SVG.
// This is a visual AI-solutions concept; it has no chatbot or model backend.
const stage = document.getElementById("robot-canvas");
const status = document.getElementById("robot-status");
const backgroundMode = new URLSearchParams(window.location.search).has("background");
const embedded = new URLSearchParams(window.location.search).has("embed");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let motion = !reducedMotion;
let activeMode = "assess";
let elapsed = 0;

const modes = {
  assess: {
    accent: 0x33dcff, css: "#33dcff",
    title: "USE-CASE ASSESSMENT",
    description: "Define the problem, available data, constraints and success criteria before choosing an AI approach.",
    screens: [["01 / DISCOVERY", "PROBLEM / DATA / VALUE"], ["FEASIBILITY", "SCOPE / RISKS / METRICS"]]
  },
  design: {
    accent: 0x8f92ff, css: "#a7a9ff",
    title: "AI SOLUTION DESIGN",
    description: "Compare retrieval, LLM and automation approaches, then select a design that fits the requirements.",
    screens: [["02 / ARCHITECTURE", "LLM / RAG / WORKFLOWS"], ["TRADE-OFFS", "COST / LATENCY / SAFETY"]]
  },
  validate: {
    accent: 0x54f0c2, css: "#54f0c2",
    title: "EVALUATION & VALIDATION",
    description: "Measure errors, reproduce tests and check whether a prototype meets its intended purpose.",
    screens: [["03 / EVALUATION", "TESTS / QUALITY / ERRORS"], ["EVIDENCE", "BASELINES / LIMITS / DATA"]]
  }
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
camera.position.set(6.1, 2.7, 10);
camera.lookAt(0, 0.1, 0);

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
} catch (error) {
  status.textContent = "This 3D experience needs a browser with WebGL enabled.";
  stage.classList.add("robot-canvas-error");
  throw error;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, backgroundMode ? 1 : 1.7));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.45;
stage.appendChild(renderer.domElement);
renderer.domElement.setAttribute("aria-label", "Interactive full-body 3D humanoid robot. Drag to rotate and use the controls to change modes.");

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.055;
controls.enablePan = false;
controls.minDistance = 5.7;
controls.maxDistance = 16;
controls.minPolarAngle = 0.25;
controls.maxPolarAngle = Math.PI - 0.18;
controls.target.set(backgroundMode ? -1.5 : 0, 0.05, 0);
if (backgroundMode) {
  controls.enabled = false;
  camera.position.set(4.7, 2.1, 12.7);
}
controls.update();
controls.saveState();

scene.add(new THREE.HemisphereLight(0xaec9ff, 0x071322, 2.2));
const key = new THREE.DirectionalLight(0xe1f3ff, 3.4);
key.position.set(4, 7, 8);
scene.add(key);
const rim = new THREE.DirectionalLight(0x448cff, 4.5);
rim.position.set(-5, 3, -6);
scene.add(rim);
const glow = new THREE.PointLight(0x3adfff, 22, 11, 2);
glow.position.set(0, 1.2, 2.1);
scene.add(glow);

const material = {
  graphite: new THREE.MeshPhysicalMaterial({ color: 0x192739, metalness: 0.89, roughness: 0.25, clearcoat: 0.6 }),
  steel: new THREE.MeshStandardMaterial({ color: 0x899eb7, metalness: 0.94, roughness: 0.21 }),
  titanium: new THREE.MeshStandardMaterial({ color: 0x344b63, metalness: 0.92, roughness: 0.26 }),
  carbon: new THREE.MeshStandardMaterial({ color: 0x07111c, metalness: 0.6, roughness: 0.43 }),
  silver: new THREE.MeshStandardMaterial({ color: 0xc3d6e7, metalness: 0.84, roughness: 0.18 }),
  neon: new THREE.MeshStandardMaterial({ color: 0x33dcff, emissive: 0x33dcff, emissiveIntensity: 2.6, metalness: 0.18, roughness: 0.22 }),
  glass: new THREE.MeshPhysicalMaterial({ color: 0x1c3756, metalness: 0.65, roughness: 0.12, transparent: true, opacity: 0.86, clearcoat: 1 }),
  darkGlass: new THREE.MeshPhysicalMaterial({ color: 0x060e1b, metalness: 0.55, roughness: 0.12, clearcoat: 1 })
};

const robot = new THREE.Group();
robot.name = "AION-7 / Full-body AI Solutions Humanoid";
scene.add(robot);
const spine = new THREE.Group();
spine.name = "Spine";
robot.add(spine);

function mesh(parent, name, geometry, mat, x, y, z, sx = 1, sy = 1, sz = 1) {
  const item = new THREE.Mesh(geometry, mat);
  item.name = name;
  item.position.set(x, y, z);
  item.scale.set(sx, sy, sz);
  parent.add(item);
  return item;
}
function box(parent, name, w, h, d, x, y, z, mat = material.graphite) {
  return mesh(parent, name, new THREE.BoxGeometry(w, h, d), mat, x, y, z);
}
function orb(parent, name, x, y, z, sx, sy, sz, mat = material.titanium, segments = 20) {
  return mesh(parent, name, new THREE.SphereGeometry(1, segments, 14), mat, x, y, z, sx, sy, sz);
}
function cylinder(parent, name, rt, rb, h, x, y, z, mat = material.graphite, sides = 12) {
  return mesh(parent, name, new THREE.CylinderGeometry(rt, rb, h, sides), mat, x, y, z);
}
function ring(parent, name, radius, tube, x, y, z, mat = material.neon) {
  return mesh(parent, name, new THREE.TorusGeometry(radius, tube, 12, 64), mat, x, y, z);
}
function capsuleSegment(parent, name, ax, ay, az, bx, by, bz, radius, mat) {
  const start = new THREE.Vector3(ax, ay, az);
  const end = new THREE.Vector3(bx, by, bz);
  const direction = end.clone().sub(start);
  const item = cylinder(parent, name, radius, radius * 0.92, direction.length(), 0, 0, 0, mat);
  item.position.copy(start.add(end).multiplyScalar(0.5));
  item.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  return item;
}

// Hips, flexible waist and a layered torso.
orb(spine, "Pelvis core", 0, -0.04, 0, 0.58, 0.30, 0.36, material.carbon);
cylinder(spine, "Pelvis armor", 0.46, 0.56, 0.37, 0, -0.11, 0, material.titanium, 10);
cylinder(spine, "Abdominal actuator", 0.34, 0.32, 0.34, 0, 0.28, 0, material.carbon);
for (let i = 0; i < 3; i++) {
  box(spine, "Waist flexible segment " + (i + 1), 0.63 - i * 0.035, 0.055, 0.45, 0, 0.16 + i * 0.10, 0.04, material.steel);
}
const torso = cylinder(spine, "Tapered titanium torso", 0.70, 0.45, 1.16, 0, 0.99, 0.03, material.graphite, 12);
const frontCore = box(spine, "Front torso armor", 0.81, 0.89, 0.14, 0, 1.02, 0.39, material.titanium);
frontCore.rotation.x = -0.10;
for (const side of [-1, 1]) {
  const plate = box(spine, "Angled chest plating " + side, 0.40, 0.55, 0.15, side * 0.34, 1.31, 0.43, material.steel);
  plate.rotation.z = side * 0.16;
  plate.rotation.y = side * 0.12;
  box(spine, "Collar plate " + side, 0.46, 0.12, 0.42, side * 0.28, 1.60, 0.02, material.titanium);
  box(spine, "Chest inlay " + side, 0.05, 0.31, 0.025, side * 0.43, 1.26, 0.55, material.neon).rotation.z = side * 0.13;
  box(spine, "Rib armor " + side, 0.17, 0.12, 0.18, side * 0.44, 0.73, 0.26, material.steel);
  box(spine, "Back vent " + side, 0.23, 0.63, 0.18, side * 0.39, 1.14, -0.40, material.carbon);
  for (let i = 0; i < 4; i++) {
    box(spine, "Heat sink " + side + "-" + i, 0.19, 0.035, 0.04, side * 0.39, 1.37 - i * 0.13, -0.52, material.steel);
  }
}

// The power cell faces forward. The glowing rings animate independently.
cylinder(spine, "Chest power-cell housing", 0.245, 0.245, 0.11, 0, 1.02, 0.52, material.carbon, 40).rotation.x = Math.PI / 2;
orb(spine, "Luminous reactor", 0, 1.02, 0.60, 0.13, 0.13, 0.045, material.neon, 32);
const coreRing = ring(spine, "Inner orbiting energy ring", 0.185, 0.019, 0, 1.02, 0.60, material.neon);
const outerRing = ring(spine, "Outer energy ring", 0.238, 0.010, 0, 1.02, 0.605, material.silver);
for (let i = 0; i < 4; i++) {
  const pin = box(spine, "Reactor mount " + i, 0.042, 0.072, 0.045, 0, 1.02, 0.626, material.steel);
  pin.rotation.z = i * Math.PI / 2;
  pin.position.x = Math.sin(i * Math.PI / 2) * 0.278;
  pin.position.y = 1.02 + Math.cos(i * Math.PI / 2) * 0.278;
}

// Articulated neck and helmet. All facial geometry is original.
cylinder(spine, "Neck servo", 0.16, 0.20, 0.27, 0, 1.80, 0, material.carbon);
ring(spine, "Neck optic ring", 0.17, 0.018, 0, 1.89, 0, material.neon).rotation.x = Math.PI / 2;
const head = new THREE.Group();
head.name = "Motorized head";
head.position.set(0, 1.87, 0.01);
spine.add(head);
orb(head, "Sculpted helmet shell", 0, 0.38, 0, 0.38, 0.46, 0.34, material.steel, 32);
orb(head, "Forehead armor", 0, 0.52, 0.18, 0.36, 0.25, 0.23, material.graphite, 24);
box(head, "Sleek black visor", 0.61, 0.20, 0.085, 0, 0.39, 0.31, material.darkGlass);
box(head, "Visor lightline", 0.49, 0.028, 0.023, 0, 0.41, 0.362, material.neon);
box(head, "Central face ridge", 0.11, 0.13, 0.078, 0, 0.25, 0.334, material.titanium);
box(head, "Jaw guard", 0.40, 0.115, 0.15, 0, 0.08, 0.21, material.graphite);
box(head, "Facial speaker", 0.23, 0.045, 0.025, 0, 0.11, 0.305, material.steel);
for (const side of [-1, 1]) {
  orb(head, "Hearing actuator " + side, side * 0.37, 0.35, 0, 0.10, 0.20, 0.19, material.titanium);
  orb(head, "Antenna mount " + side, side * 0.25, 0.73, -0.09, 0.075, 0.08, 0.07, material.carbon);
  capsuleSegment(head, "Sensor antenna " + side, side * 0.25, 0.73, -0.09, side * 0.29, 0.96, -0.08, 0.023, material.steel);
  orb(head, "Sensor beacon " + side, side * 0.29, 0.97, -0.08, 0.035, 0.035, 0.035, material.neon);
}

// Arm assemblies use parent groups so the shoulders can move naturally.
const arms = [];
for (const side of [-1, 1]) {
  const shoulder = new THREE.Group();
  shoulder.name = (side < 0 ? "Left" : "Right") + " articulated arm";
  shoulder.position.set(side * 0.76, 1.41, 0);
  spine.add(shoulder);
  arms.push({ joint: shoulder, side });
  orb(shoulder, "Shoulder bearing", side * 0.14, -0.03, 0, 0.25, 0.25, 0.27, material.carbon);
  orb(shoulder, "Shoulder armor shell", side * 0.25, -0.04, 0, 0.34, 0.29, 0.31, material.steel);
  box(shoulder, "Shoulder stripe", 0.10, 0.05, 0.24, side * 0.31, 0.19, 0.17, material.neon);
  capsuleSegment(shoulder, "Upper arm mechanism", side * 0.31, -0.18, 0, side * 0.38, -0.88, 0, 0.17, material.carbon);
  const upper = box(shoulder, "Upper arm titanium shield", 0.35, 0.55, 0.31, side * 0.36, -0.49, 0.07, material.titanium);
  upper.rotation.z = -side * 0.06;
  orb(shoulder, "Elbow mechanical joint", side * 0.39, -0.91, 0, 0.185, 0.18, 0.19, material.steel);
  orb(shoulder, "Elbow optical rivet", side * 0.39, -0.91, 0.19, 0.07, 0.07, 0.026, material.neon);
  const forearm = new THREE.Group();
  forearm.name = "Forearm and manipulator";
  forearm.position.set(side * 0.39, -0.92, 0);
  shoulder.add(forearm);
  capsuleSegment(forearm, "Forearm actuator", 0, -0.06, 0, side * 0.06, -0.57, 0.015, 0.13, material.carbon);
  const guard = box(forearm, "Forearm panel", 0.34, 0.49, 0.33, side * 0.04, -0.31, 0.06, material.graphite);
  guard.rotation.z = side * 0.06;
  box(forearm, "Forearm signal", 0.075, 0.37, 0.023, side * 0.04, -0.31, 0.233, material.neon);
  orb(forearm, "Wrist bearing", side * 0.07, -0.64, 0, 0.12, 0.12, 0.12, material.steel);
  const palm = box(forearm, "Five-finger robotic palm", 0.26, 0.25, 0.13, side * 0.07, -0.81, 0.005, material.titanium);
  palm.rotation.z = side * 0.04;
  for (let finger = 0; finger < 4; finger++) {
    const fx = side * 0.07 + (finger - 1.5) * 0.066;
    const length = 0.17 + (finger === 1 || finger === 2 ? 0.06 : 0);
    capsuleSegment(forearm, "Finger " + finger + " first segment", fx, -0.93, 0.02, fx, -0.93 - length * 0.65, 0.025, 0.027, material.steel);
    capsuleSegment(forearm, "Finger " + finger + " tip", fx, -0.93 - length * 0.65, 0.025, fx, -0.93 - length, 0.057, 0.023, material.graphite);
  }
  capsuleSegment(forearm, "Thumb mechanism", side * 0.22, -0.75, 0.02, side * 0.34, -0.88, 0.10, 0.052, material.steel);
  orb(forearm, "Thumb tip", side * 0.35, -0.90, 0.11, 0.045, 0.07, 0.052, material.carbon);
}

// Fully modeled legs, knees, shins, ankles and feet.
for (const side of [-1, 1]) {
  const hip = new THREE.Group();
  hip.name = (side < 0 ? "Left" : "Right") + " articulated leg";
  hip.position.set(side * 0.32, -0.25, 0);
  spine.add(hip);
  orb(hip, "Hip socket", 0, 0, 0, 0.28, 0.23, 0.26, material.carbon);
  const thigh = cylinder(hip, "Thigh actuator", 0.22, 0.19, 0.82, side * 0.045, -0.52, 0, material.graphite, 12);
  thigh.rotation.z = -side * 0.04;
  const thighArmor = box(hip, "Front thigh armor", 0.40, 0.70, 0.22, side * 0.05, -0.47, 0.17, material.titanium);
  thighArmor.rotation.z = -side * 0.05;
  box(hip, "Thigh light strip", 0.045, 0.39, 0.027, side * 0.05, -0.48, 0.298, material.neon);
  orb(hip, "Knee bearing", side * 0.06, -1.02, 0.02, 0.22, 0.21, 0.22, material.carbon);
  box(hip, "Kneecap", 0.34, 0.26, 0.15, side * 0.07, -1.03, 0.19, material.steel);
  box(hip, "Kneecap light", 0.22, 0.027, 0.02, side * 0.07, -1.04, 0.277, material.neon);
  capsuleSegment(hip, "Lower leg actuator", side * 0.06, -1.11, 0, side * 0.05, -1.84, -0.04, 0.15, material.carbon);
  const shin = box(hip, "Shin shield", 0.37, 0.73, 0.31, side * 0.06, -1.47, 0.08, material.graphite);
  shin.rotation.x = -0.045;
  box(hip, "Shin spine", 0.15, 0.53, 0.035, side * 0.06, -1.49, 0.253, material.steel);
  box(hip, "Shin optical stripe", 0.035, 0.46, 0.02, side * 0.06, -1.49, 0.279, material.neon);
  orb(hip, "Ankle servo", side * 0.05, -1.89, -0.035, 0.18, 0.13, 0.18, material.steel);
  box(hip, "Heel", 0.39, 0.17, 0.32, side * 0.05, -2.06, -0.16, material.carbon);
  const foot = box(hip, "Full articulated foot", 0.44, 0.22, 0.79, side * 0.05, -2.10, 0.25, material.titanium);
  foot.rotation.x = -0.04;
  box(hip, "Toe armor", 0.45, 0.10, 0.24, side * 0.05, -2.16, 0.56, material.steel);
  for (let j = 0; j < 3; j++) {
    box(hip, "Toe seam " + j, 0.022, 0.03, 0.22, side * 0.05 + (j - 1) * 0.10, -2.03, 0.54, material.carbon);
  }
}

// Space beneath the humanoid: perspective grid, emissive floor rings and particles.
const grid = new THREE.GridHelper(13, 28, 0x1a789a, 0x10233b);
grid.position.y = -2.57;
grid.material.transparent = true;
grid.material.opacity = 0.23;
scene.add(grid);
const ground = new THREE.Group();
ground.position.y = -2.535;
scene.add(ground);
for (const radius of [1.10, 1.22, 2.0]) {
  const edge = new THREE.Mesh(
    new THREE.RingGeometry(radius, radius + 0.013, 96),
    new THREE.MeshBasicMaterial({ color: 0x298aff, transparent: true, opacity: radius === 2.0 ? 0.18 : 0.5, side: THREE.DoubleSide, depthWrite: false })
  );
  edge.rotation.x = -Math.PI / 2;
  ground.add(edge);
}
const stars = new THREE.BufferGeometry();
const points = [];
let seed = 1917;
function random() { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }
for (let i = 0; i < 100; i++) {
  const theta = random() * Math.PI * 2;
  const radius = 1.9 + random() * 3.8;
  points.push(Math.cos(theta) * radius, -2.25 + random() * 5.4, Math.sin(theta) * radius - 0.8);
}
stars.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
scene.add(new THREE.Points(stars, new THREE.PointsMaterial({ color: 0x61bfff, size: 0.026, transparent: true, opacity: 0.55, depthWrite: false })));

// Glass-like 3D dashboards flank the body. Clicking one cycles the mode.
function dashboard(x, y, z, rotation) {
  const group = new THREE.Group();
  group.position.set(x, y, z);
  group.rotation.y = rotation;
  scene.add(group);
  const border = box(group, "Holographic UI border", 1.66, 0.86, 0.015, 0, 0, -0.025, new THREE.MeshBasicMaterial({ color: 0x3274ba, transparent: true, opacity: 0.25, depthWrite: false }));
  const front = mesh(group, "Interactive holographic display", new THREE.PlaneGeometry(1.60, 0.81), new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, depthWrite: false }), 0, 0, 0.01);
  front.userData.hologram = true;
  return { group, front, border };
}
const dashboards = [dashboard(-2.00, 1.20, -0.16, 0.25), dashboard(2.08, 0.64, -0.25, -0.30)];

function panelTexture(heading, metric, accent) {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 390;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(5,22,39,0.91)";
  ctx.fillRect(0, 0, 768, 390);
  ctx.strokeStyle = accent;
  ctx.lineWidth = 4;
  ctx.strokeRect(8, 8, 752, 374);
  ctx.fillStyle = accent;
  ctx.fillRect(39, 43, 8, 35);
  ctx.fillStyle = "#e5f6ff";
  ctx.font = "bold 37px Arial, sans-serif";
  ctx.fillText(heading, 66, 75);
  ctx.font = "25px Arial, sans-serif";
  ctx.fillStyle = "#8dbed2";
  ctx.fillText(metric, 44, 132);
  ctx.strokeStyle = accent;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(45, 307);
  const values = [0.36, 0.44, 0.32, 0.65, 0.59, 0.82, 0.69, 0.91];
  for (let i = 0; i < values.length; i++) {
    const xx = 45 + i * 94;
    const yy = 306 - values[i] * 115;
    ctx.lineTo(xx, yy);
  }
  ctx.stroke();
  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = i % 3 === 0 ? accent : "rgba(100,174,212,0.38)";
    ctx.fillRect(50 + i * 88, 342, 58, 8);
  }
  ctx.fillStyle = "#6da6c0";
  ctx.font = "22px Arial, sans-serif";
  ctx.fillText("AION / RESEARCH CONCEPT", 44, 375);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4);
  return texture;
}

function updateMode(mode) {
  if (!modes[mode]) return;
  activeMode = mode;
  const data = modes[mode];
  material.neon.color.setHex(data.accent);
  material.neon.emissive.setHex(data.accent);
  glow.color.setHex(data.accent);
  document.documentElement.style.setProperty("--robot-accent", data.css);
  document.querySelectorAll("[data-mode]").forEach(button => {
    const selected = button.dataset.mode === mode;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  const heading = document.getElementById("mode-title");
  const description = document.getElementById("mode-description");
  if (heading) heading.textContent = data.title;
  if (description) description.textContent = data.description;
  dashboards.forEach((dash, i) => {
    if (dash.front.material.map) dash.front.material.map.dispose();
    dash.front.material.map = panelTexture(data.screens[i][0], data.screens[i][1], data.css);
    dash.front.material.needsUpdate = true;
  });
}
updateMode(activeMode);
if (backgroundMode) {
  dashboards.forEach(dashboard => { dashboard.group.visible = false; });
  grid.material.opacity = 0.13;
}

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let pointerStart = null;
renderer.domElement.addEventListener("pointerdown", event => {
  pointerStart = { x: event.clientX, y: event.clientY };
});
renderer.domElement.addEventListener("pointerup", event => {
  if (!pointerStart || Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) > 6) return;
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  if (raycaster.intersectObjects(dashboards.map(d => d.front), false).length) {
    const sequence = ["assess", "design", "validate"];
    updateMode(sequence[(sequence.indexOf(activeMode) + 1) % sequence.length]);
  }
  pointerStart = null;
});
document.querySelectorAll("[data-mode]").forEach(button => {
  button.addEventListener("click", () => updateMode(button.dataset.mode));
});
document.getElementById("reset-view")?.addEventListener("click", () => controls.reset());
const motionButton = document.getElementById("toggle-motion");
function updateMotionButton() {
  if (motionButton) {
    motionButton.textContent = motion ? "Pause motion" : "Resume motion";
    motionButton.setAttribute("aria-pressed", String(!motion));
  }
}
motionButton?.addEventListener("click", () => { motion = !motion; updateMotionButton(); });
updateMotionButton();

// Export an actual reusable glTF binary mesh. This does not export the WebGL UI.
const exportButton = document.getElementById("export-glb");
exportButton?.addEventListener("click", async () => {
  exportButton.disabled = true;
  exportButton.textContent = "Preparing GLB...";
  try {
    const { GLTFExporter } = await import("three/addons/exporters/GLTFExporter.js");
    const exporter = new GLTFExporter();
    await new Promise((resolve, reject) => exporter.parse(robot, result => {
      const file = new Blob([result], { type: "model/gltf-binary" });
      const url = URL.createObjectURL(file);
      const a = document.createElement("a");
      a.href = url;
      a.download = "aion-7-ai-solutions.glb";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      resolve();
    }, reject, { binary: true, onlyVisible: true, trs: true }));
  } catch (error) {
    console.error("GLB export failed", error);
    alert("The model could not be exported. Please retry in a modern browser.");
  } finally {
    exportButton.disabled = false;
    exportButton.textContent = "Download 3D model (.glb)";
  }
});

function resize() {
  const width = Math.max(stage.clientWidth, 1);
  const height = Math.max(stage.clientHeight, 1);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}
new ResizeObserver(resize).observe(stage);
resize();
window.addEventListener("visibilitychange", () => {
  if (document.hidden) clock.stop();
  else clock.start();
});
status.hidden = true;

const clock = new THREE.Clock();
let ambientFrameElapsed = 0;
let stillBackgroundDrawn = false;
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  if (document.hidden) return;
  if (backgroundMode) {
    // Limit GPU load on a continuously visible canvas.
    if (reducedMotion && stillBackgroundDrawn) return;
    ambientFrameElapsed += dt;
    const interval = window.innerWidth < 800 ? 1 / 12 : 1 / 24;
    if (!reducedMotion && ambientFrameElapsed < interval) return;
    ambientFrameElapsed = 0;
    stillBackgroundDrawn = true;
  }
  if (motion) elapsed += dt;
  robot.position.y = Math.sin(elapsed * 1.3) * 0.032;
  head.rotation.y = Math.sin(elapsed * 0.52) * 0.07;
  arms.forEach(({ joint, side }) => {
    joint.rotation.z = side * (0.06 + Math.sin(elapsed * 0.8 + side) * 0.028);
    joint.rotation.x = Math.sin(elapsed * 0.67 + side) * 0.025;
  });
  coreRing.rotation.z = elapsed * 0.75;
  outerRing.rotation.z = -elapsed * 0.23;
  ground.rotation.y = elapsed * 0.04;
  dashboards[0].group.position.y = 1.20 + Math.sin(elapsed * 0.9) * 0.035;
  dashboards[1].group.position.y = 0.64 + Math.cos(elapsed * 0.85) * 0.035;
  if (!backgroundMode) controls.update();
  renderer.render(scene, camera);
});
renderer.domElement.addEventListener("webglcontextlost", () => {
  status.hidden = false;
  status.textContent = "WebGL context lost. Reload the page to restore the 3D scene.";
});
