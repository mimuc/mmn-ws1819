class DatabaseService {

    constructor(){
        this.lectures = {
            mmn: {
                title: 'Multimedia im Netz',
                professor: 'Hußmann',
                studyPrograms: [
                    'Medieninformatik Master',
                    'Informatik Master',
                    'MMT'
                ],
                ects: 6,
                language: 'en',
                location: 'Prof.-Huber-Pl. 2 (W), LEHRTURM-W201',
                description: 'Die Vorlesung befasst sich mit multimedialen Dienstangeboten, die über Datennetze realisiert werden. Dabei werden die Basistechnologien der Rechnernetze nicht behandelt, sondern vorausgesetzt. Die Vorlesung gliedert sich in folgende Bereiche:\n' +
                '\n' +
                'Web-Technologien für interaktive Multimedia-Anwendungen: Für das Nebenfach: Serverseitige Interaktivität mit PHP, Asynchrone Interaktivität im Web (Ajax), client-side JavaScript frameworks (JQuery), Mashups von Webangeboten. Für das Hauptfach: Serverseitiges JavaScript, MEAN-Stack (MongoDB, Express, Angular, Node)\n' +
                'Inhaltsbezogene Basistechnologien: Weitere Technologien, die zur Speicherung, Übertragung und Verarbeitung von Multimedia-Daten im Netz notwendig sind, insbesondere Sicherheitsfragen, Metadaten-Standards und Rechtemanagement\n' +
                'Multimediale Verteildienste: z.B. WebRadio, WebTV, Elektronische Bücher und zugehörige Basistechnologien\n' +
                'Multimediale Dienste zur individuellen Kommunikation: z.B. Video- und Multimedia-Konferenztechnik'
            },
            dm: {
                title: 'Digitale Medien',
                professor: 'Hußmann',
                studyPrograms: [
                    'Medieninformatik Bachelor'
                ],
                ects: 6,
                language: 'de',
                location: 'Schellingstr. 3 (S), S004',
                description: 'Die Vorlesung gibt eine einführende Übersicht über die wichtigsten technischen und wahrnehmungsphysiologischen Grundlagen zur Realisierung digitaler Medien. Es werden keinerlei Programmierkenntnisse und nur elementare Informatikkenntnisse vorausgesetzt. Dagegen wird ein relativ breites Themenspektrum verschiedenster Disziplinen (Mathematik, Physik, Nachrichtentechnik, Medizin) angesprochen. Die Vorlesung bildet die Basis für die stärker ins technische Detail gehende Lehrveranstaltung "Medientechnik" und stellt die Grundlagen für vertiefende Lehrangebote zu Multimedia-Themen.'
            },
            iv: {
                title: 'Informationsvisualisierung',
                professor: 'Butz',
                studyPrograms: [
                    'Medieninformatik Master',
                    'Informatik Master'
                ],
                ects: 6,
                language: 'de',
                location: 'Schellingstr. 3 (S), S004',
                description: 'Kernthemen der Vorlesung sind die menschliche visuelle Wahrnehmung, Visualisierung multivariater Daten, und Interaktionskonzepte für Visualisierungssysteme. Auf dieser Basis werden Visualisierungsstrategien für Graphen, Netzwerke, Baumstrukturen, Text- und Zeitbasierte Daten besprochen. Darüberhinaus werden Techniken zur effizienten Nutzung begrenzter Bildschirmfläche eingeführt.'
            },
            mmi2: {
                title: 'Mensch-Maschine-Interaktion 2',
                professor: 'Schmidt',
                studyPrograms: [
                    'Medieninformatik Master',
                    'MCI'
                ],
                ects: 6,
                language: 'de',
                location: 'Geschw.-Scholl-Pl. 1, M105',
                description: 'Das Modul Mensch-Maschine-Interaktion 2 behandelt aktuelle Forschungsthemen der Mensch-Maschinen-Interaktion, um das Finden von Interessensgebieten für Abschlussarbeiten zu ermöglichen. Das Erkennen von grundlegenden Fähigkeiten (z.B. signal processing, eye-tracking, physiological sensing, Arduino, Unity ...), welche für die Abschlussarbeit nötig sind ist ein wichtiger Bestandteil für jede Vorbereitung einer Abschlussarbeit und stellt das erfolgreiche Abschließen dieser sicher. Die Unterrichtenden unterstützen die Suche nach Kursen der Medieninformatik, welche relevant und von Interesse für die entsprechende Arbeit sind.'
            },
            iui: {
                title: 'Intelligent User Interfaces',
                professor: 'Butz',
                studyPrograms: [
                    'Medieninformatik Master',
                    'MCI',
                    'Master Informatik'
                ],
                ects: 6,
                language: 'de',
                location: 'Geschw.-Scholl-Pl. 1 (A), A 120',
                description: 'Das Modul Intelligent User Interfaces (IUI) behandelt aktuelle Themen im Schnittbereich der Mensch-Maschine Interaktion und des Maschinellen Lernens. Hierbei steht vor allem die praktische Anwendung und Adaption von Techniken und Algorithmen im Bereich des Maschinellen Lernens und der künstlichen Intelligenz auf Aspekte der Mensch-Maschine Interaktion im Vordergrund.'
            }
        }
        this.assignments = {
            mmn: {
                assignment1: {
                    topics: 'Organization, Vanilla JS Basics',
                    startDate: '22.10.2018'
                },
                assignment2: {
                    topics: 'Vanilla JS, Ajax',
                    startDate: '29.10.2018'
                }
            }
        }
    }

    /**
     *
     * @param callback that handles the response. A list of lecture objects is passed as parameter 1
     */
    getAllLectures(callback){
        callback(Object.values(this.lectures));
    }

    /**
     *
     * @param slug the lecture slug, e.g. mmn
     * @param callback that handles the response. If the lecture was found, a lecture object is passed as parameter 1
     */
    getLecture(slug, callback){
        callback(this.lectures[slug]);
    }

    /**
     *
     * @param lectureSlug e.g. mmn
     * @param assignmentId e.g. assignment1
     * @param callback that handles the result. If found, an assignment object is passed as first parameter
     */
    getAssignmentById(lectureSlug, assignmentId, callback){
        callback(this.assignments[lectureSlug][assignmentId])
    }

    /**
     *
     * @param lectureSlug e.g. mmn
     * @param callback that handles the result. A list of assignment objects is passed as first parameter
     */
    getAllAssignmentsForLecture(lectureSlug, callback){
        callback(this.assignments[lectureSlug])
    }

    /**
     *
     * @param lectureSlug e.g. mmn
     * @param assignmentId e.g. assignment3
     * @param assignment an assignment object
     * @param callback that will be called when the insertion is done
     */
    addAssignmentForLecture(lectureSlug, assignmentId, assignment, callback){
        if (!this.assignments[lectureSlug]) {
            this.assignments[lectureSlug] = {}
        }
        this.assignments[lectureSlug][assignmentId] = assignment;
        callback();
    }
}
module.exports = DatabaseService;