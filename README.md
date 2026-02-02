# React Render Memo Demo (Vite + TypeScript)

![React](https://img.shields.io/badge/React-18-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Vite](https://img.shields.io/badge/Vite-7-646CFF)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A minimal **React render behavior demo** focused on understanding **re-renders**, **memoization with `React.memo`**, and **stable callbacks with `useCallback`**.

This project is intentionally simple and **educational**, designed to clearly show _what re-renders and why_.

---

## What this demo shows

This app renders:

- A counter button
- A text input
- A list of items (`Apple`, `Banana`, `Orange`, `Mango`)

By interacting with each control and observing the **console logs**, you can see:

- Which components re-render
- Which components stay stable
- How `React.memo` and `useCallback` prevent unnecessary renders

---

## Key Concepts Demonstrated

### 1. `React.memo` for component memoization

Both `ItemList` and `Item` are wrapped with `React.memo`:

```ts
const ItemList = memo(function ItemList({ onItemClick }: ItemListProps) {
  console.log("ItemList rendered");
  ...
});
```

```ts
const Item = memo(function Item({ name, onClick }: ItemProps) {
  console.log(`Item rendered: ${name}`);
  ...
});
```

This ensures components **only re-render when their props change**.

---

### 2. `useCallback` for stable function references

The click handler is memoized in `App`:

```ts
const handleItemClick = useCallback((name: string) => {
  console.log("Clicked:", name);
}, []);
```

Without `useCallback`, a **new function reference** would be created on every render,
forcing memoized children to re-render unnecessarily.

---

### 3. Observing render behavior via `console.log`

This demo **intentionally keeps `console.log` statements**.

They are essential to the learning goal:

- Typing in the input → `ItemList` and `Item` do NOT re-render
- Clicking "Increment Count" → `ItemList` and `Item` do NOT re-render
- Clicking an item → only the click log appears

These logs are the **proof** that memoization is working.

> ⚠️ Removing the logs would make the demo much less educational.

---

## Why this project exists

In small apps, unnecessary re-renders are harmless.  
In large apps, they can cause:

- Performance issues
- UI lag
- Wasted renders of heavy components

This project demonstrates:

- How easily unnecessary renders happen
- How to **prove render behavior**, not guess it
- How `React.memo` + `useCallback` work together

It’s a **proof of concept**, not a production app.

---

## Project Structure

```
react-render-memo-demo/
├─ src/
│  ├─ components/
│  │  ├─ Item.tsx
│  │  └─ ItemList.tsx
│  ├─ App.tsx
│  └─ main.tsx
├─ public/
├─ index.html
└─ README.md
```

---

## Getting Started

```bash
npm install
npm run dev
# open http://localhost:5173
```

---

## Notes on React StrictMode

- React StrictMode is enabled
- In development, React **intentionally double-renders**
- This is expected behavior
- Production builds render only once

This demo is **StrictMode-safe**.

---

## How to experiment

Try the following:

1. Remove `useCallback` → observe re-renders
2. Remove `React.memo` → observe re-renders
3. Add new props to `Item` → see what breaks memoization
4. Add more items → see how scaling affects render cost

---

## License

This project is licensed under the **MIT License**.
