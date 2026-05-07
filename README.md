# 3D Scan — Сайт диагностического центра

## Структура проекта
```
3dscan-project/
├── public/
│   ├── index.html        # Точка входа
│   └── assets/
│       ├── logo.png
│       └── logo-white.png
├── src/
│   ├── icons.jsx         # SVG иконки
│   ├── primitives.jsx    # Базовые компоненты (Btn, H2, Eyebrow...)
│   ├── chrome.jsx        # Header + Footer
│   ├── app.jsx           # Роутер
│   ├── page-home.jsx     # Главная
│   ├── page-patient.jsx  # Для пациентов
│   ├── page-doctor.jsx   # Для врачей
│   ├── page-about.jsx    # О центре
│   └── page-contacts.jsx # Контакты
├── package.json
└── README.md
```

## Запуск локально
```bash
npm run dev
# или просто:
npx serve public -p 3000
```
Открыть: http://localhost:3000

## Что нужно заменить
- `assets/logo.png` — логотип (уже есть)
- Телефон `+7 7172 00-00-00` → реальный номер
- Email `hello@3dscan.kz` → реальный email
- Адрес ЖК «Nurkent» → уточнить
- Фото в `src/page-*.jsx` — заменить `unsplash` URL на свои фото
- Лицензия `№ 22-019843` → реальный номер

## Стек
- React 18 (UMD, без сборщика)
- Tailwind CSS (CDN)
- Babel Standalone (трансформация JSX в браузере)
- Шрифты: Geist + Fraunces (Google Fonts)

## Для перехода на Vite/Next.js
Все компоненты уже написаны как стандартные React-компоненты.
Нужно только: убрать `window.X = X` в конце каждого файла и 
добавить `import/export` синтаксис.
