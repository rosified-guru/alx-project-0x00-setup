import { ButtonProps } from "@/interfaces";


const Button:React.FC<ButtonProps> = ({ title, styles = "" }: ButtonProps) => {
  return (
   <button 
   className={`bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700 transition-all ${styles}`}
   >
        {title}
   </button>
  );	
};

export default Button;