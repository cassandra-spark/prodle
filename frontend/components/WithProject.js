import { useProject } from '../api/project/hooks'
import Loading from './Loading'

export default function WithProject({ id, render }) {
  const { result } = useProject(id)

  return <Loading result={result} render={render} />
}
