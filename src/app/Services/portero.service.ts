import { Injectable } from '@angular/core';
import { collectionData, documentId, Firestore, getDoc, getDocs, getFirestore, query, where } from '@angular/fire/firestore';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Portero } from '../Interfaces/portero';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root',
})
export class PorteroService {


  constructor(private fires: Firestore, private fire: AngularFirestore) {}

  //Hace referencia a la conexion con firebase
  ref = collection(this.fires, 'porteros');

  //Almacenara los datos para poder hacer update en firebase
  data: string[] = [];

  addPortero(portero: Portero) {
    addDoc(this.ref, portero); //Añade un documento portero a la base de datos de firebase
  }
  //Obtiene todos los porteros de la base de datos y los devuelve al programa en forma de observable,
  //de esta forma podemos suscribirnos a el para ver sus cambios en cualquier momento
  getPorteros(): Observable<Portero[]> {
    return collectionData(this.ref, { idField: 'id' }) as Observable<Portero[]>;
  }

  //Elimina al portero de la base de datos
  deletePortero(portero: string) {
    console.log(portero)
    let ref = doc(this.fires, `portero/${portero}`);
    return deleteDoc(ref);
  }

  // getPortero(id: string): Portero {
  //   this.fire
  //     .doc(`colección/${id}`)
  //     .get()
  //     .subscribe((doc) => {
  //       let portero:Portero = doc.data() as Portero;
  //       console.log(portero.nombre)
  //       return portero;
  //     });
  //   return null
  // }
  async getPortero(id:String):Promise<Portero>{
    const db = query(this.ref, where(documentId(), '==', id))
    const consulta = await getDocs(db);
    consulta.forEach((doc) =>{
      console.log(doc.data)
      return doc.data() as Portero
    })
    return null;

  }

  // updatePortero(idPortero:string,portero:Portero){
  //   let ref = doc(this.fires, idPortero )
  //   this.data.push(
  //      portero.nombre,
  //      portero.apellidos,
  //     portero.telefono,
  //     portero.mail
  //   )

  // }
}
