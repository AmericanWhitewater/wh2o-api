import { FeatureCharacter, PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker"

import { reachClasses } from "../src/lib/reach-classes"
import { featureClasses } from "../src/lib/feature-classes"

const prisma = new PrismaClient()

const randomArrayItem = <K>(arr: K[]): K => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const seedGages = async () => {
  const mockGages = [...Array(100)].map(() => ({
    name: faker.company.name(),
    state: faker.location.state(),
  }))

  await Promise.all(
    mockGages.map(async (gage, idx) => {
      await prisma.gage.upsert({
        where: { id: idx + 1 },
        update: {},
        create: {
          ...gage,
          reach: {
            connect: {
              id: randomArrayItem([1, 2, 3, 4, 5]),
            },
          },
        },
      })
    })
  )
}

const seedFeatures = async () => {
  const mockFeatures = [...Array(100)].map(() => ({
    name: faker.company.name(),
    grade: randomArrayItem(featureClasses),
    character: randomArrayItem(Object.values(FeatureCharacter)),
    distance: faker.number.float({ min: 0, max: 100 }),
  }))

  await Promise.all(
    mockFeatures.map(async (feature, idx) => {
      const id = idx + 1

      await prisma.feature.upsert({
        where: { id },
        update: {},
        create: {
          ...feature,
          reach: {
            connect: {
              id: randomArrayItem([1, 2, 3, 4, 5]),
            },
          },
        },
      })

      await prisma.$queryRaw`UPDATE "public"."Feature" SET location = ST_SetSRID(ST_Point((RANDOM() * 360) - 180,(RANDOM() * 180) - 90), 4326) WHERE id = ${id}`
    })
  )
}

const seedEvents = async () => {
  const mockEvents = [...Array(100)].map(() => ({
    name: faker.company.name(),
    state: faker.location.state(),
  }))

  await Promise.all(
    mockEvents.map(async (event, idx) => {
      await prisma.event.upsert({
        where: { id: idx + 1 },
        update: {},
        create: {
          ...event,
          reach: {
            connect: {
              id: randomArrayItem([1, 2, 3, 4, 5]),
            },
          },
        },
      })
    })
  )
}

const seedReaches = async () => {
  const mockReaches = [...Array(100)].map((_, idx) => ({
    id: idx + 1,
    river: faker.company.name(),
    state: faker.location.state(),
    section: faker.location.street(),
    grade: randomArrayItem(reachClasses),
  }))

  await Promise.all(
    mockReaches.map(async (reach) => {
      await prisma.reach.upsert({
        where: { id: reach.id },
        update: {},
        create: reach,
      })
      await prisma.$queryRaw`UPDATE "public"."Reach" SET geom = ST_GeomFromText('LINESTRING(-114.5 45.1, -114.3 44.9, -114.1 44.8, -113.9 44.7)', 4326) WHERE id = ${reach.id}`
    })
  )
}

async function main() {
  await seedReaches()
  await seedEvents()
  await seedFeatures()
  await seedGages()

  await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      posts: {
        create: {
          title: "Check out Prisma with Next.js",
          content: "https://www.prisma.io/nextjs",
          published: true,
          reachId: 1,
        },
      },
    },
  })
  await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      name: "Bob",
      posts: {
        create: [
          {
            title: "Follow Prisma on Twitter",
            content: "https://twitter.com/prisma",
            published: true,
            reachId: 1,
          },
          {
            title: "Follow Nexus on Twitter",
            content: "https://twitter.com/nexusgql",
            published: true,
            reachId: 2,
          },
        ],
      },
    },
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
