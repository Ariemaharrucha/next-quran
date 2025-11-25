import { Surat, SuratDetail } from "@/types/quran";

const BASE_URL = "https://equran.id/api/v2";

export async function getAllSurat(): Promise<Surat[]> {
  const res = await fetch(`${BASE_URL}/surat`, {
    cache: "no-store"
  });
  if (!res.ok) throw new Error("Gagal ambil daftar surat");
  const response = await res.json();
  return response.data;
}

export async function getSuratDetail(nomor: number): Promise<SuratDetail> {
  const res = await fetch(`${BASE_URL}/surat/${nomor}`);
  if (!res.ok) throw new Error("Gagal ambil detail surat");
  const response = await res.json();
  return response.data;
}