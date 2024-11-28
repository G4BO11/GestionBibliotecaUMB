import { db, tabAulas, tabReservas } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(tabAulas).values(
		[
		{
			id_sala: "AUL-2024-001",
			nombre: "Sala de Lectura Individual",
			descripcion: "Una sala pequeña y tranquila, diseñada específicamente para actividades de lectura individual. Incluye iluminación personalizada y un ambiente silencioso para maximizar la concentración.",
			capacidad: 1,
			ubicacion: "Biblioteca Central, Piso 1, Sector A"
		},
		{
			id_sala: "AUL-2024-002",
			nombre: "Sala de Estudio para Parejas",
			descripcion: "Un espacio acogedor con dos escritorios y sillas cómodas, ideal para parejas que deseen estudiar juntos. La sala está equipada con enchufes cercanos y buena ventilación.",
			capacidad: 2,
			ubicacion: "Biblioteca Central, Piso 2, Sector B"
		},
		{
			id_sala: "AUL-2024-003",
			nombre: "Cabina de Grabación de Audio",
			descripcion: "Pequeña cabina insonorizada para grabaciones de audio profesional. Incluye equipo básico de grabación y aislamiento acústico de alta calidad. Perfecta para proyectos individuales o podcasts.",
			capacidad: 1,
			ubicacion: "Edificio Multimedia, Planta Baja, Sala 5"
		}
		]
	)
	// db.insert(Reservas).values(
	// 	[
	// 		{
	// 			id_reserva: "RES-2024-001",
	// 			id_sala: "AUL-2024-001",
	// 			fecha: "",
	// 			hora_inicio: "09:00",
	// 			hora_fin: "10:30",
	// 			estado: "Confirmada"
	// 		}
	// 	]
		  
	//  )
}
