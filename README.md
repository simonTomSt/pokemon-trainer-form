# Pokémon Trainer Form

A Next.js app router application for Pokémon Trainer registration.

## 🛠️ Stack

- **Framework**: Next.js (v14), TypeScript
- **Data Fetching**: Tanstack Query
- **Form Management**: React Hook Form
- **UI Components**: MUI
- **Testing**: Playwright for E2E tests
- **Search**: Fuse.js
- **Hooks**: usehooks-ts
- **Validation**: zod

## 🚀 Getting Started

### Prerequisites

Ensure you have **pnpm** and **Docker** installed.

### Local Development

1. Install dependencies:

   ```bash
   pnpm i
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Or run with Docker:

   ```bash
   docker-compose -f docker-compose-dev.yml up --build -d
   ```

### Production Build

1. Install dependencies:

   ```bash
   pnpm i
   ```

2. Build the application:

   ```bash
   pnpm build
   ```

3. Start the production server:

   ```bash
   pnpm start
   ```

4. Or Run with Docker:

   ```bash
   docker-compose -f docker-compose-prod.yml up --build -d
   ```

## 💡 Potential Improvements

- Expand **E2E tests** coverage
- Implement **unit tests** using Jest and React Testing Library (RTL)
- Add **i18n** for multilingual support
- Upgrade to **Next.js v15** upon compatible MUI release come out
- Validate environment variables with **zod**

---
