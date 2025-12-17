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
