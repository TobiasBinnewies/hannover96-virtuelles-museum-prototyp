// import mysql from 'mysql2/promise'

export async function query(query, values = []) {
//   try {
//     const dbConnection = await mysql.createConnection({
//       host: process.env.MYSQL_HOST,
//       user: process.env.MYSQL_USER,
//       password: process.env.MYSQL_PASSWORD,
//       database: process.env.MYSQL_DATABASE,
//     })
//     let [rows] = await dbConnection.execute(query, values)
//     dbConnection.end()
//     return { rows: JSON.parse(JSON.stringify(rows)) }
//   } catch (error) {
//     console.log(error)
//     return { error }
//   }
    throw { name: 'Query: Not Implemented', message: 'This function is not implemented yet!'}
}
