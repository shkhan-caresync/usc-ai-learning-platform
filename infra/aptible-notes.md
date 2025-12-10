# Aptible Deployment Notes

This project is designed to deploy as Docker containers onto Aptible.

High-level steps:
1. Build Docker images for `apps/api` and `apps/web`.
2. Push images to a container registry (e.g., GHCR, Docker Hub).
3. Create Aptible apps for `api` and `web`.
4. Configure environment variables in Aptible (DB credentials, AI keys, LTI keys).
5. Provision PostgreSQL via Aptible or another managed provider.
6. Run database migrations from the `api` container.
7. Point your institutional DNS (e.g., `*.usc.edu`) to Aptible endpoints.
