# Kona Compass — Instructions Page Spec V1

## Why create a separate page
Старый manual на `https://www.konacompas.com/instrukcija` полезен как proof и source material, но в текущем виде это набор картинок/слайдов. Для нового сайта лучше вынести инструкцию в отдельную нормальную HTML-страницу:
- полезно для доверия,
- полезно для SEO,
- полезно для поддержки клиентов,
- полезно как post-click destination с лендинга.

## Main goal
Сделать отдельную страницу `Instructions / User Manual`, которая:
- объясняет базовое управление,
- показывает основные режимы,
- даёт quick-start понимание,
- выглядит как часть нового сайта, а не как архив из Google Sites.

## Source extracted from old manual
Из старой инструкции уже можно достоверно вытащить такие смысловые блоки:

### 1. Operating Modes
Старый manual явно подтверждает логику переключения по кнопке:
- при включении устройство автоматически переходит в **Manual Mode**
- короткое нажатие кнопки включает **Direction Hold Mode**
- удержание кнопки 2 секунды включает **Auto Search Mode**
- удержание кнопки 3 секунды включает **Direction Lock Mode**

### 2. Rotation Speed Adjustment
Во всех режимах есть регулировка скорости вращения (6 уровней):
- уменьшить скорость: удерживать левую педаль и нажать кнопку
- увеличить скорость: удерживать правую педаль и нажать кнопку

### 3. Sector Adjustment in Auto Search Mode
Для режима автопоиска можно менять сектор поиска:
- уменьшить угол сектора: удерживать кнопку и нажать левую педаль
- увеличить угол сектора: удерживать кнопку и нажать правую педаль

## Important note
В старой инструкции видны иконки, а не полный расширенный manual, поэтому новую страницу лучше делать как:
- structured quick-start manual,
- readable web guide,
- with short explanations,
- not pretending that we already have a full engineering handbook.

## Recommended page structure

### 1. Hero
- Title: User Manual / Instructions
- Short intro: how Kona Compass is controlled and what this page helps you understand

### 2. Quick Start
- what happens when device powers on
- what the main button does
- how pedals affect rotation and search sector

### 3. Operating Modes
For each mode:
- mode name
- how to activate it
- what it does in plain language
- when to use it

### 4. Speed Adjustment
- explain 6 speed levels
- explain left/right pedal combinations
- explain why this matters on the water

### 5. Auto Search Sector Adjustment
- how to narrow or widen sector
- why you would use smaller or larger sweep

### 6. Controls Overview
- main button
- left pedal
- right pedal
- remote control mention

### 7. Practical Tips
- start in manual mode
- increase speed only when needed
- use narrower search when you want more focused scanning
- use wider search when covering more water

### 8. Support CTA
- if you need help with setup, compatibility, or operation, contact Kona Compass

## Writing direction
Страница должна быть:
- понятной,
- спокойной,
- без техно-театра,
- без corporate fluff,
- ближе к premium equipment manual than marketing copy.

## Recommended route in project
- create `/instructions` page in landing app
- use existing dark visual system from main site
- optionally add original instruction visual as one supporting image block
