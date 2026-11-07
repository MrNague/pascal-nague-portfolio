# Pascal Nague — AI Engineering Portfolio

Personal portfolio showcasing my work in **AI Engineering, Machine Learning, ML systems, AI evaluation, and software development**.

**Live website:** https://portfolio.naguepc.de/

## Selected work

- **[ImmoLens](https://github.com/MrNague/ImmoLens)** — an end-to-end ML application with scikit-learn, MLflow, FastAPI and a React/TypeScript frontend.
- **[Minimal Dataset for PyTorch](https://github.com/MrNague/minimal-dataset-pytorch)** — a PyTorch data-loading library developed during my completed Bachelor Project at DFKI.
- **[Speech & LLM Quality Lab](https://github.com/MrNague/speech-llm-quality-lab)** — quality-evaluation tools for ASR and LLM workflows.
- **[YOLO Webcam Detection](https://github.com/MrNague/yolo-webcam-detection)** — a modular real-time computer vision application.
- **[Food-101 DataLoader Benchmark](https://github.com/MrNague/food101-dataloader-benchmark)** — external performance validation for the data-loading library.

**Project status:** ImmoLens currently uses **synthetic training data**. Its outputs are a technical demonstration, not validated property valuations.

## Website

This portfolio is built using **HTML5, CSS3 and vanilla JavaScript**, without a frontend framework or build step.

Features:
- Responsive layout and mobile navigation
- Existing light and dark themes with persisted preference
- English, German and French translations
- Subtle CSS holographic hero effects that respect `prefers-reduced-motion`
- Project descriptions and links to source code
- Contact form powered by Netlify Forms

The hero photograph, site typography and both theme palettes remain unchanged by the holographic refresh.

## Local preview

Use a simple local HTTP server:

```bash
python -m http.server 8000
```

Then open http://localhost:8000/. Netlify Forms requires a proper Netlify deployment to process submissions.

## File structure

```text
.
├── index.html
├── css/
│   └── global.css
├── js/
│   ├── main.js
│   └── translations.js
├── img/
└── docs/
```

## About

I am a Computer Science student at RPTU Kaiserslautern-Landau, focused on building and evaluating reliable AI applications and ML systems.

[Portfolio](https://portfolio.naguepc.de/) · [GitHub profile](https://github.com/MrNague) · [LinkedIn](https://www.linkedin.com/in/pascal-nague/)
