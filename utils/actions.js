'use server'
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export const createTask = async (formData) => {
  const content = formData.get('content')
  await prisma.task.create({
    data: {
      content,
    }
  })
  revalidatePath('/tasks')
}

export const deleteTask = async (formData) => {
  const id = formData.get('id')
  await prisma.task.delete({
    where: {id},
  })
  revalidatePath('/tasks')
}

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: {id},
  })
}

export const editTask = async (formData) => {
  const id = formData.get('id')
  const content = formData.get('content')
  const completed = formData.get('completed')

  await prisma.task.update({
    where: {id},
    data: {
      content,
      completed: completed === 'on' ? true : false,
    },
  })
  redirect('/tasks')
}

export const createTaskCustom = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const content = formData.get('content')
  const Task = z.object({
    content: z.string().min(5)
  })

  try {
    Task.parse({ content })
    await prisma.task.create({
      data: {
        content,
      }
    })
    revalidatePath('/tasks')
    return {message: '成功!!!'}
  } catch (error) {
    // console.log(error.errors[0].message);
    return {message: 'error'}
  }
}

export const deleteTaskCustom = async (formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const id = formData.get('id')
  await prisma.task.delete({
    where: {id},
  })
  revalidatePath('/tasks')
}