export default function ApiErrorMessage({ result, defaultMessage }) {
  if (!result || result.success) return <></>

  return <p class="text-red-500">Error: {result?.data?.message || defaultMessage || 'Unknown error occurred'}</p>
}
