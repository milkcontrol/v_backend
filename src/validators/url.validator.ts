type isURLResponse = {
  isValid: boolean,
  hash: string,
  host: string,
  hostname: string,
  href: string,
  origin: string,
  pathname: string,
  port: string,
  protocol: string,
  search: string,
}
const isURL = (url: string): isURLResponse => {
  try {
    const res = new URL(url)
    return {
      isValid: true,
      hash: res.hash,
      host: res.href,
      hostname: res.hostname,
      href: res.href,
      origin: res.origin,
      pathname: res.pathname,
      port: res.port,
      protocol: res.protocol,
      search: res.search,
    }
  } catch (e) {
    return {
      isValid: false,
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      port: '',
      protocol: '',
      search: '',
    }
  }
}

export default isURL;
