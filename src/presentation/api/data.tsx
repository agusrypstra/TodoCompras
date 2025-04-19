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

export const solicitudes = [
  {
    usuarioId: 1,
    categoriaId: 5,
    nombre: "Panadería La Dulce",
    provincia: "Buenos Aires",
    localidad: "Lanús",
    direccion: "Av. Siempreviva 742",
    telefonoLlamadas: "+5491122334455",
    telefonoWhatsapp: "+5491122334455",
    descripcion: "Panadería artesanal con productos frescos.",
    diasAtencionDesde: "Lunes",
    diasAtencionHasta: "Sábado",
    horarioAtencionDesde: "08:00",
    horarioAtencionHasta: "20:00",
    es24Horas: false,
    ubicacionGoogleMaps: "https://goo.gl/maps/123abc",
    linkInstagram: "@ladulcepanaderia",
    linkFacebook: "facebook.com/ladulce",
    linkPaginaWeb: "http://ladulce.com",
    fotoPerfil: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b",
    fotoBanner: "banner1.jpg"
  },
  {
    usuarioId: 2,
    categoriaId: 3,
    nombre: "Tienda Natural Vida Sana",
    provincia: "Córdoba",
    localidad: "Villa Carlos Paz",
    direccion: "Calle Verde 123",
    telefonoLlamadas: "+5491133445566",
    telefonoWhatsapp: "+5491133445566",
    descripcion: "Productos naturales y saludables.",
    diasAtencionDesde: "Martes",
    diasAtencionHasta: "Domingo",
    horarioAtencionDesde: "09:00",
    horarioAtencionHasta: "18:00",
    es24Horas: false,
    ubicacionGoogleMaps: "https://goo.gl/maps/vida123",
    linkInstagram: "@vidasanatienda",
    linkFacebook: "facebook.com/vidasanatienda",
    linkPaginaWeb: "http://vidasanatienda.com",
    fotoPerfil: "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
    fotoBanner: "banner2.jpg"
  },
  {
    usuarioId: 3,
    categoriaId: 7,
    nombre: "Ferretería El Tornillo",
    provincia: "Mendoza",
    localidad: "Godoy Cruz",
    direccion: "Av. de los Andes 456",
    telefonoLlamadas: "+5491166778899",
    telefonoWhatsapp: "+5491166778899",
    descripcion: "Todo para el hogar y la construcción.",
    diasAtencionDesde: "Lunes",
    diasAtencionHasta: "Viernes",
    horarioAtencionDesde: "07:30",
    horarioAtencionHasta: "19:00",
    es24Horas: false,
    ubicacionGoogleMaps: "https://goo.gl/maps/tornillo456",
    linkInstagram: "@eltornilloferreteria",
    linkFacebook: "facebook.com/eltornilloferreteria",
    linkPaginaWeb: "http://eltornillo.com",
    fotoPerfil: "https://images.unsplash.com/photo-1603787081215-d286f71cc4b2",
    fotoBanner: "banner3.jpg"
  },
  {
    usuarioId: 4,
    categoriaId: 9,
    nombre: "Taller Mecánico Rueda Libre",
    provincia: "Santa Fe",
    localidad: "Rosario",
    direccion: "Ruta 34 km 5",
    telefonoLlamadas: "+5491177889900",
    telefonoWhatsapp: "+5491177889900",
    descripcion: "Mecánica general y servicios para autos.",
    diasAtencionDesde: "Lunes",
    diasAtencionHasta: "Domingo",
    horarioAtencionDesde: "00:00",
    horarioAtencionHasta: "23:59",
    es24Horas: true,
    ubicacionGoogleMaps: "https://goo.gl/maps/ruedalibre",
    linkInstagram: "@ruedalibretaller",
    linkFacebook: "facebook.com/ruedalibretaller",
    linkPaginaWeb: "http://ruedalibre.com",
    fotoPerfil: "https://images.unsplash.com/photo-1603398938378-06dfb192b7b2",
    fotoBanner: "banner4.jpg"
  }
];
