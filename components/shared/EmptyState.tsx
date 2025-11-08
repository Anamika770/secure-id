import Image, { StaticImageData } from "next/image";

interface EmptyStateProps {
  title?: string;
  description?: string;
  imageSrc?: string | StaticImageData ;
}

export function EmptyState({title, description, imageSrc}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10">
      {imageSrc &&
      <Image
        src={imageSrc}
        alt="Empty state"
        width={200}
        height={200}
        className="mb-6 opacity-90"
      />
      }
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-500 text-sm mt-2 max-w-sm">{description}</p>
    </div>
  );
}
