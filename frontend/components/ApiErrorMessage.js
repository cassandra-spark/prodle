export default function ApiErrorMessage({ result, defaultMessage }) {
  if (!result || result.success) return <></>

  return <p className="text-red-500">Error: {result?.data?.message || defaultMessage || 'Unknown error occurred'}</p>
}
