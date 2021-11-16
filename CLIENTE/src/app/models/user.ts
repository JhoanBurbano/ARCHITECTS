// export function Usuario(nombre:string, apellido, identificacion,telefono, email, password, rol){

// }

export class Usuario {
  constructor(
    public name: string,
    public lastname: string,
    public number: number,
    public email: string,
    public password: string,
    public rol: string
  ) {}
}
