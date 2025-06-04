const SectionHeading = ({ title, align = "center" }) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={`w-full flex flex-col ${alignment[align]} mb-4`}>
      <div className="flex justify-center items-center gap-2">
        <h2 className="text-2xl md:text-3xl font-semibold flex gap-2">
          <span className="text-gray-600">{title?.gray}</span>
          <span className="text-gray-800">{title?.dark}</span>
        </h2>
        <p className="w-8 sm:w-12 h-0.5 bg-gray-700"></p>
      </div>
    </div>
  );
};

export default SectionHeading;
