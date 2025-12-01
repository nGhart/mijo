import image from "../../assets/image.jpg";

interface BusinessCardProps {
  title: string;
  subtitle: string;
  icon: any;
}

const BusinessCard = ({ c }: { c: BusinessCardProps }) => {
  return (
    <div className="lg:px-4">
      <div className="text-secondary">
        <img src={c.icon} alt={c.title} width={50} className="text-secondary" />
      </div>
      <p className="text-primary font-bold py-2">{c.title}</p>
      <p className="text-gray-600">{c.subtitle}</p>
    </div>
  );
};

export default BusinessCard;

{
  /*
    <div className="flex items-center justify-center gap-6 h-full">
       <div
        className="
          max-w-sm
          rounded-lg
          overflow-hidden
          shadow-lg
          bg-white
          transform
          transition-all
          duration-300
          hover:shadow-xl
          cursor-pointer
          relative
          group
        "
      >
        <img
          className="w-full h-48 object-cover transform
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-xl"
          src={image}
          alt="Product Image"
        />

        <div className="px-6 py-4">
          <div className="font-semibold text-xl mb-2 text-gray-800">
            {c.title}
          </div>
          <p className="text-gray-700 text-base">{c.subtitle}</p>
        </div>
      </div></div>
       */
}
