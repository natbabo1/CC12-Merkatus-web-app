function ProfileCover({ src }) {
  return (
    <div className="relative w-full pt-[30%] -mb-40 -z-10 bg-green-400 overflow-hidden">
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto"
        src={src}
        alt=""
      />
    </div>
  );
}

export default ProfileCover;
