import ComponentCard from '../components/component-card/component-card'
import CardGrid from '../components/card-grid/card-grid';

function GpuPage() {

  return <>
    <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-4xl mx-auto'>
      <CardGrid>
        <ComponentCard/>
        <ComponentCard/>
        <ComponentCard/>
        <ComponentCard/>
        <ComponentCard/>
        <ComponentCard/>
        <ComponentCard/>
        <ComponentCard/>
      </CardGrid>
    </main>
  </>
}

export default GpuPage;