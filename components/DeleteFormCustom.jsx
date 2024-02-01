'use client'
import { deleteTaskCustom } from "@/utils/actions"
import { useFormStatus } from 'react-dom'

const SubmitBtn = () => {
  const {pending} = useFormStatus()

  return (
    <button type="submit" className="btn btn-xs btn-error"
    disabled={pending}>
      {pending? '削除しています...' : '削除（c）'}
    </button>
  )
}

const DeleteFormCustom = ({id}) => {
  return (
    <form action={deleteTaskCustom}>
      <input type="hidden" name="id" value={id} />
      <SubmitBtn />
    </form>
  )
}

export default DeleteFormCustom