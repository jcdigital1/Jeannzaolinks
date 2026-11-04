export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  featured?: boolean;
  accentColor: string;
}

export const LINKS_DATA: LinkItem[] = [
  {
    id: 'dinamico-pro',
    title: 'DINÂMICO PRO',
    description: 'Sistema profissional para criar plaquinhas NFC com QR Codes dinâmicos.',
    url: 'https://dinamicopro-pi.vercel.app',
    imageUrl: 'https://i.postimg.cc/SxdPXtN5/IMG-8023.png',
    featured: true,
    accentColor: '#9D36FF',
  },
  {
    id: 'metodo-5k',
    title: 'MÉTODO 5K COM NFC',
    description: 'Aprenda a ganhar dinheiro vendendo plaquinhas NFC.',
    url: 'https://pay.kiwify.com.br/aZr7HRq',
    imageUrl: 'https://i.postimg.cc/0yn46H2L/IMG-8024.webp',
    accentColor: '#F59E0B',
  },
  {
    id: 'tags-nfc',
    title: 'COMPRE SUAS TAGS NFC',
    description: 'Tags NFC para produzir suas próprias plaquinhas.',
    url: 'https://s.shopee.com.br/9zyKZbaX7N',
    imageUrl: 'https://i.postimg.cc/cLhzK5LN/IMG-8025.png',
    accentColor: '#A855F7',
  },
  {
    id: 'level-code',
    title: 'LEVEL CODE — CURSO BÁSICO',
    description: 'Aprenda a criar sistemas sem precisar programar.',
    url: 'https://levelcode-three.vercel.app',
    imageUrl: 'https://i.postimg.cc/bwg5GFwc/IMG-8026.webp',
    accentColor: '#38BDF8',
  },
  {
    id: 'artes-canva',
    title: 'ARTES EDITÁVEIS NO CANVA',
    description: 'Modelos profissionais de plaquinhas para personalizar.',
    url: 'https://artes2ofc.vercel.app',
    imageUrl: 'https://i.postimg.cc/NjDnyPjt/IMG-8022.png',
    accentColor: '#EC4899',
  },
  {
    id: 'artes-combo',
    title: 'ARTES PIX, WI-FI E WHATSAPP',
    description: 'Personalize suas plaquinhas diretamente no Canva.',
    url: 'https://artesplaquinha1.vercel.app',
    imageUrl: 'https://i.postimg.cc/0Ncqsywx/F7B92978-67A4-4986-BB8B-E31414E654B0.png',
    accentColor: '#10B981',
  },
  {
    id: 'artes-nfc-1',
    title: 'ARTES NFC 1.0',
    description: 'Modelos de plaquinhas NFC editáveis no Canva, prontos para personalização.',
    url: 'https://artesnfc-prontas.vercel.app',
    imageUrl: 'https://i.postimg.cc/5twSYX32/179A124B-68B4-4543-BECC-87421FDC9FB6.png',
    accentColor: '#9D36FF',
  },
  {
    id: 'fabrica-influenciadores',
    title: 'FÁBRICA DE INFLUENCIADORES',
    description: 'Crie propagandas e conteúdos com influenciadores.',
    url: 'https://fabricadegrana.vercel.app',
    imageUrl: 'https://i.postimg.cc/5NhzBxjf/3616B004-6CB0-4374-BA23-4A9F7AD6488F.png',
    accentColor: '#C084FC',
  },
];
