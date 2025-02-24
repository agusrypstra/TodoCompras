import { logos, images , banners} from "../../assets/categoriesIcons/assets";

export const categorias = [{
  id:1,
  nombre:'Locales',
  imagen: banners.locales

},
  {id:2,
  nombre:'Emprendimientos',
  imagen: banners.emprendimientos
}
,{
  id:3,
  nombre:'Profesionales',
  imagen: banners.profesionales
}
]
export const subcategorias = [
  { id: 1,categoriaId: 1, nombre: 'Comida', imagen: logos.comidas },
  { id: 2,categoriaId: 1, nombre: 'Pollería', imagen: logos.polleria },
  { id: 3,categoriaId: 1, nombre: 'Carnicería', imagen: logos.carniceria },
  { id: 4,categoriaId: 1, nombre: 'Verdulería', imagen: logos.verduleria },
  { id: 5,categoriaId: 1, nombre: 'Pescadería', imagen: logos.pescaderia },
  { id: 6,categoriaId: 1, nombre: 'Panadería', imagen: logos.panaderia },
];

export const usuarios = [
  // Subcategorías para Comida (id: 1)
  { id: 1, subCategoriaId: 1, nombre: 'Burger House', imagen: logos.comidas },
  { id: 2, subCategoriaId: 1, nombre: 'Wok Express', imagen: logos.comidas },
  { id: 3, subCategoriaId: 1, nombre: 'Taco Loco', imagen: logos.comidas },

  // Subcategorías para Pollería (id: 2)
  { id: 4, subCategoriaId: 2, nombre: 'Pollo Feliz', imagen: logos.polleria },
  { id: 5, subCategoriaId: 2, nombre: 'Kentucky Fried Chicken', imagen: logos.polleria },
  { id: 6, subCategoriaId: 2, nombre: 'Pollo Real', imagen: logos.polleria },

  // Subcategorías para Carnicería (id: 3)
  { id: 7, subCategoriaId: 3, nombre: 'Carnes Selectas', imagen: logos.carniceria },
  { id: 8, subCategoriaId: 3, nombre: 'La Parrilla', imagen: logos.carniceria },
  { id: 9, subCategoriaId: 3, nombre: 'Embutidos Don Juan', imagen: logos.carniceria },

  // Subcategorías para Verdulería (id: 4)
  { id: 10, subCategoriaId: 4, nombre: 'Frutas Frescas', imagen: logos.verduleria },
  { id: 11, subCategoriaId: 4, nombre: 'Verduras del Campo', imagen: logos.verduleria },
  { id: 12, subCategoriaId: 4, nombre: 'Hierbas Aromáticas', imagen: logos.verduleria },

  // Subcategorías para Pescadería (id: 5)
  { id: 13, subCategoriaId: 5, nombre: 'Pescados del Mar', imagen: logos.pescaderia },
  { id: 14, subCategoriaId: 5, nombre: 'Mariscos Frescos', imagen: logos.pescaderia },
  { id: 15, subCategoriaId: 5, nombre: 'Pescados Congelados', imagen: logos.pescaderia },

  // Subcategorías para Panadería (id: 6)
  { id: 16, subCategoriaId: 6, nombre: 'Panadería Integral', imagen: logos.panaderia },
  { id: 17, subCategoriaId: 6, nombre: 'Dulces y Panes', imagen: logos.panaderia },
  { id: 18, subCategoriaId: 6, nombre: 'Pastelería La Especial', imagen: logos.panaderia },
];