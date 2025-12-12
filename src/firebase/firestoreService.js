import { db } from "./config";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const requestsCollection = collection(db, "solicitudes");

// Crear nueva solicitud
export async function createSolicitud(data) {
  await addDoc(requestsCollection, {
    ...data,
    createdAt: Date.now(),
  });
}

// Escuchar solicitudes en tiempo real
export function subscribeSolicitudes(callback) {
  const q = query(requestsCollection, orderBy("createdAt", "desc"));

  return onSnapshot(q, (snapshot) => {
    const docs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(docs);
  });
}
