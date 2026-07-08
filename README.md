# Playwright Automation Framework

## Overview

This project is a Playwright-based test automation framework designed for end-to-end web application testing. The framework follows industry best practices, including Page Object Model (POM), reusable utilities, test data management, reporting, and CI/CD integration.

## Tech Stack

- Playwright
- TypeScript / JavaScript
- Node.js
- Playwright Test Runner
- Allure Reports (Optional)
- GitHub Actions / Azure DevOps (Optional)

---

## Project Structure

```text
Playwright-Framework/
│
├── tests/
│   ├── login.spec.ts
│   ├── dashboard.spec.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│
├── fixtures/
│   ├── testFixture.ts
│
├── test-data/
│   ├── loginData.json
│
├── utils/
│   ├── config.ts
│   ├── logger.ts
│   └── helpers.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Prerequisites

Before running the framework, ensure the following are installed:

- Node.js (v18 or higher)
- npm or yarn
- Visual Studio Code (Recommended)

Verify installation:

```bash
node -v
npm -v
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd Playwright-Framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

### Execute All Tests

```bash
npx playwright test
```

### Execute Specific Test File

```bash
npx playwright test tests/login.spec.ts
```

### Execute Tests in Headed Mode

```bash
npx playwright test --headed
```

### Execute Tests in Specific Browser

Chrome:

```bash
npx playwright test --project=chromium
```

Firefox:

```bash
npx playwright test --project=firefox
```

Edge:

```bash
npx playwright test --project=Microsoft Edge
```

---

## Test Reports

Generate Playwright HTML Report:

```bash
npx playwright show-report
```

Report Location:

```text
playwright-report/
```

---

## Page Object Model (POM)

The framework implements the Page Object Model design pattern to improve:

- Code reusability
- Maintainability
- Readability
- Scalability

Example:

```typescript
export class LoginPage {
  constructor(private page) {}

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#loginBtn');
  }
}
```

---

## Environment Configuration

Store environment-specific configurations in:

```text
.env
```

Example:

```env
BASE_URL=https://example.com
USERNAME=testuser
PASSWORD=testpassword
```

Install dotenv:

```bash
npm install dotenv
```

---

## Screenshots and Videos

Playwright can automatically capture:

- Screenshots on failure
- Execution videos
- Traces for debugging

Example configuration:

```typescript
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry',
}
```

---

## CI/CD Integration

Run tests in GitHub Actions:

```yaml
name: Playwright Tests

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install

      - run: npx playwright install --with-deps

      - run: npx playwright test
```

---

## Best Practices

- Follow Page Object Model (POM)
- Keep test data separate from test scripts
- Use reusable utility methods
- Avoid hard-coded waits
- Use Playwright locators instead of XPath when possible
- Execute tests in parallel whenever applicable
- Maintain clean reporting and logging

