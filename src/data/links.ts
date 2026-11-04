export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  iconType: 'qrcode' | 'nfc-coin' | 'nfc-chip' | 'code-laptop' | 'canva-palette' | 'pix-wifi-zap' | 'nfc-plaque' | 'influencer-mega';
  featured?: boolean;
  accentColor: string;
}

export const LINKS_DATA: LinkItem[] = [
  {
    id: 'dinamico-pro',
    title: 'DINÂMICO PRO',
    description: 'Sistema profissional para criar plaquinhas NFC com QR Codes dinâmicos.',
    url: 'https://dinamicopro-pi.vercel.app',
    iconType: 'qrcode',
    featured: true,
    accentColor: '#9D36FF',
  },
  {
    id: 'metodo-5k',
    title: 'MÉTODO 5K COM NFC',
    description: 'Aprenda a ganhar dinheiro vendendo plaquinhas NFC.',
    url: 'https://pay.kiwify.com.br/aZr7HRq',
    iconType: 'nfc-coin',
    accentColor: '#F59E0B',
  },
  {
    id: 'tags-nfc',
    title: 'COMPRE SUAS TAGS NFC',
    description: 'Tags NFC para produzir suas próprias plaquinhas.',
    url: 'https://s.shopee.com.br/9zyKZbaX7N',
    iconType: 'nfc-chip',
    accentColor: '#A855F7',
  },
  {
    id: 'level-code',
    title: 'LEVEL CODE — CURSO BÁSICO',
    description: 'Aprenda a criar sistemas sem precisar programar.',
    url: 'https://levelcode-three.vercel.app',
    iconType: 'code-laptop',
    accentColor: '#38BDF8',
  },
  {
    id: 'artes-canva',
    title: 'ARTES EDITÁVEIS NO CANVA',
    description: 'Modelos profissionais de plaquinhas para personalizar.',
    url: 'https://artes2ofc.vercel.app',
    iconType: 'canva-palette',
    accentColor: '#EC4899',
  },
  {
    id: 'artes-combo',
    title: 'ARTES PIX, WI-FI E WHATSAPP',
    description: 'Personalize suas plaquinhas diretamente no Canva.',
    url: 'https://artesplaquinha1.vercel.app',
    iconType: 'pix-wifi-zap',
    accentColor: '#10B981',
  },
  {
    id: 'artes-nfc-1',
    title: 'ARTES NFC 1.0',
    description: 'Modelos de plaquinhas NFC editáveis no Canva, prontos para personalização.',
    url: 'https://artesnfc-prontas.vercel.app',
    iconType: 'nfc-plaque',
    accentColor: '#9D36FF',
  },
  {
    id: 'fabrica-influenciadores',
    title: 'FÁBRICA DE INFLUENCIADORES',
    description: 'Crie propagandas e conteúdos com influenciadores.',
    url: 'https://fabricadegrana.vercel.app',
    iconType: 'influencer-mega',
    accentColor: '#C084FC',
  },
];
