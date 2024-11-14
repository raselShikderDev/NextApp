import Image from "next/image";
import Button from "../component/Button";
import nextImg from "@/public/image1.jpg"

export default function ContactUs() {
  return (
    <div className="mt-16 space-y-5">
      <p>Welcome to Contact us Page</p> 
      <div className="space-y-5">
        <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus aut quo cum ullam, recusandae nisi quia ea beatae optio omnis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta temporibus id dolore blanditiis quos facere aliquid! Enim quasi eum dignissimos.</p>
        <Button/>
        <div className="max-w-[400px]">
          <Image placeholder="blur" alt="NextThum" src={nextImg}></Image>
        </div>
      
      </div>
    </div>
  )
}
