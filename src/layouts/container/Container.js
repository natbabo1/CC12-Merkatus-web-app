import { Outlet } from 'react-router-dom';

function Container() {
  return (
    <div className="bg-whisper min-h-screen max-w-7xl mx-auto mt-16">
      <Outlet />
    </div>
  );
}

export default Container;
