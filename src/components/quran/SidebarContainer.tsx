import { getAllSurat } from "@/lib/api";
import SidebarSurat from "./SidebarSurat";

export default async function SidebarContainer() {
  const allSurat = await getAllSurat();
  return <SidebarSurat dataSurat={allSurat} />;
}