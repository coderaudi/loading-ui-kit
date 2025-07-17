Absolutely, Audi — here’s your **final polished and production-ready `README.md`** file for `loading-ui-kit`. You can **copy and paste this directly** into your project root and it’s good to go.

---

````md
# 🔄 loading-ui-kit

A **universal loading UI component** that works seamlessly across both **React** and **React Native** platforms. It provides a customizable loading circle with optional logo and text support.

---

## 🚀 Installation

```bash
npm install loading-ui-kit
````

---

## 🧩 How to Use

Follow these steps to integrate `loading-ui-kit` into your app:

### 1. Import the Component

#### In React:

```jsx
import Loading from 'loading-ui-kit';
```

#### In React Native:

```jsx
import Loading from 'loading-ui-kit';
import { Image } from 'react-native';
```

---

### 2. Use the Component

#### ✅ React Example:

```jsx
<Loading
  loading={true}
  textBelowLoadingCircle="Please wait..."
  logoInsideLoadingCircle={
    <img src="/logo.png" alt="loading" width={30} />
  }
/>
```

#### ✅ React Native Example:

```jsx
<Loading
  loading={true}
  textBelowLoadingCircle="Loading content..."
  logoInsideLoadingCircle={
    <Image
      source={require('./logo.png')}
      style={{ width: 30, height: 30 }}
    />
  }
/>
```

---

## ⚙️ Props

| Prop                      | Type            | Required | Description                                     |
| ------------------------- | --------------- | -------- | ----------------------------------------------- |
| `loading`                 | `boolean`       | ✅        | Controls whether the loader is visible          |
| `textBelowLoadingCircle`  | `string` or JSX | ❌        | Optional text shown below the loading indicator |
| `logoInsideLoadingCircle` | `JSX.Element`   | ❌        | Optional logo/image inside the loading circle   |

---

## 💡 Tips

* Use any icon or image for `logoInsideLoadingCircle`
* Use conditionals to toggle `loading` dynamically
* Wrap in a modal or overlay for full-screen loading states

---

## 🛡️ License

MIT © 2025 [coderaudi](https://github.com/coderaudi)

---

## 🌐 Links


```

