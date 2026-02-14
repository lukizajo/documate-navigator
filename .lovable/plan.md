

# Web-Book Dokumentácia: M01 – Z čoho je AI „uvarená?" 🍲

## Prehľad
Vytvoríme interaktívnu web-book dokumentáciu z existujúceho DOCX modulu M01 o základoch AI. Aplikácia bude mať sidebar navigáciu s 11 stránkami a markdown-štýlový obsah s konzistentným formátovaním.

---

## Štruktúra a navigácia

### Sidebar s 11 stránkami:
- **00 – Úvod** (úvod modulu, prehľad, ciele)
- **01 – Čo je AI** (definícia AI, úzka vs. generatívna, prečo ľudí odradí, hranice)
- **02 – Prieskum využívania** (štatistiky, oblasti použitia, CZ/SK realita)
- **03 – História** (od Turinga 1950 po ChatGPT, míľniky, AI zimy)
- **04 – Budúcnosť** (rok 2030, AGI, multimodálna AI, trh práce)
- **05 – Spolupráca** (Human-in-the-loop, cyklus spolupráce, rozdelenie zodpovednosti)
- **06 – Druhy modelov & slovník** (LLM, obrazové, zvukové, multimodálne, SLM, agentická AI, mini-slovník GPT)
- **07 – Mapa hráčov** (OpenAI, Google, Microsoft, Anthropic, Meta, Mistral, Perplexity, GROK)
- **08 – Ako vzniká model** (dáta, tréning, doladenie, parametre)
- **09 – Halucinácie & teplota** (výkon AI, halucinácie, teplota modelov)
- **10 – Etika & AI Act** (súkromie, etika, EU AI Act, rizikové kategórie)

### Navigačné prvky:
- Sidebar s collapsible skupinami
- Aktívna stránka vizuálne zvýraznená
- Tlačidlá „Predchádzajúca / Nasledujúca" na spodku každej stránky
- Responzívny dizajn (sidebar sa skryje na mobile)

---

## Formátovanie obsahu každej stránky

### Hlavička stránky:
- **TL;DR** blok s 3–5 kľúčovými bodmi
- **Tagy** s prázdnymi checkboxmi: ☐ MUST | ☐ SHOULD | ☐ NICE

### Štruktúra nadpisov:
- **H1** = názov modulu (M01)
- **H2** = sekcie označené emoji číslami (1️⃣ 2️⃣ 3️⃣...)
- **H3** = nadpisy s emoji (🧭 🎯 🤖 🧠 😕 atď.)

### Špeciálne bloky (vizuálne odlíšené karty):
- **❓ Mini-test** – formát: Otázka → Možnosti → Správna odpoveď → Prečo
- **✍️ Mini-úloha** – praktické cvičenia s inštrukciami
- **✅ Očakávané zistenie** – zhrnutie poučenia

### Formátovanie textu:
- Dlhé odseky rozdelené do odrážkových zoznamov
- Emoji zachované ako vizuálne značky
- Citácie/prompty vo zvýraznených blokoch
- Tabuľky (EU AI Act časová os) v prehľadnom formáte

---

## Dizajn a UX

- Čistý, čitateľný web-book štýl (svetlý theme)
- Typografia optimalizovaná na dlhšie čítanie
- Farebné rozlíšenie blokov (mini-test = modrý, mini-úloha = zelený, zistenie = žltý)
- Plynulé prepínanie medzi stránkami
- Obsah bude plne statický (bez backendu)

