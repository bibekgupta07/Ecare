
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center  gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Bibek Gupta
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit officiis, accusantium perferendis mollitia reiciendis
          quis, illo distinctio maxime nam repudiandae eos delectus! Ex rerum
          deserunt nam saepe facere iste adipisci?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div className="">
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2011")} - {formateDate("12-04-2015")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, Balkumari
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div className="">
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2008")} - {formateDate("11-02-2011")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Ms in Neurology
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, Balkumari
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formateDate("12-04-2008")} - {formateDate("11-02-2011")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
               Sr. surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, Balkumari
            </p>
          </li>

          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formateDate("12-04-2008")} - {formateDate("11-02-2011")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
               Sr. surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, Balkumari
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;