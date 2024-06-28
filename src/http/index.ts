import type ICategoria from "@/interfaces/ICategoria"; //Realizando a tipagem das variáveis

export async function obterCategorias() {
  const resposta = await fetch(
    "https://gist.githubusercontent.com/EduardoPSRodrigues/2aa5ca9c7bf5715d5c97e0cd8516607b/raw/335a7441927619bd37535badc81313c9a7a4a05c/categorias.json"
  );

  const categorias: ICategoria[] = await resposta.json();

  return categorias;
}
