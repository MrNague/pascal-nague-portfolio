"use strict";

const translations = {

    en: {

        meta: {
            title: "Pascal Nague | Machine Learning, Data & AI Portfolio",
            description:
                "Portfolio of Pascal Nague, Computer Science student in Germany focused on Machine Learning, Data Engineering, AI evaluation, computer vision and PyTorch systems.",
            locale: "en_US"
        },

        accessibility: {

            homeLogo:
                "Reload page and go to home",

            logoAlt:
                "Pascal Nague",

            footerLogoAlt:
                "Mr. Nague",

            primaryNav:
                "Primary navigation",

            languageSelector:
                "Language selector",

            themeDark:
                "Switch to dark mode",

            themeLight:
                "Switch to light mode",

            changeTheme:
                "Change theme",

            openMenu:
                "Open navigation menu",

            closeMenu:
                "Close navigation menu",

            menuLabel:
                "Menu",

            footerNav:
                "Footer navigation",

            language: {
                en: "English",
                de: "German",
                fr: "French"
            },

            social: {
                linkedin: "LinkedIn profile",
                youtubeMain: "YouTube channel",
                youtubeDe: "German YouTube channel",
                youtubeEn: "English YouTube channel",
                xing: "Xing profile",
                github: "GitHub profile"
            }
        },

        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            skills: "Skills",
            portfolio: "Portfolio",
            contact: "Contact"
        },

        hero: {

            badge:
                "AI, Machine Learning & Data",

            title:
                "Hello, I'm Pascal Nague",

            description:
                "Computer Science student specializing in Machine Learning and Data. I develop practical AI solutions, analyze data, evaluate models and optimize machine learning pipelines with Python and PyTorch."
        },

        about: {

            title:
                "About",

            who:
                "Who I am",

            p1:
                "I’m Pascal Nague, a Computer Science student at RPTU Kaiserslautern-Landau with a strong focus on Machine Learning, Data and AI systems.",

            p2:
                "I enjoy understanding how intelligent systems work — from the data they consume to the way their performance, reliability and efficiency are measured.",

            p3:
                "My work combines Python, PyTorch, data analysis, machine learning experimentation and performance benchmarking. My completed Bachelor Project at DFKI focused on efficient PyTorch data loading, concurrent pipelines and reproducible performance measurement, followed by external validation on Food-101.",

            p4:
                "I am especially interested in building practical systems that are measurable, understandable and useful in real-world environments.",

            currentFocus:
                "Current focus",

            currentFocusValue:
                "Machine Learning · Data Engineering · AI Systems",

            bachelorProject:
                "Bachelor Project",

            bachelorProjectValue:
                "Efficient PyTorch Data Loading",

            coreTechnologies:
                "Core technologies",

            coreTechnologiesValue:
                "Python · PyTorch · SQL · Git · Linux · Docker",

            interests:
                "Interests",

            interestsValue:
                "ML Systems · LLM Evaluation · Computer Vision · Data Pipelines",

            teachingCommunity:
                "Teaching & Community",

            teachingCommunityValue:
                "RPTU Tutor · JustCode Technical Mentor & Coordinator",

            location:
                "Location",

            germany:
                "Germany"
        },

        services: {

            eyebrow:
                "What I can do",

            title:
                "Services",

            intro:
                "I work on practical problems across data, machine learning and AI evaluation. My focus is on building measurable solutions, understanding model behaviour, automating data workflows and improving the performance of ML pipelines.",

            data: {

                title:
                    "Data Analysis & Preparation",

                description:
                    "Cleaning, exploring and structuring datasets so that raw data becomes reliable, understandable and ready for analysis or machine learning."
            },

            ml: {

                title:
                    "Machine Learning Prototyping",

                description:
                    "Building initial classification, regression or clustering models, establishing baselines and evaluating whether an ML approach is useful."
            },

            evaluation: {

                title:
                    "ML Model Evaluation",

                description:
                    "Measuring model performance using appropriate metrics, error analysis and structured comparisons to understand where a model succeeds or fails."
            },

            llm: {

                title:
                    "AI & LLM Quality Evaluation",

                description:
                    "Designing test cases, evaluation criteria and error categories to assess chatbot and LLM behaviour across realistic prompts and edge cases."
            },

            automation: {

                title:
                    "Data Workflow Automation",

                description:
                    "Automating repetitive data tasks such as merging files, transforming exports, calculating metrics and generating repeatable reports."
            },

            performance: {

                title:
                    "PyTorch Pipeline Performance Analysis",

                description:
                    "Benchmarking data-loading pipelines, comparing DataLoader configurations and identifying bottlenecks that affect throughput and model training."
            },

            tags: {
                prototyping: "Prototyping",
                precision: "Precision",
                errorAnalysis: "Error Analysis",
                evaluation: "Evaluation",
                automation: "Automation",
                workflows: "Workflows",
                benchmarking: "Benchmarking"
            }
        },

        skills: {

            eyebrow:
                "Technical profile",

            title:
                "Skills & Technologies",

            intro:
                "My technical background combines software development, data analysis, machine learning and performance-oriented ML systems.",

            programming:
                "Programming",

            programmingDetails:
                "Python · Java · SQL · HTML · CSS · JavaScript",

            dataAnalysis:
                "Data Analysis",

            dataAnalysisDetails:
                "Data Cleaning · Exploratory Data Analysis · Data Visualization · Numerical Computing",

            ml:
                "Machine Learning",

            mlDetails:
                "Classification · Regression · Model Evaluation · Cross-Validation · Error Analysis",

            deepLearning:
                "Deep Learning & Computer Vision",

            deepLearningDetails:
                "PyTorch · CNNs · YOLOv8 · OpenCV · Image Classification · Training · Validation · Image Preprocessing",

            systems:
                "ML Systems & Performance",

            systemsDetails:
                "PyTorch DataLoader · Data Pipelines · Concurrency · Multithreading · Multiprocessing · Throughput Benchmarking · Bottleneck Analysis",

            llm:
                "AI & LLM Evaluation",

            llmDetails:
                "Test Case Design · WER/CER · ASR Evaluation · Error Classification · Quality Assessment",

            projectManagement:
                "Project & Team Coordination",

            projectManagementDetails:
                "Project Planning · Team Coordination · Progress Tracking · Mentoring · Onboarding · Technical Communication · Documentation",

            coreStack:
                "Core stack",

            tools:
                "Tools I work with",

            toolsDescription:
                "Technologies and environments I use across development, experimentation and evaluation.",

            currentFocus:
                "Current focus"
        },

        focus: {

            machineLearning:
                "Machine Learning",

            dataPipelines:
                "Data Pipelines",

            mlEvaluation:
                "ML Evaluation",

            llmEvaluation:
                "LLM Evaluation",

            performanceBenchmarking:
                "Performance Benchmarking",

            computerVision:
                "Computer Vision"
        },

        experience: {

            eyebrow:
                "Experience & Community",

            title:
                "Teaching, Mentoring & Coordination",

            tutor: {

                title:
                    "Tutor — Logic and Semantics of Programming Languages",

                period:
                    "RPTU Kaiserslautern-Landau · Oct 2026 – Apr 2027",

                highlight1:
                    "Conducting tutorials in Logic and Semantics of Programming Languages.",

                highlight2:
                    "Explaining theoretical concepts through exercises, examples and collaborative problem solving.",

                highlight3:
                    "Supporting students in understanding formal methods, proofs and semantic concepts.",

                highlight4:
                    "Supporting students with exercises and exam preparation."
            },

            justcode: {

                title:
                    "Volunteer — Technical Mentor & Community Coordinator",

                period:
                    "JustCode-KL · since Oct 2024",

                highlight1:
                    "Progressed from learner/practitioner to developer and later to mentoring and coordination responsibilities.",

                highlight2:
                    "Coordinating technical talkshows and community activities at JustCode-KL.",

                highlight3:
                    "Mentoring and onboarding new members in programming, communication and teamwork.",

                highlight4:
                    "Supporting members with technical questions and throughout their academic studies."
            }
        },

        projects: {

            eyebrow:
                "Selected work",

            title:
                "Portfolio",

            intro:
                "Selected engineering projects across ML systems, AI evaluation, computer vision, end-to-end ML applications and performance benchmarking.",

            view:
                "View project",

            minimal: {

                title:
                    "Minimal Dependency Dataset Library for PyTorch",

                visual:
                    "Minimal Dataset<br>for PyTorch",

                category:
                    "ML Systems · Bachelor Project",

                status:
                    "Completed · DFKI",

                description:
                    "A lightweight experimental library for Parquet-backed image datasets with a custom multi-threaded DataLoader, throughput instrumentation and reproducible benchmarks. The optimized loader reached a measured peak of 3,245 samples/s on the project benchmark and was published as a PyPI package."
            },

            speech: {

                title:
                    "Speech & LLM Quality Lab",

                visual:
                    "Speech & LLM<br>Quality Lab",

                category:
                    "AI Evaluation",

                status:
                    "Active development",

                description:
                    "An engineering and learning project for evaluating French speech-to-text outputs and reviewing language-model responses. The current foundation includes manifest validation, ASR pilot tooling, WER/CER metrics, reporting and automated tests."
            },

            food: {

                title:
                    "Real-World Food-101 DataLoader Benchmark",

                visual:
                    "Food-101<br>Benchmark",

                category:
                    "External Validation",

                status:
                    "ML Systems",

                description:
                    "External validation of the custom PyTorch data-loading library on a reproducible 10,000-image Food-101 workload. The experiments compare scaling across worker counts, resolutions and batch sizes and demonstrate that DataLoader performance is workload-dependent."
            },

            yolo: {

                title:
                    "YOLO Webcam Detection",

                visual:
                    "YOLO Webcam<br>Detection",

                category:
                    "Computer Vision",

                status:
                    "Real-time application",

                description:
                    "A modular real-time computer-vision application built with YOLOv8 and OpenCV, including webcam streaming, person filtering, configurable alert logic, automated screenshots and runtime statistics."
            },

            estate: {

                title:
                    "Real Estate Price Prediction",

                visual:
                    "Real Estate<br>Price Prediction",

                category:
                    "End-to-End ML",

                status:
                    "ML Application",

                description:
                    "An end-to-end machine-learning application covering data generation and feature engineering, Random Forest modelling, MLflow experiment tracking, a FastAPI prediction API, a Streamlit interface and Docker-based packaging.",

                private:
                    "Private repository"
            },

            tags: {

                concurrency:
                    "Concurrency",

                benchmarking:
                    "Benchmarking",

                llmEvaluation:
                    "LLM Evaluation",

                computerVision:
                    "Computer Vision"
            }
        },

        contact: {

            eyebrow:
                "Get in touch",

            title:
                "Let's work together",

            description:
                "Whether you have a data problem, a machine learning project, an AI evaluation task or simply want to discuss a technical collaboration, feel free to contact me.",

            availability:
                "Open to Werkstudent opportunities, projects and technical collaborations.",

            email:
                "Email",

            phone:
                "Phone"
        },

        form: {

            firstname:
                "First name",

            lastname:
                "Last name",

            email:
                "Email",

            subject:
                "Subject",

            message:
                "Message",

            firstnamePlaceholder:
                "Your first name",

            lastnamePlaceholder:
                "Your last name",

            subjectPlaceholder:
                "What would you like to discuss?",

            messagePlaceholder:
                "Tell me a little about your project or opportunity...",

            send:
                "Send message",

            honeypot:
                "Do not fill this out:"
        },

        footer: {

            description:
                "Computer Science student focused on Machine Learning, Data and AI systems.",

            navigation:
                "Navigation",

            connect:
                "Connect",

            rights:
                "© 2026 Pascal Nague. All rights reserved.",

            top:
                "Back to top"
        }
    },


    de: {

        meta: {

            title:
                "Pascal Nague | Machine Learning, Data & KI Portfolio",

            description:
                "Portfolio von Pascal Nague, Informatikstudent in Deutschland mit Schwerpunkt Machine Learning, Data Engineering, KI-Evaluation, Computer Vision und PyTorch-Systeme.",

            locale:
                "de_DE"
        },

        accessibility: {

            homeLogo:
                "Seite neu laden und zur Startseite wechseln",

            logoAlt:
                "Pascal Nague",

            footerLogoAlt:
                "Mr. Nague",

            primaryNav:
                "Hauptnavigation",

            languageSelector:
                "Sprachauswahl",

            themeDark:
                "Zum dunklen Modus wechseln",

            themeLight:
                "Zum hellen Modus wechseln",

            changeTheme:
                "Darstellung ändern",

            openMenu:
                "Navigationsmenü öffnen",

            closeMenu:
                "Navigationsmenü schließen",

            menuLabel:
                "Menü",

            footerNav:
                "Footer-Navigation",

            language: {
                en: "Englisch",
                de: "Deutsch",
                fr: "Französisch"
            },

            social: {
                linkedin: "LinkedIn-Profil",
                youtubeMain: "YouTube-Kanal",
                youtubeDe: "Deutscher YouTube-Kanal",
                youtubeEn: "Englischer YouTube-Kanal",
                xing: "Xing-Profil",
                github: "GitHub-Profil"
            }
        },

        nav: {
            home: "Start",
            about: "Über mich",
            services: "Leistungen",
            skills: "Kompetenzen",
            portfolio: "Projekte",
            contact: "Kontakt"
        },

        hero: {

            badge:
                "KI, Machine Learning & Data",

            title:
                "Hallo, ich bin Pascal Nague",

            description:
                "Informatikstudent mit Schwerpunkt Machine Learning und Data. Ich entwickle praxisnahe KI-Lösungen, analysiere Daten, evaluiere Modelle und optimiere Machine-Learning-Pipelines mit Python und PyTorch."
        },

        about: {

            title:
                "Über mich",

            who:
                "Wer ich bin",

            p1:
                "Ich bin Pascal Nague, Informatikstudent an der RPTU Kaiserslautern-Landau mit einem starken Schwerpunkt auf Machine Learning, Data und KI-Systemen.",

            p2:
                "Mich interessiert, wie intelligente Systeme tatsächlich funktionieren — von den Daten, die sie verarbeiten, bis hin zur Messung ihrer Leistung, Zuverlässigkeit und Effizienz.",

            p3:
                "Meine Arbeit verbindet Python, PyTorch, Datenanalyse, Machine-Learning-Experimente und Performance-Benchmarking. Mein abgeschlossenes Bachelorprojekt am DFKI beschäftigte sich mit effizientem PyTorch-Datenladen, parallelen Pipelines und reproduzierbaren Performance-Messungen sowie einer anschließenden externen Validierung mit Food-101.",

            p4:
                "Besonders interessieren mich praxisnahe Systeme, die messbar, nachvollziehbar und in realen Anwendungsszenarien nützlich sind.",

            currentFocus:
                "Aktueller Schwerpunkt",

            currentFocusValue:
                "Machine Learning · Data Engineering · KI-Systeme",

            bachelorProject:
                "Bachelorprojekt",

            bachelorProjectValue:
                "Effizientes PyTorch-Datenladen",

            coreTechnologies:
                "Kerntechnologien",

            coreTechnologiesValue:
                "Python · PyTorch · SQL · Git · Linux · Docker",

            interests:
                "Interessengebiete",

            interestsValue:
                "ML-Systeme · LLM-Evaluation · Computer Vision · Datenpipelines",

            teachingCommunity:
                "Lehre & Engagement",

            teachingCommunityValue:
                "RPTU Tutor · JustCode Technischer Mentor & Koordinator",

            location:
                "Standort",

            germany:
                "Deutschland"
        },

        services: {

            eyebrow:
                "Was ich anbiete",

            title:
                "Leistungen",

            intro:
                "Ich arbeite an praxisnahen Aufgaben in den Bereichen Daten, Machine Learning und KI-Evaluation. Mein Fokus liegt auf messbaren Lösungen, dem Verständnis von Modellverhalten, der Automatisierung von Datenworkflows und der Optimierung von ML-Pipelines.",

            data: {

                title:
                    "Datenanalyse & Datenaufbereitung",

                description:
                    "Bereinigung, Exploration und Strukturierung von Datensätzen, damit Rohdaten zuverlässig, verständlich und für Analysen oder Machine Learning nutzbar werden."
            },

            ml: {

                title:
                    "Machine-Learning-Prototyping",

                description:
                    "Entwicklung erster Klassifikations-, Regressions- oder Clustering-Modelle, Aufbau von Baselines und Bewertung, ob ein ML-Ansatz für das jeweilige Problem sinnvoll ist."
            },

            evaluation: {

                title:
                    "ML-Modell-Evaluation",

                description:
                    "Messung der Modellleistung mit geeigneten Metriken, Fehleranalysen und strukturierten Vergleichen, um Stärken und Schwächen eines Modells zu verstehen."
            },

            llm: {

                title:
                    "KI- & LLM-Qualitätsevaluation",

                description:
                    "Entwicklung von Testfällen, Bewertungskriterien und Fehlerkategorien zur systematischen Analyse von Chatbot- und LLM-Verhalten."
            },

            automation: {

                title:
                    "Automatisierung von Datenworkflows",

                description:
                    "Automatisierung wiederkehrender Datenaufgaben wie Dateizusammenführung, Transformation von Exporten, Metrikberechnung und reproduzierbare Berichtserstellung."
            },

            performance: {

                title:
                    "PyTorch-Pipeline-Performance-Analyse",

                description:
                    "Benchmarking von Datenlade-Pipelines, Vergleich von DataLoader-Konfigurationen und Identifikation von Engpässen, die Durchsatz und Modelltraining beeinflussen."
            },

            tags: {
                prototyping: "Prototyping",
                precision: "Präzision",
                errorAnalysis: "Fehleranalyse",
                evaluation: "Evaluation",
                automation: "Automatisierung",
                workflows: "Workflows",
                benchmarking: "Benchmarking"
            }
        },

        skills: {

            eyebrow:
                "Technisches Profil",

            title:
                "Kompetenzen & Technologien",

            intro:
                "Mein technischer Hintergrund verbindet Softwareentwicklung, Datenanalyse, Machine Learning und performanceorientierte ML-Systeme.",

            programming:
                "Programmierung",

            programmingDetails:
                "Python · Java · SQL · HTML · CSS · JavaScript",

            dataAnalysis:
                "Datenanalyse",

            dataAnalysisDetails:
                "Datenbereinigung · Explorative Datenanalyse · Datenvisualisierung · Numerisches Rechnen",

            ml:
                "Machine Learning",

            mlDetails:
                "Klassifikation · Regression · Modellevaluation · Cross-Validation · Fehleranalyse",

            deepLearning:
                "Deep Learning & Computer Vision",

            deepLearningDetails:
                "PyTorch · CNNs · YOLOv8 · OpenCV · Bildklassifikation · Training · Validierung · Bildvorverarbeitung",

            systems:
                "ML-Systeme & Performance",

            systemsDetails:
                "PyTorch DataLoader · Datenpipelines · Nebenläufigkeit · Multithreading · Multiprocessing · Throughput-Benchmarking · Engpassanalyse",

            llm:
                "KI- & LLM-Evaluation",

            llmDetails:
                "Testfall-Design · WER/CER · ASR-Evaluation · Fehlerklassifikation · Qualitätsbewertung",

            projectManagement:
                "Projekt- & Teamkoordination",

            projectManagementDetails:
                "Projektplanung · Teamkoordination · Fortschrittsverfolgung · Mentoring · Onboarding · Technische Kommunikation · Dokumentation",

            coreStack:
                "Core Stack",

            tools:
                "Tools & Technologien",

            toolsDescription:
                "Technologien und Entwicklungsumgebungen, die ich für Entwicklung, Experimente und Evaluation einsetze.",

            currentFocus:
                "Aktueller Schwerpunkt"
        },

        focus: {

            machineLearning:
                "Machine Learning",

            dataPipelines:
                "Datenpipelines",

            mlEvaluation:
                "ML-Evaluation",

            llmEvaluation:
                "LLM-Evaluation",

            performanceBenchmarking:
                "Performance-Benchmarking",

            computerVision:
                "Computer Vision"
        },

        experience: {

            eyebrow:
                "Erfahrung & Engagement",

            title:
                "Lehre, Mentoring & Koordination",

            tutor: {

                title:
                    "Tutor — Logik und Semantik von Programmiersprachen",

                period:
                    "RPTU Kaiserslautern-Landau · Okt. 2026 – Apr. 2027",

                highlight1:
                    "Durchführung von Tutorien zu Logik und Semantik von Programmiersprachen.",

                highlight2:
                    "Vermittlung theoretischer Konzepte anhand von Übungen, Beispielen und gemeinsamer Problemlösung.",

                highlight3:
                    "Unterstützung der Studierenden beim Verständnis formaler Methoden, Beweisführung und semantischer Konzepte.",

                highlight4:
                    "Begleitung der Studierenden bei Übungsaufgaben und der Klausurvorbereitung."
            },

            justcode: {

                title:
                    "Ehrenamt — Technischer Mentor & Community-Koordinator",

                period:
                    "JustCode-KL · seit Okt. 2024",

                highlight1:
                    "Entwicklung vom Lernenden/Praktizierenden über die Rolle als Entwickler hin zu einer Mentoring- und Koordinationsfunktion.",

                highlight2:
                    "Koordination von technischen Talkshows und Community-Aktivitäten bei JustCode-KL.",

                highlight3:
                    "Mentoring und Einarbeitung neuer Mitglieder in Programmierung, Kommunikation und Teamarbeit.",

                highlight4:
                    "Unterstützung der Mitglieder bei technischen Fragestellungen und im akademischen Studium."
            }
        },

        projects: {

            eyebrow:
                "Ausgewählte Arbeiten",

            title:
                "Projekte",

            intro:
                "Ausgewählte Engineering-Projekte aus ML-Systemen, KI-Evaluation, Computer Vision, End-to-End-ML-Anwendungen und Performance-Benchmarking.",

            view:
                "Projekt ansehen",

            minimal: {

                title:
                    "Minimal Dependency Dataset-Bibliothek für PyTorch",

                visual:
                    "Minimal Dataset<br>für PyTorch",

                category:
                    "ML-Systeme · Bachelorprojekt",

                status:
                    "Abgeschlossen · DFKI",

                description:
                    "Eine leichtgewichtige experimentelle Bibliothek für Parquet-basierte Bilddatensätze mit einem eigenen Multi-Threaded DataLoader, Throughput-Instrumentierung und reproduzierbaren Benchmarks. Der optimierte Loader erreichte im Projektbenchmark einen gemessenen Spitzenwert von 3.245 Samples/s und wurde als PyPI-Paket veröffentlicht."
            },

            speech: {

                title:
                    "Speech & LLM Quality Lab",

                visual:
                    "Speech & LLM<br>Quality Lab",

                category:
                    "KI-Evaluation",

                status:
                    "In aktiver Entwicklung",

                description:
                    "Ein Engineering- und Lernprojekt zur Evaluation französischer Speech-to-Text-Ausgaben und zur Bewertung von Sprachmodellantworten. Die aktuelle Grundlage umfasst Manifest-Validierung, ASR-Pilotwerkzeuge, WER/CER-Metriken, Reporting und automatisierte Tests."
            },

            food: {

                title:
                    "Real-World Food-101 DataLoader-Benchmark",

                visual:
                    "Food-101<br>Benchmark",

                category:
                    "Externe Validierung",

                status:
                    "ML-Systeme",

                description:
                    "Externe Validierung der eigenen PyTorch-Datenladebibliothek mit einem reproduzierbaren Food-101-Workload von 10.000 Bildern. Die Experimente vergleichen die Skalierung über verschiedene Worker-Zahlen, Auflösungen und Batchgrößen und zeigen die Workload-Abhängigkeit der DataLoader-Performance."
            },

            yolo: {

                title:
                    "YOLO Webcam-Erkennung",

                visual:
                    "YOLO Webcam<br>Erkennung",

                category:
                    "Computer Vision",

                status:
                    "Echtzeitanwendung",

                description:
                    "Eine modulare Echtzeit-Computer-Vision-Anwendung mit YOLOv8 und OpenCV, inklusive Webcam-Streaming, Personenfilterung, konfigurierbarer Alarm-Logik, automatisierten Screenshots und Laufzeitstatistiken."
            },

            estate: {

                title:
                    "Immobilienpreis-Prognose",

                visual:
                    "Immobilienpreis-<br>Prognose",

                category:
                    "End-to-End ML",

                status:
                    "ML-Anwendung",

                description:
                    "Eine End-to-End-Machine-Learning-Anwendung mit Datengenerierung und Feature Engineering, Random-Forest-Modellierung, MLflow Experiment Tracking, einer FastAPI Prediction API, Streamlit-Oberfläche und Docker-basierter Paketierung.",

                private:
                    "Privates Repository"
            },

            tags: {

                concurrency:
                    "Nebenläufigkeit",

                benchmarking:
                    "Benchmarking",

                llmEvaluation:
                    "LLM-Evaluation",

                computerVision:
                    "Computer Vision"
            }
        },

        contact: {

            eyebrow:
                "Kontakt",

            title:
                "Lass uns zusammenarbeiten",

            description:
                "Ob Datenproblem, Machine-Learning-Projekt, KI-Evaluation oder technischer Austausch — ich freue mich über eine Nachricht.",

            availability:
                "Offen für Werkstudentenstellen, Projekte und technische Zusammenarbeit.",

            email:
                "E-Mail",

            phone:
                "Telefon"
        },

        form: {

            firstname:
                "Vorname",

            lastname:
                "Nachname",

            email:
                "E-Mail",

            subject:
                "Betreff",

            message:
                "Nachricht",

            firstnamePlaceholder:
                "Dein Vorname",

            lastnamePlaceholder:
                "Dein Nachname",

            subjectPlaceholder:
                "Worüber möchtest du sprechen?",

            messagePlaceholder:
                "Erzähl mir kurz etwas über dein Projekt oder die Position...",

            send:
                "Nachricht senden",

            honeypot:
                "Dieses Feld bitte nicht ausfüllen:"
        },

        footer: {

            description:
                "Informatikstudent mit Schwerpunkt Machine Learning, Data und KI-Systeme.",

            navigation:
                "Navigation",

            connect:
                "Kontakt",

            rights:
                "© 2026 Pascal Nague. Alle Rechte vorbehalten.",

            top:
                "Nach oben"
        }
    },


    fr: {

        meta: {

            title:
                "Pascal Nague | Portfolio Machine Learning, Data & IA",

            description:
                "Portfolio de Pascal Nague, étudiant en informatique en Allemagne spécialisé en Machine Learning, Data Engineering, évaluation IA, vision par ordinateur et systèmes PyTorch.",

            locale:
                "fr_FR"
        },

        accessibility: {

            homeLogo:
                "Recharger la page et revenir à l'accueil",

            logoAlt:
                "Pascal Nague",

            footerLogoAlt:
                "Mr. Nague",

            primaryNav:
                "Navigation principale",

            languageSelector:
                "Sélecteur de langue",

            themeDark:
                "Passer au mode sombre",

            themeLight:
                "Passer au mode clair",

            changeTheme:
                "Changer le thème",

            openMenu:
                "Ouvrir le menu de navigation",

            closeMenu:
                "Fermer le menu de navigation",

            menuLabel:
                "Menu",

            footerNav:
                "Navigation du pied de page",

            language: {
                en: "Anglais",
                de: "Allemand",
                fr: "Français"
            },

            social: {
                linkedin: "Profil LinkedIn",
                youtubeMain: "Chaîne YouTube",
                youtubeDe: "Chaîne YouTube allemande",
                youtubeEn: "Chaîne YouTube anglaise",
                xing: "Profil Xing",
                github: "Profil GitHub"
            }
        },

        nav: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            skills: "Compétences",
            portfolio: "Projets",
            contact: "Contact"
        },

        hero: {

            badge:
                "IA, Machine Learning & Data",

            title:
                "Bonjour, je suis Pascal Nague",

            description:
                "Étudiant en informatique spécialisé en Machine Learning et Data. Je développe des solutions d'IA pratiques, analyse des données, évalue des modèles et optimise des pipelines de Machine Learning avec Python et PyTorch."
        },

        about: {

            title:
                "À propos",

            who:
                "Qui je suis",

            p1:
                "Je suis Pascal Nague, étudiant en informatique à la RPTU Kaiserslautern-Landau, avec un intérêt particulier pour le Machine Learning, la Data et les systèmes d'IA.",

            p2:
                "J'aime comprendre le fonctionnement réel des systèmes intelligents — depuis les données qu'ils consomment jusqu'à la manière dont leurs performances, leur fiabilité et leur efficacité sont mesurées.",

            p3:
                "Mon travail combine Python, PyTorch, analyse de données, expérimentation en Machine Learning et benchmarking de performances. Mon projet de Bachelor réalisé au DFKI portait sur le chargement efficace de données avec PyTorch, les pipelines concurrents et la mesure reproductible des performances, avec une validation externe sur Food-101.",

            p4:
                "Je m'intéresse particulièrement à la construction de systèmes pratiques, mesurables, compréhensibles et utiles dans des environnements réels.",

            currentFocus:
                "Focus actuel",

            currentFocusValue:
                "Machine Learning · Data Engineering · Systèmes IA",

            bachelorProject:
                "Projet de Bachelor",

            bachelorProjectValue:
                "Chargement efficace de données avec PyTorch",

            coreTechnologies:
                "Technologies principales",

            coreTechnologiesValue:
                "Python · PyTorch · SQL · Git · Linux · Docker",

            interests:
                "Centres d'intérêt",

            interestsValue:
                "Systèmes ML · Évaluation LLM · Vision par ordinateur · Pipelines de données",

            teachingCommunity:
                "Enseignement & Engagement",

            teachingCommunityValue:
                "Tuteur RPTU · Mentor technique & Coordinateur JustCode",

            location:
                "Localisation",

            germany:
                "Allemagne"
        },

        services: {

            eyebrow:
                "Ce que je peux faire",

            title:
                "Services",

            intro:
                "Je travaille sur des problématiques concrètes liées aux données, au Machine Learning et à l'évaluation de systèmes d'IA. Je me concentre sur des solutions mesurables, l'analyse du comportement des modèles, l'automatisation des workflows de données et l'amélioration des performances des pipelines ML.",

            data: {

                title:
                    "Analyse & préparation des données",

                description:
                    "Nettoyage, exploration et structuration des jeux de données afin de transformer les données brutes en données fiables et exploitables pour l'analyse ou le Machine Learning."
            },

            ml: {

                title:
                    "Prototypage Machine Learning",

                description:
                    "Développement de premiers modèles de classification, régression ou clustering, création de baselines et évaluation de la pertinence d'une approche ML."
            },

            evaluation: {

                title:
                    "Évaluation de modèles ML",

                description:
                    "Mesure des performances avec des métriques adaptées, analyse des erreurs et comparaisons structurées afin d'identifier les points forts et les limites d'un modèle."
            },

            llm: {

                title:
                    "Évaluation de la qualité IA & LLM",

                description:
                    "Conception de cas de test, de critères d'évaluation et de catégories d'erreurs pour analyser de manière structurée le comportement des chatbots et des LLM."
            },

            automation: {

                title:
                    "Automatisation des workflows de données",

                description:
                    "Automatisation de tâches répétitives telles que la fusion de fichiers, la transformation d'exports, le calcul de métriques et la génération de rapports reproductibles."
            },

            performance: {

                title:
                    "Analyse des performances des pipelines PyTorch",

                description:
                    "Benchmarking des pipelines de chargement de données, comparaison des configurations DataLoader et identification des goulots d'étranglement affectant le débit et l'entraînement."
            },

            tags: {
                prototyping: "Prototypage",
                precision: "Précision",
                errorAnalysis: "Analyse d'erreurs",
                evaluation: "Évaluation",
                automation: "Automatisation",
                workflows: "Workflows",
                benchmarking: "Benchmarking"
            }
        },

        skills: {

            eyebrow:
                "Profil technique",

            title:
                "Compétences & Technologies",

            intro:
                "Mon profil technique combine développement logiciel, analyse de données, Machine Learning et systèmes ML orientés performance.",

            programming:
                "Programmation",

            programmingDetails:
                "Python · Java · SQL · HTML · CSS · JavaScript",

            dataAnalysis:
                "Analyse de données",

            dataAnalysisDetails:
                "Nettoyage des données · Analyse exploratoire · Visualisation des données · Calcul numérique",

            ml:
                "Machine Learning",

            mlDetails:
                "Classification · Régression · Évaluation de modèles · Validation croisée · Analyse d'erreurs",

            deepLearning:
                "Deep Learning & Vision par ordinateur",

            deepLearningDetails:
                "PyTorch · CNNs · YOLOv8 · OpenCV · Classification d'images · Entraînement · Validation · Prétraitement d'images",

            systems:
                "Systèmes ML & Performance",

            systemsDetails:
                "PyTorch DataLoader · Pipelines de données · Concurrence · Multithreading · Multiprocessing · Benchmarking du débit · Analyse des goulots d'étranglement",

            llm:
                "Évaluation IA & LLM",

            llmDetails:
                "Conception de cas de test · WER/CER · Évaluation ASR · Classification des erreurs · Évaluation de la qualité",

            projectManagement:
                "Gestion de projet & Coordination d'équipe",

            projectManagementDetails:
                "Planification de projet · Coordination d'équipe · Suivi de l'avancement · Mentorat · Onboarding · Communication technique · Documentation",

            coreStack:
                "Stack principale",

            tools:
                "Outils que j'utilise",

            toolsDescription:
                "Technologies et environnements que j'utilise pour le développement, l'expérimentation et l'évaluation.",

            currentFocus:
                "Focus actuel"
        },

        focus: {

            machineLearning:
                "Machine Learning",

            dataPipelines:
                "Pipelines de données",

            mlEvaluation:
                "Évaluation ML",

            llmEvaluation:
                "Évaluation LLM",

            performanceBenchmarking:
                "Benchmarking de performance",

            computerVision:
                "Vision par ordinateur"
        },

        experience: {

            eyebrow:
                "Expérience & Engagement",

            title:
                "Enseignement, Mentorat & Coordination",

            tutor: {

                title:
                    "Tuteur — Logique et sémantique des langages de programmation",

                period:
                    "RPTU Kaiserslautern-Landau · oct. 2026 – avr. 2027",

                highlight1:
                    "Animation de tutorats en logique et sémantique des langages de programmation.",

                highlight2:
                    "Explication de concepts théoriques à travers des exercices, des exemples et la résolution collaborative de problèmes.",

                highlight3:
                    "Accompagnement des étudiants dans la compréhension des méthodes formelles, des preuves et des concepts sémantiques.",

                highlight4:
                    "Accompagnement des étudiants dans les exercices et la préparation aux examens."
            },

            justcode: {

                title:
                    "Bénévole — Mentor technique & Coordinateur communautaire",

                period:
                    "JustCode-KL · depuis oct. 2024",

                highlight1:
                    "Évolution d'apprenant/pratiquant à développeur, puis vers des responsabilités de mentorat et de coordination.",

                highlight2:
                    "Coordination de talk-shows techniques et d'activités communautaires au sein de JustCode-KL.",

                highlight3:
                    "Mentorat et intégration de nouveaux membres en programmation, communication et travail d'équipe.",

                highlight4:
                    "Accompagnement des membres sur des problématiques techniques et dans leur cursus académique."
            }
        },

        projects: {

            eyebrow:
                "Travaux sélectionnés",

            title:
                "Projets",

            intro:
                "Une sélection de projets d'ingénierie autour des systèmes ML, de l'évaluation IA, de la vision par ordinateur, des applications ML end-to-end et du benchmarking de performances.",

            view:
                "Voir le projet",

            minimal: {

                title:
                    "Bibliothèque Minimal Dependency Dataset pour PyTorch",

                visual:
                    "Minimal Dataset<br>pour PyTorch",

                category:
                    "Systèmes ML · Projet de Bachelor",

                status:
                    "Terminé · DFKI",

                description:
                    "Une bibliothèque expérimentale légère pour des jeux de données d'images stockés en Parquet, avec un DataLoader multithread personnalisé, une instrumentation du débit et des benchmarks reproductibles. Le loader optimisé a atteint un pic mesuré de 3 245 échantillons/s sur le benchmark du projet et a été publié sur PyPI."
            },

            speech: {

                title:
                    "Speech & LLM Quality Lab",

                visual:
                    "Speech & LLM<br>Quality Lab",

                category:
                    "Évaluation IA",

                status:
                    "En développement",

                description:
                    "Un projet d'ingénierie et d'apprentissage consacré à l'évaluation de sorties Speech-to-Text en français et à l'analyse de réponses de modèles de langage. La base actuelle comprend la validation des manifests, des outils de pilotage ASR, les métriques WER/CER, le reporting et des tests automatisés."
            },

            food: {

                title:
                    "Benchmark réel Food-101 DataLoader",

                visual:
                    "Food-101<br>Benchmark",

                category:
                    "Validation externe",

                status:
                    "Systèmes ML",

                description:
                    "Validation externe de la bibliothèque de chargement PyTorch sur une charge de travail reproductible de 10 000 images Food-101. Les expériences comparent la montée en charge selon le nombre de workers, la résolution et la taille des batches et montrent que les performances du DataLoader dépendent de la charge de travail."
            },

            yolo: {

                title:
                    "Détection webcam YOLO",

                visual:
                    "Détection webcam<br>YOLO",

                category:
                    "Vision par ordinateur",

                status:
                    "Application temps réel",

                description:
                    "Une application modulaire de vision par ordinateur en temps réel construite avec YOLOv8 et OpenCV, comprenant le streaming webcam, le filtrage des personnes, une logique d'alerte configurable, des captures automatiques et des statistiques d'exécution."
            },

            estate: {

                title:
                    "Prédiction des prix immobiliers",

                visual:
                    "Prédiction des prix<br>immobiliers",

                category:
                    "ML End-to-End",

                status:
                    "Application ML",

                description:
                    "Une application Machine Learning end-to-end couvrant la génération de données et le feature engineering, un modèle Random Forest, le suivi d'expériences avec MLflow, une API FastAPI, une interface Streamlit et le packaging avec Docker.",

                private:
                    "Dépôt privé"
            },

            tags: {

                concurrency:
                    "Concurrence",

                benchmarking:
                    "Benchmarking",

                llmEvaluation:
                    "Évaluation LLM",

                computerVision:
                    "Vision par ordinateur"
            }
        },

        contact: {

            eyebrow:
                "Me contacter",

            title:
                "Travaillons ensemble",

            description:
                "Que vous ayez un problème lié aux données, un projet Machine Learning, une tâche d'évaluation IA ou simplement envie d'échanger sur une collaboration technique, n'hésitez pas à me contacter.",

            availability:
                "Ouvert aux postes Werkstudent, aux projets et aux collaborations techniques.",

            email:
                "E-mail",

            phone:
                "Téléphone"
        },

        form: {

            firstname:
                "Prénom",

            lastname:
                "Nom",

            email:
                "E-mail",

            subject:
                "Objet",

            message:
                "Message",

            firstnamePlaceholder:
                "Votre prénom",

            lastnamePlaceholder:
                "Votre nom",

            subjectPlaceholder:
                "De quoi souhaitez-vous discuter ?",

            messagePlaceholder:
                "Parlez-moi brièvement de votre projet ou de l'opportunité...",

            send:
                "Envoyer le message",

            honeypot:
                "Ne remplissez pas ce champ :"
        },

        footer: {

            description:
                "Étudiant en informatique spécialisé en Machine Learning, Data et systèmes d'IA.",

            navigation:
                "Navigation",

            connect:
                "Me suivre",

            rights:
                "© 2026 Pascal Nague. Tous droits réservés.",

            top:
                "Retour en haut"
        }
    }
};