"use strict";

const translations = {

    en: {

        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            skills: "Skills",
            portfolio: "Portfolio",
            contact: "Contact"
        },

        hero: {
            badge: "AI, Machine Learning & Data",
            title: "Hello, I'm Pascal Nague",
            description:
                "Computer Science student specializing in Machine Learning and Data. I develop practical AI solutions, analyze data, evaluate models and optimize machine learning pipelines with Python and PyTorch."
        },

        about: {
            title: "About",
            who: "Who I am",

            p1:
                "I’m Pascal Nague, a Computer Science student at RPTU Kaiserslautern-Landau with a strong focus on Machine Learning, Data and AI systems.",

            p2:
                "I enjoy understanding how intelligent systems work — from the data they consume to the way their performance, reliability and efficiency are measured.",

            p3:
                "My work combines Python, PyTorch, data analysis, machine learning experimentation and performance benchmarking. My completed Bachelor Project at DFKI focused on efficient PyTorch data loading, concurrent pipelines and reproducible performance measurement, followed by external validation on Food-101.",

            p4:
                "I am especially interested in building practical systems that are measurable, understandable and useful in real-world environments.",

            currentFocus: "Current focus",
            bachelorProject: "Bachelor Project",
            coreTechnologies: "Core technologies",
            interests: "Interests",
            location: "Location",
            germany: "Germany"
        },

        services: {

            eyebrow: "What I can do",
            title: "Services",

            intro:
                "I work on practical problems across data, machine learning and AI evaluation. My focus is on building measurable solutions, understanding model behaviour, automating data workflows and improving the performance of ML pipelines.",

            data: {
                title: "Data Analysis & Preparation",
                description:
                    "Cleaning, exploring and structuring datasets so that raw data becomes reliable, understandable and ready for analysis or machine learning."
            },

            ml: {
                title: "Machine Learning Prototyping",
                description:
                    "Building initial classification, regression or clustering models, establishing baselines and evaluating whether an ML approach is useful."
            },

            evaluation: {
                title: "ML Model Evaluation",
                description:
                    "Measuring model performance using appropriate metrics, error analysis and structured comparisons to understand where a model succeeds or fails."
            },

            llm: {
                title: "AI & LLM Quality Evaluation",
                description:
                    "Designing test cases, evaluation criteria and error categories to assess chatbot and LLM behaviour across realistic prompts and edge cases."
            },

            automation: {
                title: "Data Workflow Automation",
                description:
                    "Automating repetitive data tasks such as merging files, transforming exports, calculating metrics and generating repeatable reports."
            },

            performance: {
                title: "PyTorch Pipeline Performance Analysis",
                description:
                    "Benchmarking data-loading pipelines, comparing DataLoader configurations and identifying bottlenecks that affect throughput and model training."
            }

        },

        skills: {
            eyebrow: "Technical profile",
            title: "Skills & Technologies",

            intro:
                "My technical background combines software development, data analysis, machine learning and performance-oriented ML systems.",

            programming: "Programming",
            dataAnalysis: "Data Analysis",
            ml: "Machine Learning",
            deepLearning: "Deep Learning & Computer Vision",
            systems: "ML Systems & Performance",
            llm: "AI & LLM Evaluation",
            projectManagement: "Project & Team Coordination",

            coreStack: "Core stack",
            tools: "Tools I work with",
            toolsDescription:
                "Technologies and environments I use across development, experimentation and evaluation.",

            currentFocus: "Current focus"
        },

        experience: {

            eyebrow: "Experience & Community",

            title:
                "Teaching, Mentoring & Coordination",

            tutor: {
                title:
                    "Tutor — Logic and Semantics of Programming Languages",

                description:
                    "Supporting students with formal reasoning, logic, programming-language semantics, structured problem solving and exercise preparation."
            },

            justcode: {
                title:
                    "Volunteer — Technical Mentor & Community Coordinator",

                description:
                    "Technical mentoring · New-member onboarding · Programming support · Project coordination · Technical talkshow coordination · Academic support · Communication training · Team collaboration"
            }

        },

        projects: {

            eyebrow: "Selected work",

            title: "Portfolio",

            intro:
                "Selected engineering projects across ML systems, AI evaluation, computer vision, end-to-end ML applications and performance benchmarking.",

            view: "View project",

            minimal: {
                category: "ML Systems · Bachelor Project",
                status: "Completed · DFKI",

                description:
                    "A lightweight experimental library for Parquet-backed image datasets with a custom multi-threaded DataLoader, throughput instrumentation and reproducible benchmarks. The optimized loader reached a measured peak of 3,245 samples/s on the project benchmark and was published as a PyPI package."
            },

            speech: {
                category: "AI Evaluation",
                status: "Active development",

                description:
                    "An engineering and learning project for evaluating French speech-to-text outputs and reviewing language-model responses. The current foundation includes manifest validation, ASR pilot tooling, WER/CER metrics, reporting and automated tests."
            },

            food: {
                category: "External Validation",
                status: "ML Systems",

                description:
                    "External validation of the custom PyTorch data-loading library on a reproducible 10,000-image Food-101 workload. The experiments compare scaling across worker counts, resolutions and batch sizes and demonstrate that DataLoader performance is workload-dependent."
            },

            yolo: {
                category: "Computer Vision",
                status: "Real-time application",

                description:
                    "A modular real-time computer-vision application built with YOLOv8 and OpenCV, including webcam streaming, person filtering, configurable alert logic, automated screenshots and runtime statistics."
            },

            estate: {
                category: "End-to-End ML",
                status: "ML Application",

                description:
                    "An end-to-end machine-learning application covering data generation and feature engineering, Random Forest modelling, MLflow experiment tracking, a FastAPI prediction API, a Streamlit interface and Docker-based packaging.",

                private: "Private repository"
            }

        },

        contact: {

            eyebrow: "Get in touch",

            title: "Let's work together",

            description:
                "Whether you have a data problem, a machine learning project, an AI evaluation task or simply want to discuss a technical collaboration, feel free to contact me.",

            availability:
                "Open to Werkstudent opportunities, projects and technical collaborations.",

            email: "Email",
            phone: "Phone"

        },

        form: {

            firstname: "First name",
            lastname: "Last name",
            email: "Email",
            subject: "Subject",
            message: "Message",

            firstnamePlaceholder: "Your first name",
            lastnamePlaceholder: "Your last name",
            subjectPlaceholder: "What would you like to discuss?",
            messagePlaceholder:
                "Tell me a little about your project or opportunity...",

            send: "Send message"

        },

        footer: {

            description:
                "Computer Science student focused on Machine Learning, Data and AI systems.",

            navigation: "Navigation",
            connect: "Connect",

            rights:
                "© 2026 Pascal Nague. All rights reserved.",

            top: "Back to top"
        }

    },


    de: {

        nav: {
            home: "Start",
            about: "Über mich",
            services: "Leistungen",
            skills: "Kompetenzen",
            portfolio: "Projekte",
            contact: "Kontakt"
        },

        hero: {
            badge: "KI, Machine Learning & Data",
            title: "Hallo, ich bin Pascal Nague",

            description:
                "Informatikstudent mit Schwerpunkt Machine Learning und Data. Ich entwickle praxisnahe KI-Lösungen, analysiere Daten, evaluiere Modelle und optimiere Machine-Learning-Pipelines mit Python und PyTorch."
        },

        about: {

            title: "Über mich",
            who: "Wer ich bin",

            p1:
                "Ich bin Pascal Nague, Informatikstudent an der RPTU Kaiserslautern-Landau mit einem starken Schwerpunkt auf Machine Learning, Data und KI-Systemen.",

            p2:
                "Mich interessiert, wie intelligente Systeme tatsächlich funktionieren — von den Daten, die sie verarbeiten, bis hin zur Messung ihrer Leistung, Zuverlässigkeit und Effizienz.",

            p3:
                "Meine Arbeit verbindet Python, PyTorch, Datenanalyse, Machine-Learning-Experimente und Performance-Benchmarking. Mein abgeschlossenes Bachelorprojekt am DFKI beschäftigte sich mit effizientem PyTorch-Datenladen, parallelen Pipelines und reproduzierbaren Performance-Messungen sowie einer anschließenden externen Validierung mit Food-101.",

            p4:
                "Besonders interessieren mich praxisnahe Systeme, die messbar, nachvollziehbar und in realen Anwendungsszenarien nützlich sind.",

            currentFocus: "Aktueller Schwerpunkt",
            bachelorProject: "Bachelorprojekt",
            coreTechnologies: "Kerntechnologien",
            interests: "Interessengebiete",
            location: "Standort",
            germany: "Deutschland"

        },

        services: {

            eyebrow: "Was ich anbiete",
            title: "Leistungen",

            intro:
                "Ich arbeite an praxisnahen Aufgaben in den Bereichen Daten, Machine Learning und KI-Evaluation. Mein Fokus liegt auf messbaren Lösungen, dem Verständnis von Modellverhalten, der Automatisierung von Datenworkflows und der Optimierung von ML-Pipelines.",

            data: {
                title: "Datenanalyse & Datenaufbereitung",
                description:
                    "Bereinigung, Exploration und Strukturierung von Datensätzen, damit Rohdaten zuverlässig, verständlich und für Analysen oder Machine Learning nutzbar werden."
            },

            ml: {
                title: "Machine-Learning-Prototyping",
                description:
                    "Entwicklung erster Klassifikations-, Regressions- oder Clustering-Modelle, Aufbau von Baselines und Bewertung, ob ein ML-Ansatz für das jeweilige Problem sinnvoll ist."
            },

            evaluation: {
                title: "ML-Modell-Evaluation",
                description:
                    "Messung der Modellleistung mit geeigneten Metriken, Fehleranalysen und strukturierten Vergleichen, um Stärken und Schwächen eines Modells zu verstehen."
            },

            llm: {
                title: "KI- & LLM-Qualitätsevaluation",
                description:
                    "Entwicklung von Testfällen, Bewertungskriterien und Fehlerkategorien zur systematischen Analyse von Chatbot- und LLM-Verhalten."
            },

            automation: {
                title: "Automatisierung von Datenworkflows",
                description:
                    "Automatisierung wiederkehrender Datenaufgaben wie Dateizusammenführung, Transformation von Exporten, Metrikberechnung und reproduzierbare Berichtserstellung."
            },

            performance: {
                title: "PyTorch Pipeline Performance Analysis",
                description:
                    "Benchmarking von Datenlade-Pipelines, Vergleich von DataLoader-Konfigurationen und Identifikation von Engpässen, die Durchsatz und Modelltraining beeinflussen."
            }

        },

        skills: {

            eyebrow: "Technisches Profil",
            title: "Kompetenzen & Technologien",

            intro:
                "Mein technischer Hintergrund verbindet Softwareentwicklung, Datenanalyse, Machine Learning und performanceorientierte ML-Systeme.",

            programming: "Programmierung",
            dataAnalysis: "Datenanalyse",
            ml: "Machine Learning",
            deepLearning: "Deep Learning & Computer Vision",
            systems: "ML-Systeme & Performance",
            llm: "KI- & LLM-Evaluation",
            projectManagement: "Projekt- & Teamkoordination",

            coreStack: "Core Stack",
            tools: "Tools & Technologien",

            toolsDescription:
                "Technologien und Entwicklungsumgebungen, die ich für Entwicklung, Experimente und Evaluation einsetze.",

            currentFocus: "Aktueller Schwerpunkt"

        },

        experience: {

            eyebrow: "Erfahrung & Engagement",

            title:
                "Lehre, Mentoring & Koordination",

            tutor: {

                title:
                    "Tutor — Logik und Semantik von Programmiersprachen",

                description:
                    "Unterstützung von Studierenden bei formaler Logik, Semantik von Programmiersprachen, strukturiertem Problemlösen sowie bei der Bearbeitung und Vorbereitung von Übungsaufgaben."

            },

            justcode: {

                title:
                    "Ehrenamt — Technischer Mentor & Community-Koordinator",

                description:
                    "Technisches Mentoring · Onboarding neuer Mitglieder · Unterstützung bei Programmieraufgaben · Projektkoordination · Koordination technischer Talkshows · Akademische Unterstützung · Kommunikationstraining · Teamarbeit"

            }

        },

        projects: {

            eyebrow: "Ausgewählte Arbeiten",
            title: "Projekte",

            intro:
                "Ausgewählte Engineering-Projekte aus ML-Systemen, KI-Evaluation, Computer Vision, End-to-End-ML-Anwendungen und Performance-Benchmarking.",

            view: "Projekt ansehen",

            minimal: {
                category: "ML-Systeme · Bachelorprojekt",
                status: "Abgeschlossen · DFKI",

                description:
                    "Eine leichtgewichtige experimentelle Bibliothek für Parquet-basierte Bilddatensätze mit einem eigenen Multi-Threaded DataLoader, Throughput-Instrumentierung und reproduzierbaren Benchmarks. Der optimierte Loader erreichte im Projektbenchmark einen gemessenen Spitzenwert von 3.245 Samples/s und wurde als PyPI-Paket veröffentlicht."
            },

            speech: {
                category: "KI-Evaluation",
                status: "In aktiver Entwicklung",

                description:
                    "Ein Engineering- und Lernprojekt zur Evaluation französischer Speech-to-Text-Ausgaben und zur Bewertung von Sprachmodellantworten. Die aktuelle Grundlage umfasst Manifest-Validierung, ASR-Pilotwerkzeuge, WER/CER-Metriken, Reporting und automatisierte Tests."
            },

            food: {
                category: "Externe Validierung",
                status: "ML-Systeme",

                description:
                    "Externe Validierung der eigenen PyTorch-Datenladebibliothek mit einem reproduzierbaren Food-101-Workload von 10.000 Bildern. Die Experimente vergleichen Skalierung über verschiedene Worker-Zahlen, Auflösungen und Batchgrößen und zeigen die Workload-Abhängigkeit der DataLoader-Performance."
            },

            yolo: {
                category: "Computer Vision",
                status: "Echtzeitanwendung",

                description:
                    "Eine modulare Echtzeit-Computer-Vision-Anwendung mit YOLOv8 und OpenCV, inklusive Webcam-Streaming, Personenfilterung, konfigurierbarer Alarm-Logik, automatisierten Screenshots und Laufzeitstatistiken."
            },

            estate: {
                category: "End-to-End ML",
                status: "ML-Anwendung",

                description:
                    "Eine End-to-End-Machine-Learning-Anwendung mit Datengenerierung und Feature Engineering, Random-Forest-Modellierung, MLflow Experiment Tracking, einer FastAPI Prediction API, Streamlit-Oberfläche und Docker-basierter Paketierung.",

                private: "Privates Repository"
            }

        },

        contact: {

            eyebrow: "Kontakt",

            title: "Lass uns zusammenarbeiten",

            description:
                "Ob Datenproblem, Machine-Learning-Projekt, KI-Evaluation oder technischer Austausch — ich freue mich über eine Nachricht.",

            availability:
                "Offen für Werkstudentenstellen, Projekte und technische Zusammenarbeit.",

            email: "E-Mail",
            phone: "Telefon"

        },

        form: {

            firstname: "Vorname",
            lastname: "Nachname",
            email: "E-Mail",
            subject: "Betreff",
            message: "Nachricht",

            firstnamePlaceholder: "Dein Vorname",
            lastnamePlaceholder: "Dein Nachname",
            subjectPlaceholder: "Worüber möchtest du sprechen?",
            messagePlaceholder:
                "Erzähl mir kurz etwas über dein Projekt oder die Position...",

            send: "Nachricht senden"

        },

        footer: {

            description:
                "Informatikstudent mit Schwerpunkt Machine Learning, Data und KI-Systeme.",

            navigation: "Navigation",
            connect: "Kontakt",

            rights:
                "© 2026 Pascal Nague. Alle Rechte vorbehalten.",

            top: "Nach oben"

        }

    },

        fr: {

        nav: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            skills: "Compétences",
            portfolio: "Projets",
            contact: "Contact"
        },

        hero: {

            badge: "IA, Machine Learning & Data",

            title: "Bonjour, je suis Pascal Nague",

            description:
                "Étudiant en informatique spécialisé en Machine Learning et Data. Je développe des solutions d'IA pratiques, analyse des données, évalue des modèles et optimise des pipelines de Machine Learning avec Python et PyTorch."

        },

        about: {

            title: "À propos",
            who: "Qui je suis",

            p1:
                "Je suis Pascal Nague, étudiant en informatique à la RPTU Kaiserslautern-Landau, avec un intérêt particulier pour le Machine Learning, la Data et les systèmes d'IA.",

            p2:
                "J'aime comprendre le fonctionnement réel des systèmes intelligents — depuis les données qu'ils consomment jusqu'à la manière dont leurs performances, leur fiabilité et leur efficacité sont mesurées.",

            p3:
                "Mon travail combine Python, PyTorch, analyse de données, expérimentation en Machine Learning et benchmarking de performances. Mon Bachelor Project réalisé au DFKI portait sur le chargement efficace de données avec PyTorch, les pipelines concurrents et la mesure reproductible des performances, avec une validation externe sur Food-101.",

            p4:
                "Je m'intéresse particulièrement à la construction de systèmes pratiques, mesurables, compréhensibles et utiles dans des environnements réels.",

            currentFocus: "Focus actuel",
            bachelorProject: "Bachelor Project",
            coreTechnologies: "Technologies principales",
            interests: "Centres d'intérêt",
            location: "Localisation",
            germany: "Allemagne"

        },

        services: {

            eyebrow: "Ce que je peux faire",
            title: "Services",

            intro:
                "Je travaille sur des problématiques concrètes liées aux données, au Machine Learning et à l'évaluation de systèmes d'IA. Je me concentre sur des solutions mesurables, l'analyse du comportement des modèles, l'automatisation des workflows de données et l'amélioration des performances des pipelines ML.",

            data: {
                title: "Analyse & préparation des données",
                description:
                    "Nettoyage, exploration et structuration des jeux de données afin de transformer les données brutes en données fiables et exploitables pour l'analyse ou le Machine Learning."
            },

            ml: {
                title: "Prototypage Machine Learning",
                description:
                    "Développement de premiers modèles de classification, régression ou clustering, création de baselines et évaluation de la pertinence d'une approche ML."
            },

            evaluation: {
                title: "Évaluation de modèles ML",
                description:
                    "Mesure des performances avec des métriques adaptées, analyse des erreurs et comparaisons structurées afin d'identifier les points forts et les limites d'un modèle."
            },

            llm: {
                title: "Évaluation de la qualité IA & LLM",
                description:
                    "Conception de cas de test, de critères d'évaluation et de catégories d'erreurs pour analyser de manière structurée le comportement des chatbots et des LLM."
            },

            automation: {
                title: "Automatisation des workflows de données",
                description:
                    "Automatisation de tâches répétitives telles que la fusion de fichiers, la transformation d'exports, le calcul de métriques et la génération de rapports reproductibles."
            },

            performance: {
                title: "Analyse des performances des pipelines PyTorch",
                description:
                    "Benchmarking des pipelines de chargement de données, comparaison des configurations DataLoader et identification des goulots d'étranglement affectant le débit et l'entraînement."
            }

        },

        skills: {

            eyebrow: "Profil technique",
            title: "Compétences & Technologies",

            intro:
                "Mon profil technique combine développement logiciel, analyse de données, Machine Learning et systèmes ML orientés performance.",

            programming: "Programmation",
            dataAnalysis: "Analyse de données",
            ml: "Machine Learning",
            deepLearning: "Deep Learning & Vision par ordinateur",
            systems: "Systèmes ML & Performance",
            llm: "Évaluation IA & LLM",
            projectManagement: "Gestion de projet & Coordination d'équipe",

            coreStack: "Stack principale",
            tools: "Outils que j'utilise",

            toolsDescription:
                "Technologies et environnements que j'utilise pour le développement, l'expérimentation et l'évaluation.",

            currentFocus: "Focus actuel"

        },

        experience: {

            eyebrow: "Expérience & Engagement",

            title:
                "Enseignement, Mentorat & Coordination",

            tutor: {

                title:
                    "Tuteur — Logique et sémantique des langages de programmation",

                description:
                    "Accompagnement des étudiants en logique formelle, sémantique des langages de programmation, résolution structurée de problèmes et préparation des exercices."

            },

            justcode: {

                title:
                    "Bénévole — Mentor technique & Coordinateur communautaire",

                description:
                    "Mentorat technique · Intégration des nouveaux membres · Aide en programmation · Coordination de projets · Coordination de talk-shows techniques · Accompagnement académique · Communication · Travail en équipe"

            }

        },

        projects: {

            eyebrow: "Travaux sélectionnés",
            title: "Projets",

            intro:
                "Une sélection de projets d'ingénierie autour des systèmes ML, de l'évaluation IA, de la vision par ordinateur, des applications ML end-to-end et du benchmarking de performances.",

            view: "Voir le projet",

            minimal: {

                category: "Systèmes ML · Bachelor Project",
                status: "Terminé · DFKI",

                description:
                    "Une bibliothèque expérimentale légère pour des jeux de données d'images stockés en Parquet, avec un DataLoader multithread personnalisé, une instrumentation du débit et des benchmarks reproductibles. Le loader optimisé a atteint un pic mesuré de 3 245 échantillons/s sur le benchmark du projet et a été publié sur PyPI."

            },

            speech: {

                category: "Évaluation IA",
                status: "En développement",

                description:
                    "Un projet d'ingénierie et d'apprentissage consacré à l'évaluation de sorties Speech-to-Text en français et à l'analyse de réponses de modèles de langage. La base actuelle comprend la validation des manifests, des outils de pilotage ASR, les métriques WER/CER, le reporting et des tests automatisés."

            },

            food: {

                category: "Validation externe",
                status: "Systèmes ML",

                description:
                    "Validation externe de la bibliothèque de chargement PyTorch sur une charge de travail reproductible de 10 000 images Food-101. Les expériences comparent la montée en charge selon le nombre de workers, la résolution et la taille des batches."

            },

            yolo: {

                category: "Vision par ordinateur",
                status: "Application temps réel",

                description:
                    "Une application modulaire de vision par ordinateur en temps réel construite avec YOLOv8 et OpenCV, comprenant le streaming webcam, le filtrage des personnes, une logique d'alerte configurable, des captures automatiques et des statistiques d'exécution."

            },

            estate: {

                category: "ML End-to-End",
                status: "Application ML",

                description:
                    "Une application Machine Learning end-to-end couvrant la génération de données et le feature engineering, un modèle Random Forest, le suivi d'expériences avec MLflow, une API FastAPI, une interface Streamlit et le packaging avec Docker.",

                private: "Dépôt privé"

            }

        },

        contact: {

            eyebrow: "Me contacter",

            title: "Travaillons ensemble",

            description:
                "Que vous ayez un problème lié aux données, un projet Machine Learning, une tâche d'évaluation IA ou simplement envie d'échanger sur une collaboration technique, n'hésitez pas à me contacter.",

            availability:
                "Ouvert aux postes Werkstudent, aux projets et aux collaborations techniques.",

            email: "E-mail",
            phone: "Téléphone"

        },

        form: {

            firstname: "Prénom",
            lastname: "Nom",
            email: "E-mail",
            subject: "Objet",
            message: "Message",

            firstnamePlaceholder: "Votre prénom",
            lastnamePlaceholder: "Votre nom",
            subjectPlaceholder: "De quoi souhaitez-vous discuter ?",
            messagePlaceholder:
                "Parlez-moi brièvement de votre projet ou de l'opportunité...",

            send: "Envoyer le message"

        },

        footer: {

            description:
                "Étudiant en informatique spécialisé en Machine Learning, Data et systèmes d'IA.",

            navigation: "Navigation",
            connect: "Me suivre",

            rights:
                "© 2026 Pascal Nague. Tous droits réservés.",

            top: "Retour en haut"

        }

    }

};



