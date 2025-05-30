import Card from '@/components/Card'
import Button from '@/components/Button';
const Landing: React.FC =  () => {
  return (
    <>
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
      </div>
      <div className="p-8 space-y-6">
        <h1 className="text-2xl font-bold">Button Variant</h1>
        <div className="space-y-4">
        <h2 className="text-xl font-semibold">Small</h2>
        <div className="flex gap-4">
          <Button title="Small - sm" styles="text-sm rounded-sm" />
          <Button title="Small - md" styles="text-sm rounded-md" />
          <Button title="Small - full" styles="text-sm rounded-full" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Medium</h2>
        <div className="flex gap-4">
          <Button title="Medium - sm" styles="text-base rounded-sm" />
          <Button title="Medium - md" styles="text-base rounded-md" />
          <Button title="Medium - full" styles="text-base rounded-full" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Large</h2>
        <div className="flex gap-4">
          <Button title="Large - sm" styles="text-lg rounded-sm" />
          <Button title="Large - md" styles="text-lg rounded-md" />
          <Button title="Large - full" styles="text-lg rounded-full" />
        </div>
      </div>
      </div>
    </>
  )
}
export default Landing