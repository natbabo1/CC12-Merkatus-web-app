import phSquareAvatar from '../../assets/placeholderSquareAvatar.PNG';

function Avatar({ src }) {
  return (
    <div className="relative pt-[100%] rounded-lg overflow-hidden">
      <img
        className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        src={src || phSquareAvatar}
        alt="Avatar"
      />
    </div>
  );
}

export default Avatar;
