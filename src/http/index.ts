import type ICategoria from "@/interfaces/ICategoria"; //Realizando a tipagem das variáveis
import type IReceita from "@/interfaces/IReceita";

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function obterCategorias() {
  return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/EduardoPSRodrigues/2aa5ca9c7bf5715d5c97e0cd8516607b/raw/335a7441927619bd37535badc81313c9a7a4a05c/categorias.json');
}

export async function obterReceitas() {
  return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/EduardoPSRodrigues/8a7ca7a7da988c4d64007be4c5097e93/raw/83e99ab3c3b77f9bce5c08919870c5a07334805e/receitas.json');
}

