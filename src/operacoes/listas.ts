export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[] ) {
    // every retorna verdadeiro, caso todos os itens da lista 1 estejam presentes na lista 2
    return lista1.every((itemLista1) => lista2.includes(itemLista1));

}