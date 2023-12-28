import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default eventHandler(async (event) => {
    const body = await readBody(event)

    if (body != null) {
        
        const user = body
        const createUser = await prisma.user.create({ data: user })
        return { createUser } 

    } else {
        return { mensagem: "body não encontrado" }
    }

})