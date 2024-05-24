import Right from "/Icons/Right2.svg"

const Cardi = () => {
  return (
    <div className="relative flex flex-col rounded gap-5 z-50 w-full p-10 bg-white shadow-xl shadow-black/40 hover:shadow-3xl hover:shadow-black/60 group hover:bg-[#FF3946] duration-500">
        <div>
      <h4 className="font-semibold group-hover:text-white  text-[#314584]">New Adventure</h4>
      <p className="text-sm text-[#314584] group-hover:text-white">17 March 2019</p>
        </div>
      <p className="text-[#314584] group-hover:text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Aliquid est
        alias ullam, dolore deserunt earum tempora cum accusamus perspiciatis
        eius temporibus doloribus quasi modi quia esse atque officia <br /> porro
        numquam.
      </p>
      <div className="flex justify-end w-full cursor-pointer group-hover:invert">
        <img src={Right} className="h-10" alt="" />
      </div>
    </div>
  );
};

export default Cardi;
