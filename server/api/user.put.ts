import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default eventHandler( async (event) => {

    const email = await readBody(event).then((body) => {return body.email})
    const userNewInformations = await readBody(event).then((body) => {return body.user})

    if (email != null) {
        try {
            const updateUser = await prisma.user.update({
                where: {
                    email: email
                },
                data: userNewInformations
            })
            return { updateUser }
        } catch (erro) {
            return { 
                msg: "não foi possivel atualizar o usuario", 
                erro
            }
        }
        
    }
})