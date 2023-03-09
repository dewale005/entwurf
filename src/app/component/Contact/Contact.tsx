import Social from "../Social/Social";

function Contact() {
  return (
    <div className="relative  bg-red-400 pt-20 pb-20 md:pb-0 px-10  lg:px-10">
      <div className="mx-auto max-w-2xl px-2 md:px-16 sm:py-20">
        <div className="text-center">
          <h1 className="text-[3.75rem] leading-[3rem] md:leading-[5rem] font-bold tracking-tight text-white opacity-70 md:text-[5.75rem]">
            Get in touch
          </h1>
          <p className="text-blue-600 text-2xl mt-10">Sketch Music</p>
          <p className="text-white tracking-wide mt-2 md:text-xl">
            hello@sketchproductmusic.com
          </p>
          <p className="text-white tracking-wide mt-2 md:text-xl">
            @sketchproductmusic.com
          </p>
          <div className="flex flex-wrap text-center -mt-4 justify-center opacity-70">
            <Social />
          </div>
          <p className="text-blue-600 text-2xl mt-8">UPM</p>
          <p className="text-white font-sansLight text-sm md:text-[1.25rem] mt-2">
            If you would like to license a track please get in touch with
          </p>
          <a
            href="https://entwurf.co.uk"
            target="_blank"
            rel="noreferrer noopener"
            className="text-white tracking-wide mt-2 md:text-xl"
          >
            hello@sketchproductmusic.com
          </a>
          <p className="text-white font-sansLight text-sm md:text-[1.25rem] mt-1">
            To speak with an account manager click on contact
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
