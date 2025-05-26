# ⚛️ React Suspense + Error Boundary Demo

This is a simple React + TypeScript demo showcasing how to use **Suspense** and **Error Boundaries** with `@tanstack/react-query`, styled using **Tailwind CSS**.

## 🔧 Tech Stack

- 🔁 **React Query** for data fetching
- 💤 **React Suspense** for lazy loading
- 🧯 **Error Boundaries** for graceful error handling
- 💅 **TailwindCSS** for styling
- ⚡ **Vite** for fast dev builds

## 🚀 Features

- Loading UI with `React.Suspense`
- Error handling using error boundaries
- Data fetching using `@tanstack/react-query`
- Tailwind CSS styling
- Type-safe with TypeScript

##  💤 Suspense & Error Boundary
```tsx
  <Suspense fallback={<Loading />}>
    <ErrorBoundary fallback={<ErrorUi />}>
      <UserProfile />
    </ErrorBoundary>
  </Suspense>
```

## 📦 Installation

```bash
git clone https://github.com/KhalilMeziane/react-tanstack-suspense-boundary-demo.git
cd react-tanstack-suspense-boundary-demo
npm install

```

## 🛠️ Scripts

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

```