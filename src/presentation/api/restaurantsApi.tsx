import { Restaurant } from "../interfaces/Restaurant";

export const restaurantsData: Restaurant[] = [
    { 
      id: 1, 
      nombre: "Restaurant Los Pines", 
      direccion: "San Martín 1234", 
      telefonos: 123456789, 
      productos: [
        { id: 1, nombre: "Pizza Margarita", foto: "https://via.placeholder.com/150" },
        { id: 2, nombre: "Ensalada César", foto: "https://via.placeholder.com/150" },
        { id: 3, nombre: "Pasta Alfredo", foto: "https://via.placeholder.com/150" },
        { id: 4, nombre: "Tiramisú", foto: "https://via.placeholder.com/150" },
      ]
    },
    { 
      id: 2, 
      nombre: "La Casa de la Parrilla", 
      direccion: "Belgrano 4567", 
      telefonos: 234567890, 
      productos: [
        { id: 1, nombre: "Asado de Tira", foto: "https://via.placeholder.com/150" },
        { id: 2, nombre: "Provoleta", foto: "https://via.placeholder.com/150" },
        { id: 3, nombre: "Choripán", foto: "https://via.placeholder.com/150" },
        { id: 4, nombre: "Flan Casero", foto: "https://via.placeholder.com/150" },
      ]
    },
    { 
      id: 3, 
      nombre: "Sabores del Campo", 
      direccion: "Av. Libertad 890", 
      telefonos: 345678901, 
      productos: [
        { id: 1, nombre: "Empanadas de Carne", foto: "https://via.placeholder.com/150" },
        { id: 2, nombre: "Locro", foto: "https://via.placeholder.com/150" },
        { id: 3, nombre: "Tamales", foto: "https://via.placeholder.com/150" },
        { id: 4, nombre: "Postre Vigilante", foto: "https://via.placeholder.com/150" },
      ]
    },
    { 
      id: 4, 
      nombre: "Delicias Italianas", 
      direccion: "Italia 2345", 
      telefonos: 456789012, 
      productos: [
        { id: 1, nombre: "Lasagna", foto: "https://via.placeholder.com/150" },
        { id: 2, nombre: "Ravioles", foto: "https://via.placeholder.com/150" },
        { id: 3, nombre: "Panacota", foto: "https://via.placeholder.com/150" },
        { id: 4, nombre: "Tiramisu", foto: "https://via.placeholder.com/150" },
      ]
    },
    { 
      id: 5, 
      nombre: "Mariscos del Puerto", 
      direccion: "Av. Costanera 789", 
      telefonos: 567890123, 
      productos: [
        { id: 1, nombre: "Paella", foto: "https://via.placeholder.com/150" },
        { id: 2, nombre: "Ceviche", foto: "https://via.placeholder.com/150" },
        { id: 3, nombre: "Langosta", foto: "https://via.placeholder.com/150" },
        { id: 4, nombre: "Pescado al Horno", foto: "https://via.placeholder.com/150" },
      ]
    },
    // Continúa para los demás restaurantes...
  ];
  