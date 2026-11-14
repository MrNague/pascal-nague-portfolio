# Pascal Nague — Portfolio

Personal website: https://portfolio.naguepc.de/

I'm a computer science student at RPTU Kaiserslautern-Landau, interested in AI consulting and the assessment of practical AI use cases. This site presents my technical work, university experience and current interests.

## Projects

- [Minimal Dependency Dataset Library for PyTorch](https://github.com/MrNague/minimal-dataset-pytorch): completed DFKI Bachelor Project on Parquet-backed image loading and benchmarks. A follow-up [Food-101 study](https://github.com/MrNague/food101-dataloader-benchmark) showed that PyTorch scaled better under a different workload.
- [Speech & LLM Quality Lab](https://github.com/MrNague/speech-llm-quality-lab): ongoing ASR data validation and evaluation tooling; further features are in development.
- [ImmoLens](https://github.com/MrNague/ImmoLens): real-estate prediction prototype using synthetic data. Predictions are not validated market valuations.
- [YOLO Webcam Detection](https://github.com/MrNague/yolo-webcam-detection): webcam object detection and alert logic with YOLOv8 and OpenCV.

## Website

The site uses HTML, CSS and vanilla JavaScript, without a build step. It includes English, German and French translations, responsive navigation, light and dark themes, and a Netlify contact form.

The homepage content describes my **career direction**, not prior client consulting experience. The six cards under *Areas of Interest* are subjects I study and practice, not commercial services.

## Local preview

Run `python -m http.server 8000`, then open http://localhost:8000/. Netlify Forms requires a deployment on Netlify to process submissions.

## Files

- `index.html`: HTML sections and metadata
- `css/global.css`: responsive layout and themes
- `js/main.js`: navigation, language switching and theme controls
- `js/translations.js`: English, German and French text
- `img/`: local assets

[LinkedIn](https://www.linkedin.com/in/pascal-nague/) · [GitHub](https://github.com/MrNague)
