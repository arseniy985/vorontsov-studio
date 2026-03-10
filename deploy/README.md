# Deploy

## Production stack

- `app`: Next.js standalone container
- `nginx`: public reverse proxy in Docker Compose
- TLS: `certbot certonly --standalone` on host, certificates mounted into the nginx container from `/etc/letsencrypt`

## Files

- `Dockerfile`: production image for Next.js standalone output
- `docker-compose.yml`: main deploy stack
- `deploy/nginx/templates/default.conf.template`: `http -> https` and `www -> non-www`
- `deploy/server/*.sh`: server bootstrap, certificate, deploy, and renew scripts

## Standard deploy

1. Copy `.env.production.example` to `.env.production` and adjust values if needed.
2. Run `deploy/server/install-prereqs.sh` on the server.
3. Run `deploy/server/bootstrap-repo.sh` on the server.
4. Run `deploy/server/issue-certificate.sh` on the server.
5. Run `deploy/server/deploy.sh` on the server.
