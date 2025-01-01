import { IoCloudUploadOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20 ">
      {/* left side */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text:6xl font-bold text-neutral-700 leading-tight">
          Remove the <br />{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br /> images for free.
        </h1>
        <p className="my-6 text-[15px] text-gray-500">
          Transform your photos in seconds! Our advanced background remover
          effortlessly clears out <br /> unwanted backdrops, giving you perfect
          images every time. Simple, fast, and effective—try it now!
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer  bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 "
          >
            <IoCloudUploadOutline className="translate-y-1 w-6 h-6" />
            <p>Upload your image</p>
          </label>
        </div>
      </div>
      {/* right side */}
      <div></div>
    </div>
  );
}

export default Header;
