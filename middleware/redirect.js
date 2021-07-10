export default function (context) {
  if (process.server) {
    const { req, redirect, $config } = context

    if (req.headers.host.includes('www.')) {
      redirect(301, $config.baseUrl + req.originalUrl)
    }
  }
}
