# Security Model Overview

This scaffold is designed for a FERPA-aligned, LTI-integrated AI simulation platform.

Key principles:
- No secrets in source control
- All credentials (DB, AI providers, LTI keys) injected via environment variables
- Separation between frontend and backend (no direct AI or LTI credentials in the browser)
- All student-identifiable data flows only through the backend API
- HTTPS termination handled by the platform (e.g., Aptible)
- Structured logging and auditability at the API layer

See also:
- `infra/aptible-notes.md` for deployment guidance
- `apps/api/src` for backend security boundaries
