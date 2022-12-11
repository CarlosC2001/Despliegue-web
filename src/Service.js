import { collection, doc, setDoc, getDocs } from 'firebase/firestore/lite';
import { FirebaseFirestore } from './Firebase';

const crearRestaurante = async (producto) => {
    const nuevoDoc = doc(collection(FirebaseFirestore, '/productos'));
    await setDoc(nuevoDoc, producto); 
    console.log('producto creado');
}

const listarRestaurantes = async () => {
    const productosRef = collection(FirebaseFirestore, '/productos');
    const docs = await getDocs(productosRef);
    const productos = [];
    docs.forEach(document => {
        productos.push({ id: document.id,
            nombre: document.data().nombre,
            descripcion: document.data().descripcion,
            imagen: document.data().imagen });
    });
    console.log(productos);
    return productos;
    
}


export {
    crearRestaurante,
    listarRestaurantes,
}