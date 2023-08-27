// eslint-disable-next-line react/prop-types
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <>
      <div className=" mx-auto  md:w-4/12 my-8">
        <p className="text-yellow-600  mb-2 text-center ">---{heading}---</p>
        <h1 className="text-3xl text-center uppercase border-slate-400 border-y-4 py-4">
        
          {subHeading}
        </h1>
      </div>
    </>
  );
};

export default SectionTitle;
