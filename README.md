# Truestory  

**Truestory** — это pet-проект, вдохновлённый функционалом Instagram. Он разработан с использованием современных технологий и ориентирован на предоставление интуитивного пользовательского интерфейса с широкими возможностями.  

## Stack 📚 

### **Frontend**  
- **HTML5**  
  - Работа с доступностью и семантикой.  
- **CSS3** / **SCSS**  
  - Поддержка адаптивности.  
  - Нормализация базовых стилей.  
  - Переменные для удобного управления стилями.  
  - Вложенность селекторов.  
  - Реализация продвинутой доступности.  
- **Tailwind CSS**  
  - Использование утилитарного CSS для быстрой разработки.  
- **React**  
  - Хуки (`useState`, `useEffect` и др.).  
  - Провайдеры для управления состоянием.  
  - React Router DOM для маршрутизации.  
  - Динамическая пагинация и предзагрузка low-data контента.  
  - Реализация загрузчиков (`loaders`) для повышения производительности.  
  - Переключение тем оформления (светлая/тёмная тема).  
  - Скелетная загрузка (Skeleton UI) для улучшения UX.  
  - Поиск карточек по заголовку.  
- **TypeScript**  
  - Типизация данных для предотвращения ошибок.  
  - Использование интерфейсов для описания структур данных.  

### **Dev Tools**  
- **Vite**  
  - Сверхбыстрый сборщик проектов.  
  - Настройка проекта для поисковых систем (SEO).  
  - Генерация манифеста веб-приложения.  

### **Libraries && API**  
- **i18n**  
  - Интернационализация.  
  - Перевод интерфейса на разные языки.  
- **@hello-pangea/dnd**  
  - Drag-and-Drop для изменения порядка карточек на странице профиля.  
- **JSON Placeholder**  
  - Fake REST API для подгрузки данных (требуется VPN для корректной работы).  

## Basic functionality 🌟

1. **Лента и карточки**  
   - Отображение карточек с подгружаемым контентом.  
   - Скелетная загрузка при ожидании данных.  
   - Поиск карточек по заголовку.  
2. **Профиль пользователя**  
   - Возможность изменения порядка карточек с помощью Drag-and-Drop.  
3. **Темы оформления**  
   - Переключение между светлой и тёмной темой.  
4. **Многоязычность**  
   - Полная поддержка интернационализации интерфейса.  

---

## Project Setup (React + TypeScript + Vite)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
