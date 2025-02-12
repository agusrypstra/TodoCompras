export interface PerfilScreenProps {
    avatar: any; // Tipo `any` para evitar conflictos con imágenes importadas
    name: string;
    background: any; // Tipo `any` para imágenes de fondo
    phoneNumber?: number;
    message: string;
    description?:string,
    fotos: (number | {uri: string})[]
  }