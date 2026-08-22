import 'dotenv/config'
import app from './app'
import { initDatabase } from './databases/database'

const PORT = process.env.PORT ?? 3000

async function main() {
  try {
    await initDatabase()

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${String(PORT)}`)
    })
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error)
    process.exit(1)
  }
}

main().catch(console.error)
