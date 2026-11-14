# Dev Stack - Modern IT Solutions & Tech Stack Builder

## 📌 Project Overview
**Dev Stack** is an interactive web platform designed for developers and tech teams. Explore a wide variety of frontend, backend, database, DevOps, styling, and tooling technologies, compare them side-by-side, and craft your ideal development stack with a clean, modern UI.

---

## 🚀 Technologies Used
- **React.js** (v19)
- **JavaScript (JSX)**
- **Vite** (Build Tool)
- **Tailwind CSS** (v4)
- **DaisyUI** (v5)
- **React Toastify** (Notifications)
- **React Icons**

---

## ✨ Key Features
1. **Explore Technologies:**
   Browse 15+ modern development technologies across categories (Frontend, Backend, Database, Language, Styling, DevOps, Tools) complete with category tags, difficulty badges, ratings, and descriptions.
2. **Build Your Custom Stack:**
   Select technologies with a single click ("Add to Stack") to assemble your personalized tech stack. Duplicates are prevented automatically, and selected cards clearly reflect their status.
3. **Interactive Stack Management:**
   View selected technologies in real-time in the sticky right sidebar. Easily remove individual technologies or clear the entire stack with the "Remove All" button, complete with animated toast feedback.
4. **Conditional Rendering & Empty State:**
   Clean visual states when no technologies are selected, guiding users to start picking tools.

---

## ❓ Frequently Asked Questions (FAQ)

### 1. What is JSX, and why is it used in React?
**Answer:** JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like structures directly inside JavaScript code. In React, JSX makes components more readable, expressive, and easier to maintain while enabling the full power of JavaScript expressions inside curly braces `{}`.

### 2. What is the difference between props and state?
**Answer:**
- **Props (Properties):** Read-only data passed downwards from a parent component to a child component (unidirectional data flow). A child component cannot modify the props it receives.
- **State:** An internal, mutable data store managed within the component itself. When state updates via its setter function, the component automatically re-renders to reflect the new data in the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** The `useState` hook is a built-in React hook that allows functional components to declare and update local state variables. In this project, `useState` is used in:
- `App.jsx` / `Products.jsx` to store and manage the `selectedProducts` array (the user's chosen tech stack).
- `Products.jsx` to manage the `products` list and `loading` state when fetching data.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** The `useEffect` hook is used to handle side effects in functional components, such as data fetching, timers, and manual DOM manipulations. In this project, `useEffect` runs once when the `Products` component mounts (`[]` dependency array) to fetch the mock technologies list from `/product.json` asynchronously.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the `key` prop during its reconciliation (Virtual DOM diffing) process. Unique keys help React identify which items have changed, been added, or removed. This ensures efficient DOM updates and prevents subtle UI rendering bugs when list items are filtered or modified. In this project, `product.id` is used as the unique key.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering in React means rendering different UI elements or components based on certain conditions (truthy/falsy evaluation). In `RightSideBar.jsx`, conditional rendering is used to display the "Your stack is empty" placeholder when `selectedProducts.length === 0`, and the active list of selected items when one or more technologies have been added.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**
- **Parent to Child:** Data is passed down directly via **props** (e.g., `<RightSideBar selectedProducts={selectedProducts} />`).
- **Child to Parent:** The parent passes a callback function down as a prop (e.g., `setSelectedProducts`), and the child invokes this function with new data (lifting state up) when an event occurs (e.g., clicking "Add to Stack" or "Remove").

---

## 🛠️ How to Run Locally
1. Clone the repository and navigate to the project directory:
   ```bash
   cd devStack
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
