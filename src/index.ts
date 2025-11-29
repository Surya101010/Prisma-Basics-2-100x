import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient} from '../generated/prisma/client' 

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })
async function createuser() {
    await prisma.users.create({
        data:{
            username:"Surya",
            password: "123",
            age: 20,
            city: "Chennai"
        }
    })    
}
// createuser();
async function select() {
    const users =await prisma.users.findFirst({
        where:{
            id:1
        },
        include:{
            todos:true
        }
    })
    console.log(users);
}
select();