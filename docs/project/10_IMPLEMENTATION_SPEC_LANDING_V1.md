# Kona Compass — Landing Implementation Spec V1

## Goal
Собрать первую рабочую кодовую версию лендинга Kona Compass в папке `landing/` как production-ready base, пригодную для дальнейшей доработки контента, дизайна и SEO.

## Recommended Stack
- Next.js
- React
- Tailwind CSS
- App Router
- TypeScript

## Why this stack
- быстро поднять современный лендинг без лишней ручной возни
- удобно масштабировать под SEO, hreflang, schema и отдельные страницы
- легко поддерживать и расширять после первой версии
- подходит для product landing, где важны скорость, адаптив и аккуратная структура

## Scope for V1
Сделать одну рабочую страницу лендинга на английском языке.

### V1 sections
1. Hero
2. Compatibility
3. Problem
4. Solution
5. Key Features
6. Operating Modes
7. Controls / Ease of Use
8. Demo section
9. Build Quality
10. Installation / Real-world Use
11. FAQ
12. CTA / Contact

## Content Source
Использовать как основу:
- `docs/project/08_LANDING_COPY_DRAFT_V1.md`
- `docs/project/07_LANDING_COPY_SKELETON_V1.md`
- материалы старого сайта

## V1 constraints
- без CMS
- без e-commerce
- без сложной формы
- без многоязычности на первом проходе
- без внешней зависимости от Google Sites

## Acceptance Criteria
- страница запускается локально без ошибок
- код лежит внутри `landing/`
- структура компонентов читаемая и не грязная
- страница адаптивна для mobile и desktop
- все основные секции из draft отражены в UI
- контакты и CTA заметны
- SEO base присутствует: title, description, OG basics
- легко заменить текст и медиа позже

## Immediate Next Step
1. scaffold Next.js app inside `landing/`
2. настроить базовую структуру
3. сверстать first-pass landing page
4. затем уже допиливать polish и assets
