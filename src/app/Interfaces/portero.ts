export interface Portero {
  id: string;
  nombre: string;
  apellidos: string;
  telefono: string; //Es string en caso de que el formato de numero contenga caracteres especiales
  mail: string;
  mesDisponible: number;
}
