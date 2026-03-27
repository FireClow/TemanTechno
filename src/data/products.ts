import { Product } from "@/types/product";

export const products: Product[] = [
  {
    title: "Smart Trash Bin",
    slug: "smart-trash-bin",
    price: 250000,
    description:
      "Tempat sampah otomatis dengan sensor pintar untuk pengalaman higienis dan modern di rumah.",
    features: [
      "Sensor gerak presisi tinggi",
      "Buka-tutup otomatis tanpa sentuh",
      "Desain minimalis anti bau",
      "Hemat daya untuk penggunaan harian",
    ],
    image: "/products/smart-trash-bin.svg",
    category: "home",
  },
  {
    title: "Massage Slipper",
    slug: "massage-slipper",
    price: 500000,
    description:
      "Sandal pijat ergonomis untuk relaksasi kaki setelah aktivitas padat, nyaman untuk rutinitas harian.",
    features: [
      "Tekstur pijat ergonomis",
      "Material premium anti-slip",
      "Ringan dan fleksibel",
      "Cocok untuk indoor dan outdoor ringan",
    ],
    image: "/products/massage-slipper.svg",
    category: "wellness",
  },
  {
    title: "Mini Washing Machine",
    slug: "mini-washing-machine",
    price: 750000,
    description:
      "Mesin cuci mini compact dengan performa efisien untuk pakaian sehari-hari dan kebutuhan ruang terbatas.",
    features: [
      "Ukuran compact untuk apartemen",
      "Program cuci cepat",
      "Konsumsi air dan listrik efisien",
      "Mudah dipindah dan disimpan",
    ],
    image: "/products/mini-washing-machine.svg",
    category: "laundry",
  },
  {
    title: "Portable Dryer",
    slug: "portable-dryer",
    price: 1700000,
    description:
      "Pengering portabel berkapasitas optimal dengan kontrol suhu stabil agar pakaian cepat kering dan tetap terjaga.",
    features: [
      "Sirkulasi udara 360 derajat",
      "Kontrol suhu aman untuk berbagai bahan",
      "Lipat-portabel untuk mobilitas tinggi",
      "Sistem pengeringan rendah kebisingan",
    ],
    image: "/products/portable-dryer.svg",
    category: "laundry",
  },
];

export const featuredProducts = products.slice(0, 3);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatIDR(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
