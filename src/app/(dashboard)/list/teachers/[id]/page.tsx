const SingleTeacherPage = () => {
  return (
    <div className="flex-1 -4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div></div>
          {/* SMALL CARDS */}
          <div></div>
        </div>
        {/* BOTTOM */}
        <div className="">Schedule</div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3">Right</div>
    </div>
  );
};

export default SingleTeacherPage;
