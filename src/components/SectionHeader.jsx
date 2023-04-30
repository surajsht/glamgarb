const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="mb-4 text-center">
      <h2 className="mb-2 text-3xl font-bold uppercase"> {title} </h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
