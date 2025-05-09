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
  nombre:'Oficios',
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

export interface PerfilProps {
  id:number,
  info:{
    nombre:string,
    descripcion: string[];
    direccion:string
  },
  contacto:{
    telefono:number,
    whatsapp?:number,
    email?:string
  },
  imagenes:{
    avatar?:any,
    banner?:any,
    contenido?: [{
      imagen: any,
      descripcionImagen: string
    }]
  },
  horarios:{
      fullDay: boolean,
      dias?:{
        desde: string,
        hasta: string
      },
      hora:{
        desde:string,
        hasta:string
      }
  },
  subCategoriaId:number
}

export const usuarios: PerfilProps[] = [
  // Subcategorías para Comida (id: 1)
  {
    id: 1,
    info: {
      nombre: 'Burger House',
      descripcion: ['Hamburguesas gourmet con ingredientes frescos.'],
      direccion: 'Calle Falsa 123',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'burgerhouse@example.com',
    },
    imagenes: {
      avatar: logos.comidas,
      banner: logos.comidas,
      contenido: [
        {
          imagen: logos.comidas,
          descripcionImagen: 'Imagen de Burger House',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 1, // Subcategoría Comida
  },
  {
    id: 2,
    info: {
      nombre: 'Wok Express',
      descripcion: ['Comida asiática rápida y deliciosa.'],
      direccion: 'Avenida Siempre Viva 456',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'wokexpress@example.com',
    },
    imagenes: {
      avatar: logos.comidas,
      banner: logos.comidas,
      contenido: [
        {
          imagen: logos.comidas,
          descripcionImagen: 'Imagen de Wok Express',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 1, // Subcategoría Comida
  },
  {
    id: 3,
    info: {
      nombre: 'Taco Loco',
      descripcion: ['Tacos mexicanos auténticos.'],
      direccion: 'Calle de la Luna 789',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'tacoloco@example.com',
    },
    imagenes: {
      avatar: logos.comidas,
      banner: logos.comidas,
      contenido: [
        {
          imagen: logos.comidas,
          descripcionImagen: 'Imagen de Taco Loco',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 1, // Subcategoría Comida
  },

  // Subcategorías para Pollería (id: 2)
  {
    id: 4,
    info: {
      nombre: 'Pollo Feliz',
      descripcion: ['El mejor pollo a la brasa.'],
      direccion: 'Calle del Sol 321',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'pollofeliz@example.com',
    },
    imagenes: {
      avatar: logos.polleria,
      banner: logos.polleria,
      contenido: [
        {
          imagen: logos.polleria,
          descripcionImagen: 'Imagen de Pollo Feliz',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 2, // Subcategoría Pollería
  },
  {
    id: 5,
    info: {
      nombre: 'Kentucky Fried Chicken',
      descripcion: ['Pollo frito crujiente y delicioso.'],
      direccion: 'Avenida del Parque 654',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'kfc@example.com',
    },
    imagenes: {
      avatar: logos.polleria,
      banner: logos.polleria,
      contenido: [
        {
          imagen: logos.polleria,
          descripcionImagen: 'Imagen de KFC',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 2, // Subcategoría Pollería
  },
  {
    id: 6,
    info: {
      nombre: 'Pollo Real',
      descripcion: ['Pollo asado con sabores únicos.'],
      direccion: 'Calle de la Estrella 987',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'polloreal@example.com',
    },
    imagenes: {
      avatar: logos.polleria,
      banner: logos.polleria,
      contenido: [
        {
          imagen: logos.polleria,
          descripcionImagen: 'Imagen de Pollo Real',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 2, // Subcategoría Pollería
  },

  // Subcategorías para Carnicería (id: 3)
  {
    id: 7,
    info: {
      nombre: 'Carnes Selectas',
      descripcion: ['Carnes de la mejor calidad.'],
      direccion: 'Calle del Bosque 123',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'carnesselectas@example.com',
    },
    imagenes: {
      avatar: logos.carniceria,
      banner: logos.carniceria,
      contenido: [
        {
          imagen: logos.carniceria,
          descripcionImagen: 'Imagen de Carnes Selectas',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 3, // Subcategoría Carnicería
  },
  {
    id: 8,
    info: {
      nombre: 'La Parrilla',
      descripcion: ['Carnes asadas al carbón.'],
      direccion: 'Avenida de los Pinos 456',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'laparrilla@example.com',
    },
    imagenes: {
      avatar: logos.carniceria,
      banner: logos.carniceria,
      contenido: [
        {
          imagen: logos.carniceria,
          descripcionImagen: 'Imagen de La Parrilla',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 3, // Subcategoría Carnicería
  },
  {
    id: 9,
    info: {
      nombre: 'Embutidos Don Juan',
      descripcion: ['Embutidos artesanales de alta calidad.'],
      direccion: 'Calle del Río 789',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'embutidosdonjuan@example.com',
    },
    imagenes: {
      avatar: logos.carniceria,
      banner: logos.carniceria,
      contenido: [
        {
          imagen: logos.carniceria,
          descripcionImagen: 'Imagen de Embutidos Don Juan',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 3, // Subcategoría Carnicería
  },

  // Subcategorías para Verdulería (id: 4)
  {
    id: 10,
    info: {
      nombre: 'Frutas Frescas',
      descripcion: ['Frutas frescas y naturales.'],
      direccion: 'Calle de la Montaña 123',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'frutasfrescas@example.com',
    },
    imagenes: {
      avatar: logos.verduleria,
      banner: logos.verduleria,
      contenido: [
        {
          imagen: logos.verduleria,
          descripcionImagen: 'Imagen de Frutas Frescas',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 4, // Subcategoría Verdulería
  },
  {
    id: 11,
    info: {
      nombre: 'Verduras del Campo',
      descripcion: ['Verduras orgánicas y frescas.'],
      direccion: 'Avenida de las Flores 456',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'verdurasdelcampo@example.com',
    },
    imagenes: {
      avatar: logos.verduleria,
      banner: logos.verduleria,
      contenido: [
        {
          imagen: logos.verduleria,
          descripcionImagen: 'Imagen de Verduras del Campo',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 4, // Subcategoría Verdulería
  },
  {
    id: 12,
    info: {
      nombre: 'Hierbas Aromáticas',
      descripcion: ['Hierbas frescas y aromáticas.'],
      direccion: 'Calle del Jardín 789',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'hierbasaromaticas@example.com',
    },
    imagenes: {
      avatar: logos.verduleria,
      banner: logos.verduleria,
      contenido: [
        {
          imagen: logos.verduleria,
          descripcionImagen: 'Imagen de Hierbas Aromáticas',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 4, // Subcategoría Verdulería
  },

  // Subcategorías para Pescadería (id: 5)
  {
    id: 13,
    info: {
      nombre: 'Pescados del Mar',
      descripcion: ['Pescados frescos del mar.'],
      direccion: 'Calle del Puerto 123',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'pescadosdelmar@example.com',
    },
    imagenes: {
      avatar: logos.pescaderia,
      banner: logos.pescaderia,
      contenido: [
        {
          imagen: logos.pescaderia,
          descripcionImagen: 'Imagen de Pescados del Mar',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 5, // Subcategoría Pescadería
  },
  {
    id: 14,
    info: {
      nombre: 'Mariscos Frescos',
      descripcion: ['Mariscos frescos y deliciosos.'],
      direccion: 'Avenida del Mar 456',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'mariscosfrescos@example.com',
    },
    imagenes: {
      avatar: logos.pescaderia,
      banner: logos.pescaderia,
      contenido: [
        {
          imagen: logos.pescaderia,
          descripcionImagen: 'Imagen de Mariscos Frescos',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 5, // Subcategoría Pescadería
  },
  {
    id: 15,
    info: {
      nombre: 'Pescados Congelados',
      descripcion: ['Pescados congelados de alta calidad.'],
      direccion: 'Calle del Puerto 789',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'pescadoscongelados@example.com',
    },
    imagenes: {
      avatar: logos.pescaderia,
      banner: logos.pescaderia,
      contenido: [
        {
          imagen: logos.pescaderia,
          descripcionImagen: 'Imagen de Pescados Congelados',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 5, // Subcategoría Pescadería
  },

  // Subcategorías para Panadería (id: 6)
  {
    id: 16,
    info: {
      nombre: 'Panadería Integral',
      descripcion: ['Pan integral y saludable.'],
      direccion: 'Calle del Trigo 123',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'panaderiaintegral@example.com',
    },
    imagenes: {
      avatar: logos.panaderia,
      banner: logos.panaderia,
      contenido: [
        {
          imagen: logos.panaderia,
          descripcionImagen: 'Imagen de Panadería Integral',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 6, // Subcategoría Panadería
  },
  {
    id: 17,
    info: {
      nombre: 'Dulces y Panes',
      descripcion: ['Panes y dulces artesanales.'],
      direccion: 'Avenida de la Harina 456',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'dulcesypanes@example.com',
    },
    imagenes: {
      avatar: logos.panaderia,
      banner: logos.panaderia,
      contenido: [
        {
          imagen: logos.panaderia,
          descripcionImagen: 'Imagen de Dulces y Panes',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 6, // Subcategoría Panadería
  },
  {
    id: 18,
    info: {
      nombre: 'Pastelería La Especial',
      descripcion: ['Pasteles y postres gourmet.'],
      direccion: 'Calle del Azúcar 789',
    },
    contacto: {
      telefono: 123456789,
      whatsapp: 987654321,
      email: 'pastelerialaespecial@example.com',
    },
    imagenes: {
      avatar: logos.panaderia,
      banner: logos.panaderia,
      contenido: [
        {
          imagen: logos.panaderia,
          descripcionImagen: 'Imagen de Pastelería La Especial',
        },
      ],
    },
    horarios: {
      fullDay: false,
      dias: {
        desde: 'Lunes',
        hasta: 'Viernes',
      },
      hora: {
        desde: '10:00',
        hasta: '22:00',
      },
    },
    subCategoriaId: 6, // Subcategoría Panadería
  },
];

export interface gridElement {
  id:number;
  nombre:string;
  imagen:any
}

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
