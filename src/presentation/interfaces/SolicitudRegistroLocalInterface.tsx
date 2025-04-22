interface SolicitudRegistroLocal {
  id: number;
  nombre: string;
  direccion: string;
  provincia: string;
  localidad: string;
  telefonoLlamadas: string;
  telefonoWhatsapp: string;
  ubicacionGoogleMaps: string;
  descripcion: string;
  diasAtencionDesde: string;
  diasAtencionHasta: string;
  horarioAtencionDesde: string;
  horarioAtencionHasta: string;
  es24Horas: boolean;
  linkInstagram: string;
  linkFacebook: string;
  linkPaginaWeb: string;
  fotoPerfil: string;
  fotoBanner: string;
  estado: string;
  categoriaNombre: string;
  usuarioNombre: string;
}