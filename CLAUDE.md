# LIGHT ON TRI

Site statique (HTML/CSS/JS, pas de build) de LIGHT ON TRI, organisé par LIGHT ON. Trois épreuves 2027 : Woippy**, Pierre-Percée*** et Madine***.
Aperçu local : `python3 -m http.server 8080` à la racine, puis http://localhost:8080.

Projet adapté depuis `lightontrail-redesign/` (squelette d'origine le plus neutre, choisi par Julien) en suivant le prompt maître « ADAPTATION DU SITE LIGHT ON TRI » : toute trace trail (noms, couleurs, médias, 17/37/54 KM) a été retirée.

## Hiérarchie des sources (ordre de confiance)

1. Instructions explicites de Julien dans le brief / en session.
2. Règlement PDF de l'édition concernée (le plus récent fait foi : `reglement-light-on-tri-2027.pdf`, daté du 07/10/2026).
3. Guide participant / briefing officiel de l'édition (pas encore publié pour 2027).
4. Page officielle de l'événement concerné sur lightontri.com.
5. Pages générales lightontri.com.
6. Code source du site trail (mécanique générique réutilisable, jamais le contenu).
7. Ne jamais deviner : si une donnée manque ou se contredit entre sources, **flaguer** plutôt qu'inventer.

**Règle absolue** : ne jamais fusionner des données entre éditions différentes (ex. horaires Madine 2026 ≠ horaires Madine 2027 tant que le guide participant 2027 n'est pas publié) ni entre événements différents (Woippy ≠ Pierre-Percée ≠ Madine).

## Conventions

- Les formats s'appellent uniquement **S\***, **M\*\***, **L\*\*\*** (majuscules + étoiles), plus **Mini-Kids**, **Kids** et **RUN 7 KM** (courses à pied enfants/déconnectées du triathlon, pas d'étoile). Pas de noms inventés. **Pas de format XS** : annoncé dans le règlement du 07/10/2026 pour Pierre-Percée, mais finalement non proposé - confirmé directement par Julien en session (11/10/2026), voir note datée plus bas.
- Les étoiles indiquent le niveau du format : plus il y en a, plus le format est long/exigeant.
- Un événement porte le nombre d'étoiles de son plus grand format triathlon : **Woippy\*\*** (M** = plus grand format proposé), **Pierre-Percée\*\*\*** et **Madine\*\*\*** (L*** = plus grand format proposé chez ces deux-là).
- Ordre d'affichage des formats : du plus petit au plus grand (S* → M** → L***).
- L'organisateur est **LIGHT ON** (pas « LIGHT ON TRI »).
- Distances génériques (confirmées par le règlement 2027, à affiner par événement dès que le guide participant le précise) : S* ≈ 0,5 km natation / 20-25 km vélo / 5 km course à pied. M** ≈ 1,5 km natation / 40-45 km vélo / 10 km course à pied. L*** ≈ 1,9 km natation / 85-90 km vélo / 21 km course à pied.
- Catégories d'âge (règlement 2027) : S* à partir de Cadet (né en 2011 ou avant) ; M**/L*** à partir de Junior (né en 2009 ou avant) ; Mini-Kids nés 2018-2021 ; Kids nés 2014-2017.
- Certificat médical obligatoire de moins d'un an, à téléverser au plus tard 15 jours avant l'épreuve. Retrait des dossards la veille de 17h à 19h (sauf précision différente par événement dans le guide participant).
- Tarifs 2027 (règlement) : L*** 119€/134€ selon période, M** 59€/69€, S* 34€/39€, Kids 10€.
- Temps limites : L*** natation 1h10, vélo 5h30 ; M** vélo 3h00 ; S* pas de temps limite.
- Remboursement : 50% sur présentation d'un certificat médical jusqu'à 1 mois avant l'épreuve, aucun remboursement dans le dernier mois (sauf pack annulation souscrit à l'inscription : 15€ pour L***, 10€ pour M**). Transfert de dossard possible (3€) jusqu'à 48h avant le premier créneau de retrait.
- Assurance : SMACL n° C2020-3654. Directeur de course : Julien Labdant.
- Équipement (Article 2) : combinaison néoprène obligatoire si l'eau n'est pas au-dessus de 16°C, recommandée dans tous les cas. Bonnet fourni par l'organisation obligatoire. Puce de chronométrage à la cheville gauche, à rendre après l'arrivée (50€ si non rendue). Dossard non réduit/modifié, un seul fourni. Autocollant à coller sur le casque et la tige de selle du vélo. Aucun ravitaillement extérieur autorisé. Pas de règle de drafting détaillée dans le règlement fourni - à ne pas inventer, renvoyer au guide participant.
- Infos.html construit comme un hub général (inscriptions, premier triathlon, matériel & règles, FAQ) commun aux 3 événements - pas d'accès/hébergement/restauration spécifiques à un lieu (ceux-ci, quand confirmés, iront dans la section #lieu de chaque page événement, pas sur infos.html).
- **Les 3 événements 2027** :
  - **LIGHT ON TRI Woippy\*\*** - dimanche 16 mai 2027.
  - **LIGHT ON TRI Pierre-Percée\*\*\*** - week-end du vendredi 11 au dimanche 13 juin 2027 (retraits/animations le vendredi, courses le samedi 12 et dimanche 13). **Pas de format XS** : annoncé dans le règlement PDF du 07/10/2026, mais Julien a confirmé en session le 11/10/2026 que ce format n'est finalement pas proposé - instruction explicite qui prévaut sur le PDF (voir hiérarchie des sources ci-dessus). Signalé en toutes lettres sur `reglement.html` / `en/reglement.html` / `de/reglement.html`.
  - **LIGHT ON TRI Madine\*\*\*** - week-end du samedi 18 au dimanche 19 septembre 2027 (date transmise directement par Julien ; le règlement PDF du 07/10/2026 indiquait encore « à venir »). **Vérifié par calcul calendaire : le 18 septembre 2027 tombe un samedi et le 19 un dimanche** - la formulation orale « samedis 18 et 19 » doit donc s'afficher comme « samedi 18 - dimanche 19 septembre 2027 », pas comme deux samedis.
- Horaires détaillés : seuls ceux de Pierre-Percée sont publiés dans le règlement 2027 (programme vendredi/samedi/dimanche complet, Article 6). **Les horaires définitifs de Woippy et de Madine seront ceux du guide participant** (pas encore publié) : ne jamais présenter le programme heure par heure de Madine 2026 comme celui de Madine 2027 - il sert uniquement de contenu rétrospectif (voir plus bas). Le règlement contient toutefois un « FORMAT\*\* - PROGRAMME TYPE » générique (retrait S/M, parcs à vélo, départs, récompenses) qui peut illustrer Woippy** à titre indicatif, mais qui n'est pas daté/horodaté comme définitif pour 2027 - à présenter comme indicatif, jamais comme confirmé.
- **Programme détaillé confirmé - Pierre-Percée\*\*\* (Article 6)** :
  - Vendredi 11 juin : retrait dossards Mini-Kids, Kids, S, M et L, 17h00-19h00.
  - Samedi 12 juin : retrait dossards L 7h30-9h00 ; Triathlon L - départ 9h30 ; retrait dossards Mini-Kids/Kids (duathlon) 10h00-10h45 ; Duathlon Mini-Kids - départ 11h00 ; Duathlon Kids - départ 11h30 ; retrait dossards S et M 17h00-19h00.
  - Dimanche 13 juin : retrait dossards S 7h00-8h30 ; Triathlon S - départ 9h00 ; retrait dossards M 11h30-13h00 ; Triathlon M - départ 13h30.
  - L'organisateur se réserve le droit de modifier ces horaires.
- **Déroulé des épreuves par discipline (Articles 7-9, confirmé par le règlement même quand l'horaire précis ne l'est pas)** :
  - **Woippy\*\*** (départ natation dans l'eau, site Woippy Plage) : natation M** 2 boucles de 750 m (sortie à l'australienne), S* 1 boucle de 500 m. Vélo (parc à vélo à Woippy Plage) : M** 3 boucles, S* 1 boucle. Course à pied (même site) : S* 2 boucles, M** 3 boucles.
  - **Pierre-Percée\*\*\*** (départ natation sur la plage) : natation L*** 2 boucles de 950 m, M** 2 boucles de 750 m, S* 1 boucle de 500 m (sorties à l'australienne pour L***/M**). Vélo et course à pied : parc à vélo sur le site de Pierre-Percée, **tracés et nombre de boucles 2027 en cours de finalisation**, à préciser dans le guide participant - ne pas inventer de nombre de boucles. Détail des duathlons jeunes également renvoyé au guide participant.
  - **Madine\*\*\*** (départ natation sur la plage, site lac de Madine côté Nonsard-Lamarche) : natation L*** 2 boucles de 950 m, M** 2 boucles de 750 m, S* 1 boucle de 500 m. Vélo (parc à vélo côté Nonsard-Lamarche) : L*** 2 boucles, M** 1 boucle, S* 1 boucle. Course à pied (même site) : L*** 3 boucles, M** 2 boucles, S* 1 boucle.
  - L'organisateur se réserve le droit de modifier les parcours (toutes épreuves).
- **Remise des prix (Article 10)** : primes uniquement sur L*** et M** (3 premiers hommes/femmes + 3 premiers vétérans hommes/femmes) - L : 200/150/100€, M : 100/75/50€, places 4-5 offertes pour l'édition N+1. Pas de prime sur les formats S*.
- Ouverture des inscriptions 2027 : **mardi 13 octobre 2026 à 20h00 (heure de Paris)**, confirmée par Julien en session (11/10/2026). Implémentée en JS (`assets/js/site.js`) via une cible UTC fixe (`Date.UTC(2026, 9, 13, 18, 0, 0)`, 18h UTC = 20h CEST) pour rester indépendante du fuseau/horloge du visiteur : compte à rebours complet sur l'accueil (`#regCountdown`) + pastille courte + bascule auto de tous les CTA `.btn-go.is-disabled` sitewide à l'heure dite. **Tant qu'aucun lien d'inscription Njuko réel n'existe**, les CTA pointent vers `infos.html#inscriptions` même une fois « ouverts » (TODO Njuko signalé dans `site.js` à remplacer dès réception du vrai lien) - décision explicite de Julien, à l'inverse du choix fait sur LIGHT ON RUN.
- Le village de l'événement s'appelle **Village LIGHT ON**.
- Contact : hello@lightontri.com et 06 37 08 97 57.
- Réseaux : à confirmer (pas de handles officiels TRI vérifiés dans les sources actuelles - ne pas réutiliser ceux de RUN/TRAIL sans validation).
- Le menu et le pied de page sont dupliqués dans chaque page HTML : toute modification doit être répétée sur toutes les pages.

## Madine 2026 : contenu rétrospectif uniquement

L'édition Madine de septembre 2026 a déjà eu lieu (photos Drive datées du 25-29/09/2026, enquête de satisfaction du 23/09/2026, programme détaillé du brief). Elle sert uniquement de matière **rétrospective** : résultats, galerie photo/vidéo, témoignages sur `resultats.html` / `medias.html` / `communaute.html`. Elle n'illustre jamais la page événement Madine 2027 comme programme à venir.

- Photos utilisées (Drive, dossiers J1 « Triathlon L***, KIDS et RUN 7 KM » et J2 « Triathlon S* et Triathlon M** »), renommées et déclinées en WebP (`assets/img/webp/`) :
  - `madine-2026-sortie-natation-plage.jpg` - sortie d'eau, sprint sur le sable, dossard chip cheville rouge (J1, probable L***). Bon candidat hero.
  - `madine-2026-course-a-pied-bord-lac.jpg` - groupe de coureurs au bord du lac, dossards visibles (J1).
  - `madine-2026-public-marina-arrivee.jpg` - spectateurs/public le long de la marina au coucher de soleil (J1).
  - `madine-2026-benevole-portrait.jpg` - portrait souriant d'un bénévole en polo orange, fanion de poste à la main (J2). Bon candidat pour illustrer le bénévolat/l'accueil.
  - `madine-2026-peloton-velo-route.jpg` - groupe de cyclistes de dos sur route, lumière d'automne (J2, probable S*/M**).
  - `madine-2026-accolade-arrivee.jpg` - accolade à l'arrivée, cape/drapeau orange LIGHT ON, moment fort et émotionnel (J2).
  - Toutes déclinées en `-640.webp` / `-1280.webp` / `-1920.webp`, qualité 74.
- Pas de photos/vidéos disponibles pour Woippy ou Pierre-Percée à ce stade (dossiers Drive fournis ne couvrent que Madine 2026) : flaguer ce manque plutôt que d'illustrer ces pages avec des photos Madine.
- Témoignages : extraits du Google Sheet officiel (enquête satisfaction Madine 2026, 415 réponses), uniquement avis positifs et non dupliqués, cités mot pour mot avec prénom + initiale + format. Exemples retenus : Renaud M. (S*) « Très agréablement surpris par l'organisation que j'ai trouvé impeccable. » ; Geoffrey L. (L***) « Tout est top !!! Les bénévoles au top !!! » ; Catherine M. (S*) « Tout est rôdé à la perfection » ; Marie M. (M**) « J'ai passé une excellente journée, ravie d'avoir fini mon M malgré le vent » ; Stéphanie J. (S*) « Super orga ! Merci à tous ! » ; FANNY I. (M**) « Très bonne communication sur les réseaux sociaux, ça donne envie » ; Bérangère H. (S*) « Toutes les réponses à mes questions se trouvaient dans le guide ou sur le site. Facile d'accès, lisible. ». La majorité des retours libres du sheet sont des remarques opérationnelles (parking, signalétique, ravitos) utiles pour la page « Premier triathlon » mais pas citables comme témoignages.

## DA LIGHT ON TRI

- Couleurs : anthracite `#414141` (pas le noir pur `#232323` utilisé par RUN/TRAIL - déviation volontaire demandée par le brief), orange `#ED5F3E`, blanc `#FFFFFF`. DA sombre : le clair n'en fait pas partie.
- Titres : Lemon Milk, bold ou regular selon l'usage, **jamais d'italique**. Textes : Roboto normal, mots forts en gras.
- Logo : wordmark officiel bicolore « LIGHT ON TRI » (crochets + éclair orange + « TRI » en cutout sur barre blanche) récupéré en SVG source depuis le Drive logos (`Charte graphique LIGHT ON/LOGO/Logo - Exports/SVG/BLANC_ORANGE/LIGHT_ON_TRI.svg`), recadré à son bounding box exact (bbox calculé via `svgelements`, `viewBox="153.77 229.3 1648.47 920.03"`) et exporté dans `assets/logo/logo-tri-bicolor.svg`. C'est ce fichier vectoriel unique qui est utilisé dans le header et le footer de chaque page (`.brand-logo`, voir `<header class="nav">` et `<footer>`) - a remplacé l'ancien lockup recomposé en texte + `eclair.svg`. Variante BLANC_ORANGE = fond sombre uniquement, invisible sur fond blanc (cohérent avec la DA sombre ci-dessous).
- Le picto générique (crochets + éclair seuls, sans texte) est réutilisé tel quel depuis le socle de marque LIGHT ON, commun à toutes les sous-marques : `eclair.svg`, `picto-blanc-orange.svg`, `favicon.svg`. **Attention** : `logo-header.svg` et `logo-blanc-orange.svg` (hérités du scaffold trail) ne sont PAS des pictos neutres - ce sont des wordmarks complets avec le texte « LIGHT ON TRAIL » gravé dans les tracés SVG. Ne jamais les référencer sur TRI (corrigé le 2026-10-07 : toutes les pages utilisaient encore ces deux fichiers dans le header/footer, remplacés par `logo-tri-full-orange-400.png`). Les fichiers restent dans `assets/logo/` pour mémoire mais ne doivent plus être liés depuis aucune page.
- Pas de crédit vidéaste à afficher pour les vidéos.

## Direction visuelle du site

- Style « éditorial sombre » : angles droits, pas de cartes arrondies ni de halos, pas d'animations de fondu au défilement. Blocs séparés par des filets avec un trait orange d'accent.
- Signatures de marque (à utiliser avec parcimonie) : crochets du picto (`.brk`, `.brk-in`), coupe en biais (`.cut`, une fois par page), repères GPS (`.geo`), éclair dans les boutons S'inscrire (`.btn-go` - état désactivé tant que le lien réel n'existe pas).
- Grille d'espacement : multiples de 8px.
- Le double menu (barre d'accès rapide + menu principal) est à conserver tel quel, adapté pour distinguer les 3 événements (pas un seul comme sur TRAIL/RUN).
- Mettre en orange un mot clé des grands titres avec `<em>` (jamais d'italique).
- Témoignages : uniquement de vrais retours issus du Google Sheet Madine 2026, jamais inventés, jamais dupliqués (`.v-lead`, `.v-card`, `.q-inline`). Aucun témoignage pour Woippy/Pierre-Percée (pas encore organisés sous ce format).
- Chaque page doit proposer un bouton S'inscrire bien visible ; désactivé visuellement tant que le lien réel n'est pas fourni ; un seul bouton plein par groupe de boutons.
- Les styles de la refonte sont à la fin de `assets/css/site.css` ; changer le `?v=` des liens CSS/JS après chaque modification.

## Ton rédactionnel LIGHT ON

LIGHT ON crée des événements sportifs outdoor : triathlon, trail, running.

**Ton** : dynamique, sportif, direct et complice, avec une vraie personnalité, sans en faire trop. On s'adresse aux participants comme à une communauté qui partage le goût du sport, de l'effort et du plaisir.

**Principe clé** : du challenge, oui, mais jamais dans un registre guerrier ou ultra-performance. On peut se dépasser sans se prendre trop au sérieux. L'effort, le plaisir, l'expérience et la convivialité vont ensemble.

**Style** :
- court et efficace : phrases simples, rythme naturel, pas de longs discours ;
- complice : clin d'œil, jeu de mots, pointe d'humour légère ;
- moderne et spontané, pas un texte publicitaire d'agence ;
- sportif mais accessible : on parle aux compétiteurs comme à ceux qui viennent se challenger, découvrir leur premier triathlon ou simplement profiter ;
- enthousiaste sans être cucul : pas de grandes envolées émotionnelles, de phrases inspirantes convenues ni de vocabulaire lyrique ;
- concret : les trois disciplines, les transitions, les sensations, le lieu, le moment vécu.

Sur le site web : garder cette personnalité, un cran plus sobre que sur Instagram. Clair, identifiable, vivant, sans blabla. Pas d'emojis.

**À éviter** : « une aventure humaine inoubliable », « dépassez vos limites », « vibrez au rythme de… », « une expérience unique », « prêts à relever le défi ? », « passionnés de sport », et tout vocabulaire marketing interchangeable. Pas d'accumulation d'adjectifs ni de superlatifs (« exceptionnel », « incroyable », « incontournable ») : le contenu doit donner envie par lui-même.

**Référence** : « LIGHT ON — Le goût de l'effort, grandeur nature. »

**Aussi** : pas de tirets longs (— ou –), uniquement « - ». Pas le mot « fête ». Remplacer les promesses (« organisation soignée », « ravitaillements généreux ») par des preuves concrètes : le lac, les trois disciplines, les bénévoles, les retours de coureurs. Chaque grande section doit contenir au moins une phrase impossible à copier sur le site d'un autre triathlon. Pour la page « Premier triathlon » : pédagogique et rassurant, jamais infantilisant - s'appuyer sur les vraies questions remontées par les débutants dans l'enquête Madine 2026 (transitions, drafting, équipement obligatoire, combinaison).

**Test avant chaque texte** : cette phrase pourrait-elle appartenir à n'importe quel triathlon ? Si oui, la retravailler. Une bonne phrase LIGHT ON pourrait être dite à voix haute par quelqu'un de l'équipe. Entre plusieurs formulations, choisir la plus courte, la plus naturelle et la moins publicitaire.

Ne jamais modifier les informations pratiques (horaires, distances, barrières horaires, tarifs, catégories) sans validation, et ne jamais inventer de donnée absente des sources officielles. Signaler toute incohérence plutôt que de la combler par une hypothèse.

## SEO

- Chaque page a un `<title>`, une meta description, une canonical absolue (`https://www.lightontri.com/...`) et un Open Graph complet : à créer pour toute nouvelle page, et l'ajouter à `sitemap.xml`.
- Le sur-titre de chaque page fait partie du H1 (`<h1><span class="eyebrow page-kicker">…</span> …</h1>`).
- Données structurées JSON-LD : un `SportsEvent` par événement 2027 (Woippy, Pierre-Percée, Madine) + organisation sur l'accueil, FAQ sur Infos. Jamais d'avis/étoiles à partir des témoignages.
- Photos : fichiers au nom descriptif, versions WebP dans `assets/img/webp/` (`nom-640.webp`, `nom-1280.webp`, `nom-1920.webp`, Pillow/libwebp qualité 74) via `<picture>`, avec `width`/`height`. **Ne pas utiliser l'AVIF de macOS (ImageIO)** : Chrome l'affiche en gris uni.
- Vidéos : hébergées nativement (`<video controls>` dans `.media-frame`) si des fichiers officiels sont fournis. Hero vidéo accueil ajouté le 11/10/2026 (`assets/video/hero-tri-2027.mp4` + variante mobile `hero-tri-2027-mobile.mp4`, extrait ~28s monté depuis le fichier Drive `lightontri-final-16-9.mov` fourni par Julien) : autoplay/muted/loop/playsinline, poster `assets/img/hero-tri-2027-poster.jpg`, repli photo statique (`<picture>` existant) si `prefers-reduced-motion: reduce`. Aucune autre vidéo officielle traitée à ce stade pour TRI.
- Versions Markdown générées par `python3 tools/build_md.py` : relancer après toute modification HTML, ne jamais éditer les `.md` à la main.

## À vérifier / signaler avant mise en ligne

1. **Ouverture des inscriptions 2027** : date confirmée (13/10/2026 20h00) et compte à rebours/bascule auto implémentés (voir DA/JS ci-dessus). **Aucun lien d'inscription Njuko réel** dans les sources actuelles : les CTA « S'inscrire » restent pointés vers `infos.html#inscriptions` même après la bascule auto, jusqu'à réception du vrai lien (TODO signalé dans `site.js`).
2. **Horaires Woippy et Madine 2027** non publiés (règlement : « les horaires définitifs seront ceux du guide participant »). Ne jamais afficher le programme heure par heure de Madine 2026 comme celui de 2027.
3. **Réseaux sociaux TRI** (Instagram, Facebook, YouTube, LinkedIn) non confirmés indépendamment - ne pas réutiliser les handles RUN/TRAIL sans validation.
4. ~~**Logo wordmark TRI** disponible uniquement en PNG (pas de SVG/AI source).~~ Résolu le 11/10/2026 : source vectorielle bicolore officielle fournie par Julien, recadrée et intégrée (`assets/logo/logo-tri-bicolor.svg`, header + footer, 39 pages).
5. ~~Tarif XS (Pierre-Percée) non chiffré dans le règlement fourni.~~ Résolu le 11/10/2026 : pas de format XS à Pierre-Percée, confirmé par Julien - XS retiré de tout le site (voir note datée dans la liste des 3 événements ci-dessus).
6. **Photos/vidéos Woippy et Pierre-Percée** : aucune disponible actuellement, seul Madine 2026 a des médias exploitables.
7. **Guide participant 2027** pas encore publié pour aucun des 3 événements - toute donnée d'horaire fine en dépend.
8. Fichiers trail orphelins dans le dépôt d'origine (gpx, docs résultats, partners) déjà supprimés lors du scaffolding ; `/en/` et `/de/` restent à réécrire pour TRI (encore des copies trail à ce stade).
9. **Formats proposés par événement** : déduits du nombre d'étoiles de chaque événement et des noms de dossiers Drive, pas listés explicitement nulle part. Woippy\*\* → déduit S* + M** (pas de L***, pas confirmé explicitement). Pierre-Percée\*\*\* → S* + M** + L*** (pas de XS, voir note datée du 11/10/2026 ci-dessus). Madine\*\*\* → S* + M** + L*** + Kids + RUN 7 KM (d'après les dossiers photos J1/J2 2026). **À confirmer avec Julien ou le guide participant avant publication.**
10. **Adresses/lieux de départ Woippy et Pierre-Percée** utilisées sur le site (codes postaux/communes uniquement, pas de GPS précis ni d'adresse de rue inventée) : à vérifier spécifiquement pour l'usage triathlon (les coordonnées GPS précédemment utilisées sur TRAIL/RUN pour Pierre-Percée/Madine n'ont jamais été vérifiées de façon indépendante non plus).
