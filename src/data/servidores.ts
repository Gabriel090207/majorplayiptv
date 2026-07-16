export type ServidorCategoria =
  | "Mensalista"
  | "Pré-pago"
  | "Pós-pago";

export interface Servidor {
  id: number;
  title: string;
  category: ServidorCategoria;
}

export const servidores: Servidor[] = [
  // ======================
  // Mensalistas
  // ======================

  { id: 1, title: "HAVOK", category: "Mensalista" },
  { id: 2, title: "CINEFLIX", category: "Mensalista" },
  { id: 3, title: "ODIN", category: "Mensalista" },
  { id: 4, title: "ROYAL PLAY", category: "Mensalista" },
  { id: 5, title: "INVICTOS", category: "Mensalista" },
  { id: 6, title: "TOPZ TV", category: "Mensalista" },
  { id: 7, title: "BR PATCH", category: "Mensalista" },
  { id: 8, title: "PRIMELUX", category: "Mensalista" },
  { id: 9, title: "P2LIVE", category: "Mensalista" },
  { id: 10, title: "NETPLAY", category: "Mensalista" },
  { id: 11, title: "FSPLAY", category: "Mensalista" },
  { id: 12, title: "CINE WORLD", category: "Mensalista" },

  // ======================
  // Pré-pagos
  // ======================

  { id: 13, title: "UNITV", category: "Pré-pago" },
  { id: 14, title: "WAREZ", category: "Pré-pago" },
  { id: 15, title: "UNIPLAY", category: "Pré-pago" },
  { id: 16, title: "CLUB TV", category: "Pré-pago" },
  { id: 17, title: "POWER PLAY", category: "Pré-pago" },
  { id: 18, title: "THE BEST", category: "Pré-pago" },
  { id: 19, title: "FIVE TV", category: "Pré-pago" },
  { id: 20, title: "BR PRO", category: "Pré-pago" },
  { id: 21, title: "P2CINE", category: "Pré-pago" },
  { id: 22, title: "NEW ONE", category: "Pré-pago" },
  { id: 23, title: "BLADE", category: "Pré-pago" },
  { id: 24, title: "HORIZON", category: "Pré-pago" },
  { id: 25, title: "CENTRAL", category: "Pré-pago" },
  { id: 26, title: "P2BRAZ", category: "Pré-pago" },
  { id: 27, title: "TVS", category: "Pré-pago" },
  { id: 28, title: "BEES TV", category: "Pré-pago" },

  // ======================
  // Pós-pagos
  // ======================

  { id: 29, title: "IBO REVENDA", category: "Pós-pago" },
  { id: 30, title: "ZEUS", category: "Pós-pago" },
  { id: 31, title: "LIVE 21", category: "Pós-pago" },
  { id: 32, title: "BLAZE", category: "Pós-pago" },
  { id: 33, title: "P2MAIS", category: "Pós-pago" },
  { id: 34, title: "SUPER PLAY", category: "Pós-pago" },
  { id: 35, title: "ALPHA SERVER", category: "Pós-pago" },
  { id: 36, title: "ULTRA PLAY", category: "Pós-pago" },
  { id: 37, title: "UHD", category: "Pós-pago" },
  { id: 38, title: "BLESSED PLAYER", category: "Pós-pago" },
  { id: 39, title: "VIP", category: "Pós-pago" },
  { id: 40, title: "MATRIX", category: "Pós-pago" },
];

