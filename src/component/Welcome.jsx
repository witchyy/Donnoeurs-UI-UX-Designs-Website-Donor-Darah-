import React from "react";

const Welcome= () => {
  return (
    <div className="flex flex-col py-28 bg-gray-100">
      <div className="text-black text-center text-lg font-bold leading-5 tracking-[2.88px] uppercase self-center whitespace-nowrap">
      SELAMAT DATANG DI DONNOEURS
      </div>
      <div className="text-rose-700 text-center text-3xl leading-9 self-center whitespace-nowrap mt-5 max-md:max-w-full">
      TEMPAT TERBAIK MENDONOR DARAH
      </div>
      <div className="text-black text-center relative text-base leading-6 self-stretch max-w-3xl ml-60 mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim
        et.
      </div>
    </div>
  );
}

export default Welcome;
