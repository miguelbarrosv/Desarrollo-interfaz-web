function mostrarSubcategorias(numero) {
    let subCategorias = document.getElementsByClassName("listaSubcategorias");

        if (subCategorias[numero].style.display === "none") {
            subCategorias[numero].style.display = "inline-flex";
       } else {
            subCategorias[numero].style.display = "none";
        }
}


