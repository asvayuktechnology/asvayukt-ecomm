import Image from "next/image";

export default function TestimonialCard({ testimonial }) {
  const { name, role, company, message, image, title } = testimonial;

  return (
    <div className="bg-white rounded-md p-5 border border-gray-100 space-y-4">
      {/* Stars */}
      <div className="flex gap-1 text-yellow-400 text-sm">
        {Array(5)
          .fill("★")
          .map((star, i) => (
            <span key={i}>{star}</span>
          ))}
      </div>

      {/* Title */}
      <h4 className="font-semibold text-gray-700">{title}</h4>

      {/* Message */}
      <p className="text-sm text-gray-600 leading-relaxed">{message}</p>

      {/* Profile */}
      <div className="flex items-center gap-3 pt-2">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">
            {role}
            {company ? `, ${company}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
