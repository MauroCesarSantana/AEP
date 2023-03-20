
import app from "./app";

function main() {
    try {
   
        app.listen(3000, 'localhost', async () => {
            console.log('Iniciando o servidor')
        })
    } catch (err) {

        console.error('Erro ao iniciar servidor', err)
    }
}

main()