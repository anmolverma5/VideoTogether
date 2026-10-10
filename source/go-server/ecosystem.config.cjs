// ecosystem.config.cjs — PM2 configuration for VideoTogether YouTube Sync Server
//
// Service:   VideoTogether Go Sync Backend (REST API & WebSocket Hub)
// Domain:    https://youtube-sync.vezpec.com/
// Port:      5001 (Local reverse-proxied via Cloudflare Argo Tunnel)
//
// Start:     pm2 start ecosystem.config.cjs
// Save:      pm2 save
// Logs:      pm2 logs youtube-sync
// Restart:   pm2 restart youtube-sync
// Stop:      pm2 stop youtube-sync

module.exports = {
  apps: [
    {
      name: "youtube-sync",
      script: "./server.exe",
      cwd: "J:/Logistics/vezpec and vezpec global/VideoTogether/source/go-server",
      autorestart: true,
      restart_delay: 3000,
      max_restarts: 10,
      min_uptime: "10s",
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      time: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
