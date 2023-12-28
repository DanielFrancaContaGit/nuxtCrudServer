import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default eventHandler(async (event) => {
    
    const userList = await prisma.user.findMany()
    
    return { userList }
})

