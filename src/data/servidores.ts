export interface Servidor {
  id: number;
  title: string;
  image: string;
  destaque: boolean;
  description: string;
  channels: string;
  movies: string;
  series: string;
  quality: string;
 
}

export const servidores: Servidor[] = [
  {
    id: 1,
    title: "HAVOK",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    destaque: true,
    description: "Servidor de alta performance e excelente estabilidade.",
    channels: "+2.500 canais",
    movies: "+15.000 filmes",
    series: "+5.000 séries",
    quality: "HD, Full HD e 4K",
    
  },
  {
    id: 2,
    title: "CINEFLIX",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
    destaque: true,
    description: "Catálogo completo para clientes que buscam variedade.",
    channels: "+2.000 canais",
    movies: "+18.000 filmes",
    series: "+6.000 séries",
    quality: "HD, Full HD e 4K",
    
  },
  {
    id: 3,
    title: "ODIN",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80",
    destaque: true,
    description: "Velocidade e estabilidade para uma experiência premium.",
    channels: "+2.800 canais",
    movies: "+14.000 filmes",
    series: "+4.500 séries",
    quality: "HD e Full HD",
   
  },
  {
    id: 4,
    title: "ROYAL PLAY",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    destaque: true,
    description: "Ótima opção para revendedores que buscam alto desempenho.",
    channels: "+3.000 canais",
    movies: "+20.000 filmes",
    series: "+7.000 séries",
    quality: "HD, Full HD e 4K",
  
  },
  {
    id: 5,
    title: "INVICTOS",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    destaque: false,
    description: "Servidor rápido, simples e com boa estabilidade.",
    channels: "+1.800 canais",
    movies: "+12.000 filmes",
    series: "+4.000 séries",
    quality: "HD e Full HD",
   
  },
  {
    id: 6,
    title: "TOPZ TV",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    destaque: false,
    description: "Conteúdo variado com carregamento rápido e eficiente.",
    channels: "+2.100 canais",
    movies: "+13.000 filmes",
    series: "+4.200 séries",
    quality: "HD e Full HD",
   
  },
  {
    id: 7,
    title: "BR PATCH",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    destaque: false,
    description: "Boa compatibilidade com diversos dispositivos.",
    channels: "+1.900 canais",
    movies: "+11.000 filmes",
    series: "+3.800 séries",
    quality: "HD e Full HD",
   
  },
  {
    id: 8,
    title: "PRIMELUX",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    destaque: false,
    description: "Servidor premium com excelente qualidade de imagem.",
    channels: "+2.600 canais",
    movies: "+17.000 filmes",
    series: "+5.500 séries",
    quality: "Full HD e 4K",
   
  },
];