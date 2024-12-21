import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-customPurple even:bg-customYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2025/2026
        </span>
        <Image src="/more.png" alt="" width={10} height={10} />
      </div>
      <h1>1,234</h1>
      <h2>{type}</h2>
    </div>
  );
};

export default UserCard;
