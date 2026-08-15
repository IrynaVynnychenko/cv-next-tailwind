import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, '../src/data/blog/posts-business.ts')

const TR = {
  'Most small and medium businesses delay a website for the same reason: it feels like a cost you can postpone. Ads, rent, payroll, and inventory are “real.” A site is “nice later.” That framing is wrong. The bill you are already paying is lost calls, staff time in messengers, and customers who compared you to a competitor who had a clear page and a form.':
    'Çoğu KOBİ siteyi aynı nedenle erteler: ertelenebilir bir maliyet gibi durur. Reklam, kira, maaş ve stok «gerçek»tir. Site «sonra güzel»dir. Bu çerçeve yanlıştır. Zaten ödediğiniz fatura kayıp aramalar, mesajlaşmada personel zamanı ve sizi net bir sayfası ve formu olan rakiple karşılaştıran müşterilerdir.',
  'I have already written when a business outgrows Instagram, and why a feed is not a home. This piece is narrower: if you run a shop, a clinic, a workshop, a local service, or a 20–80 person company — what does a website actually buy you? Not “digital presence.” Hours, trust, and a larger pool of people who order — because they found you, finished the request, and came back.':
    'Bir işin Instagram’ı ne zaman aştığını ve bir akışın neden ev olmadığını zaten yazdım. Burası daha dar: dükkân, klinik, atölye, yerel hizmet veya 20–80 kişilik bir şirket yönetiyorsanız — site size gerçekten ne satın alır? «Dijital varlık» değil. Saat, güven ve sipariş veren daha geniş bir kitle — çünkü sizi buldular, talebi bitirdiler ve geri geldiler.',
  '1. You stop renting the only door into the business':
    '1. İşletmeye giden tek kapıyı kiralamayı bırakırsınız',
  'Instagram, TikTok, Google Maps, marketplaces, and Telegram are useful. They are also rented land. Algorithms cut reach. Accounts get limited. A marketplace can raise fees or bury your listing. If that is the only place a new customer can read who you are and how to buy, your revenue sits on someone else’s switch.':
    'Instagram, TikTok, Google Maps, pazaryerleri ve Telegram faydalıdır. Aynı zamanda kiralanmış topraktır. Algoritmalar erişimi keser. Hesaplar kısıtlanır. Bir pazaryeri komisyonu artırabilir veya listenizi gömebilir. Yeni müşterinin kim olduğunuzu ve nasıl satın alacağını okuyabileceği tek yer buysa, cironuz başkasının anahtarındadır.',
  'A domain you own (yourbrand.com) stays up when a social account is down.':
    'Size ait bir alan adı (yourbrand.com), sosyal hesap düştüğünde ayakta kalır.',
  'Prices, terms, and a portfolio do not disappear behind last week’s Reels.':
    'Fiyatlar, koşullar ve portföy geçen haftanın Reels’inin arkasında kaybolmaz.',
  'Social still does the handshake. The site is the address you put on invoices, ads, and Google Business.':
    'Sosyal hâlâ tokalaşmadır. Site faturalara, reklamlara ve Google Business’a yazdığınız adrestir.',
  '2. People who are ready to buy look you up — they do not wait for a post':
    '2. Satın almaya hazır olan sizi arar — bir gönderi beklemez',
  'A post reaches people who already follow you. Search reaches people with a problem today: “plumber near me,” “accounting for LLC,” “kids dentist [city].” Without a page that answers that query, you are invisible at the moment of intent — or you lose to the firm whose site loaded on the phone in two seconds.':
    'Bir gönderi sizi zaten takip edenlere ulaşır. Arama, sorunu bugün olanlara ulaşır: «yakınımda tesisatçı», «limited için muhasebe», «çocuk diş hekimi [şehir]». Bu sorguyu yanıtlayan bir sayfa yoksa niyet anında görünmezsiniz — ya da sitesi telefonda iki saniyede açılan firmaya kaybedersiniz.',
  'Google Business + a real site beats a Maps pin with no website and three reviews.':
    'Google Business + gerçek bir site, sitesiz ve üç yorumlu bir Maps iğnesini yener.',
  'Ads need a landing page. Sending paid traffic to a profile is paying to leak.':
    'Reklamın bir iniş sayfası gerekir. Ücretli trafiği bir profile göndermek sızıntıya para ödemektir.',
  'A service page compounds: one article or FAQ can bring calls for years. A Reel expires in 48 hours.':
    'Hizmet sayfası birikir: bir yazı veya SSS yıllarca arama getirebilir. Bir Reel 48 saatte biter.',
  '3. Trust is the conversion bottleneck — especially above a certain ticket size':
    '3. Dönüşümün darboğazı güvendir — özellikle belli bir sepet tutarının üstünde',
  'For a coffee or a T-shirt, a pretty feed can close. For a renovation, legal work, medical service, B2B contract, or a hire — the buyer will open a second tab. They look for an address, a team, cases, terms, and a way to write without begging in DMs. If that tab is empty or a 2019 template, they pick the next result.':
    'Kahve veya tişörtü güzel bir akış kapatır. Tadilat, hukuk, sağlık, B2B sözleşme veya işe alım — alıcı ikinci sekmeyi açar. Adres, ekip, vakalar, koşullar ve DM’de yalvarmadan yazmanın yolunu arar. O sekme boşsa veya 2019 şablonuysa sonraki sonucu seçer.',
  'Corporate and public buyers often cannot pay a vendor with no site and no legal entity page.':
    'Kurumsal ve kamu alıcıları çoğu zaman sitesi ve tüzel kişi sayfası olmayan bir tedarikçiye ödeme yapamaz.',
  'A clear “how we work / what it costs / what happens next” page cuts the first sales call in half.':
    'Net bir «nasıl çalışıyoruz / ne kadar / sonra ne olur» sayfası ilk satış aramasını yarıya indirir.',
  'Reviews, photos of real work, and named people beat a logo on a white page.':
    'Yorumlar, gerçek iş fotoğrafları ve isimli insanlar beyaz sayfadaki logoyu yener.',
  '4. The site does the repetitive work your people should not do':
    '4. Site, insanların yapmaması gereken tekrarlayan işi yapar',
  'In a 10–50 person company the hidden cost is not “no website.” It is a manager answering the same five questions every day: hours, price range, what is included, how to book, where you are. That is not hospitality. That is a missing FAQ and a form.':
    '10–50 kişilik bir şirkette gizli maliyet «site yok» değildir. Her gün aynı beş soruyu yanıtlayan bir yöneticidir: saatler, fiyat aralığı, neler dahil, nasıl randevu, neredesiniz. Bu misafirperverlik değildir. Eksik bir SSS ve formdur.',
  'A form or booking calendar captures the lead at 22:40, when nobody is in the office.':
    'Bir form veya randevu takvimi, ofiste kimse yokken 22:40’ta lead’i yakalar.',
  'Price lists, service scopes, and PDFs stop living in five chat threads.':
    'Fiyat listeleri, hizmet kapsamları ve PDF’ler beş sohbet zincirinde yaşamayı bırakır.',
  'CRM, payments, and reminders can sit behind one page — you do not need a custom ERP on day one.':
    'CRM, ödemeler ve hatırlatmalar bir sayfanın arkasında durabilir — ilk gün özel ERP gerekmez.',
  '5. Marketing starts to compound instead of resetting every Monday':
    '5. Pazarlama her pazartesi sıfırlanmak yerine birikmeye başlar',
  'Paid ads without a site are rent: you pay, traffic arrives, you stop paying, it dies. A site you control is an asset. Pages rank. Old blog posts still get found. Email lists grow from a form, not from a platform that can lock the audience.':
    'Sitesiz ücretli reklam kiradır: ödersiniz, trafik gelir, ödemeyi kesersiniz, ölür. Kontrol ettiğiniz site bir varlıktır. Sayfalar sıralanır. Eski blog yazıları hâlâ bulunur. E-posta listesi, kitleyi kilitleyebilen bir platformdan değil, bir formdan büyür.',
  'One landing per offer beats one overloaded homepage that tries to sell everything.':
    'Teklif başına bir iniş sayfası, her şeyi satmaya çalışan aşırı yüklü bir ana sayfayı yener.',
  'UTM links and a simple analytics setup tell you which channel paid for itself.':
    'UTM bağlantıları ve sade bir analitik kurulumu hangi kanalın kendini ödediğini söyler.',
  'You can A/B a headline. You cannot A/B an Instagram bio.':
    'Bir başlığı A/B test edebilirsiniz. Instagram biyografisini edemezsiniz.',
  '6. Hiring, partners, and “are you real?” checks':
    '6. İşe alım, partnerler ve «gerçekten var mısınız?» kontrolü',
  'SMB growth is not only customers. Candidates google the company before they apply. Distributors ask for a catalog URL. A bank or a grant program wants a public page. A site that looks like a going concern — even a short one — removes a silent veto you never hear about.':
    'KOBİ büyümesi yalnızca müşteri değildir. Adaylar başvurmadan önce şirketi googlar. Distribütörler katalog URL’si ister. Bir banka veya hibe programı kamuya açık bir sayfa ister. İşler yürüyormuş gibi duran bir site — kısa olsa bile — hiç duymadığınız sessiz bir vetoyu kaldırır.',
  '7. How the number of people who order actually grows':
    '7. Sipariş verenlerin sayısı gerçekten nasıl büyür',
  'A website does not magically “add +30% sales.” Orders grow when three numbers move: more people who never knew you, a higher share of visitors who finish the request, and more repeat work from people who already paid once. The site is the tool that moves all three at once — search, conversion, and coming back — without hiring another person to sit in chat.':
    'Bir site sihirle «+%30 satış» eklemez. Siparişler üç sayı hareket ettiğinde büyür: sizi hiç tanımayan daha fazla kişi; talebi bitiren ziyaretçi payının artması; bir kez ödeyenlerden daha fazla tekrar iş. Site üçünü birden hareket ettiren araçtır — arama, dönüşüm ve geri dönüş — sohbette oturacak bir kişi daha işe almadan.',
  'In practice that looks like a wider top of funnel and a shorter path to “yes.” Someone googles the service in your city at 22:40, reads proof, picks a package, and submits a form or pays. Yesterday that person never saw your Reel, or saw it, opened Direct, and left when nobody replied until morning.':
    'Pratikte bu, huninin üstünün daha geniş ve «evet»e giden yolun daha kısa olmasıdır. Biri 22:40’ta şehrinizde hizmeti googlar, kanıt okur, paket seçer ve form gönderir veya öder. Dün o kişi Reel’inizi hiç görmemişti — ya da gördü, Direct’i açtı ve sabaha kadar kimse yanıtlamayınca gitti.',
  'New buyers from search and Maps: people with intent today, not only followers. A page for “service + city” is a shop window that stays open after the last post.':
    'Arama ve Maps’ten yeni alıcılar: bugün niyeti olanlar, yalnızca takipçiler değil. «Hizmet + şehir» sayfası, son gönderiden sonra da açık kalan bir vitrindir.',
  'Fewer abandoned requests: a form, booking, or pay button captures the order while the intent is hot. Chat that waits until 09:00 leaks the same people to whoever answered first.':
    'Daha az terk edilen talep: form, randevu veya öde düğmesi niyet sıcaken siparişi yakalar. 09:00’a kadar bekleyen sohbet aynı insanları ilk yanıtlayan kişiye sızdırır.',
  'Higher conversion of traffic you already pay for: ads and stories send people to a page with price, proof, and one button — not to a profile where the offer is three swipes down.':
    'Zaten ödediğiniz trafiğin daha yüksek dönüşümü: reklamlar ve hikâyeler insanları fiyat, kanıt ve tek düğmeli bir sayfaya gönderir — teklifin üç kaydırma aşağıda olduğu bir profile değil.',
  'Repeat and adjacent orders: a catalog, “order again,” related services, and a saved URL beat asking the client to remember which chat you used last time.':
    'Tekrar ve komşu siparişler: katalog, «yeniden sipariş», ilgili hizmetler ve kayıtlı bir URL, müşteriden geçen sefer hangi sohbeti kullandığınızı hatırlamasını istemekten iyidir.',
  'Referrals that convert: a client forwards yourbrand.com/service, not a screenshot of a story. The next buyer sees the same proof and can order without asking you to “send the price again.”':
    'Dönüşen tavsiyeler: müşteri bir hikâye ekran görüntüsü değil, yourbrand.com/service iletir. Sonraki alıcı aynı kanıtı görür ve «fiyatı bir daha gönderin» demeden sipariş verebilir.',
  'Same team, more closed orders: the site answers hours, scope, and “what’s included.” Staff spend time on quotes that are already warm instead of typing the FAQ into Direct fifty times a week.':
    'Aynı ekip, daha fazla kapanan sipariş: site saatleri, kapsamı ve «neler dahil»i yanıtlar. Personel SSS’yi haftada elli kez Direct’e yazmak yerine zaten ısınmış tekliflere zaman ayırır.',
  'What that looks like in numbers you can track':
    'Bunun takip edebileceğiniz sayılarda görünüşü',
  'Do not wait for a vanity spike in visitors. Watch the chain from first visit to paid order. If any step is empty, that is where orders stall — not “we need more followers.”':
    'Ziyaretçi vitrini için bir sıçrama beklemeyin. İlk ziyaretten ödenmiş siparişe zinciri izleyin. Bir halka boşsa siparişler orada durur — «daha fazla takipçi lazım»da değil.',
  'More first-time visitors with intent: Search Console / Maps queries for your service + city, plus ad clicks that land on a matching page.':
    'Niyeti olan daha fazla ilk ziyaretçi: Search Console / Maps’te hizmet + şehir sorguları ve eşleşen sayfaya inen reklam tıklamaları.',
  'More completed requests: form submits, booked slots, or checkouts per 100 visits. A slow or vague page kills this even when traffic is fine.':
    'Daha fazla tamamlanan talep: 100 ziyarette form, randevu veya ödeme. Yavaş veya belirsiz bir sayfa trafik iyiyken bile bunu öldürür.',
  'More paid orders from the same staff hours: fewer “what’s the price?” threads, more quotes that already know the package.':
    'Aynı personel saatinde daha fazla ödenmiş sipariş: daha az «fiyat nedir?» zinciri, paketi zaten bilen daha fazla teklif.',
  'More second orders: returning users, saved numbers, “order again” — the cheapest growth, and the one a chat history cannot productise.':
    'Daha fazla ikinci sipariş: geri gelen kullanıcılar, kayıtlı numara, «yeniden sipariş» — en ucuz büyüme ve sohbet geçmişinin ürüne çeviremeyeceği tür.',
  'What “enough” looks like — you do not need a portal':
    '«Yeter» nasıl durur — bir portala ihtiyacınız yok',
  'The useful first site for an SMB is small and specific. A bakery needs hours, menu, address, and a way to order a cake. A 40-person services firm needs services, cases, team, and a contact that lands in CRM. Both fail the same way: a 40-page brochure nobody maintains, or a builder theme that takes eight seconds on mobile.':
    'KOBİ için işe yarayan ilk site küçük ve somuttur. Fırının saate, menüye, adrese ve pasta sipariş etmenin bir yoluna ihtiyacı vardır. 40 kişilik bir hizmet firmasının hizmetlere, vakalara, ekibe ve CRM’e düşen bir iletişime ihtiyacı vardır. İkisi de aynı şekilde başarısız olur: kimsenin güncellemediği 40 sayfalık bir broşür veya telefonda sekiz saniye süren bir kurucu teması.',
  'One clear offer, proof, and a single next step (call, form, book, pay).':
    'Tek net teklif, kanıt ve tek sonraki adım (ara, form, randevu, öde).',
  'Mobile first. Most SMB traffic is a phone in a car park or a kitchen.':
    'Önce mobil. KOBİ trafiğinin çoğu otoparkta veya mutfakta bir telefondur.',
  'Fast enough that Google and a tired customer do not bounce. Then add shop, cabinet, or blog when a page is earning its keep.':
    'Google ve yorgun bir müşterinin kaçmayacağı kadar hızlı. Sonra mağaza, müşteri alanı veya blog — bir sayfa yerini kazandığında.',
  'How to tell if it is working':
    'Çalıştığını nasıl anlarsınız',
  'Do not judge a site by “it looks modern.” Judge it by a short list you can check after 30–90 days:':
    'Bir siteyi «modern duruyor» diye yargılamayın. 30–90 gün sonra bakabileceğiniz kısa bir listeyle yargılayın:',
  'Inbound: form submits, calls from the site, booked slots, paid orders — not only followers.':
    'Gelen: form gönderimleri, siteden aramalar, alınan randevular, ödenmiş siparişler — yalnızca takipçiler değil.',
  'Order volume: first-time buyers vs repeat, and requests per week versus the month before the site (or before the new landing).':
    'Sipariş hacmi: ilk kez alanlar ve tekrarlar, siteden (veya yeni inişten) önceki aya göre haftalık talepler.',
  'Time saved: fewer identical questions in chat and at the front desk.':
    'Kazanan zaman: sohbette ve resepsiyonda daha az aynı soru.',
  'Search: impressions for your city + service, even if you are not #1 yet.':
    'Arama: henüz 1. olmasanız bile şehir + hizmet gösterimleri.',
  'Ad cost: cheaper leads when traffic lands on a page built for that offer.':
    'Reklam maliyeti: trafik o teklif için yapılmış bir sayfaya inince daha ucuz lead.',
  'If you are ready to stop postponing it':
    'Ertelemeyi bırakmaya hazırsanız',
  'The benefit of a website for an SMB is not that you “have a site.” It is that more people can find you without a post, finish an order without a DM, and come back without hunting the old chat — while you own the address. That is how the number of buyers grows, cheaper than another year of rented attention.':
    'KOBİ için sitenin faydası «siteniz var» değildir. Daha fazla insanın gönderisiz sizi bulması, DM’siz siparişi bitirmesi ve eski sohbeti aramadan geri gelmesidir — adres size aittir. Alıcı sayısı böyle büyür; bir yıl daha kiralanmış dikkatten ucuzdur.',
  'I build lean, fast sites and web apps with Next.js and React: 8+ years in production, 4,200+ Upwork hours, 100+ launched projects. TypeScript, performance, SEO-ready structure, and a contact path that actually gets used.':
    'Next.js ve React ile yalın, hızlı siteler ve web uygulamaları kuruyorum: üretimde 8+ yıl, 4.200+ Upwork saati, 100+ yayına alınan proje. TypeScript, performans, SEO’ya hazır yapı ve gerçekten kullanılan bir iletişim yolu.',
  'If you need a first site, a replacement for a dead template, or a landing that can take ads — write via the contacts below. We can map the smallest useful version in one short call.':
    'İlk site, ölü bir şablonun yerine veya reklam taşıyacak bir iniş sayfası gerekiyorsa — aşağıdaki iletişimlerden yazın. Kısa bir aramada en küçük işe yarar sürümü çizeriz.',
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

const sourceText = fs.readFileSync(filePath, 'utf8')
const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true)
const cutoff = sourceText.indexOf("slug: 'developer-to-project-manager-career-path'")
const jobs = []
let missing = 0

function visit(node) {
  if (node.pos >= cutoff) return
  if (ts.isObjectLiteralExpression(node)) {
    const enProp = getProp(node, 'en')
    const itProp = getProp(node, 'it')
    const trProp = getProp(node, 'tr')
    if (enProp && itProp && !trProp && ts.isPropertyAssignment(enProp)) {
      const enStr = litText(enProp.initializer)
      if (enStr !== null) {
        const tr = TR[enStr]
        if (!tr) {
          missing++
          console.warn('missing TR for:', enStr.slice(0, 80))
        } else {
          jobs.push({ start: itProp.end, insert: `,\n      tr: ${JSON.stringify(tr)}` })
        }
      }
    }
  }
  ts.forEachChild(node, visit)
}

visit(sourceFile)
console.log('jobs', jobs.length, 'missing', missing)
jobs.sort((a, b) => b.start - a.start)
let out = sourceText
for (const j of jobs) out = out.slice(0, j.start) + j.insert + out.slice(j.start)
fs.writeFileSync(filePath, out)
console.log('done')
