import { Faq } from '@/components/Faq'
import { Resources } from '@/components/Resources'
import { BridgeBanner } from '@/components/BridgeBanner'
import { DashboardData } from '@/components/DashboardData'

export const metadata = {
  title: 'sBTC Dashboard',
  description:
    'Explore a range of products and tools to kickstart your journey with sBTC.',
}


export default function Page() {
  return (
    <>
      <div className="mt-8">

        <BridgeBanner />

        <section className="mt-10">
          <div className="flex items-center gap-x-8">
            <span className="absolute left-0 block w-2 sm:w-4 h-20 bg-primary-01" />
            <h1 className="text-3xl sm:text-6xl font-bold">sBTC Dashboard</h1>
          </div>

          <DashboardData />

          <Resources />
        </section>

        <Faq />
      </div>
    </>
  )
}

