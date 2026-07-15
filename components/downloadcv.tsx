type DownloadCVProps = {
  rotatedButton: string;
  clickedButton: string;
  setRotatedButton: (value: string) => void;
  setClickedButton: (value: string) => void;
};

export default function DownloadCV({
  rotatedButton,
  clickedButton,
  setRotatedButton,
  setClickedButton,
}: DownloadCVProps) {
  return (
    <a
      href="temiloluwa_cv.pdf"  //Temiloluwa-Akinrujomu-CV.pdf"
      download
      onClick={() => {
        setRotatedButton("cv");
        setClickedButton("cv");
      }}
       onMouseLeave={() => {
    setClickedButton("");
  }}
      className={`flex items-center transition-transform duration-300 cursor-pointer ${
        clickedButton === "cv"
          ? "scale-125 text-[#CB1D85]"
          : "scale-100"
      }`}
    >
      <span
        className={`material-symbols-outlined transition-transform duration-300 ${
          rotatedButton === "cv" ? "rotate-45" : "rotate-0"
        }`}
      >
        bubble
      </span>

      Download CV
    </a>
  );
}