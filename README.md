# USC AI Social Work Simulations (Secure Scaffold)

This repository is a **security-focused, full-stack scaffold** for the USC Suzanne Dworak-Peck School of Social Work AI simulation platform.

- Monorepo: Turborepo + pnpm
- Frontend: Next.js (App Router) + Tailwind
- Backend: NestJS + PostgreSQL (via Prisma)
- AI Integrations: Abstracted via `packages/ai-client`
- LTI 1.3: Abstracted via `packages/lti-core`
- CI/CD: GitHub Actions
- Deployment: Docker-based, Aptible compatible
- Security: Secrets via environment variables and platform secret stores (no secrets in repo)

See `docs/security.md` for the security model and `infra/` for deployment notes.
