import { useUser } from '../api/user/hooks'
import Loading from './Loading'

export default function WithUser({ id, render }) {
  const { result } = useUser(id)

  return <Loading result={result} render={render} />
}
