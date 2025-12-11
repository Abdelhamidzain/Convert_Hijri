import type { Context } from "https://edge.netlify.com";

const BOT_AGENTS = [
  'googlebot',
  'yahoo! slurp',
  'bingbot',
  'yandex',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest/0.',
  'developers.google.com/+/web/snippet',
  'slackbot',
  'vkshare',
  'w3c_validator',
  'redditbot',
  'applebot',
  'whatsapp',
  'flipboard',
  'tumblr',
  'bitlybot',
  'skypeuripreview',
  'nuzzel',
  'discordbot',
  'google page speed',
  'qwantify',
  'pinterestbot',
  'bitrix link preview',
  'xing-contenttabreceiver',
  'chrome-lighthouse',
  'telegrambot',
  'google-inspectiontool'
];

export default async function handler(request: Request, context: Context) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const url = new URL(request.url);
  
  // Skip static files
  const staticExtensions = ['.js', '.css', '.xml', '.less', '.png', '.jpg', '.jpeg', '.gif', '.pdf', '.doc', '.txt', '.ico', '.rss', '.zip', '.mp3', '.rar', '.exe', '.wmv', '.doc', '.avi', '.ppt', '.mpg', '.mpeg', '.tif', '.wav', '.mov', '.psd', '.ai', '.xls', '.mp4', '.m4a', '.swf', '.dat', '.dmg', '.iso', '.flv', '.m4v', '.torrent', '.woff', '.woff2', '.ttf', '.svg', '.webmanifest'];
  
  if (staticExtensions.some(ext => url.pathname.endsWith(ext))) {
    return context.next();
  }
  
  // Check if request is from a bot
  const isBot = BOT_AGENTS.some(bot => userAgent.includes(bot));
  
  // Check for _escaped_fragment_ (old AJAX crawling)
  const hasEscapedFragment = url.searchParams.has('_escaped_fragment_');
  
  if (isBot || hasEscapedFragment) {
    // Add prerender role for Netlify redirect
    context.cookies.set({
      name: "nf_role",
      value: "prerender",
      path: "/",
      httpOnly: true,
      sameSite: "Lax"
    });
  }
  
  return context.next();
}

export const config = { path: "/*" };
