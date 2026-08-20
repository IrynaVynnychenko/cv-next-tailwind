import type { RawBlogPost } from './types'

/**
 * IT roles series: overview map + one article per major position.
 * EN / UA / DE / FR / ES / IT / TR
 */
export const itRoleBlogPosts: RawBlogPost[] = [
  {
    slug: "it-roles-map-who-does-what-2026",
    date: "2026-08-14",
    title: {
      en: "IT Roles Map 2026: Who Does What in a Modern Tech Team",
      ua: "Карта ІТ-ролей 2026: хто за що відповідає в сучасній техкоманді",
      de: "IT-Rollen 2026: wer im modernen Tech-Team wofür zuständig ist",
      fr: "Les métiers de l’IT en 2026 : qui fait quoi dans une équipe tech",
      es: "Quién hace qué en un equipo tech en 2026",
      it: "Chi fa cosa in un team tech nel 2026",
      tr: "2026 IT rolleri: modern bir teknoloji ekibinde kim neyden sorumlu"
    },
    excerpt: {
      en: "A practical map of major IT roles - engineering, product, design, data, security, and leadership - and how they collaborate to ship products.",
      ua: "Інженерія, продукт, дизайн, дані, безпека й керівництво: як ці ролі ділять роботу і разом доводять продукт до релізу.",
      de: "Technik, Produkt, Design, Daten, Sicherheit und Führung: wie die wichtigsten IT-Rollen zusammenarbeiten, bis ein Produkt wirklich live geht.",
      fr: "Ingénierie, produit, design, data, sécurité, direction : comment ces métiers se répartissent le travail et livrent un produit ensemble.",
      es: "Ingeniería, producto, diseño, datos, seguridad y dirección: cómo se reparte el trabajo y se saca producto de verdad.",
      it: "Engineering, product, design, data, security e leadership: come si dividono il lavoro e portano il prodotto in produzione.",
      tr: "Mühendislik, ürün, tasarım, veri, güvenlik ve yönetim: bu roller işi nasıl böler ve ürünü birlikte nasıl canlıya alır."
    },
    readTime: {
      en: "10 min read",
      ua: "10 хв читання",
      de: "10 Min. Lesezeit",
      fr: "10 min de lecture",
      es: "10 min de lectura",
      it: "10 min di lettura",
      tr: "10 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "IT Roles",
        "Hiring",
        "Team Structure",
        "Tech Leadership"
      ],
      ua: [
        "Кар'єра",
        "ІТ-ролі",
        "Найм",
        "Структура команди",
        "Технічне лідерство"
      ],
      de: [
        "Karriere",
        "IT-Rollen",
        "Recruiting",
        "Teamstruktur",
        "Technische Führung"
      ],
      fr: [
        "Carrière",
        "Métiers IT",
        "Recrutement",
        "Organisation d’équipe",
        "Leadership technique"
      ],
      es: [
        "Carrera",
        "Roles IT",
        "Contratación",
        "Estructura del equipo",
        "Liderazgo técnico"
      ],
      it: [
        "Carriera",
        "Ruoli IT",
        "Selezione",
        "Struttura del team",
        "Leadership tecnica"
      ],
      tr: [
        "Kariyer",
        "IT rolleri",
        "İşe alım",
        "Ekip yapısı",
        "Teknik liderlik"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "“We need more IT people” is not a hiring plan. Modern products are built by specialists with different jobs: some shape the interface, some own data and models, some keep production alive, some decide what to build next. Mixing titles without clarity creates gaps, duplicate work, and expensive mis-hires.",
            ua: "«Нам треба більше айтішників» — це ще не план найму. Я бачу це щодня: сучасний продукт зводять спеціалісти з різними задачами: хтось ліпить інтерфейс, хтось тримає дані й моделі, хтось не дає продакшену впасти, хтось вирішує, що робити далі. Коли посади змішані без ясності, з’являються дірки, подвійна робота і дорогі помилки в наймі.",
            de: "„Wir brauchen mehr IT-Leute“ ist kein Recruiting-Plan. Moderne Produkte entstehen durch Spezialistinnen und Spezialisten mit klar getrennten Aufgaben: die einen gestalten die Oberfläche, andere verantworten Daten und Modelle, andere halten den Produktivbetrieb, wieder andere entscheiden, was als Nächstes gebaut wird. Titel ohne Klarheit erzeugen Lücken, Doppelarbeit und teure Fehlbesetzungen.",
      fr: "« Il nous faut plus de gens d’IT » n’est pas un plan de recrutement. Les produits modernes se construisent avec des spécialistes aux missions distinctes : les uns façonnent l’interface, d’autres portent les données et les modèles, d’autres tiennent la production, d’autres encore décident de la suite. Mélanger les titres sans les clarifier crée des angles morts, du travail en double et des recrutements ruinés.",
      es: "«Necesitamos más gente de IT» no es un plan de contratación. Los productos modernos los construyen especialistas con oficios distintos: unos dan forma a la interfaz, otros responden de datos y modelos, otros sostienen producción, otros deciden qué construir después. Mezclar títulos sin aclararlos deja huecos, trabajo duplicado y contrataciones caras.",
      it: "«Ci servono più persone IT» non è un piano di assunzione. I prodotti moderni li costruiscono specialisti con mestieri diversi: chi dà forma all’interfaccia, chi risponde di dati e modelli, chi tiene in piedi la produzione, chi decide cosa fare dopo. Mescolare i titoli senza chiarezza apre buchi, doppio lavoro e assunzioni sbagliate — e costose.",
      tr: "«Daha fazla IT’ci lazım» bir işe alım planı değildir. Modern ürünleri farklı işleri olan uzmanlar kurar: kimi arayüzü şekillendirir, kimi veri ve modellerden sorumludur, kimi canlı ortamı ayakta tutar, kimi sırada neyin yapılacağına karar verir. Unvanları netleştirmeden karıştırmak boşluk, çift iş ve pahalı yanlış işe alımlar yaratır."
          },
          {
            en: "This article is a map of the main IT positions you will meet in 2026 - what each role owns, how roles cluster, and how to choose the next hire. Companion deep-dives for each role live as separate articles in this series.",
            ua: "Нижче — моя карта основних ІТ-позицій, з якими ви зіткнетеся у 2026-му: за що відповідає кожна роль, як вони групуються і як обрати наступну людину в команду. Глибші розбори кожної позиції — в окремих статтях цієї серії.",
            de: "In diesem Artikel zeichne ich die IT-Rollen, denen Sie 2026 begegnen: wofür jede Rolle verantwortlich ist, wie sie sich gruppieren und wie Sie die nächste Einstellung wählen. Die vertiefenden Guides zu jeder Rolle finden Sie als eigene Artikel in dieser Serie.",
      fr: "Je vous dresse ici la carte des métiers IT que vous rencontrerez en 2026 : de quoi chaque rôle est responsable, comment ils se regroupent, et comment choisir la prochaine embauche. Les analyses détaillées de chaque poste sont dans des articles à part de cette série.",
      es: "En este artículo le trazo el mapa de las posiciones IT que verá en 2026: de qué responde cada rol, cómo se agrupan y cómo elegir la siguiente contratación. Los desgloses de cada puesto están en artículos aparte de esta serie.",
      it: "In questo articolo vi traccio la mappa delle posizioni IT che incontrerete nel 2026: di cosa risponde ciascun ruolo, come si raggruppano e come scegliere la prossima assunzione. Gli approfondimenti di ogni posizione sono articoli distinti di questa serie.",
      tr: "Bu yazıda 2026’da karşınıza çıkacak başlıca IT pozisyonlarının haritasını çiziyorum: her rol neden sorumlu, roller nasıl kümelenir ve sıradaki işe alımı nasıl seçersiniz. Her rolün derinlemesine rehberi bu seride ayrı yazılar."
          }
        ]
      },
      {
        heading: {
          en: "1. Engineering: building the product",
          ua: "1. Інженерія: зібрати продукт",
          de: "1. Engineering: das Produkt bauen",
      fr: "1. Ingénierie : construire le produit",
      es: "1. Ingeniería: construir el producto",
      it: "1. Engineering: costruire il prodotto",
      tr: "1. Mühendislik: ürünü kurmak"
        },
        paragraphs: [
          {
            en: "Engineering roles turn requirements into working software. The split is about where complexity lives.",
            ua: "Інженерні ролі перетворюють вимоги на робоче ПЗ. Поділ залежить від того, де саме сидить складність.",
            de: "Engineering-Rollen machen aus Anforderungen funktionierende Software. Die Aufteilung folgt der Frage, wo die Komplexität sitzt.",
      fr: "Les rôles d’ingénierie transforment un besoin en logiciel qui tourne. On les sépare selon l’endroit où se niche la complexité.",
      es: "Los roles de ingeniería convierten requisitos en software que funciona. La división depende de dónde está la complejidad.",
      it: "I ruoli di engineering trasformano i requisiti in software che funziona. Lo si divide in base a dove sta la complessità.",
      tr: "Mühendislik rolleri gereksinimleri çalışan yazılıma çevirir. Ayrım, karmaşıklığın nerede durduğuna göre yapılır."
          }
        ],
        list: [
          {
            en: "Frontend - UI, browser performance, accessibility, client-side product feel.",
            ua: "Frontend — інтерфейс, швидкість у браузері, доступність, як продукт «відчувається» на клієнті.",
            de: "Frontend — Oberfläche, Tempo im Browser, Barrierefreiheit, das Gefühl des Produkts auf dem Client.",
      fr: "Frontend — interface, performances dans le navigateur, accessibilité, le ressenti du produit côté client.",
      es: "Frontend — interfaz, rendimiento en el navegador, accesibilidad, cómo se siente el producto en el cliente.",
      it: "Frontend — interfaccia, prestazioni nel browser, accessibilità, come si percepisce il prodotto sul client.",
      tr: "Frontend — arayüz, tarayıcı performansı, erişilebilirlik, ürünün istemci tarafındaki hissi."
          },
          {
            en: "Backend - APIs, business logic, databases, auth, integrations.",
            ua: "Backend — API, бізнес-логіка, бази даних, автентифікація, інтеграції.",
            de: "Backend — APIs, Geschäftslogik, Datenbanken, Authentifizierung, Integrationen.",
      fr: "Backend — API, logique métier, bases de données, authentification, intégrations.",
      es: "Backend — APIs, lógica de negocio, bases de datos, autenticación, integraciones.",
      it: "Backend — API, logica di business, database, autenticazione, integrazioni.",
      tr: "Backend — API’ler, iş mantığı, veritabanları, kimlik doğrulama, entegrasyonlar."
          },
          {
            en: "Full-stack - end-to-end feature ownership across UI and server.",
            ua: "Full-stack — одна людина веде функцію від інтерфейсу до сервера.",
            de: "Full-Stack — eine Person trägt eine Funktion von der Oberfläche bis zum Server.",
      fr: "Full-stack — une même personne porte une fonctionnalité de l’interface jusqu’au serveur.",
      es: "Full-stack — una persona lleva la funcionalidad de la interfaz al servidor.",
      it: "Full-stack — una persona porta la funzionalità dall’interfaccia al server.",
      tr: "Full-stack — bir kişi özelliği arayüzden sunucuya kadar götürür."
          },
          {
            en: "Mobile - iOS/Android or cross-platform apps, stores, device capabilities.",
            ua: "Mobile — iOS/Android або кросплатформа, стори, можливості пристрою.",
            de: "Mobile — iOS/Android oder plattformübergreifende Apps, Stores, Gerätefunktionen.",
      fr: "Mobile — applications iOS/Android ou multiplateformes, stores et capacités de l’appareil.",
      es: "Mobile — apps iOS/Android o multiplataforma, tiendas, capacidades del dispositivo.",
      it: "Mobile — app iOS/Android o multipiattaforma, store, capacità del dispositivo.",
      tr: "Mobile — iOS/Android veya çapraz platform uygulamaları, mağazalar, cihaz yetenekleri."
          },
          {
            en: "Embedded/IoT - firmware and device software under physical constraints.",
            ua: "Embedded/IoT — прошивки й ПЗ пристроїв у межах фізики: пам’ять, живлення, залізо.",
            de: "Embedded/IoT — Firmware und Gerätesoftware unter physischen Grenzen.",
      fr: "Embedded/IoT — micrologiciel et logiciel d’appareil sous contraintes physiques.",
      es: "Embedded/IoT — firmware y software de dispositivo bajo límites físicos.",
      it: "Embedded/IoT — firmware e software di dispositivo sotto vincoli fisici.",
      tr: "Embedded/IoT — fiziksel kısıtlar altında firmware ve cihaz yazılımı."
          },
          {
            en: "Blockchain/Web3 - smart contracts and wallet-connected applications.",
            ua: "Blockchain/Web3 — смартконтракти та застосунки, підключені до гаманця.",
            de: "Blockchain/Web3 — Smart Contracts und Anwendungen mit Wallet-Anbindung.",
      fr: "Blockchain/Web3 — smart contracts et applications reliées au portefeuille.",
      es: "Blockchain/Web3 — smart contracts y aplicaciones conectadas a un wallet.",
      it: "Blockchain/Web3 — smart contract e applicazioni collegate al wallet.",
      tr: "Blockchain/Web3 — smart contract’lar ve cüzdana bağlı uygulamalar."
          }
        ]
      },
      {
        heading: {
          en: "2. Quality, reliability, and operations",
          ua: "2. Якість, надійність і експлуатація",
          de: "2. Qualität, Zuverlässigkeit und Betrieb",
      fr: "2. Qualité, fiabilité et exploitation",
      es: "2. Calidad, fiabilidad y operaciones",
      it: "2. Qualità, affidabilità ed esercizio",
      tr: "2. Kalite, güvenilirlik ve işletim"
        },
        paragraphs: [
          {
            en: "Shipping is only half the job. These roles keep systems correct, deployable, and alive.",
            ua: "Віддати реліз — лише половина справи. Ці ролі тримають системи правильними, готовими до викладки й живими.",
            de: "Der Release ist nur die halbe Miete. Diese Rollen halten Systeme korrekt, auslieferbar und im Betrieb.",
      fr: "Livrer n’est que la moitié du travail. Ces rôles gardent les systèmes justes, déployables et en vie.",
      es: "Sacar la versión es solo la mitad. Estos roles mantienen los sistemas correctos, desplegables y en pie.",
      it: "Rilasciare è solo metà del lavoro. Questi ruoli tengono i sistemi corretti, rilasciabili e in vita.",
      tr: "Sürümü çıkarmak işin yarısıdır. Bu roller sistemleri doğru, yayınlanabilir ve ayakta tutar."
          }
        ],
        list: [
          {
            en: "QA (manual/automation) - finds defects and guards regressions.",
            ua: "QA (ручне/авто) — знаходить дефекти й не дає регресіям повернутися.",
            de: "QA (manuell/automatisiert) — findet Fehler und verhindert Regressionen.",
      fr: "QA (manuel/automatisé) — trouve les défauts et empêche les régressions de revenir.",
      es: "QA (manual/automatizado) — encuentra defectos y evita que vuelvan las regresiones.",
      it: "QA (manuale/automation) — trova i difetti e impedisce alle regressioni di tornare.",
      tr: "QA (manuel/otomasyon) — kusur bulur, regresyonların geri gelmesini engeller."
          },
          {
            en: "DevOps - CI/CD, infra automation, developer delivery platforms.",
            ua: "DevOps — CI/CD, автоматизація інфраструктури, платформа, якою розробники випускають код.",
            de: "DevOps — CI/CD, Infra-Automatisierung, die Plattform, über die Entwickler ausliefern.",
      fr: "DevOps — CI/CD, automatisation de l’infra, la plateforme avec laquelle les devs livrent.",
      es: "DevOps — CI/CD, automatización de infra, la plataforma con la que el equipo entrega.",
      it: "DevOps — CI/CD, automazione dell’infra, la piattaforma con cui il team rilascia.",
      tr: "DevOps — CI/CD, altyapı otomasyonu, geliştiricilerin kodu çıkardığı platform."
          },
          {
            en: "SRE - SLOs, incident practice, reducing toil, reliability trade-offs.",
            ua: "SRE — SLO, робота з інцидентами, менше ручної рутини, свідомі компроміси щодо надійності.",
            de: "SRE — SLOs, Incident-Praxis, weniger manuelle Plackerei, bewusste Kompromisse bei der Zuverlässigkeit.",
      fr: "SRE — SLO, pratique des incidents, moins de labeur manuel, arbitrages assumés sur la fiabilité.",
      es: "SRE — SLO, práctica de incidentes, menos trabajo rutinario, compromisos explícitos de fiabilidad.",
      it: "SRE — SLO, pratica degli incident, meno toil, compromessi espliciti sulla reliability.",
      tr: "SRE — SLO’lar, olay pratiği, angaryayı azaltmak, güvenilirlikte bilinçli ödünler."
          },
          {
            en: "SysAdmin - classic infrastructure, access, backups, internal IT ops.",
            ua: "SysAdmin — класична інфраструктура, доступи, резервні копії, внутрішня ІТ-експлуатація.",
            de: "SysAdmin — klassische Infrastruktur, Zugänge, Backups, interner IT-Betrieb.",
      fr: "SysAdmin — infrastructure classique, accès, sauvegardes, exploitation IT interne.",
      es: "SysAdmin — infra clásica, accesos, copias de seguridad, operación IT interna.",
      it: "SysAdmin — infra classica, accessi, backup, esercizio IT interno.",
      tr: "SysAdmin — klasik altyapı, erişim, yedekler, iç IT işletimi."
          },
          {
            en: "Cloud Engineer - scalable secure architectures on AWS/GCP/Azure.",
            ua: "Cloud Engineer — масштабовані й захищені архітектури на AWS/GCP/Azure.",
            de: "Cloud Engineer — skalierbare, abgesicherte Architekturen auf AWS/GCP/Azure.",
      fr: "Cloud Engineer — architectures évolutives et sécurisées sur AWS/GCP/Azure.",
      es: "Cloud Engineer — arquitecturas escalables y seguras en AWS/GCP/Azure.",
      it: "Cloud Engineer — architetture scalabili e sicure su AWS/GCP/Azure.",
      tr: "Cloud Engineer — AWS/GCP/Azure üzerinde ölçeklenebilir, güvenli mimariler."
          },
          {
            en: "Network Engineer - connectivity, segmentation, hybrid network design.",
            ua: "Network Engineer — зв’язок, сегментація, гібридні мережі.",
            de: "Network Engineer — Konnektivität, Segmentierung, hybrides Netzdesign.",
      fr: "Network Engineer — connectivité, segmentation, conception de réseaux hybrides.",
      es: "Network Engineer — conectividad, segmentación, diseño de red híbrida.",
      it: "Network Engineer — connettività, segmentazione, rete ibrida.",
      tr: "Network Engineer — bağlantı, segmentasyon, hibrit ağ tasarımı."
          },
          {
            en: "DBA - database performance, HA, recovery, data platform health.",
            ua: "DBA — швидкість баз, відмовостійкість, відновлення, здоров’я платформи даних.",
            de: "DBA — Datenbankleistung, Hochverfügbarkeit, Wiederherstellung, Gesundheit der Datenplattform.",
      fr: "DBA — performances des bases, haute disponibilité, reprise, santé de la plateforme data.",
      es: "DBA — rendimiento de bases, alta disponibilidad, recuperación, salud de la plataforma de datos.",
      it: "DBA — prestazioni dei database, alta disponibilità, ripristino, salute della piattaforma dati.",
      tr: "DBA — veritabanı performansı, yüksek erişilebilirlik, kurtarma, veri platformunun sağlığı."
          }
        ]
      },
      {
        heading: {
          en: "3. Product, design, and delivery management",
          ua: "3. Продукт, дизайн і керування поставкою",
          de: "3. Produkt, Design und Liefersteuerung",
      fr: "3. Produit, design et pilotage de la livraison",
      es: "3. Producto, diseño y gestión de la entrega",
      it: "3. Product, design e governo della consegna",
      tr: "3. Ürün, tasarım ve teslim yönetimi"
        },
        paragraphs: [
          {
            en: "These roles reduce building the wrong thing - or building the right thing too chaotically.",
            ua: "Ці ролі зменшують шанс збудувати не те — або збудувати правильне, але в хаосі.",
            de: "Diese Rollen senken das Risiko, das Falsche zu bauen — oder das Richtige im Chaos.",
      fr: "Ces rôles réduisent le risque de construire la mauvaise chose — ou la bonne, mais dans le chaos.",
      es: "Estos roles reducen el riesgo de construir lo equivocado — o lo correcto, pero en caos.",
      it: "Questi ruoli riducono il rischio di costruire la cosa sbagliata — o quella giusta, ma nel caos.",
      tr: "Bu roller yanlış şeyi kurmayı — ya da doğruyu kaosta kurmayı — azaltır."
          }
        ],
        list: [
          {
            en: "Product Manager - what/why, roadmap, outcomes and prioritization.",
            ua: "Product Manager — що і навіщо, дорожня карта, результати й пріоритети.",
            de: "Product Manager — Was und Warum, Roadmap, Wirkung und Prioritäten.",
      fr: "Product Manager — le quoi et le pourquoi, la feuille de route, les résultats et les priorités.",
      es: "Product Manager — el qué y el porqué, la hoja de ruta, resultados y prioridades.",
      it: "Product Manager — il cosa e il perché, roadmap, risultati e priorità.",
      tr: "Product Manager — ne ve neden, yol haritası, sonuçlar ve öncelikler."
          },
          {
            en: "Project Manager - how/when, scope, risks, predictable delivery.",
            ua: "Project Manager — як і коли, обсяг, ризики, передбачувана поставка.",
            de: "Project Manager — Wie und Wann, Umfang, Risiken, planbare Lieferung.",
      fr: "Project Manager — le comment et le quand, le périmètre, les risques, une livraison prévisible.",
      es: "Project Manager — el cómo y el cuándo, el alcance, los riesgos, una entrega previsible.",
      it: "Project Manager — il come e il quando, perimetro, rischi, consegna prevedibile.",
      tr: "Project Manager — nasıl ve ne zaman, kapsam, riskler, öngörülebilir teslim."
          },
          {
            en: "Business Analyst - requirements clarity and process translation.",
            ua: "Business Analyst — ясність вимог і переклад процесів мовою команди.",
            de: "Business Analyst — klare Anforderungen und Übersetzung von Prozessen.",
      fr: "Business Analyst — exigences limpides et traduction des processus pour l’équipe.",
      es: "Business Analyst — requisitos claros y traducción de procesos para el equipo.",
      it: "Business Analyst — requisiti chiari e traduzione dei processi per il team.",
      tr: "Business Analyst — net gereksinimler ve süreçleri ekibin diline çevirmek."
          },
          {
            en: "UI/UX Designer - flows, usability, visual system, handoff quality.",
            ua: "UI/UX Designer — сценарії, зручність, візуальна система, якісна передача в розробку.",
            de: "UI/UX Designer — Abläufe, Nutzbarkeit, visuelles System, saubere Übergabe an die Entwicklung.",
      fr: "UI/UX Designer — parcours, utilisabilité, système visuel, une passation propre vers le dev.",
      es: "UI/UX Designer — flujos, usabilidad, sistema visual, un traspaso limpio a desarrollo.",
      it: "UI/UX Designer — flussi, usabilità, sistema visivo, un passaggio pulito allo sviluppo.",
      tr: "UI/UX Designer — akışlar, kullanılabilirlik, görsel sistem, geliştirme ekibine temiz teslim."
          },
          {
            en: "Scrum Master - team flow, impediments, useful agile habits.",
            ua: "Scrum Master — ритм команди, перешкоди, корисні agile-звички — не ритуали заради ритуалів.",
            de: "Scrum Master — Teamfluss, Hindernisse, agile Gewohnheiten, die helfen — keine Rituale um der Rituale willen.",
      fr: "Scrum Master — le flux de l’équipe, les obstacles, des habitudes agile utiles — pas du théâtre de cérémonies.",
      es: "Scrum Master — el ritmo del equipo, los impedimentos, hábitos agile que sirven — no teatro de ceremonias.",
      it: "Scrum Master — flusso del team, impedimenti, abitudini agile che servono — non teatro di cerimonie.",
      tr: "Scrum Master — ekip ritmi, engeller, işe yarayan agile alışkanlıklar — tören tiyatrosu değil."
          }
        ]
      },
      {
        heading: {
          en: "4. Data, AI, and intelligence layers",
          ua: "4. Дані, AI і шар інтелекту",
          de: "4. Daten, KI und die Intelligenzschicht",
      fr: "4. Data, IA et couche d’intelligence",
      es: "4. Datos, IA y la capa de inteligencia",
      it: "4. Data, AI e lo strato di intelligence",
      tr: "4. Veri, AI ve zekâ katmanı"
        },
        paragraphs: [
          {
            en: "Data roles turn signals into decisions and models into production features.",
            ua: "Data-ролі перетворюють сигнали на рішення, а моделі — на функції в продакшені.",
            de: "Data-Rollen machen aus Signalen Entscheidungen und aus Modellen Funktionen im Produktivbetrieb.",
      fr: "Les rôles data transforment les signaux en décisions et les modèles en fonctions en production.",
      es: "Los roles de datos convierten señales en decisiones y modelos en funciones en producción.",
      it: "I ruoli data trasformano i segnali in decisioni e i modelli in funzioni in produzione.",
      tr: "Veri rolleri sinyalleri karara, modelleri canlı ortamdaki özelliklere çevirir."
          }
        ],
        list: [
          {
            en: "Data Analyst - metrics, dashboards, decision support.",
            ua: "Data Analyst — метрики, дашборди, опора для рішень.",
            de: "Data Analyst — Kennzahlen, Dashboards, Entscheidungshilfe.",
      fr: "Data Analyst — métriques, tableaux de bord, aide à la décision.",
      es: "Data Analyst — métricas, paneles, apoyo a la decisión.",
      it: "Data Analyst — metriche, dashboard, supporto alle decisioni.",
      tr: "Data Analyst — metrikler, panolar, karar desteği."
          },
          {
            en: "Data Engineer - pipelines, warehouses, trustworthy datasets.",
            ua: "Data Engineer — конвеєри, сховища, набори даних, яким можна вірити.",
            de: "Data Engineer — Pipelines, Warehouses, Datensätze, denen man trauen kann.",
      fr: "Data Engineer — pipelines, entrepôts, jeux de données dont on peut se fier.",
      es: "Data Engineer — pipelines, almacenes, conjuntos de datos de fiar.",
      it: "Data Engineer — pipeline, warehouse, dataset di cui ci si può fidare.",
      tr: "Data Engineer — hatlar, depolar, güvenilir veri kümeleri."
          },
          {
            en: "Data Scientist / ML Engineer - models from experiment to production.",
            ua: "Data Scientist / ML Engineer — моделі від експерименту до продакшену.",
            de: "Data Scientist / ML Engineer — Modelle vom Experiment bis in den Produktivbetrieb.",
      fr: "Data Scientist / ML Engineer — des modèles, de l’expérience jusqu’à la production.",
      es: "Data Scientist / ML Engineer — modelos del experimento a producción.",
      it: "Data Scientist / ML Engineer — modelli dall’esperimento alla produzione.",
      tr: "Data Scientist / ML Engineer — deneyden canlıya modeller."
          },
          {
            en: "AI Engineer - LLM apps, RAG, agents, evaluation, cost control.",
            ua: "AI Engineer — застосунки на LLM, RAG, агенти, оцінювання якості, контроль вартості.",
            de: "AI Engineer — LLM-Anwendungen, RAG, Agenten, Qualität messen, Kosten im Griff.",
      fr: "AI Engineer — applications LLM, RAG, agents, évaluation, maîtrise des coûts.",
      es: "AI Engineer — apps LLM, RAG, agentes, evaluación, control de coste.",
      it: "AI Engineer — app LLM, RAG, agent, valutazione, controllo dei costi.",
      tr: "AI Engineer — LLM uygulamaları, RAG, ajanlar, değerlendirme, maliyet kontrolü."
          }
        ]
      },
      {
        heading: {
          en: "5. Security, support, and knowledge",
          ua: "5. Безпека, підтримка і знання",
          de: "5. Sicherheit, Support und Wissen",
      fr: "5. Sécurité, support et connaissance",
      es: "5. Seguridad, soporte y conocimiento",
      it: "5. Security, support e conoscenza",
      tr: "5. Güvenlik, destek ve bilgi"
        },
        paragraphs: [
          {
            en: "Often hired “too late” - then become existential. Plan them earlier than a breach or churn spike.",
            ua: "Їх часто наймають «уже пізно» — і тоді від них залежить виживання. Закладайте ці ролі раніше, ніж станеться злам чи стрибок відтоку.",
            de: "Oft erst „zu spät“ eingestellt — dann existenziell. Planen Sie sie, bevor ein Einbruch oder ein Churn-Sprung kommt.",
      fr: "On les recrute souvent « trop tard » — et soudain c’est vital. Prévoyez-les avant une faille ou un pic de désabonnement.",
      es: "A menudo se contratan «demasiado tarde» — y entonces son existenciales. Plánelos antes de una brecha o de un pico de baja.",
      it: "Spesso si assumono «troppo tardi» — e allora diventano vitali. Pianificateli prima di una violazione o di un picco di abbandono.",
      tr: "Çoğu zaman «çok geç» işe alınırlar — sonra varoluşsal olurlar. Bir ihlal veya kayıp sıçramasından önce planlayın."
          }
        ],
        list: [
          {
            en: "Cybersecurity - risk reduction, hardening, incidents, secure SDLC.",
            ua: "Кібербезпека — знизити ризик, укріпити системи, інциденти, безпечний цикл розробки.",
            de: "Cybersicherheit — Risiko senken, Systeme härten, Incidents, sicherer Entwicklungszyklus.",
      fr: "Cybersécurité — réduire le risque, durcir les systèmes, incidents, cycle de développement sécurisé.",
      es: "Ciberseguridad — bajar el riesgo, endurecer sistemas, incidentes, ciclo de desarrollo seguro.",
      it: "Cybersecurity — ridurre il rischio, indurire i sistemi, incident, ciclo di sviluppo sicuro.",
      tr: "Siber güvenlik — riski düşürmek, sistemleri sıkılaştırmak, olaylar, güvenli geliştirme döngüsü."
          },
          {
            en: "Technical Support - unblock users, escalate well, feed roadmap.",
            ua: "Technical Support — розблокувати користувачів, ескалювати вчасно, насичувати дорожню карту реальним болем.",
            de: "Technical Support — Nutzer entblocken, sauber eskalieren, die Roadmap mit echtem Schmerz speisen.",
      fr: "Technical Support — débloquer les utilisateurs, escalader proprement, nourrir la feuille de route du vrai terrain.",
      es: "Technical Support — desbloquear a quienes usan el producto, escalar bien, alimentar la hoja de ruta con dolor real.",
      it: "Technical Support — sbloccare chi usa il prodotto, escalare bene, alimentare la roadmap col dolore vero.",
      tr: "Technical Support — kullanıcıyı açmak, doğru yükseltmek, yol haritasını sahadaki acıyla beslemek."
          },
          {
            en: "Technical Writer - docs that speed adoption and cut “how do I?” load.",
            ua: "Technical Writer — тексти, з яких продукт швидше беруть у роботу, і менше питань «а як це зробити?».",
            de: "Technical Writer — Texte, die Adoption beschleunigen und die „Wie mache ich das?“-Flut drosseln.",
      fr: "Technical Writer — des docs qui accélèrent l’adoption et coupent la charge du « comment je fais ? ».",
      es: "Technical Writer — docs que aceleran la adopción y recortan la carga de «¿cómo se hace?».",
      it: "Technical Writer — documenti che accelerano l’adozione e tagliano il carico di «come si fa?».",
      tr: "Technical Writer — ürünü daha çabuk benimseten ve «nasıl yapılır?» yükünü kesen metinler."
          }
        ]
      },
      {
        heading: {
          en: "6. Leadership and architecture",
          ua: "6. Лідерство й архітектура",
          de: "6. Führung und Architektur",
      fr: "6. Leadership et architecture",
      es: "6. Liderazgo y arquitectura",
      it: "6. Leadership e architettura",
      tr: "6. Liderlik ve mimari"
        },
        paragraphs: [
          {
            en: "Leadership roles create leverage: better decisions, healthier teams, systems that survive growth.",
            ua: "Лідерські ролі дають важіль: кращі рішення, здоровіші команди, системи, які витримують ріст.",
            de: "Führungsrollen schaffen Hebel: bessere Entscheidungen, gesündere Teams, Systeme, die Wachstum aushalten.",
      fr: "Les rôles de leadership créent du levier : de meilleures décisions, des équipes plus saines, des systèmes qui tiennent la croissance.",
      es: "Los roles de liderazgo dan palanca: mejores decisiones, equipos más sanos, sistemas que aguantan el crecimiento.",
      it: "I ruoli di leadership creano leva: decisioni migliori, team più sani, sistemi che reggono la crescita.",
      tr: "Liderlik rolleri kaldıraç yaratır: daha iyi kararlar, daha sağlıklı ekipler, büyümeyi taşıyan sistemler."
          }
        ],
        list: [
          {
            en: "Software/Solutions Architect - structure, boundaries, long-term trade-offs.",
            ua: "Software/Solutions Architect — структура, межі сервісів, довгострокові компроміси.",
            de: "Software/Solutions Architect — Struktur, Grenzen, langfristige Kompromisse.",
      fr: "Software/Solutions Architect — structure, frontières, arbitrages de long terme.",
      es: "Software/Solutions Architect — estructura, límites, compromisos a largo plazo.",
      it: "Software/Solutions Architect — struttura, confini, compromessi di lungo periodo.",
      tr: "Software/Solutions Architect — yapı, sınırlar, uzun vadeli ödünler."
          },
          {
            en: "Tech Lead - technical bar inside a team; still close to code.",
            ua: "Tech Lead — технічна планка в команді; досі близько до коду.",
            de: "Tech Lead — die technische Messlatte im Team; weiterhin nah am Code.",
      fr: "Tech Lead — le niveau technique dans une équipe ; toujours proche du code.",
      es: "Tech Lead — el listón técnico dentro de un equipo; sigue cerca del código.",
      it: "Tech Lead — l’asticella tecnica dentro un team; resta vicino al codice.",
      tr: "Tech Lead — ekip içindeki teknik çıta; hâlâ koda yakın."
          },
          {
            en: "Engineering Manager - people, performance, delivery system.",
            ua: "Engineering Manager — люди, розвиток, система, якою команда постачає.",
            de: "Engineering Manager — Menschen, Entwicklung, das System, mit dem das Team liefert.",
      fr: "Engineering Manager — les gens, le développement, le système avec lequel l’équipe livre.",
      es: "Engineering Manager — personas, desarrollo, el sistema con el que el equipo entrega.",
      it: "Engineering Manager — persone, crescita, il sistema con cui il team consegna.",
      tr: "Engineering Manager — insanlar, gelişim, ekibin teslim ettiği sistem."
          },
          {
            en: "CTO / VP Engineering - tech strategy and eng org at company scale.",
            ua: "CTO / VP Engineering — техстратегія і організація інженерії на рівні компанії.",
            de: "CTO / VP Engineering — Technologiestrategie und Engineering-Organisation im Unternehmensmaßstab.",
      fr: "CTO / VP Engineering — stratégie tech et organisation d’ingénierie à l’échelle de l’entreprise.",
      es: "CTO / VP Engineering — estrategia tech y organización de ingeniería a escala de empresa.",
      it: "CTO / VP Engineering — strategia tech e organizzazione engineering a scala aziendale.",
      tr: "CTO / VP Engineering — şirket ölçeğinde teknoloji stratejisi ve mühendislik organizasyonu."
          }
        ]
      },
      {
        heading: {
          en: "How roles collaborate (simple mental model)",
          ua: "Як ролі працюють разом (проста схема)",
          de: "Wie Rollen zusammenarbeiten (ein einfaches Modell)",
      fr: "Comment les rôles collaborent (un modèle simple)",
      es: "Cómo colaboran los roles (un modelo simple)",
      it: "Come collaborano i ruoli (un modello semplice)",
      tr: "Roller nasıl birlikte çalışır (basit bir model)"
        },
        paragraphs: [],
        list: [
          {
            en: "Discovery: PM + Designer (+ BA) clarify the problem and UX.",
            ua: "Discovery: PM + дизайнер (+ BA) прояснюють задачу і UX.",
            de: "Discovery: PM + Design (+ BA) klären das Problem und die UX.",
      fr: "Discovery : PM + design (+ BA) clarifient le problème et l’UX.",
      es: "Discovery: PM + diseño (+ BA) aclaran el problema y el UX.",
      it: "Discovery: PM + design (+ BA) chiariscono il problema e l’UX.",
      tr: "Discovery: PM + tasarım (+ BA) sorunu ve UX’i netleştirir."
          },
          {
            en: "Build: Frontend/Backend/Full-stack/Mobile implement; Architect/TL guide hard choices.",
            ua: "Build: Frontend/Backend/Full-stack/Mobile реалізують; архітектор і Tech Lead ведуть складні рішення.",
            de: "Build: Frontend/Backend/Full-Stack/Mobile setzen um; Architect und Tech Lead steuern die harten Entscheidungen.",
      fr: "Build : Frontend/Backend/Full-stack/Mobile implémentent ; architecte et Tech Lead tranchent les choix durs.",
      es: "Build: Frontend/Backend/Full-stack/Mobile implementan; arquitecto y Tech Lead guían las decisiones difíciles.",
      it: "Build: Frontend/Backend/Full-stack/Mobile implementano; architect e Tech Lead guidano le scelte difficili.",
      tr: "Build: Frontend/Backend/Full-stack/Mobile uygular; mimar ve Tech Lead zor seçimleri yönlendirir."
          },
          {
            en: "Verify: QA + developers test; Security reviews sensitive paths.",
            ua: "Verify: QA і розробники тестують; безпека дивиться чутливі шляхи.",
            de: "Verify: QA und Entwickler testen; Security prüft sensible Pfade.",
      fr: "Verify : QA et développeurs testent ; la sécurité examine les chemins sensibles.",
      es: "Verify: QA y desarrollo prueban; seguridad revisa los caminos sensibles.",
      it: "Verify: QA e sviluppatori testano; security esamina i percorsi sensibili.",
      tr: "Verify: QA ve geliştiriciler test eder; güvenlik hassas yolları inceler."
          },
          {
            en: "Release: DevOps/SRE/Cloud make deploy and runtime healthy.",
            ua: "Release: DevOps/SRE/Cloud роблять викладку й рантайм здоровими.",
            de: "Release: DevOps/SRE/Cloud halten Auslieferung und Runtime gesund.",
      fr: "Release : DevOps/SRE/Cloud soignent le déploiement et l’exécution.",
      es: "Release: DevOps/SRE/Cloud dejan sano el despliegue y el runtime.",
      it: "Release: DevOps/SRE/Cloud tengono sani rilascio ed esecuzione.",
      tr: "Release: DevOps/SRE/Cloud yayın ve çalışma ortamını sağlıklı tutar."
          },
          {
            en: "Learn: Analysts/Data/AI measure impact; Support/Docs close the loop with users.",
            ua: "Learn: аналітики, data й AI міряють ефект; підтримка і документація замикають коло з користувачами.",
            de: "Learn: Analysten, Data und KI messen die Wirkung; Support und Docs schließen den Kreis mit den Nutzenden.",
      fr: "Learn : analystes, data et IA mesurent l’effet ; support et docs referment la boucle avec les utilisateurs.",
      es: "Learn: analistas, datos e IA miden el efecto; soporte y docs cierran el ciclo con quien usa el producto.",
      it: "Learn: analyst, data e AI misurano l’effetto; support e docs chiudono il cerchio con chi usa il prodotto.",
      tr: "Learn: analistler, veri ve AI etkiyi ölçer; destek ve dokümanlar döngüyü kullanıcıyla kapatır."
          }
        ]
      },
      {
        heading: {
          en: "How to choose the next hire",
          ua: "Як обрати наступну людину в команду",
          de: "So wählen Sie die nächste Einstellung",
      fr: "Comment choisir la prochaine embauche",
      es: "Cómo elegir la siguiente contratación",
      it: "Come scegliere la prossima assunzione",
      tr: "Sıradaki işe alımı nasıl seçersiniz"
        },
        paragraphs: [
          {
            en: "Hire for the bottleneck you actually have - not the trendiest title.",
            ua: "Наймайте під вузьке місце, яке у вас є насправді, — не під наймоднішу назву посади.",
            de: "Stellen Sie für den Engpass ein, den Sie wirklich haben — nicht für den angesagtesten Titel.",
      fr: "Recrutez pour le goulot que vous avez vraiment — pas pour le titre le plus en vogue.",
      es: "Contrate para el cuello de botella que tiene de verdad — no para el título de moda.",
      it: "Assumete per il collo di bottiglia che avete davvero — non per il titolo più di tendenza.",
      tr: "Gerçekten yaşadığınız darboğaz için işe alın — en moda unvan için değil."
          }
        ],
        list: [
          {
            en: "Users bounce on UI → Frontend / UI-UX first.",
            ua: "Люди відвалюються на інтерфейсі → спочатку Frontend / UI-UX.",
            de: "Nutzer springen an der Oberfläche ab → zuerst Frontend / UI-UX.",
      fr: "Les gens partent sur l’interface → d’abord Frontend / UI-UX.",
      es: "La gente se va en la interfaz → primero Frontend / UI-UX.",
      it: "Le persone abbandonano sull’interfaccia → prima Frontend / UI-UX.",
      tr: "Kullanıcılar arayüzde kaçıyor → önce Frontend / UI-UX."
          },
          {
            en: "Integrations/auth/data integrity fail → Backend (or senior Full-stack).",
            ua: "Ломаються інтеграції, автентифікація чи цілісність даних → Backend (або сильний Full-stack).",
            de: "Integrationen, Auth oder Datenintegrität brechen → Backend (oder ein starkes Full-Stack).",
      fr: "Les intégrations, l’auth ou l’intégrité des données cassent → Backend (ou un Full-stack solide).",
      es: "Fallan integraciones, autenticación o integridad de datos → Backend (o un Full-stack sólido).",
      it: "Si rompono integrazioni, autenticazione o integrità dei dati → Backend (o un Full-stack solido).",
      tr: "Entegrasyon, kimlik doğrulama veya veri bütünlüğü bozuluyor → Backend (veya güçlü bir Full-stack)."
          },
          {
            en: "Deploys are scary → DevOps/Cloud.",
            ua: "Викладати страшно → DevOps/Cloud.",
            de: "Releases machen Angst → DevOps/Cloud.",
      fr: "Les mises en prod font peur → DevOps/Cloud.",
      es: "Los despliegues dan miedo → DevOps/Cloud.",
      it: "I rilasci fanno paura → DevOps/Cloud.",
      tr: "Yayın korkutucu → DevOps/Cloud."
          },
          {
            en: "Shipping a lot with no outcomes → Product Manager.",
            ua: "Багато релізите, а результату немає → Product Manager.",
            de: "Viel Output, keine Wirkung → Product Manager.",
      fr: "Vous livrez beaucoup, sans effet → Product Manager.",
      es: "Se entrega mucho, sin resultado → Product Manager.",
      it: "Si rilascia tanto, senza risultato → Product Manager.",
      tr: "Çok teslim var, sonuç yok → Product Manager."
          },
          {
            en: "Deadlines slip across vendors/teams → Project Manager / stronger TL.",
            ua: "Дедлайни пливуть між підрядниками й командами → Project Manager або сильніший Tech Lead.",
            de: "Termine rutschen zwischen Dienstleistern und Teams → Project Manager oder ein stärkerer Tech Lead.",
      fr: "Les délais glissent entre prestataires et équipes → Project Manager ou un Tech Lead plus solide.",
      es: "Los plazos se resbalan entre proveedores y equipos → Project Manager o un Tech Lead más sólido.",
      it: "Le scadenze slittano tra fornitori e team → Project Manager o un Tech Lead più solido.",
      tr: "Teslim tarihleri tedarikçiler ve ekipler arasında kayıyor → Project Manager veya daha güçlü bir Tech Lead."
          },
          {
            en: "Decisions are gut-feel → Data Analyst (+ tracking) before hiring ML.",
            ua: "Рішення «на відчуттях» → Data Analyst (і нормальний трекінг) раніше за ML.",
            de: "Entscheidungen aus dem Bauch → Data Analyst (plus Tracking), bevor Sie ML einstellen.",
      fr: "Les décisions se prennent au feeling → Data Analyst (et un vrai tracking) avant d’embaucher du ML.",
      es: "Las decisiones son de intuición → Data Analyst (y medición decente) antes de contratar ML.",
      it: "Le decisioni sono di pancia → Data Analyst (e un tracking decente) prima di assumere ML.",
      tr: "Kararlar içgüdüyle alınıyor → ML işe almadan önce Data Analyst (ve düzgün ölçüm)."
          },
          {
            en: "Sensitive data / compliance pressure → Security earlier than you think.",
            ua: "Чутливі дані чи тиск комплаєнсу → безпеку раніше, ніж здається.",
            de: "Sensible Daten oder Compliance-Druck → Security früher, als Sie denken.",
      fr: "Données sensibles ou pression de conformité → la sécurité plus tôt que vous ne le croyez.",
      es: "Datos sensibles o presión de cumplimiento → seguridad antes de lo que cree.",
      it: "Dati sensibili o pressione di compliance → security prima di quanto pensiate.",
      tr: "Hassas veri veya uyum baskısı → sandığınızdan erken güvenlik."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "There is no single “IT person.” There is a system of roles. Start with a clear ownership map, hire for the current constraint, and grow specialists as complexity grows. Use the individual role guides in this series when you need a deeper job description for hiring or career planning.",
            ua: "Немає однієї «ІТ-людини». Є система ролей. Почніть із чіткої карти відповідальності, наймайте під поточне вузьке місце й нарощуйте спеціалістів зі зростанням складності. Окремі гайди цієї серії знадобляться, коли потрібен глибший опис позиції для найму чи кар’єрного плану.",
            de: "Es gibt nicht „die eine IT-Person“. Es gibt ein System von Rollen. Beginnen Sie mit einer klaren Verantwortungskarte, stellen Sie für den aktuellen Engpass ein und bauen Sie Spezialistinnen und Spezialisten auf, wenn die Komplexität wächst. Die einzelnen Rollen-Guides dieser Serie helfen, wenn Sie eine tiefere Stellenbeschreibung für Recruiting oder Karriereplanung brauchen.",
      fr: "Il n’existe pas « l’informaticien ». Il existe un système de rôles. Partez d’une carte claire des responsabilités, recrutez pour le goulot actuel, et faites grandir des spécialistes à mesure que la complexité monte. Les guides de cette série vous serviront quand il faudra une fiche de poste plus profonde pour recruter ou tracer un parcours.",
      es: "No existe «la persona de IT». Existe un sistema de roles. Empiece con un mapa claro de responsabilidades, contrate para el cuello de botella actual y haga crecer especialistas a medida que crece la complejidad. Las guías de esta serie le servirán cuando necesite una descripción más profunda para contratar o planificar carrera.",
      it: "Non esiste «la persona IT». Esiste un sistema di ruoli. Partite da una mappa chiara delle responsabilità, assumete per il vincolo attuale e fate crescere gli specialisti con la complessità. Le guide di questa serie vi servono quando occorre una job description più profonda per assumere o pianificare la carriera.",
      tr: "Tek bir «IT insanı» yoktur. Bir roller sistemi vardır. Net bir sorumluluk haritasıyla başlayın, mevcut darboğaz için işe alın, karmaşıklık büyüdükçe uzmanları büyütün. İşe alım veya kariyer planı için daha derin bir iş tanımı gerektiğinde bu serideki rol rehberlerini kullanın."
          }
        ]
      }
    ]
  },
  {
    slug: "frontend-developer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Frontend Developer Do? Responsibilities, Skills, and When You Need One",
      ua: "Чим займається frontend-розробник: обов’язки, навички і коли ця людина вам потрібна",
      de: "Was macht ein Frontend-Entwickler? Aufgaben, Kompetenzen und wann Sie eine brauchen",
      fr: "Que fait un développeur frontend ? Missions, compétences et quand en recruter un",
      es: "¿Qué hace un desarrollador frontend? Funciones, competencias y cuándo contratarlo",
      it: "Cosa fa uno sviluppatore frontend? Mansioni, competenze e quando assumerlo",
      tr: "Frontend geliştirici ne yapar? Görevler, yetkinlikler ve ne zaman işe almalısınız"
    },
    excerpt: {
      en: "A clear guide to the frontend developer role: UI implementation, performance, accessibility, and how this specialist fits into a product team.",
      ua: "Зрозумілий розбір ролі frontend-розробника: збирає інтерфейс, тримає швидкість і доступність, і як ця людина сідає в продуктову команду.",
      de: "Ein klarer Blick auf die Frontend-Rolle: Oberfläche umsetzen, Tempo und Barrierefreiheit halten – und wie diese Spezialist:innen ins Produktteam passen.",
      fr: "Un guide clair du métier frontend : implémenter l’interface, tenir la perf et l’accessibilité, et comment ce profil s’insère dans une équipe produit.",
      es: "Una guía clara del rol frontend: implementar la interfaz, cuidar rendimiento y accesibilidad, y cómo encaja este perfil en un equipo de producto.",
      it: "Una guida chiara al ruolo frontend: implementare l’interfaccia, tenere prestazioni e accessibilità, e come questo profilo sta in un team di prodotto.",
      tr: "Frontend rolüne net bir bakış: arayüzü kurmak, hız ve erişilebilirliği tutmak ve bu uzmanın ürün ekibindeki yeri."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Frontend",
        "IT Roles",
        "Web Development",
        "Hiring"
      ],
      ua: [
        "Кар'єра",
        "Frontend",
        "ІТ-ролі",
        "Веброзробка",
        "Найм"
      ],
      de: [
        "Karriere",
        "Frontend",
        "IT-Rollen",
        "Webentwicklung",
        "Recruiting"
      ],
      fr: [
        "Carrière",
        "Frontend",
        "Métiers IT",
        "Développement web",
        "Recrutement"
      ],
      es: [
        "Carrera",
        "Frontend",
        "Roles IT",
        "Desarrollo web",
        "Contratación"
      ],
      it: [
        "Carriera",
        "Frontend",
        "Ruoli IT",
        "Sviluppo web",
        "Selezione"
      ],
      tr: [
        "Kariyer",
        "Frontend",
        "IT rolleri",
        "Web geliştirme",
        "İşe alım"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A frontend developer builds everything users see and interact with in the browser or web app: layouts, forms, navigation, animations, client-side state, and the connection to APIs. Their job is not “make it pretty” - it is to turn designs and product requirements into fast, accessible, reliable interfaces.",
            ua: "Frontend-розробник збирає все, що людина бачить і натискає в браузері: верстку, форми, навігацію, анімації, стан на клієнті й зв’язок з API. Це не «зробити гарно» — це перетворити макети й продуктові вимоги на швидкий, доступний і надійний інтерфейс.",
            de: "Ein Frontend-Entwickler baut alles, was Menschen im Browser sehen und bedienen: Layouts, Formulare, Navigation, Animationen, Client-State und die Anbindung an APIs. Die Aufgabe ist nicht, „es hübsch zu machen“, sondern Designs und Produktanforderungen in schnelle, barrierefreie, zuverlässige Oberflächen zu übersetzen.",
      fr: "Un développeur frontend construit tout ce que l’on voit et manipule dans le navigateur : mises en page, formulaires, navigation, animations, état côté client et branchement aux API. Le métier n’est pas de « faire joli » : c’est de transformer maquettes et besoins produit en interfaces rapides, accessibles et fiables.",
      es: "Un desarrollador frontend construye todo lo que se ve y se usa en el navegador: layouts, formularios, navegación, animaciones, estado en el cliente y la conexión a las APIs. El trabajo no es «que quede bonito»: es convertir diseño y requisitos en interfaces rápidas, accesibles y fiables.",
      it: "Uno sviluppatore frontend costruisce tutto ciò che si vede e si usa nel browser: layout, form, navigazione, animazioni, stato sul client e il collegamento alle API. Il mestiere non è «renderlo carino»: è tradurre design e requisiti di prodotto in interfacce veloci, accessibili e affidabili.",
      tr: "Bir frontend geliştirici, tarayıcıda görülen ve tıklanan her şeyi kurar: yerleşim, formlar, gezinme, animasyonlar, istemci durumu ve API bağlantısı. İşi «güzel yapmak» değildir — tasarım ve ürün gereksinimlerini hızlı, erişilebilir, güvenilir arayüzlere çevirmektir."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Implement responsive UI from Figma/design systems in HTML/CSS/JS or React/Vue/etc.",
            ua: "Зібрати адаптивний інтерфейс з Figma чи дизайн-системи на HTML/CSS/JS або React/Vue тощо.",
            de: "Responsives UI aus Figma oder einem Design System in HTML/CSS/JS bzw. React/Vue umsetzen.",
      fr: "Implémenter une interface responsive à partir de Figma ou d’un design system, en HTML/CSS/JS ou React/Vue.",
      es: "Implementar una interfaz adaptable desde Figma o un design system, en HTML/CSS/JS o React/Vue.",
      it: "Implementare un’interfaccia responsive da Figma o da un design system, in HTML/CSS/JS o React/Vue.",
      tr: "Figma veya design system’den HTML/CSS/JS ya da React/Vue ile uyarlanabilir arayüz kurmak."
          },
          {
            en: "Manage client state, routing, forms, validation, and error UX.",
            ua: "Тримати клієнтський стан, маршрути, форми, валідацію й те, як виглядають помилки.",
            de: "Client-State, Routing, Formulare, Validierung und die UX von Fehlern im Griff behalten.",
      fr: "Gérer l’état client, le routage, les formulaires, la validation et l’expérience des erreurs.",
      es: "Gestionar el estado del cliente, el enrutado, formularios, validación y cómo se muestran los errores.",
      it: "Gestire stato del client, routing, form, validazione e come si mostrano gli errori.",
      tr: "İstemci durumunu, yönlendirmeyi, formları, doğrulamayı ve hata deneyimini yönetmek."
          },
          {
            en: "Integrate REST/GraphQL APIs and handle loading, empty, and failure states.",
            ua: "Підключити REST/GraphQL API й закрити стани завантаження, порожнечі та збою.",
            de: "REST/GraphQL-APIs anbinden und Lade-, Leer- und Fehlerzustände sauber abbilden.",
      fr: "Brancher les API REST/GraphQL et traiter les états de chargement, de vide et d’échec.",
      es: "Integrar APIs REST/GraphQL y cubrir carga, vacío y error.",
      it: "Integrare API REST/GraphQL e coprire caricamento, vuoto ed errore.",
      tr: "REST/GraphQL API’lerini bağlamak; yükleme, boş ve hata durumlarını ele almak."
          },
          {
            en: "Optimize Core Web Vitals, accessibility (a11y), and cross-browser behavior.",
            ua: "Підтягнути Core Web Vitals, доступність (a11y) і поведінку в різних браузерах.",
            de: "Core Web Vitals, Barrierefreiheit (a11y) und das Verhalten in verschiedenen Browsern verbessern.",
      fr: "Soigner les Core Web Vitals, l’accessibilité (a11y) et le comportement d’un navigateur à l’autre.",
      es: "Cuidar Core Web Vitals, accesibilidad (a11y) y el comportamiento entre navegadores.",
      it: "Curare Core Web Vitals, accessibilità (a11y) e il comportamento tra browser.",
      tr: "Core Web Vitals, erişilebilirlik (a11y) ve tarayıcılar arası davranışı iyileştirmek."
          },
          {
            en: "Collaborate with designers, backend, QA, and product on UX trade-offs.",
            ua: "Разом із дизайном, бекендом, QA і продуктом обирати UX-компроміси.",
            de: "Mit Design, Backend, QA und Produkt UX-Kompromisse aushandeln.",
      fr: "Arbitrer les compromis UX avec le design, le backend, la QA et le produit.",
      es: "Acordar compromisos de UX con diseño, backend, QA y producto.",
      it: "Accordare i compromessi di UX con design, backend, QA e product.",
      tr: "Tasarım, backend, QA ve ürünle UX ödünlerini birlikte seçmek."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "JavaScript/TypeScript, HTML, CSS; React or another modern framework",
            ua: "JavaScript/TypeScript, HTML, CSS; React або інший сучасний фреймворк",
            de: "JavaScript/TypeScript, HTML, CSS; React oder ein anderes modernes Framework",
      fr: "JavaScript/TypeScript, HTML, CSS ; React ou un autre framework moderne",
      es: "JavaScript/TypeScript, HTML, CSS; React u otro framework moderno",
      it: "JavaScript/TypeScript, HTML, CSS; React o un altro framework moderno",
      tr: "JavaScript/TypeScript, HTML, CSS; React veya başka modern bir framework"
          },
          {
            en: "Responsive layout, design systems, component architecture",
            ua: "Адаптивна верстка, дизайн-системи, архітектура компонентів",
            de: "Responsives Layout, Design Systeme, Komponentenarchitektur",
      fr: "Mise en page responsive, design systems, architecture de composants",
      es: "Maquetación adaptable, design systems, arquitectura de componentes",
      it: "Layout responsive, design system, architettura a componenti",
      tr: "Uyarlanabilir yerleşim, design system’ler, bileşen mimarisi"
          },
          {
            en: "Browser APIs, performance profiling, basic SEO for SPAs/SSR",
            ua: "Browser API, профілювання швидкості, базове SEO для SPA/SSR",
            de: "Browser-APIs, Performance-Profiling, grundlegendes SEO für SPA/SSR",
      fr: "API du navigateur, profilage des perfs, SEO de base pour SPA/SSR",
      es: "APIs del navegador, perfilado de rendimiento, SEO básico para SPA/SSR",
      it: "API del browser, profiling delle prestazioni, SEO di base per SPA/SSR",
      tr: "Tarayıcı API’leri, performans profilleme, SPA/SSR için temel SEO"
          },
          {
            en: "Git, code review, testing (unit/component/E2E basics)",
            ua: "Git, рев’ю коду, тести (unit, компонентні, базовий E2E)",
            de: "Git, Code Review, Tests (Unit, Komponenten, E2E-Grundlagen)",
      fr: "Git, relecture de code, tests (unitaires, composants, bases E2E)",
      es: "Git, revisión de código, tests (unitarios, de componente, E2E básico)",
      it: "Git, code review, test (unitari, di componente, E2E di base)",
      tr: "Git, kod incelemesi, test (unit, bileşen, temel E2E)"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "You need a frontend specialist when conversion, UX quality, and interface speed directly affect revenue - marketing sites, SaaS dashboards, e-commerce, CRMs, and any product where users live in the UI every day.",
            ua: "Frontend-спеціаліст потрібен, коли конверсія, якість UX і швидкість екрана б’ють по виручці: лендінги, кабінети SaaS, e-commerce, CRM і будь-який продукт, у якому людина щодня сидить в інтерфейсі.",
            de: "Sie brauchen Frontend-Expertise, wenn Conversion, UX-Qualität und Oberflächentempo direkt am Umsatz hängen: Marketingseiten, SaaS-Dashboards, E-Commerce, CRMs und jedes Produkt, in dem Menschen täglich in der Oberfläche arbeiten.",
      fr: "Vous avez besoin d’un spécialiste frontend quand la conversion, la qualité d’UX et la vitesse de l’interface pèsent sur le chiffre : sites marketing, tableaux de bord SaaS, e-commerce, CRM, et tout produit où l’on vit dans l’interface au quotidien.",
      es: "Necesita un especialista frontend cuando la conversión, la calidad de UX y la velocidad de la interfaz afectan al ingreso: sites de marketing, paneles SaaS, e-commerce, CRM y cualquier producto en el que se vive en la interfaz cada día.",
      it: "Vi serve uno specialista frontend quando conversione, qualità UX e velocità dell’interfaccia pesano sul fatturato: siti marketing, dashboard SaaS, e-commerce, CRM e ogni prodotto in cui si vive nell’interfaccia ogni giorno.",
      tr: "Dönüşüm, UX kalitesi ve arayüz hızı ciroyu doğrudan etkiliyorsa frontend uzmanına ihtiyacınız var: pazarlama siteleri, SaaS panoları, e-ticaret, CRM ve kullanıcının her gün arayüzde yaşadığı her ürün."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "If your bottleneck is a slow or confusing interface - not the database - a strong frontend (or full-stack frontend) engineer usually delivers the highest ROI first.",
            ua: "Якщо вузьке місце — повільний чи заплутаний інтерфейс, а не база, сильний frontend (або full-stack із фокусом на клієнт) зазвичай дає найшвидшу віддачу.",
            de: "Wenn Ihr Engpass eine langsame oder verwirrende Oberfläche ist — nicht die Datenbank — bringt starkes Frontend (oder Full-Stack mit Frontend-Fokus) meist zuerst den höchsten Ertrag.",
      fr: "Si le goulot est une interface lente ou confuse — pas la base de données — un frontend solide (ou un full-stack orienté client) rapporte généralement le plus, et d’abord.",
      es: "Si el cuello de botella es una interfaz lenta o confusa — no la base de datos — un frontend fuerte (o un full-stack con foco en el cliente) suele dar el retorno más alto primero.",
      it: "Se il collo di bottiglia è un’interfaccia lenta o confusa — non il database — un frontend solido (o un full-stack con focus sul client) di solito dà prima il ritorno più alto.",
      tr: "Darboğaz veritabanı değil, yavaş veya kafa karıştıran bir arayüzse — güçlü bir frontend (veya istemci odaklı full-stack) genellikle ilk ve en yüksek getiriyi verir."
          }
        ]
      }
    ]
  },
  {
    slug: "backend-developer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Backend Developer Do? APIs, Data, and System Logic Explained",
      ua: "Чим займається backend-розробник: API, дані й логіка системи",
      de: "Was macht ein Backend-Entwickler? APIs, Daten und Systemlogik",
      fr: "Que fait un développeur backend ? API, données et logique système",
      es: "¿Qué hace un desarrollador backend? APIs, datos y lógica de sistema",
      it: "Cosa fa uno sviluppatore backend? API, dati e logica di sistema",
      tr: "Backend geliştirici ne yapar? API’ler, veri ve sistem mantığı"
    },
    excerpt: {
      en: "Backend developers own server logic, databases, APIs, auth, and integrations. Here is what the role covers and when to hire one.",
      ua: "Backend-розробники відповідають за серверну логіку, бази, API, автентифікацію та інтеграції. Що входить у роль і коли варто наймати.",
      de: "Backend-Entwickler verantworten Serverlogik, Datenbanken, APIs, Authentifizierung und Integrationen. Was die Rolle umfasst und wann Sie einstellen sollten.",
      fr: "Les développeurs backend portent la logique serveur, les bases, les API, l’authentification et les intégrations. Ce que couvre le poste et quand recruter.",
      es: "Los desarrolladores backend responden de la lógica de servidor, bases de datos, APIs, autenticación e integraciones. Qué cubre el rol y cuándo contratar.",
      it: "Gli sviluppatori backend rispondono di logica server, database, API, autenticazione e integrazioni. Cosa copre il ruolo e quando assumere.",
      tr: "Backend geliştiriciler sunucu mantığı, veritabanları, API’ler, kimlik doğrulama ve entegrasyonlardan sorumludur. Rol neyi kapsar ve ne zaman işe alınır."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Backend",
        "IT Roles",
        "APIs",
        "Hiring"
      ],
      ua: [
        "Кар'єра",
        "Backend",
        "ІТ-ролі",
        "API",
        "Найм"
      ],
      de: [
        "Karriere",
        "Backend",
        "IT-Rollen",
        "APIs",
        "Recruiting"
      ],
      fr: [
        "Carrière",
        "Backend",
        "Métiers IT",
        "API",
        "Recrutement"
      ],
      es: [
        "Carrera",
        "Backend",
        "Roles IT",
        "APIs",
        "Contratación"
      ],
      it: [
        "Carriera",
        "Backend",
        "Ruoli IT",
        "API",
        "Selezione"
      ],
      tr: [
        "Kariyer",
        "Backend",
        "IT rolleri",
        "API",
        "İşe alım"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A backend developer builds the invisible machinery of a product: business rules, databases, APIs, authentication, queues, and third-party integrations. If the frontend is the storefront, the backend is the warehouse, accounting, and security system behind it.",
            ua: "Backend-розробник збирає невидиму машинерію продукту: бізнес-правила, бази, API, автентифікацію, черги й інтеграції. Якщо frontend — вітрина, backend — склад, бухгалтерія й охорона за нею.",
            de: "Ein Backend-Entwickler baut die unsichtbare Maschinerie: Geschäftsregeln, Datenbanken, APIs, Authentifizierung, Warteschlangen und Integrationen. Ist das Frontend das Schaufenster, ist das Backend Lager, Buchhaltung und Wachdienst dahinter.",
      fr: "Un développeur backend construit la machinerie invisible : règles métier, bases, API, authentification, files d’attente et intégrations. Si le frontend est la vitrine, le backend est l’entrepôt, la compta et la sécurité derrière.",
      es: "Un desarrollador backend construye la maquinaria invisible: reglas de negocio, bases, APIs, autenticación, colas e integraciones. Si el frontend es el escaparate, el backend es el almacén, la contabilidad y la seguridad de detrás.",
      it: "Uno sviluppatore backend costruisce il macchinario invisibile: regole di business, database, API, autenticazione, code e integrazioni. Se il frontend è la vetrina, il backend è magazzino, contabilità e sicurezza dietro.",
      tr: "Bir backend geliştirici ürünün görünmeyen makinesini kurar: iş kuralları, veritabanları, API’ler, kimlik doğrulama, kuyruklar ve entegrasyonlar. Frontend vitrinse, backend arkasındaki depo, muhasebe ve güvenliktir."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Design and implement APIs (REST, GraphQL, RPC) and service contracts.",
            ua: "Проєктувати й реалізовувати API (REST, GraphQL, RPC) та контракти між сервісами.",
            de: "APIs (REST, GraphQL, RPC) und Serviceverträge entwerfen und umsetzen.",
      fr: "Concevoir et implémenter des API (REST, GraphQL, RPC) et des contrats de services.",
      es: "Diseñar e implementar APIs (REST, GraphQL, RPC) y contratos entre servicios.",
      it: "Progettare e implementare API (REST, GraphQL, RPC) e contratti tra servizi.",
      tr: "API’leri (REST, GraphQL, RPC) ve servis sözleşmelerini tasarlayıp uygulamak."
          },
          {
            en: "Model data, write queries, migrations, and enforce data integrity.",
            ua: "Моделювати дані, писати запити й міграції, тримати цілісність.",
            de: "Daten modellieren, Abfragen und Migrationen schreiben, Integrität durchsetzen.",
      fr: "Modéliser les données, écrire requêtes et migrations, faire respecter l’intégrité.",
      es: "Modelar datos, escribir consultas y migraciones, hacer valer la integridad.",
      it: "Modellare i dati, scrivere query e migration, far rispettare l’integrità.",
      tr: "Veriyi modellemek, sorgu ve migration yazmak, bütünlüğü korumak."
          },
          {
            en: "Implement auth, permissions, rate limits, and security basics.",
            ua: "Реалізувати автентифікацію, права, ліміти запитів і базову безпеку.",
            de: "Authentifizierung, Rechte, Rate Limits und Sicherheitsgrundlagen umsetzen.",
      fr: "Mettre en place authentification, droits, limites de débit et bases de sécurité.",
      es: "Implementar autenticación, permisos, límites de ritmo y lo básico de seguridad.",
      it: "Implementare autenticazione, permessi, rate limit e le basi di security.",
      tr: "Kimlik doğrulama, yetkiler, istek sınırları ve temel güvenliği uygulamak."
          },
          {
            en: "Integrate payments, email, CRM, webhooks, and external services.",
            ua: "Підключити платежі, пошту, CRM, вебхуки й зовнішні сервіси.",
            de: "Zahlungen, E-Mail, CRM, Webhooks und externe Dienste anbinden.",
      fr: "Brancher paiements, e-mail, CRM, webhooks et services externes.",
      es: "Integrar pagos, correo, CRM, webhooks y servicios externos.",
      it: "Integrare pagamenti, e-mail, CRM, webhook e servizi esterni.",
      tr: "Ödeme, e-posta, CRM, webhook ve dış servisleri bağlamak."
          },
          {
            en: "Monitor errors, logs, performance, and background jobs.",
            ua: "Стежити за помилками, логами, швидкістю й фоновими задачами.",
            de: "Fehler, Logs, Leistung und Hintergrundjobs im Blick behalten.",
      fr: "Surveiller erreurs, journaux, performances et tâches de fond.",
      es: "Vigilar errores, registros, rendimiento y trabajos en segundo plano.",
      it: "Monitorare errori, log, prestazioni e job in background.",
      tr: "Hataları, log’ları, performansı ve arka plan işlerini izlemek."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Node.js, Python, Go, Java, .NET, or similar server languages",
            ua: "Node.js, Python, Go, Java, .NET або подібні серверні мови",
            de: "Node.js, Python, Go, Java, .NET oder ähnliche Serversprachen",
      fr: "Node.js, Python, Go, Java, .NET ou des langages serveur similaires",
      es: "Node.js, Python, Go, Java, .NET u otros lenguajes de servidor similares",
      it: "Node.js, Python, Go, Java, .NET o linguaggi server simili",
      tr: "Node.js, Python, Go, Java, .NET veya benzeri sunucu dilleri"
          },
          {
            en: "SQL/NoSQL databases, caching (Redis), message queues",
            ua: "Бази SQL/NoSQL, кеш (Redis), черги повідомлень",
            de: "SQL/NoSQL-Datenbanken, Caching (Redis), Message Queues",
      fr: "Bases SQL/NoSQL, cache (Redis), files de messages",
      es: "Bases SQL/NoSQL, caché (Redis), colas de mensajes",
      it: "Database SQL/NoSQL, cache (Redis), code di messaggi",
      tr: "SQL/NoSQL veritabanları, önbellek (Redis), mesaj kuyrukları"
          },
          {
            en: "API design, auth (JWT/OAuth), testing, observability",
            ua: "Дизайн API, автентифікація (JWT/OAuth), тести, спостережуваність",
            de: "API-Design, Auth (JWT/OAuth), Tests, Observability",
      fr: "Conception d’API, auth (JWT/OAuth), tests, observabilité",
      es: "Diseño de APIs, autenticación (JWT/OAuth), tests, observabilidad",
      it: "Design delle API, autenticazione (JWT/OAuth), test, observability",
      tr: "API tasarımı, kimlik doğrulama (JWT/OAuth), test, gözlemlenebilirlik"
          },
          {
            en: "Cloud deployment basics and secure coding practices",
            ua: "Базова викладка в хмару та безпечні практики коду",
            de: "Grundlagen des Cloud-Deployments und sichere Programmierpraxis",
      fr: "Bases du déploiement cloud et pratiques de code sûr",
      es: "Lo básico del despliegue en cloud y prácticas de código seguro",
      it: "Basi di rilascio in cloud e pratiche di codice sicuro",
      tr: "Buluta yayınlamanın temelleri ve güvenli kod pratikleri"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "Hire backend when you have complex business logic, multiple clients (web/mobile), sensitive data, or heavy integrations that cannot live safely in the browser.",
            ua: "Бекенд потрібен, коли є складна бізнес-логіка, кілька клієнтів (веб/мобільний), чутливі дані або важкі інтеграції, які небезпечно тримати в браузері.",
            de: "Stellen Sie Backend ein, wenn komplexe Geschäftslogik, mehrere Clients (Web/Mobile), sensible Daten oder schwere Integrationen im Browser nicht sicher leben können.",
      fr: "Recrutez du backend dès qu’il y a une logique métier complexe, plusieurs clients (web/mobile), des données sensibles ou des intégrations trop lourdes pour vivre dans le navigateur.",
      es: "Contrate backend cuando hay lógica de negocio compleja, varios clientes (web/móvil), datos sensibles o integraciones que no pueden vivir con seguridad en el navegador.",
      it: "Assumete backend quando avete logica di business complessa, più client (web/mobile), dati sensibili o integrazioni troppo pesanti per vivere nel browser.",
      tr: "Karmaşık iş mantığı, birden fazla istemci (web/mobil), hassas veri veya tarayıcıda duramayacak ağır entegrasyonlar varsa backend işe alın."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "A weak backend shows up as “random bugs,” slow lists, broken payments, and security incidents - even if the UI looks modern.",
            ua: "Слабкий бекенд проявляється «рандомними багами», повільними списками, зламаними платежами й інцидентами безпеки — навіть якщо інтерфейс виглядає сучасно.",
            de: "Ein schwaches Backend zeigt sich als „zufällige Bugs“, langsame Listen, kaputte Zahlungen und Sicherheitsvorfälle — selbst wenn die Oberfläche modern wirkt.",
      fr: "Un backend faible se voit en « bugs au hasard », listes lentes, paiements cassés et incidents de sécurité — même si l’interface a l’air moderne.",
      es: "Un backend flojo se nota en «bugs aleatorios», listas lentas, pagos rotos e incidentes de seguridad — aunque la interfaz se vea moderna.",
      it: "Un backend debole si vede in «bug a caso», liste lente, pagamenti rotti e incident di security — anche se l’interfaccia sembra moderna.",
      tr: "Zayıf bir backend «rastgele bug», yavaş listeler, kırık ödemeler ve güvenlik olayları olarak görünür — arayüz modern dursa bile."
          }
        ]
      }
    ]
  },
  {
    slug: "fullstack-developer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Full-Stack Developer Do? End-to-End Ownership Explained",
      ua: "Чим займається full-stack-розробник: відповідальність від екрана до бази",
      de: "Was macht ein Full-Stack-Entwickler? Verantwortung von der Oberfläche bis zur Datenbank",
      fr: "Que fait un développeur full-stack ? Porter une fonctionnalité de bout en bout",
      es: "¿Qué hace un desarrollador full-stack? Llevar la funcionalidad de punta a punta",
      it: "Cosa fa uno sviluppatore full-stack? Portare la funzionalità da un capo all’altro",
      tr: "Full-stack geliştirici ne yapar? Özelliği uçtan uca götürmek"
    },
    excerpt: {
      en: "Full-stack developers own features from UI to database. Learn the real scope of the role, strengths, limits, and when it beats a split team.",
      ua: "Full-stack веде функцію від інтерфейсу до бази. Реальний обсяг ролі, сильні сторони, межі і коли одна людина швидша за розколоту команду.",
      de: "Full-Stack trägt Funktionen von der Oberfläche bis zur Datenbank. Echter Umfang, Stärken, Grenzen und wann eine Person schneller ist als ein zersplittertes Team.",
      fr: "Le full-stack porte une fonctionnalité de l’interface à la base. Périmètre réel, forces, limites, et quand une personne va plus vite qu’une équipe éclatée.",
      es: "El full-stack lleva la funcionalidad de la interfaz a la base. Alcance real, fortalezas, límites y cuándo una persona va más rápido que un equipo partido.",
      it: "Il full-stack porta la funzionalità dall’interfaccia al database. Perimetro reale, punti di forza, limiti e quando una persona è più veloce di un team spezzato.",
      tr: "Full-stack, özelliği arayüzden veritabanına götürür. Rolün gerçek kapsamı, güçlü yanlar, sınırlar ve bir kişinin bölünmüş ekipten ne zaman hızlı olduğu."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Full-Stack",
        "IT Roles",
        "Web Development",
        "Hiring"
      ],
      ua: [
        "Кар'єра",
        "Full-stack",
        "ІТ-ролі",
        "Веброзробка",
        "Найм"
      ],
      de: [
        "Karriere",
        "Full-Stack",
        "IT-Rollen",
        "Webentwicklung",
        "Recruiting"
      ],
      fr: [
        "Carrière",
        "Full-stack",
        "Métiers IT",
        "Développement web",
        "Recrutement"
      ],
      es: [
        "Carrera",
        "Full-stack",
        "Roles IT",
        "Desarrollo web",
        "Contratación"
      ],
      it: [
        "Carriera",
        "Full-stack",
        "Ruoli IT",
        "Sviluppo web",
        "Selezione"
      ],
      tr: [
        "Kariyer",
        "Full-stack",
        "IT rolleri",
        "Web geliştirme",
        "İşe alım"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A full-stack developer delivers vertical slices of a product: interface, API, data model, and often deployment. The value is end-to-end ownership - fewer handoffs, faster MVPs, and one person who understands how a change ripples through the system.",
            ua: "Full-stack закриває функцію наскрізь: інтерфейс, API, модель даних і часто викладку. Цінність — одна відповідальність на весь шлях: менше передач, швидші MVP і людина, яка розуміє, як зміна розходиться системою.",
            de: "Ein Full-Stack-Entwickler liefert eine Funktion durchgängig: Oberfläche, API, Datenmodell, oft auch das Deployment. Der Wert ist durchgängige Verantwortung: weniger Übergaben, schnellere MVPs und eine Person, die versteht, wie eine Änderung durchs System läuft.",
      fr: "Un full-stack livre une fonctionnalité de bout en bout : interface, API, modèle de données, souvent le déploiement. La valeur, c’est une responsabilité complète : moins de passations, des MVP plus vite, et quelqu’un qui voit comment un changement se propage.",
      es: "Un full-stack entrega la funcionalidad de punta a punta: interfaz, API, modelo de datos y a menudo el despliegue. El valor es una responsabilidad completa: menos traspasos, MVP más rápidos y alguien que entiende cómo un cambio recorre el sistema.",
      it: "Un full-stack consegna la funzionalità da un capo all’altro: interfaccia, API, modello dati e spesso il rilascio. Il valore è una responsabilità completa: meno passaggi, MVP più veloci e qualcuno che capisce come un cambiamento si propaga.",
      tr: "Bir full-stack özelliği uçtan uca götürür: arayüz, API, veri modeli ve çoğu zaman yayın. Değer, uçtan uca sorumluluktur: daha az el değiştirme, daha hızlı MVP ve değişikliğin sistemde nasıl yayıldığını anlayan bir kişi."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Ship features across frontend and backend in one delivery stream.",
            ua: "Випускати функції фронтом і бекендом в одному потоці.",
            de: "Funktionen über Frontend und Backend in einem Lieferstrom ausliefern.",
      fr: "Livrer des fonctionnalités frontend et backend dans un même flux.",
      es: "Entregar funcionalidades de frontend y backend en un mismo flujo.",
      it: "Rilasciare funzionalità frontend e backend in un unico flusso.",
      tr: "Özellikleri frontend ve backend’de tek akışta çıkarmak."
          },
          {
            en: "Design practical data models and UI flows together, not in isolation.",
            ua: "Проєктувати модель даних і сценарії інтерфейсу разом, а не окремо.",
            de: "Datenmodell und UI-Abläufe gemeinsam entwerfen, nicht isoliert.",
      fr: "Concevoir ensemble modèle de données et parcours d’interface, pas chacun de son côté.",
      es: "Diseñar juntos el modelo de datos y los flujos de interfaz, no por separado.",
      it: "Progettare insieme modello dati e flussi di interfaccia, non in isolamento.",
      tr: "Veri modelini ve arayüz akışlarını ayrı ayrı değil, birlikte tasarlamak."
          },
          {
            en: "Set up auth, forms, CRUD, dashboards, and integrations end-to-end.",
            ua: "Зібрати автентифікацію, форми, CRUD, кабінети й інтеграції від краю до краю.",
            de: "Auth, Formulare, CRUD, Dashboards und Integrationen durchgängig aufsetzen.",
      fr: "Mettre en place auth, formulaires, CRUD, tableaux de bord et intégrations de bout en bout.",
      es: "Montar autenticación, formularios, CRUD, paneles e integraciones de punta a punta.",
      it: "Montare autenticazione, form, CRUD, dashboard e integrazioni da un capo all’altro.",
      tr: "Kimlik doğrulama, formlar, CRUD, panolar ve entegrasyonları uçtan uca kurmak."
          },
          {
            en: "Balance speed vs quality for MVP, then harden what matters.",
            ua: "Балансувати швидкість і якість на MVP, потім укріпити те, що критично.",
            de: "Tempo und Qualität am MVP ausbalancieren, dann härten, was zählt.",
      fr: "Arbitrer vitesse et qualité pour le MVP, puis durcir ce qui compte.",
      es: "Equilibrar velocidad y calidad en el MVP y luego endurecer lo que importa.",
      it: "Bilanciare velocità e qualità sull’MVP, poi irrobustire ciò che conta.",
      tr: "MVP’de hız ve kaliteyi dengelemek, sonra kritik olanı sıkılaştırmak."
          },
          {
            en: "Communicate scope, risks, and trade-offs directly with stakeholders.",
            ua: "Прямо зі стейкхолдерами говорити про обсяг, ризики й компроміси.",
            de: "Umfang, Risiken und Kompromisse direkt mit Stakeholdern klären.",
      fr: "Parler périmètre, risques et arbitrages directement avec les parties prenantes.",
      es: "Hablar alcance, riesgos y compromisos directamente con quienes deciden.",
      it: "Parlare perimetro, rischi e compromessi direttamente con gli stakeholder.",
      tr: "Kapsam, riskler ve ödünleri paydaşlarla doğrudan konuşmak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Strong frontend + solid backend (often TypeScript/Node or similar)",
            ua: "Сильний фронт + міцний бекенд (часто TypeScript/Node або подібне)",
            de: "Starkes Frontend + solides Backend (oft TypeScript/Node oder ähnlich)",
      fr: "Frontend solide + backend solide (souvent TypeScript/Node ou équivalent)",
      es: "Frontend fuerte + backend sólido (a menudo TypeScript/Node o similar)",
      it: "Frontend solido + backend solido (spesso TypeScript/Node o simile)",
      tr: "Güçlü frontend + sağlam backend (çoğu zaman TypeScript/Node veya benzeri)"
          },
          {
            en: "Databases, API design, auth, basic DevOps/deploy",
            ua: "Бази даних, дизайн API, автентифікація, базова викладка / DevOps",
            de: "Datenbanken, API-Design, Auth, grundlegendes Deployment/DevOps",
      fr: "Bases de données, conception d’API, auth, bases de déploiement/DevOps",
      es: "Bases de datos, diseño de APIs, autenticación, lo básico de despliegue/DevOps",
      it: "Database, design delle API, autenticazione, basi di rilascio/DevOps",
      tr: "Veritabanları, API tasarımı, kimlik doğrulama, temel yayın/DevOps"
          },
          {
            en: "Product thinking: MVP scope, UX constraints, estimation",
            ua: "Продуктове мислення: обсяг MVP, обмеження UX, оцінка",
            de: "Produktdenken: MVP-Umfang, UX-Grenzen, Schätzung",
      fr: "Esprit produit : périmètre MVP, contraintes d’UX, chiffrage",
      es: "Pensamiento de producto: alcance del MVP, límites de UX, estimación",
      it: "Pensiero di prodotto: perimetro MVP, vincoli di UX, stime",
      tr: "Ürün düşüncesi: MVP kapsamı, UX kısıtları, tahmin"
          },
          {
            en: "Debugging across the full request path (browser → server → DB)",
            ua: "Дебаг на всьому шляху запиту (браузер → сервер → база)",
            de: "Debuggen über den ganzen Request-Pfad (Browser → Server → DB)",
      fr: "Déboguer sur tout le chemin d’une requête (navigateur → serveur → base)",
      es: "Depurar en todo el camino de la petición (navegador → servidor → base)",
      it: "Debug sull’intero percorso della richiesta (browser → server → DB)",
      tr: "İsteğin tam yolunda hata ayıklama (tarayıcı → sunucu → veritabanı)"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "Best for startups, SMB products, CRMs, internal tools, and agencies/freelancers where one senior engineer can move faster than a fragmented squad - until scale demands deeper specialists.",
            ua: "Найкраще для стартапів, продуктів малого бізнесу, CRM, внутрішніх інструментів, агенцій і фрилансу: один сильний інженер часто швидший за розколотий загін — доки масштаб не вимагає глибших спеціалістів.",
            de: "Am besten für Start-ups, KMU-Produkte, CRMs, interne Tools, Agenturen und Freelancer: eine starke Senior-Person ist oft schneller als ein zersplittertes Squad — bis die Skala tiefere Spezialist:innen braucht.",
      fr: "Idéal pour startups, produits PME, CRM, outils internes, agences et freelance : une personne senior avance souvent plus vite qu’une squad éclatée — jusqu’à ce que l’échelle exige des spécialistes plus profonds.",
      es: "Encaja en startups, productos pyme, CRM, herramientas internas, agencias y freelance: una persona senior suele ir más rápido que un escuadrón fragmentado — hasta que la escala pide especialistas más profundos.",
      it: "Ideale per startup, prodotti PMI, CRM, tool interni, agenzie e freelance: una persona senior spesso va più veloce di una squadra spezzata — finché la scala non chiede specialisti più profondi.",
      tr: "Girişimler, KOBİ ürünleri, CRM, iç araçlar, ajanslar ve freelance için en iyisi: güçlü bir senior, bölünmüş ekipten çoğu zaman daha hızlıdır — ölçek daha derin uzman isteyene kadar."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Full-stack is not “knows a bit of everything.” Senior full-stack means owning outcomes: a working product in production, not two half-finished layers.",
            ua: "Full-stack — це не «трохи вміє все». Сеньйорний full-stack означає відповідати за результат: робочий продукт у продакшені, а не два напівзроблені шари.",
            de: "Full-Stack heißt nicht „von allem ein bisschen“. Senior Full-Stack heißt, Ergebnisse zu tragen: ein laufendes Produkt im Produktivbetrieb, nicht zwei halbfertige Schichten.",
      fr: "Full-stack, ce n’est pas « un peu de tout ». Un full-stack senior porte le résultat : un produit qui tourne en production, pas deux couches à moitié finies.",
      es: "Full-stack no es «un poco de todo». Un full-stack senior responde del resultado: un producto que funciona en producción, no dos capas a medio hacer.",
      it: "Full-stack non è «un po’ di tutto». Un full-stack senior risponde del risultato: un prodotto che gira in produzione, non due strati a metà.",
      tr: "Full-stack «her şeyden biraz» değildir. Kıdemli full-stack, sonucu sahiplenmektir: canlıda çalışan bir ürün — yarım kalmış iki katman değil."
          }
        ]
      }
    ]
  },
  {
    slug: "mobile-developer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Mobile Developer Do? iOS, Android, and Cross-Platform Roles",
      ua: "Чим займається mobile-розробник: iOS, Android і кросплатформа",
      de: "Was macht ein Mobile-Entwickler? iOS, Android und plattformübergreifende Rollen",
      fr: "Que fait un développeur mobile ? iOS, Android et le multiplateforme",
      es: "¿Qué hace un desarrollador mobile? iOS, Android y multiplataforma",
      it: "Cosa fa uno sviluppatore mobile? iOS, Android e multipiattaforma",
      tr: "Mobil geliştirici ne yapar? iOS, Android ve çapraz platform"
    },
    excerpt: {
      en: "Mobile developers build native or cross-platform apps. Responsibilities, skill sets, and when a mobile specialist is the right hire.",
      ua: "Mobile-розробники збирають нативні чи кросплатформені застосунки. Обов’язки, стек і коли спеціаліст із мобайлу — правильний найм.",
      de: "Mobile-Entwickler bauen native oder plattformübergreifende Apps. Aufgaben, Skillset und wann eine Mobile-Spezialistin die richtige Einstellung ist.",
      fr: "Les développeurs mobile construisent des apps natives ou multiplateformes. Missions, compétences, et quand ce profil est le bon recrutement.",
      es: "Los desarrolladores mobile construyen apps nativas o multiplataforma. Funciones, competencias y cuándo este perfil es la contratación correcta.",
      it: "Gli sviluppatori mobile costruiscono app native o multipiattaforma. Mansioni, competenze e quando questo profilo è l’assunzione giusta.",
      tr: "Mobil geliştiriciler yereli veya çapraz platform uygulamaları kurar. Görevler, yetkinlikler ve mobil uzmanın ne zaman doğru işe alım olduğu."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Mobile",
        "IT Roles",
        "iOS",
        "Android"
      ],
      ua: [
        "Кар'єра",
        "Mobile",
        "ІТ-ролі",
        "iOS",
        "Android"
      ],
      de: [
        "Karriere",
        "Mobile",
        "IT-Rollen",
        "iOS",
        "Android"
      ],
      fr: [
        "Carrière",
        "Mobile",
        "Métiers IT",
        "iOS",
        "Android"
      ],
      es: [
        "Carrera",
        "Mobile",
        "Roles IT",
        "iOS",
        "Android"
      ],
      it: [
        "Carriera",
        "Mobile",
        "Ruoli IT",
        "iOS",
        "Android"
      ],
      tr: [
        "Kariyer",
        "Mobil",
        "IT rolleri",
        "iOS",
        "Android"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A mobile developer builds applications for phones and tablets - native (Swift/Kotlin) or cross-platform (React Native, Flutter). They own app architecture, offline behavior, store releases, push notifications, and device-specific UX.",
            ua: "Mobile-розробник збирає застосунки для телефонів і планшетів — нативно (Swift/Kotlin) або кросплатформою (React Native, Flutter). У зоні відповідальності: архітектура, офлайн, релізи в сторах, пуші й UX під пристрій.",
            de: "Ein Mobile-Entwickler baut Apps für Handy und Tablet — nativ (Swift/Kotlin) oder plattformübergreifend (React Native, Flutter). Dazu gehören Architektur, Offline-Verhalten, Store-Releases, Push und gerätespezifische UX.",
      fr: "Un développeur mobile construit des apps pour téléphone et tablette — natives (Swift/Kotlin) ou multiplateformes (React Native, Flutter). Il porte l’architecture, le hors-ligne, les mises en store, les push et l’UX propre à l’appareil.",
      es: "Un desarrollador mobile construye apps para teléfono y tableta — nativas (Swift/Kotlin) o multiplataforma (React Native, Flutter). Responde de arquitectura, modo sin conexión, publicaciones en tiendas, push y UX del dispositivo.",
      it: "Uno sviluppatore mobile costruisce app per telefono e tablet — native (Swift/Kotlin) o multipiattaforma (React Native, Flutter). Risponde di architettura, offline, rilasci negli store, push e UX del dispositivo.",
      tr: "Bir mobil geliştirici telefon ve tablet uygulamaları kurar — yereli (Swift/Kotlin) veya çapraz platform (React Native, Flutter). Mimari, çevrimdışı davranış, mağaza yayınları, push ve cihaza özgü UX onundur."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Implement screens, navigation, and platform-native interactions.",
            ua: "Зібрати екрани, навігацію та нативні жести платформи.",
            de: "Screens, Navigation und plattformtypische Interaktionen umsetzen.",
      fr: "Implémenter écrans, navigation et interactions natives de la plateforme.",
      es: "Implementar pantallas, navegación e interacciones nativas de la plataforma.",
      it: "Implementare schermate, navigazione e interazioni native della piattaforma.",
      tr: "Ekranları, gezinmeyi ve platforma özgü etkileşimleri kurmak."
          },
          {
            en: "Handle offline storage, sync, permissions, and battery-conscious performance.",
            ua: "Тримати офлайн-сховище, синк, дозволи й енергоощадну швидкість.",
            de: "Offline-Speicher, Sync, Berechtigungen und akkubewusste Performance im Griff behalten.",
      fr: "Gérer stockage hors-ligne, synchro, permissions et perf économe en batterie.",
      es: "Cubrir almacén sin conexión, sincronización, permisos y rendimiento que cuide la batería.",
      it: "Gestire storage offline, sync, permessi e prestazioni attente alla batteria.",
      tr: "Çevrimdışı depolama, senkron, izinler ve pili gözeten performansı yönetmek."
          },
          {
            en: "Integrate APIs, payments, maps, camera, and push notifications.",
            ua: "Підключити API, платежі, карти, камеру й пуш-сповіщення.",
            de: "APIs, Zahlungen, Karten, Kamera und Push-Benachrichtigungen anbinden.",
      fr: "Brancher API, paiements, cartes, caméra et notifications push.",
      es: "Integrar APIs, pagos, mapas, cámara y notificaciones push.",
      it: "Integrare API, pagamenti, mappe, fotocamera e notifiche push.",
      tr: "API, ödeme, harita, kamera ve push bildirimlerini bağlamak."
          },
          {
            en: "Prepare App Store / Google Play releases, reviews, and crash monitoring.",
            ua: "Готувати релізи в App Store / Google Play, рев’ю сторів і моніторинг крешів.",
            de: "Releases für App Store / Google Play vorbereiten, Reviews und Crash-Monitoring.",
      fr: "Préparer les mises en App Store / Google Play, les revues et le suivi des crashs.",
      es: "Preparar publicaciones en App Store / Google Play, revisiones y seguimiento de cuelgues.",
      it: "Preparare i rilasci su App Store / Google Play, le review e il monitoraggio dei crash.",
      tr: "App Store / Google Play yayınlarını, incelemeleri ve çökme izlemeyi hazırlamak."
          },
          {
            en: "Collaborate with designers on mobile-first UX constraints.",
            ua: "Разом із дизайном працювати в межах mobile-first UX.",
            de: "Mit Design an den UX-Grenzen von Mobile-first arbeiten.",
      fr: "Travailler avec le design dans les contraintes d’une UX mobile-first.",
      es: "Trabajar con diseño dentro de los límites de una UX mobile-first.",
      it: "Lavorare col design dentro i vincoli di una UX mobile-first.",
      tr: "Tasarımla birlikte mobile-first UX kısıtlarında çalışmak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Swift/SwiftUI or Kotlin/Jetpack - or Flutter/React Native",
            ua: "Swift/SwiftUI або Kotlin/Jetpack — або Flutter/React Native",
            de: "Swift/SwiftUI oder Kotlin/Jetpack — oder Flutter/React Native",
      fr: "Swift/SwiftUI ou Kotlin/Jetpack — ou Flutter/React Native",
      es: "Swift/SwiftUI o Kotlin/Jetpack — o Flutter/React Native",
      it: "Swift/SwiftUI o Kotlin/Jetpack — oppure Flutter/React Native",
      tr: "Swift/SwiftUI veya Kotlin/Jetpack — ya da Flutter/React Native"
          },
          {
            en: "Mobile architecture (MVVM, clean), state, networking",
            ua: "Мобільна архітектура (MVVM, clean), стан, мережа",
            de: "Mobile Architektur (MVVM, Clean), State, Networking",
      fr: "Architecture mobile (MVVM, clean), état, réseau",
      es: "Arquitectura mobile (MVVM, clean), estado, red",
      it: "Architettura mobile (MVVM, clean), stato, networking",
      tr: "Mobil mimari (MVVM, clean), durum, ağ"
          },
          {
            en: "CI for mobile builds, crash analytics, store policies",
            ua: "CI для мобільних збірок, аналітика крешів, правила сторів",
            de: "CI für Mobile-Builds, Crash-Analytics, Store-Regeln",
      fr: "CI pour les builds mobile, analytics de crash, règles des stores",
      es: "CI para builds mobile, analítica de cuelgues, políticas de las tiendas",
      it: "CI per le build mobile, analytics dei crash, regole degli store",
      tr: "Mobil derlemeler için CI, çökme analitiği, mağaza kuralları"
          },
          {
            en: "Understanding of web/backend contracts for API collaboration",
            ua: "Розуміння контрактів вебу/бекенду, щоб нормально працювати з API",
            de: "Verständnis der Web-/Backend-Verträge für die API-Zusammenarbeit",
      fr: "Comprendre les contrats web/backend pour collaborer sur les API",
      es: "Entender los contratos web/backend para colaborar en las APIs",
      it: "Capire i contratti web/backend per collaborare sulle API",
      tr: "API işbirliği için web/backend sözleşmelerini anlamak"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When your users primarily live in an app, need device features (camera, GPS, offline), or when a responsive website is not enough for retention and notifications.",
            ua: "Коли люди переважно живуть у застосунку, потрібні можливості пристрою (камера, GPS, офлайн) або адаптивний сайт уже не тримає утримання й сповіщення.",
            de: "Wenn Ihre Nutzer vor allem in einer App leben, Gerätefunktionen brauchen (Kamera, GPS, Offline) oder eine responsive Website für Bindung und Notifications nicht reicht.",
      fr: "Quand les gens vivent surtout dans une app, ont besoin du matériel (caméra, GPS, hors-ligne) ou qu’un site responsive ne suffit plus pour la rétention et les notifications.",
      es: "Cuando la gente vive sobre todo en una app, necesita el dispositivo (cámara, GPS, sin conexión) o un sitio adaptable ya no basta para retención y notificaciones.",
      it: "Quando le persone vivono soprattutto in un’app, servono le capacità del device (fotocamera, GPS, offline) o un sito responsive non basta più per retention e notifiche.",
      tr: "Kullanıcılar asıl uygulamada yaşıyorsa, cihaz özellikleri (kamera, GPS, çevrimdışı) gerekiyorsa veya uyarlanabilir bir site tutundurma ve bildirimler için yetmiyorsa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Many businesses start with a strong web app, then add mobile once usage and retention justify store overhead.",
            ua: "Багато бізнесів починають із сильного вебу, а мобайла додають тоді, коли користування й утримання виправдовують мороку сторів.",
            de: "Viele Unternehmen starten mit einer starken Web-App und ergänzen Mobile erst, wenn Nutzung und Bindung den Store-Aufwand rechtfertigen.",
      fr: "Beaucoup d’entreprises commencent par une web app solide, puis ajoutent le mobile quand l’usage et la rétention justifient la charge des stores.",
      es: "Muchos negocios empiezan con una web app sólida y añaden móvil cuando el uso y la retención justifican la carga de las tiendas.",
      it: "Molte aziende partono da una web app solida e aggiungono il mobile quando uso e retention giustificano il peso degli store.",
      tr: "Birçok iş güçlü bir web uygulamasıyla başlar; kullanım ve tutundurma mağaza yükünü haklı kılınca mobil ekler."
          }
        ]
      }
    ]
  },
  {
    slug: "devops-engineer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a DevOps Engineer Do? CI/CD, Cloud, and Reliable Delivery",
      ua: "Чим займається DevOps-інженер: CI/CD, хмара й надійна поставка",
      de: "Was macht ein DevOps-Ingenieur? CI/CD, Cloud und verlässliche Auslieferung",
      fr: "Que fait un ingénieur DevOps ? CI/CD, cloud et livraison fiable",
      es: "¿Qué hace un ingeniero DevOps? CI/CD, cloud y entrega fiable",
      it: "Cosa fa un ingegnere DevOps? CI/CD, cloud e consegna affidabile",
      tr: "DevOps mühendisi ne yapar? CI/CD, bulut ve güvenilir teslim"
    },
    excerpt: {
      en: "DevOps engineers make shipping safe and repeatable: pipelines, infrastructure, monitoring, and automation. When your team needs one.",
      ua: "DevOps робить випуск безпечним і повторюваним: пайплайни, інфраструктура, моніторинг, автоматизація. Коли команді це потрібно.",
      de: "DevOps macht Auslieferung sicher und wiederholbar: Pipelines, Infrastruktur, Monitoring, Automatisierung. Wann Ihr Team das braucht.",
      fr: "Le DevOps rend la livraison sûre et répétable : pipelines, infra, supervision, automatisation. Quand votre équipe en a besoin.",
      es: "DevOps hace la entrega segura y repetible: pipelines, infra, monitorización, automatización. Cuándo lo necesita su equipo.",
      it: "Il DevOps rende il rilascio sicuro e ripetibile: pipeline, infra, monitoraggio, automazione. Quando serve al vostro team.",
      tr: "DevOps teslimi güvenli ve tekrarlanabilir kılar: hatlar, altyapı, izleme, otomasyon. Ekibinizin buna ne zaman ihtiyacı var."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "DevOps",
        "IT Roles",
        "CI/CD",
        "Cloud"
      ],
      ua: [
        "Кар'єра",
        "DevOps",
        "ІТ-ролі",
        "CI/CD",
        "Хмара"
      ],
      de: [
        "Karriere",
        "DevOps",
        "IT-Rollen",
        "CI/CD",
        "Cloud"
      ],
      fr: [
        "Carrière",
        "DevOps",
        "Métiers IT",
        "CI/CD",
        "Cloud"
      ],
      es: [
        "Carrera",
        "DevOps",
        "Roles IT",
        "CI/CD",
        "Cloud"
      ],
      it: [
        "Carriera",
        "DevOps",
        "Ruoli IT",
        "CI/CD",
        "Cloud"
      ],
      tr: [
        "Kariyer",
        "DevOps",
        "IT rolleri",
        "CI/CD",
        "Bulut"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A DevOps engineer improves how software is built, tested, deployed, and operated. They automate infrastructure and delivery so developers ship often without fear - and production stays observable and recoverable.",
            ua: "DevOps-інженер покращує те, як ПЗ збирають, тестують, викладають і експлуатують. Автоматизує інфраструктуру й поставку, щоб розробники релизили часто і без страху — а продакшен лишався спостережуваним і відновлюваним.",
            de: "Ein DevOps-Ingenieur verbessert, wie Software gebaut, getestet, ausgeliefert und betrieben wird. Infrastruktur und Lieferung werden automatisiert, damit Entwickler oft und ohne Angst releasen — und der Produktivbetrieb beobachtbar und wiederherstellbar bleibt.",
      fr: "Un ingénieur DevOps améliore la façon dont on construit, teste, déploie et exploite le logiciel. Il automatise l’infra et la livraison pour que les devs publient souvent, sans peur — et que la production reste observable et récupérable.",
      es: "Un ingeniero DevOps mejora cómo se construye, prueba, despliega y opera el software. Automatiza infra y entrega para que desarrollo publique a menudo y sin miedo — y producción siga observable y recuperable.",
      it: "Un ingegnere DevOps migliora come si costruisce, testa, rilascia ed esercita il software. Automatizza infra e consegna così gli sviluppatori rilasciano spesso e senza paura — e la produzione resta osservabile e ripristinabile.",
      tr: "Bir DevOps mühendisi yazılımın nasıl derlendiğini, test edildiğini, yayınlandığını ve işletildiğini iyileştirir. Altyapı ve teslimi otomatikleştirir ki geliştiriciler sık ve korkusuz yayınlasın — canlı ortam da gözlemlenebilir ve kurtarılabilir kalsın."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Build CI/CD pipelines, environments, and release strategies.",
            ua: "Зібрати CI/CD, середовища й стратегії релізу.",
            de: "CI/CD-Pipelines, Umgebungen und Release-Strategien aufbauen.",
      fr: "Construire pipelines CI/CD, environnements et stratégies de release.",
      es: "Montar pipelines CI/CD, entornos y estrategias de publicación.",
      it: "Costruire pipeline CI/CD, ambienti e strategie di rilascio.",
      tr: "CI/CD hatlarını, ortamları ve yayın stratejilerini kurmak."
          },
          {
            en: "Manage cloud/VPS infrastructure as code (Terraform, Ansible, etc.).",
            ua: "Керувати хмарою чи VPS як кодом (Terraform, Ansible тощо).",
            de: "Cloud-/VPS-Infrastruktur als Code führen (Terraform, Ansible usw.).",
      fr: "Piloter l’infra cloud/VPS en tant que code (Terraform, Ansible, etc.).",
      es: "Gestionar la infra cloud/VPS como código (Terraform, Ansible, etc.).",
      it: "Gestire l’infra cloud/VPS come codice (Terraform, Ansible, ecc.).",
      tr: "Bulut/VPS altyapısını kod olarak yönetmek (Terraform, Ansible vb.)."
          },
          {
            en: "Set up containers, orchestration, networking, and secrets.",
            ua: "Налаштувати контейнери, оркестрацію, мережу й секрети.",
            de: "Container, Orchestrierung, Netz und Secrets aufsetzen.",
      fr: "Mettre en place conteneurs, orchestration, réseau et secrets.",
      es: "Montar contenedores, orquestación, red y secretos.",
      it: "Allestire container, orchestrazione, rete e segreti.",
      tr: "Konteyner, orkestrasyon, ağ ve sırları kurmak."
          },
          {
            en: "Implement logging, metrics, alerts, and incident response basics.",
            ua: "Завести логи, метрики, алерти й базову реакцію на інциденти.",
            de: "Logging, Metriken, Alerts und die Grundlagen der Incident-Reaktion umsetzen.",
      fr: "Mettre en place journaux, métriques, alertes et les bases de la réponse aux incidents.",
      es: "Implantar registros, métricas, alertas y lo básico de respuesta a incidentes.",
      it: "Mettere in piedi log, metriche, alert e le basi della risposta agli incident.",
      tr: "Log, metrik, uyarı ve olay müdahalesinin temelini kurmak."
          },
          {
            en: "Improve cost, security posture, and developer self-service.",
            ua: "Покращувати вартість, безпековий стан і самообслуговування розробників.",
            de: "Kosten, Sicherheitslage und Self-Service für Entwickler verbessern.",
      fr: "Améliorer le coût, la posture de sécurité et le self-service des développeurs.",
      es: "Mejorar coste, postura de seguridad y el autoservicio de desarrollo.",
      it: "Migliorare costo, postura di security e il self-service degli sviluppatori.",
      tr: "Maliyeti, güvenlik duruşunu ve geliştirici self-servisini iyileştirmek."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Linux, networking basics, Docker/Kubernetes",
            ua: "Linux, основи мереж, Docker/Kubernetes",
            de: "Linux, Netzgrundlagen, Docker/Kubernetes",
      fr: "Linux, bases réseau, Docker/Kubernetes",
      es: "Linux, bases de red, Docker/Kubernetes",
      it: "Linux, basi di rete, Docker/Kubernetes",
      tr: "Linux, ağ temelleri, Docker/Kubernetes"
          },
          {
            en: "CI tools (GitHub Actions, GitLab CI), IaC, cloud (AWS/GCP/Azure)",
            ua: "CI (GitHub Actions, GitLab CI), інфраструктура як код, хмара (AWS/GCP/Azure)",
            de: "CI (GitHub Actions, GitLab CI), IaC, Cloud (AWS/GCP/Azure)",
      fr: "Outils CI (GitHub Actions, GitLab CI), IaC, cloud (AWS/GCP/Azure)",
      es: "Herramientas CI (GitHub Actions, GitLab CI), IaC, cloud (AWS/GCP/Azure)",
      it: "Strumenti CI (GitHub Actions, GitLab CI), IaC, cloud (AWS/GCP/Azure)",
      tr: "CI araçları (GitHub Actions, GitLab CI), IaC, bulut (AWS/GCP/Azure)"
          },
          {
            en: "Observability stacks, scripting (Bash/Python)",
            ua: "Стеки спостережуваності, скрипти (Bash/Python)",
            de: "Observability-Stacks, Scripting (Bash/Python)",
      fr: "Stacks d’observabilité, scripts (Bash/Python)",
      es: "Stacks de observabilidad, scripting (Bash/Python)",
      it: "Stack di observability, scripting (Bash/Python)",
      tr: "Gözlemlenebilirlik yığınları, betik (Bash/Python)"
          },
          {
            en: "Security hygiene: secrets, IAM, least privilege",
            ua: "Гігієна безпеки: секрети, IAM, мінімальні права",
            de: "Sicherheitshygiene: Secrets, IAM, Least Privilege",
      fr: "Hygiène sécu : secrets, IAM, moindre privilège",
      es: "Higiene de seguridad: secretos, IAM, mínimo privilegio",
      it: "Igiene di security: segreti, IAM, minimo privilegio",
      tr: "Güvenlik hijyeni: sırlar, IAM, en az yetki"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When deploys are manual/risky, environments drift, outages take hours to diagnose, or the team spends more time fighting infra than building product.",
            ua: "Коли викладка ручна й ризикована, середовища роз’їжджаються, аварії діагностують годинами або команда більше б’ється з інфраструктурою, ніж будує продукт.",
            de: "Wenn Deployments manuell und riskant sind, Umgebungen divergieren, Ausfälle Stunden zur Diagnose brauchen oder das Team mehr mit Infra kämpft als Produkt baut.",
      fr: "Quand les déploiements sont manuels et risqués, les environnements dérivent, un incident se diagnostique en heures, ou l’équipe passe plus de temps à se battre avec l’infra qu’à construire le produit.",
      es: "Cuando los despliegues son manuales y arriesgados, los entornos se desvían, un corte tarda horas en diagnosticarse o el equipo pelea más con la infra que construye producto.",
      it: "Quando i rilasci sono manuali e rischiosi, gli ambienti divergono, un disservizio si diagnostica in ore o il team combatte l’infra più di quanto costruisca prodotto.",
      tr: "Yayınlar elle ve riskliyse, ortamlar sapıyorsa, kesintiler saatlerce teşhis ediliyorsa veya ekip üründen çok altyapıyla savaşıyorsa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "DevOps is not “the person who SSHs into servers.” Mature DevOps is a product: a reliable delivery platform for the whole team.",
            ua: "DevOps — це не «людина, яка ходить на сервери по SSH». Зрілий DevOps — це продукт: надійна платформа поставки для всієї команди.",
            de: "DevOps ist nicht „die Person, die sich per SSH auf Server schaltet“. Reifes DevOps ist ein Produkt: eine verlässliche Lieferplattform fürs ganze Team.",
      fr: "Le DevOps n’est pas « la personne qui SSH sur les serveurs ». Un DevOps mature est un produit : une plateforme de livraison fiable pour toute l’équipe.",
      es: "DevOps no es «quien entra por SSH a los servidores». Un DevOps maduro es un producto: una plataforma de entrega fiable para todo el equipo.",
      it: "Il DevOps non è «chi entra via SSH sui server». Un DevOps maturo è un prodotto: una piattaforma di consegna affidabile per tutto il team.",
      tr: "DevOps «sunuculara SSH atan kişi» değildir. Olgun DevOps bir üründür: tüm ekip için güvenilir bir teslim platformu."
          }
        ]
      }
    ]
  },
  {
    slug: "qa-engineer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a QA Engineer Do? Manual Testing, Automation, and Quality Ownership",
      ua: "Чим займається QA-інженер: ручне тестування, автотести і відповідальність за якість",
      de: "Was macht ein QA-Ingenieur? Manuelle Tests, Automatisierung und Verantwortung für Qualität",
      fr: "Que fait un ingénieur QA ? Tests manuels, automatisation et responsabilité de la qualité",
      es: "¿Qué hace un ingeniero QA? Pruebas manuales, automatización y responsabilidad de la calidad",
      it: "Cosa fa un ingegnere QA? Test manuali, automazione e responsabilità della qualità",
      tr: "QA mühendisi ne yapar? Manuel test, otomasyon ve kalite sorumluluğu"
    },
    excerpt: {
      en: "QA engineers protect users from defects. Manual vs automation, responsibilities, and when quality needs a dedicated role.",
      ua: "QA захищає людей від дефектів. Ручне проти авто, обов’язки і коли якість потребує окремої ролі.",
      de: "QA schützt Nutzer vor Defekten. Manuell gegen Automatisierung, Aufgaben und wann Qualität eine eigene Rolle braucht.",
      fr: "La QA protège les utilisateurs des défauts. Manuel vs auto, missions, et quand la qualité mérite un rôle dédié.",
      es: "QA protege a quien usa el producto de los defectos. Manual frente a auto, funciones y cuándo la calidad necesita un rol propio.",
      it: "Il QA protegge chi usa il prodotto dai difetti. Manuale contro auto, mansioni e quando la qualità merita un ruolo dedicato.",
      tr: "QA, kullanıcıyı kusurlardan korur. Manuel ve otomasyon, görevler ve kalitenin ne zaman ayrı bir rol istediği."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "QA",
        "IT Roles",
        "Testing",
        "Quality"
      ],
      ua: [
        "Кар'єра",
        "QA",
        "ІТ-ролі",
        "Тестування",
        "Якість"
      ],
      de: [
        "Karriere",
        "QA",
        "IT-Rollen",
        "Tests",
        "Qualität"
      ],
      fr: [
        "Carrière",
        "QA",
        "Métiers IT",
        "Tests",
        "Qualité"
      ],
      es: [
        "Carrera",
        "QA",
        "Roles IT",
        "Pruebas",
        "Calidad"
      ],
      it: [
        "Carriera",
        "QA",
        "Ruoli IT",
        "Test",
        "Qualità"
      ],
      tr: [
        "Kariyer",
        "QA",
        "IT rolleri",
        "Test",
        "Kalite"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A QA engineer verifies that the product behaves as intended - and finds what nobody planned for. Modern QA ranges from exploratory/manual testing to automation frameworks that guard every release.",
            ua: "QA-інженер перевіряє, що продукт поводиться як задумано, — і знаходить те, чого ніхто не планував. Сучасний QA — від дослідницького/ручного тесту до автофреймворків, які стережуть кожен реліз.",
            de: "Ein QA-Ingenieur prüft, ob das Produkt sich wie gedacht verhält — und findet, was niemand eingeplant hat. Modernes QA reicht von explorativem/manuellem Testen bis zu Automatisierung, die jeden Release bewacht.",
      fr: "Un ingénieur QA vérifie que le produit se comporte comme prévu — et trouve ce que personne n’avait prévu. La QA moderne va du test exploratoire/manuel aux cadres d’automatisation qui gardent chaque release.",
      es: "Un ingeniero QA comprueba que el producto se comporte como se pensó — y encuentra lo que nadie planeó. El QA moderno va del test exploratorio/manual a marcos de automatización que vigilan cada publicación.",
      it: "Un ingegnere QA verifica che il prodotto si comporti come previsto — e trova ciò che nessuno aveva pianificato. Il QA moderno va dal test esplorativo/manuale ai framework di automazione che custodiscono ogni rilascio.",
      tr: "Bir QA mühendisi ürünün tasarlandığı gibi davrandığını doğrular — ve kimsenin planlamadığı şeyi bulur. Modern QA, keşif/manuel testten her sürümü koruyan otomasyon çerçevelerine uzanır."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Design test plans, cases, and acceptance criteria with product/dev.",
            ua: "Разом із продуктом і розробкою складати плани, кейси й критерії приймання.",
            de: "Testpläne, Fälle und Abnahmekriterien mit Produkt und Entwicklung entwerfen.",
      fr: "Concevoir plans de test, cas et critères d’acceptation avec produit et dev.",
      es: "Diseñar planes, casos y criterios de aceptación con producto y desarrollo.",
      it: "Progettare piani, casi e criteri di accettazione con product e sviluppo.",
      tr: "Ürün ve geliştirme ile test planları, senaryolar ve kabul ölçütleri tasarlamak."
          },
          {
            en: "Run functional, regression, UI, and sometimes performance/security checks.",
            ua: "Проганяти функціональні, регресійні, UI- і іноді навантажувальні чи безпекові перевірки.",
            de: "Funktionale, Regressions-, UI- und manchmal Performance-/Security-Checks fahren.",
      fr: "Exécuter des contrôles fonctionnels, de régression, d’UI, parfois de perf ou de sécu.",
      es: "Ejecutar pruebas funcionales, de regresión, de UI y a veces de rendimiento o seguridad.",
      it: "Eseguire controlli funzionali, di regressione, di UI e a volte di prestazioni o security.",
      tr: "İşlevsel, regresyon, arayüz ve bazen performans/güvenlik kontrolleri çalıştırmak."
          },
          {
            en: "Write automated tests (API/UI) and integrate them into CI.",
            ua: "Писати автотести (API/UI) і вплітати їх у CI.",
            de: "Automatisierte Tests (API/UI) schreiben und in die CI einbinden.",
      fr: "Écrire des tests auto (API/UI) et les brancher dans la CI.",
      es: "Escribir tests automáticos (API/UI) e integrarlos en la CI.",
      it: "Scrivere test automatici (API/UI) e integrarli nella CI.",
      tr: "Otomatik testler (API/UI) yazmak ve CI’ya bağlamak."
          },
          {
            en: "Report bugs clearly: steps, severity, environment, expected vs actual.",
            ua: "Чітко описувати баги: кроки, критичність, середовище, очікуване проти фактичного.",
            de: "Bugs klar melden: Schritte, Schwere, Umgebung, Soll gegen Ist.",
      fr: "Signaler les bugs clairement : étapes, gravité, environnement, attendu vs constaté.",
      es: "Reportar bugs con claridad: pasos, gravedad, entorno, esperado frente a real.",
      it: "Segnalare i bug con chiarezza: passi, gravità, ambiente, atteso contro reale.",
      tr: "Hataları net yazmak: adımlar, ciddiyet, ortam, beklenen ve gerçekleşen."
          },
          {
            en: "Block risky releases and help define a “done” quality bar.",
            ua: "Блокувати ризиковані релізи й допомагати визначити планку «готово».",
            de: "Riskante Releases stoppen und die Qualitätsleiste für „fertig“ mitdefinieren.",
      fr: "Bloquer les releases risquées et aider à fixer la barre du « terminé ».",
      es: "Bloquear publicaciones arriesgadas y ayudar a fijar el listón de «hecho».",
      it: "Bloccare i rilasci rischiosi e aiutare a fissare l’asticella del «fatto».",
      tr: "Riskli sürümleri durdurmak ve «bitti» kalite çıtasını birlikte tanımlamak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Test design techniques, bug tracking, domain understanding",
            ua: "Техніки проєктування тестів, трекінг багів, розуміння домену",
            de: "Testdesign-Techniken, Bug-Tracking, Domänenverständnis",
      fr: "Techniques de conception de tests, suivi des bugs, compréhension du métier",
      es: "Técnicas de diseño de pruebas, seguimiento de bugs, comprensión del dominio",
      it: "Tecniche di test design, tracking dei bug, comprensione del dominio",
      tr: "Test tasarım teknikleri, hata takibi, alan bilgisi"
          },
          {
            en: "For automation: Playwright/Cypress/Selenium, API testing, CI",
            ua: "Для авто: Playwright/Cypress/Selenium, API-тести, CI",
            de: "Für Automatisierung: Playwright/Cypress/Selenium, API-Tests, CI",
      fr: "Pour l’auto : Playwright/Cypress/Selenium, tests API, CI",
      es: "Para automatización: Playwright/Cypress/Selenium, tests de API, CI",
      it: "Per l’automazione: Playwright/Cypress/Selenium, test API, CI",
      tr: "Otomasyon için: Playwright/Cypress/Selenium, API testi, CI"
          },
          {
            en: "Attention to edge cases, communication, risk prioritization",
            ua: "Увага до крайових випадків, комунікація, пріоритезація ризику",
            de: "Blick für Randfälle, Kommunikation, Risiko priorisieren",
      fr: "Œil pour les cas limites, communication, priorisation du risque",
      es: "Ojo a los casos límite, comunicación, priorización del riesgo",
      it: "Occhio ai casi limite, comunicazione, priorità del rischio",
      tr: "Uç durumlara dikkat, iletişim, risk önceliklendirme"
          },
          {
            en: "Basics of the product stack to debug faster with developers",
            ua: "Базове розуміння стека продукту, щоб швидше дебажити з розробкою",
            de: "Grundlagen des Produktstacks, um mit der Entwicklung schneller zu debuggen",
      fr: "Bases de la stack produit pour déboguer plus vite avec les devs",
      es: "Lo básico del stack del producto para depurar más rápido con desarrollo",
      it: "Basi dello stack di prodotto per fare debug più in fretta con lo sviluppo",
      tr: "Geliştiricilerle daha hızlı hata ayıklamak için ürün yığınının temelleri"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When release risk is high, regressions keep returning, or developers are too close to the code to see user-breaking paths - especially in fintech, health, e-commerce, and complex SaaS.",
            ua: "Коли ризик релізу високий, регресії повертаються, або розробка занадто близько до коду, щоб бачити шляхи, які ламають користувача, — особливо у фінтеху, медицині, e-commerce і складному SaaS.",
            de: "Wenn Release-Risiko hoch ist, Regressionen wiederkehren oder Entwickler dem Code zu nah sind, um nutzerbrechende Pfade zu sehen — vor allem in Fintech, Gesundheit, E-Commerce und komplexem SaaS.",
      fr: "Quand le risque de release est élevé, les régressions reviennent, ou les devs sont trop près du code pour voir les chemins qui cassent l’usage — surtout en fintech, santé, e-commerce et SaaS complexe.",
      es: "Cuando el riesgo de publicación es alto, las regresiones vuelven o desarrollo está demasiado cerca del código para ver caminos que rompen al usuario — sobre todo en fintech, salud, e-commerce y SaaS complejo.",
      it: "Quando il rischio di rilascio è alto, le regressioni tornano o lo sviluppo è troppo vicino al codice per vedere i percorsi che rompono l’uso — soprattutto in fintech, salute, e-commerce e SaaS complesso.",
      tr: "Sürüm riski yüksekse, regresyonlar geri geliyorsa veya geliştiriciler koda o kadar yakın ki kullanıcıyı kıran yolları görmüyorsa — özellikle fintech, sağlık, e-ticaret ve karmaşık SaaS’te."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "QA does not “slow the team down.” Good QA makes speed sustainable by catching expensive mistakes before customers do.",
            ua: "QA не «гальмує команду». Добрий QA робить швидкість сталою: ловить дорогі помилки раніше за клієнтів.",
            de: "QA „bremst das Team nicht“. Gutes QA macht Tempo haltbar, weil teure Fehler vor den Kunden gefunden werden.",
      fr: "La QA ne « ralentit pas l’équipe ». Une bonne QA rend la vitesse tenable en attrapant les erreurs chères avant les clients.",
      es: "QA no «frena al equipo». Un buen QA hace sostenible la velocidad al cazar errores caros antes que los clientes.",
      it: "Il QA non «rallenta il team». Un buon QA rende sostenibile la velocità perché prende gli errori costosi prima dei clienti.",
      tr: "QA «ekibi yavaşlatmaz». İyi QA, pahalı hataları müşteriden önce yakalayarak hızı sürdürülebilir kılar."
          }
        ]
      }
    ]
  },
  {
    slug: "ui-ux-designer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a UI/UX Designer Do? Research, Flows, and Interface Craft",
      ua: "Чим займається UI/UX-дизайнер: дослідження, сценарії й ремесло інтерфейсу",
      de: "Was macht ein UI/UX-Designer? Recherche, Abläufe und Handwerk der Oberfläche",
      fr: "Que fait un designer UI/UX ? Recherche, parcours et métier de l’interface",
      es: "¿Qué hace un diseñador UI/UX? Investigación, flujos y oficio de la interfaz",
      it: "Cosa fa un designer UI/UX? Ricerca, flussi e mestiere dell’interfaccia",
      tr: "UI/UX tasarımcı ne yapar? Araştırma, akışlar ve arayüz işçiliği"
    },
    excerpt: {
      en: "UI/UX designers shape how products feel and work. UX research, UI systems, handoff - and when design is the growth lever.",
      ua: "UI/UX формує, як продукт відчувається і як ним користуються. Дослідження, візуальна система, передача в розробку — і коли дизайн є важелем росту.",
      de: "UI/UX formt, wie sich Produkte anfühlen und funktionieren. Recherche, UI-Systeme, Übergabe — und wann Design der Wachstumshebel ist.",
      fr: "L’UI/UX façonne le ressenti et le fonctionnement du produit. Recherche, systèmes visuels, passation — et quand le design est le levier de croissance.",
      es: "UI/UX da forma a cómo se siente y funciona el producto. Investigación, sistemas visuales, traspaso — y cuándo el diseño es la palanca de crecimiento.",
      it: "UI/UX dà forma a come il prodotto si percepisce e funziona. Ricerca, sistemi visivi, passaggio — e quando il design è la leva di crescita.",
      tr: "UI/UX, ürünün nasıl hissedildiğini ve işlediğini şekillendirir. Araştırma, görsel sistemler, teslim — ve tasarımın ne zaman büyüme kaldıracı olduğu."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "UI/UX",
        "IT Roles",
        "Design",
        "Product"
      ],
      ua: [
        "Кар'єра",
        "UI/UX",
        "ІТ-ролі",
        "Дизайн",
        "Продукт"
      ],
      de: [
        "Karriere",
        "UI/UX",
        "IT-Rollen",
        "Design",
        "Produkt"
      ],
      fr: [
        "Carrière",
        "UI/UX",
        "Métiers IT",
        "Design",
        "Produit"
      ],
      es: [
        "Carrera",
        "UI/UX",
        "Roles IT",
        "Diseño",
        "Producto"
      ],
      it: [
        "Carriera",
        "UI/UX",
        "Ruoli IT",
        "Design",
        "Prodotto"
      ],
      tr: [
        "Kariyer",
        "UI/UX",
        "IT rolleri",
        "Tasarım",
        "Ürün"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A UI/UX designer designs the experience and the visual interface. UX focuses on user goals, flows, and clarity; UI focuses on visual hierarchy, components, and consistency. Many specialists combine both.",
            ua: "UI/UX-дизайнер проєктує і досвід, і візуальний інтерфейс. UX дивиться на цілі людини, сценарії й ясність; UI — на ієрархію, компоненти й узгодженість. Багато спеціалістів тримають обидва.",
            de: "Ein UI/UX-Designer gestaltet Erlebnis und visuelle Oberfläche. UX zielt auf Nutzerziele, Abläufe und Klarheit; UI auf Hierarchie, Komponenten und Konsistenz. Viele Spezialist:innen vereinen beides.",
      fr: "Un designer UI/UX conçoit l’expérience et l’interface visuelle. L’UX vise les buts de l’utilisateur, les parcours et la clarté ; l’UI, la hiérarchie, les composants et la cohérence. Beaucoup de profils tiennent les deux.",
      es: "Un diseñador UI/UX diseña la experiencia y la interfaz visual. UX mira objetivos, flujos y claridad; UI, jerarquía, componentes y consistencia. Muchos perfiles cubren ambos.",
      it: "Un designer UI/UX progetta l’esperienza e l’interfaccia visiva. L’UX guarda obiettivi, flussi e chiarezza; l’UI, gerarchia, componenti e coerenza. Molti profili tengono entrambi.",
      tr: "Bir UI/UX tasarımcı hem deneyimi hem görsel arayüzü tasarlar. UX, kullanıcı hedeflerine, akışlara ve netliğe bakar; UI, hiyerarşiye, bileşenlere ve tutarlılığa. Birçok uzman ikisini birden tutar."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Research users, map journeys, and define problem statements.",
            ua: "Досліджувати людей, мапити шляхи й формулювати задачу.",
            de: "Nutzende erforschen, Journeys kartieren, Problemstellungen schärfen.",
      fr: "Enquêter auprès des utilisateurs, cartographier les parcours, formuler le problème.",
      es: "Investigar a quienes usan el producto, mapear recorridos y formular el problema.",
      it: "Ricercare chi usa il prodotto, mappare i percorsi e formulare il problema.",
      tr: "Kullanıcıları araştırmak, yolculukları haritalamak ve sorunu tanımlamak."
          },
          {
            en: "Wireframe flows, prototype interactions, and validate with tests.",
            ua: "Малювати вайрфрейми, прототипувати взаємодії й перевіряти тестами.",
            de: "Flows wireframen, Interaktionen prototypen, mit Tests validieren.",
      fr: "Wireframer les parcours, prototyper les interactions, valider par des tests.",
      es: "Hacer wireframes de flujos, prototipar interacciones y validar con tests.",
      it: "Fare wireframe dei flussi, prototipare interazioni e validare con test.",
      tr: "Akışları wireframe’lemek, etkileşimleri prototiplemek ve testle doğrulamak."
          },
          {
            en: "Create UI kits/design systems and high-fidelity screens.",
            ua: "Збирати UI-кити / дизайн-системи й екрани високої точності.",
            de: "UI-Kits bzw. Design Systeme und High-Fidelity-Screens erstellen.",
      fr: "Créer des UI kits / design systems et des écrans haute fidélité.",
      es: "Crear UI kits / design systems y pantallas de alta fidelidad.",
      it: "Creare UI kit / design system e schermate ad alta fedeltà.",
      tr: "UI kit / design system ve yüksek doğrulukta ekranlar oluşturmak."
          },
          {
            en: "Write specs for developers: states, spacing, edge cases, a11y notes.",
            ua: "Писати специфікації для розробки: стани, відступи, крайові випадки, нотатки з доступності.",
            de: "Specs für die Entwicklung schreiben: Zustände, Abstände, Randfälle, a11y-Hinweise.",
      fr: "Rédiger des specs pour les devs : états, espacements, cas limites, notes d’accessibilité.",
      es: "Escribir especificaciones para desarrollo: estados, espaciado, casos límite, notas de accesibilidad.",
      it: "Scrivere specifiche per lo sviluppo: stati, spaziatura, casi limite, note di accessibilità.",
      tr: "Geliştirme için spesifikasyon yazmak: durumlar, boşluklar, uç durumlar, erişilebilirlik notları."
          },
          {
            en: "Iterate after launch using analytics and qualitative feedback.",
            ua: "Після запуску ітерувати за аналітикою й якісним фідбеком.",
            de: "Nach dem Launch anhand von Analytics und qualitativem Feedback iterieren.",
      fr: "Itérer après le lancement avec l’analytique et le retour qualitatif.",
      es: "Iterar tras el lanzamiento con analítica y feedback cualitativo.",
      it: "Iterare dopo il lancio con analytics e feedback qualitativo.",
      tr: "Lansmandan sonra analitik ve nitel geribildirimle yinelemek."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Figma (or similar), prototyping, design systems",
            ua: "Figma (або аналог), прототипування, дизайн-системи",
            de: "Figma (oder ähnlich), Prototyping, Design Systeme",
      fr: "Figma (ou équivalent), prototypage, design systems",
      es: "Figma (o similar), prototipado, design systems",
      it: "Figma (o simile), prototyping, design system",
      tr: "Figma (veya benzeri), prototipleme, design system’ler"
          },
          {
            en: "UX methods: interviews, usability tests, information architecture",
            ua: "Методи UX: інтерв’ю, тести зручності, інформаційна архітектура",
            de: "UX-Methoden: Interviews, Usability-Tests, Informationsarchitektur",
      fr: "Méthodes UX : entretiens, tests d’utilisabilité, architecture de l’information",
      es: "Métodos UX: entrevistas, tests de usabilidad, arquitectura de información",
      it: "Metodi UX: interviste, test di usabilità, information architecture",
      tr: "UX yöntemleri: görüşmeler, kullanılabilirlik testleri, bilgi mimarisi"
          },
          {
            en: "Visual craft: typography, layout, color, micro-interactions",
            ua: "Візуальне ремесло: типографіка, композиція, колір, мікроанімації",
            de: "Visuelles Handwerk: Typografie, Layout, Farbe, Mikrointeraktionen",
      fr: "Métier visuel : typographie, mise en page, couleur, micro-interactions",
      es: "Oficio visual: tipografía, composición, color, microinteracciones",
      it: "Mestiere visivo: tipografia, layout, colore, micro-interazioni",
      tr: "Görsel işçilik: tipografi, yerleşim, renk, mikro etkileşimler"
          },
          {
            en: "Collaboration with product and engineering on feasibility",
            ua: "Співпраця з продуктом і інженерією щодо здійсненності",
            de: "Zusammenarbeit mit Produkt und Engineering zur Machbarkeit",
      fr: "Collaboration avec produit et ingénierie sur la faisabilité",
      es: "Colaboración con producto e ingeniería sobre viabilidad",
      it: "Collaborazione con product ed engineering sulla fattibilità",
      tr: "Ürün ve mühendislikle uygulanabilirlik üzerine işbirliği"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When conversion is low, onboarding confuses users, or engineering builds screens without a coherent system - design debt becomes product debt.",
            ua: "Коли конверсія низька, онбординг плутає, або інженерія збирає екрани без єдиної системи — борги дизайну стають боргами продукту.",
            de: "Wenn Conversion niedrig ist, Onboarding verwirrt oder Engineering Screens ohne kohärentes System baut — Desigschulden werden Produktschulden.",
      fr: "Quand la conversion est basse, l’onboarding embrouille, ou l’ingénierie assemble des écrans sans système cohérent — la dette design devient dette produit.",
      es: "Cuando la conversión es baja, el onboarding confunde o ingeniería monta pantallas sin un sistema coherente — la deuda de diseño se vuelve deuda de producto.",
      it: "Quando la conversione è bassa, l’onboarding confonde o l’engineering monta schermate senza un sistema coerente — il debito di design diventa debito di prodotto.",
      tr: "Dönüşüm düşükse, karşılama kafa karıştırıyorsa veya mühendislik tutarlı bir sistem olmadan ekran kuruyorsa — tasarım borcu ürün borcu olur."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Great design reduces support tickets and rewrites. It is not decoration - it is product risk management.",
            ua: "Добрий дизайн зменшує тікети підтримки й переписування. Це не декор — це керування ризиком продукту.",
            de: "Gutes Design senkt Support-Tickets und Rewrites. Es ist keine Dekoration — es ist Risikomanagement am Produkt.",
      fr: "Un bon design réduit les tickets support et les réécritures. Ce n’est pas de la déco : c’est de la gestion de risque produit.",
      es: "Un buen diseño reduce tickets de soporte y reescrituras. No es decoración: es gestión de riesgo de producto.",
      it: "Un buon design riduce i ticket di supporto e le riscritture. Non è decorazione: è gestione del rischio di prodotto.",
      tr: "İyi tasarım destek taleplerini ve yeniden yazmaları azaltır. Süs değildir — ürün risk yönetimidir."
          }
        ]
      }
    ]
  },
  {
    slug: "product-manager-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Product Manager Do? Discovery, Priorities, and Outcomes",
      ua: "Чим займається Product Manager: дослідження, пріоритети й результати",
      de: "Was macht ein Product Manager? Discovery, Prioritäten und Wirkung",
      fr: "Que fait un Product Manager ? Discovery, priorités et résultats",
      es: "¿Qué hace un Product Manager? Discovery, prioridades y resultados",
      it: "Cosa fa un Product Manager? Discovery, priorità e risultati",
      tr: "Product Manager ne yapar? Keşif, öncelikler ve sonuçlar"
    },
    excerpt: {
      en: "Product managers decide what to build and why. Scope of the PM role, difference from project managers, and hiring signals.",
      ua: "Product Manager вирішує, що будувати і навіщо. Обсяг ролі, відмінність від проєктного менеджера і сигнали, що час наймати.",
      de: "Product Manager entscheiden, was gebaut wird und warum. Umfang der Rolle, Unterschied zum Projektmanager und Signale zum Einstellen.",
      fr: "Le Product Manager décide quoi construire et pourquoi. Périmètre du rôle, différence avec le chef de projet, signaux pour recruter.",
      es: "El Product Manager decide qué construir y por qué. Alcance del rol, diferencia con el jefe de proyecto y señales para contratar.",
      it: "Il Product Manager decide cosa costruire e perché. Perimetro del ruolo, differenza dal project manager e segnali per assumere.",
      tr: "Product Manager neyin neden kurulacağına karar verir. Rolün kapsamı, proje yöneticisinden farkı ve işe alım sinyalleri."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Product Management",
        "IT Roles",
        "Strategy"
      ],
      ua: [
        "Кар'єра",
        "Продуктовий менеджмент",
        "ІТ-ролі",
        "Стратегія"
      ],
      de: [
        "Karriere",
        "Produktmanagement",
        "IT-Rollen",
        "Strategie"
      ],
      fr: [
        "Carrière",
        "Product management",
        "Métiers IT",
        "Stratégie"
      ],
      es: [
        "Carrera",
        "Product management",
        "Roles IT",
        "Estrategia"
      ],
      it: [
        "Carriera",
        "Product management",
        "Ruoli IT",
        "Strategia"
      ],
      tr: [
        "Kariyer",
        "Ürün yönetimi",
        "IT rolleri",
        "Strateji"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A product manager owns the “why” and “what”: problem discovery, prioritization, roadmap, and success metrics. They do not manage people day-to-day; they align business goals with user value and engineering capacity.",
            ua: "Product Manager тримає «навіщо» і «що»: дослідження задачі, пріоритети, дорожню карту й метрики успіху. Це не щоденне керування людьми — це звести бізнес-цілі з цінністю для користувача і місткістю інженерії.",
            de: "Ein Product Manager trägt das „Warum“ und „Was“: Problemfindung, Priorisierung, Roadmap und Erfolgsmetriken. Er führt nicht den Alltag der Menschen — er richtet Geschäftsziele an Nutzwert und Engineering-Kapazität aus.",
      fr: "Un Product Manager porte le « pourquoi » et le « quoi » : découvrir le problème, prioriser, feuille de route, métriques de succès. Il ne manage pas les gens au quotidien : il aligne buts business, valeur utilisateur et capacité d’ingénierie.",
      es: "Un Product Manager sostiene el «por qué» y el «qué»: descubrir el problema, priorizar, hoja de ruta y métricas de éxito. No gestiona personas día a día: alinea metas de negocio con valor para quien usa el producto y con la capacidad de ingeniería.",
      it: "Un Product Manager porta il «perché» e il «cosa»: scoperta del problema, priorità, roadmap e metriche di successo. Non gestisce le persone nel quotidiano: allinea obiettivi di business, valore per chi usa il prodotto e capacità engineering.",
      tr: "Bir Product Manager «neden» ve «ne»yi taşır: sorunu keşfetmek, önceliklendirmek, yol haritası ve başarı metrikleri. İnsanları günü gününe yönetmez; iş hedeflerini kullanıcı değeri ve mühendislik kapasitesiyle hizalar."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Talk to users/stakeholders and turn insights into opportunities.",
            ua: "Говорити з користувачами й стейкхолдерами і перетворювати інсайти на можливості.",
            de: "Mit Nutzenden und Stakeholdern sprechen und Einsichten in Chancen übersetzen.",
      fr: "Parler aux utilisateurs et parties prenantes, et transformer les insights en opportunités.",
      es: "Hablar con quienes usan el producto y con quienes deciden, y convertir hallazgos en oportunidades.",
      it: "Parlare con chi usa il prodotto e con gli stakeholder, e trasformare gli insight in opportunità.",
      tr: "Kullanıcı ve paydaşlarla konuşmak, içgörüyü fırsata çevirmek."
          },
          {
            en: "Prioritize backlog by impact, effort, and strategic fit.",
            ua: "Пріоритезувати беклог за впливом, зусиллям і стратегічною відповідністю.",
            de: "Backlog nach Wirkung, Aufwand und strategischem Fit priorisieren.",
      fr: "Prioriser le backlog selon l’impact, l’effort et l’alignement stratégique.",
      es: "Priorizar el backlog por impacto, esfuerzo y encaje estratégico.",
      it: "Prioritizzare il backlog per impatto, sforzo e aderenza strategica.",
      tr: "Birikimi etki, efor ve stratejik uyuma göre önceliklendirmek."
          },
          {
            en: "Write PRDs/user stories with clear acceptance criteria.",
            ua: "Писати PRD і юзер-сторі з чіткими критеріями приймання.",
            de: "PRDs und User Stories mit klaren Abnahmekriterien schreiben.",
      fr: "Rédiger PRD et user stories avec des critères d’acceptation nets.",
      es: "Escribir PRD e historias de usuario con criterios de aceptación claros.",
      it: "Scrivere PRD e user story con criteri di accettazione chiari.",
      tr: "Net kabul ölçütleriyle PRD ve kullanıcı hikâyeleri yazmak."
          },
          {
            en: "Coordinate launches, experiments, and metric reviews.",
            ua: "Координувати запуски, експерименти й розбори метрик.",
            de: "Launches, Experimente und Metrik-Reviews koordinieren.",
      fr: "Coordonner lancements, expérimentations et revues de métriques.",
      es: "Coordinar lanzamientos, experimentos y revisiones de métricas.",
      it: "Coordinare lanci, esperimenti e revisioni delle metriche.",
      tr: "Lansmanları, deneyleri ve metrik değerlendirmelerini koordine etmek."
          },
          {
            en: "Say no (or not now) to protect focus and product coherence.",
            ua: "Казати «ні» (або «не зараз»), щоб захистити фокус і цілісність продукту.",
            de: "Nein (oder nicht jetzt) sagen, um Fokus und Produktkohärenz zu schützen.",
      fr: "Dire non (ou pas maintenant) pour protéger le focus et la cohérence du produit.",
      es: "Decir no (o ahora no) para proteger el foco y la coherencia del producto.",
      it: "Dire no (o non ora) per proteggere il focus e la coerenza del prodotto.",
      tr: "Odağı ve ürün bütünlüğünü korumak için hayır (veya şimdi değil) demek."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Product discovery, prioritization frameworks, metrics literacy",
            ua: "Продуктове дослідження, фреймворки пріоритезації, грамотність у метриках",
            de: "Product Discovery, Priorisierungsrahmen, Metrik-Kompetenz",
      fr: "Product discovery, cadres de priorisation, culture des métriques",
      es: "Discovery de producto, marcos de priorización, alfabetización en métricas",
      it: "Product discovery, framework di priorità, alfabetizzazione sulle metriche",
      tr: "Ürün keşfi, önceliklendirme çerçeveleri, metrik okuryazarlığı"
          },
          {
            en: "Communication, facilitation, stakeholder management",
            ua: "Комунікація, фасилітація, робота зі стейкхолдерами",
            de: "Kommunikation, Moderation, Stakeholder-Arbeit",
      fr: "Communication, facilitation, relation aux parties prenantes",
      es: "Comunicación, facilitación, gestión de interesados",
      it: "Comunicazione, facilitazione, gestione degli stakeholder",
      tr: "İletişim, kolaylaştırıcılık, paydaş yönetimi"
          },
          {
            en: "Basic understanding of UX and technical constraints",
            ua: "Базове розуміння UX і технічних обмежень",
            de: "Grundverständnis von UX und technischen Grenzen",
      fr: "Compréhension de base de l’UX et des contraintes techniques",
      es: "Comprensión básica de UX y de los límites técnicos",
      it: "Comprensione di base di UX e vincoli tecnici",
      tr: "UX ve teknik kısıtların temelini anlamak"
          },
          {
            en: "Experiment design (A/B), roadmap storytelling",
            ua: "Дизайн експериментів (A/B), розповідь дорожньої карти",
            de: "Experimentdesign (A/B), Roadmap erzählen können",
      fr: "Conception d’expériences (A/B), raconter la feuille de route",
      es: "Diseño de experimentos (A/B), narrar la hoja de ruta",
      it: "Design degli esperimenti (A/B), raccontare la roadmap",
      tr: "Deney tasarımı (A/B), yol haritasını anlatmak"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When the team ships a lot but outcomes are unclear, priorities thrash weekly, or founders can no longer be the only “product brain.”",
            ua: "Коли команда багато релизить, а результати розмиті, пріоритети стрибають щотижня або фаундери вже не можуть бути єдиним «продуктовим мозком».",
            de: "Wenn das Team viel ausliefert, die Wirkung aber unklar bleibt, Prioritäten wöchentlich umkippen oder Gründer nicht mehr das einzige „Produktgehirn“ sein können.",
      fr: "Quand l’équipe livre beaucoup mais les résultats sont flous, les priorités changent chaque semaine, ou les fondateurs ne peuvent plus être le seul « cerveau produit ».",
      es: "Cuando el equipo entrega mucho pero los resultados no están claros, las prioridades saltan cada semana o los fundadores ya no pueden ser el único «cerebro de producto».",
      it: "Quando il team rilascia tanto ma i risultati sono opachi, le priorità saltano ogni settimana o i founder non possono più essere l’unico «cervello di prodotto».",
      tr: "Ekip çok teslim ediyor ama sonuçlar bulanıksa, öncelikler her hafta savruluyorsa veya kurucular artık tek «ürün beyni» olamıyorsa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "PM is not a ticket clerk. Strong PMs reduce wasted engineering months by choosing the right problems.",
            ua: "PM — не клерк по тікетах. Сильний PM зменшує змарновані інженерні місяці, обираючи правильні задачі.",
            de: "PM ist kein Ticket-Sachbearbeiter. Starke PMs sparen verschwendete Engineering-Monate, weil sie die richtigen Probleme wählen.",
      fr: "Le PM n’est pas un commis à tickets. Un PM fort évite des mois d’ingénierie gaspillés en choisissant les bons problèmes.",
      es: "El PM no es un oficinista de tickets. Un PM fuerte evita meses de ingeniería tirados eligiendo los problemas correctos.",
      it: "Il PM non è un impiegato dei ticket. Un PM solido evita mesi di engineering sprecati scegliendo i problemi giusti.",
      tr: "PM bir bilet memuru değildir. Güçlü bir PM doğru sorunları seçerek boşa giden mühendislik aylarını keser."
          }
        ]
      }
    ]
  },
  {
    slug: "project-manager-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Project Manager Do in IT? Delivery, Scope, and Communication",
      ua: "Чим займається проєктний менеджер в ІТ: поставка, обсяг і комунікація",
      de: "Was macht ein Projektmanager in der IT? Lieferung, Umfang und Kommunikation",
      fr: "Que fait un chef de projet IT ? Livraison, périmètre et communication",
      es: "¿Qué hace un jefe de proyecto en IT? Entrega, alcance y comunicación",
      it: "Cosa fa un project manager in IT? Consegna, perimetro e comunicazione",
      tr: "IT’de proje yöneticisi ne yapar? Teslim, kapsam ve iletişim"
    },
    excerpt: {
      en: "IT project managers keep delivery predictable: scope, timeline, risks, and stakeholder updates. How PM differs from Product Manager.",
      ua: "Проєктний менеджер тримає поставку передбачуваною: обсяг, терміни, ризики, оновлення для стейкхолдерів. Чим відрізняється від Product Manager.",
      de: "IT-Projektmanager halten die Lieferung planbar: Umfang, Zeitplan, Risiken, Status für Stakeholder. Wie sich die Rolle vom Product Manager unterscheidet.",
      fr: "Le chef de projet IT rend la livraison prévisible : périmètre, calendrier, risques, points aux parties prenantes. En quoi ce rôle diffère du Product Manager.",
      es: "El jefe de proyecto IT mantiene la entrega previsible: alcance, plazos, riesgos, actualizaciones a interesados. En qué se diferencia del Product Manager.",
      it: "Il project manager IT rende la consegna prevedibile: perimetro, tempi, rischi, aggiornamenti agli stakeholder. Come differisce dal Product Manager.",
      tr: "IT proje yöneticisi teslimi öngörülebilir tutar: kapsam, takvim, riskler, paydaş güncellemeleri. Product Manager’dan farkı."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Project Management",
        "IT Roles",
        "Delivery"
      ],
      ua: [
        "Кар'єра",
        "Управління проєктами",
        "ІТ-ролі",
        "Поставка"
      ],
      de: [
        "Karriere",
        "Projektmanagement",
        "IT-Rollen",
        "Lieferfähigkeit"
      ],
      fr: [
        "Carrière",
        "Gestion de projet",
        "Métiers IT",
        "Livraison"
      ],
      es: [
        "Carrera",
        "Gestión de proyectos",
        "Roles IT",
        "Entrega"
      ],
      it: [
        "Carriera",
        "Project management",
        "Ruoli IT",
        "Consegna"
      ],
      tr: [
        "Kariyer",
        "Proje yönetimi",
        "IT rolleri",
        "Teslim"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A project manager owns delivery: timeline, scope control, dependencies, risks, and clear status. Where Product asks “what should we build?”, Project asks “how do we ship what we committed to on time?”",
            ua: "Проєктний менеджер відповідає за поставку: терміни, контроль обсягу, залежності, ризики й зрозумілий статус. Продукт питає «що будуємо?», проєкт — «як вчасно віддати те, на що зобов’язались?».",
            de: "Ein Projektmanager trägt die Lieferung: Zeitplan, Scope-Kontrolle, Abhängigkeiten, Risiken und klaren Status. Produkt fragt „was sollen wir bauen?“, Projekt fragt „wie liefern wir das Zugesagte rechtzeitig?“",
      fr: "Un chef de projet porte la livraison : calendrier, maîtrise du périmètre, dépendances, risques et un statut lisible. Le produit demande « que construire ? », le projet « comment livrer à l’heure ce à quoi on s’est engagés ? »",
      es: "Un jefe de proyecto responde de la entrega: plazos, control de alcance, dependencias, riesgos y un estado claro. Producto pregunta «qué construimos»; proyecto, «cómo entregamos a tiempo lo prometido».",
      it: "Un project manager risponde della consegna: tempi, controllo del perimetro, dipendenze, rischi e uno stato chiaro. Il product chiede «cosa costruiamo?»; il progetto, «come consegniamo in tempo ciò che abbiamo promesso?»",
      tr: "Bir proje yöneticisi teslimden sorumludur: takvim, kapsam kontrolü, bağımlılıklar, riskler ve net durum. Ürün «ne kuralım?» diye sorar; proje «taahhüt ettiğimizi nasıl zamanında çıkarırız?»"
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Plan milestones, estimates, and resource allocation.",
            ua: "Планувати віхи, оцінки й розподіл людей.",
            de: "Meilensteine, Schätzungen und Ressourcenzuteilung planen.",
      fr: "Planifier jalons, chiffrages et allocation des gens.",
      es: "Planificar hitos, estimaciones y asignación de gente.",
      it: "Pianificare milestone, stime e allocazione delle persone.",
      tr: "Kilometre taşlarını, tahminleri ve insan tahsisini planlamak."
          },
          {
            en: "Track progress, blockers, and change requests.",
            ua: "Тримати рух, блокери й запити на зміни.",
            de: "Fortschritt, Blocker und Änderungswünsche im Blick behalten.",
      fr: "Suivre l’avancement, les blocages et les demandes de changement.",
      es: "Seguir el avance, los bloqueos y las peticiones de cambio.",
      it: "Tenere progresso, blocker e richieste di cambiamento.",
      tr: "İlerlemeyi, engelleri ve değişiklik taleplerini izlemek."
          },
          {
            en: "Facilitate ceremonies or status rituals that actually help.",
            ua: "Вести церемонії чи статус-ритуали, які справді допомагають.",
            de: "Rituale und Statusrunden moderieren, die wirklich helfen.",
      fr: "Animer des cérémonies ou rituels de statut qui aident vraiment.",
      es: "Facilitar ceremonias o rituales de estado que de verdad ayuden.",
      it: "Facilitare cerimonie o rituali di stato che servono davvero.",
      tr: "Gerçekten işe yarayan törenleri veya durum ritüellerini yönetmek."
          },
          {
            en: "Manage stakeholder expectations with honest risk communication.",
            ua: "Керувати очікуваннями стейкхолдерів чесною розмовою про ризик.",
            de: "Erwartungen von Stakeholdern mit ehrlicher Risikokommunikation steuern.",
      fr: "Piloter les attentes des parties prenantes avec une parole honnête sur le risque.",
      es: "Gestionar expectativas de interesados con una comunicación honesta del riesgo.",
      it: "Gestire le attese degli stakeholder con una comunicazione onesta sul rischio.",
      tr: "Paydaş beklentilerini riski dürüstçe konuşarak yönetmek."
          },
          {
            en: "Coordinate handoffs between design, engineering, QA, and ops.",
            ua: "Координувати передачі між дизайном, інженерією, QA й експлуатацією.",
            de: "Übergaben zwischen Design, Engineering, QA und Betrieb koordinieren.",
      fr: "Coordonner les passations entre design, ingénierie, QA et exploitation.",
      es: "Coordinar los traspasos entre diseño, ingeniería, QA y operaciones.",
      it: "Coordinare i passaggi tra design, engineering, QA ed esercizio.",
      tr: "Tasarım, mühendislik, QA ve işletim arasındaki teslimleri koordine etmek."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Planning, risk management, documentation discipline",
            ua: "Планування, керування ризиками, дисципліна документів",
            de: "Planung, Risikomanagement, Dokumentationsdisziplin",
      fr: "Planification, gestion des risques, discipline documentaire",
      es: "Planificación, gestión de riesgos, disciplina documental",
      it: "Pianificazione, gestione del rischio, disciplina documentale",
      tr: "Planlama, risk yönetimi, belge disiplini"
          },
          {
            en: "Tools: Jira/Linear/Asana, reporting, basic budgeting",
            ua: "Інструменти: Jira/Linear/Asana, звітність, базовий бюджет",
            de: "Tools: Jira/Linear/Asana, Reporting, grundlegendes Budget",
      fr: "Outils : Jira/Linear/Asana, reporting, budget de base",
      es: "Herramientas: Jira/Linear/Asana, reporting, presupuesto básico",
      it: "Strumenti: Jira/Linear/Asana, reporting, budget di base",
      tr: "Araçlar: Jira/Linear/Asana, raporlama, temel bütçe"
          },
          {
            en: "Soft skills: clarity, negotiation, conflict resolution",
            ua: "М’які навички: ясність, переговори, розв’язання конфліктів",
            de: "Soft Skills: Klarheit, Verhandlung, Konflikte lösen",
      fr: "Savoir-être : clarté, négociation, résolution de conflits",
      es: "Habilidades blandas: claridad, negociación, resolución de conflictos",
      it: "Soft skill: chiarezza, negoziazione, risoluzione dei conflitti",
      tr: "Yumuşak beceriler: netlik, müzakere, çatışma çözümü"
          },
          {
            en: "Enough technical literacy to challenge unrealistic plans",
            ua: "Достатня технічна грамотність, щоб ставити під сумнів нереалістичні плани",
            de: "Genug Technikverständnis, um unrealistische Pläne zu hinterfragen",
      fr: "Assez de culture technique pour contester des plans irréalistes",
      es: "Suficiente alfabetización técnica para cuestionar planes irreales",
      it: "Abbastanza alfabetizzazione tecnica per contestare piani irrealistici",
      tr: "Gerçekçi olmayan planlara itiraz edecek kadar teknik okuryazarlık"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "Fixed-scope client projects, multi-team programs, regulated delivery, or any situation where missed deadlines cost real money and trust.",
            ua: "Клієнтські проєкти з фіксованим обсягом, програми на кілька команд, регульована поставка — або будь-яка ситуація, де зірвані дедлайни коштують грошей і довіри.",
            de: "Kundenprojekte mit festem Scope, Programme über mehrere Teams, regulierte Lieferung — oder jede Lage, in der verpasste Termine echtes Geld und Vertrauen kosten.",
      fr: "Projets clients à périmètre fixe, programmes multi-équipes, livraison réglementée — ou toute situation où un délai raté coûte de l’argent et de la confiance.",
      es: "Proyectos de cliente de alcance fijo, programas de varios equipos, entrega regulada — o cualquier situación en la que un plazo fallido cueste dinero y confianza de verdad.",
      it: "Progetti cliente a perimetro fisso, programmi multi-team, consegna regolamentata — o ogni situazione in cui una scadenza saltata costa soldi e fiducia veri.",
      tr: "Sabit kapsamlı müşteri projeleri, çok ekipli programlar, düzenlemeli teslim — veya kaçan tarihin gerçek para ve güven olduğu her durum."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "In small teams one person may wear Product + Project hats. At scale, splitting them prevents “strategy drowning in status meetings.”",
            ua: "У малих командах одна людина може тримати і продукт, і проєкт. На масштабі розділення рятує стратегію від «втоплення в статус-мітингах».",
            de: "In kleinen Teams trägt oft eine Person Produkt- und Projekthut. Im Maßstab verhindert die Trennung, dass Strategie in Statusmeetings ertrinkt.",
      fr: "En petite équipe, une personne peut porter les deux casquettes produit et projet. À l’échelle, les séparer évite que la stratégie se noie dans les points de statut.",
      es: "En equipos pequeños una persona puede llevar producto y proyecto. A escala, separarlos evita que la estrategia se ahogue en reuniones de estado.",
      it: "Nei team piccoli una persona può tenere prodotto e progetto. Alla scala, separarli evita che la strategia anneghi nelle riunioni di stato.",
      tr: "Küçük ekiplerde bir kişi hem ürün hem proje şapkası takabilir. Ölçekte ayırmak, stratejinin durum toplantılarında boğulmasını önler."
          }
        ]
      }
    ]
  },
  {
    slug: "business-analyst-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Business Analyst Do in IT? Requirements That Teams Can Build",
      ua: "Чим займається бізнес-аналітик в ІТ: вимоги, з яких команда може будувати",
      de: "Was macht ein Business Analyst in der IT? Anforderungen, die Teams bauen können",
      fr: "Que fait un Business Analyst en IT ? Des exigences que l’équipe peut construire",
      es: "¿Qué hace un Business Analyst en IT? Requisitos que el equipo puede construir",
      it: "Cosa fa un Business Analyst in IT? Requisiti che il team può costruire",
      tr: "IT’de iş analisti ne yapar? Ekibin kurabileceği gereksinimler"
    },
    excerpt: {
      en: "Business analysts translate business needs into clear requirements. Role map, artifacts, and when BA prevents costly rework.",
      ua: "Бізнес-аналітик перекладає потреби бізнесу зрозумілими вимогами. Карта ролі, артефакти і коли BA рятує від дорогого перероблення.",
      de: "Business Analysts übersetzen Geschäftbedarf in klare Anforderungen. Rollenkarte, Artefakte und wann BA teure Nacharbeit verhindert.",
      fr: "Le Business Analyst traduit le besoin métier en exigences claires. Carte du rôle, livrables, et quand le BA évite des reprises coûteuses.",
      es: "El Business Analyst traduce necesidades de negocio en requisitos claros. Mapa del rol, artefactos y cuándo el BA evita retrabajo caro.",
      it: "Il Business Analyst traduce i bisogni di business in requisiti chiari. Mappa del ruolo, artefatti e quando il BA evita rilavori costosi.",
      tr: "İş analisti iş ihtiyacını net gereksinimlere çevirir. Rol haritası, çıktılar ve BA’nın pahalı yeniden işi ne zaman kestiği."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Business Analysis",
        "IT Roles",
        "Requirements"
      ],
      ua: [
        "Кар'єра",
        "Бізнес-аналіз",
        "ІТ-ролі",
        "Вимоги"
      ],
      de: [
        "Karriere",
        "Business Analyse",
        "IT-Rollen",
        "Anforderungen"
      ],
      fr: [
        "Carrière",
        "Business analysis",
        "Métiers IT",
        "Cahier des charges"
      ],
      es: [
        "Carrera",
        "Business analysis",
        "Roles IT",
        "Requisitos"
      ],
      it: [
        "Carriera",
        "Business analysis",
        "Ruoli IT",
        "Requisiti"
      ],
      tr: [
        "Kariyer",
        "İş analizi",
        "IT rolleri",
        "Gereksinimler"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A business analyst bridges business and engineering: gathers requirements, models processes, clarifies edge cases, and documents what “done” means before code is written (and while it changes).",
            ua: "Бізнес-аналітик є містком між бізнесом і інженерією: збирає вимоги, моделює процеси, прояснює крайові випадки й фіксує, що означає «готово», до коду (і поки він змінюється).",
            de: "Ein Business Analyst brückt Business und Engineering: Anforderungen sammeln, Prozesse modellieren, Randfälle klären und dokumentieren, was „fertig“ heißt — bevor Code geschrieben wird und während er sich ändert.",
      fr: "Un Business Analyst fait le pont entre métier et ingénierie : recueillir les exigences, modéliser les processus, clarifier les cas limites et documenter ce que « terminé » veut dire — avant le code, et pendant qu’il change.",
      es: "Un Business Analyst tiende el puente entre negocio e ingeniería: recoger requisitos, modelar procesos, aclarar casos límite y documentar qué significa «hecho» — antes del código y mientras cambia.",
      it: "Un Business Analyst fa da ponte tra business ed engineering: raccoglie requisiti, modella processi, chiarisce i casi limite e documenta cosa significa «fatto» — prima del codice e mentre cambia.",
      tr: "Bir iş analisti iş ile mühendislik arasında köprüdür: gereksinim toplar, süreçleri modeller, uç durumları netleştirir ve «bitti»nin ne demek olduğunu kod yazılmadan (ve değişirken) belgeler."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Interview stakeholders and map as-is / to-be processes.",
            ua: "Інтерв’ювати стейкхолдерів і мапити процеси «як є» / «як має бути».",
            de: "Stakeholder befragen und Ist-/Soll-Prozesse kartieren.",
      fr: "Interviewer les parties prenantes et cartographier l’as-is / le to-be.",
      es: "Entrevistar a interesados y mapear procesos as-is / to-be.",
      it: "Intervistare gli stakeholder e mappare i processi as-is / to-be.",
      tr: "Paydaşlarla görüşmek ve olduğu gibi / olması gereken süreçleri haritalamak."
          },
          {
            en: "Write requirements, user stories, use cases, and acceptance criteria.",
            ua: "Писати вимоги, юзер-сторі, юзкейси й критерії приймання.",
            de: "Anforderungen, User Stories, Use Cases und Abnahmekriterien schreiben.",
      fr: "Rédiger exigences, user stories, cas d’usage et critères d’acceptation.",
      es: "Escribir requisitos, historias de usuario, casos de uso y criterios de aceptación.",
      it: "Scrivere requisiti, user story, use case e criteri di accettazione.",
      tr: "Gereksinim, kullanıcı hikâyesi, kullanım senaryosu ve kabul ölçütü yazmak."
          },
          {
            en: "Maintain glossaries, rules, and dependency matrices.",
            ua: "Тримати глосарії, правила й матриці залежностей.",
            de: "Glossare, Regeln und Abhängigkeitsmatrizen pflegen.",
      fr: "Tenir glossaires, règles et matrices de dépendances.",
      es: "Mantener glosarios, reglas y matrices de dependencias.",
      it: "Tenere glossari, regole e matrici di dipendenze.",
      tr: "Sözlükleri, kuralları ve bağımlılık matrislerini tutmak."
          },
          {
            en: "Support UAT and validate that delivery matches business intent.",
            ua: "Підтримувати UAT і перевіряти, що поставка збігається з наміром бізнесу.",
            de: "UAT begleiten und prüfen, ob die Lieferung der Geschäftsabsicht entspricht.",
      fr: "Accompagner l’UAT et vérifier que la livraison colle à l’intention métier.",
      es: "Acompañar el UAT y validar que la entrega coincida con la intención de negocio.",
      it: "Supportare l’UAT e validare che la consegna coincida con l’intento di business.",
      tr: "UAT’ye eşlik etmek ve teslimin iş niyetiyle örtüştüğünü doğrulamak."
          },
          {
            en: "Reduce ambiguity that causes rewrites mid-sprint.",
            ua: "Знімати двозначність, через яку в середині спринту все переписують.",
            de: "Mehrdeutigkeit abbauen, die mitten im Sprint zu Rewrites führt.",
      fr: "Réduire l’ambiguïté qui force à tout réécrire au milieu du sprint.",
      es: "Reducir la ambigüedad que obliga a reescribir a mitad de sprint.",
      it: "Ridurre l’ambiguità che fa riscrivere a metà sprint.",
      tr: "Sprint ortasında yeniden yazdıran belirsizliği azaltmak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Requirements engineering, process modeling (BPMN), workshops",
            ua: "Інженерія вимог, моделювання процесів (BPMN), воркшопи",
            de: "Requirements Engineering, Prozessmodellierung (BPMN), Workshops",
      fr: "Ingénierie des exigences, modélisation de processus (BPMN), ateliers",
      es: "Ingeniería de requisitos, modelado de procesos (BPMN), talleres",
      it: "Requirements engineering, modellazione di processi (BPMN), workshop",
      tr: "Gereksinim mühendisliği, süreç modelleme (BPMN), atölyeler"
          },
          {
            en: "Clear writing, facilitation, conflict mediation",
            ua: "Чітке письмо, фасилітація, посередництво в конфліктах",
            de: "Klares Schreiben, Moderation, Konfliktmediation",
      fr: "Écriture claire, facilitation, médiation de conflits",
      es: "Escritura clara, facilitación, mediación de conflictos",
      it: "Scrittura chiara, facilitazione, mediazione dei conflitti",
      tr: "Net yazı, kolaylaştırıcılık, çatışma arabuluculuğu"
          },
          {
            en: "Domain learning speed; SQL/analytics basics are a plus",
            ua: "Швидкість освоєння домену; основи SQL/аналітики — плюс",
            de: "Schnelles Lernen der Domäne; SQL-/Analytics-Grundlagen sind ein Plus",
      fr: "Vitesse d’apprentissage du métier ; bases SQL/analytique en plus",
      es: "Velocidad para aprender el dominio; bases de SQL/analítica son un plus",
      it: "Velocità di apprendimento del dominio; basi di SQL/analytics sono un plus",
      tr: "Alan öğrenme hızı; SQL/analitik temelleri artıdır"
          },
          {
            en: "Working knowledge of agile delivery practices",
            ua: "Робоче знання agile-практик поставки",
            de: "Arbeitswissen über agile Lieferpraktiken",
      fr: "Connaissance opérationnelle des pratiques de livraison agile",
      es: "Conocimiento práctico de la entrega agile",
      it: "Conoscenza operativa delle pratiche di consegna agile",
      tr: "Agile teslim pratiklerinin çalışma bilgisi"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "Enterprise integrations, complex domains (finance, logistics, insurance), or when “everyone understood differently” keeps burning budget.",
            ua: "Корпоративні інтеграції, складні домени (фінанси, логістика, страхування) — або коли «кожен зрозумів по-своєму» далі палить бюджет.",
            de: "Enterprise-Integrationen, komplexe Domänen (Finance, Logistik, Versicherung) — oder wenn „jeder hat es anders verstanden“ weiter Budget verbrennt.",
      fr: "Intégrations d’entreprise, domaines complexes (finance, logistique, assurance) — ou quand « chacun a compris autrement » continue de brûler le budget.",
      es: "Integraciones empresariales, dominios complejos (finanzas, logística, seguros) — o cuando «cada uno lo entendió distinto» sigue quemando presupuesto.",
      it: "Integrazioni enterprise, domini complessi (finanza, logistica, assicurazioni) — o quando «ognuno ha capito diversamente» continua a bruciare budget.",
      tr: "Kurumsal entegrasyonlar, karmaşık alanlar (finans, lojistik, sigorta) — veya «herkes farklı anladı» bütçeyi yakmaya devam ediyorsa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "A good BA makes engineers faster by removing guesswork - not by writing novels nobody reads.",
            ua: "Добрий BA прискорює інженерів, знімаючи здогадки, — а не романами, які ніхто не читає.",
            de: "Ein guter BA macht Engineers schneller, indem er Rätselraten nimmt — nicht durch Romane, die niemand liest.",
      fr: "Un bon BA accélère les ingénieurs en enlevant le flou — pas en écrivant des romans que personne ne lit.",
      es: "Un buen BA hace más rápido a ingeniería quitando conjeturas — no escribiendo novelas que nadie lee.",
      it: "Un buon BA rende più veloci gli ingegneri togliendo le congetture — non scrivendo romanzi che nessuno legge.",
      tr: "İyi bir BA, kimsenin okumadığı romanlar yazarak değil, tahmini kaldırarak mühendisleri hızlandırır."
          }
        ]
      }
    ]
  },
  {
    slug: "data-analyst-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Data Analyst Do? Metrics, Insights, and Decision Support",
      ua: "Чим займається Data Analyst: метрики, інсайти й опора для рішень",
      de: "Was macht ein Data Analyst? Kennzahlen, Einsichten und Entscheidungshilfe",
      fr: "Que fait un Data Analyst ? Métriques, insights et aide à la décision",
      es: "¿Qué hace un Data Analyst? Métricas, hallazgos y apoyo a la decisión",
      it: "Cosa fa un Data Analyst? Metriche, insight e supporto alle decisioni",
      tr: "Data Analyst ne yapar? Metrikler, içgörü ve karar desteği"
    },
    excerpt: {
      en: "Data analysts turn raw data into decisions: dashboards, SQL, experiments, and business storytelling with numbers.",
      ua: "Data Analyst перетворює сирі дані на рішення: дашборди, SQL, експерименти й бізнес-історії числами.",
      de: "Data Analysts machen aus Rohdaten Entscheidungen: Dashboards, SQL, Experimente und Geschichten mit Zahlen.",
      fr: "Le Data Analyst transforme la donnée brute en décisions : tableaux de bord, SQL, expérimentations et récits chiffrés.",
      es: "El Data Analyst convierte datos crudos en decisiones: paneles, SQL, experimentos y relatos de negocio con números.",
      it: "Il Data Analyst trasforma i dati grezzi in decisioni: dashboard, SQL, esperimenti e racconti di business con i numeri.",
      tr: "Data Analyst ham veriyi karara çevirir: panolar, SQL, deneyler ve sayılarla iş hikâyesi."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Data",
        "IT Roles",
        "Analytics"
      ],
      ua: [
        "Кар'єра",
        "Дані",
        "ІТ-ролі",
        "Аналітика"
      ],
      de: [
        "Karriere",
        "Daten",
        "IT-Rollen",
        "Analytics"
      ],
      fr: [
        "Carrière",
        "Data",
        "Métiers IT",
        "Analytique"
      ],
      es: [
        "Carrera",
        "Datos",
        "Roles IT",
        "Analítica"
      ],
      it: [
        "Carriera",
        "Data",
        "Ruoli IT",
        "Analytics"
      ],
      tr: [
        "Kariyer",
        "Veri",
        "IT rolleri",
        "Analitik"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A data analyst helps the business ask better questions and answer them with data: funnels, cohorts, revenue drivers, operational KPIs, and experiment readouts - usually with SQL, BI tools, and clear narratives.",
            ua: "Data Analyst допомагає бізнесу ставити кращі запитання і відповідати даними: воронки, когорти, драйвери виручки, операційні KPI, розбір експериментів — зазвичай SQL, BI і зрозуміла розповідь.",
            de: "Ein Data Analyst hilft dem Business, bessere Fragen zu stellen und sie mit Daten zu beantworten: Funnel, Kohorten, Umsatztreiber, operative KPIs, Experiment-Auswertungen — meist mit SQL, BI und klarer Erzählung.",
      fr: "Un Data Analyst aide le métier à mieux questionner et à répondre par la donnée : tunnels, cohortes, leviers de revenu, KPI ops, lectures d’expériences — souvent SQL, BI et un récit clair.",
      es: "Un Data Analyst ayuda al negocio a preguntar mejor y a responder con datos: embudos, cohortes, palancas de ingreso, KPI operativos y lecturas de experimentos — suele ser SQL, BI y una narración clara.",
      it: "Un Data Analyst aiuta il business a fare domande migliori e a rispondere con i dati: funnel, coorti, leve di ricavo, KPI operativi e letture degli esperimenti — di solito SQL, BI e un racconto chiaro.",
      tr: "Bir Data Analyst işin daha iyi soru sormasına ve veriyle cevaplamasına yardım eder: huniler, kohortlar, gelir sürücüleri, operasyon KPI’ları, deney okumaları — çoğu zaman SQL, BI ve net bir anlatı."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Define metrics and ensure teams share one source of truth.",
            ua: "Визначати метрики й тримати одну правду для всіх команд.",
            de: "Kennzahlen definieren und eine gemeinsame Wahrheitsquelle halten.",
      fr: "Définir les métriques et tenir une seule source de vérité entre équipes.",
      es: "Definir métricas y que los equipos compartan una sola fuente de verdad.",
      it: "Definire le metriche e tenere una sola fonte di verità tra i team.",
      tr: "Metrikleri tanımlamak ve ekiplerin tek doğruyu paylaşmasını sağlamak."
          },
          {
            en: "Build dashboards and recurring reports for stakeholders.",
            ua: "Збирати дашборди й регулярні звіти для стейкхолдерів.",
            de: "Dashboards und wiederkehrende Reports für Stakeholder bauen.",
      fr: "Construire tableaux de bord et rapports récurrents pour les parties prenantes.",
      es: "Montar paneles e informes periódicos para interesados.",
      it: "Costruire dashboard e report ricorrenti per gli stakeholder.",
      tr: "Paydaşlar için panolar ve yinelenen raporlar kurmak."
          },
          {
            en: "Investigate anomalies and explain “what changed and why.”",
            ua: "Розбирати аномалії і пояснювати «що змінилось і чому».",
            de: "Anomalien untersuchen und erklären, „was sich geändert hat und warum“.",
      fr: "Enquêter sur les anomalies et expliquer « ce qui a changé, et pourquoi ».",
      es: "Investigar anomalías y explicar «qué cambió y por qué».",
      it: "Indagare le anomalie e spiegare «cosa è cambiato e perché».",
      tr: "Anomalileri incelemek ve «ne değişti, neden»i açıklamak."
          },
          {
            en: "Support A/B tests and product/marketing decisions with analysis.",
            ua: "Підтримувати A/B-тести й продуктові/маркетингові рішення аналізом.",
            de: "A/B-Tests und Produkt-/Marketingentscheidungen mit Analyse stützen.",
      fr: "Soutenir les A/B tests et les décisions produit/marketing par l’analyse.",
      es: "Apoyar tests A/B y decisiones de producto/marketing con análisis.",
      it: "Sostenere test A/B e decisioni di product/marketing con l’analisi.",
      tr: "A/B testlerini ve ürün/pazarlama kararlarını analizle desteklemek."
          },
          {
            en: "Partner with engineers on tracking plans and data quality.",
            ua: "Разом з інженерами тримати плани трекінгу і якість даних.",
            de: "Mit Engineers an Tracking-Plänen und Datenqualität zusammenarbeiten.",
      fr: "Travailler avec les ingénieurs sur les plans de tracking et la qualité des données.",
      es: "Aliarse con ingeniería en planes de medición y calidad de datos.",
      it: "Collaborare con gli ingegneri su piani di tracking e qualità dei dati.",
      tr: "Mühendislerle ölçüm planları ve veri kalitesinde ortak çalışmak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "SQL, spreadsheets, BI (Looker/Metabase/Power BI/Tableau)",
            ua: "SQL, таблиці, BI (Looker/Metabase/Power BI/Tableau)",
            de: "SQL, Tabellen, BI (Looker/Metabase/Power BI/Tableau)",
      fr: "SQL, tableurs, BI (Looker/Metabase/Power BI/Tableau)",
      es: "SQL, hojas de cálculo, BI (Looker/Metabase/Power BI/Tableau)",
      it: "SQL, fogli, BI (Looker/Metabase/Power BI/Tableau)",
      tr: "SQL, tablolar, BI (Looker/Metabase/Power BI/Tableau)"
          },
          {
            en: "Statistics basics, experimentation literacy",
            ua: "Основи статистики, грамотність в експериментах",
            de: "Statistik-Grundlagen, Experiment-Kompetenz",
      fr: "Bases de stats, culture de l’expérimentation",
      es: "Bases de estadística, alfabetización en experimentos",
      it: "Basi di statistica, alfabetizzazione sugli esperimenti",
      tr: "İstatistik temelleri, deney okuryazarlığı"
          },
          {
            en: "Business communication and data storytelling",
            ua: "Бізнес-комунікація і розповідь даними",
            de: "Business-Kommunikation und Geschichten mit Daten",
      fr: "Communication métier et storytelling par la donnée",
      es: "Comunicación de negocio y relato con datos",
      it: "Comunicazione di business e storytelling con i dati",
      tr: "İş iletişimi ve veriyle hikâye anlatımı"
          },
          {
            en: "Python/R for deeper analysis is a strong plus",
            ua: "Python/R для глибшого аналізу — сильний плюс",
            de: "Python/R für tiefere Analysen ist ein starkes Plus",
      fr: "Python/R pour une analyse plus profonde est un vrai plus",
      es: "Python/R para un análisis más hondo es un plus fuerte",
      it: "Python/R per un’analisi più profonda è un plus forte",
      tr: "Daha derin analiz için Python/R güçlü bir artı"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When decisions are gut-feel only, metrics conflict between teams, or growth/product work needs reliable measurement.",
            ua: "Коли рішення лише «на відчуттях», метрики між командами сперечаються, або ріст і продукт потребують надійного вимірювання.",
            de: "Wenn Entscheidungen nur aus dem Bauch kommen, Kennzahlen zwischen Teams kollidieren oder Growth/Produkt verlässliche Messung brauchen.",
      fr: "Quand les décisions sont au feeling, que les métriques se contredisent entre équipes, ou que growth/produit ont besoin d’une mesure fiable.",
      es: "Cuando las decisiones son solo de intuición, las métricas chocan entre equipos o el trabajo de crecimiento/producto necesita medición fiable.",
      it: "Quando le decisioni sono solo di pancia, le metriche si contraddicono tra team o growth/prodotto hanno bisogno di una misura affidabile.",
      tr: "Kararlar yalnızca içgüdüyse, metrikler ekipler arasında çatışıyorsa veya büyüme/ürün güvenilir ölçüm istiyorsa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Analysts do not magically create truth. Without clean events and definitions, dashboards become expensive decoration.",
            ua: "Аналітики не створюють правду магією. Без чистих подій і визначень дашборди стають дорогою прикрасою.",
            de: "Analysten zaubern keine Wahrheit. Ohne saubere Events und Definitionen werden Dashboards teure Dekoration.",
      fr: "Les analystes ne créent pas la vérité par magie. Sans événements propres et définitions, les tableaux de bord deviennent une déco chère.",
      es: "Los analistas no crean verdad por magia. Sin eventos limpios y definiciones, los paneles se vuelven decoración cara.",
      it: "Gli analyst non creano la verità per magia. Senza eventi puliti e definizioni, le dashboard diventano decorazione cara.",
      tr: "Analistler sihirle hakikat yaratmaz. Temiz olaylar ve tanımlar yoksa panolar pahalı süs olur."
          }
        ]
      }
    ]
  },
  {
    slug: "data-engineer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Data Engineer Do? Pipelines, Warehouses, and Reliable Data",
      ua: "Чим займається Data Engineer: конвеєри, сховища й дані, яким можна вірити",
      de: "Was macht ein Data Engineer? Pipelines, Warehouses und verlässliche Daten",
      fr: "Que fait un Data Engineer ? Pipelines, entrepôts et données fiables",
      es: "¿Qué hace un Data Engineer? Pipelines, almacenes y datos de fiar",
      it: "Cosa fa un Data Engineer? Pipeline, warehouse e dati affidabili",
      tr: "Data Engineer ne yapar? Hatlar, depolar ve güvenilir veri"
    },
    excerpt: {
      en: "Data engineers build the plumbing for analytics and ML: ETL/ELT, warehouses, quality checks, and scalable pipelines.",
      ua: "Data Engineer збирає «сантехніку» для аналітики й ML: ETL/ELT, сховища, перевірки якості, масштабовані конвеєри.",
      de: "Data Engineers bauen die Rohrleitungen für Analytics und ML: ETL/ELT, Warehouses, Qualitätschecks, skalierbare Pipelines.",
      fr: "Le Data Engineer pose la plomberie de l’analytique et du ML : ETL/ELT, entrepôts, contrôles qualité, pipelines qui tiennent la charge.",
      es: "El Data Engineer construye la fontanería de analítica y ML: ETL/ELT, almacenes, controles de calidad y pipelines que escalan.",
      it: "Il Data Engineer costruisce l’impianto per analytics e ML: ETL/ELT, warehouse, controlli di qualità e pipeline che scalano.",
      tr: "Data Engineer, analitik ve ML’nin tesisatını kurar: ETL/ELT, depolar, kalite kontrolleri, ölçeklenen hatlar."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Data Engineering",
        "IT Roles",
        "ETL"
      ],
      ua: [
        "Кар'єра",
        "Data Engineering",
        "ІТ-ролі",
        "ETL"
      ],
      de: [
        "Karriere",
        "Data Engineering",
        "IT-Rollen",
        "ETL"
      ],
      fr: [
        "Carrière",
        "Data engineering",
        "Métiers IT",
        "ETL"
      ],
      es: [
        "Carrera",
        "Data engineering",
        "Roles IT",
        "ETL"
      ],
      it: [
        "Carriera",
        "Data engineering",
        "Ruoli IT",
        "ETL"
      ],
      tr: [
        "Kariyer",
        "Veri mühendisliği",
        "IT rolleri",
        "ETL"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A data engineer builds and maintains data infrastructure: ingestion, transformation, warehouses/lakes, orchestration, and quality so analysts and ML teams can trust what they query.",
            ua: "Data Engineer будує й тримає інфраструктуру даних: збір, перетворення, сховища/лейки, оркестрацію й якість — щоб аналітики та ML могли вірити тому, що запитують.",
            de: "Ein Data Engineer baut und betreibt Dateninfrastruktur: Ingestion, Transformation, Warehouses/Lakes, Orchestrierung und Qualität — damit Analysten und ML dem vertrauen können, was sie abfragen.",
      fr: "Un Data Engineer construit et tient l’infra data : ingestion, transformation, entrepôts/lacs, orchestration et qualité — pour que analystes et ML puissent se fier à ce qu’ils interrogent.",
      es: "Un Data Engineer construye y mantiene la infra de datos: ingesta, transformación, almacenes/lagos, orquestación y calidad — para que analistas y ML puedan fiarse de lo que consultan.",
      it: "Un Data Engineer costruisce e tiene l’infra dati: ingestione, trasformazione, warehouse/lake, orchestrazione e qualità — così analyst e ML possono fidarsi di ciò che interrogano.",
      tr: "Bir Data Engineer veri altyapısını kurar ve tutar: içe alma, dönüştürme, depolar/göller, orkestrasyon ve kalite — analistler ve ML sorguladıklarına güvenebilsin."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Design ETL/ELT pipelines and schedule orchestration.",
            ua: "Проєктувати ETL/ELT-конвеєри й розклад оркестрації.",
            de: "ETL/ELT-Pipelines entwerfen und Orchestrierung taktieren.",
      fr: "Concevoir des pipelines ETL/ELT et cadencer l’orchestration.",
      es: "Diseñar pipelines ETL/ELT y programar la orquestación.",
      it: "Progettare pipeline ETL/ELT e cadenzare l’orchestrazione.",
      tr: "ETL/ELT hatlarını tasarlamak ve orkestrasyonu zamanlamak."
          },
          {
            en: "Model warehouse schemas and optimize query performance/cost.",
            ua: "Моделювати схеми сховища й оптимізувати швидкість/вартість запитів.",
            de: "Warehouse-Schemata modellieren und Query-Tempo/Kosten optimieren.",
      fr: "Modéliser les schémas d’entrepôt et optimiser perf/coût des requêtes.",
      es: "Modelar esquemas de almacén y optimizar rendimiento/coste de consultas.",
      it: "Modellare gli schemi del warehouse e ottimizzare prestazioni/costo delle query.",
      tr: "Depo şemalarını modellemek, sorgu hızını/maliyetini iyileştirmek."
          },
          {
            en: "Implement data quality tests, lineage, and monitoring.",
            ua: "Завести тести якості даних, лінедж і моніторинг.",
            de: "Datenqualitätstests, Lineage und Monitoring umsetzen.",
      fr: "Mettre en place tests de qualité, lignage et supervision.",
      es: "Implantar tests de calidad, linaje y monitorización.",
      it: "Mettere in piedi test di qualità, lineage e monitoraggio.",
      tr: "Veri kalite testleri, soy ve izlemeyi kurmak."
          },
          {
            en: "Integrate sources: product DBs, events, SaaS APIs, files.",
            ua: "Підключати джерела: продуктові бази, події, SaaS API, файли.",
            de: "Quellen anbinden: Produktdatenbanken, Events, SaaS-APIs, Dateien.",
      fr: "Brancher les sources : bases produit, événements, API SaaS, fichiers.",
      es: "Integrar fuentes: bases de producto, eventos, APIs SaaS, archivos.",
      it: "Integrare le fonti: DB di prodotto, eventi, API SaaS, file.",
      tr: "Kaynakları bağlamak: ürün veritabanları, olaylar, SaaS API’leri, dosyalar."
          },
          {
            en: "Partner with analytics/ML on reliable datasets and SLAs.",
            ua: "Разом з аналітикою й ML тримати надійні набори даних і SLA.",
            de: "Mit Analytics/ML an verlässlichen Datensätzen und SLAs zusammenarbeiten.",
      fr: "Travailler avec l’analytique et le ML sur des jeux fiables et des SLA.",
      es: "Aliarse con analítica/ML en conjuntos de fiar y SLA.",
      it: "Collaborare con analytics/ML su dataset affidabili e SLA.",
      tr: "Analitik/ML ile güvenilir veri kümeleri ve SLA’larda ortak çalışmak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "SQL, Python, Spark or similar; dbt is common",
            ua: "SQL, Python, Spark або подібне; dbt — звична річ",
            de: "SQL, Python, Spark oder ähnlich; dbt ist üblich",
      fr: "SQL, Python, Spark ou équivalent ; dbt est courant",
      es: "SQL, Python, Spark o similar; dbt es habitual",
      it: "SQL, Python, Spark o simile; dbt è comune",
      tr: "SQL, Python, Spark veya benzeri; dbt yaygındır"
          },
          {
            en: "Cloud data stacks (BigQuery/Snowflake/Redshift), Airflow etc.",
            ua: "Хмарні data-стеки (BigQuery/Snowflake/Redshift), Airflow тощо",
            de: "Cloud-Data-Stacks (BigQuery/Snowflake/Redshift), Airflow usw.",
      fr: "Stacks data cloud (BigQuery/Snowflake/Redshift), Airflow etc.",
      es: "Stacks de datos en cloud (BigQuery/Snowflake/Redshift), Airflow etc.",
      it: "Stack data in cloud (BigQuery/Snowflake/Redshift), Airflow ecc.",
      tr: "Bulut veri yığınları (BigQuery/Snowflake/Redshift), Airflow vb."
          },
          {
            en: "Data modeling, partitioning, cost control",
            ua: "Моделювання даних, партиціонування, контроль вартості",
            de: "Datenmodellierung, Partitionierung, Kostenkontrolle",
      fr: "Modélisation, partitionnement, maîtrise des coûts",
      es: "Modelado de datos, particionado, control de coste",
      it: "Modellazione dati, partizionamento, controllo dei costi",
      tr: "Veri modelleme, bölümlendirme, maliyet kontrolü"
          },
          {
            en: "Software engineering hygiene: tests, CI, observability",
            ua: "Інженерна гігієна: тести, CI, спостережуваність",
            de: "Engineering-Hygiene: Tests, CI, Observability",
      fr: "Hygiène d’ingénierie : tests, CI, observabilité",
      es: "Higiene de ingeniería: tests, CI, observabilidad",
      it: "Igiene engineering: test, CI, observability",
      tr: "Yazılım mühendisliği hijyeni: test, CI, gözlemlenebilirlik"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When spreadsheets and ad-hoc exports break, pipelines fail silently, or every dashboard uses a different definition of “active user.”",
            ua: "Коли таблиці й разові експорти ламаються, конвеєри тихо падають, або кожен дашборд має своє визначення «активного користувача».",
            de: "Wenn Tabellen und Ad-hoc-Exporte brechen, Pipelines still scheitern oder jedes Dashboard „aktiven Nutzer“ anders definiert.",
      fr: "Quand tableurs et exports ad hoc cassent, que les pipelines meurent en silence, ou que chaque tableau de bord a sa définition d’« utilisateur actif ».",
      es: "Cuando las hojas y los exports ad hoc se rompen, los pipelines fallan en silencio o cada panel define distinto a un «usuario activo».",
      it: "Quando fogli ed export ad hoc si rompono, le pipeline falliscono in silenzio o ogni dashboard definisce diversamente l’«utente attivo».",
      tr: "Tablolar ve anlık dışa aktarımlar kırılıyorsa, hatlar sessizce düşüyorsa veya her pano «aktif kullanıcı»yı başka tanımlıyorsa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Without data engineering, AI and analytics projects stall on messy inputs - not on model quality.",
            ua: "Без data engineering проєкти AI й аналітики буксують на брудному вході — а не на якості моделі.",
            de: "Ohne Data Engineering bleiben KI- und Analytics-Projekte an schmutzigen Inputs hängen — nicht an der Modellqualität.",
      fr: "Sans data engineering, les projets IA et analytique calent sur des entrées sales — pas sur la qualité du modèle.",
      es: "Sin data engineering, los proyectos de IA y analítica se atascan en entradas sucias — no en la calidad del modelo.",
      it: "Senza data engineering, i progetti di AI e analytics si bloccano su input sporchi — non sulla qualità del modello.",
      tr: "Data engineering olmadan AI ve analitik projeleri model kalitesinde değil, kirli girdide takılır."
          }
        ]
      }
    ]
  },
  {
    slug: "data-scientist-ml-engineer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Do Data Scientists and ML Engineers Do? Models That Reach Production",
      ua: "Чим займаються Data Scientist і ML Engineer: моделі, які доходять до продакшену",
      de: "Was machen Data Scientists und ML Engineers? Modelle, die den Produktivbetrieb erreichen",
      fr: "Que font Data Scientist et ML Engineer ? Des modèles qui arrivent en production",
      es: "¿Qué hacen Data Scientist y ML Engineer? Modelos que llegan a producción",
      it: "Cosa fanno Data Scientist e ML Engineer? Modelli che arrivano in produzione",
      tr: "Data Scientist ve ML Engineer ne yapar? Canlıya ulaşan modeller"
    },
    excerpt: {
      en: "Data scientists explore and model; ML engineers productionize. Overlaps, differences, and when each role pays off.",
      ua: "Data Scientist досліджує й моделює; ML Engineer доводить до продакшену. Перетини, відмінності і коли кожна роль окупається.",
      de: "Data Scientists explorieren und modellieren; ML Engineers bringen es in den Produktivbetrieb. Überlappungen, Unterschiede und wann sich welche Rolle lohnt.",
      fr: "Le Data Scientist explore et modélise ; le ML Engineer industrialise. Recouvrements, différences, et quand chaque rôle paie.",
      es: "El Data Scientist explora y modela; el ML Engineer lleva a producción. Solapes, diferencias y cuándo cada rol rinde.",
      it: "Il Data Scientist esplora e modella; l’ML Engineer porta in produzione. Sovrapposizioni, differenze e quando ciascun ruolo rende.",
      tr: "Data Scientist keşfeder ve modeller; ML Engineer canlıya alır. örtüşmeler, farklar ve her rolün ne zaman karşılığını verdiği."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Machine Learning",
        "IT Roles",
        "AI",
        "Data Science"
      ],
      ua: [
        "Кар'єра",
        "Machine Learning",
        "ІТ-ролі",
        "AI",
        "Data Science"
      ],
      de: [
        "Karriere",
        "Machine Learning",
        "IT-Rollen",
        "KI",
        "Data Science"
      ],
      fr: [
        "Carrière",
        "Machine learning",
        "Métiers IT",
        "IA",
        "Data science"
      ],
      es: [
        "Carrera",
        "Machine learning",
        "Roles IT",
        "IA",
        "Data science"
      ],
      it: [
        "Carriera",
        "Machine learning",
        "Ruoli IT",
        "AI",
        "Data science"
      ],
      tr: [
        "Kariyer",
        "Makine öğrenmesi",
        "IT rolleri",
        "Yapay zeka",
        "Veri bilimi"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A data scientist finds signal in data and prototypes models that predict or classify. An ML engineer turns promising models into reliable production systems: training pipelines, serving, monitoring, and rollback. In smaller teams one person may cover both.",
            ua: "Data Scientist шукає сигнал у даних і прототипує моделі, що прогнозують чи класифікують. ML Engineer перетворює перспективні моделі на надійні продакшен-системи: навчання, сервінг, моніторинг, відкат. У малих командах одна людина може закривати обидва.",
            de: "Ein Data Scientist findet Signal in Daten und prototypt Modelle, die vorhersagen oder klassifizieren. Ein ML Engineer macht daraus verlässliche Produktivsysteme: Trainingspipelines, Serving, Monitoring, Rollback. In kleinen Teams trägt oft eine Person beides.",
      fr: "Un Data Scientist trouve le signal dans la donnée et prototyple des modèles qui prédisent ou classent. Un ML Engineer en fait des systèmes de production fiables : pipelines d’entraînement, serving, supervision, rollback. En petite équipe, une personne peut porter les deux.",
      es: "Un Data Scientist encuentra señal en los datos y prototipa modelos que predicen o clasifican. Un ML Engineer convierte modelos prometedores en sistemas de producción fiables: pipelines de entrenamiento, serving, monitorización y rollback. En equipos pequeños una persona puede cubrir ambos.",
      it: "Un Data Scientist trova il segnale nei dati e prototipa modelli che predicono o classificano. Un ML Engineer trasforma modelli promettenti in sistemi di produzione affidabili: pipeline di training, serving, monitoraggio e rollback. Nei team piccoli una persona può coprire entrambi.",
      tr: "Bir Data Scientist veride sinyal bulur, tahmin veya sınıflandırma modellerini prototipler. Bir ML Engineer umut vadeden modelleri güvenilir canlı sistemlere çevirir: eğitim hatları, serving, izleme, geri alma. Küçük ekiplerde bir kişi ikisini de kapatabilir."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Frame ML problems, prepare features, train and evaluate models.",
            ua: "Формулювати ML-задачі, готувати фічі, навчати й оцінювати моделі.",
            de: "ML-Probleme rahmen, Features vorbereiten, Modelle trainieren und bewerten.",
      fr: "Cadre les problèmes ML, préparer les features, entraîner et évaluer les modèles.",
      es: "Enmarcar problemas de ML, preparar features, entrenar y evaluar modelos.",
      it: "Inquadrare problemi ML, preparare le feature, addestrare e valutare i modelli.",
      tr: "ML problemlerini çerçevelemek, öznitelik hazırlamak, modelleri eğitip değerlendirmek."
          },
          {
            en: "Run experiments and communicate uncertainty honestly.",
            ua: "Ганяти експерименти й чесно говорити про невизначеність.",
            de: "Experimente fahren und Unsicherheit ehrlich kommunizieren.",
      fr: "Mener des expériences et parler honnêtement de l’incertitude.",
      es: "Correr experimentos y comunicar la incertidumbre con honestidad.",
      it: "Correre esperimenti e comunicare l’incertezza con onestà.",
      tr: "Deneyler yürütmek ve belirsizliği dürüstçe anlatmak."
          },
          {
            en: "Deploy model services, batch jobs, and feature pipelines (ML Eng).",
            ua: "Викладати модельні сервіси, батч-джоби й фіча-конвеєри (ML Eng).",
            de: "Modelldienste, Batch-Jobs und Feature-Pipelines ausliefern (ML Eng).",
      fr: "Déployer services de modèles, jobs batch et pipelines de features (ML Eng).",
      es: "Desplegar servicios de modelo, jobs por lotes y pipelines de features (ML Eng).",
      it: "Rilasciare servizi di modello, job batch e pipeline di feature (ML Eng).",
      tr: "Model servisleri, toplu işler ve öznitelik hatlarını yayınlamak (ML Eng)."
          },
          {
            en: "Monitor drift, latency, cost, and business impact after launch.",
            ua: "Після запуску стежити за дрифтом, затримкою, вартістю й бізнес-ефектом.",
            de: "Nach dem Launch Drift, Latenz, Kosten und Business-Wirkung überwachen.",
      fr: "Après le lancement, surveiller drift, latence, coût et effet business.",
      es: "Tras el lanzamiento, vigilar drift, latencia, coste e impacto de negocio.",
      it: "Dopo il lancio, monitorare drift, latenza, costo e impatto di business.",
      tr: "Lansmandan sonra sapma, gecikme, maliyet ve iş etkisini izlemek."
          },
          {
            en: "Collaborate with product on use cases where ML beats rules.",
            ua: "Разом із продуктом обирати кейси, де ML б’є правила.",
            de: "Mit Produkt Use Cases wählen, in denen ML Regeln schlägt.",
      fr: "Avec le produit, choisir les cas où le ML bat les règles.",
      es: "Con producto, elegir casos en los que ML gana a las reglas.",
      it: "Col product, scegliere i casi in cui l’ML batte le regole.",
      tr: "Ürünle birlikte ML’nin kuralları yendiği kullanım yerlerini seçmek."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Python, statistics/ML libraries, experiment tracking",
            ua: "Python, бібліотеки статистики/ML, трекінг експериментів",
            de: "Python, Statistik-/ML-Bibliotheken, Experiment-Tracking",
      fr: "Python, bibliothèques stats/ML, suivi d’expériences",
      es: "Python, bibliotecas de estadística/ML, seguimiento de experimentos",
      it: "Python, librerie di statistica/ML, tracking degli esperimenti",
      tr: "Python, istatistik/ML kütüphaneleri, deney takibi"
          },
          {
            en: "For ML Eng: serving, containers, MLOps, data pipelines",
            ua: "Для ML Eng: сервінг, контейнери, MLOps, data-конвеєри",
            de: "Für ML Eng: Serving, Container, MLOps, Datenpipelines",
      fr: "Pour le ML Eng : serving, conteneurs, MLOps, pipelines data",
      es: "Para ML Eng: serving, contenedores, MLOps, pipelines de datos",
      it: "Per l’ML Eng: serving, container, MLOps, pipeline dati",
      tr: "ML Eng için: serving, konteynerler, MLOps, veri hatları"
          },
          {
            en: "Strong SQL and data sense; domain framing",
            ua: "Сильний SQL і чуття даних; вміння ставити задачу в домені",
            de: "Starkes SQL und Dateninstinkt; Domäne rahmen können",
      fr: "SQL solide et sens de la donnée ; cadrer le métier",
      es: "SQL fuerte y olfato de datos; enmarcar el dominio",
      it: "SQL solido e senso dei dati; inquadrare il dominio",
      tr: "Güçlü SQL ve veri hissi; alanı çerçevelemek"
          },
          {
            en: "For LLM apps: evaluation, RAG, guardrails, cost control",
            ua: "Для LLM-застосунків: оцінювання, RAG, огорожі, контроль вартості",
            de: "Für LLM-Apps: Evaluation, RAG, Guardrails, Kostenkontrolle",
      fr: "Pour les apps LLM : évaluation, RAG, garde-fous, maîtrise des coûts",
      es: "Para apps LLM: evaluación, RAG, guardrails, control de coste",
      it: "Per le app LLM: valutazione, RAG, guardrail, controllo dei costi",
      tr: "LLM uygulamaları için: değerlendirme, RAG, korkuluklar, maliyet kontrolü"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When rules and dashboards are not enough - recommendations, forecasting, fraud, ranking, or LLM features that must be evaluated and operated, not demoed once.",
            ua: "Коли правил і дашбордів уже мало — рекомендації, прогнози, фрод, ранжування або LLM-функції, які треба оцінювати й експлуатувати, а не один раз показати на демо.",
            de: "Wenn Regeln und Dashboards nicht reichen — Empfehlungen, Forecasts, Betrug, Ranking oder LLM-Funktionen, die bewertet und betrieben werden müssen, nicht einmal demoen.",
      fr: "Quand règles et tableaux de bord ne suffisent plus : reco, prévision, fraude, ranking, ou des fonctions LLM à évaluer et exploiter — pas à démo une fois.",
      es: "Cuando reglas y paneles no bastan: recomendaciones, previsión, fraude, ranking o funciones LLM que hay que evaluar y operar, no demos una vez.",
      it: "Quando regole e dashboard non bastano: raccomandazioni, forecast, frode, ranking o funzioni LLM da valutare ed esercire — non da mostrare una volta.",
      tr: "Kurallar ve panolar yetmiyorsa — öneriler, tahmin, dolandırıcılık, sıralama veya bir kez demo değil, değerlendirilip işletilmesi gereken LLM özellikleri."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "The expensive failure mode is a notebook that never becomes a monitored service. Hire for the path to production, not only accuracy slides.",
            ua: "Дорогий провал — ноутбук, який ніколи не стає сервісом з моніторингом. Наймайте під шлях до продакшену, не лише під слайди з accuracy.",
            de: "Der teure Fehlschlag ist ein Notebook, das nie ein überwachter Dienst wird. Stellen Sie für den Weg in den Produktivbetrieb ein, nicht nur für Accuracy-Folien.",
      fr: "L’échec cher, c’est un notebook qui ne devient jamais un service supervisé. Recrutez pour le chemin vers la production, pas seulement pour des slides d’accuracy.",
      es: "El fallo caro es un notebook que nunca llega a ser un servicio monitorizado. Contrate para el camino a producción, no solo para diapositivas de accuracy.",
      it: "Il fallimento caro è un notebook che non diventa mai un servizio monitorato. Assumete per il percorso verso la produzione, non solo per slide di accuracy.",
      tr: "Pahalı başarısızlık, izlenen bir servis olmayan defterdir. Yalnızca accuracy slaytları için değil, canlıya giden yol için işe alın."
          }
        ]
      }
    ]
  },
  {
    slug: "ai-engineer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does an AI Engineer Do in 2026? LLM Apps, Agents, and Evaluation",
      ua: "Чим займається AI-інженер у 2026: застосунки на LLM, агенти й оцінювання",
      de: "Was macht ein AI Engineer 2026? LLM-Apps, Agenten und Evaluation",
      fr: "Que fait un AI Engineer en 2026 ? Apps LLM, agents et évaluation",
      es: "¿Qué hace un AI Engineer en 2026? Apps LLM, agentes y evaluación",
      it: "Cosa fa un AI Engineer nel 2026? App LLM, agent e valutazione",
      tr: "2026’da AI mühendisi ne yapar? LLM uygulamaları, ajanlar ve değerlendirme"
    },
    excerpt: {
      en: "AI engineers build production LLM features: prompts, RAG, tools, streaming UX, safety, and cost. How the role differs from classic ML.",
      ua: "AI-інженер збирає LLM-функції в продакшені: промпти, RAG, інструменти, стрімінговий UX, безпека, вартість. Чим роль відрізняється від класичного ML.",
      de: "AI Engineers bauen LLM-Funktionen für den Produktivbetrieb: Prompts, RAG, Tools, Streaming-UX, Sicherheit, Kosten. Wie sich die Rolle vom klassischen ML unterscheidet.",
      fr: "L’AI Engineer construit des fonctions LLM en production : prompts, RAG, outils, UX en streaming, sécurité, coût. En quoi le métier diffère du ML classique.",
      es: "El AI Engineer construye funciones LLM en producción: prompts, RAG, herramientas, UX en streaming, seguridad, coste. En qué se diferencia del ML clásico.",
      it: "L’AI Engineer costruisce funzioni LLM in produzione: prompt, RAG, tool, UX in streaming, sicurezza, costo. Come differisce dal ML classico.",
      tr: "AI mühendisi canlı LLM özellikleri kurar: istemler, RAG, araçlar, akan UX, güvenlik, maliyet. Klasik ML’den farkı."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "AI",
        "IT Roles",
        "LLM",
        "Engineering"
      ],
      ua: [
        "Кар'єра",
        "AI",
        "ІТ-ролі",
        "LLM",
        "Інженерія"
      ],
      de: [
        "Karriere",
        "KI",
        "IT-Rollen",
        "LLM",
        "Engineering"
      ],
      fr: [
        "Carrière",
        "IA",
        "Métiers IT",
        "LLM",
        "Ingénierie"
      ],
      es: [
        "Carrera",
        "IA",
        "Roles IT",
        "LLM",
        "Ingeniería"
      ],
      it: [
        "Carriera",
        "AI",
        "Ruoli IT",
        "LLM",
        "Engineering"
      ],
      tr: [
        "Kariyer",
        "Yapay zeka",
        "IT rolleri",
        "LLM",
        "Mühendislik"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "An AI engineer designs and ships applications powered by foundation models: chat assistants, copilots, document Q&A, agents with tools, and workflow automation. The craft is systems engineering around models - not training giant nets from scratch.",
            ua: "AI-інженер проєктує й випускає застосунки на фундаментних моделях: чат-асистенти, копілоти, Q&A по документах, агенти з інструментами, автоматизація процесів. Ремесло — системна інженерія навколо моделей, а не тренування гігантських мереж з нуля.",
            de: "Ein AI Engineer entwirft und liefert Anwendungen auf Foundation Models: Chat-Assistenten, Copiloten, Dokument-Q&A, Agenten mit Tools, Workflow-Automatisierung. Das Handwerk ist Systemengineering um Modelle herum — nicht, riesige Netze von null zu trainieren.",
      fr: "Un AI Engineer conçoit et livre des applications sur des modèles de fondation : assistants chat, copilotes, Q&A documentaire, agents avec outils, automatisation de flux. Le métier, c’est l’ingénierie système autour des modèles — pas d’entraîner des filets géants from scratch.",
      es: "Un AI Engineer diseña y saca aplicaciones sobre modelos de fundamento: asistentes de chat, copilots, Q&A de documentos, agentes con herramientas y automatización de flujos. El oficio es ingeniería de sistemas alrededor de los modelos — no entrenar redes gigantes desde cero.",
      it: "Un AI Engineer progetta e rilascia applicazioni su foundation model: assistenti chat, copilot, Q&A sui documenti, agent con tool, automazione di flussi. Il mestiere è systems engineering intorno ai modelli — non addestrare reti giganti da zero.",
      tr: "Bir AI mühendisi temel modellerle çalışan uygulamalar tasarlar ve çıkarır: sohbet asistanları, yardımcı pilotlar, belge S&C, araçlı ajanlar, iş akışı otomasyonu. Zanaat, sıfırdan dev ağ eğitmek değil — modellerin etrafında sistem mühendisliğidir."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Design prompts, schemas, tool-calling, and RAG architectures.",
            ua: "Проєктувати промпти, схеми, виклик інструментів і RAG-архітектури.",
            de: "Prompts, Schemata, Tool-Calling und RAG-Architekturen entwerfen.",
      fr: "Concevoir prompts, schémas, appels d’outils et architectures RAG.",
      es: "Diseñar prompts, esquemas, llamada de herramientas y arquitecturas RAG.",
      it: "Progettare prompt, schemi, tool-calling e architetture RAG.",
      tr: "İstemler, şemalar, araç çağırma ve RAG mimarileri tasarlamak."
          },
          {
            en: "Build streaming UIs and backend orchestration for LLM calls.",
            ua: "Збирати стрімінгові інтерфейси й бекенд-оркестрацію викликів LLM.",
            de: "Streaming-UIs und Backend-Orchestrierung für LLM-Aufrufe bauen.",
      fr: "Construire des UI en streaming et l’orchestration backend des appels LLM.",
      es: "Montar UIs en streaming y la orquestación backend de llamadas LLM.",
      it: "Costruire UI in streaming e l’orchestrazione backend delle chiamate LLM.",
      tr: "Akan arayüzler ve LLM çağrılarının backend orkestrasyonunu kurmak."
          },
          {
            en: "Implement evaluation harnesses, fallbacks, and safety filters.",
            ua: "Завести рамки оцінювання, запасні шляхи й фільтри безпеки.",
            de: "Evaluations-Harnesses, Fallbacks und Sicherheitsfilter umsetzen.",
      fr: "Mettre en place bancs d’évaluation, replis et filtres de sécurité.",
      es: "Implantar arneses de evaluación, reservas y filtros de seguridad.",
      it: "Mettere in piedi harness di valutazione, fallback e filtri di sicurezza.",
      tr: "Değerlendirme düzenekleri, yedek yollar ve güvenlik süzgeçleri kurmak."
          },
          {
            en: "Control token cost, latency, and provider reliability.",
            ua: "Тримати вартість токенів, затримку й надійність провайдера.",
            de: "Tokenkosten, Latenz und Provider-Zuverlässigkeit im Griff behalten.",
      fr: "Maîtriser le coût des tokens, la latence et la fiabilité du fournisseur.",
      es: "Controlar coste de tokens, latencia y fiabilidad del proveedor.",
      it: "Tenere costo dei token, latenza e affidabilità del provider.",
      tr: "Token maliyetini, gecikmeyi ve sağlayıcı güvenilirliğini kontrol etmek."
          },
          {
            en: "Integrate AI into existing product flows with measurable ROI.",
            ua: "Вплітати AI в наявні продуктові сценарії з вимірюваною віддачею.",
            de: "KI in bestehende Produktabläufe mit messbarem Ertrag einbinden.",
      fr: "Intégrer l’IA dans les parcours produit existants, avec un ROI mesurable.",
      es: "Integrar IA en flujos de producto existentes, con retorno medible.",
      it: "Integrare l’AI nei flussi di prodotto esistenti, con un ritorno misurabile.",
      tr: "AI’yi mevcut ürün akışlarına ölçülebilir getiriyle sokmak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Strong software engineering (often TypeScript/Python) + API design",
            ua: "Сильна інженерія ПЗ (часто TypeScript/Python) + дизайн API",
            de: "Starkes Software Engineering (oft TypeScript/Python) + API-Design",
      fr: "Ingénierie logicielle solide (souvent TypeScript/Python) + conception d’API",
      es: "Ingeniería de software fuerte (a menudo TypeScript/Python) + diseño de APIs",
      it: "Software engineering solido (spesso TypeScript/Python) + design delle API",
      tr: "Güçlü yazılım mühendisliği (çoğu zaman TypeScript/Python) + API tasarımı"
          },
          {
            en: "Prompting, structured outputs, vector search, agent patterns",
            ua: "Промптинг, структуровані відповіді, векторний пошук, патерни агентів",
            de: "Prompting, strukturierte Outputs, Vektorsuche, Agentenmuster",
      fr: "Prompting, sorties structurées, recherche vectorielle, motifs d’agents",
      es: "Prompting, salidas estructuradas, búsqueda vectorial, patrones de agentes",
      it: "Prompting, output strutturati, ricerca vettoriale, pattern di agent",
      tr: "İsteme, yapılandırılmış çıktılar, vektör arama, ajan kalıpları"
          },
          {
            en: "Product sense for where AI helps vs where rules win",
            ua: "Продуктове чуття: де AI допомагає, а де виграють правила",
            de: "Produktsinn: wo KI hilft und wo Regeln gewinnen",
      fr: "Sens produit : où l’IA aide, où les règles gagnent",
      es: "Olfato de producto: dónde ayuda la IA y dónde ganan las reglas",
      it: "Senso di prodotto: dove l’AI aiuta e dove vincono le regole",
      tr: "Ürün hissi: AI’nin yardım ettiği ve kuralların kazandığı yer"
          },
          {
            en: "Observability for LLM apps: traces, eval sets, human review",
            ua: "Спостережуваність LLM-застосунків: трейси, набори оцінювання, людське рев’ю",
            de: "Observability für LLM-Apps: Traces, Eval-Sets, menschliches Review",
      fr: "Observabilité des apps LLM : traces, jeux d’éval, revue humaine",
      es: "Observabilidad de apps LLM: trazas, conjuntos de evaluación, revisión humana",
      it: "Observability delle app LLM: trace, set di eval, revisione umana",
      tr: "LLM uygulamalarında gözlemlenebilirlik: izler, değerlendirme kümeleri, insan incelemesi"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When you want AI features in a real product - not a ChatGPT tab - with quality bars, security, and unit economics that survive growth.",
            ua: "Коли AI-функції мають жити в реальному продукті, а не у вкладці ChatGPT, — з планкою якості, безпекою й економікою, яка витримує ріст.",
            de: "Wenn KI-Funktionen in einem echten Produkt leben sollen — nicht in einem ChatGPT-Tab — mit Qualitätsleiste, Sicherheit und Stückkosten, die Wachstum aushalten.",
      fr: "Quand vous voulez des fonctions IA dans un vrai produit — pas un onglet ChatGPT — avec une barre de qualité, de la sécu et une économie unitaire qui tient la croissance.",
      es: "Cuando quiere funciones de IA en un producto de verdad — no en una pestaña de ChatGPT — con listón de calidad, seguridad y economía unitaria que aguante el crecimiento.",
      it: "Quando volete funzioni AI in un prodotto vero — non in una scheda ChatGPT — con un’asticella di qualità, security ed economia unitaria che regga la crescita.",
      tr: "AI özelliklerini ChatGPT sekmesinde değil, gerçek bir üründe istiyorsanız — kalite çıtası, güvenlik ve büyümeyi taşıyan birim ekonomiyle."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "In 2026, AI engineering is often closest to full-stack product work with an evaluation mindset. Demos are cheap; reliable assistants are not.",
            ua: "У 2026 AI-інженерія часто найближча до full-stack продуктової роботи з головою на оцінювання. Демо дешеві; надійні асистенти — ні.",
            de: "2026 liegt AI Engineering oft am nächsten an Full-Stack-Produktarbeit mit Evaluationshaltung. Demos sind billig; verlässliche Assistenten nicht.",
      fr: "En 2026, l’ingénierie IA est souvent le plus proche d’un travail produit full-stack, avec un esprit d’évaluation. Les démos sont bon marché ; les assistants fiables, non.",
      es: "En 2026, la ingeniería de IA suele estar más cerca de un trabajo de producto full-stack con mentalidad de evaluación. Las demos son baratas; los asistentes fiables, no.",
      it: "Nel 2026 l’AI engineering è spesso il più vicino a un lavoro di prodotto full-stack, con mentalità di valutazione. Le demo sono economiche; gli assistenti affidabili no.",
      tr: "2026’da AI mühendisliği çoğu zaman değerlendirme zihniyetiyle full-stack ürün işine en yakındır. Demolar ucuzdur; güvenilir asistanlar değil."
          }
        ]
      }
    ]
  },
  {
    slug: "cybersecurity-specialist-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Cybersecurity Specialist Do? Protecting Products and Data",
      ua: "Чим займається спеціаліст із кібербезпеки: захист продуктів і даних",
      de: "Was macht ein Cybersicherheitsspezialist? Produkte und Daten schützen",
      fr: "Que fait un spécialiste cybersécurité ? Protéger produits et données",
      es: "¿Qué hace un especialista en ciberseguridad? Proteger productos y datos",
      it: "Cosa fa uno specialista di cybersecurity? Proteggere prodotti e dati",
      tr: "Siber güvenlik uzmanı ne yapar? Ürünleri ve veriyi korumak"
    },
    excerpt: {
      en: "Security specialists reduce breach risk: assessments, hardening, monitoring, and incident response. When to hire security expertise.",
      ua: "Безпека знижує ризик злому: оцінки, укріплення, моніторинг, реакція на інциденти. Коли наймати експертизу.",
      de: "Security senkt Einbruchsrisiko: Bewertungen, Härten, Monitoring, Incident Response. Wann Sie Security-Expertise einstellen sollten.",
      fr: "La sécu réduit le risque de faille : évaluations, durcissement, supervision, réponse aux incidents. Quand recruter cette expertise.",
      es: "Seguridad reduce el riesgo de brecha: evaluaciones, endurecimiento, monitorización y respuesta a incidentes. Cuándo contratar esta pericia.",
      it: "La security riduce il rischio di violazione: valutazioni, indurimento, monitoraggio e risposta agli incident. Quando assumere questa competenza.",
      tr: "Güvenlik ihlal riskini düşürür: değerlendirme, sıkılaştırma, izleme, olay müdahalesi. Bu uzmanlığı ne zaman işe almalısınız."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Cybersecurity",
        "IT Roles",
        "Security"
      ],
      ua: [
        "Кар'єра",
        "Кібербезпека",
        "ІТ-ролі",
        "Безпека"
      ],
      de: [
        "Karriere",
        "Cybersicherheit",
        "IT-Rollen",
        "Sicherheit"
      ],
      fr: [
        "Carrière",
        "Cybersécurité",
        "Métiers IT",
        "Sécurité"
      ],
      es: [
        "Carrera",
        "Ciberseguridad",
        "Roles IT",
        "Seguridad"
      ],
      it: [
        "Carriera",
        "Cybersecurity",
        "Ruoli IT",
        "Security"
      ],
      tr: [
        "Kariyer",
        "Siber güvenlik",
        "IT rolleri",
        "Güvenlik"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A cybersecurity specialist protects systems and data from misuse: vulnerabilities, misconfigurations, phishing, identity abuse, and supply-chain risk. Titles vary (AppSec, SecOps, pentester, GRC), but the mission is reducing real-world risk.",
            ua: "Спеціаліст із кібербезпеки захищає системи й дані від зловживання: вразливості, криві конфіги, фішинг, зловживання ідентичністю, ризик ланцюга постачання. Назви різні (AppSec, SecOps, пентестер, GRC), місія одна — знизити реальний ризик.",
            de: "Ein Cybersicherheitsspezialist schützt Systeme und Daten vor Missbrauch: Schwachstellen, Fehlkonfigurationen, Phishing, Identitätsmissbrauch, Lieferkettenrisiko. Titel variieren (AppSec, SecOps, Pentester, GRC), die Mission ist, reales Risiko zu senken.",
      fr: "Un spécialiste cybersécurité protège systèmes et données contre l’abus : failles, mauvaises configs, phishing, abus d’identité, risque de chaîne d’approvisionnement. Les titres varient (AppSec, SecOps, pentester, GRC), la mission est de réduire le risque réel.",
      es: "Un especialista en ciberseguridad protege sistemas y datos del abuso: vulnerabilidades, malas configs, phishing, abuso de identidad y riesgo de cadena de suministro. Los títulos varían (AppSec, SecOps, pentester, GRC); la misión es bajar el riesgo real.",
      it: "Uno specialista di cybersecurity protegge sistemi e dati dall’abuso: vulnerabilità, config sbagliate, phishing, abuso di identità e rischio di supply chain. I titoli variano (AppSec, SecOps, pentester, GRC); la missione è ridurre il rischio reale.",
      tr: "Bir siber güvenlik uzmanı sistemleri ve veriyi kötüye kullanımdan korur: zaaflar, yanlış yapılandırmalar, oltalama, kimlik suistimali, tedarik zinciri riski. Unvanlar değişir (AppSec, SecOps, pentest, GRC); görev gerçek riski düşürmektir."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Assess risks, run audits/pentests, and prioritize remediations.",
            ua: "Оцінювати ризики, проводити аудити/пентести й пріоритезувати виправлення.",
            de: "Risiken bewerten, Audits/Pentests fahren, Sanierungen priorisieren.",
      fr: "Évaluer les risques, mener audits/pentests et prioriser les correctifs.",
      es: "Evaluar riesgos, correr auditorías/pentests y priorizar remediaciones.",
      it: "Valutare i rischi, fare audit/pentest e prioritizzare le correzioni.",
      tr: "Riskleri değerlendirmek, denetim/pentest yapmak ve düzeltmeleri önceliklendirmek."
          },
          {
            en: "Harden auth, networks, cloud IAM, and secrets management.",
            ua: "Укріплювати автентифікацію, мережі, хмарний IAM і керування секретами.",
            de: "Auth, Netze, Cloud-IAM und Secrets-Management härten.",
      fr: "Durcir auth, réseaux, IAM cloud et gestion des secrets.",
      es: "Endurecer autenticación, redes, IAM en cloud y gestión de secretos.",
      it: "Indurire autenticazione, reti, IAM cloud e gestione dei segreti.",
      tr: "Kimlik doğrulama, ağlar, bulut IAM ve sır yönetimini sıkılaştırmak."
          },
          {
            en: "Monitor alerts, investigate incidents, and lead response.",
            ua: "Стежити за алертами, розслідувати інциденти й вести реакцію.",
            de: "Alerts überwachen, Incidents untersuchen, die Reaktion führen.",
      fr: "Surveiller les alertes, enquêter sur les incidents, piloter la réponse.",
      es: "Vigilar alertas, investigar incidentes y liderar la respuesta.",
      it: "Monitorare gli alert, indagare gli incident e guidare la risposta.",
      tr: "Uyarıları izlemek, olayları araştırmak ve müdahaleyi yönetmek."
          },
          {
            en: "Define secure SDLC practices with engineering teams.",
            ua: "Разом з інженерією визначати практики безпечного циклу розробки.",
            de: "Mit Engineering sichere SDLC-Praktiken definieren.",
      fr: "Définir avec l’ingénierie des pratiques de cycle de développement sécurisé.",
      es: "Definir con ingeniería prácticas de ciclo de desarrollo seguro.",
      it: "Definire con l’engineering pratiche di ciclo di sviluppo sicuro.",
      tr: "Mühendislikle güvenli geliştirme döngüsü pratiklerini tanımlamak."
          },
          {
            en: "Support compliance needs (where relevant) without theater.",
            ua: "Закривати потреби комплаєнсу (де треба) без театру.",
            de: "Compliance-Bedarf (wo nötig) stützen — ohne Theater.",
      fr: "Soutenir les besoins de conformité (là où c’est pertinent) sans théâtre.",
      es: "Cubrir necesidades de cumplimiento (donde aplique) sin teatro.",
      it: "Sostenere i bisogni di compliance (dove serve) senza teatro.",
      tr: "Uyumluluk ihtiyaçlarını (gerektiği yerde) tiyatro yapmadan desteklemek."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Network/OS/cloud security fundamentals, threat modeling",
            ua: "Основи безпеки мереж/ОС/хмари, моделювання загроз",
            de: "Grundlagen von Netz-/OS-/Cloud-Security, Threat Modeling",
      fr: "Fondamentaux sécu réseau/OS/cloud, modélisation des menaces",
      es: "Fundamentos de seguridad de red/SO/cloud, modelado de amenazas",
      it: "Fondamenti di security di rete/OS/cloud, threat modeling",
      tr: "Ağ/OS/bulut güvenliği temelleri, tehdit modelleme"
          },
          {
            en: "AppSec (OWASP), identity, cryptography basics",
            ua: "AppSec (OWASP), ідентичність, основи криптографії",
            de: "AppSec (OWASP), Identität, Kryptografie-Grundlagen",
      fr: "AppSec (OWASP), identité, bases de crypto",
      es: "AppSec (OWASP), identidad, bases de criptografía",
      it: "AppSec (OWASP), identità, basi di crittografia",
      tr: "AppSec (OWASP), kimlik, kriptografi temelleri"
          },
          {
            en: "SIEM/EDR tooling, forensics basics, scripting",
            ua: "Інструменти SIEM/EDR, основи форензіки, скрипти",
            de: "SIEM/EDR-Tools, Forensik-Grundlagen, Scripting",
      fr: "Outils SIEM/EDR, bases de forensics, scripts",
      es: "Herramientas SIEM/EDR, bases de forense, scripting",
      it: "Tool SIEM/EDR, basi di forensics, scripting",
      tr: "SIEM/EDR araçları, adli bilişim temelleri, betik"
          },
          {
            en: "Clear risk communication to non-security stakeholders",
            ua: "Зрозуміла розмова про ризик із тими, хто не в безпеці",
            de: "Risiko klar an Nicht-Security-Stakeholder kommunizieren",
      fr: "Parler du risque clairement à ceux qui ne sont pas sécu",
      es: "Comunicar el riesgo con claridad a quienes no son de seguridad",
      it: "Comunicare il rischio con chiarezza a chi non è security",
      tr: "Güvenlikçi olmayan paydaşlara riski net anlatmak"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "Handling sensitive data, payments, healthcare, public APIs, or after growth makes “we’ll secure it later” an existential risk.",
            ua: "Коли є чутливі дані, платежі, медицина, публічні API — або ріст уже зробив «потім захистимо» екзистенційним ризиком.",
            de: "Bei sensiblen Daten, Zahlungen, Gesundheit, öffentlichen APIs — oder wenn Wachstum „sichern wir später“ zum existenziellen Risiko macht.",
      fr: "Dès qu’il y a des données sensibles, des paiements, de la santé, des API publiques — ou que la croissance a rendu « on sécurisera plus tard » existentiel.",
      es: "Cuando hay datos sensibles, pagos, salud, APIs públicas — o el crecimiento ya hizo existencial el «lo aseguramos luego».",
      it: "Quando ci sono dati sensibili, pagamenti, sanità, API pubbliche — o la crescita ha reso esistenziale il «lo mettiamo in sicurezza dopo».",
      tr: "Hassas veri, ödeme, sağlık, kamuya açık API varsa — veya büyüme «sonra güvenceye alırız»ı varoluşsal risk yaptıysa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Security that only writes policies fails. Security that partners with builders and measures residual risk succeeds.",
            ua: "Безпека, яка лише пише політики, провалюється. Безпека, яка працює з тими, хто будує, і міряє залишковий ризик, — працює.",
            de: "Security, die nur Policies schreibt, scheitert. Security, die mit den Bauenden partnerschaftlich arbeitet und Restrisiko misst, gelingt.",
      fr: "Une sécu qui n’écrit que des politiques échoue. Une sécu qui s’allie aux bâtisseurs et mesure le risque résiduel réussit.",
      es: "La seguridad que solo escribe políticas fracasa. La que se alía con quien construye y mide el riesgo residual, funciona.",
      it: "La security che scrive solo policy fallisce. Quella che fa coppia con chi costruisce e misura il rischio residuo, funziona.",
      tr: "Yalnızca politika yazan güvenlik başarısız olur. Kuranlarla ortak olup kalan riski ölçen güvenlik başarır."
          }
        ]
      }
    ]
  },
  {
    slug: "system-administrator-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a System Administrator Do? Servers, Access, and Uptime",
      ua: "Чим займається системний адміністратор: сервери, доступи й аптайм",
      de: "Was macht ein Systemadministrator? Server, Zugänge und Uptime",
      fr: "Que fait un administrateur système ? Serveurs, accès et disponibilité",
      es: "¿Qué hace un administrador de sistemas? Servidores, accesos y tiempo en pie",
      it: "Cosa fa un sistemista? Server, accessi e uptime",
      tr: "Sistem yöneticisi ne yapar? Sunucular, erişim ve ayakta kalma"
    },
    excerpt: {
      en: "Sysadmins keep infrastructure running: servers, accounts, backups, updates. How the role relates to DevOps and cloud engineering.",
      ua: "Сисадмін тримає інфраструктуру живою: сервери, обліковки, бекапи, оновлення. Як роль стикується з DevOps і хмарною інженерією.",
      de: "Sysadmins halten Infrastruktur am Laufen: Server, Konten, Backups, Updates. Wie die Rolle zu DevOps und Cloud Engineering steht.",
      fr: "Le sysadmin tient l’infra : serveurs, comptes, sauvegardes, mises à jour. Comment le rôle se situe vis-à-vis du DevOps et du cloud.",
      es: "El sysadmin mantiene la infra en pie: servidores, cuentas, copias, actualizaciones. Cómo se relaciona el rol con DevOps e ingeniería cloud.",
      it: "Il sysadmin tiene in piedi l’infra: server, account, backup, aggiornamenti. Come il ruolo sta rispetto a DevOps e cloud engineering.",
      tr: "Sistem yöneticisi altyapıyı ayakta tutar: sunucular, hesaplar, yedekler, güncellemeler. Rolün DevOps ve bulut mühendisliğiyle ilişkisi."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "SysAdmin",
        "IT Roles",
        "Infrastructure"
      ],
      ua: [
        "Кар'єра",
        "SysAdmin",
        "ІТ-ролі",
        "Інфраструктура"
      ],
      de: [
        "Karriere",
        "SysAdmin",
        "IT-Rollen",
        "Infrastruktur"
      ],
      fr: [
        "Carrière",
        "SysAdmin",
        "Métiers IT",
        "Infrastructure"
      ],
      es: [
        "Carrera",
        "SysAdmin",
        "Roles IT",
        "Infraestructura"
      ],
      it: [
        "Carriera",
        "SysAdmin",
        "Ruoli IT",
        "Infrastruttura"
      ],
      tr: [
        "Kariyer",
        "SysAdmin",
        "IT rolleri",
        "Altyapı"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A system administrator operates and maintains IT infrastructure: servers, workstations, directories, backups, updates, and user access. In cloud-native companies parts of this merge into DevOps/SRE - but classic sysadmin work still exists wherever systems must stay up.",
            ua: "Системний адміністратор експлуатує ІТ-інфраструктуру: сервери, робочі станції, директорії, бекапи, оновлення, доступи. У cloud-native компаніях частина цього зливається з DevOps/SRE — але класична сисадмінська робота лишається всюди, де системи мають стояти.",
            de: "Ein Systemadministrator betreibt IT-Infrastruktur: Server, Arbeitsplätze, Verzeichnisse, Backups, Updates, Nutzerzugänge. In cloud-nativen Firmen geht ein Teil in DevOps/SRE auf — klassische Sysadmin-Arbeit bleibt aber überall, wo Systeme stehen müssen.",
      fr: "Un administrateur système exploite l’infra IT : serveurs, postes, annuaires, sauvegardes, mises à jour, accès. Dans les entreprises cloud-native, une partie fusionne avec DevOps/SRE — mais le travail sysadmin classique existe partout où les systèmes doivent tenir.",
      es: "Un administrador de sistemas opera la infra IT: servidores, puestos, directorios, copias, actualizaciones y accesos. En empresas cloud-native parte de esto se funde con DevOps/SRE — pero el trabajo clásico sigue donde los sistemas tienen que aguantar.",
      it: "Un sistemista esercisce l’infra IT: server, postazioni, directory, backup, aggiornamenti e accessi. Nelle aziende cloud-native parte di questo si fonde in DevOps/SRE — ma il lavoro classico resta ovunque i sistemi debbano stare in piedi.",
      tr: "Bir sistem yöneticisi IT altyapısını işletir: sunucular, iş istasyonları, dizinler, yedekler, güncellemeler, kullanıcı erişimi. Bulut-yerel şirketlerde bunun bir kısmı DevOps/SRE’ye karışır — ama sistemlerin ayakta kalması gereken her yerde klasik sysadmin işi durur."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Provision and maintain servers, OS images, and internal services.",
            ua: "Піднімати й тримати сервери, образи ОС і внутрішні сервіси.",
            de: "Server, OS-Images und interne Dienste bereitstellen und pflegen.",
      fr: "Provisionner et tenir serveurs, images d’OS et services internes.",
      es: "Provisionar y mantener servidores, imágenes de SO y servicios internos.",
      it: "Provisionare e tenere server, immagini OS e servizi interni.",
      tr: "Sunucuları, OS kalıplarını ve iç servisleri sağlamak ve tutmak."
          },
          {
            en: "Manage users, permissions, VPN, and endpoint basics.",
            ua: "Керувати користувачами, правами, VPN і базою ендпоінтів.",
            de: "Nutzer, Rechte, VPN und Endpoint-Grundlagen verwalten.",
      fr: "Gérer utilisateurs, droits, VPN et bases des postes.",
      es: "Gestionar usuarios, permisos, VPN y lo básico de los endpoints.",
      it: "Gestire utenti, permessi, VPN e le basi degli endpoint.",
      tr: "Kullanıcıları, yetkileri, VPN’i ve uç nokta temelini yönetmek."
          },
          {
            en: "Run backups, patching, monitoring, and recovery drills.",
            ua: "Ганяти бекапи, патчі, моніторинг і тренування відновлення.",
            de: "Backups, Patching, Monitoring und Wiederherstellungsübungen fahren.",
      fr: "Faire sauvegardes, correctifs, supervision et exercices de reprise.",
      es: "Correr copias, parches, monitorización y simulacros de recuperación.",
      it: "Eseguire backup, patch, monitoraggio ed esercizi di ripristino.",
      tr: "Yedek, yama, izleme ve kurtarma talimleri yürütmek."
          },
          {
            en: "Troubleshoot outages and performance issues under pressure.",
            ua: "Розбирати аварії й проблеми швидкості під тиском.",
            de: "Ausfälle und Performanceprobleme unter Druck diagnostizieren.",
      fr: "Diagnostiquer pannes et soucis de perf sous pression.",
      es: "Diagnosticar cortes y problemas de rendimiento bajo presión.",
      it: "Diagnosticare disservizi e problemi di prestazioni sotto pressione.",
      tr: "Baskı altında kesinti ve performans sorunlarını çözmek."
          },
          {
            en: "Document runbooks and support internal IT requests.",
            ua: "Писати ранбуки й закривати внутрішні ІТ-запити.",
            de: "Runbooks dokumentieren und interne IT-Anfragen bedienen.",
      fr: "Documenter les runbooks et traiter les demandes IT internes.",
      es: "Documentar runbooks y atender peticiones IT internas.",
      it: "Documentare i runbook e coprire le richieste IT interne.",
      tr: "Çalışma kitaplarını belgelemek ve iç IT taleplerini karşılamak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Linux/Windows administration, networking, shell scripting",
            ua: "Адміністрування Linux/Windows, мережі, shell-скрипти",
            de: "Linux-/Windows-Administration, Netz, Shell-Scripting",
      fr: "Administration Linux/Windows, réseau, scripts shell",
      es: "Administración Linux/Windows, red, scripting de shell",
      it: "Amministrazione Linux/Windows, rete, scripting di shell",
      tr: "Linux/Windows yönetimi, ağ, kabuk betiği"
          },
          {
            en: "Virtualization, backups, directory services (AD/LDAP)",
            ua: "Віртуалізація, бекапи, служби каталогів (AD/LDAP)",
            de: "Virtualisierung, Backups, Verzeichnisdienste (AD/LDAP)",
      fr: "Virtualisation, sauvegardes, annuaires (AD/LDAP)",
      es: "Virtualización, copias, servicios de directorio (AD/LDAP)",
      it: "Virtualizzazione, backup, directory (AD/LDAP)",
      tr: "Sanallaştırma, yedekler, dizin servisleri (AD/LDAP)"
          },
          {
            en: "Monitoring tools and incident hygiene",
            ua: "Інструменти моніторингу й гігієна інцидентів",
            de: "Monitoring-Tools und Incident-Hygiene",
      fr: "Outils de supervision et hygiène des incidents",
      es: "Herramientas de monitorización e higiene de incidentes",
      it: "Strumenti di monitoraggio e igiene degli incident",
      tr: "İzleme araçları ve olay hijyeni"
          },
          {
            en: "Growing cloud/IaC skills bridge toward DevOps",
            ua: "Хмарні навички й IaC стають містком до DevOps",
            de: "Wachsende Cloud-/IaC-Skills brücken zu DevOps",
      fr: "Des compétences cloud/IaC en hausse font le pont vers le DevOps",
      es: "Las competencias cloud/IaC que crecen tienden el puente hacia DevOps",
      it: "Competenze cloud/IaC in crescita fanno da ponte verso il DevOps",
      tr: "Büyüyen bulut/IaC becerileri DevOps’a köprü olur"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "On-prem or hybrid environments, internal IT for growing teams, or legacy systems that cannot be fully abstracted by PaaS yet.",
            ua: "Онпрем або гібрид, внутрішнє ІТ для команд, що ростуть, або легасі, яке ще не сховати за PaaS.",
            de: "On-Prem oder hybrid, interne IT für wachsende Teams oder Legacy, das PaaS noch nicht vollständig abstrahiert.",
      fr: "On-prem ou hybride, IT interne pour des équipes qui grandissent, ou du legacy que le PaaS n’abstrait pas encore.",
      es: "On-prem o híbrido, IT interno para equipos que crecen, o legado que PaaS aún no abstrae del todo.",
      it: "On-prem o ibrido, IT interno per team in crescita, o legacy che il PaaS non astrae ancora del tutto.",
      tr: "Yerinde veya hibrit ortamlar, büyüyen ekipler için iç IT veya PaaS’ın henüz tam soyutlayamadığı miras sistemler."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Reliable admin work is invisible until it is missing: then every team feels it at once.",
            ua: "Надійна адмінська робота невидима, поки її немає: тоді відчувають усі команди одразу.",
            de: "Verlässliche Admin-Arbeit ist unsichtbar, bis sie fehlt: Dann spürt sie jedes Team auf einmal.",
      fr: "Un bon travail d’admin est invisible jusqu’à ce qu’il manque : alors toutes les équipes le sentent d’un coup.",
      es: "El trabajo de admin fiable es invisible hasta que falta: entonces todos los equipos lo sienten a la vez.",
      it: "Il lavoro di admin affidabile è invisibile finché manca: allora ogni team lo sente insieme.",
      tr: "Güvenilir yönetim işi yok olana kadar görünmez: sonra her ekip birden hisseder."
          }
        ]
      }
    ]
  },
  {
    slug: "cloud-engineer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Cloud Engineer Do? Scalable Infrastructure on AWS, GCP, Azure",
      ua: "Чим займається Cloud Engineer: масштабована інфраструктура на AWS, GCP, Azure",
      de: "Was macht ein Cloud Engineer? Skalierbare Infrastruktur auf AWS, GCP, Azure",
      fr: "Que fait un Cloud Engineer ? Une infra évolutive sur AWS, GCP, Azure",
      es: "¿Qué hace un Cloud Engineer? Infra escalable en AWS, GCP, Azure",
      it: "Cosa fa un Cloud Engineer? Infra scalabile su AWS, GCP, Azure",
      tr: "Cloud Engineer ne yapar? AWS, GCP, Azure’da ölçeklenen altyapı"
    },
    excerpt: {
      en: "Cloud engineers design and run cloud platforms: networking, compute, cost, security. When cloud expertise beats generic hosting.",
      ua: "Cloud Engineer проєктує й тримає хмарні платформи: мережа, обчислення, вартість, безпека. Коли хмарна експертиза сильніша за звичайний хостинг.",
      de: "Cloud Engineers entwerfen und betreiben Cloud-Plattformen: Netz, Compute, Kosten, Sicherheit. Wann Cloud-Expertise generisches Hosting schlägt.",
      fr: "Le Cloud Engineer conçoit et fait tourner des plateformes cloud : réseau, compute, coût, sécu. Quand cette expertise bat l’hébergement générique.",
      es: "El Cloud Engineer diseña y opera plataformas cloud: red, cómputo, coste, seguridad. Cuándo esta pericia gana al hosting genérico.",
      it: "Il Cloud Engineer progetta e gestisce piattaforme cloud: rete, compute, costo, security. Quando questa competenza batte l’hosting generico.",
      tr: "Cloud Engineer bulut platformlarını tasarlar ve işletir: ağ, hesaplama, maliyet, güvenlik. Bu uzmanlığın genel barındırmayı ne zaman yendiği."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Cloud",
        "IT Roles",
        "AWS",
        "Infrastructure"
      ],
      ua: [
        "Кар'єра",
        "Хмара",
        "ІТ-ролі",
        "AWS",
        "Інфраструктура"
      ],
      de: [
        "Karriere",
        "Cloud",
        "IT-Rollen",
        "AWS",
        "Infrastruktur"
      ],
      fr: [
        "Carrière",
        "Cloud",
        "Métiers IT",
        "AWS",
        "Infrastructure"
      ],
      es: [
        "Carrera",
        "Cloud",
        "Roles IT",
        "AWS",
        "Infraestructura"
      ],
      it: [
        "Carriera",
        "Cloud",
        "Ruoli IT",
        "AWS",
        "Infrastruttura"
      ],
      tr: [
        "Kariyer",
        "Bulut",
        "IT rolleri",
        "AWS",
        "Altyapı"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A cloud engineer designs, implements, and optimizes infrastructure on public clouds. They translate product needs into secure, scalable, cost-aware architectures - often with infrastructure as code and strong automation.",
            ua: "Cloud Engineer проєктує, впроваджує й оптимізує інфраструктуру в публічних хмарах. Перекладає продуктові потреби на захищені, масштабовані, вартісно свідомі архітектури — часто інфраструктурою як кодом і сильною автоматизацією.",
            de: "Ein Cloud Engineer entwirft, setzt um und optimiert Infrastruktur in Public Clouds. Produktbedarf wird in sichere, skalierbare, kostensensible Architekturen übersetzt — oft als Code und mit starker Automatisierung.",
      fr: "Un Cloud Engineer conçoit, implémente et optimise l’infra sur les clouds publics. Il traduit le besoin produit en architectures sûres, évolutives, conscientes du coût — souvent en IaC et avec une automation solide.",
      es: "Un Cloud Engineer diseña, implementa y optimiza infra en nubes públicas. Traduce necesidades de producto en arquitecturas seguras, escalables y conscientes del coste — a menudo como código y con automatización fuerte.",
      it: "Un Cloud Engineer progetta, implementa e ottimizza l’infra sui cloud pubblici. Traduce i bisogni di prodotto in architetture sicure, scalabili e attente al costo — spesso come codice e con automazione solida.",
      tr: "Bir Cloud Engineer kamuya açık bulutlarda altyapı tasarlar, uygular ve iyileştirir. Ürün ihtiyacını güvenli, ölçeklenen, maliyeti bilen mimarilere çevirir — çoğu zaman kod olarak altyapı ve güçlü otomasyonla."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Architect VPCs, compute, storage, and managed services.",
            ua: "Проєктувати VPC, обчислення, сховище й керовані сервіси.",
            de: "VPCs, Compute, Speicher und Managed Services architektonisch aufsetzen.",
      fr: "Architecturer VPC, compute, stockage et services managés.",
      es: "Arquitectar VPC, cómputo, almacenamiento y servicios gestionados.",
      it: "Architettare VPC, compute, storage e servizi gestiti.",
      tr: "VPC, hesaplama, depolama ve yönetilen servisleri mimarileştirmek."
          },
          {
            en: "Implement IaC, autoscaling, and multi-environment setups.",
            ua: "Впроваджувати IaC, автоскейл і кілька середовищ.",
            de: "IaC, Autoscaling und Multi-Environment-Setups umsetzen.",
      fr: "Mettre en place IaC, autoscaling et plusieurs environnements.",
      es: "Implantar IaC, autoscaling y varios entornos.",
      it: "Mettere in piedi IaC, autoscaling e più ambienti.",
      tr: "IaC, otomatik ölçekleme ve çoklu ortam kurulumlarını uygulamak."
          },
          {
            en: "Harden IAM, network boundaries, and encryption defaults.",
            ua: "Укріплювати IAM, мережеві межі й типове шифрування.",
            de: "IAM, Netzgrenzen und Verschlüsselungs-Defaults härten.",
      fr: "Durcir IAM, frontières réseau et chiffrement par défaut.",
      es: "Endurecer IAM, límites de red y cifrado por defecto.",
      it: "Indurire IAM, confini di rete e cifratura di default.",
      tr: "IAM, ağ sınırları ve varsayılan şifrelemeyi sıkılaştırmak."
          },
          {
            en: "Optimize cloud spend and reliability trade-offs.",
            ua: "Оптимізувати хмарні витрати й компроміси надійності.",
            de: "Cloud-Spend und Zuverlässigkeitskompromisse optimieren.",
      fr: "Optimiser la dépense cloud et les arbitrages de fiabilité.",
      es: "Optimizar el gasto cloud y los compromisos de fiabilidad.",
      it: "Ottimizzare la spesa cloud e i compromessi di affidabilità.",
      tr: "Bulut harcamasını ve güvenilirlik ödünlerini dengelemek."
          },
          {
            en: "Support app teams with platform building blocks.",
            ua: "Давати продуктовим командам будівельні блоки платформи.",
            de: "App-Teams mit Plattform-Bausteinen unterstützen.",
      fr: "Soutenir les équipes app avec des briques de plateforme.",
      es: "Apoyar a los equipos de app con bloques de plataforma.",
      it: "Sostenere i team app con mattoni di piattaforma.",
      tr: "Uygulama ekiplerine platform yapı taşları vermek."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Deep knowledge of at least one major cloud",
            ua: "Глибоке знання щонайменше однієї великої хмари",
            de: "Tiefes Wissen über mindestens eine große Cloud",
      fr: "Connaissance profonde d’au moins un grand cloud",
      es: "Conocimiento profundo de al menos una nube grande",
      it: "Conoscenza profonda di almeno un grande cloud",
      tr: "En az bir büyük bulutu derinlemesine bilmek"
          },
          {
            en: "Terraform/CloudFormation, networking, containers",
            ua: "Terraform/CloudFormation, мережі, контейнери",
            de: "Terraform/CloudFormation, Netz, Container",
      fr: "Terraform/CloudFormation, réseau, conteneurs",
      es: "Terraform/CloudFormation, red, contenedores",
      it: "Terraform/CloudFormation, rete, container",
      tr: "Terraform/CloudFormation, ağ, konteynerler"
          },
          {
            en: "FinOps awareness, security baselines, observability",
            ua: "Свідомість FinOps, базові лінії безпеки, спостережуваність",
            de: "FinOps-Bewusstsein, Security-Baselines, Observability",
      fr: "Conscience FinOps, baselines sécu, observabilité",
      es: "Conciencia FinOps, baselines de seguridad, observabilidad",
      it: "Consapevolezza FinOps, baseline di security, observability",
      tr: "FinOps farkındalığı, güvenlik taban çizgileri, gözlemlenebilirlik"
          },
          {
            en: "Collaboration with DevOps/SRE and backend teams",
            ua: "Співпраця з DevOps/SRE і бекенд-командами",
            de: "Zusammenarbeit mit DevOps/SRE und Backend-Teams",
      fr: "Collaboration avec DevOps/SRE et les équipes backend",
      es: "Colaboración con DevOps/SRE y equipos backend",
      it: "Collaborazione con DevOps/SRE e team backend",
      tr: "DevOps/SRE ve backend ekipleriyle işbirliği"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When traffic, compliance, or multi-service architecture outgrows a single VPS - and misconfigured cloud can burn money faster than it saves.",
            ua: "Коли трафік, комплаєнс або багатосервісна архітектура переростають один VPS — і криво налаштована хмара спалює гроші швидше, ніж економить.",
            de: "Wenn Traffic, Compliance oder Multi-Service-Architektur einen einzelnen VPS überwachsen — und falsch konfigurierte Cloud Geld schneller verbrennt, als sie spart.",
      fr: "Quand le trafic, la conformité ou une architecture multi-services dépassent un seul VPS — et qu’un cloud mal configuré brûle l’argent plus vite qu’il n’en économise.",
      es: "Cuando el tráfico, el cumplimiento o una arquitectura de varios servicios se salen de un solo VPS — y un cloud mal configurado quema dinero más rápido de lo que ahorra.",
      it: "Quando traffico, compliance o un’architettura multi-servizio superano un singolo VPS — e un cloud mal configurato brucia soldi più in fretta di quanto ne risparmi.",
      tr: "Trafik, uyum veya çok servisli mimari tek VPS’i aştıysa — ve yanlış yapılandırılmış bulut kazandığından hızlı para yakıyorsa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Cloud skill is leverage. Without cost and security discipline, it is also a fast way to create expensive chaos.",
            ua: "Хмарна майстерність — це важіль. Без дисципліни вартості й безпеки це ще й швидкий шлях до дорогого хаосу.",
            de: "Cloud-Können ist Hebel. Ohne Kosten- und Sicherheitsdisziplin ist es auch ein schneller Weg in teures Chaos.",
      fr: "La compétence cloud est un levier. Sans discipline de coût et de sécu, c’est aussi un chemin rapide vers un chaos cher.",
      es: "La pericia cloud es palanca. Sin disciplina de coste y seguridad, también es un atajo hacia un caos caro.",
      it: "La competenza cloud è leva. Senza disciplina di costo e security, è anche una via rapida verso un caos caro.",
      tr: "Bulut becerisi kaldıraçtır. Maliyet ve güvenlik disiplini yoksa pahalı kaosa giden hızlı yoldur."
          }
        ]
      }
    ]
  },
  {
    slug: "sre-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Site Reliability Engineer (SRE) Do? SLOs and Production Health",
      ua: "Чим займається SRE: SLO і здоров’я продакшену",
      de: "Was macht ein Site Reliability Engineer (SRE)? SLOs und Gesundheit im Produktivbetrieb",
      fr: "Que fait un SRE ? SLO et santé de la production",
      es: "¿Qué hace un SRE? SLO y salud de producción",
      it: "Cosa fa un SRE? SLO e salute della produzione",
      tr: "SRE ne yapar? SLO’lar ve canlı ortamın sağlığı"
    },
    excerpt: {
      en: "SREs make production reliable with SLIs/SLOs, automation, and incident practice. How SRE differs from DevOps and classic ops.",
      ua: "SRE робить продакшен надійним через SLI/SLO, автоматизацію й практику інцидентів. Чим SRE відрізняється від DevOps і класичного ops.",
      de: "SREs machen den Produktivbetrieb zuverlässig mit SLIs/SLOs, Automatisierung und Incident-Praxis. Wie sich SRE von DevOps und klassischem Ops unterscheidet.",
      fr: "Les SRE rendent la production fiable avec SLI/SLO, automatisation et pratique des incidents. En quoi le SRE diffère du DevOps et de l’ops classique.",
      es: "Los SRE hacen fiable la producción con SLI/SLO, automatización y práctica de incidentes. En qué se diferencia de DevOps y del ops clásico.",
      it: "Gli SRE rendono affidabile la produzione con SLI/SLO, automazione e pratica degli incident. Come differisce da DevOps e dall’ops classico.",
      tr: "SRE’ler SLI/SLO, otomasyon ve olay pratiğiyle canlıyı güvenilir kılar. SRE’nin DevOps ve klasik ops’tan farkı."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "SRE",
        "IT Roles",
        "Reliability",
        "DevOps"
      ],
      ua: [
        "Кар'єра",
        "SRE",
        "ІТ-ролі",
        "Надійність",
        "DevOps"
      ],
      de: [
        "Karriere",
        "SRE",
        "IT-Rollen",
        "Zuverlässigkeit",
        "DevOps"
      ],
      fr: [
        "Carrière",
        "SRE",
        "Métiers IT",
        "Fiabilité",
        "DevOps"
      ],
      es: [
        "Carrera",
        "SRE",
        "Roles IT",
        "Fiabilidad",
        "DevOps"
      ],
      it: [
        "Carriera",
        "SRE",
        "Ruoli IT",
        "Affidabilità",
        "DevOps"
      ],
      tr: [
        "Kariyer",
        "SRE",
        "IT rolleri",
        "Güvenilirlik",
        "DevOps"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A Site Reliability Engineer applies software engineering to operations: defining reliability targets, automating toil, improving incident response, and balancing feature velocity with stability via error budgets.",
            ua: "SRE застосовує інженерію ПЗ до експлуатації: ставить цілі надійності, автоматизує рутину, покращує реакцію на інциденти й балансує швидкість фіч зі стабільністю через error budget.",
            de: "Ein SRE wendet Software Engineering auf den Betrieb an: Zuverlässigkeitsziele setzen, Toil automatisieren, Incident Response verbessern und Feature-Tempo gegen Stabilität über Error Budgets ausbalancieren.",
      fr: "Un SRE applique l’ingénierie logicielle à l’exploitation : cibles de fiabilité, automatiser le labeur, améliorer la réponse aux incidents, et arbitrer vitesse des fonctions et stabilité via les error budgets.",
      es: "Un SRE aplica ingeniería de software a la operación: definir objetivos de fiabilidad, automatizar la rutina, mejorar la respuesta a incidentes y equilibrar velocidad de funciones con estabilidad mediante error budgets.",
      it: "Un SRE applica lo software engineering all’esercizio: obiettivi di affidabilità, automatizzare il toil, migliorare la risposta agli incident e bilanciare velocità delle funzioni e stabilità con gli error budget.",
      tr: "Bir SRE yazılım mühendisliğini işletmeye uygular: güvenilirlik hedefleri koymak, angaryayı otomatikleştirmek, olay müdahalesini iyileştirmek ve hata bütçeleriyle özellik hızını istikrarla dengelemek."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Define SLIs/SLOs and make reliability measurable.",
            ua: "Визначати SLI/SLO і робити надійність вимірюваною.",
            de: "SLIs/SLOs definieren und Zuverlässigkeit messbar machen.",
      fr: "Définir SLI/SLO et rendre la fiabilité mesurable.",
      es: "Definir SLI/SLO y hacer medible la fiabilidad.",
      it: "Definire SLI/SLO e rendere misurabile l’affidabilità.",
      tr: "SLI/SLO tanımlamak ve güvenilirliği ölçülebilir kılmak."
          },
          {
            en: "Reduce toil with automation and better platform tooling.",
            ua: "Зменшувати рутину автоматизацією й кращими інструментами платформи.",
            de: "Toil durch Automatisierung und bessere Plattform-Tools senken.",
      fr: "Réduire le labeur par l’automatisation et de meilleurs outils de plateforme.",
      es: "Reducir la rutina con automatización y mejores herramientas de plataforma.",
      it: "Ridurre il toil con automazione e tool di piattaforma migliori.",
      tr: "Otomasyon ve daha iyi platform araçlarıyla angaryayı azaltmak."
          },
          {
            en: "Lead or support incident response and postmortems.",
            ua: "Вести або підтримувати реакцію на інциденти й розбори після них.",
            de: "Incident Response und Postmortems führen oder stützen.",
      fr: "Piloter ou soutenir la réponse aux incidents et les post-mortems.",
      es: "Liderar o apoyar la respuesta a incidentes y las postmortems.",
      it: "Guidare o sostenere la risposta agli incident e i postmortem.",
      tr: "Olay müdahalesini ve ölüm sonrası incelemeleri yönetmek veya desteklemek."
          },
          {
            en: "Improve capacity planning, failover, and chaos/resilience tests.",
            ua: "Покращувати планування ємності, failover і тести стійкості.",
            de: "Kapazitätsplanung, Failover und Chaos-/Resilienztests verbessern.",
      fr: "Améliorer le dimensionnement, le failover et les tests de résilience.",
      es: "Mejorar planificación de capacidad, failover y tests de resiliencia.",
      it: "Migliorare capacity planning, failover e test di resilienza.",
      tr: "Kapasite planını, yedek geçişi ve dayanıklılık testlerini iyileştirmek."
          },
          {
            en: "Partner with developers on production-ready design.",
            ua: "Разом із розробкою проєктувати так, щоб витримувало продакшен.",
            de: "Mit Entwicklern an produktionsreifem Design zusammenarbeiten.",
      fr: "Travailler avec les devs sur un design prêt pour la production.",
      es: "Aliarse con desarrollo en un diseño listo para producción.",
      it: "Collaborare con lo sviluppo su un design pronto per la produzione.",
      tr: "Geliştiricilerle canlıya hazır tasarımda ortak çalışmak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Strong coding + deep production systems knowledge",
            ua: "Сильний код + глибоке знання продакшен-систем",
            de: "Starkes Coding + tiefes Wissen über Produktivsysteme",
      fr: "Code solide + connaissance profonde des systèmes en production",
      es: "Código fuerte + conocimiento profundo de sistemas en producción",
      it: "Coding solido + conoscenza profonda dei sistemi in produzione",
      tr: "Güçlü kod + canlı sistemlerin derin bilgisi"
          },
          {
            en: "Observability, on-call practices, distributed systems basics",
            ua: "Спостережуваність, практика чергувань, основи розподілених систем",
            de: "Observability, On-Call-Praxis, Grundlagen verteilter Systeme",
      fr: "Observabilité, astreintes, bases des systèmes distribués",
      es: "Observabilidad, prácticas de guardia, bases de sistemas distribuidos",
      it: "Observability, pratiche on-call, basi dei sistemi distribuiti",
      tr: "Gözlemlenebilirlik, nöbet pratikleri, dağıtık sistem temelleri"
          },
          {
            en: "Performance debugging and capacity intuition",
            ua: "Дебаг швидкості й чуття ємності",
            de: "Performance-Debug und Kapazitätsinstinkt",
      fr: "Débogage de perf et intuition de capacité",
      es: "Depuración de rendimiento e intuición de capacidad",
      it: "Debug delle prestazioni e intuito di capacità",
      tr: "Performans hata ayıklama ve kapasite sezgisi"
          },
          {
            en: "Blameless culture and clear written communication",
            ua: "Культура без звинувачень і чітке письмо",
            de: "Blameless Culture und klare schriftliche Kommunikation",
      fr: "Culture sans blâme et écriture claire",
      es: "Cultura sin culpa y comunicación escrita clara",
      it: "Cultura senza colpe e comunicazione scritta chiara",
      tr: "Suçlamayan kültür ve net yazılı iletişim"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "High-traffic products, strict uptime promises, complex microservices, or when outages repeatedly damage revenue and trust.",
            ua: "Продукти з високим трафіком, жорсткі обіцянки аптайму, складні мікросервіси — або коли аварії знову й знову б’ють по виручці й довірі.",
            de: "Produkte mit hohem Traffic, strenge Uptime-Versprechen, komplexe Microservices — oder wenn Ausfälle wiederholt Umsatz und Vertrauen beschädigen.",
      fr: "Produits à fort trafic, promesses d’uptime strictes, microservices complexes — ou quand les pannes abîment encore et encore le chiffre et la confiance.",
      es: "Productos de mucho tráfico, promesas estrictas de uptime, microservicios complejos — o cuando los cortes dañan una y otra vez ingreso y confianza.",
      it: "Prodotti ad alto traffico, promesse di uptime strette, microservizi complessi — o quando i disservizi danneggiano di nuovo fatturato e fiducia.",
      tr: "Yüksek trafikli ürünler, sıkı ayakta kalma vaatleri, karmaşık mikroservisler — veya kesintiler ciro ve güveni tekrar tekrar zedeliyorsa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "SRE is not “DevOps with a new title.” It is reliability as a product with explicit trade-offs.",
            ua: "SRE — це не «DevOps під новою назвою». Це надійність як продукт із явними компромісами.",
            de: "SRE ist nicht „DevOps mit neuem Titel“. Es ist Zuverlässigkeit als Produkt mit expliziten Kompromissen.",
      fr: "Le SRE n’est pas « du DevOps sous un nouveau titre ». C’est la fiabilité comme produit, avec des arbitrages explicites.",
      es: "SRE no es «DevOps con otro título». Es fiabilidad como producto, con compromisos explícitos.",
      it: "L’SRE non è «DevOps con un titolo nuovo». È l’affidabilità come prodotto, con compromessi espliciti.",
      tr: "SRE «yeni unvanlı DevOps» değildir. Açık ödünlerle ürün olarak güvenilirliktir."
          }
        ]
      }
    ]
  },
  {
    slug: "software-architect-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Software Architect Do? Structure, Trade-offs, and Longevity",
      ua: "Чим займається архітектор ПЗ: структура, компроміси й довге життя системи",
      de: "Was macht ein Softwarearchitekt? Struktur, Kompromisse und Langlebigkeit",
      fr: "Que fait un architecte logiciel ? Structure, arbitrages et longévité",
      es: "¿Qué hace un arquitecto de software? Estructura, compromisos y longevidad",
      it: "Cosa fa un software architect? Struttura, compromessi e longevità",
      tr: "Yazılım mimarı ne yapar? Yapı, ödünler ve uzun ömür"
    },
    excerpt: {
      en: "Architects set technical direction: boundaries, patterns, and quality attributes. When architecture work saves (or wastes) years.",
      ua: "Архітектор задає технічний напрям: межі, патерни, атрибути якості. Коли архітектурна робота рятує роки — або їх спалює.",
      de: "Architekten setzen die technische Richtung: Grenzen, Muster, Qualitätsattribute. Wann Architekturarbeit Jahre spart — oder verschwendet.",
      fr: "L’architecte fixe la direction technique : frontières, motifs, attributs de qualité. Quand ce travail sauve des années — ou les gaspille.",
      es: "El arquitecto fija la dirección técnica: límites, patrones y atributos de calidad. Cuándo este trabajo ahorra años — o los tira.",
      it: "L’architect fissa la direzione tecnica: confini, pattern e attributi di qualità. Quando questo lavoro salva anni — o li spreca.",
      tr: "Mimar teknik yönü koyar: sınırlar, kalıplar, kalite öznitelikleri. Mimari işin yılları ne zaman kurtardığı — veya yaktığı."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Architecture",
        "IT Roles",
        "Software Design"
      ],
      ua: [
        "Кар'єра",
        "Архітектура",
        "ІТ-ролі",
        "Проєктування ПЗ"
      ],
      de: [
        "Karriere",
        "Architektur",
        "IT-Rollen",
        "Software-Design"
      ],
      fr: [
        "Carrière",
        "Architecture",
        "Métiers IT",
        "Conception logicielle"
      ],
      es: [
        "Carrera",
        "Arquitectura",
        "Roles IT",
        "Diseño de software"
      ],
      it: [
        "Carriera",
        "Architettura",
        "Ruoli IT",
        "Software design"
      ],
      tr: [
        "Kariyer",
        "Mimari",
        "IT rolleri",
        "Yazılım tasarımı"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A software (or solutions) architect designs how systems fit together: service boundaries, data ownership, integration patterns, and non-functional requirements like scalability, security, and operability. They guide teams through trade-offs, not only draw diagrams.",
            ua: "Архітектор ПЗ (або рішень) проєктує, як системи складаються разом: межі сервісів, відповідальність за дані, патерни інтеграцій і нефункціональні вимоги — масштаб, безпека, експлуатація. Він веде команди через компроміси, а не лише малює схеми.",
            de: "Ein Software- oder Lösungsarchitekt entwirft, wie Systeme zusammenpassen: Servicegrenzen, Datenverantwortung, Integrationsmuster und nichtfunktionale Anforderungen wie Skalierbarkeit, Sicherheit, Betrieb. Er führt Teams durch Kompromisse — zeichnet nicht nur Diagramme.",
      fr: "Un architecte logiciel (ou solutions) conçoit comment les systèmes s’emboîtent : frontières de services, responsabilité des données, motifs d’intégration, exigences non fonctionnelles (échelle, sécu, exploitabilité). Il guide les équipes dans les arbitrages — il ne dessine pas seulement des schémas.",
      es: "Un arquitecto de software (o de soluciones) diseña cómo encajan los sistemas: límites de servicios, responsabilidad de datos, patrones de integración y requisitos no funcionales como escala, seguridad y operabilidad. Guía al equipo en los compromisos; no solo dibuja diagramas.",
      it: "Un software (o solutions) architect progetta come i sistemi stanno insieme: confini dei servizi, responsabilità dei dati, pattern di integrazione e requisiti non funzionali come scala, security e operabilità. Guida i team nei compromessi — non si limita a disegnare diagrammi.",
      tr: "Bir yazılım (veya çözüm) mimarı sistemlerin nasıl birleştiğini tasarlar: servis sınırları, veri sorumluluğu, entegrasyon kalıpları ve ölçek, güvenlik, işletilebilirlik gibi işlevsel olmayan gereksinimler. Yalnızca şema çizmez; ekipleri ödünlerden geçirir."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Propose architecture options with explicit costs and risks.",
            ua: "Пропонувати варіанти архітектури з явними вартостями й ризиками.",
            de: "Architektur-Optionen mit expliziten Kosten und Risiken vorschlagen.",
      fr: "Proposer des options d’architecture avec coûts et risques explicites.",
      es: "Proponer opciones de arquitectura con costes y riesgos explícitos.",
      it: "Proporre opzioni di architettura con costi e rischi espliciti.",
      tr: "Maliyet ve riski açık mimari seçenekler önermek."
          },
          {
            en: "Define standards, ADRs, and integration contracts.",
            ua: "Визначати стандарти, ADR і контракти інтеграцій.",
            de: "Standards, ADRs und Integrationsverträge definieren.",
      fr: "Définir standards, ADR et contrats d’intégration.",
      es: "Definir estándares, ADR y contratos de integración.",
      it: "Definire standard, ADR e contratti di integrazione.",
      tr: "Standartları, ADR’leri ve entegrasyon sözleşmelerini tanımlamak."
          },
          {
            en: "Review critical designs and prevent accidental complexity.",
            ua: "Рев’ювати критичні дизайни й не давати складності наростати випадково.",
            de: "Kritische Designs reviewen und zufällige Komplexität verhindern.",
      fr: "Relire les designs critiques et empêcher la complexité accidentelle.",
      es: "Revisar diseños críticos y evitar la complejidad accidental.",
      it: "Rivedere i design critici e impedire la complessità accidentale.",
      tr: "Kritik tasarımları incelemek ve rastlantısal karmaşıklığı önlemek."
          },
          {
            en: "Align tech choices with business constraints and timeline.",
            ua: "Зводити техвибір із бізнес-обмеженнями й термінами.",
            de: "Technikwahl an Geschäftsgrenzen und Zeitplan ausrichten.",
      fr: "Aligner les choix tech sur les contraintes métier et le calendrier.",
      es: "Alinear las decisiones técnicas con los límites de negocio y el plazo.",
      it: "Allineare le scelte tech ai vincoli di business e ai tempi.",
      tr: "Teknik seçimleri iş kısıtları ve takvimle hizalamak."
          },
          {
            en: "Mentor leads and keep the system evolvable.",
            ua: "Менторити лідів і тримати систему здатною розвиватися.",
            de: "Leads mentorieren und das System entwickelbar halten.",
      fr: "Mentorat des leads et garder le système évolutif.",
      es: "Mentorar a los leads y mantener el sistema evolucionable.",
      it: "Fare da mentor ai lead e tenere il sistema evolvibile.",
      tr: "Lead’lere mentorluk etmek ve sistemi evrilebilir tutmak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Broad stack literacy, distributed systems, data modeling",
            ua: "Широка грамотність стека, розподілені системи, моделювання даних",
            de: "Breite Stack-Kompetenz, verteilte Systeme, Datenmodellierung",
      fr: "Culture large de stack, systèmes distribués, modélisation data",
      es: "Alfabetización amplia de stack, sistemas distribuidos, modelado de datos",
      it: "Alfabetizzazione ampia di stack, sistemi distribuiti, modellazione dati",
      tr: "Geniş yığın okuryazarlığı, dağıtık sistemler, veri modelleme"
          },
          {
            en: "Communication of trade-offs to executives and engineers",
            ua: "Пояснювати компроміси і керівництву, і інженерам",
            de: "Kompromisse an Geschäftsleitung und Engineers kommunizieren",
      fr: "Expliquer les arbitrages à la direction et aux ingénieurs",
      es: "Explicar los compromisos a dirección e ingeniería",
      it: "Comunicare i compromessi a direzione e ingegneri",
      tr: "Ödünleri yöneticilere ve mühendislere anlatmak"
          },
          {
            en: "Security, performance, and operational thinking",
            ua: "Мислення безпекою, швидкістю й експлуатацією",
            de: "Denken in Sicherheit, Performance und Betrieb",
      fr: "Penser sécu, perf et exploitation",
      es: "Pensar en seguridad, rendimiento y operación",
      it: "Pensare in termini di security, prestazioni ed esercizio",
      tr: "Güvenlik, performans ve işletim düşüncesi"
          },
          {
            en: "Pragmatism: enough architecture, not ivory-tower designs",
            ua: "Прагматизм: стільки архітектури, скільки треба, без вежі зі слонової кістки",
            de: "Pragmatismus: genug Architektur, keine Elfenbeinturm-Entwürfe",
      fr: "Pragmatisme : assez d’architecture, pas de tours d’ivoire",
      es: "Pragmatismo: arquitectura suficiente, no diseños de torre de marfil",
      it: "Pragmatismo: abbastanza architettura, non progetti da torre d’avorio",
      tr: "Pragmatizm: yeterince mimari, fildişi kule tasarımları değil"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "Multi-team products, platform migrations, complex integrations, or when “just add another service” is creating a maze.",
            ua: "Продукти на кілька команд, міграції платформ, складні інтеграції — або коли «просто додамо ще один сервіс» уже будує лабіринт.",
            de: "Produkte über mehrere Teams, Plattform-Migrationen, komplexe Integrationen — oder wenn „einfach noch einen Service“ ein Labyrinth baut.",
      fr: "Produits multi-équipes, migrations de plateforme, intégrations complexes — ou quand « on ajoute juste un service » dessine un labyrinthe.",
      es: "Productos de varios equipos, migraciones de plataforma, integraciones complejas — o cuando «añadimos otro servicio» ya está armando un laberinto.",
      it: "Prodotti multi-team, migrazioni di piattaforma, integrazioni complesse — o quando «aggiungiamo un altro servizio» sta creando un labirinto.",
      tr: "Çok ekipli ürünler, platform göçleri, karmaşık entegrasyonlar — veya «bir servis daha ekleyelim» labirent örüyorsa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Architecture fails when it ignores delivery reality. The best architects stay close to code and incidents.",
            ua: "Архітектура провалюється, коли ігнорує реальність поставки. Найкращі архітектори лишаються близько до коду й інцидентів.",
            de: "Architektur scheitert, wenn sie die Lieferrealität ignoriert. Die besten Architekt:innen bleiben nah an Code und Incidents.",
      fr: "L’architecture échoue quand elle ignore la réalité de la livraison. Les meilleurs architectes restent près du code et des incidents.",
      es: "La arquitectura falla cuando ignora la realidad de la entrega. Los mejores arquitectos se quedan cerca del código y de los incidentes.",
      it: "L’architettura fallisce quando ignora la realtà della consegna. I migliori architect restano vicini al codice e agli incident.",
      tr: "Mimari, teslim gerçekliğini yok sayınca düşer. En iyi mimarlar koda ve olaylara yakın kalır."
          }
        ]
      }
    ]
  },
  {
    slug: "tech-lead-engineering-manager-role-guide",
    date: "2026-08-14",
    title: {
      en: "Tech Lead vs Engineering Manager: What Each Role Owns",
      ua: "Tech Lead і Engineering Manager: хто за що відповідає",
      de: "Tech Lead vs. Engineering Manager: wofür jede Rolle zuständig ist",
      fr: "Tech Lead vs Engineering Manager : de quoi chacun est responsable",
      es: "Tech Lead frente a Engineering Manager: de qué responde cada rol",
      it: "Tech Lead e Engineering Manager: di cosa risponde ciascuno",
      tr: "Tech Lead ve Engineering Manager: her rol neden sorumlu"
    },
    excerpt: {
      en: "Tech leads own technical excellence in a team; EMs own people and delivery systems. Clear boundaries and collaboration model.",
      ua: "Tech Lead тримає технічну якість у команді; EM — людей і систему поставки. Чіткі межі й модель співпраці.",
      de: "Tech Leads tragen technische Exzellenz im Team; EMs tragen Menschen und das Liefersystem. Klare Grenzen und ein Kollaborationsmodell.",
      fr: "Le Tech Lead porte l’excellence technique dans l’équipe ; l’EM porte les gens et le système de livraison. Frontières claires et modèle de collaboration.",
      es: "El Tech Lead sostiene la excelencia técnica del equipo; el EM, a las personas y el sistema de entrega. Límites claros y un modelo de colaboración.",
      it: "Il Tech Lead porta l’eccellenza tecnica nel team; l’EM, le persone e il sistema di consegna. Confini chiari e un modello di collaborazione.",
      tr: "Tech Lead ekipteki teknik mükemmelliği taşır; EM insanları ve teslim sistemini. Net sınırlar ve işbirliği modeli."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Leadership",
        "IT Roles",
        "Tech Lead",
        "Management"
      ],
      ua: [
        "Кар'єра",
        "Лідерство",
        "ІТ-ролі",
        "Tech Lead",
        "Менеджмент"
      ],
      de: [
        "Karriere",
        "Führung",
        "IT-Rollen",
        "Tech Lead",
        "Management"
      ],
      fr: [
        "Carrière",
        "Leadership",
        "Métiers IT",
        "Tech Lead",
        "Management"
      ],
      es: [
        "Carrera",
        "Liderazgo",
        "Roles IT",
        "Tech Lead",
        "Management"
      ],
      it: [
        "Carriera",
        "Leadership",
        "Ruoli IT",
        "Tech Lead",
        "Management"
      ],
      tr: [
        "Kariyer",
        "Liderlik",
        "IT rolleri",
        "Tech Lead",
        "Yönetim"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A tech lead is primarily a technical multiplier: architecture within the team, code quality, mentoring, and unblocking hard problems - often still coding. An engineering manager is primarily a people and system multiplier: hiring, growth, performance, team health, and predictable delivery.",
            ua: "Tech Lead — насамперед технічний множник: архітектура в команді, якість коду, менторство, розблокування складних задач — часто досі пише код. Engineering Manager — множник людей і системи: найм, ріст, перформанс, здоров’я команди, передбачувана поставка.",
            de: "Ein Tech Lead ist vor allem ein technischer Multiplikator: Architektur im Team, Codequalität, Mentoring, harte Probleme entblocken — oft noch am Code. Ein Engineering Manager ist vor allem ein Menschen- und Systemmultiplikator: Einstellen, Wachstum, Performance, Teamgesundheit, planbare Lieferung.",
      fr: "Un Tech Lead est d’abord un multiplicateur technique : architecture dans l’équipe, qualité du code, mentorat, déblocage des problèmes durs — souvent encore au code. Un Engineering Manager est d’abord un multiplicateur de gens et de système : recrutement, croissance, perf, santé d’équipe, livraison prévisible.",
      es: "Un Tech Lead es ante todo un multiplicador técnico: arquitectura en el equipo, calidad de código, mentoría y desbloquear problemas duros — a menudo sigue programando. Un Engineering Manager es ante todo un multiplicador de personas y de sistema: contratación, crecimiento, desempeño, salud del equipo y entrega previsible.",
      it: "Un Tech Lead è soprattutto un moltiplicatore tecnico: architettura nel team, qualità del codice, mentoring, sbloccare i problemi duri — spesso ancora al codice. Un Engineering Manager è soprattutto un moltiplicatore di persone e di sistema: assunzioni, crescita, performance, salute del team e consegna prevedibile.",
      tr: "Bir Tech Lead her şeyden önce teknik çarpandır: ekip içi mimari, kod kalitesi, mentorluk, zor sorunları açmak — çoğu zaman hâlâ kod yazar. Bir Engineering Manager her şeyden önce insan ve sistem çarpanıdır: işe alım, büyüme, performans, ekip sağlığı, öngörülebilir teslim."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Tech Lead: guide design, review critical PRs, set engineering bar.",
            ua: "Tech Lead: вести дизайн, рев’ювати критичні PR, ставити інженерну планку.",
            de: "Tech Lead: Design führen, kritische PRs reviewen, die Engineering-Leiste setzen.",
      fr: "Tech Lead : guider le design, relire les PR critiques, fixer la barre d’ingénierie.",
      es: "Tech Lead: guiar el diseño, revisar PRs críticos, fijar el listón de ingeniería.",
      it: "Tech Lead: guidare il design, rivedere le PR critiche, fissare l’asticella engineering.",
      tr: "Tech Lead: tasarımı yönlendirmek, kritik PR’ları incelemek, mühendislik çıtasını koymak."
          },
          {
            en: "Tech Lead: split work, reduce tech debt strategically, mentor.",
            ua: "Tech Lead: ділити роботу, стратегічно знімати техборг, менторити.",
            de: "Tech Lead: Arbeit schneiden, Tech Debt strategisch senken, mentorieren.",
      fr: "Tech Lead : découper le travail, réduire la dette tech avec stratégie, mentorat.",
      es: "Tech Lead: partir el trabajo, bajar deuda técnica con estrategia, mentorar.",
      it: "Tech Lead: spezzare il lavoro, ridurre il debito tecnico con strategia, fare mentoring.",
      tr: "Tech Lead: işi bölmek, teknik borcu stratejik indermek, mentorluk."
          },
          {
            en: "EM: hire, coach, run 1:1s, handle performance and career paths.",
            ua: "EM: наймати, коучити, вести 1:1, тримати перформанс і кар’єрні шляхи.",
            de: "EM: einstellen, coachen, 1:1s führen, Performance und Karrierewege tragen.",
      fr: "EM : recruter, coacher, tenir les 1:1, porter perf et parcours.",
      es: "EM: contratar, acompañar, llevar 1:1, sostener desempeño y carreras.",
      it: "EM: assumere, fare coaching, tenere i 1:1, portare performance e percorsi di carriera.",
      tr: "EM: işe almak, koçluk, 1:1 yürütmek, performans ve kariyer yollarını tutmak."
          },
          {
            en: "EM: protect focus, improve process, partner with product on plans.",
            ua: "EM: захищати фокус, покращувати процес, планувати разом із продуктом.",
            de: "EM: Fokus schützen, Prozess verbessern, mit Produkt Pläne machen.",
      fr: "EM : protéger le focus, améliorer le process, planifier avec le produit.",
      es: "EM: proteger el foco, mejorar el proceso, planear con producto.",
      it: "EM: proteggere il focus, migliorare il processo, pianificare col product.",
      tr: "EM: odağı korumak, süreci iyileştirmek, ürünle planlarda ortak olmak."
          },
          {
            en: "Both: make trade-offs visible and keep stakeholders aligned.",
            ua: "Обидва: робити компроміси видимими й тримати стейкхолдерів на одній лінії.",
            de: "Beide: Kompromisse sichtbar machen und Stakeholder ausgerichtet halten.",
      fr: "Les deux : rendre les arbitrages visibles et garder les parties prenantes alignées.",
      es: "Ambos: hacer visibles los compromisos y mantener alineados a los interesados.",
      it: "Entrambi: rendere visibili i compromessi e tenere allineati gli stakeholder.",
      tr: "İkisi de: ödünleri görünür kılmak ve paydaşları hizada tutmak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Tech Lead: deep technical judgment + communication",
            ua: "Tech Lead: глибоке технічне судження + комунікація",
            de: "Tech Lead: tiefes technisches Urteil + Kommunikation",
      fr: "Tech Lead : jugement technique profond + communication",
      es: "Tech Lead: juicio técnico profundo + comunicación",
      it: "Tech Lead: giudizio tecnico profondo + comunicazione",
      tr: "Tech Lead: derin teknik muhakeme + iletişim"
          },
          {
            en: "EM: people leadership, conflict skills, org awareness",
            ua: "EM: лідерство людей, навички конфліктів, чуття організації",
            de: "EM: People Leadership, Konfliktkompetenz, Org-Bewusstsein",
      fr: "EM : leadership des gens, gestion des conflits, conscience de l’org",
      es: "EM: liderazgo de personas, conflicto, conciencia de la organización",
      it: "EM: leadership delle persone, conflitto, consapevolezza dell’org",
      tr: "EM: insan liderliği, çatışma becerisi, örgüt farkındalığı"
          },
          {
            en: "Both: prioritization, ownership mindset, calm under pressure",
            ua: "Обидва: пріоритезація, відповідальність, спокій під тиском",
            de: "Beide: Priorisieren, Ownership-Haltung, Ruhe unter Druck",
      fr: "Les deux : priorisation, esprit de responsabilité, calme sous pression",
      es: "Ambos: priorización, mentalidad de responsabilidad, calma bajo presión",
      it: "Entrambi: priorità, mentalità di responsabilità, calma sotto pressione",
      tr: "İkisi de: önceliklendirme, sahiplenme zihniyeti, baskı altında sakinlik"
          },
          {
            en: "Avoid anti-pattern: EM who only tracks tickets, TL who only codes alone",
            ua: "Уникати антипатерну: EM, який лише ганяє тікети, і TL, який лише кодить наодинці",
            de: "Anti-Pattern meiden: EM, der nur Tickets trackt, TL, der nur allein codet",
      fr: "Éviter l’anti-pattern : EM qui ne fait que tracker des tickets, TL qui ne code que seul",
      es: "Evitar el antipatrón: EM que solo sigue tickets, TL que solo programa solo",
      it: "Evitare l’anti-pattern: EM che traccia solo ticket, TL che programma solo da solo",
      tr: "Anti-kalıptan kaçının: yalnızca bilet izleyen EM, yalnızca yalnız kod yazan TL"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When a team grows past “everyone just figures it out,” quality drifts, or managers are needed so seniors are not drowning in people issues alone.",
            ua: "Коли команда виросла за «самі розберемось», якість пливе, або менеджери потрібні, щоб сеньйори не тонули в людських питаннях наодинці.",
            de: "Wenn ein Team über „irgendwie klappt das“ hinauswächst, Qualität driftet oder Manager nötig sind, damit Seniors nicht allein in People-Themen ertrinken.",
      fr: "Quand l’équipe dépasse le « on se débrouille », que la qualité dérive, ou qu’il faut des managers pour que les seniors ne se noient pas seuls dans les sujets humains.",
      es: "Cuando el equipo crece más allá de «ya nos apañamos», la calidad deriva o hacen falta managers para que los seniors no se ahoguen solos en temas de gente.",
      it: "Quando il team cresce oltre il «ci si arrangia», la qualità deriva o servono manager perché i senior non anneghino da soli nelle questioni di persone.",
      tr: "Ekip «bir şekilde hallederiz»i aştıysa, kalite sapıyorsa veya kıdemlilerin insan meselelerinde yalnız boğulmaması için yöneticiler gerekiyorsa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Healthy orgs separate the jobs clearly, then expect close partnership. Confused titles create gaps - or power struggles.",
            ua: "Здорові організації чітко розділяють роботи, а тоді чекають тісної партнерки. Плутані назви створюють дірки — або боротьбу за владу.",
            de: "Gesunde Orgs trennen die Jobs klar und erwarten dann enge Partnerschaft. Verwirrte Titel erzeugen Lücken — oder Machtkämpfe.",
      fr: "Les orgs saines séparent clairement les métiers, puis attendent un partenariat serré. Des titres flous créent des trous — ou des luttes de pouvoir.",
      es: "Las organizaciones sanas separan los oficios con claridad y luego esperan una alianza estrecha. Títulos confusos crean huecos — o luchas de poder.",
      it: "Le org sane separano i mestieri con chiarezza, poi si aspettano una partnership stretta. Titoli confusi creano buchi — o lotte di potere.",
      tr: "Sağlıklı örgütler işleri net ayırır, sonra sıkı ortaklık bekler. Karışık unvanlar boşluk — veya güç kavgası — yaratır."
          }
        ]
      }
    ]
  },
  {
    slug: "scrum-master-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Scrum Master Do? Facilitation Without Ceremony Theater",
      ua: "Чим займається Scrum Master: фасилітація без театру церемоній",
      de: "Was macht ein Scrum Master? Moderation ohne Zeremonientheater",
      fr: "Que fait un Scrum Master ? Facilitation sans théâtre de cérémonies",
      es: "¿Qué hace un Scrum Master? Facilitación sin teatro de ceremonias",
      it: "Cosa fa uno Scrum Master? Facilitazione senza teatro di cerimonie",
      tr: "Scrum Master ne yapar? Tören tiyatrosu olmadan kolaylaştırıcılık"
    },
    excerpt: {
      en: "Scrum masters improve team flow: remove impediments, coach agile habits, and protect focus. When the role helps - and when it is overhead.",
      ua: "Scrum Master покращує потік команди: знімає перешкоди, коучить agile-звички, захищає фокус. Коли роль допомагає — і коли це накладні витрати.",
      de: "Scrum Master verbessern den Teamfluss: Hindernisse räumen, agile Gewohnheiten coachen, Fokus schützen. Wann die Rolle hilft — und wann sie Overhead ist.",
      fr: "Le Scrum Master améliore le flux de l’équipe : lever les obstacles, coacher des habitudes agile, protéger le focus. Quand le rôle aide — et quand c’est du surcoût.",
      es: "El Scrum Master mejora el flujo del equipo: quitar impedimentos, acompañar hábitos agile y proteger el foco. Cuándo el rol ayuda — y cuándo es sobrecoste.",
      it: "Lo Scrum Master migliora il flusso del team: togliere impedimenti, allenare abitudini agile, proteggere il focus. Quando il ruolo aiuta — e quando è overhead.",
      tr: "Scrum Master ekip akışını iyileştirir: engelleri kaldırmak, agile alışkanlık koçluğu, odağı korumak. Rolün ne zaman yardım ettiği — ve ne zaman yük olduğu."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Agile",
        "IT Roles",
        "Scrum",
        "Delivery"
      ],
      ua: [
        "Кар'єра",
        "Agile",
        "ІТ-ролі",
        "Scrum",
        "Поставка"
      ],
      de: [
        "Karriere",
        "Agile",
        "IT-Rollen",
        "Scrum",
        "Lieferfähigkeit"
      ],
      fr: [
        "Carrière",
        "Agile",
        "Métiers IT",
        "Scrum",
        "Livraison"
      ],
      es: [
        "Carrera",
        "Agile",
        "Roles IT",
        "Scrum",
        "Entrega"
      ],
      it: [
        "Carriera",
        "Agile",
        "Ruoli IT",
        "Scrum",
        "Consegna"
      ],
      tr: [
        "Kariyer",
        "Agile",
        "IT rolleri",
        "Scrum",
        "Teslim"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A scrum master (or agile coach in a lighter form) helps the team deliver continuously: facilitating events with purpose, removing blockers, coaching collaboration, and improving the system of work - not policing story points.",
            ua: "Scrum Master (або легший agile-коуч) допомагає команді постачати безперервно: вести події з сенсом, знімати блокери, коучити співпрацю й покращувати систему роботи — а не поліціювати сторі-поінти.",
            de: "Ein Scrum Master (oder ein leichtgewichtiger Agile Coach) hilft dem Team, kontinuierlich zu liefern: Events mit Zweck moderieren, Blocker räumen, Zusammenarbeit coachen und das Arbeitssystem verbessern — nicht Story Points polizieren.",
      fr: "Un Scrum Master (ou un agile coach plus léger) aide l’équipe à livrer en continu : animer des événements qui ont un but, lever les blocages, coacher la collab et améliorer le système de travail — pas policer les story points.",
      es: "Un Scrum Master (o un agile coach más ligero) ayuda al equipo a entregar en continuo: facilitar eventos con propósito, quitar bloqueos, acompañar la colaboración y mejorar el sistema de trabajo — no policiar story points.",
      it: "Uno Scrum Master (o un agile coach più leggero) aiuta il team a consegnare in continuo: facilitare eventi con uno scopo, togliere blocker, allenare la collaborazione e migliorare il sistema di lavoro — non fare la polizia sui story point.",
      tr: "Bir Scrum Master (veya daha hafif bir agile koç) ekibin sürekli teslim etmesine yardım eder: amaçlı etkinlikleri kolaylaştırmak, engelleri kaldırmak, işbirliği koçluğu ve iş sistemini iyileştirmek — hikâye puanı polislik etmek değil."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Facilitate planning, reviews, retros that produce decisions.",
            ua: "Вести планування, огляди й ретро, з яких народжуються рішення.",
            de: "Planung, Reviews und Retros moderieren, aus denen Entscheidungen entstehen.",
      fr: "Animer planning, revues et rétros qui produisent des décisions.",
      es: "Facilitar planificación, reviews y retros que produzcan decisiones.",
      it: "Facilitare planning, review e retro che producano decisioni.",
      tr: "Karar üreten planlama, inceleme ve retrospektifleri kolaylaştırmak."
          },
          {
            en: "Surface and escalate impediments across teams.",
            ua: "Витягати перешкоди на світло й ескалювати їх між командами.",
            de: "Hindernisse sichtbar machen und über Teams hinweg eskalieren.",
      fr: "Faire remonter les obstacles et les escalader entre équipes.",
      es: "Sacar a la luz los impedimentos y escalarlos entre equipos.",
      it: "Portare in superficie gli impedimenti e escalarli tra i team.",
      tr: "Engelleri yüzeye çıkarmak ve ekipler arasında yükseltmek."
          },
          {
            en: "Coach product/engineering on WIP limits and focus.",
            ua: "Коучити продукт і інженерію щодо лімітів WIP і фокусу.",
            de: "Produkt und Engineering zu WIP-Limits und Fokus coachen.",
      fr: "Coacher produit et ingénierie sur les limites de WIP et le focus.",
      es: "Acompañar a producto e ingeniería en límites de WIP y foco.",
      it: "Allenare product ed engineering su limiti di WIP e focus.",
      tr: "Ürün ve mühendisliğe WIP sınırları ve odak koçluğu yapmak."
          },
          {
            en: "Protect the team from chaotic interrupt-driven work.",
            ua: "Захищати команду від хаотичної роботи «на перериваннях».",
            de: "Das Team vor chaotischer, interruptgetriebener Arbeit schützen.",
      fr: "Protéger l’équipe d’un travail chaotique mené par les interruptions.",
      es: "Proteger al equipo del trabajo caótico impulsado por interrupciones.",
      it: "Proteggere il team dal lavoro caotico guidato dalle interruzioni.",
      tr: "Ekibi kesintilerle giden kaotik işten korumak."
          },
          {
            en: "Help improve metrics that matter (lead time, not vanity velocity).",
            ua: "Покращувати метрики, які мають сенс (lead time, а не показникову velocity).",
            de: "Kennzahlen verbessern, die zählen (Lead Time, nicht Vanity Velocity).",
      fr: "Aider à améliorer les métriques qui comptent (lead time, pas une velocity de prestige).",
      es: "Ayudar a mejorar métricas que importan (lead time, no velocity de escaparate).",
      it: "Aiutare a migliorare le metriche che contano (lead time, non velocity da vetrina).",
      tr: "İşleyen metrikleri iyileştirmek (lead time, gösteriş hızı değil)."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Facilitation, coaching stance, conflict navigation",
            ua: "Фасилітація, коучингова позиція, робота з конфліктами",
            de: "Moderation, Coaching-Haltung, Konflikte navigieren",
      fr: "Facilitation, posture de coach, navigation des conflits",
      es: "Facilitación, postura de coaching, navegación de conflictos",
      it: "Facilitazione, postura di coaching, navigazione dei conflitti",
      tr: "Kolaylaştırıcılık, koç duruşu, çatışmada yol bulmak"
          },
          {
            en: "Agile principles beyond ritual checklists",
            ua: "Принципи agile глибше за ритуальні чеклісти",
            de: "Agile Prinzipien jenseits von Ritual-Checklisten",
      fr: "Principes agile au-delà des checklists rituelles",
      es: "Principios agile más allá de las listas rituales",
      it: "Principi agile oltre le checklist rituali",
      tr: "Tören kontrol listelerinin ötesinde agile ilkeler"
          },
          {
            en: "Systems thinking about handoffs and delays",
            ua: "Системне мислення про передачі й затримки",
            de: "Systemdenken über Übergaben und Verzögerungen",
      fr: "Pensée systémique sur les passations et les délais",
      es: "Pensamiento sistémico sobre traspasos y retrasos",
      it: "Pensiero sistemico su passaggi e ritardi",
      tr: "Teslimler ve gecikmeler üzerine sistem düşüncesi"
          },
          {
            en: "Enough domain/tech context to spot real blockers",
            ua: "Достатньо доменного/технічного контексту, щоб бачити справжні блокери",
            de: "Genug Domänen-/Technikkontext, um echte Blocker zu sehen",
      fr: "Assez de contexte métier/tech pour voir les vrais blocages",
      es: "Suficiente contexto de dominio/técnico para ver bloqueos de verdad",
      it: "Abbastanza contesto di dominio/tech per vedere i blocker veri",
      tr: "Gerçek engelleri görmek için yeterli alan/teknik bağlam"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "Multiple interdependent teams, chronic thrash, or when process problems are stealing more time than coding - and nobody owns improvement.",
            ua: "Кілька взаємозалежних команд, хронічний хаос, або коли процес краде більше часу, ніж код, — і ніхто не тримає покращення.",
            de: "Mehrere abhängige Teams, chronisches Thrash, oder wenn Prozessprobleme mehr Zeit stehlen als Coding — und niemand Verbesserung trägt.",
      fr: "Plusieurs équipes interdépendantes, chaos chronique, ou quand le process vole plus de temps que le code — et que personne ne porte l’amélioration.",
      es: "Varios equipos interdependientes, caos crónico, o cuando el proceso roba más tiempo que el código — y nadie sostiene la mejora.",
      it: "Più team interdipendenti, caos cronico, o quando il processo ruba più tempo del codice — e nessuno porta il miglioramento.",
      tr: "Birbirine bağlı birçok ekip, kronik savrulma veya süreç koddan çok zaman çalıyorsa — ve iyileştirmeyi kimse sahiplenmiyorsa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "If the only output is more meetings, the role failed. If lead time drops and people breathe, it worked.",
            ua: "Якщо єдиний вихід — більше мітингів, роль провалилась. Якщо lead time падає і людям легше дихати — спрацювало.",
            de: "Ist der einzige Output mehr Meetings, ist die Rolle gescheitert. Sinkt die Lead Time und können Menschen atmen, hat sie funktioniert.",
      fr: "Si le seul livrable est plus de réunions, le rôle a échoué. Si le lead time baisse et que les gens respirent, ça a marché.",
      es: "Si la única salida son más reuniones, el rol falló. Si baja el lead time y la gente respira, funcionó.",
      it: "Se l’unico output sono più riunioni, il ruolo è fallito. Se il lead time scende e le persone respirano, ha funzionato.",
      tr: "Tek çıktı daha fazla toplantıysa rol düştü. Lead time düşüp insanlar nefes alıyorsa işe yaradı."
          }
        ]
      }
    ]
  },
  {
    slug: "database-administrator-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Database Administrator (DBA) Do? Performance, Safety, Scale",
      ua: "Чим займається DBA: швидкість, безпека, масштаб баз даних",
      de: "Was macht ein DBA? Leistung, Sicherheit, Skala",
      fr: "Que fait un DBA ? Performances, sûreté, échelle",
      es: "¿Qué hace un DBA? Rendimiento, seguridad, escala",
      it: "Cosa fa un DBA? Prestazioni, sicurezza, scala",
      tr: "DBA ne yapar? Performans, güvenlik, ölçek"
    },
    excerpt: {
      en: "DBAs keep databases fast, safe, and recoverable. Responsibilities in the age of managed cloud databases - and when you still need one.",
      ua: "DBA тримає бази швидкими, безпечними й відновлюваними. Обов’язки в добу керованих хмарних баз — і коли ця людина все ще потрібна.",
      de: "DBAs halten Datenbanken schnell, sicher und wiederherstellbar. Aufgaben im Zeitalter gemanagter Cloud-Datenbanken — und wann Sie trotzdem eine brauchen.",
      fr: "Le DBA tient les bases rapides, sûres et récupérables. Missions à l’ère des bases cloud managées — et quand vous en avez encore besoin.",
      es: "El DBA mantiene las bases rápidas, seguras y recuperables. Funciones en la era de las bases gestionadas en cloud — y cuándo sigue haciendo falta.",
      it: "Il DBA tiene i database veloci, sicuri e ripristinabili. Mansioni nell’era dei database gestiti in cloud — e quando serve ancora.",
      tr: "DBA veritabanlarını hızlı, güvenli ve kurtarılabilir tutar. Yönetilen bulut veritabanları çağında görevler — ve hâlâ ne zaman ihtiyaç olduğu."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Database",
        "IT Roles",
        "DBA",
        "PostgreSQL"
      ],
      ua: [
        "Кар'єра",
        "Бази даних",
        "ІТ-ролі",
        "DBA",
        "PostgreSQL"
      ],
      de: [
        "Karriere",
        "Datenbanken",
        "IT-Rollen",
        "DBA",
        "PostgreSQL"
      ],
      fr: [
        "Carrière",
        "Bases de données",
        "Métiers IT",
        "DBA",
        "PostgreSQL"
      ],
      es: [
        "Carrera",
        "Bases de datos",
        "Roles IT",
        "DBA",
        "PostgreSQL"
      ],
      it: [
        "Carriera",
        "Database",
        "Ruoli IT",
        "DBA",
        "PostgreSQL"
      ],
      tr: [
        "Kariyer",
        "Veritabanı",
        "IT rolleri",
        "DBA",
        "PostgreSQL"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A database administrator specializes in the health of data stores: schema strategy, indexing, backups, replication, access control, and performance under load. Developers design queries; DBAs ensure the data platform survives growth and failure.",
            ua: "DBA спеціалізується на здоров’ї сховищ даних: стратегія схем, індекси, бекапи, реплікація, доступ і швидкість під навантаженням. Розробники пишуть запити; DBA дбає, щоб платформа даних витримала ріст і відмову.",
            de: "Ein DBA spezialisiert sich auf die Gesundheit von Datenspeichern: Schema-Strategie, Indexe, Backups, Replikation, Zugriff und Leistung unter Last. Entwickler schreiben Abfragen; DBAs sorgen dafür, dass die Datenplattform Wachstum und Ausfall überlebt.",
      fr: "Un DBA se spécialise dans la santé des stores de données : stratégie de schémas, index, sauvegardes, réplication, accès et perf sous charge. Les devs écrivent les requêtes ; le DBA fait tenir la plateforme data à la croissance et à la panne.",
      es: "Un DBA se especializa en la salud de los almacenes: estrategia de esquemas, índices, copias, replicación, acceso y rendimiento bajo carga. Desarrollo escribe consultas; el DBA hace que la plataforma de datos sobreviva al crecimiento y al fallo.",
      it: "Un DBA si specializza nella salute dei data store: strategia di schema, indici, backup, replica, accessi e prestazioni sotto carico. Gli sviluppatori scrivono le query; il DBA fa sì che la piattaforma dati sopravviva a crescita e guasto.",
      tr: "Bir DBA, veri depolarının sağlığında uzmanlaşır: şema stratejisi, dizinler, yedekler, çoğaltma, erişim ve yük altında performans. Geliştiriciler sorgu yazar; DBA veri platformunun büyümeyi ve arızayı taşımasını sağlar."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Tune queries/indexes and diagnose locking/slow plans.",
            ua: "Тюнити запити й індекси, діагностувати блокування й повільні плани.",
            de: "Queries/Indexe tunen und Locking sowie langsame Pläne diagnostizieren.",
      fr: "Régler requêtes/index et diagnostiquer verrous et plans lents.",
      es: "Afinar consultas/índices y diagnosticar bloqueos y planes lentos.",
      it: "Tarare query/indici e diagnosticare locking e piani lenti.",
      tr: "Sorgu/dizin ayarlamak, kilitleme ve yavaş planları teşhis etmek."
          },
          {
            en: "Design backup/restore, HA, and replication strategies.",
            ua: "Проєктувати стратегії бекапу/відновлення, відмовостійкості й реплікації.",
            de: "Backup/Restore, HA und Replikationsstrategien entwerfen.",
      fr: "Concevoir sauvegarde/reprise, HA et stratégies de réplication.",
      es: "Diseñar copias/restauración, HA y estrategias de replicación.",
      it: "Progettare backup/ripristino, HA e strategie di replica.",
      tr: "Yedek/geri yükleme, yüksek erişilebilirlik ve çoğaltma stratejileri tasarlamak."
          },
          {
            en: "Manage roles, encryption, auditing, and data retention.",
            ua: "Керувати ролями, шифруванням, аудитом і зберіганням даних.",
            de: "Rollen, Verschlüsselung, Auditing und Aufbewahrung verwalten.",
      fr: "Gérer rôles, chiffrement, audit et rétention des données.",
      es: "Gestionar roles, cifrado, auditoría y retención de datos.",
      it: "Gestire ruoli, cifratura, audit e retention dei dati.",
      tr: "Rolleri, şifrelemeyi, denetimi ve veri saklamayı yönetmek."
          },
          {
            en: "Plan capacity, partitioning, and migration cutovers.",
            ua: "Планувати ємність, партиціонування й перемикання міграцій.",
            de: "Kapazität, Partitionierung und Migrations-Cutovers planen.",
      fr: "Planifier capacité, partitionnement et bascules de migration.",
      es: "Planificar capacidad, particionado y cortes de migración.",
      it: "Pianificare capacità, partizionamento e cutover di migrazione.",
      tr: "Kapasite, bölümleme ve göç kesişlerini planlamak."
          },
          {
            en: "Support developers with schema review and standards.",
            ua: "Підтримувати розробку рев’ю схем і стандартами.",
            de: "Entwickler mit Schema-Reviews und Standards stützen.",
      fr: "Soutenir les devs par la revue de schémas et des standards.",
      es: "Apoyar a desarrollo con revisión de esquemas y estándares.",
      it: "Sostenere lo sviluppo con review di schema e standard.",
      tr: "Geliştiricileri şema incelemesi ve standartlarla desteklemek."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Deep SQL engine expertise (PostgreSQL/MySQL/SQL Server/Oracle)",
            ua: "Глибока експертиза SQL-рушія (PostgreSQL/MySQL/SQL Server/Oracle)",
            de: "Tiefes SQL-Engine-Wissen (PostgreSQL/MySQL/SQL Server/Oracle)",
      fr: "Expertise profonde du moteur SQL (PostgreSQL/MySQL/SQL Server/Oracle)",
      es: "Pericia profunda del motor SQL (PostgreSQL/MySQL/SQL Server/Oracle)",
      it: "Competenza profonda del motore SQL (PostgreSQL/MySQL/SQL Server/Oracle)",
      tr: "Derin SQL motoru uzmanlığı (PostgreSQL/MySQL/SQL Server/Oracle)"
          },
          {
            en: "Backup tooling, replication, monitoring",
            ua: "Інструменти бекапу, реплікація, моніторинг",
            de: "Backup-Tools, Replikation, Monitoring",
      fr: "Outils de sauvegarde, réplication, supervision",
      es: "Herramientas de copia, replicación, monitorización",
      it: "Tool di backup, replica, monitoraggio",
      tr: "Yedek araçları, çoğaltma, izleme"
          },
          {
            en: "Performance methodology and incident calm",
            ua: "Методика швидкості й спокій на інциденті",
            de: "Performance-Methodik und Ruhe im Incident",
      fr: "Méthode de perf et calme en incident",
      es: "Metodología de rendimiento y calma en el incidente",
      it: "Metodologia di prestazioni e calma in incident",
      tr: "Performans yöntemi ve olayda sakinlik"
          },
          {
            en: "Cloud managed DB services and their limits",
            ua: "Керовані хмарні БД і їхні межі",
            de: "Gemanagte Cloud-DB-Dienste und ihre Grenzen",
      fr: "Services de bases cloud managés et leurs limites",
      es: "Servicios de bases gestionadas en cloud y sus límites",
      it: "Servizi DB gestiti in cloud e i loro limiti",
      tr: "Yönetilen bulut DB servisleri ve sınırları"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "Large datasets, strict RPO/RTO, multi-tenant SaaS, or when “the database is slow” becomes a weekly crisis.",
            ua: "Великі набори даних, жорсткі RPO/RTO, мультитентний SaaS — або коли «база гальмує» стає щотижневою кризою.",
            de: "Große Datensätze, strenge RPO/RTO, Multi-Tenant-SaaS — oder wenn „die Datenbank ist langsam“ zur Wochenkrise wird.",
      fr: "Gros volumes, RPO/RTO stricts, SaaS multi-tenant — ou quand « la base est lente » devient une crise hebdo.",
      es: "Conjuntos grandes, RPO/RTO estrictos, SaaS multiinquilino — o cuando «la base va lenta» se vuelve crisis semanal.",
      it: "Dataset grandi, RPO/RTO stretti, SaaS multi-tenant — o quando «il database è lento» diventa una crisi settimanale.",
      tr: "Büyük veri kümeleri, sıkı RPO/RTO, çok kiracılı SaaS — veya «veritabanı yavaş» haftalık kriz olduysa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Managed databases reduce ops burden, but they do not replace judgment about schema, indexes, and recovery drills.",
            ua: "Керовані бази знімають операційне навантаження, але не замінюють судження про схему, індекси й тренування відновлення.",
            de: "Gemanagte Datenbanken senken den Ops-Aufwand, ersetzen aber kein Urteil über Schema, Indexe und Wiederherstellungsübungen.",
      fr: "Les bases managées allègent l’ops, mais ne remplacent pas le jugement sur schéma, index et exercices de reprise.",
      es: "Las bases gestionadas bajan la carga de ops, pero no sustituyen el juicio sobre esquema, índices y simulacros de recuperación.",
      it: "I database gestiti alleggeriscono l’ops, ma non sostituiscono il giudizio su schema, indici ed esercizi di ripristino.",
      tr: "Yönetilen veritabanları işletim yükünü azaltır ama şema, dizin ve kurtarma talimi muhakemesinin yerini tutmaz."
          }
        ]
      }
    ]
  },
  {
    slug: "blockchain-web3-developer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Blockchain / Web3 Developer Do? Smart Contracts and dApps",
      ua: "Чим займається Blockchain / Web3-розробник: смартконтракти й dApp",
      de: "Was macht ein Blockchain-/Web3-Entwickler? Smart Contracts und dApps",
      fr: "Que fait un développeur Blockchain / Web3 ? Smart contracts et dApps",
      es: "¿Qué hace un desarrollador Blockchain / Web3? Smart contracts y dApps",
      it: "Cosa fa uno sviluppatore Blockchain / Web3? Smart contract e dApp",
      tr: "Blockchain / Web3 geliştirici ne yapar? Smart contract’lar ve dApp’ler"
    },
    excerpt: {
      en: "Web3 developers build on-chain logic and wallet-connected apps. Responsibilities, risks, and when blockchain is the wrong tool.",
      ua: "Web3-розробники збирають ончейн-логіку й застосунки з гаманцем. Обов’язки, ризики і коли блокчейн — неправильний інструмент.",
      de: "Web3-Entwickler bauen On-Chain-Logik und Wallet-Apps. Aufgaben, Risiken und wann Blockchain das falsche Werkzeug ist.",
      fr: "Les développeurs Web3 construisent la logique on-chain et des apps reliées au portefeuille. Missions, risques, et quand la blockchain est le mauvais outil.",
      es: "Los desarrolladores Web3 construyen lógica on-chain y apps conectadas a wallet. Funciones, riesgos y cuándo blockchain es la herramienta equivocada.",
      it: "Gli sviluppatori Web3 costruiscono logica on-chain e app collegate al wallet. Mansioni, rischi e quando la blockchain è lo strumento sbagliato.",
      tr: "Web3 geliştiriciler zincir üstü mantık ve cüzdana bağlı uygulamalar kurar. Görevler, riskler ve blockchain’in ne zaman yanlış araç olduğu."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Blockchain",
        "Web3",
        "IT Roles"
      ],
      ua: [
        "Кар'єра",
        "Blockchain",
        "Web3",
        "ІТ-ролі"
      ],
      de: [
        "Karriere",
        "Blockchain",
        "Web3",
        "IT-Rollen"
      ],
      fr: [
        "Carrière",
        "Blockchain",
        "Web3",
        "Métiers IT"
      ],
      es: [
        "Carrera",
        "Blockchain",
        "Web3",
        "Roles IT"
      ],
      it: [
        "Carriera",
        "Blockchain",
        "Web3",
        "Ruoli IT"
      ],
      tr: [
        "Kariyer",
        "Blockchain",
        "Web3",
        "IT rolleri"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A blockchain/Web3 developer builds decentralized applications: smart contracts, wallet integrations, indexers, and often the web UI that talks to chains. Correctness and security matter more than shipping speed - bugs on-chain are expensive.",
            ua: "Blockchain/Web3-розробник збирає децентралізовані застосунки: смартконтракти, інтеграції гаманців, індексатори й часто вебінтерфейс до чейнів. Коректність і безпека важливіші за швидкість релізу — баги ончейн дорогі.",
            de: "Ein Blockchain-/Web3-Entwickler baut dezentrale Anwendungen: Smart Contracts, Wallet-Anbindung, Indexer und oft die Web-UI zur Chain. Korrektheit und Sicherheit zählen mehr als Release-Tempo — Bugs on-chain sind teuer.",
      fr: "Un développeur blockchain/Web3 construit des apps décentralisées : smart contracts, intégrations wallet, indexeurs, et souvent l’UI web qui parle aux chaînes. Exactitude et sécu pèsent plus que la vitesse de livraison — un bug on-chain coûte cher.",
      es: "Un desarrollador blockchain/Web3 construye aplicaciones descentralizadas: smart contracts, integraciones de wallet, indexadores y a menudo la UI web que habla con las cadenas. Corrección y seguridad pesan más que la velocidad de entrega: un bug on-chain es caro.",
      it: "Uno sviluppatore blockchain/Web3 costruisce applicazioni decentralizzate: smart contract, integrazioni wallet, indexer e spesso la UI web che parla alle chain. Correttezza e security pesano più della velocità di rilascio — i bug on-chain costano.",
      tr: "Bir blockchain/Web3 geliştirici merkeziyetsiz uygulamalar kurar: smart contract’lar, cüzdan entegrasyonları, dizinleyiciler ve çoğu zaman zincirle konuşan web arayüzü. Doğruluk ve güvenlik teslim hızından önemlidir — zincir üstü hatalar pahalıdır."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Write and test smart contracts; plan upgrades carefully.",
            ua: "Писати й тестувати смартконтракти; обережно планувати апгрейди.",
            de: "Smart Contracts schreiben und testen; Upgrades sorgfältig planen.",
      fr: "Écrire et tester les smart contracts ; planifier les upgrades avec soin.",
      es: "Escribir y probar smart contracts; planificar upgrades con cuidado.",
      it: "Scrivere e testare smart contract; pianificare gli upgrade con cura.",
      tr: "Smart contract yazıp test etmek; yükseltmeleri özenle planlamak."
          },
          {
            en: "Integrate wallets, signatures, and chain reads/writes in apps.",
            ua: "Підключати гаманці, підписи й читання/запис чейну в застосунках.",
            de: "Wallets, Signaturen und Chain-Reads/Writes in Apps anbinden.",
      fr: "Brancher wallets, signatures et lectures/écritures de chaîne dans les apps.",
      es: "Integrar wallets, firmas y lecturas/escrituras de cadena en las apps.",
      it: "Integrare wallet, firme e letture/scritture di chain nelle app.",
      tr: "Uygulamalarda cüzdan, imza ve zincir okuma/yazmayı bağlamak."
          },
          {
            en: "Work with auditors; think adversary-first about money flows.",
            ua: "Працювати з аудиторами; думати як супротивник про грошові потоки.",
            de: "Mit Auditoren arbeiten; Geldflüsse zuerst aus Angreifersicht denken.",
      fr: "Travailler avec des auditeurs ; penser d’abord en adversaire aux flux d’argent.",
      es: "Trabajar con auditores; pensar primero como adversario los flujos de dinero.",
      it: "Lavorare con gli auditor; pensare prima da avversario ai flussi di denaro.",
      tr: "Denetçilerle çalışmak; para akışlarını önce saldırgan gibi düşünmek."
          },
          {
            en: "Build indexers/APIs for usable product experiences.",
            ua: "Збирати індексатори/API для зручного продуктового досвіду.",
            de: "Indexer/APIs für nutzbare Produkterlebnisse bauen.",
      fr: "Construire indexeurs/API pour des expériences produit utilisables.",
      es: "Montar indexadores/APIs para experiencias de producto usables.",
      it: "Costruire indexer/API per esperienze di prodotto usabili.",
      tr: "Kullanılabilir ürün deneyimi için dizinleyici/API kurmak."
          },
          {
            en: "Explain gas, finality, and UX constraints to stakeholders.",
            ua: "Пояснювати стейкхолдерам газ, фінальність і обмеження UX.",
            de: "Gas, Finalität und UX-Grenzen Stakeholdern erklären.",
      fr: "Expliquer gas, finalité et contraintes d’UX aux parties prenantes.",
      es: "Explicar gas, finalidad y límites de UX a los interesados.",
      it: "Spiegare gas, finality e vincoli di UX agli stakeholder.",
      tr: "Paydaşlara gaz, kesinlik ve UX kısıtlarını anlatmak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Solidity (or chain-specific languages), security patterns",
            ua: "Solidity (або мови під конкретний чейн), патерни безпеки",
            de: "Solidity (oder chain-spezifische Sprachen), Security-Muster",
      fr: "Solidity (ou langages propres à une chaîne), motifs de sécu",
      es: "Solidity (o lenguajes de una cadena), patrones de seguridad",
      it: "Solidity (o linguaggi specifici di chain), pattern di security",
      tr: "Solidity (veya zincire özgü diller), güvenlik kalıpları"
          },
          {
            en: "ethers.js/viem, wallet flows, testing frameworks",
            ua: "ethers.js/viem, сценарії гаманця, тестові фреймворки",
            de: "ethers.js/viem, Wallet-Flows, Test-Frameworks",
      fr: "ethers.js/viem, parcours wallet, cadres de test",
      es: "ethers.js/viem, flujos de wallet, marcos de test",
      it: "ethers.js/viem, flussi wallet, framework di test",
      tr: "ethers.js/viem, cüzdan akışları, test çerçeveleri"
          },
          {
            en: "Frontend skills for dApps; cryptography basics",
            ua: "Frontend-навички для dApp; основи криптографії",
            de: "Frontend-Skills für dApps; Kryptografie-Grundlagen",
      fr: "Compétences frontend pour dApps ; bases de crypto",
      es: "Competencias frontend para dApps; bases de criptografía",
      it: "Competenze frontend per dApp; basi di crittografia",
      tr: "dApp için frontend becerileri; kriptografi temelleri"
          },
          {
            en: "Threat modeling around economic exploits",
            ua: "Моделювання загроз навколо економічних експлойтів",
            de: "Threat Modeling um ökonomische Exploits",
      fr: "Modélisation des menaces autour des exploits économiques",
      es: "Modelado de amenazas en torno a exploits económicos",
      it: "Threat modeling intorno agli exploit economici",
      tr: "Ekonomik sömürüler etrafında tehdit modelleme"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When decentralization, on-chain settlement, or token/NFT logic is a core product requirement - not a buzzword bolted onto a normal database app.",
            ua: "Коли децентралізація, ончейн-розрахунки чи логіка токенів/NFT — ядрова вимога продукту, а не модне слово, прикручене до звичайного застосунку з базою.",
            de: "Wenn Dezentralisierung, On-Chain-Settlement oder Token-/NFT-Logik eine Kernanforderung ist — kein Buzzword an einer normalen Datenbank-App.",
      fr: "Quand la décentralisation, le règlement on-chain ou la logique token/NFT est un besoin cœur — pas un mot à la mode boulonné sur une app base classique.",
      es: "Cuando la descentralización, la liquidación on-chain o la lógica de token/NFT es un requisito de núcleo — no un eslogan atornillado a una app de base normal.",
      it: "Quando decentralizzazione, settlement on-chain o logica token/NFT è un requisito di nucleo — non uno slogan avvitato su un’app database normale.",
      tr: "Merkeziyetsizlik, zincir üstü uzlaşma veya token/NFT mantığı çekirdek ürün gereksinimiyse — sıradan bir veritabanı uygulamasına vidalanmış moda sözcük değilse."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Most businesses do not need a blockchain. Those that do need engineers who treat security as the product.",
            ua: "Більшості бізнесів блокчейн не потрібен. Тим, кому потрібен, — інженери, для яких безпека і є продукт.",
            de: "Die meisten Unternehmen brauchen keine Blockchain. Wer sie braucht, braucht Engineers, die Sicherheit als das Produkt behandeln.",
      fr: "La plupart des entreprises n’ont pas besoin d’une blockchain. Celles qui en ont besoin veulent des ingénieurs qui traitent la sécu comme le produit.",
      es: "La mayoría de los negocios no necesitan blockchain. Los que sí, necesitan ingenieros que traten la seguridad como el producto.",
      it: "La maggior parte delle aziende non ha bisogno di una blockchain. Chi ne ha bisogno vuole ingegneri che trattino la security come il prodotto.",
      tr: "Çoğu işin blockchain’e ihtiyacı yoktur. İhtiyacı olanlar, güvenliği ürün sayan mühendis ister."
          }
        ]
      }
    ]
  },
  {
    slug: "technical-support-engineer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Technical Support Engineer Do? From Tickets to Root Cause",
      ua: "Чим займається інженер техпідтримки: від тікета до кореневої причини",
      de: "Was macht ein Technical-Support-Ingenieur? Vom Ticket zur Ursache",
      fr: "Que fait un ingénieur support technique ? Du ticket à la cause racine",
      es: "¿Qué hace un ingeniero de soporte técnico? Del ticket a la causa raíz",
      it: "Cosa fa un technical support engineer? Dal ticket alla causa radice",
      tr: "Teknik destek mühendisi ne yapar? Biletten kök nedene"
    },
    excerpt: {
      en: "Support engineers keep customers unblocked and feed product quality. L1-L3 scope, skills, and why great support is a growth channel.",
      ua: "Підтримка розблоковує клієнтів і живить якість продукту. Обсяг L1–L3, навички і чому сильна підтримка — канал росту.",
      de: "Support hält Kund:innen entblockt und speist Produktqualität. L1–L3-Umfang, Skills und warum starker Support ein Wachstumskanal ist.",
      fr: "Le support débloque les clients et nourrit la qualité produit. Périmètre L1–L3, compétences, et pourquoi un bon support est un canal de croissance.",
      es: "El soporte desbloquea a los clientes y alimenta la calidad de producto. Alcance L1–L3, competencias y por qué un gran soporte es un canal de crecimiento.",
      it: "Il support sblocca i clienti e alimenta la qualità di prodotto. Perimetro L1–L3, competenze e perché un supporto solido è un canale di crescita.",
      tr: "Destek müşteriyi açık tutar ve ürün kalitesini besler. L1–L3 kapsamı, yetkinlikler ve iyi desteğin neden bir büyüme kanalı olduğu."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Support",
        "IT Roles",
        "Customer Success"
      ],
      ua: [
        "Кар'єра",
        "Підтримка",
        "ІТ-ролі",
        "Customer Success"
      ],
      de: [
        "Karriere",
        "Support",
        "IT-Rollen",
        "Customer Success"
      ],
      fr: [
        "Carrière",
        "Support",
        "Métiers IT",
        "Customer success"
      ],
      es: [
        "Carrera",
        "Soporte",
        "Roles IT",
        "Customer success"
      ],
      it: [
        "Carriera",
        "Support",
        "Ruoli IT",
        "Customer success"
      ],
      tr: [
        "Kariyer",
        "Destek",
        "IT rolleri",
        "Müşteri başarısı"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A technical support engineer helps users solve product problems: reproduce bugs, explain workarounds, escalate to engineering, and turn repeated pain into product fixes. Senior support often becomes a bridge between customers and builders.",
            ua: "Інженер техпідтримки допомагає розв’язати продуктові проблеми: відтворити баг, пояснити обхідний шлях, ескалювати в інженерію й перетворити повторюваний біль на фікс. Сеньйорна підтримка часто стає містком між клієнтами й тими, хто будує.",
            de: "Ein Technical-Support-Ingenieur hilft, Produktprobleme zu lösen: Bugs reproduzieren, Workarounds erklären, an Engineering eskalieren und wiederkehrenden Schmerz in Fixes verwandeln. Senior Support wird oft zur Brücke zwischen Kund:innen und Bauenden.",
      fr: "Un ingénieur support aide à résoudre les problèmes produit : reproduire les bugs, expliquer les contournements, escalader vers l’ingénierie et transformer la douleur répétée en correctifs. Le support senior devient souvent un pont entre clients et bâtisseurs.",
      es: "Un ingeniero de soporte ayuda a resolver problemas de producto: reproducir bugs, explicar atajos, escalar a ingeniería y convertir el dolor repetido en correcciones. El soporte senior suele ser el puente entre clientes y quien construye.",
      it: "Un technical support engineer aiuta a risolvere i problemi di prodotto: riprodurre i bug, spiegare i workaround, escalare all’engineering e trasformare il dolore ripetuto in fix. Il support senior spesso diventa il ponte tra clienti e chi costruisce.",
      tr: "Bir teknik destek mühendisi ürün sorunlarını çözmeye yardım eder: hatayı yeniden üretmek, geçici yolu anlatmak, mühendisliğe yükseltmek ve yinelenen acıyı düzeltmeye çevirmek. Kıdemli destek çoğu zaman müşteri ile kuranlar arasında köprü olur."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Triage tickets by severity and customer impact.",
            ua: "Сортувати тікети за критичністю й впливом на клієнта.",
            de: "Tickets nach Schwere und Kundenwirkung triagieren.",
      fr: "Trier les tickets par gravité et impact client.",
      es: "Triar tickets por gravedad e impacto en el cliente.",
      it: "Fare triage dei ticket per gravità e impatto sul cliente.",
      tr: "Biletleri ciddiyet ve müşteri etkisine göre ayırmak."
          },
          {
            en: "Reproduce issues, gather logs, and write clear escalations.",
            ua: "Відтворювати проблеми, збирати логи й писати чіткі ескалації.",
            de: "Probleme reproduzieren, Logs sammeln, klare Eskalationen schreiben.",
      fr: "Reproduire les soucis, collecter les journaux, écrire des escalades claires.",
      es: "Reproducir incidencias, reunir registros y escribir escalados claros.",
      it: "Riprodurre i problemi, raccogliere i log e scrivere escalation chiare.",
      tr: "Sorunları yeniden üretmek, log toplamak ve net yükseltmeler yazmak."
          },
          {
            en: "Maintain knowledge bases and onboarding help content.",
            ua: "Тримати базу знань і матеріали допомоги на онбордингу.",
            de: "Wissensdatenbanken und Onboarding-Hilfe pflegen.",
      fr: "Tenir bases de connaissance et contenus d’aide à l’onboarding.",
      es: "Mantener bases de conocimiento y ayudas de onboarding.",
      it: "Tenere knowledge base e contenuti di aiuto all’onboarding.",
      tr: "Bilgi tabanlarını ve karşılama yardım içeriğini tutmak."
          },
          {
            en: "Spot patterns that should become bugs or UX fixes.",
            ua: "Бачити патерни, які мають стати багами або UX-фіксами.",
            de: "Muster erkennen, die Bugs oder UX-Fixes werden sollten.",
      fr: "Repérer les motifs qui devraient devenir bugs ou correctifs d’UX.",
      es: "Ver patrones que deberían ser bugs o correcciones de UX.",
      it: "Cogliere i pattern che dovrebbero diventare bug o fix di UX.",
      tr: "Hata veya UX düzeltmesi olması gereken kalıpları görmek."
          },
          {
            en: "Protect customer trust during incidents with timely updates.",
            ua: "Під час інцидентів берегти довіру клієнта вчасними оновленнями.",
            de: "Im Incident Kundenvertrauen durch rechtzeitige Updates schützen.",
      fr: "Pendant un incident, protéger la confiance client par des mises à jour à temps.",
      es: "Durante un incidente, proteger la confianza del cliente con actualizaciones a tiempo.",
      it: "Durante un incident, proteggere la fiducia del cliente con aggiornamenti tempestivi.",
      tr: "Olay sırasında zamanında güncellemelerle müşteri güvenini korumak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Product expertise, patience, precise writing",
            ua: "Знання продукту, терпіння, точне письмо",
            de: "Produktkenntnis, Geduld, präzises Schreiben",
      fr: "Expertise produit, patience, écriture précise",
      es: "Pericia de producto, paciencia, escritura precisa",
      it: "Esperienza di prodotto, pazienza, scrittura precisa",
      tr: "Ürün uzmanlığı, sabır, kesin yazı"
          },
          {
            en: "Basic technical literacy: logs, HTTP, SQL/admin panels",
            ua: "Базова технічна грамотність: логи, HTTP, SQL / адмінпанелі",
            de: "Technische Grundkompetenz: Logs, HTTP, SQL/Admin-Panels",
      fr: "Culture technique de base : journaux, HTTP, SQL/panneaux admin",
      es: "Alfabetización técnica básica: registros, HTTP, SQL/paneles admin",
      it: "Alfabetizzazione tecnica di base: log, HTTP, SQL/pannelli admin",
      tr: "Temel teknik okuryazarlık: log, HTTP, SQL/yönetim panelleri"
          },
          {
            en: "Empathy without overpromising",
            ua: "Емпатія без зайвих обіцянок",
            de: "Empathie ohne Überversprechen",
      fr: "Empathie sans trop promettre",
      es: "Empatía sin prometer de más",
      it: "Empatia senza promettere troppo",
      tr: "Fazla vaat etmeden empati"
          },
          {
            en: "For L3: deeper debugging with engineering tools",
            ua: "Для L3: глибший дебаг інженерними інструментами",
            de: "Für L3: tieferes Debuggen mit Engineering-Tools",
      fr: "Pour le L3 : débogage plus profond avec les outils d’ingénierie",
      es: "Para L3: depuración más honda con herramientas de ingeniería",
      it: "Per L3: debug più profondo con tool engineering",
      tr: "L3 için: mühendislik araçlarıyla daha derin hata ayıklama"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When founders/engineers drown in tickets, churn rises after confusing UX, or B2B clients expect SLAs and a human who understands the system.",
            ua: "Коли фаундери й інженери тонуть у тікетах, відтік росте після заплутаного UX, або B2B-клієнти чекають SLA і людину, яка розуміє систему.",
            de: "Wenn Gründer/Engineers in Tickets ertrinken, Churn nach verwirrendem UX steigt oder B2B-Kunden SLAs und einen Menschen erwarten, der das System versteht.",
      fr: "Quand fondateurs/ingénieurs se noient dans les tickets, que le churn monte après une UX confuse, ou que les clients B2B attendent des SLA et un humain qui comprend le système.",
      es: "Cuando fundadores/ingenieros se ahogan en tickets, la baja sube tras un UX confuso o los clientes B2B esperan SLA y un humano que entienda el sistema.",
      it: "Quando founder/ingegneri annegono nei ticket, il churn sale dopo un UX confuso o i clienti B2B si aspettano SLA e un umano che capisca il sistema.",
      tr: "Kurucular/mühendisler bilette boğuluyorsa, kafa karıştıran UX sonrası kayıp yükseliyorsa veya B2B müşteriler SLA ve sistemi anlayan bir insan bekliyorsa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Support is not a cost center if it shortens time-to-value and feeds a better roadmap.",
            ua: "Підтримка — не центр витрат, якщо скорочує шлях до цінності й живить кращу дорожню карту.",
            de: "Support ist kein Cost Center, wenn er Time-to-Value verkürzt und eine bessere Roadmap speist.",
      fr: "Le support n’est pas un centre de coûts s’il raccourcit le temps jusqu’à la valeur et nourrit une meilleure feuille de route.",
      es: "El soporte no es un centro de coste si acorta el tiempo hasta el valor y alimenta una hoja de ruta mejor.",
      it: "Il support non è un centro di costo se accorcia il tempo al valore e alimenta una roadmap migliore.",
      tr: "Destek, değere giden süreyi kısaltıp daha iyi bir yol haritası besliyorsa maliyet merkezi değildir."
          }
        ]
      }
    ]
  },
  {
    slug: "technical-writer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Technical Writer Do? Docs That Unblock Users and Teams",
      ua: "Чим займається технічний письменник: тексти, які розблоковують людей і команди",
      de: "Was macht ein Technical Writer? Texte, die Nutzende und Teams entblocken",
      fr: "Que fait un rédacteur technique ? Des docs qui débloquent utilisateurs et équipes",
      es: "¿Qué hace un redactor técnico? Docs que desbloquean a usuarios y equipos",
      it: "Cosa fa un technical writer? Documenti che sbloccano utenti e team",
      tr: "Teknik yazar ne yapar? Kullanıcıyı ve ekibi açan metinler"
    },
    excerpt: {
      en: "Technical writers create docs, API references, and guides that reduce support load and speed adoption. When docs become a product.",
      ua: "Технічний письменник пише доки, API-довідники й гайди, які знімають навантаження з підтримки й прискорюють освоєння. Коли документація стає продуктом.",
      de: "Technical Writer erstellen Docs, API-Referenzen und Guides, die Support-Last senken und Adoption beschleunigen. Wann Dokumentation zum Produkt wird.",
      fr: "Le rédacteur technique crée docs, références d’API et guides qui allègent le support et accélèrent l’adoption. Quand la doc devient un produit.",
      es: "El redactor técnico crea docs, referencias de API y guías que bajan la carga de soporte y aceleran la adopción. Cuándo la documentación se vuelve producto.",
      it: "Il technical writer crea docs, riferimenti API e guide che alleggeriscono il support e accelerano l’adozione. Quando i documenti diventano un prodotto.",
      tr: "Teknik yazar, destek yükünü kesen ve benimsemeyi hızlandıran doküman, API başvurusu ve rehber yazar. Dokümantasyonun ne zaman ürün olduğu."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Technical Writing",
        "IT Roles",
        "Documentation"
      ],
      ua: [
        "Кар'єра",
        "Технічне письмо",
        "ІТ-ролі",
        "Документація"
      ],
      de: [
        "Karriere",
        "Technische Dokumentation",
        "IT-Rollen",
        "Dokumentation"
      ],
      fr: [
        "Carrière",
        "Rédaction technique",
        "Métiers IT",
        "Documentation"
      ],
      es: [
        "Carrera",
        "Redacción técnica",
        "Roles IT",
        "Documentación"
      ],
      it: [
        "Carriera",
        "Technical writing",
        "Ruoli IT",
        "Documentazione"
      ],
      tr: [
        "Kariyer",
        "Teknik yazarlık",
        "IT rolleri",
        "Dokümantasyon"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A technical writer turns complex systems into usable documentation: user guides, API references, release notes, runbooks, and in-product help. Great docs are a growth and efficiency feature, not an afterthought PDF.",
            ua: "Технічний письменник перетворює складні системи на придатну документацію: гайди, API-довідники, реліз-ноти, ранбуки, підказки в продукті. Добрі доки — це функція росту й ефективності, а не PDF наостанок.",
            de: "Ein Technical Writer macht aus komplexen Systemen nutzbare Dokumentation: User Guides, API-Referenzen, Release Notes, Runbooks, Hilfe im Produkt. Gute Docs sind eine Wachstums- und Effizienzfunktion — kein PDF hinterher.",
      fr: "Un rédacteur technique transforme des systèmes complexes en doc utilisable : guides, références d’API, notes de version, runbooks, aide dans le produit. Une bonne doc est une fonction de croissance et d’efficacité — pas un PDF après coup.",
      es: "Un redactor técnico convierte sistemas complejos en documentación usable: guías, referencias de API, notas de versión, runbooks y ayuda en el producto. Unos buenos docs son una función de crecimiento y eficiencia, no un PDF de último momento.",
      it: "Un technical writer trasforma sistemi complessi in documentazione usabile: guide, riferimenti API, note di rilascio, runbook e aiuto nel prodotto. Dei buoni docs sono una funzione di crescita ed efficienza, non un PDF a posteriori.",
      tr: "Bir teknik yazar karmaşık sistemleri kullanılabilir belgelere çevirir: kullanıcı rehberleri, API başvuruları, sürüm notları, çalışma kitapları, ürün içi yardım. İyi doküman büyüme ve verimlilik özelliğidir — sonradan eklenen PDF değil."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Interview SMEs and document real user tasks.",
            ua: "Інтерв’ювати експертів і документувати реальні задачі користувача.",
            de: "Fachexpert:innen befragen und echte Nutzeraufgaben dokumentieren.",
      fr: "Interviewer les experts métier et documenter de vraies tâches utilisateur.",
      es: "Entrevistar a expertos y documentar tareas reales de quien usa el producto.",
      it: "Intervistare gli SME e documentare compiti reali di chi usa il prodotto.",
      tr: "Konu uzmanlarıyla görüşmek ve gerçek kullanıcı görevlerini belgelemek."
          },
          {
            en: "Structure information architecture for docs sites.",
            ua: "Будувати інформаційну архітектуру сайтів документації.",
            de: "Informationsarchitektur für Docs-Sites strukturieren.",
      fr: "Structurer l’architecture d’information des sites de doc.",
      es: "Estructurar la arquitectura de información de los sites de docs.",
      it: "Strutturare l’information architecture dei siti di docs.",
      tr: "Doküman siteleri için bilgi mimarisini kurmak."
          },
          {
            en: "Write API/SDK references and code samples with engineers.",
            ua: "Разом з інженерами писати API/SDK-довідники й приклади коду.",
            de: "Mit Engineers API-/SDK-Referenzen und Codebeispiele schreiben.",
      fr: "Écrire avec les ingénieurs des références API/SDK et des extraits de code.",
      es: "Escribir con ingeniería referencias de API/SDK y ejemplos de código.",
      it: "Scrivere con gli ingegneri riferimenti API/SDK ed esempi di codice.",
      tr: "Mühendislerle API/SDK başvuruları ve kod örnekleri yazmak."
          },
          {
            en: "Keep docs in sync with releases; kill outdated pages.",
            ua: "Тримати доки в синхроні з релізами; прибирати застарілі сторінки.",
            de: "Docs mit Releases synchron halten; veraltete Seiten töten.",
      fr: "Tenir la doc alignée sur les releases ; tuer les pages périmées.",
      es: "Mantener los docs al día con las publicaciones; matar páginas caducadas.",
      it: "Tenere i docs allineati ai rilasci; uccidere le pagine obsolete.",
      tr: "Dokümanları sürümlerle eş tutmak; eskimiş sayfaları kaldırmak."
          },
          {
            en: "Measure doc usefulness via search, feedback, and support deflection.",
            ua: "Міряти користь доків через пошук, фідбек і те, скільки тікетів вони знімають.",
            de: "Nützlichkeit von Docs über Suche, Feedback und Support-Entlastung messen.",
      fr: "Mesurer l’utilité de la doc via recherche, retours et tickets évités.",
      es: "Medir la utilidad de los docs con búsqueda, feedback y tickets desviados.",
      it: "Misurare l’utilità dei docs con ricerca, feedback e ticket evitati.",
      tr: "Arama, geribildirim ve destek sapmasıyla dokümanın işe yararlığını ölçmek."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Clear writing, audience awareness, editing discipline",
            ua: "Чітке письмо, відчуття аудиторії, дисципліна редагування",
            de: "Klares Schreiben, Publikumssinn, Lektoratsdisziplin",
      fr: "Écriture claire, conscience du public, discipline d’édition",
      es: "Escritura clara, conciencia de audiencia, disciplina de edición",
      it: "Scrittura chiara, consapevolezza del pubblico, disciplina di editing",
      tr: "Net yazı, kitle farkındalığı, düzenleme disiplini"
          },
          {
            en: "Docs-as-code tools, basic markdown/git workflows",
            ua: "Інструменти docs-as-code, базові робочі процеси markdown/git",
            de: "Docs-as-Code-Tools, grundlegende Markdown-/Git-Workflows",
      fr: "Outils docs-as-code, workflows markdown/git de base",
      es: "Herramientas docs-as-code, flujos básicos de markdown/git",
      it: "Tool docs-as-code, workflow markdown/git di base",
      tr: "Docs-as-code araçları, temel markdown/git iş akışları"
          },
          {
            en: "Ability to learn technical domains quickly",
            ua: "Уміння швидко входити в технічні домени",
            de: "Technische Domänen schnell lernen können",
      fr: "Capacité à entrer vite dans des domaines techniques",
      es: "Capacidad de aprender dominios técnicos enseguida",
      it: "Capacità di imparare in fretta i domini tecnici",
      tr: "Teknik alanları çabuk öğrenme yetisi"
          },
          {
            en: "UX thinking for navigation and examples",
            ua: "UX-мислення для навігації й прикладів",
            de: "UX-Denken für Navigation und Beispiele",
      fr: "Pensée UX pour la navigation et les exemples",
      es: "Pensamiento UX para navegación y ejemplos",
      it: "Pensiero UX per navigazione ed esempi",
      tr: "Gezinme ve örnekler için UX düşüncesi"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "Developer platforms, APIs, complex B2B products, or when support volume is mostly “how do I…?” questions.",
            ua: "Платформи для розробників, API, складні B2B-продукти — або коли підтримка майже вся з питань «а як зробити…?».",
            de: "Entwicklerplattformen, APIs, komplexe B2B-Produkte — oder wenn das Support-Volumen vor allem „wie mache ich…?“-Fragen ist.",
      fr: "Plateformes développeur, API, produits B2B complexes — ou quand le volume support est surtout des « comment je fais… ? ».",
      es: "Plataformas para desarrolladores, APIs, productos B2B complejos — o cuando el volumen de soporte es sobre todo «¿cómo hago…?».",
      it: "Piattaforme per sviluppatori, API, prodotti B2B complessi — o quando il volume di support è soprattutto «come si fa…?».",
      tr: "Geliştirici platformları, API’ler, karmaşık B2B ürünler — veya destek hacmi çoğunlukla «nasıl yapılır…?» sorularıysa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "If users cannot learn your product, they will not trust it - no matter how good the engineering is.",
            ua: "Якщо люди не можуть навчитися вашому продукту, вони йому не довірять — хоч би якою сильною була інженерія.",
            de: "Wenn Menschen Ihr Produkt nicht lernen können, vertrauen sie ihm nicht — egal, wie stark das Engineering ist.",
      fr: "Si l’on ne peut pas apprendre votre produit, on ne lui fera pas confiance — quelle que soit la qualité de l’ingénierie.",
      es: "Si no se puede aprender su producto, no se confiará en él — por muy buena que sea la ingeniería.",
      it: "Se non si può imparare il vostro prodotto, non ci si fiderà — per quanto sia buona l’engineering.",
      tr: "İnsanlar ürününüzü öğrenemezse güvenmez — mühendislik ne kadar iyi olursa olsun."
          }
        ]
      }
    ]
  },
  {
    slug: "network-engineer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a Network Engineer Do? Connectivity, Performance, and Resilience",
      ua: "Чим займається мережевий інженер: зв’язок, швидкість і стійкість",
      de: "Was macht ein Netzwerkingenieur? Konnektivität, Leistung und Resilienz",
      fr: "Que fait un ingénieur réseau ? Connectivité, performances et résilience",
      es: "¿Qué hace un ingeniero de red? Conectividad, rendimiento y resiliencia",
      it: "Cosa fa un network engineer? Connettività, prestazioni e resilienza",
      tr: "Ağ mühendisi ne yapar? Bağlantı, performans ve dayanıklılık"
    },
    excerpt: {
      en: "Network engineers design and operate connectivity: LAN/WAN, firewalls, DNS, routing. When specialized networking still matters in cloud eras.",
      ua: "Мережевий інженер проєктує й експлуатує зв’язок: LAN/WAN, фаєрволи, DNS, маршрутизація. Коли спеціалізовані мережі досі важливі в хмарну добу.",
      de: "Netzwerkingenieure entwerfen und betreiben Konnektivität: LAN/WAN, Firewalls, DNS, Routing. Wann spezialisiertes Netz in der Cloud-Ära noch zählt.",
      fr: "L’ingénieur réseau conçoit et exploite la connectivité : LAN/WAN, pare-feu, DNS, routage. Quand le réseau spécialisé compte encore à l’ère du cloud.",
      es: "El ingeniero de red diseña y opera la conectividad: LAN/WAN, cortafuegos, DNS, enrutado. Cuándo la red especializada sigue importando en la era cloud.",
      it: "Il network engineer progetta ed esercisce la connettività: LAN/WAN, firewall, DNS, routing. Quando il networking specializzato conta ancora nell’era cloud.",
      tr: "Ağ mühendisi bağlantıyı tasarlar ve işletir: LAN/WAN, güvenlik duvarları, DNS, yönlendirme. Bulut çağında uzman ağın hâlâ ne zaman işe yaradığı."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Networking",
        "IT Roles",
        "Infrastructure"
      ],
      ua: [
        "Кар'єра",
        "Мережі",
        "ІТ-ролі",
        "Інфраструктура"
      ],
      de: [
        "Karriere",
        "Netzwerk",
        "IT-Rollen",
        "Infrastruktur"
      ],
      fr: [
        "Carrière",
        "Réseaux",
        "Métiers IT",
        "Infrastructure"
      ],
      es: [
        "Carrera",
        "Redes",
        "Roles IT",
        "Infraestructura"
      ],
      it: [
        "Carriera",
        "Networking",
        "Ruoli IT",
        "Infrastruttura"
      ],
      tr: [
        "Kariyer",
        "Ağ",
        "IT rolleri",
        "Altyapı"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A network engineer designs, configures, and troubleshoots the pathways data travels: office and data-center networks, VPNs, firewalls, load balancing, DNS, and hybrid cloud connectivity. Quiet networks are a competitive advantage.",
            ua: "Мережевий інженер проєктує, налаштовує й діагностує шляхи, якими йдуть дані: офісні й датацентрові мережі, VPN, фаєрволи, балансування, DNS, гібридний хмарний зв’язок. Тиха мережа — конкурентна перевага.",
            de: "Ein Netzwerkingenieur entwirft, konfiguriert und diagnostiziert die Wege der Daten: Büro- und Rechenzentrumsnetze, VPNs, Firewalls, Lastverteilung, DNS und hybride Cloud-Anbindung. Stille Netze sind ein Wettbewerbsvorteil.",
      fr: "Un ingénieur réseau conçoit, configure et diagnostique les chemins des données : réseaux de bureau et de datacenter, VPN, pare-feu, répartition de charge, DNS et connectivité cloud hybride. Un réseau silencieux est un avantage concurrentiel.",
      es: "Un ingeniero de red diseña, configura y diagnostica los caminos de los datos: redes de oficina y de centro de datos, VPN, cortafuegos, equilibrio de carga, DNS y conectividad cloud híbrida. Una red silenciosa es una ventaja competitiva.",
      it: "Un network engineer progetta, configura e diagnostica i percorsi dei dati: reti di ufficio e data center, VPN, firewall, bilanciamento, DNS e connettività cloud ibrida. Una rete silenziosa è un vantaggio competitivo.",
      tr: "Bir ağ mühendisi verinin gittiği yolları tasarlar, yapılandırır ve teşhis eder: ofis ve veri merkezi ağları, VPN, güvenlik duvarları, yük dengeleme, DNS ve hibrit bulut bağlantısı. Sessiz ağ rekabet avantajıdır."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Design topologies for performance, segmentation, and failover.",
            ua: "Проєктувати топології під швидкість, сегментацію й відмовостійкість.",
            de: "Topologien für Leistung, Segmentierung und Failover entwerfen.",
      fr: "Concevoir des topologies pour la perf, la segmentation et le failover.",
      es: "Diseñar topologías para rendimiento, segmentación y failover.",
      it: "Progettare topologie per prestazioni, segmentazione e failover.",
      tr: "Performans, segmentasyon ve yedek geçiş için topoloji tasarlamak."
          },
          {
            en: "Configure routers, switches, firewalls, and wireless.",
            ua: "Налаштовувати маршрутизатори, світчі, фаєрволи й бездротові мережі.",
            de: "Router, Switches, Firewalls und WLAN konfigurieren.",
      fr: "Configurer routeurs, commutateurs, pare-feu et sans-fil.",
      es: "Configurar routers, switches, cortafuegos e inalámbrico.",
      it: "Configurare router, switch, firewall e wireless.",
      tr: "Yönlendirici, anahtar, güvenlik duvarı ve kablosuzu yapılandırmak."
          },
          {
            en: "Monitor latency/loss and resolve connectivity incidents.",
            ua: "Стежити за затримкою/втратами й закривати інциденти зв’язку.",
            de: "Latenz/Verlust überwachen und Konnektivitätsvorfälle lösen.",
      fr: "Surveiller latence/pertes et résoudre les incidents de connectivité.",
      es: "Vigilar latencia/pérdida y resolver incidentes de conectividad.",
      it: "Monitorare latenza/perdita e risolvere gli incident di connettività.",
      tr: "Gecikme/kayıp izlemek ve bağlantı olaylarını çözmek."
          },
          {
            en: "Implement Zero Trust / VPN / remote access patterns.",
            ua: "Впроваджувати патерни Zero Trust / VPN / віддаленого доступу.",
            de: "Zero-Trust-/VPN-/Remote-Access-Muster umsetzen.",
      fr: "Mettre en place des motifs Zero Trust / VPN / accès distant.",
      es: "Implantar patrones Zero Trust / VPN / acceso remoto.",
      it: "Implementare pattern Zero Trust / VPN / accesso remoto.",
      tr: "Zero Trust / VPN / uzaktan erişim kalıplarını uygulamak."
          },
          {
            en: "Coordinate with cloud/security on hybrid architectures.",
            ua: "Координувати з хмарою й безпекою гібридні архітектури.",
            de: "Mit Cloud/Security hybride Architekturen koordinieren.",
      fr: "Coordonner avec cloud/sécu les architectures hybrides.",
      es: "Coordinar con cloud/seguridad las arquitecturas híbridas.",
      it: "Coordinare con cloud/security le architetture ibride.",
      tr: "Hibrit mimarilerde bulut/güvenlikle koordine olmak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "TCP/IP, routing/switching, firewall policy design",
            ua: "TCP/IP, маршрутизація/комутація, дизайн політик фаєрвола",
            de: "TCP/IP, Routing/Switching, Firewall-Policy-Design",
      fr: "TCP/IP, routage/commutation, conception de politiques pare-feu",
      es: "TCP/IP, enrutado/conmutación, diseño de políticas de cortafuegos",
      it: "TCP/IP, routing/switching, design delle policy firewall",
      tr: "TCP/IP, yönlendirme/anahtarlama, güvenlik duvarı politika tasarımı"
          },
          {
            en: "Wi-Fi, DNS, load balancers, packet analysis",
            ua: "Wi-Fi, DNS, балансувальники, аналіз пакетів",
            de: "WLAN, DNS, Load Balancer, Paketanalyse",
      fr: "Wi-Fi, DNS, répartiteurs de charge, analyse de paquets",
      es: "Wi-Fi, DNS, equilibradores de carga, análisis de paquetes",
      it: "Wi-Fi, DNS, load balancer, analisi dei pacchetti",
      tr: "Wi-Fi, DNS, yük dengeleyiciler, paket analizi"
          },
          {
            en: "Automation (Python/Ansible) increasingly expected",
            ua: "Автоматизація (Python/Ansible) дедалі очікуваніша",
            de: "Automatisierung (Python/Ansible) wird zunehmend erwartet",
      fr: "L’automatisation (Python/Ansible) est de plus en plus attendue",
      es: "La automatización (Python/Ansible) se espera cada vez más",
      it: "L’automazione (Python/Ansible) è sempre più attesa",
      tr: "Otomasyon (Python/Ansible) giderek bekleniyor"
          },
          {
            en: "Cloud networking constructs (VPC, peering, Private Link)",
            ua: "Хмарні мережеві конструкції (VPC, peering, Private Link)",
            de: "Cloud-Netz-Konstrukte (VPC, Peering, Private Link)",
      fr: "Constructions réseau cloud (VPC, peering, Private Link)",
      es: "Constructos de red cloud (VPC, peering, Private Link)",
      it: "Costrutti di rete cloud (VPC, peering, Private Link)",
      tr: "Bulut ağ yapıları (VPC, peering, Private Link)"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "Enterprises, ISPs, large offices, factories, or any environment where “the internet is slow” is actually a network design problem.",
            ua: "Ентерпрайз, провайдери, великі офіси, заводи — або будь-яке середовище, де «інтернет гальмує» насправді є проблемою дизайну мережі.",
            de: "Unternehmen, ISPs, große Büros, Fabriken — oder jede Umgebung, in der „das Internet ist langsam“ in Wahrheit ein Netzdesign-Problem ist.",
      fr: "Grandes entreprises, FAI, gros bureaux, usines — ou tout environnement où « internet est lent » est en fait un problème de conception réseau.",
      es: "Empresas, ISP, oficinas grandes, fábricas — o cualquier entorno en el que «internet va lento» es en realidad un problema de diseño de red.",
      it: "Enterprise, ISP, uffici grandi, fabbriche — o ogni ambiente in cui «internet è lento» è in realtà un problema di design di rete.",
      tr: "Kurumlar, ISS’ler, büyük ofisler, fabrikalar — veya «internet yavaş»ın aslında bir ağ tasarımı sorunu olduğu her ortam."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Cloud abstracts some networking - it does not eliminate the need for people who understand packets, paths, and failure domains.",
            ua: "Хмара ховає частину мережі — але не скасовує потребу в людях, які розуміють пакети, шляхи й домени відмови.",
            de: "Cloud abstrahiert etwas Netz — sie ersetzt nicht Menschen, die Pakete, Pfade und Ausfalldomänen verstehen.",
      fr: "Le cloud abstrait une partie du réseau — il n’élimine pas le besoin de gens qui comprennent paquets, chemins et domaines de panne.",
      es: "El cloud abstrae algo de red — no elimina la necesidad de quien entiende paquetes, caminos y dominios de fallo.",
      it: "Il cloud astrae un po’ di rete — non elimina il bisogno di chi capisce pacchetti, percorsi e domini di guasto.",
      tr: "Bulut ağın bir kısmını soyutlar — paket, yol ve arıza alanlarını anlayan insan ihtiyacını kaldırmaz."
          }
        ]
      }
    ]
  },
  {
    slug: "embedded-iot-engineer-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does an Embedded / IoT Engineer Do? Firmware Meets the Physical World",
      ua: "Чим займається Embedded / IoT-інженер: прошивка зустрічає фізичний світ",
      de: "Was macht ein Embedded-/IoT-Ingenieur? Firmware trifft die physische Welt",
      fr: "Que fait un ingénieur Embedded / IoT ? Le firmware rencontre le monde physique",
      es: "¿Qué hace un ingeniero Embedded / IoT? El firmware se encuentra con el mundo físico",
      it: "Cosa fa un ingegnere Embedded / IoT? Il firmware incontra il mondo fisico",
      tr: "Embedded / IoT mühendisi ne yapar? Firmware fiziksel dünyayla buluşur"
    },
    excerpt: {
      en: "Embedded and IoT engineers build software that runs on devices: firmware, sensors, connectivity, and edge constraints.",
      ua: "Embedded- та IoT-інженери пишуть ПЗ, яке живе на пристроях: прошивки, сенсори, зв’язок, обмеження краю.",
      de: "Embedded- und IoT-Ingenieure bauen Software auf Geräten: Firmware, Sensoren, Konnektivität und Edge-Grenzen.",
      fr: "Les ingénieurs Embedded et IoT construisent le logiciel qui tourne sur les appareils : firmware, capteurs, connectivité, contraintes de bord.",
      es: "Los ingenieros Embedded e IoT construyen software que corre en dispositivos: firmware, sensores, conectividad y límites del borde.",
      it: "Gli ingegneri Embedded e IoT costruiscono software che gira sui dispositivi: firmware, sensori, connettività e vincoli di edge.",
      tr: "Embedded ve IoT mühendisleri cihazlarda çalışan yazılım kurar: firmware, sensörler, bağlantı ve uç kısıtları."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "Embedded",
        "IoT",
        "IT Roles"
      ],
      ua: [
        "Кар'єра",
        "Embedded",
        "IoT",
        "ІТ-ролі"
      ],
      de: [
        "Karriere",
        "Embedded",
        "IoT",
        "IT-Rollen"
      ],
      fr: [
        "Carrière",
        "Embedded",
        "IoT",
        "Métiers IT"
      ],
      es: [
        "Carrera",
        "Embedded",
        "IoT",
        "Roles IT"
      ],
      it: [
        "Carriera",
        "Embedded",
        "IoT",
        "Ruoli IT"
      ],
      tr: [
        "Kariyer",
        "Gömülü sistemler",
        "IoT",
        "IT rolleri"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "An embedded/IoT engineer develops software for constrained devices: microcontrollers, sensors, gateways, and connected products. They bridge hardware realities (power, timing, radios) with reliable firmware and often cloud backends.",
            ua: "Embedded/IoT-інженер пише ПЗ для обмежених пристроїв: мікроконтролери, сенсори, шлюзи, підключені продукти. Зводить реальності заліза (живлення, таймінг, радіо) з надійною прошивкою і часто хмарним бекендом.",
            de: "Ein Embedded-/IoT-Ingenieur entwickelt Software für knappe Geräte: Mikrocontroller, Sensoren, Gateways, vernetzte Produkte. Er brückt Hardware-Realitäten (Strom, Timing, Funk) mit verlässlicher Firmware und oft Cloud-Backends.",
      fr: "Un ingénieur Embedded/IoT développe le logiciel d’appareils contraints : microcontrôleurs, capteurs, passerelles, produits connectés. Il relie les réalités du matériel (énergie, timing, radios) à un firmware fiable et souvent à des backends cloud.",
      es: "Un ingeniero Embedded/IoT desarrolla software para dispositivos con límites: microcontroladores, sensores, pasarelas y productos conectados. Une las realidades del hardware (energía, timing, radios) con firmware fiable y a menudo backends cloud.",
      it: "Un ingegnere Embedded/IoT sviluppa software per dispositivi vincolati: microcontroller, sensori, gateway e prodotti connessi. Ponte tra le realtà dell’hardware (alimentazione, timing, radio) e un firmware affidabile, spesso con backend cloud.",
      tr: "Bir embedded/IoT mühendisi kısıtlı cihazlar için yazılım geliştirir: mikrodenetleyiciler, sensörler, ağ geçitleri, bağlı ürünler. Donanım gerçeklerini (güç, zamanlama, radyo) güvenilir firmware ve çoğu zaman bulut backend’iyle köprüler."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Write firmware, drivers, and real-time or near-real-time logic.",
            ua: "Писати прошивки, драйвери й логіку реального або майже реального часу.",
            de: "Firmware, Treiber und Echtzeit- bzw. nahe-Echtzeit-Logik schreiben.",
      fr: "Écrire firmware, drivers et logique temps réel ou quasi temps réel.",
      es: "Escribir firmware, drivers y lógica en tiempo real o casi.",
      it: "Scrivere firmware, driver e logica real-time o quasi.",
      tr: "Firmware, sürücü ve gerçek zamanlı veya ona yakın mantık yazmak."
          },
          {
            en: "Integrate sensors, protocols (MQTT, BLE, Zigbee, etc.), and OTA updates.",
            ua: "Підключати сенсори, протоколи (MQTT, BLE, Zigbee тощо) і OTA-оновлення.",
            de: "Sensoren, Protokolle (MQTT, BLE, Zigbee usw.) und OTA-Updates anbinden.",
      fr: "Brancher capteurs, protocoles (MQTT, BLE, Zigbee, etc.) et mises à jour OTA.",
      es: "Integrar sensores, protocolos (MQTT, BLE, Zigbee, etc.) y actualizaciones OTA.",
      it: "Integrare sensori, protocolli (MQTT, BLE, Zigbee, ecc.) e aggiornamenti OTA.",
      tr: "Sensör, protokol (MQTT, BLE, Zigbee vb.) ve OTA güncellemelerini bağlamak."
          },
          {
            en: "Optimize for power, memory, and reliability in the field.",
            ua: "Оптимізувати під живлення, пам’ять і надійність у полі.",
            de: "Auf Strom, Speicher und Zuverlässigkeit im Feld optimieren.",
      fr: "Optimiser énergie, mémoire et fiabilité sur le terrain.",
      es: "Optimizar energía, memoria y fiabilidad en el campo.",
      it: "Ottimizzare alimentazione, memoria e affidabilità sul campo.",
      tr: "Sahada güç, bellek ve güvenilirlik için iyileştirmek."
          },
          {
            en: "Test on hardware; debug with logic analyzers and device logs.",
            ua: "Тестувати на залозі; дебажити логічними аналізаторами й логами пристрою.",
            de: "Auf Hardware testen; mit Logikanalysatoren und Gerätelogs debuggen.",
      fr: "Tester sur le matériel ; déboguer avec analyseurs logiques et journaux d’appareil.",
      es: "Probar en hardware; depurar con analizadores lógicos y registros del dispositivo.",
      it: "Testare sull’hardware; fare debug con analizzatori logici e log del device.",
      tr: "Donanımda test etmek; mantık çözümleyicileri ve cihaz log’larıyla hata ayıklamak."
          },
          {
            en: "Collaborate with hardware, mobile/cloud, and manufacturing.",
            ua: "Працювати з залізом, мобайлом/хмарою й виробництвом.",
            de: "Mit Hardware, Mobile/Cloud und Fertigung zusammenarbeiten.",
      fr: "Collaborer avec le hardware, le mobile/cloud et la fabrication.",
      es: "Colaborar con hardware, móvil/cloud y fabricación.",
      it: "Collaborare con hardware, mobile/cloud e produzione.",
      tr: "Donanım, mobil/bulut ve üretimle çalışmak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "C/C++ (often), RTOS knowledge, electronics literacy",
            ua: "C/C++ (часто), знання RTOS, грамотність в електроніці",
            de: "C/C++ (oft), RTOS-Wissen, Elektronik-Kompetenz",
      fr: "C/C++ (souvent), connaissance RTOS, culture électronique",
      es: "C/C++ (a menudo), conocimiento de RTOS, alfabetización en electrónica",
      it: "C/C++ (spesso), conoscenza RTOS, alfabetizzazione elettronica",
      tr: "C/C++ (çoğu zaman), RTOS bilgisi, elektronik okuryazarlığı"
          },
          {
            en: "Communication protocols and security for devices",
            ua: "Протоколи зв’язку й безпека пристроїв",
            de: "Kommunikationsprotokolle und Gerätesicherheit",
      fr: "Protocoles de communication et sécu des appareils",
      es: "Protocolos de comunicación y seguridad de dispositivos",
      it: "Protocolli di comunicazione e security dei dispositivi",
      tr: "Cihazlar için iletişim protokolleri ve güvenlik"
          },
          {
            en: "Tooling: debuggers, oscilloscopes basics, CI for firmware",
            ua: "Інструменти: дебагери, основи осцилографів, CI для прошивок",
            de: "Tooling: Debugger, Oszilloskop-Grundlagen, CI für Firmware",
      fr: "Outillage : débogueurs, bases d’oscilloscope, CI pour firmware",
      es: "Herramientas: depuradores, bases de osciloscopio, CI para firmware",
      it: "Tooling: debugger, basi di oscilloscopio, CI per firmware",
      tr: "Araçlar: hata ayıklayıcılar, osiloskop temelleri, firmware için CI"
          },
          {
            en: "Cloud/IoT platform integration skills are highly valued",
            ua: "Навички інтеграції з хмарними/IoT-платформами дуже цінують",
            de: "Cloud-/IoT-Plattform-Integration wird hoch geschätzt",
      fr: "L’intégration aux plateformes cloud/IoT est très prisée",
      es: "La integración con plataformas cloud/IoT se valora mucho",
      it: "L’integrazione con piattaforme cloud/IoT è molto apprezzata",
      tr: "Bulut/IoT platform entegrasyonu çok değerlidir"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "Hardware products, industrial monitoring, smart devices, robotics-adjacent systems - anywhere software must survive the physical world.",
            ua: "Залізні продукти, промисловий моніторинг, розумні пристрої, системи поруч із робототехнікою — скрізь, де ПЗ має вижити у фізичному світі.",
            de: "Hardwareprodukte, industrielle Überwachung, Smart Devices, robotiknahe Systeme — überall, wo Software die physische Welt überleben muss.",
      fr: "Produits hardware, supervision industrielle, appareils connectés, systèmes proches de la robotique — partout où le logiciel doit survivre au monde physique.",
      es: "Productos de hardware, monitorización industrial, dispositivos inteligentes, sistemas junto a la robótica — donde el software tiene que sobrevivir al mundo físico.",
      it: "Prodotti hardware, monitoraggio industriale, dispositivi smart, sistemi vicini alla robotica — ovunque il software debba sopravvivere al mondo fisico.",
      tr: "Donanım ürünleri, endüstriyel izleme, akıllı cihazlar, robotiğe komşu sistemler — yazılımın fiziksel dünyada ayakta kalması gereken her yer."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Web timelines do not map cleanly onto hardware cycles. Embedded success needs patience, test rigs, and respect for physics.",
            ua: "Вебтаймлайни не лягають чисто на цикли заліза. Успіх в embedded потребує терпіння, стендів і поваги до фізики.",
            de: "Web-Zeitpläne passen nicht sauber auf Hardware-Zyklen. Embedded-Erfolg braucht Geduld, Testhardware und Respekt vor der Physik.",
      fr: "Les calendriers web ne se superposent pas proprement aux cycles hardware. Le succès Embedded demande de la patience, des bancs de test et du respect pour la physique.",
      es: "Los plazos web no encajan limpio con los ciclos de hardware. El éxito Embedded pide paciencia, bancos de prueba y respeto a la física.",
      it: "I calendari web non si mappano puliti sui cicli hardware. Il successo Embedded chiede pazienza, banchi di test e rispetto per la fisica.",
      tr: "Web takvimleri donanım döngülerine temiz oturmaz. Embedded başarı sabır, test düzenekleri ve fiziğe saygı ister."
          }
        ]
      }
    ]
  },
  {
    slug: "cto-vp-engineering-role-guide",
    date: "2026-08-14",
    title: {
      en: "What Does a CTO / VP of Engineering Do? Technology Leadership at Scale",
      ua: "Чим займається CTO / VP of Engineering: технічне лідерство на масштабі",
      de: "Was macht ein CTO / VP of Engineering? Technologieführung im Maßstab",
      fr: "Que fait un CTO / VP of Engineering ? Leadership tech à l’échelle",
      es: "¿Qué hace un CTO / VP of Engineering? Liderazgo tecnológico a escala",
      it: "Cosa fa un CTO / VP of Engineering? Leadership tecnologica alla scala",
      tr: "CTO / VP of Engineering ne yapar? Ölçekte teknoloji liderliği"
    },
    excerpt: {
      en: "CTOs and VPs of Engineering set tech strategy, org design, and execution quality. How the roles differ and when startups need them.",
      ua: "CTO і VP of Engineering задають техстратегію, дизайн організації й якість виконання. Чим ролі відрізняються і коли стартапам вони потрібні.",
      de: "CTOs und VPs of Engineering setzen Tech-Strategie, Org-Design und Ausführungsqualität. Wie sich die Rollen unterscheiden und wann Start-ups sie brauchen.",
      fr: "CTO et VP of Engineering fixent la stratégie tech, le design d’org et la qualité d’exécution. En quoi les rôles diffèrent et quand une startup en a besoin.",
      es: "CTO y VP of Engineering fijan estrategia tech, diseño de organización y calidad de ejecución. En qué se diferencian y cuándo una startup los necesita.",
      it: "CTO e VP of Engineering fissano strategia tech, design dell’org e qualità di esecuzione. Come differiscono e quando una startup ne ha bisogno.",
      tr: "CTO ve VP of Engineering teknoloji stratejisini, örgüt tasarımını ve icra kalitesini koyar. Rollerin farkı ve girişimlerin ne zaman ihtiyaç duyduğu."
    },
    readTime: {
      en: "6 min read",
      ua: "6 хв читання",
      de: "6 Min. Lesezeit",
      fr: "6 min de lecture",
      es: "6 min de lectura",
      it: "6 min di lettura",
      tr: "6 dk okuma"
    },
    tags: {
      en: [
        "Career",
        "CTO",
        "Leadership",
        "IT Roles",
        "Executive"
      ],
      ua: [
        "Кар'єра",
        "CTO",
        "Лідерство",
        "ІТ-ролі",
        "Топменеджмент"
      ],
      de: [
        "Karriere",
        "CTO",
        "Führung",
        "IT-Rollen",
        "Geschäftsleitung"
      ],
      fr: [
        "Carrière",
        "CTO",
        "Leadership",
        "Métiers IT",
        "Direction"
      ],
      es: [
        "Carrera",
        "CTO",
        "Liderazgo",
        "Roles IT",
        "Dirección"
      ],
      it: [
        "Carriera",
        "CTO",
        "Leadership",
        "Ruoli IT",
        "Direzione"
      ],
      tr: [
        "Kariyer",
        "CTO",
        "Liderlik",
        "IT rolleri",
        "Üst yönetim"
      ]
    },
    content: [
      {
        paragraphs: [
          {
            en: "A CTO typically owns technology vision, major architectural bets, and often external tech representation. A VP of Engineering typically owns the engineering organization: delivery systems, managers, hiring plans, and operational excellence. In early startups one person may wear both hats.",
            ua: "CTO зазвичай тримає технологічне бачення, великі архітектурні ставки й часто зовнішнє техпредставництво. VP of Engineering зазвичай тримає інженерну організацію: системи поставки, менеджерів, плани найму й операційну якість. У ранніх стартапах одна людина може носити обидва капелюхи.",
            de: "Ein CTO trägt typischerweise die Technologievision, große Architekturwetten und oft die äußere Tech-Stimme. Ein VP of Engineering trägt typischerweise die Engineering-Organisation: Liefersysteme, Manager, Einstellungspläne und operative Exzellenz. In frühen Start-ups trägt oft eine Person beide Hüte.",
      fr: "Un CTO porte en général la vision tech, les gros paris d’architecture et souvent la voix tech à l’extérieur. Un VP of Engineering porte en général l’organisation d’ingénierie : systèmes de livraison, managers, plans de recrutement et excellence opérationnelle. En startup précoce, une personne peut porter les deux casquettes.",
      es: "Un CTO suele sostener la visión tecnológica, las grandes apuestas de arquitectura y a menudo la voz tech hacia fuera. Un VP of Engineering suele sostener la organización de ingeniería: sistemas de entrega, managers, planes de contratación y excelencia operativa. En startups tempranas una persona puede llevar ambos sombreros.",
      it: "Un CTO di solito porta la visione tecnologica, le scommesse architetturali grandi e spesso la voce tech all’esterno. Un VP of Engineering di solito porta l’organizzazione engineering: sistemi di consegna, manager, piani di assunzione ed eccellenza operativa. Nelle startup precoci una persona può tenere entrambi i cappelli.",
      tr: "Bir CTO genellikle teknoloji vizyonunu, büyük mimari bahisleri ve çoğu zaman dış teknoloji sesini taşır. Bir VP of Engineering genellikle mühendislik örgütünü taşır: teslim sistemleri, yöneticiler, işe alım planları ve operasyonel mükemmellik. Erken girişimlerde bir kişi iki şapkayı da takabilir."
          },
          {
            en: "This guide explains the role in practical terms: what the person actually does, core skills, and when a business should hire for this position - without buzzword fog.",
            ua: "Тут я розкладаю роль по поличках: чим людина займається на практиці, які навички справді потрібні і коли бізнесу є сенс наймати — без порожнього жаргону.",
            de: "Ich erkläre die Rolle praxisnah: was die Person wirklich tut, welche Kompetenzen zählen und wann Sie diese Stelle besetzen sollten — ohne leere Buzzwords.",
      fr: "Je vous explique le métier concrètement : ce que la personne fait au quotidien, les compétences qui comptent, et quand vous avez intérêt à recruter — sans jargon creux.",
      es: "Le explico el puesto con claridad: qué hace la persona de verdad, qué competencias importan y cuándo conviene contratarla, sin jerga vacía.",
      it: "Vi spiego il ruolo in concreto: cosa fa davvero la persona, quali competenze servono e quando ha senso assumere — senza fumo di parole vuote.",
      tr: "Rolü pratik dilde anlatıyorum: kişi gerçekten ne yapar, hangi yetkinlikler işe yarar ve bu pozisyonu ne zaman açmalısınız — boş jargon olmadan."
          }
        ]
      },
      {
        heading: {
          en: "Core responsibilities",
          ua: "Що входить у роботу",
          de: "Was die Rolle im Alltag leistet",
      fr: "Missions concrètes",
      es: "Qué hace en el día a día",
      it: "Cosa fa nel concreto",
      tr: "İşin asıl kısmı"
        },
        paragraphs: [
          {
            en: "Day to day, the role typically covers:",
            ua: "У типовому тижні ця людина:",
            de: "Im Alltag gehört dazu:",
      fr: "Au quotidien, cela comprend :",
      es: "En una semana típica, el puesto cubre:",
      it: "Nella pratica, il ruolo include:",
      tr: "Tipik bir iş haftasında şunlar vardır:"
          }
        ],
        list: [
          {
            en: "Set technical strategy aligned with business goals.",
            ua: "Ставити технічну стратегію в лінію з бізнес-цілями.",
            de: "Technische Strategie an Geschäftsziele ausrichten.",
      fr: "Fixer une stratégie technique alignée sur les buts business.",
      es: "Fijar estrategia técnica alineada con las metas de negocio.",
      it: "Fissare una strategia tecnica allineata agli obiettivi di business.",
      tr: "İş hedefleriyle hizalı teknik strateji koymak."
          },
          {
            en: "Design the eng org: teams, levels, hiring, culture.",
            ua: "Проєктувати інженерну оргструктуру: команди, рівні, найм, культуру.",
            de: "Die Engineering-Org gestalten: Teams, Levels, Einstellen, Kultur.",
      fr: "Concevoir l’org d’ingénierie : équipes, niveaux, recrutement, culture.",
      es: "Diseñar la org de ingeniería: equipos, niveles, contratación, cultura.",
      it: "Progettare l’org engineering: team, livelli, assunzioni, cultura.",
      tr: "Mühendislik örgütünü tasarlamak: ekipler, seviyeler, işe alım, kültür."
          },
          {
            en: "Make build-vs-buy and platform investment decisions.",
            ua: "Приймати рішення «будувати чи купувати» й інвестиції в платформу.",
            de: "Build-vs-Buy- und Plattform-Investitionsentscheidungen treffen.",
      fr: "Trancher build vs buy et les investissements plateforme.",
      es: "Decidir construir o comprar e inversiones de plataforma.",
      it: "Decidere build vs buy e gli investimenti di piattaforma.",
      tr: "Yap-al ve platform yatırımı kararlarını vermek."
          },
          {
            en: "Own risk posture: security, reliability, compliance readiness.",
            ua: "Тримати ризикову поставу: безпека, надійність, готовність до комплаєнсу.",
            de: "Risikohaltung tragen: Sicherheit, Zuverlässigkeit, Compliance-Bereitschaft.",
      fr: "Porter la posture de risque : sécu, fiabilité, préparation conformité.",
      es: "Sostener la postura de riesgo: seguridad, fiabilidad, preparación de cumplimiento.",
      it: "Portare la postura di rischio: security, affidabilità, prontezza di compliance.",
      tr: "Risk duruşunu taşımak: güvenlik, güvenilirlik, uyum hazırlığı."
          },
          {
            en: "Coach leaders and keep execution quality high as headcount grows.",
            ua: "Коучити лідерів і тримати якість виконання, коли росте штат.",
            de: "Führungskräfte coachen und Ausführungsqualität halten, wenn Headcount wächst.",
      fr: "Coacher les leaders et tenir la qualité d’exécution quand l’effectif monte.",
      es: "Acompañar a los líderes y mantener la calidad de ejecución cuando crece la plantilla.",
      it: "Allenare i leader e tenere alta la qualità di esecuzione quando cresce l’organico.",
      tr: "Liderlere koçluk etmek ve kadro büyürken icra kalitesini tutmak."
          }
        ]
      },
      {
        heading: {
          en: "Skills that matter",
          ua: "Що вміти насправді",
          de: "Was wirklich zählt",
      fr: "Les compétences qui font la différence",
      es: "Competencias que de verdad importan",
      it: "Competenze che contano davvero",
      tr: "Gerçekten işe yarayan yetkinlikler"
        },
        paragraphs: [
          {
            en: "Tools change; the underlying competencies stay valuable:",
            ua: "Інструменти змінюються, фундамент — ні:",
            de: "Tools kommen und gehen; die Grundlagen bleiben:",
      fr: "Les outils changent, les bases restent :",
      es: "Las herramientas cambian; lo de fondo sigue valiendo:",
      it: "Gli strumenti cambiano, le basi restano:",
      tr: "Araçlar değişir, temel yetkinlikler kalır:"
          }
        ],
        list: [
          {
            en: "Strategic judgment, org design, executive communication",
            ua: "Стратегічне судження, дизайн організації, комунікація з топами",
            de: "Strategisches Urteil, Org-Design, Kommunikation auf Geschäftsleitungsebene",
      fr: "Jugement stratégique, design d’org, communication de direction",
      es: "Juicio estratégico, diseño de organización, comunicación de dirección",
      it: "Giudizio strategico, design dell’org, comunicazione esecutiva",
      tr: "Stratejik muhakeme, örgüt tasarımı, üst düzey iletişim"
          },
          {
            en: "Enough technical depth to challenge and support architects",
            ua: "Достатня технічна глибина, щоб і ставити під сумнів, і підтримувати архітекторів",
            de: "Genug technische Tiefe, um Architekt:innen zu hinterfragen und zu stützen",
      fr: "Assez de profondeur technique pour challenger et soutenir les architectes",
      es: "Suficiente profundidad técnica para cuestionar y apoyar a los arquitectos",
      it: "Abbastanza profondità tecnica per contestare e sostenere gli architect",
      tr: "Mimarları hem sınayacak hem destekleyecek kadar teknik derinlik"
          },
          {
            en: "Financial literacy for eng budget and ROI",
            ua: "Фінансова грамотність для інженерного бюджету й віддачі",
            de: "Finanzkompetenz für Engineering-Budget und ROI",
      fr: "Culture financière pour le budget d’ingénierie et le ROI",
      es: "Alfabetización financiera para el presupuesto de ingeniería y el retorno",
      it: "Alfabetizzazione finanziaria per il budget engineering e il ROI",
      tr: "Mühendislik bütçesi ve getiri için finansal okuryazarlık"
          },
          {
            en: "Hiring excellence and culture shaping",
            ua: "Якість найму і формування культури",
            de: "Exzellenz beim Einstellen und Kultur formen",
      fr: "Excellence du recrutement et façonnage de la culture",
      es: "Excelencia en la contratación y dar forma a la cultura",
      it: "Eccellenza nelle assunzioni e forma della cultura",
      tr: "İşe alım mükemmelliği ve kültür şekillendirme"
          }
        ]
      },
      {
        heading: {
          en: "When you need this role",
          ua: "Коли є сенс наймати",
          de: "Wann Sie diese Rolle brauchen",
      fr: "Quand recruter ce profil",
      es: "Cuándo merece la pena contratar",
      it: "Quando ha senso assumere",
      tr: "Bu rolü ne zaman açmalısınız"
        },
        paragraphs: [
          {
            en: "When engineering is a core competitive advantage, headcount is scaling, or founders can no longer be both chief product visionary and daily eng ops lead.",
            ua: "Коли інженерія — ядрова конкурентна перевага, штат росте, або фаундери вже не можуть бути і головним продуктовим візіонером, і щоденним операційним лідом інженерії.",
            de: "Wenn Engineering ein zentraler Wettbewerbsvorteil ist, Headcount skaliert oder Gründer nicht mehr zugleich Produktvisionär und tägliche Engineering-Ops-Führung sein können.",
      fr: "Quand l’ingénierie est un avantage concurrentiel cœur, que l’effectif scale, ou que les fondateurs ne peuvent plus être à la fois visionnaire produit et lead ops d’ingénierie au quotidien.",
      es: "Cuando la ingeniería es una ventaja competitiva de núcleo, la plantilla escala o los fundadores ya no pueden ser a la vez visionarios de producto y lead diario de ops de ingeniería.",
      it: "Quando l’engineering è un vantaggio competitivo di nucleo, l’organico scala o i founder non possono più essere insieme visionari di prodotto e lead quotidiano delle ops engineering.",
      tr: "Mühendislik çekirdek rekabet avantajıysa, kadro ölçekleniyorsa veya kurucular artık hem baş ürün vizyoneri hem günlük mühendislik işletim lideri olamıyorsa."
          }
        ]
      },
      {
        heading: {
          en: "Bottom line",
          ua: "Наостанок",
          de: "Fazit",
      fr: "En résumé",
      es: "En síntesis",
      it: "In sintesi",
      tr: "Kısaca"
        },
        paragraphs: [
          {
            en: "Titles without mandate fail. CTO/VPE succeed when they create leverage for every team - not when they become the bottleneck approver.",
            ua: "Назви без мандата провалюються. CTO/VPE спрацьовують, коли дають важіль кожній команді, — а не коли стають вузьким місцем на погодженнях.",
            de: "Titel ohne Mandat scheitern. CTO/VPE gelingen, wenn sie Hebel für jedes Team schaffen — nicht, wenn sie zum Engpass-Genehmiger werden.",
      fr: "Un titre sans mandat échoue. CTO/VPE réussissent quand ils créent du levier pour chaque équipe — pas quand ils deviennent le goulot qui approuve.",
      es: "Un título sin mandato falla. CTO/VPE funcionan cuando crean palanca para cada equipo — no cuando se vuelven el cuello de botella que aprueba.",
      it: "Un titolo senza mandato fallisce. CTO/VPE funzionano quando creano leva per ogni team — non quando diventano il collo di bottiglia che approva.",
      tr: "Yetkisiz unvan düşer. CTO/VPE, her ekibe kaldıraç yarattığında başarır — darboğaz onaycı olduklarında değil."
          }
        ]
      }
    ]
  }
]
