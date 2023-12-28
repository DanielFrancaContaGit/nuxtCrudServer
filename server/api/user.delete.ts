import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default eventHandler(async (event) => {

    const where = await readBody(event)

    if (where != null) {
        try {
            const deletUser = await prisma.user.delete({
                where
            })
            
            return { deletUser}
        } catch (erro) {
            return { nsg: "Usuario de não encontrado" }
        }
    
    } else {
        return { msg: "nenhum parametro foi passado" }
    }
  
})