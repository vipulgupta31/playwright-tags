# Playwright Tags Demo (LambdaTest Integration)

This project demonstrates running Playwright tests on the LambdaTest cloud grid with different usage and implementation of Tags.

## 🚀 Setup

1. Install dependencies:
```bash
npm install
```

2. Set your LambdaTest credentials:
```bash
export LT_USERNAME=your_username
export LT_ACCESS_KEY=your_access_key
```

## 🔀 Run tests with tag at describe level
```bash
npx playwright test --grep @smoke
```

## 🔀 Run tests for given tag only
```bash
npx playwright test --grep @login
```

## 🔀 Run all tests and exclude the given tag (logical NOT)
```bash
npx playwright test -grep-invert @smoke
```

## 🔀 Run tests which have both the given tags (logical AND)
```bash
npx playwright test --grep "(?=.*@smoke)(?=.*@login)"
```

## 🔀 Run tests which have either one of the given tags (logical OR)
```bash
npx playwright test --grep "@smoke|@login"
```

## 📂 Project Structure
 
- tests/home.spec.ts
- tests/checkbox.spec.ts
- tests-examples/demo-todo-app.spec.ts
- package.json
- playwright.config.ts        //LambdaTest config is added in this file
