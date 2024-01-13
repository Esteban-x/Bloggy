'use client'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

const NavigationTestPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const q = searchParams.get('q')

  console.log(q)

  const handleClick = () => {
    console.log('cest ok')
    router.forward()
  }

  return (
    <div>
      <Link href="/" prefetch={false}>
        Test
      </Link>
      <button onClick={handleClick}>Test</button>
    </div>
  )
}

export default NavigationTestPage
