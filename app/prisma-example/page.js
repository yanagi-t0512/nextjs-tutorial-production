import prisma from '@/utils/db'

const prismaHandlers = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: '業務開始'
  //   },
  // })

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return allTasks
}

const PrismaPage = async () => {

  const tasks = await prismaHandlers()
  console.log('prismaページ tasks', tasks)

  return (
    <div>
      <h1 className="text-7xl">Prismaページ</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className='text-xl py-2'>
            {task.content}
          </h2>
        )
      })}
    </div>
  )
}

export default PrismaPage
