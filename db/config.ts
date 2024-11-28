import { column, defineDb, defineTable} from 'astro:db';

const tabAulas = defineTable({
  columns: {
    id_sala: column.text({ primaryKey: true}),
    nombre: column.text(),
    descripcion: column.text(),
    capacidad: column.number(),
    ubicacion: column.text() 
  }
})
const tabReservas = defineTable({
  columns: {
    id_reserva: column.text({ primaryKey: true}),
    id_sala: column.text({ references: ()=> tabAulas.columns.id_sala}),
    fecha: column.date(),
    hora_inicio: column.text(),
    hora_fin: column.text(),
    estado: column.text()
  }
})

export default defineDb({
  tables: {tabReservas, tabAulas}
});


