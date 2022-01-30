import { Prisma, PrismaClient, User } from "@prisma/client";

export class UsersRepository {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prismaClient.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prismaClient.user.create({
      data,
    });
  }

  async find(): Promise<User[]> {
    return this.prismaClient.user.findMany();
  }
}
