export interface LinkItem {
  id: string;
  number: string;
  title: string;
  description: string;
  url: string;
  category: string;
  tag: string;
  iconType: 'qrcode' | 'nfc-coin' | 'nfc-chip' | 'code-laptop' | 'canva-palette' | 'pix-wifi-zap' | 'nfc-plaque' | 'influencer-mega';
  featured?: boolean;
  badge?: string;
  accentColor: string;
}

export const LINKS_DATA: LinkItem[] = [
  {
    id: '01',
    number: '01',
    title: 'DINÂMICO PRO',
    description: 'Gere plaquinhas com QR Codes dinâmicos em lote.',
    url: 'https://dinamicopro-pi.vercel.app',
    category: 'Software & QR Code',
    tag: 'Automação em Lote',
    iconType: 'qrcode',
    featured: true,
    badge: 'DESTAQUE',
    accentColor: '#9D36FF',
  },
  {
    id: '02',
    number: '02',
    title: 'MÉTODO 5K COM NFC',
    description: 'Aprenda a ganhar dinheiro vendendo plaquinhas NFC.',
    url: 'https://pay.kiwify.com.br/aZr7HRq',
    category: 'Mentoria & Vendas',
    tag: 'Método Validado 5K',
    iconType: 'nfc-coin',
    accentColor: '#F59E0B',
  },
  {
    id: '03',
    number: '03',
    title: 'COMPRE SUAS TAGS NFC',
    description: 'Tags NFC para produzir suas próprias plaquinhas.',
    url: 'https://s.shopee.com.br/9zyKZbaX7N',
    category: 'Hardware & Suprimentos',
    tag: 'Pronta Entrega',
    iconType: 'nfc-chip',
    accentColor: '#A855F7',
  },
  {
    id: '04',
    number: '04',
    title: 'LEVEL CODE — CURSO BÁSICO',
    description: 'Aprenda a criar sistemas sem precisar programar.',
    url: 'https://levelcode-three.vercel.app',
    category: 'Desenvolvimento No-Code',
    tag: 'Do Zero ao Sistema',
    iconType: 'code-laptop',
    accentColor: '#38BDF8',
  },
  {
    id: '05',
    number: '05',
    title: 'ARTES EDITÁVEIS NO CANVA',
    description: 'Modelos profissionais de plaquinhas para personalizar.',
    url: 'https://artes2ofc.vercel.app',
    category: 'Design & Templates',
    tag: 'Canva 100% Editável',
    iconType: 'canva-palette',
    accentColor: '#EC4899',
  },
  {
    id: '06',
    number: '06',
    title: 'ARTES PIX, WI-FI E WHATSAPP',
    description: 'Personalize suas plaquinhas diretamente no Canva.',
    url: 'https://artesplaquinha1.vercel.app',
    category: 'Combos Comerciais',
    tag: 'Pix + Wi-Fi + Zap',
    iconType: 'pix-wifi-zap',
    accentColor: '#10B981',
  },
  {
    id: '07',
    number: '07',
    title: 'ARTES NFC 1.0',
    description: 'Modelos editáveis e prontos para personalização.',
    url: 'https://artesnfc-prontas.vercel.app',
    category: 'Templates NFC Prontos',
    tag: 'Versão 1.0 Oficial',
    iconType: 'nfc-plaque',
    accentColor: '#9D36FF',
  },
  {
    id: '08',
    number: '08',
    title: 'FÁBRICA DE INFLUENCIADORES',
    description: 'Crie propagandas e conteúdos com influenciadores.',
    url: 'https://fabricadegrana.vercel.app',
    category: 'Marketing & Conteúdo',
    tag: 'Escala & Audiência',
    iconType: 'influencer-mega',
    accentColor: '#C084FC',
  },
];
