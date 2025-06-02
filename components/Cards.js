import Image from "next/image";


export default function Cards({ title, description, image }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300">
      <div className="relative mb-6">
        <Image
          className="absolute -top-6 -left-6 w-10 h-10 rounded-full"
          src={image}
          alt="Project Image"
          width={20}
          height={20}
        />
      </div>
      <h2 className="text-zinc-700 font-bold text-2xl mb-2 pt-2 text-left">
        {title}
      </h2>
      <p className="text-zinc-700 mb-4 text-left">{description}</p>
    </div>
  );
}
