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
       
        <div className="flex gap-4">
          
          <Button title="rounded - sm" styles="text-sm rounded-sm" />
          <Button title="rounded- md" styles="text-base rounded-md" />
           <Button title="rounded - lg" styles="text-lg rounded-lg" />
            <Button title="rounded - full" styles="text-xl rounded-full" />
        </div>
      </div>

      
          
        
      </div>

     
      
    </>
  )
}
export default Landing
