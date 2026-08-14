/**
 * Apply a hand-written FR map to remaining EN fallbacks in blog data.
 * Usage: node scripts/apply-fr-fallbacks.mjs
 */
import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const FILES = [
  path.join(__dirname, '../src/data/blog-posts.ts'),
  path.join(__dirname, '../src/data/it-role-blog-posts.ts'),
]

const MAP = {
  Mobile: 'Mobile',
  Contact: 'Contact',
  Services: 'Services',
  Embedded: 'Embarqué',
  Executive: 'Direction',
  Conversion: 'Conversion',
  Conclusion: 'Conclusion',
  Automation: 'Automatisation',
  Networking: 'Réseaux',
  Performance: 'Performance',
  Architecture: 'Architecture',
  Communication: 'Communication',
  Collaboration: 'Collaboration',
  Documentation: 'Documentation',
  Infrastructure: 'Infrastructure',
  'Technical Writing': 'Rédaction technique',
  'Micro-interactions': 'Micro-interactions',
  'Hiring excellence and culture shaping':
    'Excellence du recrutement et construction de la culture',
  'UX thinking for navigation and examples':
    'Pensée UX pour la navigation et les exemples',
  'Financial literacy for eng budget and ROI':
    'Culture financière pour le budget engineering et le ROI',
  'Ability to learn technical domains quickly':
    'Capacité à apprendre rapidement des domaines techniques',
  'Wi-Fi, DNS, load balancers, packet analysis':
    'Wi-Fi, DNS, load balancers, analyse de paquets',
  'Interview SMEs and document real user tasks.':
    'Interviewer les experts métier et documenter les tâches réelles des utilisateurs.',
  'For L3: deeper debugging with engineering tools':
    'Pour le L3 : débogage plus poussé avec les outils d’ingénierie',
  'Docs-as-code tools, basic markdown/git workflows':
    'Outils docs-as-code, workflows markdown/git de base',
  'Communication protocols and security for devices':
    'Protocoles de communication et sécurité des appareils',
  'TCP/IP, routing/switching, firewall policy design':
    'TCP/IP, routing/switching, conception des politiques firewall',
  'Automation (Python/Ansible) increasingly expected':
    'L’automatisation (Python/Ansible) est de plus en plus attendue',
  'Structure information architecture for docs sites.':
    'Structurer l’architecture de l’information des sites de documentation.',
  'C/C++ (often), RTOS knowledge, electronics literacy':
    'C/C++ (souvent), connaissance des RTOS, culture électronique',
  'Set technical strategy aligned with business goals.':
    'Définir une stratégie technique alignée sur les objectifs business.',
  'Design the eng org: teams, levels, hiring, culture.':
    'Concevoir l’organisation engineering : équipes, niveaux, recrutement, culture.',
  'Implement Zero Trust / VPN / remote access patterns.':
    'Mettre en place des modèles Zero Trust / VPN / accès distant.',
  'Make build-vs-buy and platform investment decisions.':
    'Arbitrer make-or-buy et les investissements plateforme.',
  'Keep docs in sync with releases; kill outdated pages.':
    'Maintenir la doc synchronisée avec les releases ; supprimer les pages obsolètes.',
  'Clear writing, audience awareness, editing discipline':
    'Écriture claire, conscience de l’audience, discipline d’édition',
  'Configure routers, switches, firewalls, and wireless.':
    'Configurer routeurs, switches, firewalls et le sans-fil.',
  'Coordinate with cloud/security on hybrid architectures.':
    'Coordonner avec le cloud et la sécurité sur les architectures hybrides.',
  'Cloud/IoT platform integration skills are highly valued':
    'Les compétences d’intégration cloud/IoT sont très valorisées',
  'Strategic judgment, org design, executive communication':
    'Jugement stratégique, conception d’organisation, communication executive',
  'Monitor latency/loss and resolve connectivity incidents.':
    'Surveiller la latence/perte et résoudre les incidents de connectivité.',
  'Cloud networking constructs (VPC, peering, Private Link)':
    'Constructs réseau cloud (VPC, peering, Private Link)',
  'Write API/SDK references and code samples with engineers.':
    'Rédiger des références API/SDK et des extraits de code avec les ingénieurs.',
  'Optimize for power, memory, and reliability in the field.':
    'Optimiser pour l’énergie, la mémoire et la fiabilité sur le terrain.',
  'Tooling: debuggers, oscilloscopes basics, CI for firmware':
    'Outillage : débogueurs, bases d’oscilloscope, CI pour le firmware',
  'Enough technical depth to challenge and support architects':
    'Assez de profondeur technique pour challenger et soutenir les architectes',
  'Collaborate with hardware, mobile/cloud, and manufacturing.':
    'Collaborer avec le hardware, le mobile/cloud et la production.',
  'Test on hardware; debug with logic analyzers and device logs.':
    'Tester sur le hardware ; déboguer avec analyseurs logiques et logs d’appareils.',
  'Design topologies for performance, segmentation, and failover.':
    'Concevoir des topologies pour la performance, la segmentation et le failover.',
  'Own risk posture: security, reliability, compliance readiness.':
    'Porter la posture de risque : sécurité, fiabilité, préparation à la conformité.',
  'Write firmware, drivers, and real-time or near-real-time logic.':
    'Écrire firmware, drivers et logique temps réel ou quasi temps réel.',
  'Coach leaders and keep execution quality high as headcount grows.':
    'Coacher les leaders et maintenir la qualité d’exécution à mesure que l’effectif grandit.',
  'What Does a Technical Writer Do? Docs That Unblock Users and Teams':
    'Que fait un technical writer ? Une documentation qui débloque utilisateurs et équipes',
  'Measure doc usefulness via search, feedback, and support deflection.':
    'Mesurer l’utilité de la doc via la recherche, le feedback et la déflection du support.',
  'What Does a CTO / VP of Engineering Do? Technology Leadership at Scale':
    'Que fait un CTO / VP of Engineering ? Leadership technologique à l’échelle',
  'Integrate sensors, protocols (MQTT, BLE, Zigbee, etc.), and OTA updates.':
    'Intégrer capteurs, protocoles (MQTT, BLE, Zigbee, etc.) et mises à jour OTA.',
  'What Does a Network Engineer Do? Connectivity, Performance, and Resilience':
    'Que fait un network engineer ? Connectivité, performance et résilience',
  'What Does an Embedded / IoT Engineer Do? Firmware Meets the Physical World':
    'Que fait un ingénieur Embedded / IoT ? Quand le firmware rencontre le monde physique',
  'Support is not a cost center if it shortens time-to-value and feeds a better roadmap.':
    'Le support n’est pas un centre de coûts s’il raccourcit le time-to-value et nourrit une meilleure roadmap.',
  'If users cannot learn your product, they will not trust it — no matter how good the engineering is.':
    'Si les utilisateurs ne peuvent pas apprendre votre produit, ils ne lui feront pas confiance — quelle que soit la qualité de l’engineering.',
  'Developer platforms, APIs, complex B2B products, or when support volume is mostly “how do I…?” questions.':
    'Plateformes développeur, APIs, produits B2B complexes, ou lorsque le volume du support est surtout des questions « comment faire… ? ».',
  'Embedded and IoT engineers build software that runs on devices: firmware, sensors, connectivity, and edge constraints.':
    'Les ingénieurs Embedded et IoT construisent le logiciel qui tourne sur les appareils : firmware, capteurs, connectivité et contraintes edge.',
  'Web timelines do not map cleanly onto hardware cycles. Embedded success needs patience, test rigs, and respect for physics.':
    'Les calendriers web ne se superposent pas proprement aux cycles hardware. Le succès Embedded demande de la patience, des bancs de test et du respect pour la physique.',
  'Cloud abstracts some networking — it does not eliminate the need for people who understand packets, paths, and failure domains.':
    'Le cloud abstrait une partie du networking — il ne supprime pas le besoin de personnes qui comprennent les paquets, les chemins et les domaines de panne.',
  'Technical writers create docs, API references, and guides that reduce support load and speed adoption. When docs become a product.':
    'Les technical writers créent docs, références API et guides qui réduisent la charge du support et accélèrent l’adoption. Quand la documentation devient un produit.',
  'Enterprises, ISPs, large offices, factories, or any environment where “the internet is slow” is actually a network design problem.':
    'Entreprises, FAI, grands bureaux, usines, ou tout environnement où « internet est lent » est en réalité un problème de conception réseau.',
  'CTOs and VPs of Engineering set tech strategy, org design, and execution quality. How the roles differ and when startups need them.':
    'Les CTO et VP of Engineering définissent la stratégie tech, le design d’organisation et la qualité d’exécution. En quoi les rôles diffèrent et quand les startups en ont besoin.',
  'Titles without mandate fail. CTO/VPE succeed when they create leverage for every team — not when they become the bottleneck approver.':
    'Les titres sans mandat échouent. Un CTO/VPE réussit quand il crée du levier pour chaque équipe — pas quand il devient le goulot d’étranglement des validations.',
  'Hardware products, industrial monitoring, smart devices, robotics-adjacent systems — anywhere software must survive the physical world.':
    'Produits hardware, monitoring industriel, objets connectés, systèmes proches de la robotique — partout où le logiciel doit survivre au monde physique.',
  'When founders/engineers drown in tickets, churn rises after confusing UX, or B2B clients expect SLAs and a human who understands the system.':
    'Quand fondateurs/ingénieurs croulent sous les tickets, que le churn monte après une UX confuse, ou que les clients B2B attendent des SLA et un humain qui comprend le système.',
  'Network engineers design and operate connectivity: LAN/WAN, firewalls, DNS, routing. When specialized networking still matters in cloud eras.':
    'Les network engineers conçoivent et opèrent la connectivité : LAN/WAN, firewalls, DNS, routing. Quand le networking spécialisé compte encore à l’ère du cloud.',
  'When engineering is a core competitive advantage, headcount is scaling, or founders can no longer be both chief product visionary and daily eng ops lead.':
    'Quand l’engineering est un avantage compétitif central, que l’effectif scale, ou que les fondateurs ne peuvent plus être à la fois visionnaires produit et leads ops engineering au quotidien.',
  'A technical writer turns complex systems into usable documentation: user guides, API references, release notes, runbooks, and in-product help. Great docs are a growth and efficiency feature, not an afterthought PDF.':
    'Un technical writer transforme des systèmes complexes en documentation utilisable : guides utilisateur, références API, release notes, runbooks et aide in-product. Une bonne doc est une fonctionnalité de croissance et d’efficacité, pas un PDF oublié.',
  'A network engineer designs, configures, and troubleshoots the pathways data travels: office and data-center networks, VPNs, firewalls, load balancing, DNS, and hybrid cloud connectivity. Quiet networks are a competitive advantage.':
    'Un network engineer conçoit, configure et dépanne les chemins empruntés par les données : réseaux de bureaux et de data centers, VPN, firewalls, load balancing, DNS et connectivité cloud hybride. Des réseaux silencieux sont un avantage compétitif.',
  'An embedded/IoT engineer develops software for constrained devices: microcontrollers, sensors, gateways, and connected products. They bridge hardware realities (power, timing, radios) with reliable firmware and often cloud backends.':
    'Un ingénieur Embedded/IoT développe le logiciel pour des appareils contraints : microcontrôleurs, capteurs, gateways et produits connectés. Il relie les réalités hardware (énergie, timing, radios) à un firmware fiable et souvent à des backends cloud.',
  'A CTO typically owns technology vision, major architectural bets, and often external tech representation. A VP of Engineering typically owns the engineering organization: delivery systems, managers, hiring plans, and operational excellence. In early startups one person may wear both hats.':
    'Un CTO porte généralement la vision technologique, les paris architecturaux majeurs et souvent la représentation tech externe. Un VP of Engineering porte généralement l’organisation engineering : systèmes de delivery, managers, plans de recrutement et excellence opérationnelle. Dans les startups early-stage, une seule personne peut porter les deux casquettes.',
}

function getProp(obj, name) {
  return obj.properties.find(
    (p) =>
      ts.isPropertyAssignment(p) &&
      ((ts.isIdentifier(p.name) && p.name.text === name) ||
        (ts.isStringLiteral(p.name) && p.name.text === name))
  )
}

function litText(node) {
  if (!node) return null
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text
  return null
}

function processFile(filePath) {
  const sourceText = fs.readFileSync(filePath, 'utf8')
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true)
  const replacements = []
  const missing = new Set()

  function maybeReplace(en, frNode) {
    if (!en || !MAP[en] || MAP[en] === en) return
    replacements.push({
      start: frNode.getStart(sourceFile),
      end: frNode.end,
      text: JSON.stringify(MAP[en]),
    })
  }

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const enProp = getProp(node, 'en')
      const frProp = getProp(node, 'fr')
      if (enProp && frProp && ts.isPropertyAssignment(enProp) && ts.isPropertyAssignment(frProp)) {
        const enInit = enProp.initializer
        const frInit = frProp.initializer
        const enStr = litText(enInit)
        const frStr = litText(frInit)
        if (enStr && frStr === enStr) {
          if (MAP[enStr]) maybeReplace(enStr, frInit)
          else if (/[A-Za-zÀ-ÿ]{4,}/.test(enStr) && !/^(CRDT|Agile|DevOps|Claude|LiqPay|Vercel|OpenAI|Hetzner|ChatGPT|WordPress|WebSockets|PostgreSQL)$/.test(enStr)) {
            missing.add(enStr)
          }
        } else if (enStr === null && ts.isArrayLiteralExpression(enInit) && ts.isArrayLiteralExpression(frInit)) {
          for (let i = 0; i < enInit.elements.length; i++) {
            const e = litText(enInit.elements[i])
            const f = litText(frInit.elements[i])
            if (e && f === e) {
              if (MAP[e]) maybeReplace(e, frInit.elements[i])
              else if (/[A-Za-zÀ-ÿ]{4,}/.test(e) && !/^(CRDT|Agile|DevOps|Claude|LiqPay|Vercel|OpenAI|Hetzner|ChatGPT|WordPress|WebSockets|PostgreSQL)$/.test(e)) {
                missing.add(e)
              }
            }
          }
        }
      }
    }
    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  replacements.sort((a, b) => b.start - a.start)
  let out = sourceText
  for (const r of replacements) {
    out = out.slice(0, r.start) + r.text + out.slice(r.end)
  }
  fs.writeFileSync(filePath, out)
  console.log(`${path.basename(filePath)}: patched=${replacements.length}, missing=${missing.size}`)
  for (const m of missing) console.log('MISSING', m.slice(0, 80))
}

for (const file of FILES) processFile(file)
