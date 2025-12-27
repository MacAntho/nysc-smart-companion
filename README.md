# Cloudflare Workers + React Full-Stack Template

[![[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/MacAntho/nysc-smart-companion)]](https://deploy.workers.cloudflare.com)

A production-ready full-stack application template powered by Cloudflare Workers. Features a React frontend with shadcn/ui, TanStack Query, and a Workers backend using Durable Objects for scalable, stateful entities (Users, Chats, Messages). Includes hot-reloading development, type-safety, and one-click deployment.

## 🚀 Features

- **Full-Stack TypeScript**: Shared types between frontend and Workers backend.
- **Durable Objects**: Per-entity storage (one DO per User/Chat) with indexing for listings.
- **React + Vite**: Modern frontend with Tailwind CSS, shadcn/ui components, and dark mode.
- **API-First**: RESTful endpoints for CRUD operations on Users, Chats, and Messages.
- **Demo Data**: Seeded with mock users, chats, and messages for instant testing.
- **Production-Ready**: CORS, error handling, logging, client error reporting.
- **Mobile-Responsive**: Sidebar layout with theming and animations.
- **Fast Development**: Bun scripts, hot module replacement, and Wrangler integration.

## 🛠 Tech Stack

- **Backend**: Cloudflare Workers, Hono, Durable Objects
- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide Icons
- **State/Data**: TanStack Query, Zustand, Immer
- **UI/UX**: Radix UI, Framer Motion, Sonner (toasts)
- **Build/Tools**: Bun, Wrangler, ESLint, TypeScript

## ⚡ Quick Start

1. **Install Dependencies** (requires Bun):
   ```bash
   bun install
   ```

2. **Start Development Server**:
   ```bash
   bun run dev
   ```
   - Frontend: http://localhost:3000
   - Backend APIs: http://localhost:8787/api/*

3. **Test APIs** (with mock data auto-seeded):
   ```bash
   # List users
   curl http://localhost:8787/api/users

   # Create chat
   curl -X POST http://localhost:8787/api/chats \
     -H "Content-Type: application/json" \
     -d '{"title": "My Chat"}'

   # Send message
   curl -X POST http://localhost:8787/api/chats/c1/messages \
     -H "Content-Type: application/json" \
     -d '{"userId": "u1", "text": "Hello!"}'
   ```

## 📱 Frontend Customization

- Replace `src/pages/HomePage.tsx` with your app UI.
- Use `src/components/layout/AppLayout.tsx` for sidebar layouts.
- API client: `src/lib/api-client.ts` (uses shared types).
- Hooks: `useTheme`, `useMobile`.
- Components: Full shadcn/ui library available in `src/components/ui/*`.

Example API usage in React:
```tsx
import { api } from '@/lib/api-client';
import type { User } from '@shared/types';

const users = await api<User[]>('/api/users');
```

## 🔧 Development

- **Type Generation**: `bun run cf-typegen`
- **Lint**: `bun run lint`
- **Preview Build**: `bun run preview`
- **Worker Types**: Auto-generated via `@cloudflare/workers-types`.
- **Add Routes**: Extend `worker/user-routes.ts` (imports entities from `worker/entities.ts`).
- **New Entities**: Extend `IndexedEntity` in `worker/entities.ts` (auto-indexing, CRUD helpers).

| Script | Description |
|--------|-------------|
| `bun run dev` | Start dev server (frontend + worker) |
| `bun run build` | Build for production |
| `bun run deploy` | Build + deploy to Cloudflare |

## ☁️ Deployment

Deploy to Cloudflare Workers with zero-config:

```bash
bun run deploy
```

Or use the one-click deploy:

[[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/MacAntho/nysc-smart-companion)]

**Requirements**:
- [Cloudflare Account](https://dash.cloudflare.com)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/): `bunx wrangler@latest login`
- Config: `wrangler.jsonc` (Durable Objects pre-configured).

**Custom Domain**: Update `wrangler.jsonc` and run `wrangler deploy`.

**Production Notes**:
- Assets served via SPA fallback.
- Durable Objects use SQLite storage (migrated automatically).
- Observability enabled (logs/metrics).

## 📚 API Reference

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/users` | GET | List users (paginated) |
| `/api/users` | POST | Create user `{name: string}` |
| `/api/users/:id` | DELETE | Delete user |
| `/api/chats` | GET/POST | List/create chats |
| `/api/chats/:chatId/messages` | GET/POST | List/send messages |
| `/api/health` | GET | Health check |

Full types: `shared/types.ts`.

## 🤝 Contributing

1. Fork & clone.
2. `bun install`.
3. `bun run dev`.
4. Submit PR.

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

---

⭐ **Star this repo if it helps!** Built with ❤️ for Cloudflare Workers.