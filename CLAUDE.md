# LIGHT ON TRI

Site statique (HTML/CSS/JS, pas de build) de LIGHT ON TRI, organisé par LIGHT ON. Trois épreuves 2027 : Woippy**, Pierre-Percée*** et Madine***.
Aperçu local : `python3 -m http.server 8080` à la racine, puis http://localhost:8080.

Projet adapté depuis `lightontrail-redesign/` (squelette d'origine le plus neutre, choisi par Julien) en suivant le prompt maître « ADAPTATION DU SITE LIGHT ON TRI » : toute trace trail (noms, couleurs, médias, 17/37/54 KM) a été retirée.

## Arborescence (refonte du 11/10/2026, demandée par Magali)

Menu à 4 onglets : **Woippy**, **Pierre-Percée**, **Madine**, **Rejoindre l'aventure**. Barre du haut : Packs, Résultats, Photos, Devenir bénévole, Devenir partenaire.

- Chaque lieu a deux pages, sur le modèle de la page Pierre-Percée 2027 de LIGHT ON TRAIL :
  - **Les courses** (`woippy.html`, `pierre-percee.html`, `madine.html`) : L'essentiel, comparatif des triathlons, une section par format (`#s`, `#m`, `#l`, bandeau natation/vélo/course), « Et aussi » (`#jeunes`, `#run`), tracés OpenRunner quand on les a, packs (`#packs`), S'inscrire en 3 étapes (`#inscription`).
  - **L'événement** (`*-evenement.html`) : programme (`#programme`), Village LIGHT ON (`#village`), lieu & accès (`#lieu`), matériel & règles + lien règlement (`#materiel`), FAQ avec JSON-LD (`#faq`).
- **Rejoindre l'aventure** : `communaute.html` (`#esprit`, `#benevole`, `#partenaire`, `#presse`, `#suivre`, `#contact`) + `premier-triathlon.html`.
- Accueil : les 3 lieux (date, lieu, courses avec horaires), « Qui court où ? » (tableau, cartes sur mobile), packs, premier triathlon, rejoindre, inscriptions par lieu. On met en avant **WOIPPY\*\*, PIERRE-PERCÉE\*\*\*, MADINE\*\*\*** et non les formats S/M/L.
- Conservées : `reglement.html` (commun aux 3), `resultats.html`, `medias.html`, `mentions-legales.html`, `404.html`. Supprimées : `courses.html`, `infos.html`, `actualites.html`, `evenement-*.html` (redirections 301 dans `.htaccess`, y compris les anciennes adresses Wix).
- Version FR d'abord : les dossiers `en/` et `de/` ont été **retirés du dépôt** le 11/10/2026 (contenus périmés). Ils seront retraduits depuis le FR validé (récupérables dans l'historique git).
- Chaque page « L'événement » a un bloc `#guide` (Guide participant 2027, « à venir ») : y mettre le PDF du guide quand il existe. Les anciennes adresses Wix `/participants-*` y redirigent.
- `.htaccess` : redirections 301 de toutes les adresses de l'ancien site Wix (relevé du 11/10/2026), boutique Wix arrêtée → accueil, anciens événements (Seignosse, Favières, `/events/`) → 410.

## Courses 2027 par lieu (source : visuels Njuko 2027 validés par Magali le 09/10/2026)

- **Woippy\*\*** (dimanche 16 mai ; parking du Lidl ; nombreux hôtels et Airbnb à proximité) : S\* 9h00 (0,5 / 17 / 5,6 km ; ne pas parler de montée ni de D+ : non confirmé), RUN 6 KM 11h30 (on communique 6 km, pas 5,6), M\*\* 13h30 (1,5 / 40 / 10 km). Pas de Kids.
- **Pierre-Percée\*\*\*** : exception, le triathlon relie **deux lacs et deux parcs à vélo** (Magali, 11/10/2026). Retrait des dossards, Village LIGHT ON, T2, course à pied et arrivée : **base de loisirs de Celles-sur-Plaine (88110), au bord du lac de la Plaine** (lac du bas, là où tout le monde se retrouve). Les athlètes montent ensuite à vélo jusqu'au **lac de Pierre-Percée** (lac du haut) pour la natation et la T1, puis redescendent à vélo vers le Village (T2). Pas d'adresse affichée pour le lac du haut, seulement l'indication « parking de l'Anse de Pierre-Percée » pour le départ natation. Stationnement et hébergements : repris du site LIGHT ON TRAIL (gîtes du lac, camping Pierre-Percée Pays des Lacs). Courses : samedi 12 juin L\*\*\* 9h30 (1,9 / 90 / 21,1 km), MiniKids 11h00 (duathlon 250 m / 1 km / 250 m, nés 2018-2021), Kids 11h30 (duathlon 750 m / 5 km / 750 m, nés 2014-2017), RUN 5 KM 17h30 ; dimanche 13 juin S\* 9h00 (0,5 / 20 / 5 km), M\*\* 13h30 (1,5 / 40 / 10 km).
- **Madine\*\*\*** (retrait des dossards à la **Maison de Madine** ; Village LIGHT ON = aire d'arrivée + LIGHT ON Shop + exposants ; parking du site de Nonsard-Lamarche, se garer tout au bout ; hébergements : lacmadine.com) : samedi 18 septembre L\*\*\* 9h30 (1,9 / 85 / 21 km), MiniKids 11h00 (triathlon 50 m / 1,2 km / 500 m), Kids 11h30 (triathlon 200 m / 4 km / 1,5 km), RUN 7 KM 17h30 ; dimanche 19 septembre S\* 9h00 (0,5 / 20 / 5 km), M\*\* 13h30 (1,5 / 45 / 10 km).
- **Packs** (TRI uniquement) : -15 % pour 2 courses, -20 % pour 3 courses, S\*/M\*\*/L\*\*\* sur un ou plusieurs triathlons, hors Kids et RUN.
- Détails de parcours (boucles, D+, ravitos ; **pas de température de l'eau**, retirée à la demande de Magali le 11/10/2026) : pages officielles lightontri.com (infos seulement, jamais la mise en page ni les textes : l'ancien site n'est pas une référence de style).
- Tarifs (Magali, 11/10/2026, prévaut sur le règlement qui disait Kids 10 €) : **RUN 5/6/7 KM 12 €**, **MiniKids et Kids 15 €**.
- Packs : remise **automatique dans le panier Njuko, sans code promo** (2 triathlons -15 %, 3 triathlons -20 %). **Nominatifs** : les courses doivent être au nom de la même personne (un dossard pour soi, un pour son conjoint et un pour son fils = pas de pack).

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
- Tarifs 2027 (mis à jour par Julien en session le 12/10/2026, prévaut sur le règlement qui indiquait L*** 119€/134€, M** 59€/69€, S* 34€/39€, Kids 10€) : **S* 39€ licencié / 44€ non-licencié, M** 64€/74€, L*** 129€/144€**.
- Temps limites : L*** natation 1h10, vélo 5h30 ; M** vélo 3h00 ; S* pas de temps limite.
- Remboursement : 50% sur présentation d'un certificat médical jusqu'à 1 mois avant l'épreuve, aucun remboursement dans le dernier mois (sauf pack annulation souscrit à l'inscription : 15€ pour L***, 10€ pour M**). Transfert de dossard possible (3€) jusqu'à 48h avant le premier créneau de retrait.
- Assurance : SMACL n° C2020-3654. Directeur de course : Julien Labdant.
- Équipement (Article 2) : combinaison néoprène obligatoire si l'eau n'est pas au-dessus de 16°C, recommandée dans tous les cas. Bonnet fourni par l'organisation obligatoire. Puce de chronométrage à la cheville gauche, à rendre après l'arrivée (50€ si non rendue). Dossard non réduit/modifié, un seul fourni. Autocollant à coller sur le casque et la tige de selle du vélo. Aucun ravitaillement extérieur autorisé. Pas de règle de drafting détaillée dans le règlement fourni - à ne pas inventer, renvoyer au guide participant.
- Plus de page « Infos » ni « Les formats » (supprimées le 11/10/2026) : les formats diffèrent d'un lieu à l'autre, toutes les infos pratiques vont dans la page de chaque lieu (voir « Arborescence »).
- **Les 3 événements 2027** :
  - **LIGHT ON TRI Woippy\*\*** - dimanche 16 mai 2027.
  - **LIGHT ON TRI Pierre-Percée\*\*\*** - week-end du vendredi 11 au dimanche 13 juin 2027 (retraits/animations le vendredi, courses le samedi 12 et dimanche 13). **Pas de format XS** : annoncé dans le règlement PDF du 07/10/2026, mais Julien a confirmé en session le 11/10/2026 que ce format n'est finalement pas proposé - instruction explicite qui prévaut sur le PDF (voir hiérarchie des sources ci-dessus). Signalé en toutes lettres sur `reglement.html` / `en/reglement.html` / `de/reglement.html`.
  - **LIGHT ON TRI Madine\*\*\*** - week-end du samedi 18 au dimanche 19 septembre 2027 (date transmise directement par Julien ; le règlement PDF du 07/10/2026 indiquait encore « à venir »). **Vérifié par calcul calendaire : le 18 septembre 2027 tombe un samedi et le 19 un dimanche** - la formulation orale « samedis 18 et 19 » doit donc s'afficher comme « samedi 18 - dimanche 19 septembre 2027 », pas comme deux samedis.
- Horaires détaillés : Pierre-Percée = règlement 2027 (Article 6) + RUN 5 KM samedi 17h30 (visuel Njuko). Woippy = horaires 2027 de la page officielle lightontri.com (samedi 15 mai 17h-19h retrait ; dimanche S* 9h00, RUN 6 KM 11h30, M** 13h30). Madine = programme 2026 transposé aux dates 2027 (vendredi 17, samedi 18, dimanche 19 septembre), **validé par Magali** (consigne Njuko du 09/10/2026 : « reprendre les infos 2026 du site »). Chaque page programme précise que la version définitive sera dans le guide participant.
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
- Ouverture des inscriptions 2027 : **mardi 13 octobre 2026 à 20h00 (heure de Paris)**. Lien d'inscription unique pour les 3 lieux : **https://in.njuko.com/light-on-tri-2027**. Tous les boutons S'inscrire y pointent et sont cliquables dès maintenant (décision de Magali, 11/10/2026 : on voit que tout est prêt, Njuko gère l'ouverture). `assets/js/site.js` ne gère plus que le compte à rebours de l'accueil (`#regCountdown`).
- Le village de l'événement s'appelle **Village LIGHT ON**.
- Contact : hello@lightontri.com et 03 74 47 56 52.
- Réseaux : Instagram @lighton_tri et Facebook facebook.com/lightontri (liens présents sur l'ancien site officiel lightontri.com). YouTube/LinkedIn : non vérifiés pour TRI, pas affichés.
- Le menu et le pied de page sont dupliqués dans chaque page HTML : toute modification doit être répétée sur toutes les pages.

## Woippy et Pierre-Percée : contenu rétrospectif uniquement

Photos ajoutées le 11/10/2026 depuis le dossier Drive partagé par Julien (`1Hq9Z2_dImYhkmqF1ojdL2D1vTZBHxDMO`, sous-dossiers "1 - Woippy", "2 - Pierre-Percée", "3 - Madine" - 83 fichiers au total). Seuls les deux fichiers explicitement nommés "Photo page LIGHT ON TRI/TRAIL <Événement>**/***.jpg" par Magali (hero désigné de chaque page événement, même convention que Madine ci-dessous) ont été utilisés à ce stade - le reste du dossier (segments par format "LIGHT ON - Rectangles Njuko", photos d'ambiance/podium, usage exact non confirmé) n'a pas été traité, à faire dans un second temps si besoin.

- `woippy-2023-arrivee-duo-sprint.jpg` - deux athlètes sprintent coude à coude vers l'arche d'arrivée orange (picto LIGHT ON visible), public et enfant au bord du passage. EXIF : 25/05/2023, Canon 5D Mark IV. Utilisée en hero (`page-hero has-img`) sur `evenement-woippy.html` (+ en/de), remplace le bandeau "aucune photo disponible" retiré à cette occasion.
- `pierre-percee-2022-lac-foret.jpg` - vue du lac de Pierre-Percée et de la forêt environnante, brume légère, quelques silhouettes au loin sur la rive. EXIF : 28/06/2022, Canon 5D Mark IV. Utilisée en hero sur `evenement-pierre-percee.html` (+ en/de), même traitement.
  - **Point à vérifier avec Magali** : le fichier Drive source est nommé "Photo page LIGHT ON **TRAIL** Pierre-Percée**.jpg" (pas "TRI") - probablement un copier-coller du dossier trail puisque Pierre-Percée accueille les deux évènements sur le même site, mais à confirmer avant publication définitive. La photo elle-même est un paysage neutre (pas de logo/texte visible), donc réutilisable sans risque de contenu si le nom est bien une coquille.
- Toutes deux déclinées en WebP (`assets/img/webp/`, `-640/-1280/-1920`, qualité 74), `object-position` ajusté manuellement par photo pour garder le sujet visible sous le texte du hero.
- Comme pour Madine 2026 ci-dessous : ces photos sont du contenu **rétrospectif** (éditions passées, 2023 et 2022) et n'illustrent jamais le programme/horaires 2027 comme confirmés - seulement l'ambiance du lieu et de l'épreuve.
- Reste à traiter si besoin : les photos de format individuelles ("LIGHT ON - Rectangles Njuko - TRI <Événement> <Format>.jpg", un visuel par S*/M**/L***/Kids/Mini-Kids/RUN par événement) et les photos d'ambiance supplémentaires des mêmes dossiers Drive, pas encore assignées à un emplacement précis du site.

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
- Photos par lieu : sélection de Magali dans `~/Documents/Documents/MAZE Planner/LIGHT ON/2 - LIGHT ON TRI/Site web TRI 2027/Site web TRI 2027 - Séléction photos/` (dossiers 1 - Woippy, 2 - Pierre-Percée, 3 - Madine). Choix du 11/10/2026 **provisoire** (à revoir avec Magali). Règle : **jamais deux fois la même photo sur tout le site** (le menu n'a volontairement pas de photo).
- Témoignages : extraits du Google Sheet officiel (enquête satisfaction Madine 2026, 415 réponses), uniquement avis positifs et non dupliqués, cités mot pour mot avec prénom + initiale + format. Exemples retenus : Renaud M. (S*) « Très agréablement surpris par l'organisation que j'ai trouvé impeccable. » ; Geoffrey L. (L***) « Tout est top !!! Les bénévoles au top !!! » ; Catherine M. (S*) « Tout est rôdé à la perfection » ; Marie M. (M**) « J'ai passé une excellente journée, ravie d'avoir fini mon M malgré le vent » ; Stéphanie J. (S*) « Super orga ! Merci à tous ! » ; FANNY I. (M**) « Très bonne communication sur les réseaux sociaux, ça donne envie » ; Bérangère H. (S*) « Toutes les réponses à mes questions se trouvaient dans le guide ou sur le site. Facile d'accès, lisible. ». La majorité des retours libres du sheet sont des remarques opérationnelles (parking, signalétique, ravitos) utiles pour la page « Premier triathlon » mais pas citables comme témoignages.

## DA LIGHT ON TRI

- Couleurs : noir `#232323` (aligné sur lightontrail.com depuis le 11/10/2026, sur demande explicite de Julien - l'anthracite `#414141` utilisé jusque-là était une déviation volontaire du brief initial, abandonnée), orange `#ED5F3E`, blanc `#FFFFFF`. DA sombre : le clair n'en fait pas partie. Tokens `--bg`/`--bg-2`/`--surface`/`--surface-2`/`--muted`/`--faint`/`--on-accent` dans `assets/css/site.css` recopiés à l'identique de `lightontrail-redesign/assets/css/site.css` (seul `--accent`/`--accent-2` orange restent identiques entre les deux sites, c'était déjà le cas).
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
- Témoignages : uniquement de vrais retours, cités mot pour mot (prénom + initiale + format/édition), **ceux d'un lieu uniquement sur les pages de ce lieu**, jamais deux fois le même sur le site (`.v-lead`, `.v-card`, `.q-inline`). Sources Madine 2026 : Google Sheet de l'enquête + capture « Avis Madine 2026.png » (dossier Communication/Réseaux sociaux). Woippy et Pierre-Percée : **Magali fournit les retours** (rien à inventer en attendant).
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
- Vidéos : hébergées nativement (`<video controls>` dans `.media-frame`) si des fichiers officiels sont fournis. Hero vidéo accueil (12/10/2026) : « Aftermovie LIGHT ON TRI Madine 2026 - Short » fourni par Magali (source 1920×1080, 33 s, aussi sur le Drive). Encodé via AVFoundation (Swift, pas de ffmpeg) sans le son : `assets/video/aftermovie-madine-2026.mp4` (1920×1080, 4,5 Mbit/s, 18,8 Mo) et `-vertical.mp4` (608×1080, recadrage centré en pleine définition pour les écrans verticaux, 2,6 Mbit/s, 10,9 Mo, servi si `max-aspect-ratio: 4/5` ; l'ancienne version 960×540 agrandie pixellisait sur téléphone), poster `assets/img/aftermovie-madine-2026-poster.jpg`. Le trail est en 1280×720 à 2,8 Mbit/s : TRI garde le 1080p pour éviter tout effet pixellisé en plein écran (demande de Magali). Toujours réencoder depuis la source, jamais depuis un fichier déjà compressé.
- Versions Markdown générées par `python3 tools/build_md.py` : relancer après toute modification HTML, ne jamais éditer les `.md` à la main.

## SEO / GEO (audit du 11/10/2026, validé par Magali)

- Titres Google : « Triathlon Madine\*\*\* 2027 : S, M, L, Kids et RUN · LIGHT ON TRI » pour les pages Les courses, « Madine\*\*\* 2027 : programme, accès, hébergement · LIGHT ON TRI » pour les pages L'événement (deux intentions distinctes : ne pas les faire converger). Étoiles conservées, une seule fois.
- Accueil : H1 avec surtitre « Triathlons 2027 en Lorraine » (Lorraine plutôt que Grand Est, choix de Magali ; le Grand Est reste dans l'accroche et la description).
- Phrase « En bref » factuelle en tête de L'essentiel sur chaque page Les courses (`.ev-brief`) : nom, dates, lieu, courses. À tenir à jour comme le JSON-LD.
- Équivalences en petit seulement (`.c-eq` + ligne « Équivalent » du comparatif) : S\* « proche du sprint », M\*\* « distance olympique », L\*\*\* « longue distance, format half ». Jamais en titre.
- JSON-LD : un `SportsEvent` par lieu (sur la page Les courses) avec `subEvent` pour chaque course (heure de départ, offres licencié / non-licencié, Kids 15 €, RUN 12 €, lien Njuko) ; lieu déclaré = Village LIGHT ON (Pierre-Percée : Celles-sur-Plaine) ; `BreadcrumbList` sur toutes les pages ; `FAQPage` sur les pages L'événement et Premier triathlon (Google n'affiche plus ces FAQ enrichies pour ce type de site : intérêt = extraction, ne pas en ajouter d'autres).
- Images de partage 1200 × 630 générées dans `assets/img/og/` (une par page).
- `llms.txt` et versions Markdown : gardés car peu coûteux, mais **ce n'est pas un standard** (aucune norme W3C/IETF, Google ne l'utilise pas, aucun fournisseur d'IA ne confirme s'en servir). `rel="describedby"` retiré.
- Robots : tout est autorisé, y compris l'entraînement des IA (choix de Magali : être trouvé partout).
- GEO hors site : les agrégateurs (Finishers, TrainerDay, Kerrun, running.life, milesrepublic) affichaient les infos 2026 ; Magali leur écrit pour mise à jour avec liens vers les pages officielles.

## À vérifier / signaler avant mise en ligne (mis à jour le 11/10/2026)

1. **Retours de participants Woippy et Pierre-Percée** : Magali les fournit. Les pages Madine ont déjà les leurs.
2. **Photos** : choix provisoire du 11/10/2026, à revoir avec Magali (ainsi que la sélection des secondes de la vidéo d'accueil).
3. **Pierre-Percée** : tracés vélo et course à pied 2027 en cours de finalisation.
4. **Madine** : programme 2026 transposé aux dates 2027 (validé par Magali le 11/10/2026). RUN 7 KM « dès 15 ans » (ancien site).
5. **Guide participant 2027** pas encore publié : il fera foi pour les horaires fins, les règles de drafting et les accès.
6. **EN/DE** : à retraduire depuis le FR validé (pages encore à l'ancienne arborescence, hors sitemap).
7. **Woippy\*\*** : seul le S\* a ses tracés OpenRunner (natation, vélo, course). M\*\*, Pierre-Percée et Madine : tracés à fournir.
