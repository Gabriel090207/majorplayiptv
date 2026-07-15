import Havok from "../assets/servidores/havok.png";
import Cineflix from "../assets/servidores/cineflix.png";
import Odin from "../assets/servidores/odin.png";
import RoyalPlay from "../assets/servidores/royal-play.png";
import Invictos from "../assets/servidores/invictos.png";
import TopzTv from "../assets/servidores/topz-tv.png";
import BrPatch from "../assets/servidores/br-patch.png";
import Primelux from "../assets/servidores/primelux.png";
import P2Live from "../assets/servidores/p2live.png";
import Netplay from "../assets/servidores/netplay.png";
import Fsplay from "../assets/servidores/fsplay.png";
import CineWorld from "../assets/servidores/cine-world.png";


import Unitv from "../assets/servidores/unitv.png";
import Warez from "../assets/servidores/warez.png";
import Uniplay from "../assets/servidores/uniplay.png";
import ClubTv from "../assets/servidores/club-tv.png";
import PowerPlay from "../assets/servidores/power-play.png";
import TheBest from "../assets/servidores/the-best.png";
import FiveTv from "../assets/servidores/five-tv.png";
import BrPro from "../assets/servidores/br-pro.png";
import P2cine from "../assets/servidores/p2cine.png";
import NewOne from "../assets/servidores/new-one.png";
import Blade from "../assets/servidores/blade.png";
import Horizon from "../assets/servidores/horizon.png";
import Central from "../assets/servidores/central.png";
import P2braz from "../assets/servidores/p2braz.png";
import Tvs from "../assets/servidores/tvs.png";
import BeesTv from "../assets/servidores/bees-tv.png";


import IboRevenda from "../assets/servidores/ibo-revenda.png";
import Zeus from "../assets/servidores/zeus.png";
import Live21 from "../assets/servidores/live-21.png";
import Blaze from "../assets/servidores/blaze.png";
import P2mais from "../assets/servidores/p2mais.png";
import SuperPlay from "../assets/servidores/super-play.png";
import AlphaServer from "../assets/servidores/alpha-server.png";
import UltraPlay from "../assets/servidores/ultra-play.png";
import Uhd from "../assets/servidores/uhd.png";
import BlessedPlayer from "../assets/servidores/blessed-player.png";
import Vip from "../assets/servidores/vip.png";
import Matrix from "../assets/servidores/matrix.png";


export type ServidorCategoria =
  | "Mensalista"
  | "Pré-pago"
  | "Pós-pago";

export interface Servidor {
  id: number;
  title: string;
  image: string;
  category: ServidorCategoria;
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
    image: Havok,
    category: "Mensalista",
    destaque: true,
    description:
      "Servidor mensalista com boa estabilidade, catálogo variado e navegação fluida em diferentes dispositivos.",
    channels: "Canais variados",
    movies: "Filmes atualizados",
    series: "Séries completas",
    quality: "HD, Full HD e 4K",
  },
  {
    id: 2,
    title: "CINEFLIX",
    image: Cineflix,
    category: "Mensalista",
    destaque: true,
    description:
      "Opção mensalista voltada para quem busca variedade de filmes, séries e canais em um único serviço.",
    channels: "Canais variados",
    movies: "Amplo catálogo",
    series: "Séries atualizadas",
    quality: "HD, Full HD e 4K",
  },
  {
    id: 3,
    title: "ODIN",
    image: Odin,
    category: "Mensalista",
    destaque: true,
    description:
      "Servidor com desempenho consistente, acesso rápido ao conteúdo e compatibilidade com diversos aparelhos.",
    channels: "Canais ao vivo",
    movies: "Filmes variados",
    series: "Séries completas",
    quality: "HD e Full HD",
  },
  {
    id: 4,
    title: "ROYAL PLAY",
    image: RoyalPlay,
    category: "Mensalista",
    destaque: true,
    description:
      "Alternativa mensalista com catálogo diversificado e experiência simples para clientes e revendedores.",
    channels: "Canais variados",
    movies: "Filmes atualizados",
    series: "Séries populares",
    quality: "HD, Full HD e 4K",
  },
  {
    id: 5,
    title: "INVICTOS",
    image: Invictos,
    category: "Mensalista",
    destaque: false,
    description:
      "Servidor mensalista com interface prática, boa compatibilidade e conteúdo organizado para o uso diário.",
    channels: "Canais ao vivo",
    movies: "Filmes variados",
    series: "Séries atualizadas",
    quality: "HD e Full HD",
  },
  {
    id: 6,
    title: "TOPZ TV",
    image: TopzTv,
    category: "Mensalista",
    destaque: false,
    description:
      "Solução com conteúdo diversificado e acesso simplificado para diferentes modelos de televisores e dispositivos.",
    channels: "Canais variados",
    movies: "Catálogo atualizado",
    series: "Séries completas",
    quality: "HD e Full HD",
  },
  {
    id: 7,
    title: "BR PATCH",
    image: BrPatch,
    category: "Mensalista",
    destaque: false,
    description:
      "Servidor mensalista com boa adaptação a diferentes aplicativos e uma seleção ampla de entretenimento.",
    channels: "Canais ao vivo",
    movies: "Filmes variados",
    series: "Séries populares",
    quality: "HD e Full HD",
  },
  {
    id: 8,
    title: "PRIMELUX",
    image: Primelux,
    category: "Mensalista",
    destaque: false,
    description:
      "Opção voltada para quem valoriza qualidade de imagem, organização de conteúdo e uma experiência mais premium.",
    channels: "Canais variados",
    movies: "Amplo catálogo",
    series: "Séries atualizadas",
    quality: "Full HD e 4K",
  },
  {
    id: 9,
    title: "P2LIVE",
    image: P2Live,
    category: "Mensalista",
    destaque: false,
    description:
      "Servidor com foco em praticidade, acesso rápido e boa disponibilidade de canais e conteúdos sob demanda.",
    channels: "Canais ao vivo",
    movies: "Filmes atualizados",
    series: "Séries variadas",
    quality: "HD e Full HD",
  },
  {
    id: 10,
    title: "NETPLAY",
    image: Netplay,
    category: "Mensalista",
    destaque: false,
    description:
      "Alternativa mensalista equilibrada para clientes que procuram conteúdo variado e utilização simples.",
    channels: "Canais variados",
    movies: "Filmes populares",
    series: "Séries completas",
    quality: "HD e Full HD",
  },
  {
    id: 11,
    title: "FSPLAY",
    image: Fsplay,
    category: "Mensalista",
    destaque: false,
    description:
      "Servidor com catálogo organizado, compatibilidade com diferentes dispositivos e navegação objetiva.",
    channels: "Canais ao vivo",
    movies: "Catálogo variado",
    series: "Séries atualizadas",
    quality: "HD e Full HD",
  },
  {
    id: 12,
    title: "CINE WORLD",
    image: CineWorld,
    category: "Mensalista",
    destaque: false,
    description:
      "Opção mensalista com foco em entretenimento, reunindo canais, filmes e séries em uma única plataforma.",
    channels: "Canais variados",
    movies: "Filmes atualizados",
    series: "Séries completas",
    quality: "HD, Full HD e 4K",
  },

  {
      id: 13,
      title: "UNITV",
      image: Unitv,
      category: "Pré-pago",
      destaque: true,
      description: "Servidor pré-pago com acesso rápido e ótima experiência para novos clientes.",
      channels: "Canais variados",
      movies: "Filmes atualizados",
      series: "Séries completas",
      quality: "HD, Full HD e 4K",
  },
  {
      id: 14,
      title: "WAREZ",
      image: Warez,
      category: "Pré-pago",
      destaque: false,
      description: "Boa opção para quem procura variedade de conteúdo com contratação pré-paga.",
      channels: "Canais variados",
      movies: "Catálogo atualizado",
      series: "Séries variadas",
      quality: "HD e Full HD",
  },
  {
      id: 15,
      title: "UNIPLAY",
      image: Uniplay,
      category: "Pré-pago",
      destaque: false,
      description: "Servidor estável com conteúdo diversificado para diferentes perfis de usuários.",
      channels: "Canais ao vivo",
      movies: "Filmes variados",
      series: "Séries completas",
      quality: "HD e Full HD",
  },
  {
      id: 16,
      title: "CLUB TV",
      image: ClubTv,
      category: "Pré-pago",
      destaque: false,
      description: "Catálogo organizado e compatibilidade com diversos dispositivos.",
      channels: "Canais variados",
      movies: "Filmes populares",
      series: "Séries atualizadas",
      quality: "HD e Full HD",
  },
  {
      id: 17,
      title: "POWER PLAY",
      image: PowerPlay,
      category: "Pré-pago",
      destaque: false,
      description: "Servidor com boa estabilidade e acesso rápido aos conteúdos disponíveis.",
      channels: "Canais variados",
      movies: "Filmes atualizados",
      series: "Séries variadas",
      quality: "HD e Full HD",
  },
  {
      id: 18,
      title: "THE BEST",
      image: TheBest,
      category: "Pré-pago",
      destaque: false,
      description: "Opção pré-paga com navegação simples e conteúdo constantemente atualizado.",
      channels: "Canais ao vivo",
      movies: "Catálogo variado",
      series: "Séries completas",
      quality: "HD e Full HD",
  },
  {
      id: 19,
      title: "FIVE TV",
      image: FiveTv,
      category: "Pré-pago",
      destaque: false,
      description: "Servidor desenvolvido para oferecer boa experiência em diferentes aparelhos.",
      channels: "Canais variados",
      movies: "Filmes variados",
      series: "Séries atualizadas",
      quality: "HD e Full HD",
  },
  {
      id: 20,
      title: "BR PRO",
      image: BrPro,
      category: "Pré-pago",
      destaque: false,
      description: "Conteúdo diversificado para quem procura uma solução prática e eficiente.",
      channels: "Canais ao vivo",
      movies: "Filmes populares",
      series: "Séries completas",
      quality: "HD e Full HD",
  },
  {
      id: 21,
      title: "P2CINE",
      image: P2cine,
      category: "Pré-pago",
      destaque: false,
      description: "Servidor com catálogo atualizado e boa variedade de entretenimento.",
      channels: "Canais variados",
      movies: "Catálogo atualizado",
      series: "Séries variadas",
      quality: "HD e Full HD",
  },
  {
      id: 22,
      title: "NEW ONE",
      image: NewOne,
      category: "Pré-pago",
      destaque: false,
      description: "Alternativa pré-paga para quem busca praticidade e boa compatibilidade.",
      channels: "Canais variados",
      movies: "Filmes variados",
      series: "Séries completas",
      quality: "HD e Full HD",
  },
  {
      id: 23,
      title: "BLADE",
      image: Blade,
      category: "Pré-pago",
      destaque: false,
      description: "Servidor com conteúdo organizado e excelente desempenho em diferentes dispositivos.",
      channels: "Canais ao vivo",
      movies: "Filmes atualizados",
      series: "Séries completas",
      quality: "HD e Full HD",
  },
  {
      id: 24,
      title: "HORIZON",
      image: Horizon,
      category: "Pré-pago",
      destaque: false,
      description: "Boa estabilidade e experiência consistente para uso diário.",
      channels: "Canais variados",
      movies: "Filmes variados",
      series: "Séries atualizadas",
      quality: "HD e Full HD",
  },
  {
      id: 25,
      title: "CENTRAL",
      image: Central,
      category: "Pré-pago",
      destaque: false,
      description: "Servidor pré-pago com acesso rápido e conteúdo constantemente atualizado.",
      channels: "Canais variados",
      movies: "Catálogo atualizado",
      series: "Séries completas",
      quality: "HD e Full HD",
  },
  {
      id: 26,
      title: "P2BRAZ",
      image: P2braz,
      category: "Pré-pago",
      destaque: false,
      description: "Boa opção para quem procura estabilidade e variedade de conteúdo.",
      channels: "Canais ao vivo",
      movies: "Filmes variados",
      series: "Séries populares",
      quality: "HD e Full HD",
  },
  {
      id: 27,
      title: "TVS",
      image: Tvs,
      category: "Pré-pago",
      destaque: false,
      description: "Servidor prático com boa compatibilidade e navegação simples.",
      channels: "Canais variados",
      movies: "Filmes atualizados",
      series: "Séries completas",
      quality: "HD e Full HD",
  },
  {
      id: 28,
      title: "BEES TV",
      image: BeesTv,
      category: "Pré-pago",
      destaque: false,
      description: "Catálogo diversificado para quem busca uma opção pré-paga confiável.",
      channels: "Canais variados",
      movies: "Filmes populares",
      series: "Séries variadas",
      quality: "HD e Full HD",
  },

  {
      id: 29,
      title: "IBO REVENDA",
      image: IboRevenda,
      category: "Pós-pago",
      destaque: false,
      description: "Servidor pós-pago com boa estabilidade e amplo catálogo de conteúdos.",
      channels: "Canais variados",
      movies: "Filmes atualizados",
      series: "Séries completas",
      quality: "HD e Full HD",
  },
  {
      id: 30,
      title: "ZEUS",
      image: Zeus,
      category: "Pós-pago",
      destaque: true,
      description: "Servidor premium com excelente desempenho e ótima experiência de navegação.",
      channels: "Canais variados",
      movies: "Catálogo atualizado",
      series: "Séries completas",
      quality: "HD, Full HD e 4K",
  },
  {
      id: 31,
      title: "LIVE 21",
      image: Live21,
      category: "Pós-pago",
      destaque: false,
      description: "Boa opção para clientes que procuram estabilidade e conteúdo diversificado.",
      channels: "Canais ao vivo",
      movies: "Filmes variados",
      series: "Séries atualizadas",
      quality: "HD e Full HD",
  },
  {
      id: 32,
      title: "BLAZE",
      image: Blaze,
      category: "Pós-pago",
      destaque: false,
      description: "Servidor pós-pago com catálogo atualizado e ótima compatibilidade.",
      channels: "Canais variados",
      movies: "Filmes populares",
      series: "Séries completas",
      quality: "HD e Full HD",
  },
  {
      id: 33,
      title: "P2MAIS",
      image: P2mais,
      category: "Pós-pago",
      destaque: false,
      description: "Conteúdo organizado e desempenho consistente em diferentes dispositivos.",
      channels: "Canais variados",
      movies: "Filmes atualizados",
      series: "Séries variadas",
      quality: "HD e Full HD",
  },
  {
      id: 34,
      title: "SUPER PLAY",
      image: SuperPlay,
      category: "Pós-pago",
      destaque: false,
      description: "Servidor com ampla variedade de entretenimento e navegação rápida.",
      channels: "Canais ao vivo",
      movies: "Catálogo atualizado",
      series: "Séries completas",
      quality: "HD e Full HD",
  },
  {
      id: 35,
      title: "ALPHA SERVER",
      image: AlphaServer,
      category: "Pós-pago",
      destaque: false,
      description: "Opção pós-paga com foco em estabilidade e boa experiência para o usuário.",
      channels: "Canais variados",
      movies: "Filmes variados",
      series: "Séries completas",
      quality: "HD e Full HD",
  },
  {
      id: 36,
      title: "ULTRA PLAY",
      image: UltraPlay,
      category: "Pós-pago",
      destaque: false,
      description: "Servidor desenvolvido para oferecer qualidade e desempenho no dia a dia.",
      channels: "Canais variados",
      movies: "Filmes atualizados",
      series: "Séries populares",
      quality: "HD e Full HD",
  },
  {
      id: 37,
      title: "UHD",
      image: Uhd,
      category: "Pós-pago",
      destaque: false,
      description: "Boa qualidade de imagem e catálogo diversificado para diferentes perfis.",
      channels: "Canais ao vivo",
      movies: "Filmes variados",
      series: "Séries atualizadas",
      quality: "Full HD e 4K",
  },
  {
      id: 38,
      title: "BLESSED PLAYER",
      image: BlessedPlayer,
      category: "Pós-pago",
      destaque: false,
      description: "Servidor com boa estabilidade e ampla seleção de conteúdos.",
      channels: "Canais variados",
      movies: "Catálogo atualizado",
      series: "Séries completas",
      quality: "HD e Full HD",
  },
  {
      id: 39,
      title: "VIP",
      image: Vip,
      category: "Pós-pago",
      destaque: true,
      description: "Servidor premium voltado para quem busca desempenho e qualidade de imagem.",
      channels: "Canais variados",
      movies: "Filmes atualizados",
      series: "Séries completas",
      quality: "HD, Full HD e 4K",
  },
  {
      id: 40,
      title: "MATRIX",
      image: Matrix,
      category: "Pós-pago",
      destaque: true,
      description: "Servidor premium com excelente desempenho, estabilidade e amplo catálogo de entretenimento.",
      channels: "Canais variados",
      movies: "Catálogo atualizado",
      series: "Séries completas",
      quality: "HD, Full HD e 4K",
  },
];


