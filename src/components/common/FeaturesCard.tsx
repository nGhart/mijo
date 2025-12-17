interface FeatureProps {
  title?: string;
  subtitle?: string;
}
const FeaturesCard = ({ f }: { f: FeatureProps }) => {
  return (
    <div className="group p-6 rounded-2xl border border-blue-200 bg-blue-500/10 backdrop-blur-xl shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-400/40 hover:border-blue-200/60 h-full">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-linear-to-br from-blue-400 to-blue-600 rounded-2xl blur-xl transition-opacity"></div>
      <h3 className="text-xl font-semibold  mb-2">{f.title}</h3>
      <p className="text-sm group-hover:text-black">{f.subtitle}</p>
    </div>
  );
};

export default FeaturesCard;
