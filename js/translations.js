"use strict";

const translations = {

    en: {

        meta: {
            title: "Pascal Nague | AI Consulting & Applied AI",
            description:
                "Computer science student at RPTU Kaiserslautern-Landau interested in AI consulting, generative AI and AI evaluation.",
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
            services: "Areas of Interest",
            skills: "Skills",
            portfolio: "Portfolio",
            contact: "Contact"
        },

        hero: {

            badge:
                "Computer Science · AI Consulting · Generative AI",

            title:
                "Hello, I'm Pascal Nague",

            projectsLink: "Explore projects",
            githubLink: "GitHub profile ↗",

            description:
                "I study Computer Science at RPTU Kaiserslautern-Landau. My projects cover machine learning systems, AI evaluation and software applications. I'm interested in assessing AI use cases, comparing technical options and working toward practical solutions."
        },

        robot: {
            eyebrow: "Interactive AI solutions concept",
            title: "Explore AION-7 in 3D",
            intro: "Rotate the humanoid and explore three stages of assessing and evaluating an AI solution. This is a visual concept, not an AI chatbot.",
            open: "Open full 3D experience ↗",
            frameTitle: "Interactive 3D robot with draggable orbit controls and AI consulting modes",
            note: "Drag to rotate, pinch or scroll to zoom. If WebGL is unavailable, the text descriptions remain readable.",
        },

        about: {

            title:
                "About",

            who:
                "Who I am",

            p1:
                "I'm a Computer Science student at RPTU Kaiserslautern-Landau, working toward a career in AI consulting.",

            p2:
                "My completed Bachelor Project at DFKI examined Parquet-backed image loading for PyTorch. I compared its performance with PyTorch's DataLoader and ran a follow-up benchmark on Food-101.",

            p3:
                "In my independent projects, including Speech & LLM Quality Lab and ImmoLens, I work with model evaluation, data validation, APIs and automated tests.",

            p4:
                "I'm interested in how organizations identify useful AI applications, compare technical approaches and make decisions based on evidence.",

            currentFocus:
                "Current focus",

            currentFocusValue:
                "AI Consulting · Generative AI · AI Evaluation",

            bachelorProject:
                "Bachelor Project",

            bachelorProjectValue:
                "Efficient PyTorch Data Loading",

            coreTechnologies:
                "Core technologies",

            coreTechnologiesValue:
                "Python · PyTorch · FastAPI · SQL · Git · Docker",

            interests:
                "Interests",

            interestsValue:
                "AI Use Cases · LLM Applications · Solution Assessment",

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
            eyebrow: "Where I want to work",
            title: "Areas of Interest",
            intro: "I'm interested in the decisions around an AI prototype: which problem to tackle, what approach fits, and how to judge the result.",
            directionLabel: "Career direction",
            directionTitle: "AI Consulting & Solution Design",
            directionBody: "I'm building my technical foundation through university work, a completed Bachelor Project at DFKI and independent applications. These are interests I am developing, not client services I already offer.",
            projectsLink: "See the projects behind these interests",
            cardsLabel: "Four areas related to AI consulting",
            useCase: {
                step: "01 / FRAME",
                title: "AI use cases & feasibility",
                description: "Understand the workflow, available data and constraints before deciding what an AI pilot should prove.",
                evidence: "Problem framing · Data readiness"
            },
            genAI: {
                step: "02 / EXPLORE",
                title: "Generative AI & retrieval",
                description: "Study how language models and document retrieval might help with information-heavy tasks, including their limitations.",
                evidence: "Bachelor seminar · LLM research"
            },
            solution: {
                step: "03 / DESIGN",
                title: "Prototypes & integration",
                description: "Test an idea in a small working application, connecting the data, model, API and user workflow.",
                evidence: "ImmoLens · Python · FastAPI"
            },
            validation: {
                step: "04 / VALIDATE",
                title: "Evaluation & technical trade-offs",
                description: "Compare approaches using measurable results, examine errors and check whether conclusions hold on other workloads.",
                evidence: "DFKI · Food-101 · ASR evaluation"
            }
        },

        skills: {

            eyebrow:
                "Technical profile",

            title:
                "Skills & Technologies",

            intro:
                "My technical background comes from university coursework, a completed Bachelor Project at DFKI and independent applications.",

            programming:
                "Programming",

            programmingDetails:
                "Python · Java · SQL · JavaScript · TypeScript · HTML · CSS",

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
                "Selected projects with source code, measurable results and clear limits on what has been validated.",

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
                    "Parquet-backed image loading for PyTorch, developed during my completed DFKI Bachelor Project. An original benchmark reached approximately 3,245 samples/s with 16 workers. A follow-up Food-101 experiment found that PyTorch scaled better on the new workload."
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
                    "An ongoing project for evaluating French speech recognition. Current components include audio manifest validation, ASR pilot tools, WER/CER metrics, reporting and automated tests. Further LLM evaluation features are in development."
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
                    "ImmoLens",

                visual:
                    "ImmoLens<br>ML Application",

                category:
                    "End-to-End ML",

                status:
                    "ML Application",

                description:
                    "End-to-end real-estate ML prototype combining scikit-learn, MLflow, FastAPI and a React/TypeScript frontend. Currently trained on synthetic data; predictions are not validated real-market valuations.",

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
                "Get in touch",

            description:
                "I'm looking for Werkstudent opportunities in AI consulting, AI solutions and related fields. You can contact me about a relevant role or project.",

            availability:
                "Seeking a Werkstudent role in AI Consulting or AI Solutions.",

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
                "Computer science student interested in AI consulting, generative AI and AI evaluation.",

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
                "Pascal Nague | KI-Consulting & Angewandte KI",

            description:
                "Informatikstudent an der RPTU Kaiserslautern-Landau mit Interesse an KI-Consulting, generativer KI und KI-Evaluation.",

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
            services: "Interessengebiete",
            skills: "Kompetenzen",
            portfolio: "Projekte",
            contact: "Kontakt"
        },

        hero: {

            badge:
                "Informatik · KI-Consulting · Generative KI",

            title:
                "Hallo, ich bin Pascal Nague",

            projectsLink: "Projekte ansehen",
            githubLink: "GitHub-Profil ↗",

            description:
                "Ich studiere Informatik an der RPTU Kaiserslautern-Landau. In meinen Projekten beschäftige ich mich mit ML-Systemen, KI-Evaluation und Softwareanwendungen. Mich interessiert, wie man KI-Anwendungsfälle beurteilt, technische Ansätze vergleicht und passende Lösungen entwickelt."
        },

        robot: {
            eyebrow: "Interaktives 3D-Konzept für KI-Lösungen",
            title: "AION-7 in 3D erkunden",
            intro: "Drehe den humanoiden Roboter und entdecke drei Schritte von der Bewertung eines KI-Anwendungsfalls bis zur Validierung. Dies ist ein visuelles Konzept, kein KI-Chatbot.",
            open: "3D-Erlebnis vollständig öffnen ↗",
            frameTitle: "Interaktiver 3D-Roboter mit drehbarer Ansicht und KI-Consulting-Modi",
            note: "Ziehen zum Drehen, scrollen oder zwei Finger zum Zoomen. Ohne WebGL bleiben die Textbeschreibungen sichtbar.",
        },

        about: {

            title:
                "Über mich",

            who:
                "Wer ich bin",

            p1:
                "Ich studiere Informatik an der RPTU Kaiserslautern-Landau und möchte später im KI-Consulting arbeiten.",

            p2:
                "In meinem abgeschlossenen Bachelorprojekt am DFKI habe ich eine Datenladebibliothek für Parquet-basierte Bilddaten entwickelt, mit dem PyTorch DataLoader verglichen und anschließend auf Food-101 getestet.",

            p3:
                "In eigenen Projekten wie Speech & LLM Quality Lab und ImmoLens arbeite ich an Modellevaluation, Datenvalidierung, APIs und automatisierten Tests.",

            p4:
                "Mich interessiert, wie Unternehmen sinnvolle KI-Anwendungsfälle finden, technische Alternativen abwägen und Entscheidungen anhand überprüfbarer Ergebnisse treffen.",

            currentFocus:
                "Aktueller Schwerpunkt",

            currentFocusValue:
                "KI-Consulting · Generative KI · KI-Evaluation",

            bachelorProject:
                "Bachelorprojekt",

            bachelorProjectValue:
                "Effizientes PyTorch-Datenladen",

            coreTechnologies:
                "Kerntechnologien",

            coreTechnologiesValue:
                "Python · PyTorch · FastAPI · SQL · Git · Docker",

            interests:
                "Interessengebiete",

            interestsValue:
                "KI-Anwendungsfälle · LLM-Anwendungen · Lösungsbewertung",

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
            eyebrow: "Wohin ich mich entwickeln möchte",
            title: "Interessengebiete",
            intro: "Mich interessieren die Entscheidungen rund um einen KI-Prototyp: Welches Problem lohnt sich? Welcher Ansatz passt? Und woran lässt sich erkennen, ob er funktioniert?",
            directionLabel: "Berufliche Ausrichtung",
            directionTitle: "KI-Consulting & Lösungsdesign",
            directionBody: "Meine technischen Grundlagen vertiefe ich im Studium, durch mein abgeschlossenes Bachelorprojekt am DFKI und in eigenen Anwendungen. Diese Themen sind meine Interessengebiete, keine bereits angebotenen Beratungsleistungen.",
            projectsLink: "Projekte zu diesen Themen ansehen",
            cardsLabel: "Vier Interessengebiete rund um KI-Consulting",
            useCase: {
                step: "01 / EINORDNEN",
                title: "KI-Anwendungsfälle & Machbarkeit",
                description: "Abläufe, Datenlage und Rahmenbedingungen verstehen, bevor entschieden wird, was ein KI-Pilot nachweisen soll.",
                evidence: "Problemverständnis · Datenlage"
            },
            genAI: {
                step: "02 / ERKUNDEN",
                title: "Generative KI & Retrieval",
                description: "Untersuchen, wie Sprachmodelle und Dokumentenretrieval bei informationsintensiven Aufgaben helfen können und wo ihre Grenzen liegen.",
                evidence: "Bachelorseminar · LLM-Forschung"
            },
            solution: {
                step: "03 / ENTWERFEN",
                title: "Prototypen & Integration",
                description: "Eine Idee in einer kleinen Anwendung prüfen – von Daten und Modell bis zur API und zum Nutzungsablauf.",
                evidence: "ImmoLens · Python · FastAPI"
            },
            validation: {
                step: "04 / PRÜFEN",
                title: "Evaluation & technische Abwägungen",
                description: "Ansätze anhand von Messwerten vergleichen, Fehler untersuchen und prüfen, ob Ergebnisse auch unter anderen Bedingungen gelten.",
                evidence: "DFKI · Food-101 · ASR-Evaluation"
            }
        },

        skills: {

            eyebrow:
                "Technisches Profil",

            title:
                "Kompetenzen & Technologien",

            intro:
                "Meine technischen Grundlagen stammen aus dem Studium, einem abgeschlossenen Bachelorprojekt am DFKI und eigenen Anwendungen.",

            programming:
                "Programmierung",

            programmingDetails:
                "Python · Java · SQL · JavaScript · TypeScript · HTML · CSS",

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
                "Ausgewählte Projekte mit Quellcode, Messergebnissen und einer klaren Einordnung ihrer Grenzen.",

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
                    "Parquet-basiertes Laden von Bilddaten für PyTorch aus meinem abgeschlossenen DFKI-Bachelorprojekt. Im ursprünglichen Benchmark wurden rund 3.245 Samples/s mit 16 Workern erreicht. Ein späterer Food-101-Test zeigte eine bessere Skalierung des PyTorch DataLoaders unter der neuen Last."
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
                    "Laufendes Projekt zur Evaluation französischer Spracherkennung. Vorhanden sind unter anderem Manifestvalidierung, ASR-Pilotwerkzeuge, WER/CER, Berichte und automatisierte Tests. Weitere LLM-Evaluationsfunktionen sind in Arbeit."
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
                    "ImmoLens",

                visual:
                    "ImmoLens<br>ML-Anwendung",

                category:
                    "End-to-End ML",

                status:
                    "ML-Anwendung",

                description:
                    "End-to-End-Prototyp für Immobilienpreisprognosen mit scikit-learn, MLflow, FastAPI und einem React/TypeScript-Frontend. Das Modell nutzt derzeit synthetische Daten; die Prognosen sind nicht am realen Markt validiert.",

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
                "Kontakt",

            description:
                "Ich suche eine Werkstudentenstelle im KI-Consulting, im Bereich KI-Lösungen oder in verwandten Aufgabenfeldern. Über passende Stellen oder Projekte freue ich mich.",

            availability:
                "Auf der Suche nach einer Werkstudentenstelle im KI-Consulting oder im Bereich KI-Lösungen.",

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
                "Informatikstudent mit Interesse an KI-Consulting, generativer KI und KI-Evaluation.",

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
                "Pascal Nague | Conseil en IA et IA appliquée",

            description:
                "Étudiant en informatique à la RPTU Kaiserslautern-Landau, intéressé par le conseil en IA, l'IA générative et l'évaluation des systèmes d'IA.",

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
            services: "Centres d'intérêt",
            skills: "Compétences",
            portfolio: "Projets",
            contact: "Contact"
        },

        hero: {

            badge:
                "Informatique · Conseil en IA · IA générative",

            title:
                "Bonjour, je suis Pascal Nague",

            projectsLink: "Découvrir mes projets",
            githubLink: "Profil GitHub ↗",

            description:
                "J'étudie l'informatique à la RPTU Kaiserslautern-Landau. Mes projets portent sur les systèmes de Machine Learning, l'évaluation de l'IA et les applications logicielles. Je souhaite apprendre à analyser des cas d'usage de l'IA et à comparer les solutions techniques possibles."
        },

        robot: {
            eyebrow: "Concept 3D interactif pour les solutions IA",
            title: "Explore AION-7 en 3D",
            intro: "Fais pivoter le robot humanoïde et découvre trois étapes de l'analyse et de l'évaluation d'une solution IA. Il s'agit d'un concept visuel, pas d'un chatbot.",
            open: "Ouvrir l'expérience 3D complète ↗",
            frameTitle: "Robot 3D interactif avec rotation et modes liés au conseil en IA",
            note: "Fais glisser pour tourner le robot et utilise le défilement ou le pincement pour zoomer. Les descriptions restent visibles sans WebGL.",
        },

        about: {

            title:
                "À propos",

            who:
                "Qui je suis",

            p1:
                "Je suis étudiant en informatique à la RPTU Kaiserslautern-Landau et je souhaite m'orienter vers le conseil en intelligence artificielle.",

            p2:
                "Lors de mon projet de Bachelor au DFKI, j'ai développé une bibliothèque de chargement d'images stockées en Parquet, comparé ses performances à celles du DataLoader de PyTorch et effectué une seconde évaluation sur Food-101.",

            p3:
                "Mes projets personnels, dont Speech & LLM Quality Lab et ImmoLens, me permettent de travailler sur l'évaluation de modèles, la validation des données, les API et les tests automatisés.",

            p4:
                "Je m'intéresse à la façon dont une organisation identifie un besoin pertinent pour l'IA, compare plusieurs approches et prend des décisions à partir de résultats vérifiables.",

            currentFocus:
                "Focus actuel",

            currentFocusValue:
                "Conseil en IA · IA générative · Évaluation de l'IA",

            bachelorProject:
                "Projet de Bachelor",

            bachelorProjectValue:
                "Chargement efficace de données avec PyTorch",

            coreTechnologies:
                "Technologies principales",

            coreTechnologiesValue:
                "Python · PyTorch · FastAPI · SQL · Git · Docker",

            interests:
                "Centres d'intérêt",

            interestsValue:
                "Cas d'usage de l'IA · Applications LLM · Évaluation de solutions",

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
            eyebrow: "Mon orientation professionnelle",
            title: "Centres d'intérêt",
            intro: "Je m'intéresse aux décisions qui entourent un prototype d'IA : quel problème résoudre, quelle approche choisir et comment en évaluer le résultat.",
            directionLabel: "Objectif professionnel",
            directionTitle: "Conseil en IA & conception de solutions",
            directionBody: "Je développe mes bases techniques à l'université, grâce à mon projet de Bachelor terminé au DFKI et à mes applications personnelles. Il s'agit de domaines que j'explore, et non de prestations de conseil déjà réalisées.",
            projectsLink: "Voir les projets liés à ces domaines",
            cardsLabel: "Quatre centres d'intérêt liés au conseil en IA",
            useCase: {
                step: "01 / CADRER",
                title: "Cas d'usage IA & faisabilité",
                description: "Comprendre le processus, les données disponibles et les contraintes avant de définir ce qu'un prototype doit démontrer.",
                evidence: "Définition du besoin · Données"
            },
            genAI: {
                step: "02 / EXPLORER",
                title: "IA générative & recherche documentaire",
                description: "Étudier comment les modèles de langage et le retrieval peuvent aider à exploiter des documents, sans ignorer leurs limites.",
                evidence: "Séminaire Bachelor · Recherche LLM"
            },
            solution: {
                step: "03 / CONCEVOIR",
                title: "Prototypes & intégration",
                description: "Tester une idée dans une petite application reliant les données, le modèle, l'API et le parcours utilisateur.",
                evidence: "ImmoLens · Python · FastAPI"
            },
            validation: {
                step: "04 / ÉVALUER",
                title: "Évaluation & choix techniques",
                description: "Comparer des approches à partir de mesures, analyser les erreurs et vérifier si les conclusions tiennent sur d'autres données.",
                evidence: "DFKI · Food-101 · Évaluation ASR"
            }
        },

        skills: {

            eyebrow:
                "Profil technique",

            title:
                "Compétences & Technologies",

            intro:
                "Mes bases techniques viennent de mes cours, de mon projet de Bachelor terminé au DFKI et de mes applications personnelles.",

            programming:
                "Programmation",

            programmingDetails:
                "Python · Java · SQL · JavaScript · TypeScript · HTML · CSS",

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
                "Une sélection de projets avec leur code, leurs résultats mesurés et les limites des expériences.",

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
                    "Bibliothèque de chargement d'images Parquet pour PyTorch, réalisée lors de mon projet de Bachelor au DFKI. Un premier benchmark a atteint environ 3 245 échantillons/s avec 16 workers. Une nouvelle évaluation sur Food-101 a montré que le DataLoader PyTorch passait mieux à l'échelle sur cette charge."
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
                    "Projet en cours pour évaluer la reconnaissance vocale en français. Il comprend la validation des manifests, des outils ASR pilotes, le calcul du WER/CER, des rapports et des tests automatisés. D'autres fonctions d'évaluation des LLM restent en développement."
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
                    "ImmoLens",

                visual:
                    "ImmoLens<br>Application ML",

                category:
                    "ML End-to-End",

                status:
                    "Application ML",

                description:
                    "Prototype ML de bout en bout pour l'estimation immobilière avec scikit-learn, MLflow, FastAPI et une interface React/TypeScript. Le modèle utilise actuellement des données synthétiques ; ses prédictions ne sont pas validées sur le marché réel.",

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
                "Me contacter",

            description:
                "Je recherche un poste de Werkstudent en conseil en IA, en conception de solutions IA ou dans un domaine proche. Vous pouvez me contacter pour une offre ou un projet pertinent.",

            availability:
                "À la recherche d'un poste Werkstudent en conseil en IA ou solutions IA.",

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
                "Étudiant en informatique intéressé par le conseil en IA, l'IA générative et l'évaluation des systèmes d'IA.",

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