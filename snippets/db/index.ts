import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: "file:./dev.db" });
export const db = new PrismaClient({ adapter });


// import { PrismaClient } from "@prisma/client";
//
// export const db = new PrismaClient();