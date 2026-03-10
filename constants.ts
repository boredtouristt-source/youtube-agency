import { MonitorPlay, Lightbulb, BarChart3, Layers, Zap, Globe, Users, TrendingUp, Video, Share2, Image, Repeat } from "lucide-react";

export const NAVIGATION_LINKS = [
  { name: "O Desafio", href: "#why-us" },
  { name: "Abordagem", href: "#services" },
  { name: "Trabalho", href: "#work" },
  { name: "Equipa", href: "#team" },
];

export const CLIENT_LOGOS = [
  { name: "Ali Abdaal", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/ali%20abdaal.jpg", link: "https://www.youtube.com/@aliabdaal" },
  { name: "Chuff", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/chuff.jpg", link: "https://www.youtube.com/@Chuffsters" },
  { name: "Futcrunch", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/futcrunch.jpg", link: "https://www.youtube.com/@Futcrunch" },
  { name: "Harrison", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/harrison.jpg", link: "https://www.youtube.com/@HarrisonNevel" },
  { name: "Jessers", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/jessers.webp", link: "https://www.youtube.com/@Jesser" },
  { name: "Revolut", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/revolut%20circle.webp", link: "https://www.revolut.com" },
  { name: "Seek Discomfort", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/seek%20discomfort.webp", link: "https://www.youtube.com/@YesTheory" },
  { name: "Surfshark", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/surfshark.webp", link: "https://surfshark.com" },
  { name: "The Marketing Friends", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/the%20marketing%20friends.jpeg", link: "https://www.themarketingfriends.com/" },
  { name: "Trip", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/trip.png", link: "https://www.tryp.com" },
  { name: "Creator Golf Club", url: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/creator%20golf%20club.png", link: "https://www.creatorgolfclub.com/" },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Creator Golf Club",
    category: "Marca Própria",
    views: "Viral",
    image: "https://picsum.photos/id/338/1080/1920",
    video: "https://storage.googleapis.com/bored_tourist_media/videos_off/IMG_3114_3.mp4",
    client: "Creator Golf Club",
    stat: "Marca criada pelos maiores criadores de golfe do mundo.",
    link: "https://www.creatorgolfclub.com",
    results: [
      { value: "+50M", label: "Subscritores combinados" },
      { value: "+8M", label: "Visualizações" },
      { value: "#1", label: "Golf no YouTube" },
    ]
  },
  {
    id: 2,
    title: "Yes Theory",
    category: "Seek Discomfort",
    views: "10M Subscritores",
    image: "https://picsum.photos/id/870/1080/1920",
    video: "https://storage.googleapis.com/bored_tourist_media/videos_off/yestheory.mp4",
    client: "Yes Theory",
    stat: "Conteúdo produzido para a Seek Discomfort, marca dos Yes Theory.",
    link: "https://www.youtube.com/@YesTheory",
    results: [
      { value: "+10M", label: "Subscritores" },
      { value: "+4B", label: "Visualizações totais" },
      { value: "+300M", label: "Impressões" },
    ]
  },
  {
    id: 3,
    title: "Ali Abdaal",
    category: "Educação & Negócios",
    views: "6M Subscritores",
    image: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/ali%20abdaal.jpg",
    video: "https://storage.googleapis.com/bored_tourist_media/videos_off/ali.mp4",
    client: "Ali Abdaal",
    stat: "Empreendedor com múltiplos negócios, best-seller do NYT e o maior criador de produtividade do mundo.",
    link: "https://www.youtube.com/@aliabdaal",
    results: [
      { value: "+6M", label: "Subscritores" },
      { value: "+500M", label: "Visualizações" },
      { value: "+15M", label: "Impressões/mês" },
    ]
  },
  {
    id: 4,
    title: "Chuffsters",
    category: "Entretenimento",
    views: "1M Subscritores",
    image: "https://storage.googleapis.com/bored_tourist_media/Images_Brands/chuff.jpg",
    video: "https://storage.googleapis.com/bored_tourist_media/videos_off/chuff.mp4",
    client: "Chuffsters",
    stat: "Produção de conteúdo para os 4 canais do Chuffsters.",
    link: "https://www.youtube.com/@Chuffsters",
    results: [
      { value: "+100M", label: "Views geradas" },
      { value: "4", label: "Canais geridos" },
      { value: "+1M", label: "Subscritores" },
    ]
  }
];

export const SERVICES_DATA = [
  {
    id: "01",
    title: "Direção Criativa",
    description: "Antes de gravar um único segundo, definimos o que é que vai fazer a audiência sentir. O tema, o ritmo, a forma como a história é contada porque um vídeo bem editado com a ideia errada não chega a lado nenhum.",
    tags: ["Estrutura", "Ritmo"],
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1280&q=80"
  },
  {
    id: "02",
    title: "Identidade da Marca",
    description: "Analisamos o teu perfil a fundo para garantir que cada vídeo parece inconfundivelmente teu.",
    tags: ["Identidade", "Marca Segura"],
    icon: Repeat,
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1280&q=80"
  },
  {
    id: "03",
    title: "Edição de Retenção",
    description: "Não nos limitamos a editar.. desenhamos a jornada do espectador para o manter envolvido ao longo de todo o vídeo.",
    tags: ["Edição", "Retenção"],
    icon: Layers,
    image: "/editing.jpg"
  },
  {
    id: "04",
    title: "Amplificação Short-Form",
    description: "Transformamos uma ideia em múltiplos formatos para o máximo alcance.",
    tags: ["Reutilização", "Vertical"],
    icon: Share2,
    image: "/short.webp"
  },
  {
    id: "05",
    title: "Estratégia de Thumbnails",
    description: "Packaging apelativo ao clique que se destaca no ruído e apoia a estratégia de distribuição mais ampla.",
    tags: ["CTR", "Packaging"],
    icon: Image,
    image: "/thomas.webp"
  },
  {
    id: "06",
    title: "Consultoria Estratégica",
    description: "Orientamos sobre consistência de publicação, formatos e decisões assentes em dados de plataforma para impulsionar o crescimento.",
    tags: ["Crescimento", "Consultoria"],
    icon: Users,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1280&q=80"
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Estratégia",
    description: "Ideação & Roadmap"
  },
  {
    number: "02",
    title: "Execução",
    description: "Produção & Direção"
  },
  {
    number: "03",
    title: "Amplificação",
    description: "Distribuição & Shorts"
  },
  {
    number: "04",
    title: "Crescimento",
    description: "Expandir & Optimizar"
  }
];